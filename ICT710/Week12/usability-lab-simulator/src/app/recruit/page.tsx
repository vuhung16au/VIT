import { InviteButton } from "@/components/InviteButton";
import { LabNav } from "@/components/LabNav";
import { ParticipantCard } from "@/components/ParticipantCard";
import { inviteChecklist, participants, screeningQuestions } from "@/data/testingData";

export default function RecruitPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/recruit" />
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h1 className="h3 fw-bold mb-3">Screener questionnaire builder</h1>
              <div className="d-grid gap-4">
                {screeningQuestions.map((question) => (
                  <div key={question.id} className="border rounded-4 p-3 bg-light">
                    <div className="fw-semibold mb-2">{question.prompt}</div>
                    {question.type === "slider" ? (
                      <div>
                        <input type="range" className="form-range" min="1" max="5" defaultValue="3" />
                        <div className="small text-muted">1 = Beginner • 5 = Expert</div>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        {question.options.map((option) => (
                          <label key={option} className="form-check">
                            <input
                              className="form-check-input"
                              type={question.type === "multi" ? "checkbox" : "radio"}
                              name={question.id}
                              defaultChecked={option === question.options[1]}
                            />
                            <span className="form-check-label">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="d-grid gap-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                  <h2 className="h4 fw-bold mb-0">Participant roster</h2>
                  <InviteButton />
                </div>
                <div className="row g-3">
                  {participants.map((participant) => (
                    <div key={participant.name} className="col-md-6">
                      <ParticipantCard {...participant} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Automated invite contents</h2>
                <div className="row g-3">
                  {inviteChecklist.map((item) => (
                    <div key={item} className="col-md-6">
                      <div className="border rounded-4 p-3 bg-light h-100">
                        <div className="small text-danger fw-semibold">Included</div>
                        <div>{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
