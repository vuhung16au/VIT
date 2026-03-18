import { LabNav } from "@/components/LabNav";

export default function PlanPage() {
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
              <div className="row g-3 mt-1">
                <div className="col-12">
                  <label className="form-label">Test objective</label>
                  <textarea className="form-control" rows={2} defaultValue="Evaluate whether users can book an appointment in under 3 minutes." />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Participants</label>
                  <input className="form-control" defaultValue="8" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Environment</label>
                  <select className="form-select">
                    <option>Remote moderated</option>
                    <option>Lab</option>
                    <option>In the wild</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Incentive</label>
                  <input className="form-control" defaultValue="$25 gift card" />
                </div>
                <div className="col-12">
                  <label className="form-label">Primary task</label>
                  <textarea className="form-control" rows={2} defaultValue="Book an appointment with Dr. Sarah Chen for next Tuesday at 2 PM." />
                </div>
              </div>
              <button className="btn btn-danger mt-4">Generate test plan PDF</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
