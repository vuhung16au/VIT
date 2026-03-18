import type { JourneyStage, Persona } from "@/types/persona";

type UserJourneyMapProps = {
  persona: Persona;
  stages: JourneyStage[];
};

export function UserJourneyMap({ persona, stages }: UserJourneyMapProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="fs-2">{persona.avatar}</div>
          <div>
            <h3 className="h5 fw-bold mb-0">{persona.name}&apos;s journey map</h3>
            <div className="text-muted small">Touchpoints, emotions, and pain points</div>
          </div>
        </div>

        <div className="row g-3">
          {stages.map((stage) => (
            <div key={stage.stage} className="col-md-6">
              <div className="border rounded-4 p-3 h-100 bg-light">
                <div className="fw-bold">{stage.stage}</div>
                <div className="small text-muted mt-1">Emotion: {stage.emotion}</div>
                <div className="small mt-2">Touchpoint: {stage.touchpoint}</div>
                <div className="small mt-2 text-danger-emphasis">Pain point: {stage.painPoint}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
