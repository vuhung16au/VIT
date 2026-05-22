type SeverityBadgeProps = {
  severity: string;
};

function normalizeSeverity(severity: string) {
  return severity.toLowerCase().replace(/\s+/g, "-");
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  return <span className={`badge severity-${normalizeSeverity(severity)}`}>{severity}</span>;
}
