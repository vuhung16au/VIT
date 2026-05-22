"use client";

type PlanExportButtonProps = {
  objective: string;
  participants: string;
  environment: string;
  incentive: string;
};

export function PlanExportButton({
  objective,
  participants,
  environment,
  incentive,
}: PlanExportButtonProps) {
  const handleExport = () => {
    const popup = window.open("", "_blank", "width=960,height=720");
    if (!popup) {
      return;
    }

    popup.document.write(`
      <html>
        <head>
          <title>Usability Test Plan</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 32px; color: #1f2937; }
            h1, h2 { color: #b42318; }
            section { margin-bottom: 24px; }
            ul { line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>Usability Test Plan</h1>
          <section>
            <h2>Overview</h2>
            <p><strong>Objective:</strong> ${objective}</p>
            <p><strong>Participants:</strong> ${participants}</p>
            <p><strong>Environment:</strong> ${environment}</p>
            <p><strong>Incentive:</strong> ${incentive}</p>
          </section>
          <section>
            <h2>Export note</h2>
            <p>Use the browser print dialog and choose "Save as PDF" to export this test plan.</p>
          </section>
        </body>
      </html>
    `);
    popup.document.close();
    popup.focus();
    popup.print();
  };

  return (
    <button type="button" className="btn btn-danger mt-4" onClick={handleExport}>
      Generate test plan PDF
    </button>
  );
}
