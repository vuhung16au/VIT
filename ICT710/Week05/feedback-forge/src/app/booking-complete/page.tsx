import Link from "next/link";

import { BootstrapNav } from "@/components/BootstrapNav";
import { FeedbackQuestionnaire } from "@/components/FeedbackQuestionnaire";

export default function BookingCompletePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <BootstrapNav currentPath="/booking-complete" />
        </div>
        <div className="col-12">
          <div className="alert alert-success shadow-sm">
            Booking complete. This is the ideal moment to capture questionnaire feedback while the
            experience is still fresh.
          </div>
        </div>
        <div className="col-12">
          <FeedbackQuestionnaire />
        </div>
        <div className="col-12">
          <Link href="/" className="btn btn-outline-primary">
            Back to main demo
          </Link>
        </div>
      </div>
    </main>
  );
}
