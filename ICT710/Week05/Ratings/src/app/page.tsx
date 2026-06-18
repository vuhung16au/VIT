import { Rating0to10 } from '@/components/Rating0to10';
import { RatingEmoji } from '@/components/RatingEmoji';
import { RatingThumbs } from '@/components/RatingThumbs';
import { RatingStars } from '@/components/RatingStars';

export default function Home() {
  return (
    <main className="container">
      <h1>UI/UX Rating Comparison</h1>
      <p>
        The frustration of standard surveys often comes from prioritizing data-gathering frameworks over human-centered design. 
        This prototype demonstrates the interaction cost and UX differences between four common rating interfaces.
      </p>

      <Rating0to10 />
      <RatingEmoji />
      <RatingThumbs />
      <RatingStars />

      <div className="glass-card">
        <h3>The Verdict</h3>
        <p>
          If you were designing this for a client, you need to decide what to optimize for.
        </p>
        <ul className="analysis-list" style={{ marginTop: '0' }}>
          <li><strong>Binary (Thumbs):</strong> Use for the highest possible response rate on simple tasks.</li>
          <li><strong>3-Point (Emojis):</strong> Use when you need sentiment (good/neutral/bad) without complex scoring.</li>
          <li><strong>5-Star:</strong> Use when you need nuanced, qualitative feedback for complex experiences (like a restaurant or product).</li>
          <li><strong>0-10 (NPS):</strong> Avoid for transactional interactions. Reserve only for measuring long-term brand loyalty.</li>
        </ul>
        <p style={{ marginTop: '1.5rem', marginBottom: 0 }}>
          <strong>Slider Note:</strong> Continuous sliders require fine motor control (Fitts's Law) and induce "false precision" anxiety, making them physically and mentally harder to use than simple buttons.
        </p>
      </div>
    </main>
  );
}
