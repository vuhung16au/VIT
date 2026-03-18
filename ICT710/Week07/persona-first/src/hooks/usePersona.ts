"use client";

import { useState } from "react";

import type { PersonaSlug } from "@/types/persona";

const storageKey = "persona-first-selection";
const defaultPersona: PersonaSlug = "sarah";
const validPersonas = new Set<PersonaSlug>(["sarah", "robert", "maya"]);

export function usePersona() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaSlug>(() => {
    if (typeof window === "undefined") {
      return defaultPersona;
    }

    const stored = window.localStorage.getItem(storageKey);
    if (stored && validPersonas.has(stored as PersonaSlug)) {
      return stored as PersonaSlug;
    }

    return defaultPersona;
  });

  const updatePersona = (value: PersonaSlug) => {
    setSelectedPersona(value);
    window.localStorage.setItem(storageKey, value);
  };

  return {
    selectedPersona,
    updatePersona,
  };
}
