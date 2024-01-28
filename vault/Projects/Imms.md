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
> | Role | Lead |
> | Period | 2012-2016 |
> | Users | ? |
> | Contributors | 2 |

Imms is a library of high performance #immutable collections that support a wide variety of operations, written in #csharp. By the time I finished developing it Microsoft had released their own package and integrated it into the framework.

I did however achieve much higher performance.
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
The library is massive in terms of scope, complexity, and just lines of code. However, that scale is carefully structured to be maintainable and readable. 

It’s divided into several components:
1. An abstraction layer that provides generic implementations for various operations.
2. The data structure implementations.
3. Wrappers combining the two.

The library maintains strict separation between the implementations and the APIs.
## Data structures
The library implements the following data structures:

1. `FTree`, a heavily optimized variant 2-3-4 finger tree. Used for `ImmList`.
2. `HashedAvlTree` and `OrderedAvlTree`, used to implement sets and maps.

The library used to have additional data structures, but I got rid of them because their performance didn’t justify the added complexity.
1. `TrieVector`, an array-mapped Trie.
2. `TrieDictionary`, a hashed array-mapped Trie.

# Users 
Has 10,000 downloads on [NuGet](https://www.nuget.org/packages/Imms#versions-body-tab).



