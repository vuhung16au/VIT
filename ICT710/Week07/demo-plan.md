# Week 07 Demo Plan: User-Centered Design

## Week Overview

Week 7 focuses on User-Centered Design (UCD) methodology, emphasizing early focus on users, empirical measurement, and iterative design. Students will learn to create personas, develop user scenarios, and apply usability guidelines to the doctor booking app.

## Learning Objectives

- Understand the three core principles of UCD: early user focus, empirical measurement, and iterative design
- Create data-driven user personas based on research
- Develop realistic user scenarios and user journeys
- Apply usability guidelines: visibility, memory load, feedback, and consistency
- Implement design decisions based on user context and characteristics

## Demo 1: Persona-Driven Redesign of Doctor Booking (35 mins)

### Objective

Demonstrate how to create user personas from data and use them to drive design decisions, creating personalized experiences for different user types.

### Prerequisites

- Doctor booking app from previous weeks
- Data gathering insights from Week 5
- Next.js 16 with App Router
- Bootstrap 5.3.3 (CDN-based)

### Implementation Steps

1. **Create Persona Profiles** (8 mins)
   - Create `src/data/personas.ts`
   - Define 3 data-driven personas:
     - **Sarah (Busy Professional)**: Age 35, tech-savvy, time-constrained, books on mobile
     - **Robert (Senior Citizen)**: Age 68, limited tech experience, prefers clarity, needs larger text
     - **Maya (Parent)**: Age 32, multitasking, needs reminders, values efficiency
   - Include for each persona:
     - Demographics (age, occupation, tech literacy)
     - Goals (what they want to accomplish)
     - Pain points (current frustrations)
     - Behaviors (how they interact with technology)
     - Quote (typical statement)

2. **Build Persona Selector** (5 mins)
   - Create `src/components/PersonaSelector.tsx`
   - Display persona cards on landing page
   - Allow user to select "Who are you?" 
   - Store selection in state/localStorage
   - Use selection to personalize entire experience

3. **Implement Persona-Specific UIs** (15 mins)
   - Create `src/app/booking/[persona]/page.tsx`
   
   **For Sarah (Busy Professional)**:
   - Quick booking mode (one-screen form)
   - Calendar integration button
   - "Next available" shortcut
   - Minimal steps, maximum efficiency
   - Dark mode option
   
   **For Robert (Senior)**:
   - Large text (18px base)
   - High contrast colors (WCAG AAA)
   - Step-by-step wizard (one question per screen)
   - Confirmation at each step
   - Phone call option prominently displayed
   
   **For Maya (Parent)**:
   - Reminder setup (SMS/email)
   - "Book for family member" option
   - Save favorite doctors
   - Quick rebooking of past appointments
   - Multi-tasking friendly (save progress)

4. **Add User Journey Visualization** (4 mins)
   - Create `src/components/UserJourneyMap.tsx`
   - Display journey map for each persona:
     - Touchpoints (awareness → booking → reminder → visit)
     - Emotions at each stage (frustrated, relieved, confident)
     - Pain points highlighted
     - Opportunities for improvement
   - Show side-by-side comparison

5. **Implement Usability Guidelines** (3 mins)
   - Add visibility: Progress indicator, clear labels
   - Reduce memory load: Auto-fill from previous bookings
   - Provide feedback: Loading states, confirmation messages
   - Ensure consistency: Same button styles, terminology

### Code Structure

```
Week07/persona-first/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md
│   └── Persona-Research.md          # How personas were created
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Persona selector landing
│   │   ├── booking/
│   │   │   ├── sarah/page.tsx       # Quick booking for professionals
│   │   │   ├── robert/page.tsx      # Simplified for seniors
│   │   │   └── maya/page.tsx        # Family-friendly booking
│   │   └── personas/page.tsx        # Persona gallery & details
│   ├── components/
│   │   ├── PersonaSelector.tsx      # "Who are you?" selector
│   │   ├── PersonaCard.tsx          # Persona profile display
│   │   ├── UserJourneyMap.tsx       # Journey visualization
│   │   ├── QuickBooking.tsx         # For Sarah
│   │   ├── StepByStepBooking.tsx    # For Robert
│   │   └── FamilyBooking.tsx        # For Maya
│   ├── data/
│   │   ├── personas.ts              # Persona definitions
│   │   └── journeyMaps.ts           # Journey data
│   ├── hooks/
│   │   └── usePersona.ts            # Persona context hook
│   └── types/
│       └── persona.ts               # TypeScript interfaces
├── public/
│   └── avatars/                     # Persona avatar images
└── package.json
```

