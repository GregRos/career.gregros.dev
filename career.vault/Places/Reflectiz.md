---
period:
  - 2017.5-2019.1
  - 2021-now
position: Company Tech Lead
link: https://web.archive.org/web/20231229025306/https://www.reflectiz.com/
desc: Security Company
location: Ramat Gan, Israel
cssclasses:
  - Place
---
> [!infobox|a]
> | [Reflectiz](https://web.archive.org/web/20231229025306/https://www.reflectiz.com/) | Ramat Gan, Israel |
> |-|-|
> | 17 — 19 | Sr. Backend Developer |
> | 21 — Present  | Company Technical Lead |
# 2017 — 2019
Joining the company when it numbered a handful of people, I was tasked with building a  browser-based system for monitoring all webpage activity, including the #javascript environment, HTML elements such as images, embedded iframes, and all #http traffic. The system was to be a scanner with no installation required.

I researched browser-agnostic techniques for monitoring said activity, working closely with web technology specifications such as:
- The ECMAScript specification
- Web API specifications
- HTTP specifications



The resulting system was stateless, observable, scalable, and highly distributed. It was built in #typescript on #nodejs.

The system outputted a high volume of data, leading me to write database queries that processed and analyzed that data. This included optimizing highly recursive SQL queries, designing custom statistical computations, and so on.

To maintain the system, I was required to debug client code, often dealing with minified bundles of obfuscated third party scripts and carefully monitoring #http traffic for discrepancies.

In the later stages, additional requirements caused me to expand the monitoring layer, which led to closer coupling with the Chromium browser. However, the system still contained many browser-agnostic components.

In addition, I provided support for junior developers using the company’s foundational technologies, such as Node.js, TypeScript, and JavaScript.
> [!column|no-title flex] 
> > [!success] Researched technologies
> > In browser-agnostic monitoring and control.
> 
> > [!success] Built system
> > Using experimental technologies in a production setting.
> 
> > [!success] Designed architecture
> > That was robust, scalable, stateless, and highly distributed.
> 
> > [!success] Resolved incidents
> > Involving misdetections and issues between our system and client webpages.

# 2021 — Present
I rejoined the company during a period of growth. In my new role as the company’s tech lead, I was responsible for both the browser-based system I’d created, as well as the company’s other systems and technologies.

I was first tasked with building an automation system. This system would simulate user interactions with the client’s web application as part of a scan and report webpage activity.

To address this, I researched experimental technologies for Chromium automation, such as #CDP. I used this research to design a browser automation #DSL that was used by a team of developers to write automation scripts for thousands of websites.

In converted much of the company’s infrastructure to #IaC to enable the company to rapidly expand to new regions, easily upgrade infrastructure, and manage the configuration as part of version control. This led to scaling up said infrastructure by a factor of 20+.

As the system grew, there were additional incidents and issues. To track these, I led the integration of system-wide tracing and monitoring. This allowed the company to respond to incidents promptly, while also enabling developers to reproduce issues locally based on trace data.

With the growing scanning

As the throughput of the system grew, I saw fit to design a microservice-based data pipeline that was optimized for bulk insertion, capable of handling 100 MBs/s of graph data.

Further production issues required me to delve into the V8 and Chromium codebases, attempting to avoid 

Throughout my time with the company, I wrote numerous CLI tools, libraries, and packages that resolved key issues in development processes. I also supported and mentored individual developers, provided technical supervision to teams, and helped make key decisions that paved the way forward. 
> [!column|no-title flex] 
> > [!success] Led research
> > Into browser automation techniques, such as the Chrome Devtools Protocol.
> 
> > [!success] Led development
> > Turning business requirements into research objectives and development roadmaps.
> 
> > [!success] Built automation platform
> > Using a DSL based on the TypeScript compiler.
> 
> > [!success] Expanded infrastructure
> > Through #IaC, containerization, and orchestration platforms.
>
>> [!success] Designed system architecture
>> Data pipeline, 
>
>> [!success] Grew codebases
>> Through modern package architectures, code reviews, utility libraries, and so on.
>




I integrated system-wide tracing and monitoring, allowing the company to respond to incidents as quickly and accurately as possible.



I established development processes surrounding the system I’d constructed, training team members in using and developing it.






highly distributed and with system-wide tracing and monitoring. 

Working independently, I built a flexible and highly distributed Chromium-based platform that allowed the company to pivot based on market opportunities. 

I rejoined the company during a period of growt

I rejoined the company during a period of growth. In my new role as the company’s tech lead, I built 

I continued my research while expanding the company’s infrastructure and development processes to meet the demand of dozens of paying clients.



