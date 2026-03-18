import { PersonaCard } from "@/components/PersonaCard";
import { PersonaNav } from "@/components/PersonaNav";
import { UserJourneyMap } from "@/components/UserJourneyMap";
import { journeyMaps } from "@/data/journeyMaps";
import { personas } from "@/data/personas";

export default function PersonasPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PersonaNav currentPath="/personas" />
        </div>
        <div className="col-12">
          <div className="row g-4">
            {personas.map((persona) => (
              <div key={persona.slug} className="col-lg-4">
                <PersonaCard persona={persona} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="row g-4">
            {personas.map((persona) => (
              <div key={persona.slug} className="col-lg-4">
                <UserJourneyMap persona={persona} stages={journeyMaps[persona.slug]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
