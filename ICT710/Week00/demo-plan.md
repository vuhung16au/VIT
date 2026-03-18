# Week 00 Demo Plan: Environment Setup and First IxD App

## Week Overview

Week 00 prepares students for the rest of the course. The goal is not to build a large application, but to make sure every student can run a modern frontend project and understand how a very small interface can demonstrate core Interaction Design (IxD) ideas.

## Learning Objectives

- set up a working frontend development environment
- understand the role of Node.js, npm, React, and Next.js
- run, edit, and build a Next.js app successfully
- connect simple interface behaviors to IxD principles
- build confidence before the main weekly projects begin

## Demo Project

Project name:

- `Week00/interaction-basics/`

Project idea:

- a tiny web app called **Interaction Basics**
- scenario: book a short study consultation

This is intentionally small and controlled so students can focus on setup, interaction, and feedback instead of large project complexity.

## Why This Project Works for Week 00

It is better than a plain Hello World app because it demonstrates:

- input
- selection
- validation
- feedback
- progress
- confirmation

These are all beginner-friendly ways to introduce IxD, UI, and UX.

## Demo Flow

### Step 1: Verify the Environment

Show students:

- `node -v`
- `npm -v`
- `npm install`
- `npm run dev`
- `npm run build`

Explain briefly:

- Node.js runs JavaScript tooling
- npm installs dependencies and runs scripts
- Next.js is the main framework used in later weeks

### Step 2: Create the App

Create:

- `Week00/interaction-basics/`

Suggested stack:

- Next.js 16
- App Router
- TypeScript
- Tailwind CSS

### Step 3: Build a Tiny IxD Demo

The app should include:

1. landing page with one clear primary action
2. short form with:
   - student name
   - email
   - consultation type
3. time-slot selection using clickable cards or buttons
4. submit button with disabled state until required fields are valid
5. loading feedback when submitting
6. confirmation state after submission

## IxD Principles to Demonstrate

### 1. Visibility of System Status

- loading message after submit
- clear confirmation after success

### 2. Feedback

- selected option highlights
- validation messages appear when needed

### 3. Error Prevention

- required fields
- disabled submit button until form is valid

### 4. Consistency

- same button style
- same spacing and labels throughout

### 5. Recognition Rather Than Recall

- visible slot choices
- visible consultation type options

## Suggested Code Structure

```text
Week00/
├── Tools.md
├── Environment-Setup.md
├── Troubleshooting.md
├── demo-plan.md
└── interaction-basics/
    ├── README.md
    └── src/
        ├── app/
        │   ├── page.tsx
        │   └── layout.tsx
        └── components/
            ├── BookingForm.tsx
            ├── SlotSelector.tsx
            └── ConfirmationCard.tsx
```

## Teaching Points

1. A working environment is the first design tool students need.
2. Even a tiny app can demonstrate meaningful IxD principles.
3. Feedback and clarity matter from the very first project.
4. Build success is part of the workflow, not an optional extra.
5. Students should leave Week 00 confident enough to start Week 01.

## Deliverable

Students should complete:

- a working local Next.js app
- one small form-based interaction
- one visible confirmation state
- one successful production build

## Success Criteria

- app runs locally
- student can edit UI and observe changes
- form interaction demonstrates at least 3 IxD principles
- `npm run build` succeeds
