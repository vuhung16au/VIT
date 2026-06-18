"use client";

import { useState } from 'react';

export function RatingEmoji() {
  const [rating, setRating] = useState<number | null>(null);

  const emojis = [
    { value: 1, emoji: '😡', label: 'Bad' },
    { value: 2, emoji: '😐', label: 'Neutral' },
    { value: 3, emoji: '😃', label: 'Good' }
  ];

  return (
    <div className="glass-card">
      <h2>The 3-Point System (Emojis)</h2>
      <p>Customer Satisfaction (CSAT) model mapping directly to mental models.</p>
      
      <div className="emoji-container">
        {emojis.map((item) => (
          <button
            key={item.value}
            className={`emoji-button ${rating === item.value ? 'selected' : ''}`}
            onClick={() => setRating(item.value)}
            title={item.label}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      <div className="analysis-text">
        <strong>Why it works:</strong>
        <ul className="analysis-list">
          <li>Perfectly maps to a user's reality for simple transactions.</li>
          <li>It was broken/late (Bad), it arrived (Neutral/Expected), or the person went above and beyond (Good).</li>
          <li>Drastically reduces interaction cost compared to 11 options.</li>
        </ul>
      </div>
    </div>
  );
}
