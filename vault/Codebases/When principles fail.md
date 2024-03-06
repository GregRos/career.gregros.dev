One of my favorite pieces of writing about programming – counting books, blog posts, and religious works – is the C++ Super-FAQ.

That’s not because I write in C++. Like many, I know the language fairly well but I’ve never been in a situation where I needed to use it (except, maybe, university). No, the reason I love it so much is because of the stress it places on something I don’t hear repeated a lot.

Namely, that in software **one size does not fit all.** There are always cases when **best practices must not be followed** and when breaking convention is absolutely necessary. This means there are no universal rules that must always be applied.

This statement works at every scale and at every level, though the frequency of these counter-examples vary. For instance, there exist:
1. Functions that should be hundreds of lines long.
2. Interfaces that should be replaced with classes.
3. Identifiers that should break naming conventions.
4. Bits of code that should be repeated.
5. Behavior that should be undefined.
6. Components that should be closely coupled.
7. Processes that must not be fragile (i.e. they must not fail fast)
8. 
9. And so on.

All of these things are true because conventions are written to be simple, catchy, and easy to enforce. But code is often a messy compromise between different factors, written to solve very specific problems that often differ greatly from each other. 

Another common convention-breaker is the potential for human error. Understanding the nature of human error comes from pure experience. That’s because different people err differently, and if you only have experience with the errors *you* tend to make, you’ll be blind to the mistakes of others.

Sometimes, fighting human error can only be done by deploying anti-patterns. Some areas of a system can have very different characteristics from other areas, and 

In fact, there could be many different reasons for breaking these rules.
1. Sometimes, following a best practice leads to a solution that is worse than the problem it solves.
2. Software development is always a messy compromise between different factors, and 
These are all true because software development is always a compromise between 

This is true because software development is always, always a compromise. It’s also true because bad practice is context-dependent, and there are contexts that turn it on its head.








