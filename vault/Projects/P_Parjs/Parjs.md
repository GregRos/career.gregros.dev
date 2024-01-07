---
type: Library
period:
  - 2018-now
link: https://github.com/GregRos/parjs
role:
  - Lead
users: 100-500 (current)
contributors: "5"
platform:
  - javascript
tagline: Library for building parsers.
end-users: --
---
> [!infobox]
> # [Parjs](https://github.com/GregRos/parjs)
> 
> |  | |
> | ---- | ---- |
> | Type | Library |
> | Platform | #javascript|
> | Role | Lead |
> | Period | 2018-now |
> | Users | 100-500 (current) |
> | End-users | -- |
> | Contributors | 5 |

Parjs is a #typescript library for building #parsers. You can use it in any #javascript environment to parse any language. It’s specifically inspired by Parsec and FParsec, but with an API that’s adapted for the JavaScript ecosystem.

Parjs follows the #parser-combinator design popular in #functional languages, where you build parsers for complex languages from basic building block parsers and combinators that change how those parsers are applied.

![[Projects/P_Parjs/Achievements|clean no-title]]

# How it works
> [!quote] Readme.md
> Parser combinator libraries let you construct parsers from small parsers and combinators that transform those parsers by, for example, applying a parser multiple times in a row.
> 
> For example, you could have **a** parser `🍕"fi"` that parses the string `fi` and a combinator `⚙️exactly 2` that applies a parser exactly two times. Combining them lets you parse the string `fifi`!
> ```
> // 🍕string "fi" ➜ ⚙️exactly 2
string("fi").pipe(exactly(2));
> ```

# Users
Parjs has a small but robust userbase. It’s frequently used by people experimenting with programming languages, as well as people who want to parse CJK languages.
