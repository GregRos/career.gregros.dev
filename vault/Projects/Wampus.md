---
type: Library
period:
  - 2019.2-2020.8
link: https://github.com/GregRos/wampus
role:
  - Lead
users: "1"
contributors: "1"
platform:
  - Nodejs
  - Browser
desc: RPC protocol client in TypeScript
end-users: --
cssclasses:
  - Project
---
> [!infobox]
> | [Wampus](https://github.com/GregRos/wampus) |Library |
> | ---- | ---- |
> | Platform | #javascript|
> | Language | #typescript|
> | Role | Lead |
> | Period | 2019-2020 |
> | Users | 1 |
> | Contributors | 1 |

Wampus is a client for the #WAMP RPC #protocol. It supports both #nodejs (through the `ws` package) and the browser. WAMP is an schema-less alternative to gRPC with a lot less hassle.
> [!column|no-title flex]
> > [!success] Elegant API
> > Built an observable-based API that’s readable, powerful, and concise.
> 
> > [!success] RPC protocol implementation
> >Carefully implemented a complex RPC protocol from [spec](https://wamp-proto.org/wamp_latest_ietf.html) using #rxjs.
> 
> > [!success] Meticulous error reporting
> > Wrote checks for dozens of errors, exceptions, and protocol violations.
>
> > [!success] 90% coverage
> > Used mocks extensively to unit test different components.
> 
# How it works
It implements the protocol and provides a convenient API that follows many TypeScript conventions. Using observables made the complicated message flows easier to code.

# Userbase
Right now, only me. I feel like the library needs more work.
