---
title: TypeScript
level: 5
aliases: TypeScript
---
# React
Developed single-page applications using React and TypeScript for clients in various industries, such as tourism. 
# Purposes
- [[Web UI]] #eternitech
- Microservices #reflectiz 
- Monoliths #reflectiz #eternitech 
- Platform-agnostic libraries #reflectiz #preszr #parjs 
- Protocol implementations #wampus
- Interface-only packages #reflectiz 
- [[Toolsmith|CLI tools]] #reflectiz 
# Configurations
- Strict or loose
- ESM or CommonJS
- Multiple projects with references between them
# #parjs 
As a parser-combinator library, #parjs has an advanced functional interface. It uses a pipe operator similar to [[reactive|rxjs]], with the different combinators being highly generic functions that transform parsers into other, related parsers.

```typescript
const tupleElement = float();
const paddedElement = tupleElement.pipe(between(whitespace()));
const separated = paddedElement.pipe(manySepBy(","));
const surrounded = separated.pipe(between("(", ")"));
console.log(surrounded.parse("(1,  2 , 3 )"));
```

# #wampus 
An open-source library that implements the WAMP protocol, a JSON-based RPC protocol with multiple advanced features, such as cancellation, progress reports, authentication, multiple transports, and so on.

I designed the library 

# DSL #reflectiz 
I developed a set of functions and conventions that formed a DSL for automating a web browser. It used the TypeScript compiler as a type checker.

Here is an example of how it looks like:
```typescript
```

