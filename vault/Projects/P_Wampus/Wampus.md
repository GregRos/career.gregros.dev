---
type: Library
period:
  - 2019-2020
link: https://github.com/GregRos/wampus
role:
  - Lead
users: "0"
contributors: "1"
platform:
  - Nodejs
  - Browser
tagline: RPC protocol client for JavaScript
---
Wampus is a client for the #WAMP JSON-based RPC protocol, written in #typescript. It works for both Node.js and the browser and uses #rxjs in both its interface and implementation.

![[Projects/P_Wampus/Achievements|no-title clean]]


# Why I wrote it
I was using the WAMP protocol for IPC. The most popular client for TypeScript is called [Autobahn](https://github.com/crossbario/autobahn-js)and has multiple problems that I wanted to address.
# How it works
Wampus implements the WAMP protocol according to its  [specification](https://wamp-proto.org/wamp_latest_ietf.html)  almost entirely using rxjs, and its interface also makes use of observables. This makes the protocol implementation much more readable than if done by hand. 

That readability is, however, contingent on understanding rxjs, which has a steep learning curve.
# Userbase
None. Interest in the WAMP protocol has waned, and I lost interest in this project. However, I still like the protocol and I think this library is one of my strongest accomplishments.

One day I might integrate the protocol into something else, thereby making it relevant again.
# Features
- An expressive and powerful API
- Intelligent async tracing when in development mode
- A low-level interface for sending crafted protocol messages
- Support for almost all advanced features.
- Node.js and browser
- Tested with high coverage
