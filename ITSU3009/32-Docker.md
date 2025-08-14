# Docker

## Overview

Docker is a platform for building, sharing, and running applications in containers. Containers package your code and all its dependencies into a standard unit that runs the same way across laptops, servers, and clouds. Compared to virtual machines, containers share the host OS kernel, making them lightweight, fast to start, and efficient.

Key ideas:

- Portability and consistency across environments
- Isolation of apps and dependencies for reliability and security
- Faster feedback loops and reproducible builds
- Easy sharing and collaboration via registries (for example, Docker Hub)

Reference: Docker Overview — [docker.com/what-docker](https://www.docker.com/what-docker)

## What is Docker

Docker provides tooling and a runtime to containerize applications:

- Docker Engine (runtime) runs containers based on images.
- Docker CLI and Docker Desktop provide developer-friendly workflows on macOS/Windows/Linux.
- Images are portable, versioned artifacts that include code, runtime, libraries, and settings.
- Containers are running instances of images, isolated with Linux primitives (namespaces, cgroups) and orchestrated locally with Compose.

Highlights from the official overview:

- Standardized: build once, run anywhere
- Lightweight: share the OS kernel, small images, fast startup
- Secure-by-default isolation model

Reference: [docker.com/what-docker](https://www.docker.com/what-docker)

## How does Docker work

Under the hood, Docker relies on a few core building blocks:

- Images and layers: Images are built from a Dockerfile into layered filesystems; layers are cached to speed up rebuilds (modern builds use BuildKit).
- Containers: A container is a runnable instance of an image; the Engine uses containerd/runc to create isolated processes using namespaces and cgroups.
- Networking: Bridge, host, overlay, and other drivers connect containers and expose ports.
- Storage: Volumes and bind mounts persist data and improve dev workflows (live code sync on Desktop).
- Compose: A `compose.yaml` describes multi-service apps, networks, and volumes for local orchestration.
- Registry: Images are pushed/pulled from registries (Docker Hub or private registries) for sharing.

Note: At the time of writing, the “How Docker Works” marketing page returns 404; see docs for architecture details:

- Docker Engine overview — [docs.docker.com/engine](https://docs.docker.com/engine/)
- Build overview — [docs.docker.com/build](https://docs.docker.com/build/)

## Use cases for Docker

Common scenarios where containers shine:

- Local development environments with consistent dependencies (databases, caches, message brokers)
- Microservices and API backends with isolated, independently deployable services
- CI/CD pipelines that build, test, and scan in the same container images used in production
- Data science and ML stacks (Jupyter, Python/R runtimes, GPU-enabled images)
- Temporary test environments and ephemeral preview apps
- Packaging legacy apps with their dependencies for easier migration
- Edge/IoT deployments where footprint and start time matter

Note: The “Use Cases” page currently returns 404; the above reflects widely adopted patterns and Docker documentation.

## Why use Docker for development?

Benefits that improve developer productivity and team collaboration:

- Speed: Start services in seconds; iterate quickly with hot reload and volume mounts.
- Parity: Match dev, CI, and prod environments using the same image.
- Reproducibility: Deterministic builds from Dockerfiles; fewer “works on my machine” issues.
- Isolation: Avoid dependency conflicts; run multiple stacks side-by-side.
- Collaboration: Share images via registries; use trusted base images and community content.
- Tooling: Friendly CLI/GUI (Docker Desktop), IDE extensions, and Docker Compose for multi-service apps.

Reference: Why Docker — [docker.com/why-docker](https://www.docker.com/why-docker)

## Sample Docker Compose files

Explore ready-to-run Compose samples in this repository fork:
[github.com/vuhung16au/awesome-compose](https://github.com/vuhung16au/awesome-compose/)

Examples (each folder contains a `compose.yaml` and a README):

- React / Express / MongoDB — [react-express-mongodb](https://github.com/vuhung16au/awesome-compose/blob/master/react-express-mongodb)
- React / Express / MySQL — [react-express-mysql](https://github.com/vuhung16au/awesome-compose/blob/master/react-express-mysql)
- Spring / PostgreSQL — [spring-postgres](https://github.com/vuhung16au/awesome-compose/blob/master/spring-postgres)
- PostgreSQL / pgAdmin — [postgresql-pgadmin](https://github.com/vuhung16au/awesome-compose/blob/master/postgresql-pgadmin)
- Elasticsearch / Logstash / Kibana — [elasticsearch-logstash-kibana](https://github.com/vuhung16au/awesome-compose/blob/master/elasticsearch-logstash-kibana)
- NGINX / Node.js / Redis — [nginx-nodejs-redis](https://github.com/vuhung16au/awesome-compose/blob/master/nginx-nodejs-redis)
- FastAPI — [fastapi](https://github.com/vuhung16au/awesome-compose/blob/master/fastapi)
- Django — [django](https://github.com/vuhung16au/awesome-compose/blob/master/django)
- Prometheus / Grafana — [prometheus-grafana](https://github.com/vuhung16au/awesome-compose/blob/master/prometheus-grafana)

Tip: Open any sample’s README for prerequisites and a short “up/down” workflow.

## Final thoughts

Docker standardizes how we package and run software. For development, it brings speed, consistency, and collaboration to teams, while keeping production parity. Start small: pick a Compose sample, scan its `compose.yaml`, and run the stack locally. As needs grow, the same images and Compose definitions evolve into CI/CD pipelines and production deployments.

Further reading:

- Docker Overview — [docker.com/what-docker](https://www.docker.com/what-docker)
- Why Docker — [docker.com/why-docker](https://www.docker.com/why-docker)
- Engine docs — [docs.docker.com/engine](https://docs.docker.com/engine/)
- Build docs — [docs.docker.com/build](https://docs.docker.com/build/)
