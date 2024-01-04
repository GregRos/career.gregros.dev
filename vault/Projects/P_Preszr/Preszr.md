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
  - Any JS
tagline: Library for serialization.
---
Preszr is a serialization-adjacent library written in #typescript for any #javascript environment.
![[Projects/P_Preszr/Achievements|no-title clean]]
# Why I wrote it
I wanted to transfer a tree structure through the network that had classes and other stuff, and I wasn’t satisfied with the existing options.
# How it works
![[PreszrFlow.canvas|PreszrFlow]]
Preszr takes complex JavaScript objects with references and meaningful prototypes and *encodes* them into a flat array format that can be serialized and sent over the network (or saved to a file).

To get the object back, you need deserialize it back into the flat array format and then *decode* it with Preszr, which will reproduce the original object perfectly.

In other words, it’s for serializing object graphs.
# Userbase
I use it.

