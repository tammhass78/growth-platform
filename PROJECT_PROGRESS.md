# Growth Platform — Project Progress

## 📌 Project Identity

A reward-based growth platform where users complete tasks to earn internal platform credits/tokens.

Users will be able to:
- Complete tasks
- Earn rewards
- Withdraw balance after reaching thresholds
- Convert earnings into advertising balance
- Use advertising balance to promote content/services inside the platform

The project is planned to evolve into:
- Reward System
- Advertising Platform
- Internal Wallet System
- Task Marketplace
- Referral & Growth Engine
- Campaign/Promotion Platform

---

# 🛠 Tech Stack

## Backend
- Node.js v20.20.2
- NestJS
- TypeScript

## Database
- PostgreSQL 15
- Prisma ORM v5.22.0

## Authentication
- JWT Authentication
- bcrypt password hashing

## Environment
- Docker
- Docker Compose
- Thunder Client for API testing

---

# ✅ Completed Features

## 1. PostgreSQL Setup
- PostgreSQL container configured with Docker
- Database connection working successfully
- Prisma connected to PostgreSQL

Status:
✅ Completed

---

## 2. Prisma Setup
- Prisma initialized
- schema.prisma configured
- Prisma migrations working
- Prisma Client generation working

Status:
✅ Completed

---

## 3. User System
Implemented:
- User model
- User registration
- Get users endpoint

Fields:
- id
- email
- name
- password
- points
- role

Status:
✅ Completed

---

## 4. Authentication System
Implemented:
- User registration
- User login
- Password hashing using bcrypt
- JWT token generation
- Protected routes with JwtGuard
- /auth/me endpoint

JWT payload currently includes:
- sub
- email
- role

Status:
✅ Completed

---

## 5. Tasks System
Implemented:
- Create task
- Get tasks
- Complete task
- Reward points system

Task fields:
- title
- points
- url
- platform

Status:
✅ Completed

---

## 6. Task Completion Protection
Implemented:
- Prevent completing the same task twice
- UserTask relation table
- Transaction-safe reward updates

Status:
✅ Completed

---

# 🧠 Current Platform Logic

## User Flow
1. Register account
2. Login
3. Receive JWT token
4. View tasks
5. Complete tasks
6. Earn reward balance

---

# 💰 Planned Economy System

The platform will support two balances:

## 1. Withdrawable Balance
- Can be withdrawn as real money
- Requires minimum withdrawal threshold

## 2. Advertising Balance
- Internal balance only
- Used for promotions/ads inside platform
- Cannot be withdrawn

Users will be able to convert:
Withdrawable Balance → Advertising Balance

---

# 🔐 Planned Authorization System

Roles:
- user
- admin

Planned admin permissions:
- Create tasks
- Edit tasks
- Delete tasks
- Manage campaigns

---

# 🚀 Planned Features

## Short-Term
- Role-based authorization
- Admin-only task creation
- Better validation
- DTOs
- Global exception handling
- Swagger API docs

## Mid-Term
- Wallet system
- Withdrawal requests
- Ad campaigns
- Referral system
- Notifications

## Long-Term
- Real payment integrations
- Analytics dashboard
- Anti-fraud system
- Real-time systems
- WebSocket support
- Multi-role admin panel

---

# ⚠️ Important Technical Notes

## Prisma
After every schema update:
```bash
npx prisma migrate dev --name migration_name
npx prisma generate
If EPERM appears:

Stop Nest server
Run prisma generate
Restart server
📅 Current Status

Project State:
🟢 Backend Core Functional

Main Systems Working:
✅ Authentication
✅ Authorization foundation
✅ Tasks
✅ Rewards
✅ Database
✅ JWT
✅ Prisma
✅ Docker

🧑‍💻 Development Notes

The project is currently focused on backend architecture and core business logic before frontend implementation