### Key Teaching Points

1. **Personas Ground Design in Research**: Show how personas are created from real user data (Week 5 surveys/interviews), not assumptions

2. **Design for Specific Users, Not Everyone**: One size doesn't fit all. Demonstrate how different personas need different solutions

3. **User Goals Drive Features**: Sarah needs speed, Robert needs clarity, Maya needs flexibility. Features should serve user goals

4. **Mental Models Matter**: Robert's mental model (linear, step-by-step) differs from Sarah's (task-focused, shortcuts)

5. **Accessibility is User-Centered**: Robert's needs (large text, high contrast) benefit all users

## Demo 2: Usability Guidelines in Action (15 mins)

### Objective

Demonstrate how applying Nielsen's usability heuristics and other guidelines improves the user experience.

### Implementation Steps

1. **Create Before/After Comparison** (5 mins)
   - Create `src/app/guidelines/page.tsx`
   - Build split-screen view showing:
     - **Left**: Bad design (violates guidelines)
     - **Right**: Good design (follows guidelines)
   
   **Examples to show**:
   - **Visibility**: Hidden submit button vs. prominent CTA
   - **Memory Load**: Require date format vs. date picker
   - **Feedback**: Silent submission vs. loading + confirmation
   - **Consistency**: Different button styles vs. unified design

2. **Implement Interactive Guidelines Checklist** (5 mins)
   - Create checklist component
   - Show 10 usability guidelines:
     - Visibility of system status
     - Match between system and real world
     - User control and freedom
     - Consistency and standards
     - Error prevention
     - Recognition rather than recall
     - Flexibility and efficiency
     - Aesthetic and minimalist design
     - Help users recognize errors
     - Help and documentation
   - Check off as demonstrated in app

3. **Add Cognitive Walkthrough Tool** (5 mins)
   - Create simple walkthrough interface
   - For each step in booking, ask:
     - "Will user know what to do?"
     - "Will user see how to do it?"
     - "Will user understand feedback?"
     - "Will user know to proceed?"
   - Highlight areas needing improvement

### Key Teaching Points

- Guidelines prevent common usability issues
- Apply early in design, not as afterthought
- Guidelines work together (violation of one often violates others)
- User testing reveals which guidelines matter most for your context

## Student Exercise: Create a Persona and Journey Map (20 mins)

### Guided Activity

**Task**: Create a persona for their portfolio website (from Week 3) and map their journey.

1. **Define Persona** (10 mins)
   Using template provided, students create:
   - Name and photo (stock image)
   - Demographics (age, job, tech level)
   - Goals (what do they want from portfolio?)
   - Pain points (what frustrates them?)
   - Motivations (why are they visiting?)
   - Quote (typical thought)
   
   **Example persona for portfolio**:
   - Name: Jennifer, HR Recruiter
   - Age: 42, moderate tech skills
   - Goal: Quickly assess candidate fit
   - Pain points: Too much text, hard to find projects
   - Quote: "I have 50 portfolios to review today"

2. **Map User Journey** (8 mins)
   Draw journey map with:
   - Stages: Discovery → Exploration → Evaluation → Contact
   - Actions at each stage
   - Emotions (happy, frustrated, confused)
   - Pain points (where they struggle)
   - Opportunities (how to improve)

3. **Share & Discuss** (2 mins)
   - Students share one insight from their persona
   - Discuss how persona changes design priorities

### Deliverable

