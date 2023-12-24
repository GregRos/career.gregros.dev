---
title: Bringer of Metrics
tags:
  - observability
  - systems
icon: 📊

---
I’ve designed and implemented system-wide metrics for describing the state of the system. These metrics include data from a variety of sources:

1. Custom metrics emitted from the application.
2. Built-in metrics published by the cloud hosting provider.
3. Metrics from queues and other messaging services

I’ve used histograms, gauges, counters, and general statistical summaries. I used Prometheus and Google Monitoring as backends.

I’ve also written dashboards in Grafana that present said metrics in ways that are easy to read.