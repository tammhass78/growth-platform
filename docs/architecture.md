# Architecture Overview

## High‑level Diagram
```mermaid
flowchart TD
    subgraph Backend[Backend (NestJS)]
        Auth[Auth Module]
        Users[Users Module]
        Tasks[Tasks Module]
        Prisma[Prisma Module]
    end
    subgraph Frontend[Frontend (Next.js)]
        UI[UI Pages & Components]
    end
    subgraph Infra[Infrastructure]
        DB[(PostgreSQL 15)]
        Cache[(Redis 7)]
    end
    UI -->|HTTP API| Auth
    UI -->|HTTP API| Users
    UI -->|HTTP API| Tasks
    Auth --> Prisma
    Users --> Prisma
    Tasks --> Prisma
    Prisma --> DB
    Tasks --> Cache
```

*The diagram reflects the actual module imports and Docker services found in the source code. No architectural changes were introduced.*
