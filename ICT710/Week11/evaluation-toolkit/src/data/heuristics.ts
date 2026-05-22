export type Heuristic = {
  id: number;
  name: string;
  description: string;
  examples: string[];
};

export const heuristics: Heuristic[] = [
  {
    id: 1,
    name: "Visibility of system status",
    description:
      "The interface should always keep users informed about what is happening through timely, meaningful feedback.",
    examples: [
      "Loading indicators while booking an appointment",
      "Selected states on dates, filters, and tabs",
      "Confirmation banners after a successful action",
    ],
  },
  {
    id: 2,
    name: "Match between system and real world",
    description:
      "Use words, metaphors, and workflows that match how people think about the task in real life.",
    examples: [
      "Plain-language specialty names instead of medical jargon",
      "Calendar layouts that match common booking habits",
      "Icons that align with familiar healthcare patterns",
    ],
  },
  {
    id: 3,
    name: "User control and freedom",
    description:
      "Support undo, back navigation, and escape routes so users can recover from wrong turns.",
    examples: [
      "Cancel or edit options before final confirmation",
      "Back button in multi-step forms",
      "Clear ways to remove or revise filters",
    ],
  },
  {
    id: 4,
    name: "Consistency and standards",
    description:
      "Follow platform conventions and keep labels, formatting, and interactions consistent across screens.",
    examples: [
      "Consistent date format across all booking steps",
      "Matching button treatments in the design system",
      "Predictable navigation labels between pages",
    ],
  },
  {
    id: 5,
    name: "Error prevention",
    description:
      "Prevent common mistakes before they happen using constraints, hints, and validation.",
    examples: [
      "Disable invalid appointment slots",
      "Inline field guidance for required inputs",
      "Prevent saving incomplete component variants",
    ],
  },
  {
    id: 6,
    name: "Recognition rather than recall",
    description:
      "Reduce memory load by making options, context, and next steps visible at the right moment.",
    examples: [
      "Visible specialty categories and search suggestions",
      "Persistent booking summary sidebar",
      "Quick-start examples in the design system",
    ],
  },
  {
    id: 7,
    name: "Flexibility and efficiency of use",
    description:
      "Support both novice and expert behaviour through shortcuts, defaults, and efficient flows.",
    examples: [
      "Search for returning users who know the doctor name",
      "Saved preferences for repeat appointments",
      "Component filters for advanced design system users",
    ],
  },
  {
    id: 8,
    name: "Aesthetic and minimalist design",
    description:
      "Prioritize the information that matters most and remove visual noise that competes for attention.",
    examples: [
      "Clear hierarchy between primary and supporting actions",
      "Reduced clutter in dense dashboards",
      "Scannable content blocks instead of long undifferentiated lists",
    ],
  },
  {
    id: 9,
    name: "Help users recognize, diagnose, and recover from errors",
    description:
      "Error states should be specific, easy to understand, and paired with an obvious next action.",
    examples: [
      "Field-level messages that explain how to fix the issue",
      "Recovery links after failed submission",
      "Actionable empty states when analytics filters return nothing",
    ],
  },
  {
    id: 10,
    name: "Help and documentation",
    description:
      "When support is needed, provide concise, accessible help that fits the context of the task.",
    examples: [
      "Inline hints for complex medical specialty names",
      "Getting-started guidance in the component library",
      "Checklist templates for first-time evaluators",
    ],
  },
];
