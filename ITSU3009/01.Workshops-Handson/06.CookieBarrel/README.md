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
docker compose up -d
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
docker compose down -v
```

### Start Next.js (frontend)

- Start only the frontend service:

```bash
docker compose up -d frontend
```

- Follow logs:

```bash
docker compose logs -f frontend
```

- App URL: http://localhost:3000

### Start Express.js (backend)

- Start only the backend service:

```bash
docker compose up -d backend
```

- Follow logs:

```bash
docker compose logs -f backend
```

- App URL: http://localhost:3001
- Health check: http://localhost:3001/health

### Load the database schema into MongoDB

This project includes a JSON schema (`database/cookie-barrel-schema.json`) and an init script (`database/01-init-schema.js`). The Compose file mounts `./database` into the Mongo container so the schema can be applied.

- First-time automatic load (fresh volume):

```bash
docker compose down -v && docker compose up -d mongo
```

On first start with a fresh volume, Mongo will execute scripts in `/docker-entrypoint-initdb.d/` and create collections, validators, and indexes in the `app` database.

- Manual run (idempotent) if you need to re-apply without resetting the volume:

```bash
docker compose exec -T mongo sh -lc "export MONGO_INITDB_DATABASE=app; mongosh --quiet --eval \"const fs=require('fs'); const s=fs.readFileSync('/docker-entrypoint-initdb.d/01-init-schema.js','utf8'); eval(s);\""
```

- Verify collections (optional):

```bash
docker compose exec -T mongo mongosh --quiet --eval "const d=db.getMongo().getDB('app'); printjson(d.getCollectionInfos({}, {nameOnly:true}));"
```

You can also browse collections via Mongo Express at http://localhost:8081.

### Populate the database with sample data

Run a few example inserts with `mongosh` (adjust as needed):

```bash
docker compose exec -T mongo mongosh --quiet --eval '
const d = db.getMongo().getDB("app");
// Categories
const cat = d.categories.insertMany([
  { name: "Cookies", slug: "cookies", isActive: true, createdAt: new Date() },
  { name: "Drinks", slug: "drinks", isActive: true, createdAt: new Date() }
]);
// Menu items
const items = d.menuItems.insertMany([
  {
    categoryIds: [],
    name: "Chocolate Chip Cookie",
    slug: "choc-chip-cookie",
    price: { amount: 2.5, currency: "USD" },
    isAvailable: true,
    createdAt: new Date()
  },
  {
    categoryIds: [],
    name: "Iced Latte",
    slug: "iced-latte",
    price: { amount: 4.0, currency: "USD" },
    isAvailable: true,
    createdAt: new Date()
  }
]);
print("Seeded:", JSON.stringify({ categories: cat.insertedIds ? Object.keys(cat.insertedIds).length : 0, items: items.insertedIds ? Object.keys(items.insertedIds).length : 0 }));
'
```

- Verify inserted documents (optional):

```bash
docker compose exec -T mongo mongosh --quiet --eval "const d=db.getMongo().getDB('app'); printjson(d.categories.find().limit(5).toArray()); printjson(d.menuItems.find().limit(5).toArray());"
```

### Notes

- The Compose file mounts source directories, so code changes hot-reload in containers.
- Next.js runs with `next dev -H 0.0.0.0 -p 3000` for container access.
- Express dev server uses nodemon on port 3001.


