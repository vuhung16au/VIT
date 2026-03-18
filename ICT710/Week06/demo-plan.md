# Week 06 Demo Plan: Interface Types and Development

## Week Overview

Week 6 explores various interface types and their applications in interaction design. Students will learn about CLI, GUI, multimedia, VR, mobile, voice, touch, and gesture-based interfaces by building multiple interface modalities for the same task (booking a doctor appointment).

## Learning Objectives

- Understand different interface types: CLI, GUI, touch, voice, and gesture-based
- Recognize when to use each interface type based on context and user needs
- Implement multiple interface modalities for the same functionality
- Evaluate trade-offs between interface types (efficiency vs. learnability)
- Apply interface design principles to various interaction paradigms

## Demo 1: Interface Playground - Multi-Modal Doctor Booking (40 mins)

### Objective

Build an interactive demonstration showcasing 5 different interface types for the same task (booking a doctor appointment), highlighting the strengths and weaknesses of each approach.

### Prerequisites

- Basic doctor booking functionality from Week 4
- Next.js 16 with App Router
- Tailwind CSS 4.2 (for this week's modern UI approach)

### Implementation Steps

1. **Create Interface Selection Hub** (5 mins)
   - Create `src/app/page.tsx` as interface selector
   - Build grid layout with 5 interface type cards:
     - Command-Line Interface (CLI)
     - Graphical User Interface (GUI - traditional)
     - Touch-Optimized Interface
     - Voice User Interface (VUI)
     - Gesture-Based Interface (simulated)
   - Add description and "Try It" button for each
   - Include pros/cons badge for each interface type

2. **Implement CLI-Style Interface** (8 mins)
   - Create `src/app/cli/page.tsx`
   - Build terminal-style interface with:
     - Black background, green monospace text
     - Command prompt: `> book doctor`
     - Step-by-step text-based prompts
     - Keyboard-only navigation
     - Autocomplete suggestions
   - Commands: `list doctors`, `select [name]`, `choose date [YYYY-MM-DD]`, `confirm`
   - Show efficiency for power users

3. **Build Traditional GUI Version** (7 mins)
   - Create `src/app/gui/page.tsx`
   - Implement WIMP (Windows, Icons, Menus, Pointer) interface:
     - Menu bar with File, Edit, View, Help
     - Tool icons in toolbar
     - Modal dialog windows for confirmation
     - Dropdown menus for selections
     - Scroll bars for long lists
   - Demonstrate classic desktop application patterns

4. **Create Touch-Optimized Interface** (8 mins)
   - Create `src/app/touch/page.tsx`
   - Design mobile-first touch interface:
     - Large tap targets (min 44x44px)
     - Swipe gestures for navigation
     - Pull-to-refresh functionality
     - Bottom navigation bar (thumb-friendly)
     - Card-based doctor selection (swipe left/right)
     - Date picker optimized for touch
   - Add visual feedback for touch interactions

5. **Implement Voice User Interface** (7 mins)
   - Create `src/app/voice/page.tsx`
   - Build conversational interface:
     - Microphone button (simulated web speech API)
     - Speech bubble UI showing conversation
     - Text-to-speech prompts
     - Voice commands: "Book doctor", "Next available", "Confirm"
     - Visual transcript of voice interaction
     - Fallback to text input
   - Demonstrate hands-free operation

6. **Add Gesture-Based Interface** (5 mins)
   - Create `src/app/gesture/page.tsx`
   - Simulate gesture controls:
     - Wave hand (right) to advance
     - Wave hand (left) to go back
     - Circle gesture to select
     - Visual instructions
     - Webcam preview area (simulated)
     - Fall back to click simulation
   - Show use case for accessibility and touchless interaction

### Code Structure

```
Week06/interface-playground/
├── README.md
├── QUICKSTART.md
├── docs/
│   └── Key-Takeaways.md
├── src/
│   ├── app/
│   │   ├── page.tsx                # Interface selector hub
│   │   ├── cli/page.tsx            # Command-line interface
│   │   ├── gui/page.tsx            # Traditional GUI (WIMP)
│   │   ├── touch/page.tsx          # Touch-optimized mobile
│   │   ├── voice/page.tsx          # Voice user interface
│   │   └── gesture/page.tsx        # Gesture-based interface
│   ├── components/
│   │   ├── InterfaceCard.tsx       # Interface type selector card
│   │   ├── CLITerminal.tsx         # Terminal emulator
│   │   ├── GUIWindow.tsx           # Window manager component
│   │   ├── TouchCards.tsx          # Swipeable card stack
│   │   ├── VoiceChat.tsx           # Voice conversation UI
│   │   └── GestureVisualizer.tsx   # Gesture detection display
│   ├── hooks/
│   │   ├── useSpeechRecognition.ts # Voice input hook (simulated)
│   │   └── useGestureDetection.ts  # Gesture detection hook
│   ├── data/
│   │   └── doctors.ts              # Shared doctor data
│   └── types/
│       └── booking.ts              # Booking interfaces
├── public/
│   ├── icons/                      # Interface icons
│   └── gestures/                   # Gesture instruction images
└── tailwind.config.js
```

### Key Teaching Points

1. **Interface Selection Depends on Context**:
   - CLI: Fast for experts, steep learning curve, scriptable
   - GUI: Intuitive, discoverable, requires precise pointing
   - Touch: Mobile-friendly, but prone to fat-finger errors
   - Voice: Hands-free, but privacy concerns and accuracy issues
   - Gesture: Touchless, novel, but physically tiring

2. **Gulfs of Execution and Evaluation**:
   - CLI has high gulf of execution (must know commands)
   - GUI shows all options (low gulf of execution)
   - Voice requires clear feedback (bridge gulf of evaluation)

3. **Accessibility Considerations**:
   - Voice helps vision-impaired users
   - Gesture supports motor-impaired users
   - GUI supports cognitive disabilities (visual cues)
   - Provide multiple modalities when possible

4. **Efficiency vs. Discoverability Trade-off**:
   - CLI: High efficiency, low discoverability
   - GUI: Medium efficiency, high discoverability
   - Touch: Good balance for casual users

5. **Multi-Modal Interfaces**: Modern apps often combine interface types (e.g., voice + touch in smartphones)

## Demo 2: Interface Evolution Timeline (10 mins)

### Objective

Show the historical evolution of interfaces and discuss emerging trends.

### Implementation Steps

1. **Create Evolution Timeline** (4 mins)
   - Create `src/app/timeline/page.tsx`
   - Build interactive timeline showing:
     - 1960s: Command-line interfaces
     - 1980s: WIMP/GUI (Xerox Star, Mac)
     - 2000s: Touch interfaces (iPhone)
     - 2010s: Voice assistants (Siri, Alexa)
     - 2020s: AR/VR, gesture, brain-computer interfaces
   - Add images and brief descriptions

2. **Add Comparison Matrix** (3 mins)
   - Create comparison table component
   - Compare interfaces across dimensions:
     - Learning curve
     - Efficiency (tasks/minute)
     - Error rate
     - Accessibility
     - Privacy
     - Context suitability

3. **Showcase Future Interfaces** (3 mins)
   - Add section on emerging interfaces:
     - AR/VR for medical visualization
     - Brain-computer interfaces
     - Haptic feedback devices
     - AI-powered adaptive interfaces
   - Discuss implications for IxD

### Key Teaching Points

- Interfaces evolved from machine-centric to human-centric
- New interfaces don't replace old ones (CLI still used by developers)
- Choose interface based on task, user, and context
- Future: seamless multi-modal interaction

## Student Exercise: Design for Different Contexts (15 mins)

### Guided Activity

**Scenario**: Design the doctor booking interface for three different contexts:

1. **Context 1: Elderly Users at Home** (5 mins)
   - Which interface type would you choose? (Voice + Large Touch)
   - Why? (Limited dexterity, poor vision, comfort with conversation)
   - What specific adaptations? (Large fonts, simple voice commands, error tolerance)

2. **Context 2: Busy Professional in Car** (5 mins)
   - Which interface type? (Voice-only)
   - Why? (Hands-free, eyes-free operation required)
   - Adaptations? (Confirmation prompts, error recovery)

3. **Context 3: Tech-Savvy User at Desk** (5 mins)
   - Which interface type? (GUI + CLI shortcuts)
   - Why? (Efficiency, precision, complex workflows)
   - Adaptations? (Keyboard shortcuts, batch operations)

### Deliverable

Students sketch or wireframe their chosen interface for one context and explain their reasoning (1-2 paragraphs).

### Success Criteria

- Choice of interface type is justified by context
- At least 3 specific adaptations listed
- Discussion of trade-offs

## Project Structure

```
Week06/interface-playground/
├── README.md                           # Project overview, learning goals
├── QUICKSTART.md                       # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md               # 3-5 key learnings
│   ├── Interface-Comparison.md        # Detailed comparison matrix
│   └── Context-Analysis.md            # When to use each interface
├── src/
│   ├── app/                           # Next.js app directory
│   │   ├── page.tsx                   # Hub/selector
│   │   ├── cli/
│   │   ├── gui/
│   │   ├── touch/
│   │   ├── voice/
│   │   ├── gesture/
│   │   └── timeline/
│   └── components/                    # Interface components
│       ├── InterfaceCard.tsx
│       ├── CLITerminal.tsx
│       ├── GUIWindow.tsx
│       └── [others]
├── public/                            # Static assets
│   ├── screenshots/                   # Historical interface images
│   └── videos/                        # Demo videos (optional)
└── vercel.json                        # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Setup Tailwind CSS 4.2 configuration
   Step 2: Create shared booking data models (src/data/doctors.ts)
   Step 3: Build interface selector hub (src/app/page.tsx)
   Step 4: Implement CLI interface (simplest, text-based)
   Step 5: Build traditional GUI (standard patterns)
   Step 6: Create touch interface (mobile-optimized)
   Step 7: Add voice interface (with simulated API)
   Step 8: Implement gesture interface (simulated webcam)
   Step 9: Create timeline page
   ```

2. **Acceptance Criteria**:
   - All 5 interface types must allow completing a booking
   - CLI must support keyboard-only navigation
   - Touch interface must have tap targets ≥ 44px
   - Voice interface must display conversation transcript
   - Gesture interface must show visual instructions
   - All interfaces must be responsive

3. **Specific File Paths**:
   - Data model: `src/types/booking.ts`
   - Doctor data: `src/data/doctors.ts`
   - CLI route: `src/app/cli/page.tsx`
   - Terminal component: `src/components/CLITerminal.tsx`
   - Voice hook: `src/hooks/useSpeechRecognition.ts`

4. **Styling Instructions**:
   - Use Tailwind CSS 4.2 utility classes
   - CLI: `bg-black text-green-400 font-mono`
   - GUI: `border shadow-lg` for windows, `bg-gray-100` menubar
   - Touch: `touch-manipulation` class, `p-4` for tap targets
   - Voice: `rounded-full` for mic button, `speech-bubble` custom class
   - Gesture: `webcam-frame` with dashed border

5. **Simulated Functionality**:
   - Voice recognition: Use text input with speech bubble styling
   - Gesture detection: Use click/hover events to simulate gestures
   - Add "Demo Mode" banner explaining simulations

6. **Code Comments**:
   - Add `// INTERFACE TYPE:` comments explaining design rationale
   - Comment on why specific interaction patterns are used
   - Note accessibility considerations
   - Explain context suitability

7. **Testing Prompts**:
   - Test keyboard navigation in CLI (Tab, Enter, Escape)
   - Verify touch targets are large enough (inspect element)
   - Confirm voice interface works with text fallback
   - Test responsive behavior on mobile viewport

8. **Performance Notes**:
   - Keep interfaces lightweight (no heavy libraries)
   - Simulate complex features (voice, gesture) with simple JS
   - Focus on demonstrating IxD concepts, not production-ready code

---

**Estimated Total Time**: 60 minutes (40 + 10 + 10 buffer)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2, simulated APIs

**Focus**: Understanding interface types and their contexts, not building production-quality voice/gesture systems. Prioritize clear demonstrations of IxD principles.
