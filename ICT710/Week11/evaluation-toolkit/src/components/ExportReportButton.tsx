"use client";

export function ExportReportButton() {
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={() => window.print()}
    >
      Export to PDF
    </button>
  );
}
