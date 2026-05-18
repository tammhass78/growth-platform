# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands
- **Build**: `docker-compose build` (builds backend and frontend Docker images)
- **Lint**: `npm run lint` (frontend) or `yarn lint` (backend) - ensure these commands exist in respective packages
- **Run Tests**: `docker-compose up test` (executes test suite in Docker)
- **Start Dev Server**: `docker-compose up` (runs both services simultaneously)
- **Run Single Test**: `docker-compose exec backend npm test -- --test-name="specific-test"`

## Code Architecture
1. **Backend** (`backend/` directory):
   - Core API services and business logic
   - Uses Docker for containerized deployment
   - Database configuration in `backend/db/` (if applicable)

2. **Frontend** (`frontend/` directory):
   - React-based UI components
   - State management likely implemented via Context API or Redux
   - API requests handled through `frontend/api/` endpoints

3. **Shared Resources**:
   - Configuration files in `.env` (environment variables)
   - Docker configurations in `docker-compose.yml`

## Development Workflow
- Changes should be developed in feature branches
- Pull requests should include associated tests
- Use `.git/hooks/pre-commit` to enforce linting and testing before commits

## Assumptions
- Docker is used for development and testing
- Project uses TypeScript/JavaScript for frontend and Node.js/Python for backend
- Test coverage targets are maintained in `frontend/tests/` and `backend/tests/`

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->
