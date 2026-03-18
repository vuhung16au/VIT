# Week 10 Demo Plan: Design Language and Systems

## Week Overview

Week 10 introduces design languages and design systems - the visual and interaction patterns that create cohesive product experiences. Students will build a NEW project (design system studio) to explore typography, color palettes, iconography, layout grids, and motion design while understanding how design languages scale across products.

## Learning Objectives

- Understand what a design language is and why it matters
- Create a cohesive design system with typography, color, icons, and layout rules
- Apply design tokens for consistency and scalability
- Build reusable component libraries based on design systems
- Understand the psychology of color and typography choices
- Recognize successful design languages (Google Material, Apple HIG, IBM Carbon)

## Demo 1: Design System Studio - Building a Component Library (40 mins)

### Objective

Create an interactive design system documentation site that showcases typography scale, color palettes, icon sets, layout grids, and motion principles, with live component examples.

### Prerequisites

- NEW PROJECT (not continuing doctor booking app)
- Next.js 16 with App Router
- Tailwind CSS 4.2 (perfect for design system development)

### Implementation Steps

1. **Create Design System Hub** (8 mins)
   - Create `src/app/page.tsx` as design system homepage
   - Build navigation sidebar with sections:
     - Foundations (Typography, Colors, Spacing, Grid)
     - Components (Buttons, Forms, Cards, Modals)
     - Patterns (Navigation, Data Display, Feedback)
     - Motion (Animations, Transitions)
   - Add search functionality for components
   - Include "Getting Started" guide

2. **Build Typography System** (8 mins)
   - Create `src/app/foundations/typography/page.tsx`
   - Define type scale based on modular scale (1.25 ratio):
     - Heading 1: 3.052rem (48.8px)
     - Heading 2: 2.441rem (39px)
     - Heading 3: 1.953rem (31.2px)
     - Heading 4: 1.563rem (25px)
     - Heading 5: 1.25rem (20px)
     - Body: 1rem (16px)
     - Small: 0.8rem (12.8px)
   - Select font pairings:
     - Primary: Inter (headings)
     - Secondary: Lora (body, elegant)
     - Mono: JetBrains Mono (code)
   - Show font weights (400, 600, 700)
   - Demonstrate line-height (1.5 for body, 1.2 for headings)
   - Display letter-spacing variations
   - Include "Do" and "Don't" examples

3. **Design Color Palette System** (8 mins)
   - Create `src/app/foundations/colors/page.tsx`
   - Define comprehensive color system:
     
     **Primary Palette** (Brand Colors):
     - Primary: #3B82F6 (Blue 500)
     - Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
     
     **Semantic Colors**:
     - Success: #10B981 (Green)
     - Warning: #F59E0B (Amber)
     - Error: #EF4444 (Red)
     - Info: #6366F1 (Indigo)
     
     **Neutral Palette**:
     - Gray scale: 50-900
     
     **Accessibility Indicators**:
     - Show WCAG contrast ratios for each combination
     - Mark AA/AAA compliance
   
   - Display color swatches with:
     - Hex, RGB, HSL values
     - Color name
     - Use cases (text, background, border)
   - Show color psychology and emotional associations

4. **Build Icon Library** (6 mins)
   - Create `src/app/foundations/icons/page.tsx`
   - Showcase icon system:
     - Icon set: Heroicons (or custom SVG)
     - Sizes: 16px, 24px, 32px, 48px
     - Variants: Solid, Outline
     - Categories: Actions, Navigation, Social, Status
   - Display grid of all icons
   - Add search and filter
   - Show icon usage guidelines:
     - Minimum size (24px for touch)
     - Consistent stroke width
     - Optical alignment
   - Provide code snippets for usage

5. **Create Layout Grid System** (5 mins)
   - Create `src/app/foundations/layout/page.tsx`
   - Define grid system:
     - 12-column grid
     - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
     - Gutters: 16px (mobile), 24px (desktop)
     - Max width: 1280px
   - Show visual grid overlay
   - Demonstrate responsive layouts:
     - 1 column (mobile)
     - 2 columns (tablet)
     - 3-4 columns (desktop)
   - Include spacing scale (4px base unit):
     - xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px

6. **Implement Component Library** (5 mins)
   - Create `src/app/components/buttons/page.tsx`
   - Build button components showcasing design language:
     - Primary button (brand color)
     - Secondary button (outlined)
     - Tertiary button (text only)
     - Danger button (destructive action)
   - Show button states: default, hover, active, disabled, loading
   - Include size variants: small, medium, large
   - Display code examples and usage guidelines
   - Add interactive playground to test combinations

