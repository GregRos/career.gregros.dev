---
type: Library
period:
  - 2019-2020
link: https://github.com/GregRos/wampus
role:
  - Lead
users: "1"
contributors: "1"
platform:
  - Nodejs
  - Browser
tagline: RPC protocol client for JavaScript
end-users: --
---
> [!infobox]
> 
> 
> # [Wampus](https://github.com/GregRos/wampus)
> 
> |  | |
> | ---- | ---- |
> | Type | Library |
> | Platform | #Nodejs #Browser|
> | Role | Lead |
> | Period | 2019-2020 |
> | Users | 1 |
> | End-users | -- |
> | Contributors | 1 |

Wampus is a client for the #WAMP JSON-based RPC #protocol, written in #typescript. It works for both Node.js and the browser and uses #rxjs in both its interface and implementation.

WAMP is an schema-less alternative to gRPC with a lot less hassle.

<div style="clear: both; width: 100%"></div>
<div style="clear: both; width: 100%"></div>

![[Projects/P_Wampus/Achievements|no-title clean]]

# How it works
It implements the protocol and provides a convenient API that follows many TypeScript conventions.

Internally, most of the protocol is processed via observables (`rxjs`), and the library also exposes observables when it makes sense to do so. In all cases, there is an alternative API that uses events or a similar abstraction. The observables are driven by a central message routing component.

I used observables because they make it easier to reason about sequences of messages, impose timeouts, propagate errors, dispose of resources, and so much more.
