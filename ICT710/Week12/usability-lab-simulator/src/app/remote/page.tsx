import { LabNav } from "@/components/LabNav";
import { remoteChecklist, remoteTools } from "@/data/testingData";

export default function RemotePage() {
  const sections = [
    { title: "Before session", items: remoteChecklist.before },
    { title: "During session", items: remoteChecklist.during },
    { title: "After session", items: remoteChecklist.after },
  ];

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/remote" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Remote usability testing</h1>
              <p className="mb-0">
                This companion view demonstrates how remote moderated testing differs from the in-person lab setup.
              </p>
            </div>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">{section.title}</h2>
                <ul className="mb-0 ps-3">
                  {section.items.map((item) => (
                    <li key={item} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Remote tools comparison</h2>
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Features</th>
                      <th>Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {remoteTools.map((tool) => (
                      <tr key={tool.tool}>
                        <td>{tool.tool}</td>
                        <td>{tool.features}</td>
                        <td>{tool.bestFor}</td>
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
