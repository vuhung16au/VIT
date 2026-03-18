import Link from "next/link";

import type { Persona } from "@/types/persona";

type PersonaCardProps = {
  persona: Persona;
};

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="display-6 mb-3">{persona.avatar}</div>
        <h2 className="h4 fw-bold mb-1">{persona.name}</h2>
        <p className="text-muted mb-3">
          {persona.age} • {persona.occupation} • Tech literacy {persona.techLevel}/5
        </p>
        <blockquote className="fst-italic">“{persona.quote}”</blockquote>
        <hr />
        <div className="small text-muted">Goals</div>
        <ul className="mb-3">
          {persona.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
        <div className="small text-muted">Pain points</div>
        <ul className="mb-4">
          {persona.painPoints.map((painPoint) => (
            <li key={painPoint}>{painPoint}</li>
          ))}
        </ul>
        <Link href={`/booking/${persona.slug}`} className="btn btn-outline-primary">
          Open {persona.name}&apos;s booking flow
        </Link>
      </div>
    </div>
  );
}
