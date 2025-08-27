# Check list

- docker installed
- node installed
- npm installed
- react installed
- express installed

# Overview of this project

- Build a web application using React.js and Express.js and PostgreSQL using AI agent 

# Summarise this project 

- Explain `compose.yaml`

# Step 1: Explain how to setup postgres + pgadmin using compose.yaml.

Explain brielfly how to setup postgres + pgadmin using compose.yaml.
save your response to `docs/database-readme.md` 

# Step 2: Initialize database 

The database on PostgreSQL has one table `users` with the following columns:  

- id
- name
- email
- password
- created_at
- updated_at

Help me to create the table and the columns.
The DB will be initialized with the following data:

- name: John Doe
- email: john.doe@example.com
- password: 123456

- name: Vu Nguyen
- email: vu.nguyen@example.com
- password: 123456


# Step 3: Develop a web application using React.js and Express.js and PostgreSQL

Frontend: React.js
Backend: Express.js
Database: PostgreSQL (see compose.yaml for the database configuration)

This application will have the following features:
- Display a list of users from the database
- Add a new user to the database
- Edit an existing user
- Delete an existing user
(this is simple CRUD application)

Don't implement the the login feature yet; as I will implement it later.

Creates `docs/Setup-and-Run.md` and write on how to setup and run the application.
(should focus on node, npm, react, express)

Additional requirements:
- You can decide the UI/UX of the application.
You can decide the folder structure of the application.
You can decide the name of the application.
This application will be deployed to Vercel.


