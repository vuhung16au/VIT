import { PriorityBadge } from "@/components/PriorityBadge";
import type { TraceabilityItem } from "@/types/requirements";

type TraceabilityMatrixProps = {
  items: TraceabilityItem[];
};

export function TraceabilityMatrix({ items }: TraceabilityMatrixProps) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Persona</th>
                <th>User Story</th>
                <th>Feature</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.requirementId}-${item.storyId}`}>
                  <td>{item.requirementId}</td>
                  <td>{item.persona}</td>
                  <td>{item.storyId}</td>
                  <td>{item.feature}</td>
                  <td>
                    <PriorityBadge priority={item.priority} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
