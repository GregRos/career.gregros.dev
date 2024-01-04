---
type: Library
period:
  - 2012-2016
link: https://imms.github.io
role:
  - Lead
users: "?"
end-users: "?"
contributors: "1"
platform:
  - dotnet
  - mono
tagline: High-performance immutable collections for .NET
---
Imms is a full-featured library of #immutable data structures supporting a wide variety of operations, written in #csharp.

I started working on it when there were few competitors. However, by the time I finished, Microsoft released their own package of immutable data structures, and today it’s fully integrated into the framework. This largely made Imms unnecessary.

![[Projects/P_Imms/Achievements|no-title clean]]


# Lessons
At the same time, I learned some hard lessons.

> [!failure] a
> dsffdf

## Optimal complexity


## Complex algorithms



I kept working on the library anyway and even benchmarked my collections against the official ones. You can see the benchmarks on the library’s site. In most cases, my implementations were superior in terms of functionality and performance.

Besides the data structures themselves, the library also implemented a set of generic, high-performance operations that were shared among all the collections in the same way as #scala. Although they were implemented once, they always returned a collection of the same type as the input.

However, #csharp doesn’t have Scala’s type system, so this involved a lot more boilerplate and code generation.
# What I achieved
> [!column] 
> >[!success] Algorithm implementations
> > Implemented algorithms from research papers and reference works.
> 
> > [!success] Micro-optimization
> > Minimized allocations, encouraged inlining, and poured over compilation results.

# Why I wrote it
I read an article by [Eric Lippert](https://ericlippert.com/2007/11/13/immutability-in-c-part-one-kinds-of-immutability/) which intrigued me, and I soon began playing around with them. That’s when things started to get out of control.
# How it works
Imms implements a number of immutable and persistent data structures from several sources, such as books and research papers. Imms places a strong emphasis on a consistent, powerful, and expressive API, but it’s also aggressively optimized and rigorously benchmarked. 
# Userbase
I don’t think anyone used it.

When I started work on the library, I saw it breaking new ground as there were few libraries of its type. However, somewhere during development Microsoft released an official package for immutable collections and integrated them into .NET. That’s when interest in it just died.



