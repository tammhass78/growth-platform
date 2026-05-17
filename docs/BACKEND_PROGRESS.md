# Backend Progress — Growth Platform

# Backend Stack

* NestJS
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* bcrypt
* Docker

---

# Database Setup

Completed:

* PostgreSQL configured successfully
* Prisma connected to PostgreSQL
* Prisma migrations working
* Prisma generate working

Important commands:

```bash id="wffsd1"
npx prisma migrate dev --name migration_name
npx prisma generate
```

---

# Prisma Notes

If schema changes:

1. Update schema.prisma
2. Run migration
3. Run prisma generate

Example:

```bash id="iyb7c0"
npx prisma migrate dev --name add_role
npx prisma generate
```

---

# Common Prisma Errors Solved

## EPERM Error

Error:

```text id="kpw0fh"
EPERM: operation not permitted, rename ...
```

Solution:

1. Stop NestJS server
2. Run:

```bash id="slzjlwm"
npx prisma generate
```

3. Restart server

---

## Missing Column Error

Error:

```text id="ax99f4"
The column User.password does not exist
```

Reason:

* Prisma schema updated
* Database migration not applied

Solution:

```bash id="mrx3hn"
npx prisma migrate dev
npx prisma generate
```

---

# User System

Implemented:

* Create users
* Get users
* Database persistence

User model fields:

* id
* email
* name
* password
* points
* role

Current role default:

```prisma id="kkg7ee"
role String @default("user")
```

---

# Authentication System

Implemented:

* Register endpoint
* Login endpoint
* Password hashing using bcrypt
* JWT token generation
* JwtGuard
* Protected routes
* /auth/me endpoint

JWT payload includes:

```json id="l7pb3m"
{
  "sub": 1,
  "email": "saif@test.com",
  "role": "user"
}
```

---

# Authentication Concepts Learned

## Authentication

Means:

* Who is the user?

Handled by:

* JWT token
* Login system

---

## Authorization

Means:

* What is the user allowed to do?

Future implementation:

* Admin-only routes
* Role-based permissions

---

# Tasks System

Implemented:

* Create task
* Get tasks
* Complete task

Task fields:

* title
* points
* url
* platform

Example task:

```json id="x2v0jz"
{
  "title": "Join Telegram",
  "points": 50,
  "url": "https://t.me/test",
  "platform": "telegram"
}
```

---

# Rewards System

Current reward field:

```prisma id="1qlg4y"
points Int @default(0)
```

Logic:

* User completes tasks
* User earns reward points

---

# Duplicate Task Protection

Implemented:

* Prevent completing same task twice
* UserTask relation table
* Transaction-safe updates

Logic:

1. Check task exists
2. Check user did not complete task before
3. Save completion
4. Increase user points

---

# Planned Economy Upgrade

Future balances:

```prisma id="w9w29u"
withdrawBalance Float @default(0)
adBalance Float @default(0)
```

---

# Planned Balance Logic

## Withdraw Balance

* Withdrawable as real cash
* Requires minimum threshold

---

## Advertising Balance

* Internal platform balance
* Used for ads/promotions
* Cannot be withdrawn

Conversion:

```text id="2mjlwm"
withdrawBalance -> adBalance
```

---

# Guards & Protected Routes

Implemented:

* JwtGuard
* Token verification
* Protected task completion

Example:

* /tasks/complete requires token

---

# Token Notes

JWT token:

* Changes after login
* Must be sent in Authorization header

Format:

```text id="n8g0m3"
Bearer YOUR_TOKEN
```

---

# Important Errors Solved

## No token provided

Reason:

* Authorization header missing

Solution:

* Send Bearer token

---

## EADDRINUSE

Meaning:

* Port already used

Solution:

* Stop conflicting process
* Or change port

---

# Backend Ports

Current backend port:

```text id="ef92r0"
http://localhost:3000
```

---

# Important Backend Fix

CORS must be enabled.

Inside:

```text id="nchmht"
backend/src/main.ts
```

Add:

```ts id="pmjfd1"
app.enableCors();
```

Example:

```ts id="d1k8q9"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
```

Reason:

* Frontend runs on localhost:3001
* Backend runs on localhost:3000

---

# Current Backend Status

Working:
✅ PostgreSQL
✅ Prisma
✅ JWT
✅ Register
✅ Login
✅ Protected routes
✅ Tasks system
✅ Rewards system
✅ Duplicate task prevention
✅ Roles foundation

---

# Planned Backend Features

## Short-Term

* DTO validation
* Better error handling
* Swagger documentation
* Admin-only task creation

---

## Mid-Term

* Wallet system
* Withdrawal requests
* Referral system
* Campaign management

---

## Long-Term

* Real payment integrations
* Analytics
* Anti-fraud systems
* WebSocket support
* Notifications
