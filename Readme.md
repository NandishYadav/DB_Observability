# Oracle Database Observability Platform (MVP / POC)

## Overview
This project is a **Grafana-like observability platform for Oracle Databases**, built as a **POC/MVP** using a **DB-only connector** (no OS agents).

The platform collects Oracle internal performance metrics in near real-time, stores them in a time-series–friendly database (MongoDB for POC), and visualizes them through a modern React UI.

The architecture is designed to be:
- Safe for production databases
- Read-only and low-overhead
- Extensible for AI/ML-based insights in future phases

---

## Key Objectives
- Monitor Oracle database health without performance impact
- Provide near real-time visibility into DB load and usage
- Enable scalable architecture for future AI/ML features
- Demonstrate enterprise-grade design for client approval

---

## MVP Scope

### Included
- Oracle DB connector (read-only)
- Scheduled metric polling
- MongoDB-based time-series storage
- Redis caching for latest metrics
- FastAPI backend APIs
- React-based visualization (charts & dashboards)
- Health and readiness endpoints

### Not Included (Future Phases)
- OS-level metrics (CPU, memory, disk)
- Automatic tuning or write operations
- Advanced alerting (email/Slack)
- Full AI/ML RCA & predictive analytics (planned)

---

## High-Level Architecture

