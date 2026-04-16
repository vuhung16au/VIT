export type InterfaceEntry = {
  title: string;
  description: string;
  href: string;
  pros: string;
  cons: string;
  icon: string;
  category: string;
};

export const foundationalInterfaces: InterfaceEntry[] = [
  {
    title: "Command-Line Interface",
    description: "Fast, text-heavy, and efficient for expert users who already know the commands.",
    href: "/cli",
    pros: "Efficient for power users",
    cons: "Low discoverability",
    icon: "⌨️",
    category: "Foundational",
  },
  {
    title: "Traditional GUI",
    description: "Classic desktop interaction with menus, toolbars, forms, and modal dialogs.",
    href: "/gui",
    pros: "High discoverability",
    cons: "Needs precise pointing",
    icon: "🖱️",
    category: "Foundational",
  },
  {
    title: "Touch Interface",
    description: "Thumb-friendly mobile flow with large tap targets and swipe-based navigation.",
    href: "/touch",
    pros: "Great for casual mobile use",
    cons: "Fat-finger risk",
    icon: "📱",
    category: "Foundational",
  },
  {
    title: "Voice Interface",
    description: "Hands-free booking through prompts, transcript feedback, and text fallback.",
    href: "/voice",
    pros: "Hands-free interaction",
    cons: "Privacy and accuracy issues",
    icon: "🎙️",
    category: "Multimodal",
  },
  {
    title: "Gesture Interface",
    description: "Touchless interaction for specialized settings such as accessibility or sterile workflows.",
    href: "/gesture",
    pros: "Touchless and novel",
    cons: "Physically tiring",
    icon: "🖐️",
    category: "Multimodal",
  },
];

export const emergingInterfaces: InterfaceEntry[] = [
  {
    title: "Spatial Computing",
    description: "Modern VR, AR, and mixed-reality systems place digital objects into physical space using pass-through video and room awareness.",
    href: "/spatial",
    pros: "Immersive and contextual",
    cons: "High cognitive and physical load",
    icon: "🥽",
    category: "Spatial",
  },
  {
    title: "Brain-Computer Interface",
    description: "Non-invasive BCI uses EEG-like sensing to turn neural patterns into commands such as select, scroll, or focus.",
    href: "/bci",
    pros: "Transformative for accessibility",
    cons: "Low confidence and noisy signals",
    icon: "🧠",
    category: "Neuroadaptive",
  },
  {
    title: "Haptic & Tactile Interface",
    description: "Mid-air haptics make gesture systems feel physical by simulating a button click or surface without direct touch.",
    href: "/haptics",
    pros: "Adds physical feedback",
    cons: "Limited precision today",
    icon: "✨",
    category: "Embodied",
  },
  {
    title: "Smart Interface",
    description: "Sensor-rich, context-aware systems proactively adapt to the user, environment, and task before explicit input happens.",
    href: "/smart",
    pros: "Reduces user effort",
    cons: "Can feel creepy or opaque",
    icon: "🧭",
    category: "Adaptive",
  },
  {
    title: "Generative UI",
    description: "Liquid interfaces create task-specific layouts on the fly instead of forcing every user through the same predesigned screen.",
    href: "/generative",
    pros: "Highly tailored workflows",
    cons: "Needs strong guardrails",
    icon: "🧩",
    category: "AI-native",
  },
];

export const navLinks = [
  { href: "/", label: "Hub" },
  { href: "/cli", label: "CLI" },
  { href: "/gui", label: "GUI" },
  { href: "/touch", label: "Touch" },
  { href: "/voice", label: "Voice" },
  { href: "/gesture", label: "Gesture" },
  { href: "/spatial", label: "Spatial" },
  { href: "/bci", label: "BCI" },
  { href: "/haptics", label: "Haptics" },
  { href: "/smart", label: "Smart" },
  { href: "/generative", label: "Generative" },
  { href: "/timeline", label: "Timeline" },
];
