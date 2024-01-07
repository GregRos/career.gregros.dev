---
type: Library
period:
  - 2021-now
link: https://github.com/GregRos/preszr
role:
  - Lead
users: "1"
contributors: "1"
platform:
  - javascript
tagline: Library for serialization.
end-users: --
---
> [!infobox]
> # [Preszr](https://github.com/GregRos/preszr)
> 
> |  | |
> | ---- | ---- |
> | Type | Library |
> | Platform | #javascript|
> | Role | Lead |
> | Period | 2021-now |
> | Users | 1 |
> | End-users | -- |
> | Contributors | 1 |

Preszr is a serialization-adjacent library written in #typescript for any #javascript environment. 

It helps you serialize objects with prototypes and complex reference structures – also known as object graphs – through a carefully designed object #protocol.

Preszr supports all built-in values, including `"strings"`, `ArrayBuffer`, and `100n`, out of the box and can be easily extended to support custom types.

![[Projects/P_Preszr/Achievements|no-title clean]]

# How it works
![[Preszr-process|center]]
Preszr takes complex JavaScript objects with references and meaningful prototypes and *encodes* them into a flat array format that can be serialized and sent over the network (or saved to a file).

To get the object back, you need deserialize it back into the flat array format and then *decode* it with Preszr, which will reproduce the original object perfectly. It supports basic versioning to deal with changes in classes.

The Preszr format is written to work with any serialization method, but it’s also optimized under the assumption it’s just going to be `JSON.stringify`. So the best of both worlds.

# Users
Right now it’s just me. But I have plans.

