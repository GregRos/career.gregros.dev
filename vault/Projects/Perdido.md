---
type: Server
periods:
  - 2021.2-now
role:
  - Lead
link: https://github.com/GregRos/perdido
cssclasses:
  - Project
desc: Personal server in lots of things
---
> [!infobox]
> |[Perdido](https://github.com/GregRos/perdido) |Server |
> |-|-|
> |Platform| #linux |
> |Language | #python #bash |
> |Period|2021-now|

Perdido is a personal media and gaming server, as well as a dozen other things. I use many of its features throughout the day. It’s a small enterprise server with a 1 Gbit line.
>[!column|no-title flex]
>> [!success] Hardened
>> Secured using fail2ban, PoLP permissions, WAF, enforced TLS, and strong passwords.
>
>> [!success] Redployable
>> 95% of the server can be redeployed from scripts in a public repo.
>
>> [!success] 95% uptime
>> I maintain a high uptime since I use it consistently throughout the day, but really I’m just a perfectionist.
>
>> [!success] High performance
>> Tuned for high performance due to multiple latency-sensitive workloads and high traffic.
>
>> [!warning] Linux
>> I’ve learned more Linux from operating this server than during my entire career.
>
>> [!warning] Price of self-hosting
>> Make backups, double-check your cronjobs, monitor your logs, get really good at SSH, and be prepared to lose it all anyway.
# How it works
Runs lots of services, each with its own user, each deployed from a specific bash script. Also, some scripts are just there to set up environments or stuff like that. Also has tons of shorthand tools for common admin tasks.

# Tools
These are microprojects associated with the server, but technically have a life of their own.

## [Sweeper](https://github.com/GregRos/sweeper)
A CLI tool for classifying and sorting media files, #python.

## [delete-media](https://github.com/GregRos/perdido/blob/master/delete-media/run.py)
A CLI tool for deleting hardlinks across multiple folders, #python.

## [pd-shortcuts](https://github.com/GregRos/perdido/blob/master/shell/pd-tools.fish)
Shorthand for common server administration tasks, written in #fish.

# Users
Two or three people.