import type { Feature } from '../types';

interface WhyUsProps {
  brandName: string;
  features: Feature[];
}

export default function WhyUs({ brandName, features }: WhyUsProps) {
  return (
    <section className="why" aria-labelledby="why-title">
      <h2 id="why-title">Kenapa {brandName}?</h2>
      <div className="why-grid">
        {features.map((feature, index) => (
          <article key={feature.title} className="why-card">
            <span className="why-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}