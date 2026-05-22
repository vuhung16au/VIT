type AnalyticsChartProps = {
  successRates: Array<{ task: string; successRate: number; time: string; target: string }>;
  errorHeatmap: Array<{ error: string; frequency: number; severity: string }>;
  satisfactionScores: Array<{ label: string; score: number; value: string }>;
  quoteCloud: Array<{ word: string; weight: number }>;
};

export function AnalyticsChart({
  successRates,
  errorHeatmap,
  satisfactionScores,
  quoteCloud,
}: AnalyticsChartProps) {
  const maxError = Math.max(...errorHeatmap.map((row) => row.frequency));

  return (
    <div className="d-grid gap-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-4">Success rate bar chart</h2>
          <div className="d-grid gap-3">
            {successRates.map((item) => (
              <div key={item.task}>
                <div className="d-flex justify-content-between gap-3 small fw-semibold mb-2">
                  <span>{item.task}</span>
                  <span>{item.successRate}%</span>
                </div>
                <div className="chart-track">
                  <div className="chart-bar" style={{ width: `${item.successRate}%` }} />
                </div>
                <div className="small text-muted mt-1">{item.time} • {item.target}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-4">Time-on-task box plot</h2>
          <div className="d-grid gap-3">
            {successRates.map((item, index) => (
              <div key={item.task} className="border rounded-4 p-3 bg-light">
                <div className="fw-semibold mb-2">{item.task}</div>
                <div className="time-plot">
                  <div className="time-plot-whisker" />
                  <div
                    className="time-plot-box"
                    style={{ left: `${18 + index * 15}%`, width: `${20 + index * 4}%` }}
                  />
                  <div
                    className="time-plot-median"
                    style={{ left: `${28 + index * 15}%` }}
                  />
                </div>
                <div className="small text-muted mt-2">Average observed time: {item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-4">Error frequency heat map</h2>
          <div className="d-grid gap-2">
            {errorHeatmap.map((row) => {
              const intensity = Math.max(0.25, row.frequency / maxError);
              return (
                <div key={row.error} className="heat-row">
                  <div>{row.error}</div>
                  <div
                    className="heat-cell"
                    style={{ opacity: intensity }}
                    title={`${row.frequency} occurrences`}
                  >
                    {row.frequency}
                  </div>
                  <div className="small text-muted">{row.severity}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-4">Satisfaction radar chart</h2>
          <div className="radar-grid">
            {satisfactionScores.map((score) => (
              <div key={score.label} className="radar-row">
                <div className="small fw-semibold">{score.label}</div>
                <div className="chart-track">
                  <div className="chart-bar chart-bar-alt" style={{ width: `${score.score * 20}%` }} />
                </div>
                <div className="small text-muted">{score.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-4">Sentiment word cloud</h2>
          <div className="d-flex flex-wrap gap-3 align-items-end">
            {quoteCloud.map((entry) => (
              <span
                key={entry.word}
                className="word-cloud-pill"
                style={{ fontSize: `${0.9 + entry.weight * 0.18}rem` }}
              >
                {entry.word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
