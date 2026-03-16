# Security

Policies for security in the Doctor Booking Application.

## Data and privacy

- **Patient data:** Names, emails, and phone numbers are PII. Do not log them in full (see [logging.md](logging.md)). Do not expose other patients’ data to a user; filter appointments by the current user (e.g. by email) or by authenticated identity when auth is added.
- **Storage:** Store only what is needed for booking and appointment management. Do not store passwords in plain text; if authentication is added, use hashing (e.g. bcrypt) and secure session/token handling.

## API

- **Input validation:** Validate and sanitise all inputs on the server. Reject invalid `doctorId`, `date`, or missing required fields with 400. Use Mongoose schema types and validation where possible.
- **IDs:** Use MongoDB ObjectIds for `doctorId`, appointment id, etc.; validate format before querying to avoid injection or bad queries.
- **CORS:** Backend uses `cors()`; restrict origin in production to the frontend origin(s) if needed.

## Frontend

- **Sensitive data:** Do not store PII in localStorage or sessionStorage unless necessary and then only with clear purpose; do not expose it in URLs or client-side logs.
- **Links:** Use React Router `Link` for in-app navigation; avoid passing sensitive data in query params when possible.

## Environment and deployment

- **Secrets:** Keep `MONGODB_URI`, API keys, and other secrets in `.env`; never commit them. Use `.env.example` with placeholders only.
- **HTTPS:** In production, serve the app and API over HTTPS. Enforce HTTPS when deploying.

## Trust and messaging

- Show a short privacy/security note where appropriate (e.g. footer, before first booking or video) as in the design. Before video: “Your consultation is private and encrypted.”

## Rules for the AI assistant

1. Never log full request/response bodies that contain patient names, emails, or phone numbers.
2. Validate and sanitise all server inputs; return 400 for invalid data.
3. Do not add authentication or store credentials without following secure practices (hashing, secure cookies/tokens). If adding auth, document the approach and keep PII and secrets out of logs and client code.
