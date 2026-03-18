# Week 09 Demo Plan: Prototyping and Construction

## Week Overview

Week 9 focuses on the prototyping process, from low-fidelity to high-fidelity prototypes. Students will learn when to use each fidelity level, techniques for rapid prototyping, and how prototypes facilitate communication, gather feedback, and support iterative design.

## Learning Objectives

- Understand the purpose and value of prototyping in the design process
- Distinguish between low-fidelity and high-fidelity prototypes
- Apply appropriate prototyping techniques at different design stages
- Create paper prototypes, wireframes, and interactive prototypes
- Gather and incorporate feedback from prototype testing
- Iterate designs based on prototype insights

## Demo 1: From Sketch to Interactive - Prototyping Evolution (45 mins)

### Objective

Demonstrate the complete prototyping journey: paper prototype → wireframe → low-fi digital → high-fi interactive, using the doctor booking app to show when and why each level is appropriate.

### Prerequisites

- Requirements from Week 8
- Next.js 16 with App Router
- Tailwind CSS 4.2 (for rapid, utility-first prototyping)

### Implementation Steps

1. **Create Prototyping Gallery** (5 mins)
   - Create `src/app/page.tsx` as prototype showcase
   - Build timeline showing 4 fidelity levels:
     - **Stage 1**: Paper Prototype (photos/sketches)
     - **Stage 2**: Wireframe (grayscale, low detail)
     - **Stage 3**: Low-Fi Interactive (basic functionality, rough styling)
     - **Stage 4**: High-Fi Interactive (full design, animations)
   - Show example of booking flow at each stage
   - Add "When to use" guidance for each level

2. **Implement Paper Prototype Simulator** (7 mins)
   - Create `src/app/prototypes/paper/page.tsx`
   - Display scanned paper sketches (or hand-drawn digital)
   - Show "Wizard of Oz" technique:
     - User clicks on paper regions
     - Simulated "person behind curtain" changes screens
     - Demonstrates functionality without code
   - Include annotation layer showing design notes
   - Show feedback captured during paper testing

3. **Build Wireframe Version** (8 mins)
   - Create `src/app/prototypes/wireframe/page.tsx`
   - Design grayscale wireframes:
     - No colors (shades of gray only)
     - Placeholder text (Lorem ipsum or FPO)
     - Simple boxes for images
     - Generic icons
     - Focus on layout and information architecture
   - Elements to include:
     - Doctor list (card layout)
     - Booking form (field placement)
     - Confirmation screen (hierarchy)
   - Add measurement annotations (margins, spacing)

4. **Create Low-Fi Interactive Prototype** (10 mins)
   - Create `src/app/prototypes/low-fi/page.tsx`
   - Build basic interactive version:
     - **Interactivity**: Clickable, functional forms
     - **Visual**: Simple colors (primary, secondary only)
     - **Content**: Real text, but limited
     - **Components**: Basic HTML/CSS, no animations
     - **State**: Simple state management (useState)
   - Features to implement:
     - Select doctor (clicks highlight selection)
     - Choose date (basic date input)
     - Submit booking (shows confirmation)
   - Use Tailwind utility classes for rapid styling
   - Focus on testing user flow, not aesthetics

5. **Build High-Fi Interactive Prototype** (10 mins)
   - Create `src/app/prototypes/high-fi/page.tsx`
   - Develop polished, production-ready version:
     - **Interactivity**: Full functionality, edge cases handled
     - **Visual**: Complete design system (colors, typography, imagery)
     - **Content**: Real, meaningful content
     - **Components**: Reusable, well-structured
     - **Animations**: Micro-interactions, transitions
     - **Responsiveness**: Mobile, tablet, desktop
   - Features to implement:
     - Doctor cards with photos, ratings, bios
     - Calendar with availability highlighting
     - Smooth transitions between steps
     - Loading states, error messages
     - Confirmation with summary and next steps
   - Apply design polish (shadows, rounded corners, icons)

6. **Create Prototype Comparison View** (5 mins)
   - Create `src/components/PrototypeComparison.tsx`
   - Build side-by-side comparison tool:
     - Split screen showing 2 prototypes simultaneously
     - Sync scrolling and interactions
     - Show time/cost to create each
     - Display feedback gathered from each
   - Highlight when to move to next fidelity level

### Code Structure

