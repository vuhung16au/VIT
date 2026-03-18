type ConfirmationCardProps = {
  name: string;
  email: string;
  consultationType: string;
  slot: string;
  onReset: () => void;
};

export function ConfirmationCard({
  name,
  email,
  consultationType,
  slot,
  onReset,
}: ConfirmationCardProps) {
  return (
    <div className="card border-0 shadow-sm success-card">
      <div className="card-body p-4 p-md-5">
        <div className="small text-uppercase text-success fw-semibold mb-2">Confirmation</div>
        <h2 className="display-6 fw-bold">Consultation booked</h2>
        <p className="text-muted mb-4">
          Clear confirmation helps users know the action succeeded and what happens next.
        </p>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="rounded-4 bg-light p-3 h-100">
              <div className="small text-muted">Student</div>
              <div className="fw-semibold">{name}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rounded-4 bg-light p-3 h-100">
              <div className="small text-muted">Email</div>
              <div className="fw-semibold">{email}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rounded-4 bg-light p-3 h-100">
              <div className="small text-muted">Consultation type</div>
              <div className="fw-semibold">{consultationType}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rounded-4 bg-light p-3 h-100">
              <div className="small text-muted">Time slot</div>
              <div className="fw-semibold">{slot}</div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary mt-4" onClick={onReset}>
          Book another consultation
        </button>
      </div>
    </div>
  );
}
