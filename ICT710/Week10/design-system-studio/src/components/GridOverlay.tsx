import { spacingScale } from "@/lib/designTokens";

export function GridOverlay() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">12-column grid</h2>
        <div className="row g-2 mb-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="col">
              <div className="rounded-3 bg-primary-subtle text-center py-4 small fw-semibold">{index + 1}</div>
            </div>
          ))}
        </div>
        <div className="row g-3">
          {spacingScale.map((token) => (
            <div key={token.name} className="col-md-4">
              <div className="border rounded-4 p-3 h-100 bg-light">
                <div className="fw-semibold">{token.name}</div>
                <div className="text-muted">{token.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
