type ParticipantCardProps = {
  name: string;
  age: string;
  tech: string;
  device: string;
  slot: string;
  diversity: string;
  availability: string;
};

export function ParticipantCard({
  name,
  age,
  tech,
  device,
  slot,
  diversity,
  availability,
}: ParticipantCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h3 className="h5 fw-bold mb-1">{name}</h3>
            <div className="text-muted small">{age} • {device}</div>
          </div>
          <span className="badge rounded-pill text-bg-light border">{diversity} diversity</span>
        </div>
        <div className="mt-3 d-grid gap-2 small">
          <div><span className="fw-semibold">Tech comfort:</span> {tech}</div>
          <div><span className="fw-semibold">Scheduled session:</span> {slot}</div>
          <div><span className="fw-semibold">Availability:</span> {availability}</div>
        </div>
      </div>
    </div>
  );
}
