import { BookingForm } from "@/components/BookingForm";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <div className="card week-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 00</p>
              <h1 className="display-5 fw-bold">Interaction Basics</h1>
              <p className="col-lg-8 mb-0">
                A tiny Next.js app that helps students confirm their environment works while learning
                how feedback, validation, visible choices, and confirmation states support good IxD.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <BookingForm />
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">IxD principles shown here</h2>
              <ul className="mb-0">
                <li>Visibility of system status through progress and confirmation.</li>
                <li>Feedback through highlighted selections and loading text.</li>
                <li>Error prevention through disabled submit and inline validation.</li>
                <li>Recognition rather than recall through visible slot choices.</li>
                <li>Consistency through repeated button, spacing, and form patterns.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
