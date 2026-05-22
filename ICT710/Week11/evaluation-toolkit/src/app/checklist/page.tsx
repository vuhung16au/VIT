"use client";

import { useMemo, useState } from "react";

import { ChecklistItem } from "@/components/ChecklistItem";
import { EvaluationNav } from "@/components/EvaluationNav";
import { checklistSections } from "@/data/sampleFindings";
import { calculateComplianceScore } from "@/lib/severityCalculator";

const initialSections = checklistSections;

export default function ChecklistPage() {
  const [sections, setSections] = useState(initialSections);

  function handleStatusChange(itemId: string, status: "Pass" | "Fail" | "N/A") {
    setSections((currentSections) =>
      currentSections.map((section) => ({
        ...section,
        items: section.items.map((item) => (item.id === itemId ? { ...item, status } : item)),
      })),
    );
  }

  const summary = useMemo(() => {
    const items = sections.flatMap((section) => section.items);
    return {
      score: calculateComplianceScore(items),
      pass: items.filter((item) => item.status === "Pass").length,
      fail: items.filter((item) => item.status === "Fail").length,
      na: items.filter((item) => item.status === "N/A").length,
    };
  }, [sections]);

  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/checklist" />
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-8">
                  <div className="text-uppercase small fw-semibold text-success mb-2">Inspection checklist</div>
                  <h1 className="display-6 fw-bold">Compliance scoring workspace</h1>
                  <p className="text-muted mb-0">
                    Pass and fail the checklist items to demonstrate how compliance is calculated and how each issue can be tied back to a heuristic.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="checklist-score-card">
                    <div className="display-5 fw-bold mb-2">{summary.score}%</div>
                    <div className="small text-muted mb-2">Compliance score = Pass / (Pass + Fail) × 100</div>
                    <div className="small">Pass: {summary.pass}</div>
                    <div className="small">Fail: {summary.fail}</div>
                    <div className="small">N/A: {summary.na}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 fw-bold mb-4">{section.title}</h2>
                <div className="d-grid gap-3">
                  {section.items.map((item) => (
                    <ChecklistItem key={item.id} item={item} onStatusChange={handleStatusChange} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
