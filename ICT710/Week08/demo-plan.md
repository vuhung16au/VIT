# Week 08 Demo Plan: Requirements Engineering

## Week Overview

Week 8 focuses on establishing and documenting requirements for interaction design. Students will learn to distinguish functional from non-functional requirements, capture requirements using user stories and use cases, and understand environmental and user constraints that shape design decisions.

## Learning Objectives

- Differentiate between functional and non-functional requirements
- Write clear user stories and use cases from persona needs
- Understand environmental requirements (physical, social, organizational, technical)
- Document user capabilities and constraints
- Apply contextual inquiry findings to requirement specifications
- Create a requirements specification document for the doctor booking app

## Demo 1: Requirements Workshop - From Personas to User Stories (40 mins)

### Objective

Transform persona insights from Week 7 into structured requirements, user stories, and use cases that drive design and development.

### Prerequisites

- Personas from Week 7 (Sarah, Robert, Maya)
- User research data from Week 5
- Next.js 16 with App Router
- Bootstrap 5.3.3 (CDN-based)

### Implementation Steps

1. **Create Requirements Dashboard** (8 mins)
   - Create `src/app/requirements/page.tsx`
   - Build interactive requirements explorer with tabs:
     - Functional Requirements
     - Non-Functional Requirements
     - User Stories
     - Use Cases
     - Environmental Context
   - Add visual indicators for priority (Must Have, Should Have, Could Have)
   - Show traceability: Requirement → Persona → User Story → Feature

2. **Document Functional Requirements** (8 mins)
   - Create `src/data/functionalRequirements.ts`
   - Define 10-15 functional requirements:
     - FR-001: System shall allow users to search doctors by specialty
     - FR-002: System shall display doctor availability in real-time
     - FR-003: System shall send booking confirmation via email
     - FR-004: System shall allow users to cancel appointments
     - FR-005: System shall support recurring appointments
     - FR-006: System shall allow booking for family members
     - FR-007: System shall integrate with calendar apps
     - FR-008: System shall save favorite doctors
     - FR-009: System shall show doctor ratings and reviews
     - FR-010: System shall provide appointment reminders
   - Link each to persona needs
   - Add acceptance criteria for each

3. **Document Non-Functional Requirements** (6 mins)
   - Create `src/data/nonFunctionalRequirements.ts`
   - Define NFRs across categories:
     
     **Usability**:
     - NFR-U1: New users shall complete booking within 5 minutes
     - NFR-U2: Interface shall be accessible (WCAG 2.1 AA)
     - NFR-U3: Font size shall be adjustable from 14px to 24px
     
     **Performance**:
     - NFR-P1: Page load time shall be < 2 seconds
     - NFR-P2: Search results shall appear within 1 second
     
     **Reliability**:
     - NFR-R1: System uptime shall be 99.5%
     - NFR-R2: Data shall be backed up daily
     
     **Security**:
     - NFR-S1: Patient data shall be encrypted
     - NFR-S2: Authentication required for booking
   
   - Show how NFRs affect design decisions

4. **Generate User Stories** (8 mins)
   - Create `src/data/userStories.ts`
   - Write user stories following format: "As a [persona], I want to [action], so that [benefit]"
   
   **Examples**:
   - US-001: As Sarah (busy professional), I want to book via one-click, so that I can save time
   - US-002: As Robert (senior), I want large text and clear instructions, so that I can book without confusion
   - US-003: As Maya (parent), I want to book for my children, so that I can manage family healthcare
   - US-004: As any user, I want appointment reminders, so that I don't miss my visit
   - US-005: As Sarah, I want to filter doctors by next-available slot, so that I can find immediate care
   
   - Add acceptance criteria to each story:
     ```
     US-001 Acceptance Criteria:
     - Given Sarah is logged in
     - When she selects "Quick Book"
     - Then booking completes in 1 click with default doctor
     - And confirmation appears within 2 seconds
     ```

5. **Create Use Case Diagrams** (6 mins)
   - Create `src/components/UseCaseDiagram.tsx`
   - Build interactive use case visualization:
     - Actors: Patient, Doctor, Admin, System
     - Use cases: Book Appointment, Cancel Appointment, View History, Manage Profile
     - Relationships: Include, Extend
   - Make clickable to show detailed flows

