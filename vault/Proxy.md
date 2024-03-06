Explorer has multiple components, and one of them is the GSS. This is a small but crucial part of the explorer system. Although it accounts for maybe 10% of its codebase, it’s responsible for gathering a lot of data about JavaScript activity in the page.

The GSS itself consists of multiple modules that are bundled and then injected into the page’s JavaScript environment. This happens in every single iframe and is part of the instrumentation process that all resources go through.

The GSS has a large number of functions, including:
- Instrumenting JavaScript files
- Parsing the call stack
- Tracking async operations
- Communicating with the rest of the explorer system

However, one of the most important things it does is *hijacking the environment*. What this means is keeping track of specific function calls and property access. This part of the GSS tracks access to sensitive inputs, for instance.

One question I’m sometimes asked is:
> Why doesn’t hijacking use JavaScript proxy objects?

This is a good question and answering it can shed some light on how JavaScript and browsers work.
# How hijacking works today
The GSS hijacks operations by directly replacing specific methods and properties. It does something like this for methods:

```typescript
const original = HTMLElement.prototype.setAttribute;

HTMLElement.prototype.setAttribute = function (...args) {
	sendReport("Element.setAttribute", args);
	return original.apply(this, args);
}
```

And something like this for properties:
```typescript
const original = Object.getOwnPropertyDescriptor(
	HTMLInputElement.prototype,
	"value"
)
Object.defineProperty(HTMLInputElement.prototype, "value", {
	get() {
		sendReport("input.value")
		return original.get.call(this)
	}
})
```

This part of the explorer system has worked this way since Ysrael wrote the first lines of code back in 2017.

Let’s take a look at how proxy objects work and why they seem like a good choice to replace this mechanism.
# How proxy objects work
A proxy wraps another object. It allows us to intercept basic JavaScript operations if they are invoked through the proxy, while allowing operations we’re not interested in handling to pass through.

This allows the Proxy object to pretend to be something else – like an array – but act differently under specific circumstances. Here is an example that creates an array that lies about its length:

```typescript
const originalArray = [];
const proxiedArray = new Proxy(originalArray, {
	get(target, key) {
		if (key === "length") {
			return 0;
		}	
		return Reflect.get(...arguments);
	}
}).

proxiedArray.push(1, 2, 3);
console.log(proxiedArray[1]); // 2
console.log(proxiedArray.length); // 0
```

Crucially, this doesn’t change the original object. It can still be used normally if someone has a reference to it. 

```typescript
console.log(originalArray.length); // 3
```

Proxy objects are quite powerful and can intercept a wide variety of basic JavaScript operations:
1. Reading properties and invoking methods (indirectly)
2. Modifying properties
3. Attempts to determine the prototype of an object.

However, there are a number of challenges in making them work for hijacking.
# The challenge
Like I said, using a proxy doesn’t change the object being proxied. Anyone who already had a reference to the original object will still be able to access it directly. As a consequence, to hijack a thing using a proxy we have to **replace** *all references* to that thing with references to the proxy.

This already means we can’t hijack certain objects using this technique at all:
1. The `window` global object.
2. The immediate prototypes of DOM nodes, such as `HTMLInputElement`.

This is because references to them are held in native code by the browser itself. As an example of this, we can overwrite `HTMLInputElement` but this won’t change the functionality of actual input elements because they have their own reference to the prototype:

```typescript
HTMLInputElement.prototype = {
	tagName: "I'm broken"
}
const input = document.createElement("input")
console.log(input.tagName); // INPUT
```

These are some of the most important things we monitor, so for these objects, we’d still need to use the existing solution – the one that already works for everything.
# Another challenge
Meanwhile, DOM nodes themselves can’t be proxied at all. Let’s take a look at this code:
```typescript
const hijackedElement = new Proxy(
	document.createElement("div"), 
	{}
);
```

This code creates a no-op proxy that acts like the object being proxied. It should act exactly like the original object. 

However, it seems something isn’t quite right, because we can’t use it like we’d use a regular DOM node.
```typescript
document.body.appendChild(hijackedElement)
// ! Uncaught TypeError: Node.appendChild: Argument 1 does not implement interface Node.
```

How does the `appendChild` function break the laws of JavaScript and figure out our deception?

Well, the key is that `appendChild` isn’t a JavaScript function. It’s a function implemented in the browser’s native language – usually, `C++`. Instead of taking a JavaScript object as a parameter, functions implemented in native code accept a **pointer to a data structure** describing a JavaScript object.

This pointer is uniquely identifiable and the data structure contains complete information about the object’s type – `Proxy` – and any data and functionality it possesses. Functions implemented in native code work directly on this data structure instead of applying JavaScript operations, so the proxy functionality doesn’t come into play.
# A third approach
While the direct prototypes of DOM nodes can’t be replaced with proxies, their parent – `HTMLElement` – can. Not without difficulty, however.

In a perfect world, we might be able to do something like this:
```typescript
HTMLElement.prototype = new Proxy(/* ... */)
```

However, recall what I said earlier:

> … to hijack a thing using a proxy we have to **replace** *all references* to that thing with a reference to the proxy.

In this case, every prototype chain has a separate reference to `HTMLElement`.  This means the above code won’t work, and we instead need to insert our proxy into every single prototype chain:

```typescript
Object.setPrototypeOf(HTMLInputElement.prototype, htmlElementProxy)
Object.setPrototypeOf(HTMLScriptElement.prototype, htmlElementProxy)
// ...
```

We must be careful to do this to every single reference because if we only replace some of them, the browser environment will be broken in detectable ways. Proxies, after all, can’t intercept using the `===` operator.

```typescript
const inputProtoProto = Object.getPrototypeOf(HTMLInputElement.prototype);
if (inputProtoProto !== HTMLElement.prototype) {
	throw new Error("Something weird is happening!")
}
```
## And then what?
Let’s say we’ve done that. In our new environment, we’ve replaced all occurrences of the original `HTMLElement` with our proxy. 

That is, instead of selectively modifying the parts of the environment we want to track in careful ways, we’ve replaced large parts of it with our code. Not only is the result going to be **far less stable**, it also has [complicated and wide-reaching performance ramifications.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 

And, as I said earlier, this method can’t be used at all in some cases. Meaning we’re going to keep using the existing solution in some situations anyway. The same existing solution that has barely changed for years because it works fine as it is.

So, after all that, I think I can safely conclude that **using proxies for hijacking is a worse solution to a problem that has already been solved.**
