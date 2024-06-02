---
type: Library
period:
  - 2021.6-now
link: https://github.com/GregRos/preszr
role:
  - Lead
users: "1"
contributors: "1"
platform:
  - javascript
desc: Serialization library in TypeScript
end-users: —
cssclasses:
  - Project
---
> [!infobox]
> | [Preszr](https://github.com/GregRos/preszr) | Library|
> | ---- | ---- |
> | Platform | #javascript|
> | Language | #typescript|
> | Role | Founder |
> | Period | 2021 – Present |

Preszr is a serialization-adjacent library written in #typescript for any #javascript environment. It lets you serialize every JavaScript built-in except for functions.
> [!column|no-title flex]
> > [!success] Efficient protocol
> > Designed a custom protocol for efficiently encoding JavaScript object graphs.
> 
> > [!success] Batteries included!
> > Designed a minimal API that works right out of the box.
>
>> [!success] Near-universal
>> Wrote encoders for every single ECMAScript built-in without sacrificing compatibility.
> 
>> [!success] 90% coverage
>> Tested encoding and decoding with over 100 payloads and objects.
# How it works
![[Preszr-Flow.svg]]
Preszr takes complex JavaScript objects with references and meaningful prototypes and *encodes* them into a custom flat array format that can be serialized and sent over the network (or saved to a file). It also supports all JavaScript built-ins.

The Preszr format is written to work with any serialization method, but it’s also optimized under the assumption it’s just going to be `JSON.stringify`. So the best of both worlds.
# Users
Right now it’s just me, but one day I will combine it with [[Wampus]] to create a batteries-included RPC system.