```
Week09/prototype-evolution/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md                # Brief IxD, UI, UX lessons from the project
│   ├── Key-Takeaways.md
│   ├── Prototyping-Guide.md          # When to use each fidelity
│   └── Paper-Prototype-Template.pdf  # Printable sketching template
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Prototype gallery/timeline
│   │   └── prototypes/
│   │       ├── paper/page.tsx        # Paper prototype photos
│   │       ├── wireframe/page.tsx    # Grayscale wireframes
│   │       ├── low-fi/page.tsx       # Basic interactive
│   │       └── high-fi/page.tsx      # Polished interactive
│   ├── components/
│   │   ├── PrototypeTimeline.tsx     # Fidelity progression
│   │   ├── PaperPrototypeViewer.tsx  # Paper sketch display
│   │   ├── WireframeCanvas.tsx       # Wireframe builder
│   │   ├── PrototypeComparison.tsx   # Side-by-side view
│   │   └── FeedbackAnnotations.tsx   # Sticky note feedback
│   ├── data/
│   │   └── prototypeFeedback.ts      # Feedback per stage
│   └── styles/
│       └── wireframe.css             # Grayscale styling
├── public/
│   ├── paper-sketches/               # Scanned sketches
│   ├── wireframes/                   # Wireframe images
│   └── icons/                        # Prototype icons
└── tailwind.config.js
```

### Key Teaching Points

1. **Fidelity Matches Design Stage**:
   - Early exploration: Low-fi (cheap, fast to change)
   - Concept testing: Mid-fi (realistic enough to test)
   - Stakeholder buy-in: High-fi (shows final vision)
   - Development handoff: High-fi (specification)

2. **Low-Fi Encourages Feedback**: Rough prototypes invite criticism ("it's just a sketch"), polished ones don't

3. **Fail Fast, Fail Cheap**: Paper prototype costs $0 and 30 minutes. Production code costs $X,XXX and weeks

4. **Prototypes Answer Different Questions**:
   - Paper: "Is this the right concept?"
   - Wireframe: "Is the layout clear?"
   - Low-fi: "Can users complete the task?"
   - High-fi: "Is it enjoyable to use?"

5. **Don't Prototype Everything**: Only prototype uncertain or risky aspects

## Demo 2: Rapid Prototyping Techniques (10 mins)

### Objective

Demonstrate quick prototyping techniques: storyboarding, Wizard of Oz, and component libraries.

### Implementation Steps

1. **Storyboarding for User Flows** (4 mins)
   - Create `src/app/storyboard/page.tsx`
   - Build comic-strip style storyboard:
     - Scene 1: Sarah needs urgent care
     - Scene 2: Opens booking app on phone
     - Scene 3: Finds available doctor nearby
     - Scene 4: Books in 2 clicks
     - Scene 5: Receives confirmation
     - Scene 6: Attends appointment
   - Show user's context, emotions, and thoughts
   - Use simple stick figures and speech bubbles

2. **Wizard of Oz Demonstration** (3 mins)
   - Create `src/app/wizard-oz/page.tsx`
   - Simulate AI doctor recommendations:
     - User describes symptoms
     - "Human operator" (behind scenes) suggests doctor
     - Appears as AI-powered recommendation
   - Show how to test concept before building AI

3. **Component Library Showcase** (3 mins)
   - Create `src/app/components-demo/page.tsx`
   - Display reusable component library:
     - Buttons (primary, secondary, danger)
     - Form inputs (text, date, select)
     - Cards (doctor profiles)
     - Modals (confirmations)
   - Show how components speed up prototyping

### Key Teaching Points

- Storyboards communicate user journey beyond UI
- Wizard of Oz tests concepts without building technology
- Component libraries enable consistent, rapid prototyping

## Student Exercise: Paper Prototype Testing (20 mins)

### Guided Activity

**Task**: Create paper prototype for ONE feature of portfolio website and test with partner.

1. **Sketch Paper Prototype** (7 mins)
   - Students choose one feature to prototype:
     - Option A: Project filtering by technology
     - Option B: Contact form interaction
     - Option C: Image gallery navigation
   - Draw 3-5 screens on paper/index cards:
     - Initial state
     - Interaction states
     - Result/confirmation
   - Use simple shapes, labels, annotations

2. **Conduct Wizard of Oz Test** (8 mins)
   - Pair up: one designer, one user
   - User clicks/taps on paper
   - Designer swaps screens manually
   - Designer takes notes on:
     - Where user hesitated
     - What user expected vs. what happened
     - Questions user asked
     - Errors or confusion

3. **Iterate Based on Feedback** (5 mins)
   - Designer makes quick changes to paper prototype
   - Test one more time with same partner
   - Note improvements (or new issues)

### Deliverable

- Paper prototype (photo/scan)
- Test notes (observations, quotes)
- One design change made based on feedback

### Success Criteria

