import { PriorityBadge } from "@/components/PriorityBadge";
import { RequirementsNav } from "@/components/RequirementsNav";
import { functionalRequirements } from "@/data/functionalRequirements";

const columns = [
  {
    title: "Must Have",
    description: "Core requirements needed for MVP booking success.",
  },
  {
    title: "Should Have",
    description: "Important additions that improve the experience significantly.",
  },
  {
    title: "Could Have",
    description: "Useful extras that are lower priority for the first release.",
  },
  {
    title: "Won't Have",
    description: "Explicitly out of scope for this release.",
  },
] as const;

const roadmap = [
  { stage: "MVP", items: ["Booking, availability, confirmation, reminders, family booking"] },
  { stage: "v1.1", items: ["Favorites, calendar integration, improved reliability tooling"] },
  { stage: "v2.0", items: ["Ratings, recurring appointments, broader clinic integrations"] },
];

export default function PrioritizationPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/prioritization" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-success fw-semibold small mb-1">Demo 2</p>
              <h1 className="display-6 fw-bold">MoSCoW prioritization</h1>
              <p className="text-muted mb-0 col-lg-8">
                Prioritize scope based on user impact, implementation effort, and delivery risk so
                the team can define a realistic MVP.
              </p>
            </div>
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="col-lg-3 col-md-6">
            <div className="card section-card h-100">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold">{column.title}</h2>
                <p className="text-muted small">{column.description}</p>
                <div className="d-grid gap-3">
                  {functionalRequirements
                    .filter((item) => item.priority === column.title)
                    .map((item) => (
                      <div key={item.id} className="border rounded-4 p-3 bg-light">
                        <div className="small text-success fw-semibold">{item.id}</div>
                        <div className="fw-semibold">{item.title}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-7">
          <div className="card section-card h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Decision matrix</h2>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Requirement</th>
                      <th>Impact</th>
                      <th>Effort</th>
                      <th>Risk if omitted</th>
                      <th>Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {functionalRequirements.slice(0, 6).map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{index < 3 ? "High" : "Medium"}</td>
                        <td>{index % 2 === 0 ? "Medium" : "Low"}</td>
                        <td>{item.priority === "Must Have" ? "High" : "Medium"}</td>
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
        </div>
        <div className="col-lg-5">
          <div className="card section-card h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">Roadmap view</h2>
              <div className="d-grid gap-3">
                {roadmap.map((step) => (
                  <div key={step.stage} className="border rounded-4 p-3 bg-light">
                    <div className="small text-success fw-semibold">{step.stage}</div>
                    <div>{step.items.join(", ")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
