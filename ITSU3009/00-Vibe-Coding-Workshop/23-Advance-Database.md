Help me create 
- a database schema. Save it as `schema.sql`
- a set of sample data. Save it as `data.sql`

The database is MariaDB and the connection string is as follow:

```
sql://username:password@localhost:3306/database_name
```

The use stories for the app as follows, 
and your task is the create the DB schema & test data for it.

# Registration/Login user stories 

- Students can register for a new account 
- Students can login using email/password 
- Tutors can register for a new account 
- Tutors can login using email/password 

# List of subjects

- Maths
- Science
- English

# System admin user stories 

- System admin can manage users (students and tutors)
- System admin can manage subjects
- System admin can manage tutoring sessions
- System admin can manage student sessions

# Students' user stories

- Students can view available tutors and their subjects.
- Students can book a tutoring session with a tutor.
- Students can see their upcoming sessions and past session history.
- Students can only book one session at a time.
- Students can only book sessions for a tutor who is available at the time.

# Tutors' user stories

- As a tutor, I can see my upcoming sessions and the students who booked them.
- As a tutor, I can see the students who booked my sessions and their details.
- As a tutor, I can see pending sessions and accept or decline them.
- As a tutor, I can set my availability for the next 2 weeks.
- As a tutor, I can select subjects (one or more) I can teach