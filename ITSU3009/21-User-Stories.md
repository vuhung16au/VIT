# User Stories

## Overview

User stories are short, simple descriptions of a feature told from the perspective of the person who desires the capability. They focus on the outcome and value, not the implementation. In Agile teams, stories shape the product backlog, guide conversations, and define the smallest independently valuable increments of work that can be delivered inside a sprint.

For teams adopting vibe coding with AI coding agents, crisp user stories anchor the conversational loop. They turn high-level intent into testable outcomes the agent can implement and you can verify quickly.

## Agile Epic, Sprint & User Stories

- Epic: A large body of work that can be broken down into multiple user stories and will span multiple sprints.
- User story: A small, valuable slice of customer-facing functionality, written in plain language.
- Sprint: A time-boxed iteration (often 1–2 weeks) in which a set of prioritized user stories is implemented, tested, and potentially shipped.
- Optional grouping: Organizations also use themes or initiatives to group epics and stories across longer time horizons.

## What is User Story

A user story captures who the user is, what they want, and why it matters. A classic framing from Agile practice treats a story as a “promise for a conversation,” encouraging ongoing clarification with stakeholders as delivery progresses. Helpful heuristics include:

- The Three Cs: Card (the story), Conversation (ongoing discussion), and Confirmation (acceptance criteria).
- INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.

Common templates (pick one):

- As a ROLE, I want CAPABILITY, so that BENEFIT.
- In order to BENEFIT, as a ROLE I can CAPABILITY.
- As WHO WHEN WHERE, I want WHAT because WHY.

## Example User Stories

Examples for a simple recipe-sharing app:

1) As a visitor, I want to sign up with email and password so that I can save and share recipes.
2) As a signed-in user, I want to create a recipe with title, ingredients, and instructions so that others can try it.
3) As a user, I want to upload a photo for my recipe so that it looks appealing.
4) As a user, I want to search recipes by keyword and filter by cuisine so that I can find ideas fast.
5) As a user, I want to mark recipes as favorites so that I can find them later.
6) As a user, I want to edit or delete my recipes so that I can keep my content up to date.
7) As an admin, I want to remove inappropriate content so that the community stays safe.
8) Abuse/Attack story: As a malicious actor, I want to brute-force login so that I can take over accounts (we will mitigate via rate limiting and MFA).

## User Story Template

Minimal story card:

- Title
- Story: As a ROLE, I want CAPABILITY, so that BENEFIT.
- Description/Notes: context, constraints, references
- Acceptance criteria: objective checks (often Given/When/Then)
- Dependencies: linked stories or tech prerequisites
- Estimate: story points (e.g., Fibonacci 1,2,3,5,8,13)
- Priority: business value/risk

Example (filled):

- Title: Favorite a recipe
- Story: As a user, I want to favorite a recipe so that I can quickly find it later.
- Notes: Show a heart icon on recipe cards and the detail page; requires auth.
- Acceptance criteria: See section below.

## Acceptance Criteria

Acceptance criteria define the boundaries of a story and confirm when it’s done. They should be clear, testable, and aligned with the user’s goal. A common style is Gherkin’s Given/When/Then.

Example for “Favorite a recipe”:

- Given I am signed in, when I click the heart on a recipe, then the heart appears filled and the recipe is saved to my favorites.
- Given a recipe is already in my favorites, when I click the filled heart, then it’s removed from favorites and the heart appears unfilled.
- Given I open “My Favorites,” when there are favorited recipes, then I see a paginated list with thumbnails and titles that link to recipe pages.
- Given I am not signed in, when I click the heart, then I’m prompted to sign in and the favorite is not stored.

## Why good user stories matter for vibe coding with AI coding agents

Vibe coding emphasizes describing outcomes in natural language and rapidly iterating with an AI assistant. High-quality user stories make that loop effective:

