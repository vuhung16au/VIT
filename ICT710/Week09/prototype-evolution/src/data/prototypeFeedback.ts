export const prototypeStages = [
  {
    slug: "paper",
    title: "Paper Prototype",
    fidelity: "Low",
    cost: "15-30 mins",
    useWhen: "Exploring concepts and testing whether the flow idea makes sense at all.",
    feedback: [
      "Users hesitated when choosing a doctor because the sketch lacked clear priority cues.",
      "Wizard of Oz testing revealed the confirmation screen needed a stronger summary block.",
    ],
  },
  {
    slug: "wireframe",
    title: "Wireframe",
    fidelity: "Low to Mid",
    cost: "1-2 hours",
    useWhen: "Checking layout, spacing, hierarchy, and information architecture.",
    feedback: [
      "The grayscale layout made it easier to discuss structure without debating colors.",
      "Participants found the form flow clearer once labels moved above each field.",
    ],
  },
  {
    slug: "low-fi",
    title: "Low-Fi Interactive",
    fidelity: "Mid",
    cost: "2-4 hours",
    useWhen: "Testing whether users can complete the task with minimal visual distraction.",
    feedback: [
      "Users completed booking more confidently once selected doctors stayed visibly highlighted.",
      "Date selection needed inline confirmation before submit.",
    ],
  },
  {
    slug: "high-fi",
    title: "High-Fi Interactive",
    fidelity: "High",
    cost: "1-2 days",
    useWhen: "Validating polish, trust, responsiveness, and stakeholder sign-off.",
    feedback: [
      "Photos, ratings, and summaries increased trust in the doctor list.",
      "Loading and success states reduced uncertainty at the final confirmation step.",
    ],
  },
];

export const paperNotes = [
  "Users expected the top-left sketch to lead directly to doctor search.",
  "A handwritten note suggested making the next step more obvious after specialty selection.",
  "The paper version encouraged broad feedback because it still felt easy to change.",
];

export const storyboardScenes = [
  {
    title: "Sarah needs urgent care",
    mood: "Concerned",
    caption: "A busy professional notices a symptom between meetings and wants a fast booking path.",
  },
  {
    title: "She opens the booking app",
    mood: "Focused",
    caption: "The app opens on mobile with a clear path to prototype options and doctor search.",
  },
  {
    title: "Nearby doctors appear",
    mood: "Hopeful",
    caption: "A prototype shows the right content quickly, even before the final visuals are ready.",
  },
  {
    title: "She books in two clicks",
    mood: "Relieved",
    caption: "The low-fi prototype proves the task flow works before time is spent polishing details.",
  },
  {
    title: "Confirmation arrives",
    mood: "Confident",
    caption: "The high-fi version adds trust, summary details, and strong next-step guidance.",
  },
  {
    title: "She attends the appointment",
    mood: "Prepared",
    caption: "The full journey shows why prototypes should represent context, not just screens.",
  },
];
