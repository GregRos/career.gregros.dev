---
periods:
  - 2017-2019
  - 2021-now
position: Tech Lead
type: Place
---
Reflectiz provides a security scanner that detects client-side vulnerabilities in web applications.

I first joined the company when it numbered only a handful of people. I was tasked with developing a browser-based platform that reported everything a webpage did, including calls to web APIs, changes to the DOM, HTTP requests, and so on

I rejoined the company during a period of growth. In my new role as the company’s tech lead, I grew the platform’s capabilities, deployed new infrastructure, and built development processes.



As the company kept growing, I widened my focus further. 




I led the deployment of system-wide observability, 

During my second tenure the company grew to over 50 people and dozens of paying clients. In my new role as Tech Lead, I expanded the company’s infrastructure to much greater scales, set up systems ranging from f

During my first iteration (2017-2019) I worked as a senior backend developer. The company numbered only a few people, and I was tasked with developing many of the company’s core technologies from scratch, solving many difficult technical problems along the way.

During my second iteration (2021-now), the company grew to over 50 people and dozens of paying clients. In my position as Tech Lead I continued to develop core technologies, while also overseeing the growth of the company’s infrastructure to massive scale.



. I continued to develop those same core technologies, while while also making wide-reaching improvements to the company’s systems and processes, as well as mentoring developers.


# Scanner
I led the development of a system that ran, automated, controlled, and monitored #chromium browsers at massive scale on #gcp. The system was written in #typescript on #nodejs.
## Instrumentation
The system executed web pages in a fully instrumented environment. Every behavior of the page was caught and reported, together with its origin (generally, a resource of some sort).
## Resources
The system instrumented the #javascript, #html, and #css resources requested by the page and reported what behavior caused them to be requested.
## Network
The system monitored network usage by the page, gathering maximum information from every #HTTP request. It also altered resources through instrumentation, and these alterations had to be invisible to the page.
## JavaScript
The system instrumented #javascript code and hooked much of the JS environment, including a large collection of web APIs.
## Automation
The system automated #chromium using #cdp. Some of it was done through #puppeteer, but most of it was done directly using the protocol or through other means.
# Observability
I greatly increased the observability of the system.
## #Logs
I designed a logging standard and led its deployment across multiple services. This allowed tracing a single job through the entire system.
### Queries
I executed complicated #google-logging queries to diagnose production issues and taught others to use the system.
## #Metrics
I designed a host of metrics that measured system performance and stability.
### Dashboard
I made a dashboard in #grafana for clearly displaying the metrics.
## #Alerts
I used the metrics to define alerts by combining information from multiple services and brokers.
# Cloud Infrastructure
I designed cloud architectures and deployed them to GCP and Kubernetes.
## #Terraform
 I converted much of the company’s cloud infrastructure to Terraform files.
## #Kubernetes
I led the migration of systems from various solutions to Kubernetes. 
## #Docker
I wrote Dockerfiles based on machine images.
# Automation Language
I designed, developed, and maintained an internal #language (DSL) for browser automation. The language was designed to be used by people without development experience. 

- The language was a set of conventions, functions, and objects with carefully designed #typescript interfaces.
- It was executed by a dedicated runtime, with its own stack, control flow, error recovery, and argument evaluation rules.
# DevEx
I built development pipelines, wrote reusable libraries, and made large-scale improvements to codebases.
## Microservices
I wrote a template for microservices and used it to create several that were used in metrics, alerting, and as part of the 
## CI/CD
I implemented CI/CD pipelines for different software packages and services, and led the introduction of same.
## Libraries
I organized code into a system of interconnected packages and libraries, carefully designing the interface for each one. 
- An internal package for transforming URIs.
- A package containing common logging components.
## Tooling
I wrote a set of CLI tools to help with different stages of the development cycle.
- A tool for creating a robust proxy to a production IP
- A tool for reproducing job requests that executed in production in their entirety.
- A tool for clearing cache, compilation results, and dangling processes.

# Database
I worked with MSSQL.
## Complex Queries
I’ve written complex queries that use various advanced database features. #reflectiz
- Multiple CTEs.
- Highly recursive queries.
- Meta-queries of database structures.
- Table-valued functions
## Optimization
I’ve optimized queries based on the query plan, ancient database lore, opposite day logic, astrology, and the promises of long-dead gods. 