- Clarity: Stories articulate user value and constraints, reducing ambiguous prompts and rework.
- Testability: Acceptance criteria translate directly into checks the agent can implement and you can verify.
- Flow: Small, independent stories fit the conversational “build-run-refine” loop and enable fast feedback.
- Traceability: Stories map to commits, pull requests, and deploys, aiding Day 1+ maintenance beyond initial prototypes.
- Safety/quality: Abuse/security stories surface non-happy paths early, informing auth, rate limiting, and error handling.

Sources discuss vibe coding as a natural-language-driven workflow with AI that benefits from iterative refinement, human review, and deployment practices—user stories provide the structure to do this responsibly.

## Tips for Writing Effective User Stories

- Anchor on user value; avoid prescribing the technical solution.
- Keep them small and independent; split until they’re completable inside a sprint.
- Make them testable; write acceptance criteria up front.
- Capture constraints (performance, accessibility, security) as criteria or companion tasks.
- Maintain a living conversation; add detail “just in time.”
- Use story mapping to keep the big picture while sequencing slices.
- Apply INVEST and prioritize by value and risk.
- Include at least one abuse/security story per epic.

## Example prompt to build a small app from scratch with coding agents

You can paste this into your AI coding agent to bootstrap a recipe-sharing app. Adjust as needed.

Prompt:

“You are an AI coding agent. Build a minimal, production-ready recipe-sharing web app. Scope and requirements below. Work iteratively: generate code, run locally, validate against acceptance criteria, and report progress. Create a repo with clear README, seeds, and tests.

Primary user stories:
 
1) As a visitor, I can sign up and sign in with email/password so that I can create and manage recipes.
2) As a user, I can create a recipe (title, ingredients, instructions, photo) so that others can try it.
3) As a user, I can browse and search recipes by keyword and filter by cuisine so that I can find ideas quickly.
4) As a user, I can favorite/unfavorite a recipe so that I can revisit it later.
5) As a user, I can edit and delete my own recipes so that I can keep them current.
6) As a user, I can view my favorites in a dedicated page so that I can organize my cooking plans.
7) As an admin, I can remove inappropriate content so that the community remains safe.
8) Abuse story (mitigation): Prevent brute-force login via rate limiting and lockout; require strong passwords; validate uploads; sanitize inputs.

Acceptance criteria examples:
 
- Sign up/in: Given a new user registers with valid credentials, when they confirm, then they can sign in and see their dashboard. Given repeated failed logins, when attempts exceed N, then further attempts are throttled.
- Create recipe: Given I am signed in, when I submit a valid recipe, then it appears in the public list with my username.
- Favorite: See criteria in earlier section.

Non-functional:
 
- Accessibility: Basic keyboard nav and ARIA roles on interactive elements.
- Security: Input validation, server-side checks, authz on all mutations, rate limiting on auth endpoints, safe file uploads.
- Performance: Initial page load under ~2s on a typical connection.

Deliverables:
 
- Source code in a single repo; include minimal seed data.
- README with setup, run, and test instructions.
- Basic unit/integration tests for auth, recipe CRUD, and favorites.
- Optional: Containerization and a one-command local run.

Start with a simple, well-structured stack you can fully implement quickly. Prioritize passing acceptance criteria. Iterate until green.”

## Conclusions

Well-written user stories translate intent into small, testable slices that align perfectly with vibe coding’s conversational, iterative workflow. They help AI coding agents build the right thing fast, while acceptance criteria guard quality and keep teams ready for Day 1+ evolution.

References (further reading):

- [Wikipedia: User story](https://en.wikipedia.org/wiki/User_story) — background, templates, story mapping, acceptance criteria.
- [Google Cloud: What is vibe coding?](https://cloud.google.com/discover/what-is-vibe-coding) — process, code-level loop and lifecycle.
- [Arsturn: Case studies of successful vibe coding projects](https://www.arsturn.com/blog/analyzing-case-studies-of-successful-vibe-coding-projects-in-tech) — examples and lessons.
- [Madhukar Kumar: A comprehensive guide to vibe coding tools](https://medium.com/madhukarkumar/a-comprehensive-guide-to-vibe-coding-tools-2bd35e2d7b4f) — tooling landscape.
