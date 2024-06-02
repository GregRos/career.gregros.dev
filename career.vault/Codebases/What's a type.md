What is the difference between a type and a program?

One might say that a type is just a type, while a program is executable code with `if` statements, looping, and functions. 

That’s a surprisingly deep question.  

# The OG: Type theory
Type theory is the OG of the types we use in programming languages. They are the basis of many of the things we can do with them.



In mathematics, there are no special cases – the behavior of something like a type is governed by a set of explicit rules, called axioms, which don’t need to be justified. They are usually basic principles of what a thing is and how it can be interacted with.

For example, here are the axioms for counting numbers:
1. $0$ is a **number**.
2. The syntax $S(x)$ is the *successor* of $x$. If $x$ is a **number**, then so is its successor.
3. For every two **numbers** $x, y$, if the *successor* of $x$ is equal to the *successor* of $y$.
   That is, if $S(x) = S(y)$ then $x = y$.
4. $0$ is not the *successor* of any **number**. That is, there is no $x$ so that $S(x) = 0$.

A theorem is anything we can prove from the axioms. Together, axioms and theorems say everything that can be said about numbers. 

Types were originally invented by a mathematician who wanted to fix the issues that were plaguing the **mathematical set** structure, an abstract, unordered list. 

To give a simplified example of how this works, here is a set of axioms about Apple Theory:

1. An Apple has three qualities: **color**, **size**, and **taste**
2. The **color** of an apple can be either *red* or *green*.
3. The **size** of an apple is a real number.
4. The **taste** of an apple is a natural number ranging from $0$ to $\infty$ 

Apple Theory references the concepts of real numbers and natural numbers from normal math, but it introduces a new structure – the Apple. 