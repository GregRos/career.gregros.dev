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
icon: "[[Projects/P_Imms/Icon.png]]"
---
> [!infobox]
> ![[Projects/P_Imms/Icon.png]]
> # [Imms](https://imms.github.io)
> 
> |  | |
> | ---- | ---- |
> | Type | Library |
> | Platform | #dotnet #mono|
> | Role | Lead |
> | Period | 2012-2016 |
> | Users | ? |
> | End-users | ? |
> | Contributors | 1 |

Imms is a library of #immutable collections that support a wide variety of operations, written in #csharp. 

I started working on it when there were few competitors. However, by the time I finished, Microsoft released their own package of immutable data structures, and today it’s fully integrated into the framework. 

It made it hard to see anyone using my work after that, so I ended up finishing it but losing interest soon afterwards.

![[Projects/P_Imms/Achievements|no-title clean]]

# How it works
The library consists of three data structures:

- `FingerTree`, a 2-3-4 variant finger tree used to implement `ImmList`.
- `HashedAvlTree`, used to implement `ImmSet` and `ImmMap`.
- `OrderedAvlTree`, used to implement `ImmSortedSet` and `ImmSortedMap`




# Users 
I don’t think anyone used it except for me, and even that for a short time.