### Code Structure

```
Week10/design-system-studio/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md
│   └── Design-Principles.md         # Core design philosophy
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Design system hub
│   │   ├── foundations/
│   │   │   ├── typography/page.tsx
│   │   │   ├── colors/page.tsx
│   │   │   ├── icons/page.tsx
│   │   │   ├── layout/page.tsx
│   │   │   └── motion/page.tsx
│   │   └── components/
│   │       ├── buttons/page.tsx
│   │       ├── forms/page.tsx
│   │       ├── cards/page.tsx
│   │       └── navigation/page.tsx
│   ├── components/
│   │   ├── ui/                      # Actual component library
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── [others]
│   │   ├── ColorSwatch.tsx          # Color display
│   │   ├── TypeScale.tsx            # Typography showcase
│   │   ├── IconGrid.tsx             # Icon browser
│   │   ├── GridOverlay.tsx          # Layout grid viz
│   │   └── ComponentPlayground.tsx  # Interactive demo
│   ├── styles/
│   │   └── design-tokens.css        # CSS variables
│   └── lib/
│       └── designTokens.ts          # Design token definitions
├── public/
│   └── fonts/                       # Custom fonts (if any)
└── tailwind.config.js               # Extended with design system
```

### Key Teaching Points

1. **Design Languages Create Consistency**: Show how Material Design looks the same across Google products (Gmail, Drive, Calendar)

2. **Design Tokens Enable Scalability**: Colors, spacing, typography defined once, used everywhere. Change once, updates everywhere

3. **Typography Establishes Hierarchy**: Type scale guides user attention through content

4. **Color Communicates Meaning**: Red means danger/error across cultures, green means success/go

5. **Systems Beat Individual Decisions**: Better to have a consistent system than perfect one-off designs

## Demo 2: Motion and Micro-interactions (10 mins)

### Objective

Demonstrate how animation and motion enhance UX when used purposefully.

### Implementation Steps

1. **Create Motion Principles Page** (4 mins)
   - Create `src/app/foundations/motion/page.tsx`
   - Define motion principles:
     - **Duration**: Fast (100-200ms), Medium (200-400ms), Slow (400-600ms)
     - **Easing**: ease-in, ease-out, ease-in-out
     - **Purpose**: Provide feedback, guide attention, show relationships
   - Show examples:
     - Button hover: subtle lift (2px shadow increase)
     - Modal enter: fade + slide up
     - Notification: slide in from right
     - Loading: spinner + pulse

2. **Build Animation Gallery** (3 mins)
   - Create interactive examples:
     - Hover states (buttons, cards)
     - Focus states (form inputs)
     - Loading states (skeleton, spinner)
     - Transitions (page changes, modals)
     - Micro-interactions (checkbox check, toggle switch)
   - Add "good" vs "overkill" examples
   - Show performance considerations

3. **Demonstrate Feedback Patterns** (3 mins)
   - Create examples of feedback:
     - Form validation (error shake)
     - Success confirmation (checkmark animation)
     - Delete confirmation (item fade out)
     - Save indication (brief highlight)
   - Emphasize: animation serves purpose, not decoration

### Key Teaching Points

- Motion should enhance, not distract
- Consistency in timing creates rhythm
- Respect reduced motion preferences (prefers-reduced-motion)
- Performance matters (60fps minimum)

## Student Exercise: Design a Component Variant (15 mins)

### Guided Activity

**Task**: Using the design system, create a new button variant or card style.

1. **Choose a Component** (3 mins)
   Students select:
   - Option A: Create a "Ghost" button variant (minimal, transparent)
   - Option B: Create a "Feature" card (highlight important content)
   - Option C: Create an "Alert" banner (warning/info display)

2. **Apply Design System** (9 mins)
   Students must use:
   - Typography from type scale (no custom sizes)
   - Colors from palette (no random colors)
   - Spacing from scale (4px increments)
   - Icons from library
   - Motion from principles (if applicable)
   
   Write component specifications:
   - Colors used (with rationale)
   - Typography (size, weight)
   - Spacing (padding, margins)
   - States (hover, active, disabled)

3. **Present & Critique** (3 mins)
   - Students show their variant
   - Class checks: Does it fit the system?
   - Discuss: Would users recognize this as part of the same product?

### Deliverable

- Component sketch or mockup
- Specification doc listing design tokens used
- Rationale for design choices

### Success Criteria

