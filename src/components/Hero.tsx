interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="hero" aria-label="Selamat datang">
      <div className="hero-content">
        <p className="hero-kicker">Kedai kopi, camilan &amp; makanan</p>
        <h2>{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <a href="#menu" className="hero-cta">
          Lihat Menu
        </a>
      </div>
    </section>
  );
}