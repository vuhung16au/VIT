type ColorSwatchProps = {
  name: string;
  hex: string;
  detail?: string;
};

export function ColorSwatch({ name, hex, detail }: ColorSwatchProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-3">
        <div className="rounded-4 mb-3" style={{ height: "96px", backgroundColor: hex }} />
        <div className="fw-semibold">{name}</div>
        <div className="small text-muted">{hex}</div>
        {detail ? <div className="small mt-2">{detail}</div> : null}
      </div>
    </div>
  );
}
