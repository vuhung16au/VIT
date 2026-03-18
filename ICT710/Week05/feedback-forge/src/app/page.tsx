import Link from "next/link";

import { BookingForm } from "@/components/BookingForm";
import { BootstrapNav } from "@/components/BootstrapNav";
import { InterviewScheduler } from "@/components/InterviewScheduler";
import { RecordingMethodsDemo } from "@/components/RecordingMethodsDemo";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <BootstrapNav currentPath="/" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm bg-primary text-white">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 05 Demo Plan</p>
              <h1 className="display-6 fw-bold">Feedback Forge</h1>
              <p className="col-lg-8 mb-0">
                Add questionnaires, interview scheduling, observation dashboards, and triangulated
                insights to the doctor booking workflow so students can practice multiple data
                gathering techniques in one project.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <BookingForm />
        </div>
        <div className="col-lg-5">
          <InterviewScheduler />
        </div>

        <div className="col-12">
          <RecordingMethodsDemo />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Navigate the demo</h2>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/booking-complete" className="btn btn-primary">
                  View post-booking questionnaire
                </Link>
                <Link href="/admin/analytics" className="btn btn-outline-primary">
                  Open analytics dashboard
                </Link>
                <Link href="/admin/insights" className="btn btn-outline-primary">
                  Open triangulation insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
