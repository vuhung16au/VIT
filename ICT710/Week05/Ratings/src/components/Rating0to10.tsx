"use client";

import { useState } from 'react';

export function Rating0to10() {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="glass-card">
      <h2>0-10 Net Promoter Score (NPS)</h2>
      <p>Often used to measure long-term brand loyalty, but frequently misapplied to simple transactions.</p>
      
      <div className="nps-container">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`nps-button ${rating === num ? 'selected' : ''}`}
            onClick={() => setRating(num)}
            title={`Rate ${num}`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="nps-labels">
        <span>Not likely at all</span>
        <span>Extremely likely</span>
      </div>

      <div className="analysis-text">
        <strong>The Problems with this UI:</strong>
        <ul className="analysis-list">
          <li><strong>Cognitive Overload (Hick's Law):</strong> Time to make a decision increases with the number of choices. Choosing between a 7 and an 8 for a simple package delivery is "false precision".</li>
          <li><strong>Color Psychology Mismatch:</strong> Making all buttons red creates friction. Red universally signals "Stop," "Error," or "Danger", violating heuristics for matching the real world.</li>
          <li><strong>Wrong Metric:</strong> NPS measures loyalty, not transactional satisfaction.</li>
        </ul>
      </div>
    </div>
  );
}