- Prototype shows 3+ screens
- Test identified at least 1 usability issue
- Iteration addresses identified issue
- Student can explain why change improved design

## Project Structure

```
Week09/prototype-evolution/
├── README.md                              # Project overview, learning goals
├── QUICKSTART.md                          # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md                  # Brief IxD, UI, UX lessons from the project
│   ├── Key-Takeaways.md                  # 3-5 key learnings
│   ├── Prototyping-Guide.md              # Fidelity decision framework
│   ├── Paper-Prototype-Kit.pdf           # Templates and tips
│   └── Testing-Script.md                 # How to test prototypes
├── src/
│   ├── app/                              # Next.js app directory
│   │   ├── page.tsx                      # Prototype gallery
│   │   ├── prototypes/[fidelity]/
│   │   ├── storyboard/
│   │   └── wizard-oz/
│   └── components/                       # Prototype components
│       ├── PrototypeTimeline.tsx
│       ├── WireframeCanvas.tsx
│       └── PrototypeComparison.tsx
├── public/                               # Static assets
│   ├── paper-sketches/
│   ├── wireframes/
│   └── templates/
│       └── paper-prototype-template.pdf
└── vercel.json                           # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Setup Tailwind CSS 4.2
   Step 2: Create prototype gallery/timeline (src/app/page.tsx)
   Step 3: Build paper prototype viewer (use images)
   Step 4: Create wireframe version (grayscale, simple layout)
   Step 5: Implement low-fi interactive (basic state, simple styling)
   Step 6: Build high-fi interactive (full design, animations)
   Step 7: Add comparison tool (side-by-side view)
   Step 8: Create storyboard and Wizard of Oz demos
   ```

2. **Acceptance Criteria**:
   - Gallery must show progression of 4 fidelity levels
   - Paper prototype must display 3+ scanned sketches
   - Wireframe must use only grayscale (no colors)
   - Low-fi must be interactive but visually simple
   - High-fi must include animations and polish
   - Comparison tool must show prototypes side-by-side
   - All prototypes must implement same booking flow

3. **Specific File Paths**:
   - Gallery: `src/app/page.tsx`
   - Paper: `src/app/prototypes/paper/page.tsx`
   - Wireframe: `src/app/prototypes/wireframe/page.tsx`
   - Low-fi: `src/app/prototypes/low-fi/page.tsx`
   - High-fi: `src/app/prototypes/high-fi/page.tsx`
   - Comparison: `src/components/PrototypeComparison.tsx`

4. **Styling Instructions - Wireframe**:
   ```css
   /* Wireframe styling - grayscale only */
   - Background: bg-gray-50
   - Text: text-gray-900
   - Borders: border-gray-400
   - Placeholder images: bg-gray-300
   - Use: font-sans, font-medium
   - No shadows, no rounded corners
   ```

5. **Styling Instructions - Low-Fi**:
   ```css
   /* Low-fi styling - basic colors */
   - Limited palette: blue (#007bff), gray, white
   - Simple borders: border-2
   - Basic padding: p-4
   - No custom fonts (system font)
   - No animations
   - Sharp corners (no rounded)
   ```

6. **Styling Instructions - High-Fi**:
   ```css
   /* High-fi styling - polished design */
   - Full color palette
   - Custom typography (Google Fonts)
   - Shadows: shadow-lg
   - Rounded corners: rounded-xl
   - Animations: transition-all duration-300
   - Hover states: hover:scale-105
   - Icons: Heroicons or similar
   ```

7. **Paper Prototype Assets**:
   - Include 3-5 scanned hand-drawn sketches in `public/paper-sketches/`
   - Or create digital "sketch-style" using rough.js library
   - Add sticky note style annotations

8. **Code Comments**:
   - Add `// FIDELITY LEVEL:` comments
   - Explain why certain details are included/excluded at each level
   - Note what each prototype is designed to test
   - Comment on feedback received and changes made

9. **Testing Prompts**:
   - Verify wireframe has no colors
   - Confirm low-fi is interactive (can complete flow)
   - Test high-fi animations work
   - Verify comparison tool shows 2 prototypes simultaneously
   - Test timeline navigation between fidelity levels

10. **Educational Annotations**:
    - Add cost/time estimates for each prototype level
    - Show feedback quotes from testing each version
    - Include "Lessons learned" for each iteration
    - Display "When to use" guidelines

---

**Estimated Total Time**: 60 minutes (45 + 10 + 5 buffer)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2

**Focus**: Understanding prototyping as a thinking and communication tool, not just deliverable. Emphasize rapid iteration and learning over pixel perfection at early stages.
