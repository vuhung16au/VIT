"use client";

import { useState } from "react";

import { ConfirmationCard } from "@/components/ConfirmationCard";
import { SlotSelector } from "@/components/SlotSelector";

const consultationTypes = [
  "Study planning",
  "Portfolio feedback",
  "Project check-in",
  "Technical setup help",
];

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [slot, setSlot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailLooksValid = email.includes("@") && email.includes(".");
  const isFormValid =
    name.trim().length > 1 && emailLooksValid && consultationType.trim().length > 0 && slot.trim().length > 0;

  const resetForm = () => {
    setName("");
    setEmail("");
    setConsultationType("");
    setSlot("");
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <ConfirmationCard
        name={name}
        email={email}
        consultationType={consultationType}
        slot={slot}
        onReset={resetForm}
      />
    );
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <div className="small text-uppercase text-primary fw-semibold mb-2">Interaction demo</div>
        <h2 className="h2 fw-bold mb-3">Book a short study consultation</h2>
        <p className="text-muted mb-4">
          This tiny app demonstrates form input, visible choices, validation, loading feedback, and confirmation.
        </p>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Student name</label>
            <input
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jordan Lee"
            />
            {name.trim().length > 0 && name.trim().length < 2 ? (
              <div className="small text-danger mt-2">Please enter at least 2 characters.</div>
            ) : null}
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Email</label>
            <input
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="jordan@example.com"
            />
            {email.length > 0 && !emailLooksValid ? (
              <div className="small text-danger mt-2">Enter a valid email address.</div>
            ) : null}
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Consultation type</label>
            <div className="d-flex flex-wrap gap-2">
              {consultationTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`btn rounded-pill ${
                    consultationType === type ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setConsultationType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="col-12 pt-2">
            <SlotSelector selectedSlot={slot} onSelect={setSlot} />
          </div>
        </div>

        <div className="rounded-4 bg-light p-3 mt-4">
          <div className="small text-muted">Progress</div>
          <div className="fw-semibold">
            {isFormValid ? "Ready to submit" : "Complete all required fields to continue"}
          </div>
        </div>

        <button type="button" className="btn btn-primary mt-4 px-4" disabled={!isFormValid || isSubmitting} onClick={handleSubmit}>
          {isSubmitting ? "Submitting..." : "Confirm consultation"}
        </button>
      </div>
    </div>
  );
}
