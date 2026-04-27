import Link from "next/link";

import { PriorityBadge } from "@/components/PriorityBadge";
import { RequirementsNav } from "@/components/RequirementsNav";
import { functionalRequirements } from "@/data/functionalRequirements";
import { nonFunctionalRequirements } from "@/data/nonFunctionalRequirements";

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
  {
    stage: "MVP",
    items: [
      "Core booking: search, live availability, confirmation, reminders, family booking",
      "Must-have NFRs: accessibility, performance, security, compliance",
    ],
  },
  {
    stage: "v1.1",
    items: [
      "Cancel & reschedule, favorites, calendar integration, improved reliability tooling",
    ],
  },
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
              <div className="text-muted col-lg-9">
                <p className="mb-3">
                  Prioritize scope based on user impact, implementation effort, and delivery risk so
                  the team can define a realistic MVP.
                </p>
                <p className="mb-0 small">
                  <strong className="text-body">MoSCoW</strong> is a lightweight prioritization
                  technique: <strong className="text-body">Must</strong> items are non‑negotiable
                  for the agreed release; <strong className="text-body">Should</strong> items are
                  important if capacity allows; <strong className="text-body">Could</strong> items
                  are desirable extras when time is left over;{" "}
                  <strong className="text-body">Won&apos;t</strong> (this time) records what is
                  explicitly deferred so expectations stay clear and scope does not creep.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-2">Scope reminder: functional and non-functional</h2>
              <p className="text-muted small mb-0">
                MVP is not only a list of features. Quality attributes (speed, accessibility,
                security, compliance) are release commitments too. This board lists{" "}
                <strong className="text-body">functional requirements (FR)</strong> and{" "}
                <strong className="text-body">non-functional requirements (NFR)</strong> in the
                same MoSCoW bands. For full NFR detail, open the{" "}
                <Link href="/requirements/non-functional" className="fw-semibold">
                  non-functional requirements
                </Link>{" "}
                view.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-start border-4 border-success">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-2">Activity 2: quality, gaps, and contradictions</h2>
              <p className="text-muted small mb-3">
                Use these prompts in class to validate clarity and testability before locking scope.
              </p>
              <ul className="small text-muted mb-3">
                <li className="mb-2">
                  <strong className="text-body">Gap:</strong> A story promises value (for example
                  “smart doctor recommendations”) but has no linked requirement IDs or acceptance
                  criteria—how would the team test delivery?
                </li>
                <li className="mb-2">
                  <strong className="text-body">Contradiction:</strong> An NFR demands sub-second
                  search while a feature adds heavy work on every query—surface the tension and
                  negotiate scope or architecture.
                </li>
                <li className="mb-0">
                  <strong className="text-body">Quality bar:</strong> Requirements should be clear,
                  specific, testable, feasible, relevant to user value, and traceable to research
                  evidence.
                </li>
              </ul>
              <p className="small text-muted mb-0">
                In the repository, see{" "}
                <code className="user-select-all">docs/Requirements-Specification.md</code> for the
                demo scope outline and traceability principle.
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
                        <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                          <span className="small text-success fw-semibold">{item.id}</span>
                          <span className="badge text-bg-success rounded-pill">FR</span>
                        </div>
                        <div className="fw-semibold">{item.title}</div>
                      </div>
                    ))}
                  {nonFunctionalRequirements
                    .filter((item) => item.priority === column.title)
                    .map((item) => (
                      <div key={item.id} className="border rounded-4 p-3 bg-light">
                        <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                          <span className="small text-success fw-semibold">{item.id}</span>
                          <span className="badge text-bg-secondary rounded-pill">NFR</span>
                        </div>
                        <div className="fw-semibold">{item.category}</div>
                        <div className="small text-muted mt-1">{item.statement}</div>
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
                    <ul className="mb-0 mt-2 ps-3 small">
                      {step.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
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
