# Phase 0-1: Docker Refresher

## Overview
This phase helps you refresh your Docker knowledge with hands-on exercises. Complete these tasks to build confidence before working on the main e-commerce project.

## Learning Objectives
- Create and build Docker images using Dockerfile
- Write and run docker-compose files
- Set up MongoDB with web interface
- Use AI assistants effectively for Docker tasks

---

## Task 1: Simple Nginx Dockerfile

### What to do:
Create a basic Dockerfile for nginx and build an image.

### AI Prompt to use:
```
Help me create a simple Dockerfile for nginx that:
- Uses the official nginx image
- Exposes port 80
- Creates a simple index.html file
- Shows me how to build and run the container
```

### Expected outcome:
- Working Dockerfile
- Built nginx image
- Running container serving a simple webpage

---

## Task 2: Simple Docker Compose for Nginx

### What to do:
Create a docker-compose.yml file to run nginx container.

### AI Prompt to use:
```
Help me create a docker-compose.yml file that:
- Runs nginx service
- Maps port 8080 on host to port 80 in container
- Uses the nginx image I built earlier
- Shows me how to start and stop the services
```

### Expected outcome:
- Working docker-compose.yml
- Nginx running via docker-compose
- Accessible at localhost:8080

---

## Task 3: MongoDB with Web Interface

### What to do:
Create a docker-compose file with MongoDB and a web interface to view data.

### AI Prompt to use:
```
Help me create a docker-compose.yml file that includes:
- MongoDB service with persistent data storage
- MongoDB Express (web interface) to view data
- Proper networking between services
- Volume mapping for data persistence
- Show me how to access the web interface and add sample data
```

### Expected outcome:
- MongoDB running in container
- Web interface accessible in browser
- Ability to create databases and collections
- Data persists after container restart

---

## Quick Commands Reference

### Docker Basics:
```bash
# Build image
docker build -t my-nginx .

# Run container
docker run -p 8080:80 my-nginx

# List images
docker images

# List containers
docker ps
```

### Docker Compose:
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Rebuild and start
docker-compose up --build
```

---

## Success Criteria
- [ ] Nginx container serves webpage
- [ ] Docker-compose starts nginx successfully
- [ ] MongoDB runs with web interface
- [ ] Can create and view data in MongoDB
- [ ] All containers restart properly