6. **Document Environmental Requirements** (4 mins)
   - Create `src/data/environmentalRequirements.ts`
   - Capture context of use:
     
     **Physical Environment**:
     - Users may be in noisy environments (clinic waiting room)
     - Mobile usage in bright sunlight (high contrast needed)
     - Users may be ill/anxious (reduce cognitive load)
     
     **Social Environment**:
     - Privacy concerns (don't show sensitive info in public)
     - May book for others (family members)
     
     **Organizational**:
     - Integrate with existing clinic management systems
     - Comply with healthcare regulations (HIPAA/GDPR)
     
     **Technical**:
     - Support iOS 14+, Android 10+, modern browsers
     - Work on 3G networks (low bandwidth)
     - Offline mode for viewing bookings

### Code Structure

```
Week08/requirements-hub/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md
│   ├── Requirements-Specification.md   # Full spec document
│   └── Traceability-Matrix.md          # Persona → Story → Feature
├── src/
│   ├── app/
│   │   ├── requirements/
│   │   │   ├── page.tsx                # Requirements dashboard
│   │   │   ├── functional/page.tsx
│   │   │   ├── non-functional/page.tsx
│   │   │   ├── user-stories/page.tsx
│   │   │   ├── use-cases/page.tsx
│   │   │   └── environment/page.tsx
│   │   └── traceability/page.tsx       # Requirement tracing
│   ├── components/
│   │   ├── RequirementCard.tsx         # Individual requirement
│   │   ├── UserStoryCard.tsx           # Story with criteria
│   │   ├── UseCaseDiagram.tsx          # Interactive diagram
│   │   ├── TraceabilityMatrix.tsx      # Linking view
│   │   └── PriorityBadge.tsx           # MoSCoW priority
│   ├── data/
│   │   ├── functionalRequirements.ts
│   │   ├── nonFunctionalRequirements.ts
│   │   ├── userStories.ts
│   │   ├── useCases.ts
│   │   └── environmentalRequirements.ts
│   └── types/
│       └── requirements.ts             # TypeScript interfaces
├── public/
│   └── diagrams/                       # Use case diagrams
└── package.json
```

### Key Teaching Points

1. **Requirements are NOT Features**: Requirements describe what users need; features are how we meet those needs
   - Requirement: "User needs to book quickly while on-the-go"
   - Feature: "One-click booking button on mobile app"

2. **Functional vs. Non-Functional**:
   - Functional: What the system DOES (book, cancel, search)
   - Non-Functional: How well it does it (fast, secure, accessible)

3. **User Stories Connect to Personas**: Every story should trace back to a specific persona's goals and pain points

4. **Acceptance Criteria Make Stories Testable**: Clear, measurable criteria for "done"

5. **Environmental Context Shapes Design**: Physical context (mobile, noisy) affects UI choices (large buttons, high contrast)

## Demo 2: Requirements Prioritization (MoSCoW Method) (10 mins)

### Objective

Demonstrate systematic requirement prioritization to guide development effort.

### Implementation Steps

1. **Create Prioritization Board** (4 mins)
   - Create `src/app/prioritization/page.tsx`
   - Build Kanban-style board with 4 columns:
     - **Must Have**: Core functionality (booking, confirmation)
     - **Should Have**: Important but not critical (reminders, favorites)
     - **Could Have**: Nice to have (doctor ratings, reviews)
     - **Won't Have (this time)**: Future features (video consultations)
   - Make requirements draggable between columns

2. **Apply Prioritization Criteria** (3 mins)
   - Show decision matrix:
     - Impact on user goals (high/medium/low)
     - Implementation effort (high/medium/low)
     - Risk if not included (high/medium/low)
   - Calculate priority score
   - Demonstrate trade-offs

3. **Show MVP Scope** (3 mins)
   - Highlight "Must Have" requirements
   - Create MVP (Minimum Viable Product) view
   - Show feature roadmap: MVP → v1.1 → v2.0

### Key Teaching Points

- Not all requirements are equal
- Prioritization aligns team and stakeholders
- MVP focuses on core user needs
- Iterate based on feedback

## Student Exercise: Write User Stories for Portfolio (15 mins)

### Guided Activity

**Task**: Create requirements and user stories for portfolio website based on persona from Week 7.

1. **Identify Functional Requirements** (5 mins)
   Students list 5 functional requirements for their portfolio:
   - Example: "System shall display project case studies"
   - Example: "System shall allow filtering projects by technology"
   - Example: "System shall provide contact form"

2. **Write User Stories** (7 mins)
   From persona (e.g., Jennifer the Recruiter), write 3 user stories:
   
   **Example**:
   - As Jennifer (recruiter), I want to see projects first, so that I can quickly assess skills
   - As Jennifer, I want to filter by technology, so that I can find relevant experience
   - As Jennifer, I want clear contact info, so that I can easily reach out
   
   Add acceptance criteria for at least one story.

3. **Identify Non-Functional Requirements** (3 mins)
   List 2-3 non-functional requirements:
   - Example: Portfolio shall load in < 3 seconds
   - Example: Portfolio shall be mobile-responsive
   - Example: Portfolio shall be accessible (WCAG AA)

### Deliverable

- 5 functional requirements
- 3 user stories with acceptance criteria
- 2-3 non-functional requirements

### Success Criteria

- User stories follow proper format
- Stories link to specific persona
- Acceptance criteria are testable
- NFRs are measurable

## Project Structure

```
Week08/requirements-hub/
├── README.md                              # Project overview, learning goals
├── QUICKSTART.md                          # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md                  # 3-5 key learnings
│   ├── Requirements-Specification.md      # Complete requirements doc
│   ├── User-Story-Template.md            # Story writing guide
│   └── Prioritization-Guide.md           # MoSCoW method explained
├── src/
│   ├── app/                              # Next.js app directory
│   │   ├── requirements/
│   │   ├── prioritization/
│   │   └── traceability/
│   └── components/                       # Requirements components
│       ├── RequirementCard.tsx
│       ├── UserStoryCard.tsx
│       └── UseCaseDiagram.tsx
├── public/                               # Static assets
│   ├── templates/
│   │   ├── user-story-template.pdf
│   │   └── requirements-spec-template.docx
│   └── diagrams/
└── vercel.json                           # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Define requirement types (src/types/requirements.ts)
   Step 2: Create requirement data files (functional, non-functional, stories, use cases)
   Step 3: Build requirements dashboard (tab navigation)
   Step 4: Create requirement cards (display component)
   Step 5: Build user story cards (with acceptance criteria)
   Step 6: Implement use case diagram (interactive SVG or canvas)
   Step 7: Create prioritization board (drag-and-drop)
   Step 8: Build traceability matrix (linking view)
   ```

2. **Acceptance Criteria**:
   - Dashboard must display all requirement types in tabs
   - Minimum 10 functional requirements documented
   - Minimum 8 non-functional requirements across 4 categories
   - Minimum 5 user stories with acceptance criteria
   - Use case diagram must show 4+ use cases
   - Prioritization board must support drag-and-drop
   - Traceability matrix must link persona → story → requirement → feature

3. **Specific File Paths**:
   - Types: `src/types/requirements.ts`
   - Functional reqs: `src/data/functionalRequirements.ts`
   - User stories: `src/data/userStories.ts`
   - Dashboard: `src/app/requirements/page.tsx`
   - Prioritization: `src/app/prioritization/page.tsx`

4. **Data Structure Requirements**:
   ```typescript
   interface Requirement {
     id: string;
     type: 'functional' | 'non-functional';
     title: string;
     description: string;
     persona: string[];       // Links to persona IDs
     priority: 'must' | 'should' | 'could' | 'wont';
     acceptanceCriteria: string[];
     category?: string;       // For NFRs: usability, performance, etc.
   }
   
   interface UserStory {
     id: string;
     as: string;              // Persona name
     iWant: string;           // Action
     soThat: string;          // Benefit
     acceptanceCriteria: string[];
     requirements: string[];  // Links to requirement IDs
   }
   ```

5. **Styling Instructions**:
   - Use Bootstrap 5.3.3 CDN
   - Requirements: `.card`, `.list-group` for requirement lists
   - Priority badges: `.badge bg-danger` (Must), `.badge bg-warning` (Should), `.badge bg-info` (Could)
   - User stories: `.card .border-primary` with story format
   - Use case diagram: SVG with `.stroke-primary`, `.fill-light`
   - Tabs: `.nav-tabs`, `.tab-content`, `.tab-pane`

6. **Code Comments**:
   - Add `// REQUIREMENT:` comments explaining why each requirement exists
   - Comment how requirements trace to personas
   - Note how NFRs affect design choices
   - Explain prioritization decisions

7. **Testing Prompts**:
   - Verify all tabs navigate correctly
   - Test that priority badges display correctly
   - Confirm user stories show acceptance criteria
   - Check traceability links work (click persona → see related stories)
   - Test drag-and-drop in prioritization board

8. **Educational Focus**:
   - Include tooltips explaining requirement types
   - Add examples of good vs. bad requirements
   - Show how vague requirements lead to poor design
   - Demonstrate requirement refinement process

---

**Estimated Total Time**: 60 minutes (40 + 10 + 10 buffer)

**Tech Stack**: Next.js 16, TypeScript, Bootstrap 5.3.3, localStorage for prioritization state

**Focus**: Requirements as a bridge between user research (Week 5-7) and design/prototyping (Week 9). Emphasize clarity, traceability, and testability over technical implementation.
