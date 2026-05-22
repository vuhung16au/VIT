import { LabNav } from "@/components/LabNav";
import { PlanExportButton } from "@/components/PlanExportButton";
import {
  participantProfile,
  planningMetrics,
  planningObjectives,
  planningTasks,
  testEnvironment,
} from "@/data/testingData";

export default function PlanPage() {
  const objective = planningObjectives[0];
  const participants = "8 participants";
  const environment = "Remote moderated";
  const incentive = participantProfile.incentive;

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/plan" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Test planning tool</h1>
              <p className="text-muted mb-0">
                Build the study plan before recruiting participants or running sessions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-4">Plan builder</h2>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Test objective</label>
                  <textarea className="form-control" rows={2} defaultValue={objective} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Number of participants</label>
                  <input className="form-control" defaultValue="8" />
                  <div className="small text-muted mt-1">{participantProfile.recommendedRange}</div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Environment</label>
                  <select className="form-select" defaultValue={environment}>
                    {testEnvironment.settings.map((setting) => (
                      <option key={setting}>{setting}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Incentive</label>
                  <input className="form-control" defaultValue={incentive} />
                </div>

                <div className="col-12">
                  <label className="form-label">What are you trying to learn?</label>
                  <div className="d-grid gap-2">
                    {planningObjectives.map((item) => (
                      <input key={item} className="form-control" defaultValue={item} />
                    ))}
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="h5 fw-bold mt-2">Test tasks</h3>
                </div>
                {planningTasks.map((task) => (
                  <div key={task.title} className="col-12">
                    <div className="border rounded-4 p-3 bg-light">
                      <div className="fw-semibold">{task.title}</div>
                      <div className="small text-muted mb-3">{task.description}</div>
                      <div className="row g-2">
                        <div className="col-md-8">
                          <label className="form-label">Success criteria</label>
                          <input className="form-control" defaultValue={task.successCriteria} />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Time limit</label>
                          <input className="form-control" defaultValue={task.timeLimit} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <PlanExportButton
                objective={objective}
                participants={participants}
                environment={environment}
                incentive={incentive}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="d-grid gap-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Participant profile</h2>
                <div className="small text-muted mb-2">{participantProfile.nielsenNote}</div>
                <div className="mb-3">
                  <div className="small text-danger fw-semibold">Demographics</div>
                  <ul className="mb-0 ps-3">
                    {participantProfile.demographics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <div className="small text-danger fw-semibold">Experience levels</div>
                  <ul className="mb-0 ps-3">
                    {participantProfile.experienceLevels.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="small text-danger fw-semibold">Screening criteria</div>
                  <ul className="mb-0 ps-3">
                    {participantProfile.screeningCriteria.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Metrics to collect</h2>
                <div className="mb-3">
                  <div className="small text-danger fw-semibold">Quantitative</div>
                  <ul className="mb-0 ps-3">
                    {planningMetrics.quantitative.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="small text-danger fw-semibold">Qualitative</div>
                  <ul className="mb-0 ps-3">
                    {planningMetrics.qualitative.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Test environment</h2>
                <div className="small text-danger fw-semibold">Equipment</div>
                <ul className="ps-3">
                  {testEnvironment.equipment.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="small text-danger fw-semibold">Templates</div>
                <ul className="mb-0 ps-3">
                  {testEnvironment.resources.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
