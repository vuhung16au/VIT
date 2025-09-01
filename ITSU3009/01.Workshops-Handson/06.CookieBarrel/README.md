# How to Prompt

## The Prompts used to create this project

Talk with your coding agents using the prompts in `Prompt.md` to see the prompts used to create this project.

The first step is to create docker containers for the project, at the bottom of the file `Prompt.md`.
The newest prompts are at the top of the file.

## Cookie Barrel – Dev Stack

This repo contains a minimal Express.js backend and Next.js frontend wired via Docker Compose, plus MongoDB and mongo-express for offline development.

### Prerequisites

- Docker Desktop
- Ports free: 3000 (frontend), 3001 (backend), 8081 (mongo-express)

### Run

```bash
docker compose up -d --remove-orphans
```

- Frontend (Next.js): http://localhost:3000
- Backend (Express): http://localhost:3001
- Backend health: http://localhost:3001/health
- Mongo Express UI: http://localhost:8081 (user/pass: admin/admin)

To view logs:

```bash
docker compose logs -f backend
docker compose logs -f frontend
```

Stop services:

```bash
docker compose down
```

### Notes

- The Compose file mounts source directories, so code changes hot-reload in containers.
- Next.js runs with `next dev -H 0.0.0.0 -p 3000` for container access.
- Express dev server uses nodemon on port 3001.


