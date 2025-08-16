# Vibe Coding Workshop — Build a TODO App

This workshop teaches prompt-driven ("vibe coding") development by building a simple TODO web app with PHP and MariaDB. You’ll iterate with an AI coding agent to design, scaffold, test, and refine.

## Outcomes

- Understand how to drive development with precise prompts and short iterations.
- Stand up a local PHP + MariaDB environment (optionally via Docker).
- Practice single-feature spikes: Hello World, DB connect, MVC/ORM.
- Implement the first user story of a TODO app, then continue with more.

## How to work (vibe coding)

- Start every task with a 2–5 sentence goal and constraints (stack, scope, done).
- Ask for the smallest runnable change; prefer minimal examples over frameworks first.
- Run what you get, capture errors, paste exact errors back, and request a focused fix.
- Keep PR-sized diffs: 1 feature or 1 fix at a time; verify before moving on.
- When in doubt, ask the AI to restate assumptions and a testable acceptance check.

## Workshop Flow

### 00. Overview

- Read: [00-Overview.md](./00-Overview.md)

### 1x. Setup Environment

- Read/Do: [10-Setup-Environment.md](./10-Setup-Environment.md)
- Goal: PHP + MariaDB working locally; editor with AI assistant configured.

### 2x. Try Single Components (one by one)

- 20: [Hello World](./20-Hello-World.md) — no DB; confirm PHP executes.
- 21: [Hello MariaDB](./21-Hello-MariaDB.md) — connect/query MariaDB.
- 22: [Hello Laravel](./22-Hello-Laravel.md) — optional MVC + ORM demo.

### 30. Choose Your Stack (before the app)

- Read/Discuss: [30-Choosing-Frameworks.md](./30-Choosing-Frameworks.md)
- Converge on either:
	- Vanilla PHP + MariaDB (simplest path), or
	- Laravel + Eloquent + MariaDB (MVC/ORM path).

### 3x. Implement the TODO App

- Start with: [31-TODO-app.md](./31-TODO-app.md)
- Deliverables for the first story (minimum):
	- A SQL schema for tasks (id, title, optional description, status, timestamps).
	- A page or route to create a task (form submit persists to DB) and a simple list view.
	- Verified "happy path": creating a task shows up in the list and survives page refresh.
- Acceptance checks to paste into your prompt:
	- I can submit a title and see it in the list.
	- Missing title shows a simple validation message; no crash.
	- Data is saved in MariaDB; not only in memory.

### 99. Full User Stories

- Reference: [99-User-Stories.md](./99-User-Stories.md)
- After the first story, pick the next 1–2 stories at a time. Keep iterations small.

## Prompt Templates (copy and adapt)

- Spike a minimal example
	 - Goal: “I need the smallest runnable demo for X.”
	 - Constraints: “Use PHP + MariaDB. No extra features. No tests.”
	 - Output: “Provide files to create, where to place them, and how to verify in the browser.”

- Fix a concrete error
	 - “Here’s the exact error message and the code snippet. Propose the smallest code change to fix it. Explain why in 1–2 sentences.”

- Refine with acceptance checks
	 - “Ensure these pass: [short checklist]. If you change public behavior, say so.”

## What to Submit (if applicable)

- A repo (or folder) with your chosen stack and the TODO app.
- A short README noting:
	 - Stack choice and why (PHP only vs Laravel).
	 - How to run locally (env, DB setup, and a quick smoke test description).
	 - Which user stories are Done and what’s next.

## Tips

- Prefer simple first: Vanilla PHP + mysqli/PDO is fine before using a framework.
- Keep DB credentials and schema changes documented. Automate schema with a single SQL file or migration.
- When you get stuck, reduce scope until it runs, then layer features gradually.

— Start at [00-Overview.md](./00-Overview.md), then proceed in order.