- Uses only colors from palette
- Uses typography from scale
- Follows spacing system
- Maintains visual consistency with existing components

## Project Structure

```
Week10/design-system-studio/
├── README.md                              # Project overview, learning goals
├── QUICKSTART.md                          # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md                  # 3-5 key learnings
│   ├── Design-Principles.md              # Design philosophy
│   └── Component-Specs.md                # Component documentation
├── src/
│   ├── app/                              # Next.js app directory
│   │   ├── page.tsx
│   │   ├── foundations/
│   │   └── components/
│   └── components/
│       └── ui/                           # Component library
├── public/                               # Static assets
│   └── examples/                         # Design system examples
└── vercel.json                           # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Setup Tailwind config with design tokens
   Step 2: Create design token file (colors, typography, spacing)
   Step 3: Build design system hub (homepage + navigation)
   Step 4: Create typography page (type scale showcase)
   Step 5: Build color palette page (swatches + accessibility)
   Step 6: Create icon library page (grid + search)
   Step 7: Build layout grid page (responsive examples)
   Step 8: Create button component page (all variants)
   Step 9: Add motion principles page (animation examples)
   Step 10: Build component playground (interactive)
   ```

2. **Acceptance Criteria**:
   - Design system must have cohesive visual language
   - Typography must use modular scale (consistent ratios)
   - Color palette must show WCAG contrast ratios
   - Icon library must have 20+ icons searchable
   - Layout grid must demonstrate 12-column system
   - All components must have hover/active states
   - Motion examples must use consistent timing
   - Code examples must be copy-pasteable

3. **Specific File Paths**:
   - Design tokens: `src/lib/designTokens.ts`
   - Tailwind config: `tailwind.config.js` (extend with tokens)
   - Typography: `src/app/foundations/typography/page.tsx`
   - Colors: `src/app/foundations/colors/page.tsx`
   - Button component: `src/components/ui/Button.tsx`
   - Component page: `src/app/components/buttons/page.tsx`

4. **Design Token Structure**:
   ```typescript
   export const designTokens = {
     colors: {
       primary: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' },
       success: { 500: '#10b981' },
       // ... more
     },
     typography: {
       fontFamily: { primary: 'Inter', secondary: 'Lora' },
       fontSize: { xs: '0.8rem', sm: '1rem', lg: '1.25rem' },
       fontWeight: { normal: 400, semibold: 600, bold: 700 },
     },
     spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px' },
     motion: {
       duration: { fast: '150ms', medium: '300ms', slow: '500ms' },
       easing: { default: 'ease-in-out' },
     },
   };
   ```

5. **Tailwind Config Extension**:
   ```javascript
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         fontFamily: {
           primary: ['Inter', 'sans-serif'],
           secondary: ['Lora', 'serif'],
         },
         colors: {
           primary: { /* extend from tokens */ },
         },
       },
     },
   };
   ```

6. **Styling Instructions**:
   - Use Tailwind utility classes exclusively
   - Define custom colors in config, not inline
   - Create reusable component classes
   - Use CSS variables for runtime theme switching
   - Apply consistent border-radius: rounded-md (6px)
   - Use consistent shadows: shadow-sm, shadow, shadow-lg

7. **Code Comments**:
   - Add `// DESIGN TOKEN:` comments referencing token names
   - Explain design rationale (why this color, size, etc.)
   - Note accessibility considerations
   - Reference design principles being applied

8. **Component Examples to Include**:
   - Buttons: primary, secondary, tertiary, danger (4 variants × 3 sizes × 5 states = 60 examples)
   - Form inputs: text, email, password, textarea, select
   - Cards: basic, elevated, bordered, interactive
   - Navigation: tabs, breadcrumbs, pagination

9. **Testing Prompts**:
   - Verify all colors have WCAG AA contrast on white
   - Test type scale maintains readability at all sizes
   - Confirm icons display at all specified sizes
   - Check responsive grid behavior on mobile
   - Test all button states (hover, active, disabled)
   - Verify animations respect prefers-reduced-motion

10. **Documentation Requirements**:
    - Each component page must have:
      - Visual examples
      - Code snippet
      - Props/variants table
      - Do's and Don'ts
      - Accessibility notes

---

**Estimated Total Time**: 60 minutes (40 + 10 + 10 buffer)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2, Google Fonts

**Focus**: Understanding design systems as scalable, maintainable solutions. Emphasize consistency, accessibility, and purposeful design choices over trendy aesthetics.

**NEW PROJECT**: This marks the transition from doctor booking app to design system exploration.