- One persona profile (can be on paper or digital)
- Journey map sketch
- 3 design changes based on persona

### Success Criteria

- Persona is specific and realistic (not generic)
- Based on evidence (even if assumptions, mark as such)
- Journey map identifies at least 2 pain points
- Design changes address persona's goals

## Project Structure

```
Week07/persona-first/
├── README.md                          # Project overview, learning goals
├── QUICKSTART.md                      # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md              # 3-5 key learnings
│   ├── Persona-Research.md           # How to create personas
│   ├── Journey-Mapping-Guide.md      # Journey map methodology
│   └── Usability-Guidelines.pdf      # Reference checklist
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── page.tsx
│   │   ├── booking/[persona]/
│   │   ├── personas/
│   │   └── guidelines/
│   └── components/                   # Persona components
│       ├── PersonaSelector.tsx
│       ├── UserJourneyMap.tsx
│       └── [persona-specific]
├── public/                           # Static assets
│   ├── avatars/
│   └── templates/
│       ├── persona-template.pdf
│       └── journey-map-template.pdf
└── vercel.json                       # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Define persona data structure (src/types/persona.ts)
   Step 2: Create persona data (src/data/personas.ts) with 3 detailed personas
   Step 3: Build persona selector component (landing experience)
   Step 4: Implement Sarah's booking flow (quick, efficient)
   Step 5: Implement Robert's booking flow (large text, step-by-step)
   Step 6: Implement Maya's booking flow (family features)
   Step 7: Create journey map visualization
   Step 8: Build guidelines comparison page
   ```

2. **Acceptance Criteria**:
   - 3 complete personas with all fields filled
   - Each persona's booking flow must be distinctly different
   - Robert's UI must use minimum 18px font size
   - Sarah's UI must complete booking in ≤3 clicks
   - Maya's UI must allow saving progress
   - Journey map must show 4+ touchpoints
   - Guidelines page must show 5+ before/after examples

3. **Specific File Paths**:
   - Persona types: `src/types/persona.ts`
   - Persona data: `src/data/personas.ts`
   - Sarah's flow: `src/app/booking/sarah/page.tsx`
   - Robert's flow: `src/app/booking/robert/page.tsx`
   - Journey component: `src/components/UserJourneyMap.tsx`

4. **Styling Instructions**:
   - Use Bootstrap 5.3.3 CDN
   - Sarah: Dark mode (`.bg-dark`, `.text-light`), compact spacing
   - Robert: High contrast (`.text-dark` on `.bg-white`), large `.fs-4` text
   - Maya: Warm colors (`.bg-primary-subtle`), friendly tone
   - Persona cards: `.card`, `.card-body`, avatar with `.rounded-circle`

5. **Data Requirements**:
   - Each persona must include: name, age, occupation, tech level (1-5), goals (array), pain points (array), behaviors (array), quote (string), avatar URL
   - Journey maps must include: stages (array), emotions (array), touchpoints (array), pain points (array)

6. **Code Comments**:
   - Add `// PERSONA:` comments explaining design rationale
   - Comment why specific UI choices serve persona goals
   - Note usability guidelines being applied
   - Explain user-centered design decisions

7. **Testing Prompts**:
   - Verify persona selector saves choice to localStorage
   - Test that each persona flow is visually distinct
   - Confirm Robert's interface has readable text sizes (inspector)
   - Verify Sarah's flow can complete in 3 clicks
   - Test responsive behavior for all personas

8. **UCD Principles to Demonstrate**:
   - Early focus on users: Personas created from Week 5 data
   - Empirical measurement: Show metrics for each persona (time to complete, errors)
   - Iterative design: Include notes on "v1 vs. v2" based on feedback

---

**Estimated Total Time**: 60 minutes (35 + 15 + 10 buffer)

**Tech Stack**: Next.js 16, TypeScript, Bootstrap 5.3.3, localStorage

**Focus**: User-centered design principles and persona-driven development, not technical complexity. Emphasize how designing for specific users creates better experiences for everyone.
