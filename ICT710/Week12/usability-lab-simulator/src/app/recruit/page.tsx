import { LabNav } from "@/components/LabNav";
import { participants, screeningQuestions } from "@/data/testingData";

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
              <h1 className="h3 fw-bold mb-3">Screener questionnaire</h1>
              <ul className="mb-0">
                {screeningQuestions.map((question) => (
                  <li key={question} className="mb-2">{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Participant roster</h2>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Tech</th>
                      <th>Device</th>
                      <th>Slot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {participants.map((participant) => (
                      <tr key={participant.name}>
                        <td>{participant.name}</td>
                        <td>{participant.age}</td>
                        <td>{participant.tech}</td>
                        <td>{participant.device}</td>
                        <td>{participant.slot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
