type SeverityBadgeProps = {
  severity: string;
};

const classes: Record<string, string> = {
  Critical: "text-bg-danger",
  High: "text-bg-warning",
  Medium: "text-bg-info",
  Low: "text-bg-secondary",
};

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  return <span className={`badge ${classes[severity] ?? "text-bg-light"}`}>{severity}</span>;
}
