# Backend Module Documentation

## Module Overview
The backend is a **NestJS** application (v11.x) written in **TypeScript 5.4**. It follows the standard NestJS modular architecture:

- **AppModule** – root module importing all feature modules.
- **AuthModule** – handles registration, login, and JWT‑protected `me` endpoint.
- **UsersModule** – basic CRUD for user records.
- **TasksModule** – task creation, listing, and completion (protected).
- **PrismaModule** – provides a singleton `PrismaService` that wraps the Prisma client.

All modules are located under `backend/src/<module>/`.

## Detailed Module Map
| Module | Path | Controllers | Services | Guards | Exported Providers |
|--------|------|-------------|----------|-------|-------------------|
| **Auth** | `backend/src/auth/` | `AuthController` (`auth.controller.ts`) – routes: `POST /auth/register`, `POST /auth/login`, `GET /auth/me` (protected) | `AuthService` (`auth.service.ts`) – handles password hashing (bcrypt), user creation, login validation, JWT signing | `JwtGuard` (`guards/jwt.guard.ts`) – protects `GET /auth/me` | `AuthService`, `JwtGuard` |
| **Users** | `backend/src/users/` | `UsersController` (`users.controller.ts`) – routes: `GET /users`, `POST /users` | `UsersService` (`users.service.ts`) – thin wrapper around Prisma for user queries | *None* | `UsersService` |
| **Tasks** | `backend/src/tasks/` | `TasksController` (`tasks.controller.ts`) – routes: `POST /tasks`, `GET /tasks`, `POST /tasks/complete` (protected) | `TasksService` (`tasks.service.ts`) – creates tasks, fetches tasks, processes completion with a transactional update of `UserTask` and user points | `JwtGuard` (applied to `POST /tasks/complete`) | `TasksService` |
| **Prisma** | `backend/src/prisma/` | *No HTTP controller* – internal DB layer | `PrismaService` (`prisma.service.ts`) – instantiated Prisma client generated from `prisma/schema.prisma` | *None* | `PrismaService` |

## Dependency Graph (textual)
```
AppModule
 ├─ AuthModule → AuthService → PrismaService
 │               └─ JwtGuard → JwtService
 ├─ UsersModule → UsersService → PrismaService
 ├─ TasksModule → TasksService → PrismaService
 │               └─ JwtGuard (protects task completion)
 └─ PrismaModule → PrismaService (singleton DB client)
```

All imports are explicit in each module's `*.module.ts` file; there are no hidden cross‑module dependencies.

## Key Files
- `backend/src/app.module.ts` – bootstraps the application.
- `backend/src/auth/auth.controller.ts` (lines 17‑38) – defines auth routes.
- `backend/src/auth/auth.service.ts` (lines 19‑86) – business logic for registration & login.
- `backend/src/auth/guards/jwt.guard.ts` (lines 10‑57) – JWT validation.
- `backend/src/users/users.controller.ts` (lines 4‑16) – user endpoints.
- `backend/src/tasks/tasks.controller.ts` (lines 14‑41) – task endpoints.
- `backend/src/tasks/tasks.service.ts` (lines 5‑70) – task logic & transaction handling.
- `backend/src/prisma/schema.prisma` (lines 10‑38) – data model.

These file references can be used for future code‑review or documentation tooling.
