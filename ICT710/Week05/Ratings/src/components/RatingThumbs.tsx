"use client";

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export function RatingThumbs() {
  const [rating, setRating] = useState<'up' | 'down' | null>(null);

  return (
    <div className="glass-card">
      <h2>Binary (Thumbs Up / Thumbs Down)</h2>
      <p>The ultimate low-friction UI.</p>
      
      <div className="thumbs-container">
        <button
          className={`thumb-button ${rating === 'up' ? 'selected up' : ''}`}
          onClick={() => setRating('up')}
          title="Good"
        >
          <ThumbsUp size={32} />
        </button>
        <button
          className={`thumb-button ${rating === 'down' ? 'selected down' : ''}`}
          onClick={() => setRating('down')}
          title="Bad"
        >
          <ThumbsDown size={32} />
        </button>
      </div>

      <div className="analysis-text">
        <strong>Why it works:</strong>
        <ul className="analysis-list">
          <li>"Did your package arrive safely? Yes / No."</li>
          <li>Optimized for the highest possible response rate.</li>
          <li>Reduces mental effort to a simple binary choice.</li>
        </ul>
      </div>
    </div>
  );
}
