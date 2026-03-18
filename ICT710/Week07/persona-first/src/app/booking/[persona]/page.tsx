import { notFound } from "next/navigation";

import { FamilyBooking } from "@/components/FamilyBooking";
import { PersonaNav } from "@/components/PersonaNav";
import { QuickBooking } from "@/components/QuickBooking";
import { StepByStepBooking } from "@/components/StepByStepBooking";
import { UserJourneyMap } from "@/components/UserJourneyMap";
import { journeyMaps } from "@/data/journeyMaps";
import { personasBySlug } from "@/data/personas";

export default async function PersonaBookingPage({
  params,
}: {
  params: Promise<{ persona: "sarah" | "robert" | "maya" }>;
}) {
  const { persona } = await params;
  const selected = personasBySlug[persona];

  if (!selected) notFound();

  const component =
    persona === "sarah" ? <QuickBooking /> : persona === "robert" ? <StepByStepBooking /> : <FamilyBooking />;

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PersonaNav currentPath={`/booking/${persona}`} />
        </div>
        <div className="col-12">
          <div className={`card border-0 shadow-sm ${selected.colorClass}`}>
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Persona-specific redesign</p>
              <h1 className="display-6 fw-bold mb-2">
                {selected.avatar} {selected.name}&apos;s booking experience
              </h1>
              <p className="mb-0">
                {selected.quote}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">{component}</div>
        <div className="col-lg-5">
          <UserJourneyMap persona={selected} stages={journeyMaps[selected.slug]} />
        </div>
      </div>
    </main>
  );
}
