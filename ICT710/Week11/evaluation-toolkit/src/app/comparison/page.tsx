import { EvaluationNav } from "@/components/EvaluationNav";
import { comparisonData } from "@/data/analyticsData";

export default function ComparisonPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/comparison" />
        </div>
        {comparisonData.map((item) => (
          <div key={item.version} className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-md-5">
                <div className="small text-success fw-semibold">{item.version}</div>
                <h1 className="h3 fw-bold">{item.pattern}</h1>
                <div className="row g-3 mt-1">
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Learnability: {item.learnability}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Efficiency: {item.efficiency}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Memorability: {item.memorability}</div></div>
                  <div className="col-6"><div className="border rounded-4 p-3 bg-light">Satisfaction: {item.satisfaction}</div></div>
                  <div className="col-12"><div className="border rounded-4 p-3 bg-light">Errors: {item.errors}%</div></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
