"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';

export function RatingStars() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="glass-card">
      <h2>The 5-Star Scale</h2>
      <p>The standard for nuanced, qualitative feedback.</p>
      
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`star-button ${(hover || rating) >= star ? 'active' : ''}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
            title={`${star} Star${star > 1 ? 's' : ''}`}
          >
            <Star 
              size={48} 
              fill={(hover || rating) >= star ? 'currentColor' : 'none'} 
              strokeWidth={1.5}
            />
          </button>
        ))}
      </div>

      <div className="analysis-text">
        <strong>Why it works:</strong>
        <ul className="analysis-list">
          <li>5 stars is the maximum cognitive limit people process easily.</li>
          <li>Familiar conditioning from apps like Uber and Amazon reduces friction.</li>
          <li>Provides enough granularity for business needs without overwhelming the user.</li>
        </ul>
      </div>
    </div>
  );
}
