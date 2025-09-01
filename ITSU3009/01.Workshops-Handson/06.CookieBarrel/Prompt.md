# Create `.gitignore` file 

- For this project (next.js and express.js)
<!-- - Add `Promt.md` to the `.gitignore` file. -->

# Implement a "hello world" app for Next.js 

- Deploy it to the docker container.
- Update `README.md` and write down the steps to run the app briefly.

# Implement a "hello world" app for Express.js

- Deploy it to the docker container.
- Update `README.md` and write down the steps to run the app briefly.

# Create database schema

Based on the "# List of Features " section, 1) Suggest and 2) Create a database schema for the project.
I will be using MongoDB (offline development, with docker) as my database.

# Save the database schema to local file: 
- `docs/database-schema.md`: Explain the database schema in a human-readable format.
- `database/cookie-barrel-schema.json`

# Docker containerization for development

Based on the conversation below, please create a file `docs/docker-containerizatiion-selection.md` and describe what will be, and what will not be containerized, and why. 

# I also need a web-based database management tool for MongoDB. What should I use?

Please update the `compose.yaml` file to include mongo-express.

# Improve the prompt 

Give me a better prompt for the section "# Create a docker container for the project".

# Create a docker container for the project

We use the following docker container for the project:

- Frontend: Next.js
- Backend: Express.js
- Database: MongoDB

I want to mount the source code that I will be working on into the container.

The mounted source code will be in the `./source` directory. Note that I have backend and frontend components. 

When first docker containers (for nextjs and expressjs) are created, the volume will be empty.
I will be copying the source code into the container and run them with docker


# Technology Stack 


For offline development, use the following tools/frameworks:

List of tools/frameworks (React Native, Next.js, Express.js, MongoDB, Stripe, WhatsApp API, FCM (Firebase Cloud Messaging), docker).


# List of Features 

What our system actually delivers

- user login
- menu browsing
- cart
- order placement
- payments
- order tracking
- notifications
- admin dashboard
- logging
- security