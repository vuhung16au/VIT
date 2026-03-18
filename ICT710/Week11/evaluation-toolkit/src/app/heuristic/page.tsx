import { EvaluationNav } from "@/components/EvaluationNav";
import { HeuristicCard } from "@/components/HeuristicCard";
import { IssueForm } from "@/components/IssueForm";
import { heuristics } from "@/data/heuristics";
import { sampleFindings } from "@/data/sampleFindings";

export default function HeuristicPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/heuristic" />
        </div>
        <div className="col-12">
          <IssueForm />
        </div>
        {heuristics.map((heuristic) => (
          <div key={heuristic.id} className="col-lg-6">
            <HeuristicCard
              heuristic={heuristic}
              findings={sampleFindings
                .filter((finding) => finding.heuristicId === heuristic.id)
                .map(({ screen, issue, severity, rating, recommendation }) => ({
                  screen,
                  issue,
                  severity,
                  rating,
                  recommendation,
                }))}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
