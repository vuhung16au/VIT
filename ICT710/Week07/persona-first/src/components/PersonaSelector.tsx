"use client";

import Link from "next/link";

import { personas } from "@/data/personas";
import { usePersona } from "@/hooks/usePersona";

export function PersonaSelector() {
  const { selectedPersona, updatePersona } = usePersona();

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase text-primary fw-semibold small mb-1">Who are you?</p>
        <h2 className="h3 fw-bold mb-4">Select a persona to drive the redesign</h2>
        <div className="row g-3">
          {personas.map((persona) => (
            <div key={persona.slug} className="col-md-4">
              <button
                type="button"
                className={`btn w-100 h-100 text-start border rounded-4 p-4 ${
                  selectedPersona === persona.slug ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => updatePersona(persona.slug)}
              >
                <div className="fs-1 mb-2">{persona.avatar}</div>
                <div className="fw-bold">{persona.name}</div>
                <div className="small">{persona.occupation}</div>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 d-flex flex-wrap gap-2">
          <Link href={`/booking/${selectedPersona}`} className="btn btn-primary">
            Continue as selected persona
          </Link>
          <Link href="/personas" className="btn btn-outline-primary">
            View persona gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
