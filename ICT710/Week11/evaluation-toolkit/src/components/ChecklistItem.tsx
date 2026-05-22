import type { ChecklistItemData } from "@/data/sampleFindings";

type ChecklistItemProps = {
  item: ChecklistItemData;
  onStatusChange: (id: string, status: ChecklistItemData["status"]) => void;
};

export function ChecklistItem({ item, onStatusChange }: ChecklistItemProps) {
  return (
    <div className="border rounded-4 p-3 bg-light">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
        <div>
          <div className="fw-semibold">{item.label}</div>
          <div className="small text-muted mt-1">{item.notes}</div>
          {item.evidence ? <div className="small mt-2"><strong>Evidence:</strong> {item.evidence}</div> : null}
          {item.heuristicId ? (
            <div className="small text-success mt-2">Related heuristic: Nielsen #{item.heuristicId}</div>
          ) : null}
        </div>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: "120px" }}
          value={item.status}
          onChange={(event) => onStatusChange(item.id, event.target.value as ChecklistItemData["status"])}
        >
          <option>Pass</option>
          <option>Fail</option>
          <option>N/A</option>
        </select>
      </div>
    </div>
  );
}
