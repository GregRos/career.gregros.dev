---
type: Library
period:
  - 2018.5-now
link: https://github.com/GregRos/parjs
role:
  - Lead
users: 100-1000
contributors: "5"
platform:
  - javascript
desc: Parser creation library in TypeScript
end-users: —
cssclasses:
  - Project
---
> [!infobox]
> 
> | [Parjs](https://github.com/GregRos/parjs) | Library|
> | ---- | ---- |
> | Platform | #javascript|
> | Language| #typescript |
> | Role | Lead |
> | Period | 2018-now |
> | Users | 100-1000 |
> | Contributors | 5 |

Parjs is a library for building #parsers for parsing any language using the #parser-combinator pattern. It’s inspired by Parsec and FParsec, but with an API that follows JavaScript conventions.
> [!column|no-title flex]
> > [!success] Faithful adaptation
> > Adapted the time-honored parser combinator pattern, attested by 100s of invested users.
> 
> > [!success] 50+ building blocks
> > Hand-wrote dozens of parsers and combinators.
> 
> > [!success] Unicode support
> > Wrote powerful Unicode parsers that make use of advanced data structures.
> 
> > [!success] Fully tested and documented
> > Tested every parser and combinator with multiple inputs, even the boring ones.
> 
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
Parjs has a small but robust userbase. It’s frequently used by people experimenting with programming languages.

The Unicode parsing turned out to be a major draw, and many people use the package to parse CJK languages.
