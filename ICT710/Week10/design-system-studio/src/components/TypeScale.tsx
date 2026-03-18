import { typeScale } from "@/lib/designTokens";

export function TypeScale() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">Type scale</h2>
        <div className="d-grid gap-4">
          {typeScale.map((token) => (
            <div key={token.name} className="border rounded-4 p-4 bg-light">
              <div className="small text-primary fw-semibold mb-2">
                {token.name} • {token.size} • {token.px}
              </div>
              <div style={{ fontSize: token.size, lineHeight: token.lineHeight, fontWeight: Number(token.weight) }}>
                Design language gives this text a clear hierarchy.
              </div>
              <div className="small text-muted mt-2">
                Weight {token.weight} • Line height {token.lineHeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
