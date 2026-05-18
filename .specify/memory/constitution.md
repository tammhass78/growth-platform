<!--
Sync Impact Report:
- Version change: 0.3.0 → 0.4.0 (minor bump – added documentation references and updated governance section)
- Added references to generated docs: architecture, backend, frontend, API, Prisma, env, Docker, auth, workflow, conventions.
- Updated Governance section to point to authoritative docs location.
- Deferred items: RATIFICATION_DATE (still TODO).
-->
# growth-platform Constitution

## Core Principles

### Modularity
All features are encapsulated within distinct NestJS modules (e.g., `auth`, `tasks`, `users`) with clearly defined controllers and services. Front‑end pages are organized as independent Next.js components and routes.

### Test‑First Development
Every module includes unit tests (`*.spec.ts`). Code must not be merged until the full test suite passes (`npm run test`). Tests drive design and ensure regressions are caught early.

### Observability & Logging
The application uses NestJS's built‑in logger with structured output. All API endpoints emit request/response logs, and error handling follows a consistent pattern to aid debugging and monitoring.

## Technology Stack

- **Backend**: NestJS **v11.x**, TypeScript **5.4**, Prisma **5.22.0**, JWT (`@nestjs/jwt@^11.0.2`), bcrypt **6.0.0**.
- **Frontend**: Next.js **v16.2.6**, React **v19.2.4**, Axios **v1.16.1**, TailwindCSS **v4**, TypeScript **^5**.
- **Database**: PostgreSQL **15** (Docker).
- **Cache**: Redis **7** (Docker).
- **Tooling**: Docker Compose, ESLint **9.18.0**, Prettier **3.4.2**, Jest **30**.

## Documentation References
The definitive project documentation lives in the `docs/` directory:

- **Architecture** – `docs/architecture.md` (system diagram, service interactions).
- **Backend** – `docs/backend.md` (module map, dependency graph, key file list).
- **Frontend** – `docs/frontend.md` (routing, component hierarchy, build instructions).
- **API** – `docs/api.md` (endpoint table, request/response schemas, auth details).
- **Prisma** – `docs/prisma.md` (ER diagram, data‑model definitions).
- **Environment** – `docs/env.md` (environment variables and purpose).
- **Docker** – `docs/docker.md` (service definitions, networking flow).
- **Authentication** – `docs/auth.md` (registration, login, JWT flow, guard behavior).
- **Workflow** – `docs/workflow.md` (dev, test, lint, CI, PR processes).
- **Conventions** – `docs/conventions.md` (coding standards, file naming, testing conventions).

All specifications and future feature specs must align with the contents of these documents.

## Additional Constraints
- **Linting & Formatting**: Enforced via `eslint.config.mjs` and Prettier (`.prettierrc`). Commits are blocked by the pre‑commit hook until lint passes.
- **Dockerized Development**: All services run via `docker-compose`. The backend and frontend are built and tested in isolated containers.
- **TypeScript Strictness**: `tsconfig.json` enables strict mode, ensuring type safety across the codebase.

## Development Workflow
1. **Start Environment**: `docker-compose up` launches both backend and frontend.
2. **Run Tests**: `docker-compose exec backend npm test` executes the complete test suite.
3. **Lint**: `npm run lint` (frontend) or `yarn lint` (backend) validates code style.
4. **Commit**: Pre‑commit hook runs lint and tests; commits must be signed and follow the conventional message format.
5. **Pull Request**: All changes require PR review and must pass CI checks before merging into `main`.

## Governance
- The constitution supersedes any informal guidelines.
- Amendments require a documented PR, approval by at least one senior engineer, and an updated version bump.
- Versioning follows semantic versioning: MAJOR for breaking changes, MINOR for new principles or documentation updates, PATCH for wording fixes.
- All specifications must reference the authoritative docs in the `docs/` directory.
- **Version**: 0.4.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2026-05-18