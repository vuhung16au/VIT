# Security (NFR)

TODO: Write your prompt here.

Notes:
- This is an independent feature.
- Should implement as soon as possible.
- Can be integrated with github actions

# Logging (NFR)

TODO: Write your prompt here.

Notes:
- This is an independent feature.
- Should implement as soon as possible.
- Start with a clear strategy for logging, and the tools to be used.

# Migrate from local docker MongoDB to MongoDB Atlas

TODO: Write your prompt here.

# Week 10

# Week 09

# Week 08

# Week 07

# Week 06

# Week 05

# Week 04

# Week 03

# Week 02

# Week 01 

# Suggest me a plan for the project

The objective is to implement all the features in the "# List of Features " section.

What I want to know:
- The 10-weekly plan of the project.

The funtional requirements should be implemented in sequence, one by one.

Criteria:
- The schedule schould be incremental, starting from the earliest feature.
- The order of the features to be implemented should be based on the complexity of the feature, from easiest to hardest.

Save your plan to a local file: `docs/10-weekly-plan.md`
The structure of the plan should be:
```
- Week 1: 
- Week 2
- Week 3
- Week 4
- Week 5
- Week 6
- Week 7
- Week 8
- Week 9
- Week 10
```

For each week, 
-  List the features to be implemented, and the estimated time to implement each feature, and a description of the feature.
- List the dependencies between the features, and the order of the features to be implemented.
- List the estimated time to implement each feature.
- List the deliverables 

# Populate the database with some data

- Create a script to populate the database with some data.
- Save the script to a local file: `database/populate-database.js`

# Load database schema into MongoDB

- Load (migrate) the database schema from `database/cookie-barrel-schema.json` into docker's MongoDB.

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