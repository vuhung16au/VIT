export type Persona = {
  slug: "sarah" | "robert" | "maya";
  name: string;
  age: number;
  occupation: string;
  techLevel: number;
  goals: string[];
  painPoints: string[];
  behaviors: string[];
  quote: string;
  avatar: string;
  colorClass: string;
};

export type JourneyStage = {
  stage: string;
  emotion: string;
  touchpoint: string;
  painPoint: string;
};

export type PersonaSlug = Persona["slug"];
