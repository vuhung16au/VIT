import type { Priority } from "@/types/requirements";

const styles: Record<Priority, string> = {
  "Must Have": "bg-danger-subtle text-danger border border-danger-subtle",
  "Should Have": "bg-warning-subtle text-warning-emphasis border border-warning-subtle",
  "Could Have": "bg-info-subtle text-info-emphasis border border-info-subtle",
  "Won't Have": "bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle",
};

type PriorityBadgeProps = {
  priority: Priority;
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return <span className={`badge rounded-pill px-3 py-2 fw-semibold ${styles[priority]}`}>{priority}</span>;
}
