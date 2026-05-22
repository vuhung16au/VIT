"use client";

type ReportExportsProps = {
  csvContent: string;
  pptOutline: string;
};

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function ReportExports({ csvContent, pptOutline }: ReportExportsProps) {
  return (
    <div className="mt-4 d-flex flex-wrap gap-2">
      <button type="button" className="btn btn-danger" onClick={() => window.print()}>
        Export PDF
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => downloadFile("usability-report.csv", csvContent, "text/csv;charset=utf-8")}
      >
        Export CSV
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => downloadFile("usability-report-outline.txt", pptOutline, "text/plain;charset=utf-8")}
      >
        Export PowerPoint
      </button>
    </div>
  );
}
