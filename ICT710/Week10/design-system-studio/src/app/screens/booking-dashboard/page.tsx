import { SystemNav } from "@/components/SystemNav";
import { Button } from "@/components/ui/Button";

const metrics = [
  { label: "Confirmed today", value: "24", delta: "+12%" },
  { label: "Completion rate", value: "91%", delta: "+4%" },
  { label: "Average wait", value: "8 min", delta: "-2 min" },
];

const appointments = [
  { time: "09:00", patient: "Mia Chen", doctor: "Dr Patel", status: "Ready to check in", tone: "success" },
  { time: "10:30", patient: "Oliver Tran", doctor: "Dr Singh", status: "Needs insurance update", tone: "warning" },
  { time: "11:45", patient: "Noah Wilson", doctor: "Dr Brown", status: "Telehealth confirmed", tone: "default" },
];

export default function BookingDashboardPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/screens/booking-dashboard" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small text-primary mb-2">Screen layer</p>
              <h1 className="display-6 fw-bold">Booking dashboard</h1>
              <p className="text-muted col-lg-8 mb-0">
                This page demonstrates the jump from isolated components to a whole interface. The
                same type scale, spacing, colors, and controls now create rhythm, hierarchy, and a
                recognizable product voice.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <section className="dashboard-shell">
            <div className="row g-0">
              <aside className="col-lg-3 dashboard-sidebar p-4 p-lg-5">
                <div className="mb-4">
                  <p className="text-uppercase small fw-semibold mb-2 opacity-75">Northbridge Care</p>
                  <h2 className="h3 fw-bold mb-0">Appointments</h2>
                </div>
                <div className="d-grid gap-2">
                  <div className="dashboard-nav-item is-active">Today overview</div>
                  <div className="dashboard-nav-item">Patients</div>
                  <div className="dashboard-nav-item">Messages</div>
                  <div className="dashboard-nav-item">Billing</div>
                </div>
                <div className="mt-4 pt-4 border-top border-light border-opacity-25">
                  <div className="small opacity-75">Language cues</div>
                  <ul className="small mb-0 mt-2 ps-3">
                    <li>Rounded geometry</li>
                    <li>Calm blue palette</li>
                    <li>High-clarity spacing</li>
                  </ul>
                </div>
              </aside>

              <div className="col-lg-9 p-4 p-lg-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                  <div>
                    <p className="text-uppercase small fw-semibold text-primary mb-2">Tuesday schedule</p>
                    <h2 className="display-6 fw-bold mb-1">Good morning, Priya</h2>
                    <p className="text-muted mb-0">Your interface should feel cohesive before a user reads a single label.</p>
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="secondary">Export</Button>
                    <Button>New booking</Button>
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="col-md-4">
                      <div className="metric-card p-4 h-100">
                        <div className="text-muted small mb-2">{metric.label}</div>
                        <div className="display-6 fw-bold">{metric.value}</div>
                        <div className="metric-card__delta small mt-2">{metric.delta} from last week</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-4">
                  <div className="col-xl-7">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h3 className="h4 fw-bold mb-0">Upcoming appointments</h3>
                          <span className="state-chip">3 key moments</span>
                        </div>
                        <div className="d-grid gap-3">
                          {appointments.map((appointment) => (
                            <div key={appointment.time} className="appointment-row p-3 d-flex flex-column flex-md-row justify-content-between gap-3">
                              <div className="d-flex gap-3">
                                <div className={`appointment-dot ${appointment.tone === "warning" ? "is-warning" : appointment.tone === "success" ? "is-success" : ""}`} />
                                <div>
                                  <div className="fw-bold">{appointment.time} · {appointment.patient}</div>
                                  <div className="text-muted small">{appointment.doctor}</div>
                                </div>
                              </div>
                              <div className="text-md-end">
                                <div className="small fw-semibold">{appointment.status}</div>
                                <div className="text-muted small">Consistent state language reduces hesitation.</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3">Why this matters</h3>
                        <ul className="mb-4">
                          <li>Students can see tokens resolved into a full screen, not just single widgets.</li>
                          <li>Hierarchy comes from repeated rules for spacing, shape, and emphasis.</li>
                          <li>Design language is what makes this feel like one product rather than a collage.</li>
                        </ul>
                        <div className="border rounded-4 p-4 bg-light">
                          <div className="small text-muted mb-2">Class prompt</div>
                          <p className="mb-0">
                            Ask students which details make the screen feel calm and clinical. Then
                            change those details and discuss how the personality shifts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
