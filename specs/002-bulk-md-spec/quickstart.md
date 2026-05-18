# Quickstart Guide

## Prerequisites
- Docker Desktop installed.
- Node.js 18 installed (for local execution, optional when using Docker).

## Build & Run
```bash
# From the repository root
docker-compose build bulk-md-spec   # assumes a service defined for this tool
docker-compose run bulk-md-spec      # runs the CLI, generates the spec
```

## Expected Output
- `specs/002-bulk-md-spec/spec.md` – populated with a summary of all markdown files.
- Console log showing the number of files processed and time taken.
