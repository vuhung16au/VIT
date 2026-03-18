import { AnalyticsChart } from "@/components/AnalyticsChart";
import { EvaluationNav } from "@/components/EvaluationNav";
import { funnelData, heatmapInsights, metrics } from "@/data/analyticsData";

export default function AnalyticsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/analytics" />
        </div>
        {metrics.map((metric) => (
          <div key={metric.label} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-success fw-semibold">{metric.label}</div>
                <div className="display-6 fw-bold">{metric.value}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-8">
          <AnalyticsChart items={funnelData} />
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Heatmap insights</h2>
              <ul className="mb-0">
                {heatmapInsights.map((item) => (
                  <li key={item.area} className="mb-2">
                    {item.area}: {item.clicks}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
