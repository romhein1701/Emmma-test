function Hero() {
  const goToReserve = () => {
    document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="em-hero">
      <div className="container em-hero-grid">
        <div className="em-hero-text">
          <span className="eyebrow"><Icon name="mountain" size={14} /> Swiss-made · Batch 01 · 2026</span>
          <h1 className="em-hero-h1">Memories you can&nbsp;hold.</h1>
          <p className="em-hero-lede">
            A small capsule for your home. It curates your photographs into chapters,
            quietly, on-device — and prints, frames, or whispers them back when you ask.
            Nothing leaves the room.
          </p>
          <div className="em-hero-cta">
            <button className="btn btn-primary btn-lg" onClick={goToReserve}>
              Reserve · €349 <Icon name="arrow-right" size={16} />
            </button>
            <button className="btn btn-outline btn-lg">
              Read the manifesto
            </button>
          </div>
          <div className="em-hero-trust">
            <div className="trust-item">
              <span className="trust-num">1.2 TB</span>
              <span className="trust-cap">On-device storage</span>
            </div>
            <span className="trust-sep" />
            <div className="trust-item">
              <span className="trust-num">€0 / yr</span>
              <span className="trust-cap">No subscription · all local</span>
            </div>
            <span className="trust-sep" />
            <div className="trust-item">
              <span className="trust-num">400K</span>
              <span className="trust-cap">PHOTOGRAPHS SAVED</span>
            </div>
          </div>
        </div>
        <div className="em-hero-art">
          <div className="em-hero-photo photo" style={{ backgroundImage: 'url(../../assets/hero-photo.jpg)' }} />
          <div className="em-hero-halo halo-amber" />
          <div className="em-hero-halo halo-patina" />
          <div className="em-hero-chip">
            <span className="trust-cap" style={{ color: 'var(--linen-300)' }}>Now playing on Emmma</span>
            <span className="em-hero-chip-title">La Rochelle · 07.2026</span>
            <div className="row" style={{ gap: 8, marginTop: 10 }}>
              <span className="tag tag-on-dark">île de ré</span>
              <span className="tag tag-on-dark">sunset</span>
              <span className="tag tag-warning">132 archives</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .em-hero { background: var(--bg); padding-top: clamp(48px, 8vw, 96px); padding-bottom: clamp(64px, 10vw, 128px); }
        .em-hero-grid {
          display: grid; grid-template-columns: 1.05fr 1fr; gap: clamp(32px, 5vw, 80px);
          align-items: center;
        }
        .em-hero-text { display: flex; flex-direction: column; gap: 28px; }
        .em-hero-h1 {
          font-family: var(--font-display); font-weight: 500;
          font-size: clamp(48px, 7vw, 96px); line-height: 1.02; letter-spacing: -0.05em;
          color: var(--fg); margin: 0;
        }
        .em-hero-lede {
          font: 400 20px/1.55 var(--font-body); letter-spacing: -0.005em;
          color: var(--fg-muted); max-width: 540px; margin: 0;
        }
        .em-hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
        .em-hero-trust {
          display: flex; align-items: center; gap: 22px; padding-top: 12px;
          border-top: 1px solid var(--border); margin-top: 8px;
        }
        .trust-item { display: flex; flex-direction: column; gap: 4px; }
        .trust-num { font-family: var(--font-mono); font-weight: 500; font-size: 18px; color: var(--fg);
          font-variant-numeric: tabular-nums; letter-spacing: -0.005em; }
        .trust-cap { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--fg-subtle); }
        .trust-sep { width: 1px; height: 28px; background: var(--border); }
        .em-hero-art { position: relative; aspect-ratio: 4/5; max-height: 720px; }
        .em-hero-photo {
          position: absolute; inset: 0; border-radius: var(--radius-xl);
          box-shadow: var(--elev-3), inset 0 0 0 1px rgba(247,243,242,0.06);
        }
        .em-hero-halo { position: absolute; border-radius: var(--radius-lg); pointer-events: none; }
        .halo-amber {
          width: 128px; height: 128px; right: -24px; top: -24px;
          background: var(--amber-400); opacity: 0.10;
        }
        .halo-patina {
          width: 192px; height: 192px; left: -32px; bottom: 64px;
          background: var(--patina-500); opacity: 0.10;
        }
        .em-hero-chip {
          position: absolute; left: 18px; bottom: 18px; right: 18px;
          background: rgba(15,14,13,0.72); backdrop-filter: blur(18px);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md); padding: 14px 16px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .em-hero-chip-title { font-family: var(--font-display); font-weight: 500;
          font-size: 20px; letter-spacing: -0.02em; color: var(--fg); }
        @media (max-width: 880px) {
          .em-hero-grid { grid-template-columns: 1fr; }
          .em-hero-art { aspect-ratio: 5/4; max-height: 480px; }
          .em-hero-trust { flex-wrap: wrap; gap: 14px 22px; }
        }
      `}</style>
    </section>);

}
Object.assign(window, { Hero });