# API Reference

All backend endpoints are exposed under the `/` base path. The API follows a conventional REST style and uses **JSON** request/response bodies. Authentication is performed with JWT tokens passed in the `Authorization: Bearer <token>` header.

## Authentication Endpoints
| Method | Path | Auth | Description | Request Body | Response |
|--------|------|------|-------------|--------------|----------|
| POST | `/auth/register` | ❌ (public) | Create a new user account. Password is hashed with bcrypt before storage. | `{ "email": "string", "name": "string?", "password": "string" }` | `{ "id": number, "email": "string", "name": "string?" }` |
| POST | `/auth/login` | ❌ (public) | Validate credentials and receive a JWT. | `{ "email": "string", "password": "string" }` | `{ "access_token": "jwt-string" }` |
| GET | `/auth/me` | ✅ (JwtGuard) | Return the decoded JWT payload for the current user. | — | `{ "sub": number, "email": "string", "role": "string" }` |

## User Endpoints
| Method | Path | Auth | Description | Request Body | Response |
|--------|------|------|-------------|--------------|----------|
| GET | `/users` | ❌ (public) | Retrieve list of all users. | — | `User[]` (array of user objects without passwords) |
| POST | `/users` | ❌ (public) | Create a new user (alternative to registration). | `{ "email": "string", "name": "string?" }` | Created user object (same shape as registration response) |

## Task Endpoints
| Method | Path | Auth | Description | Request Body | Response |
|--------|------|------|-------------|--------------|----------|
| POST | `/tasks` | ❌ (public) | Create a new task record. | `{ "title": "string", "points": number, "url": "string", "platform": "string" }` | Created task object with its `id`.
| GET | `/tasks` | ❌ (public) | List all tasks. | — | `Task[]`
| POST | `/tasks/complete` | ✅ (JwtGuard) | Mark a task as completed for the authenticated user, awarding points. | `{ "taskId": number }` | `{ "message": "Task completed successfully", "pointsEarned": number }` |

## Common Types (derived from Prisma schema)
```ts
interface User {
  id: number;
  email: string;
  name?: string;
  points: number;
  role: string; // defaults to "user"
}

interface Task {
  id: number;
  title: string;
  points: number;
  url: string;
  platform: string;
}

interface UserTask {
  id: number;
  userId: number;
  taskId: number;
  completedAt: string; // ISO datetime
}
```

> **Note:** All endpoints return JSON and proper HTTP status codes (e.g., `201` for creation, `400` for validation errors, `401` for authentication failures). The actual status handling is implemented via NestJS's built‑in exception filters.
