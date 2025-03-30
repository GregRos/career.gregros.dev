---
type: Library
period:
  - 2012.1-2016.3
link: https://imms.github.io
role:
  - Lead
users: "?"
end-users: —
contributors: "1"
platform:
  - dotnet
  - mono
icon: "[[Imms_Icon.png]]"
language:
  - csharp
  - fsharp
cssclasses:
  - Project
desc: Immutable data structures in C#
---
> [!infobox]
>  
> |  [Imms](https://imms.github.io) | Library|
> | ---- | ---- |
> | Platform | #dotnet #mono|
> | Language | #csharp #fsharp |
> | Role | Founder |
> | Period | 2012 – 2016 |
> | Downloads | 10K on [NuGet](https://www.nuget.org/packages/Imms#versions-body-tab) |
> | Contributors | 2 |
> | Try It | [Replit (C#)](https://replit.com/@GregRos/ImmsSandbox#collections/mixed.cs) |

Imms is a library of high performance #immutable collections for .NET. These are collections that can’t be modified. Instead, they support operators that return a new collection with modifications, kind of like how $+$ works in math. These kinds of collections are popular in #functional languages.

That is, doing $1 + 2 = 3$ doesn’t modify $1$ or $2$. It only returns a new mathematical object. 
> [!column|no-title flex]
> > [!success] Optimal complexity
> > Achieved by taking algorithms straight out of research papers.
> 
> > [!success] High performance
> > Optimized extensively using benchmarks and CPU profiling.
> 
> >[!success] Uniform API
>> Designed a uniform API spanning five collections and dozens of operations.
>
> > [!success] Rigorous testing
> > Ran hundreds of consistency tests to make sure it works.
# How it works
![[Imms-Architecture.svg]]
The library has three layers.
## Implementation layer (Blue)
These are implementations of the different data structures. 
- **FTree** – A highly optimized variant 2-3-4 [finger tree](https://en.wikipedia.org/wiki/Finger_tree) with advanced algorithms.
- **HashedAvlTree** – A hash-based AVL tree.
- **SortedAvlTree** – A sorted AVL tree.
The library used to have an array-mapped trie and hash array-mapped trie, but I got rid of them because their performance didn’t justify the added complexity.
## Abstract layer (Green)
I planned the library to provide 2 variants for sets and maps (sorted and hashed), for all collections to provide high-performance and strongly typed LINQ method overrides, and additional functionality besides.

I knew a lot of these operations would be shared among the different variants and I wanted to avoid code duplication. That’s why I made an abstraction layer, inspired by Scala’s collection API. It’s a lot less sophisticated but it still let me avoid writing out the same algorithms twice.
## Collection layer (Pinkish)
These are the collections that combine the two layers above. They contain instances of data structures and extend classes from the abstract layer. This combination lets me avoid code duplication.
# Userbase
Has 10,000 downloads on.



