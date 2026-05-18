const PRINCIPLES = [
  {n: "01", icon: "house", t: "Lives with you. Not with them.",
    b: "Every photograph stays on the capsule, encrypted on the disk you own. We do not run a server. There is nothing to log in to."},
  {n: "02", icon: "eye-off", t: "Curated quietly, never harvested.",
    b: "The on-device model groups, names, and surfaces — it does not learn from your photos for anyone else. No telemetry leaves the room."},
  {n: "03", icon: "frame", t: "Phygital, not virtual.",
    b: "A capsule can become a printed booklet, a framed wall, or a fifteen-minute ambient playback through the speaker. Memory belongs in your home."},
  {n: "04", icon: "wrench", t: "Repairable. Replaceable. Yours.",
    b: "The case is M3-screwed, the SSD is a standard NVMe, and the firmware is signed but open. Outlive the company that built it."},
];

function Manifesto() {
  return (
    <section id="manifesto" className="em-manifesto section">
      <div className="container">
        <div className="em-manifesto-grid">
          <div className="stack-3 em-manifesto-intro">
            <span className="eyebrow bone"><Icon name="lock" size={14}/> manifesto</span>
            <h2 className="em-h2 em-h2-bone">Anti-cloud. By design, not by slogan.</h2>
            <p className="em-lede em-lede-bone">
              The companies that store your memories have a business model.
              Emmma does not. We sold you a piece of hardware, once, and that's the end of it.
            </p>
            <div className="em-manifesto-sig">
              <Icon name="mountain" size={20} color="var(--patina-500)"/>
              <div>
                <div className="sig-name">Designed and assembled in Renens, Vaud</div>
                <div className="sig-meta">CH 2026 · ISO 27001 · serialised</div>
              </div>
            </div>
          </div>
          <ol className="em-principles">
            {PRINCIPLES.map(p => (
              <li key={p.n} className="prin">
                <span className="prin-n">{p.n}</span>
                <span className="prin-icon" aria-hidden="true">
                  <Icon name={p.icon} size={44} strokeWidth={1.25} color="var(--patina-500)"/>
                </span>
                <div className="prin-body">
                  <h3 className="prin-t">{p.t}</h3>
                  <p className="prin-b">{p.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        .em-manifesto { background: var(--bone-50); color: var(--carbon-100); }
        .em-manifesto .em-h2-bone { color: var(--carbon-100); }
        .em-manifesto .em-lede-bone { color: var(--carbon-50); }
        .em-manifesto-grid {
          display: grid; grid-template-columns: 1fr 1.1fr;
          gap: clamp(32px, 6vw, 96px); align-items: flex-start;
        }
        .em-manifesto-intro { position: sticky; top: 96px; }
        .em-manifesto-sig {
          display: flex; gap: 12px; align-items: center;
          padding-top: 24px; border-top: 1px solid var(--bone-500); margin-top: 8px;
        }
        .sig-name { font: 500 14px/1.3 var(--font-ui); color: var(--carbon-100); }
        .sig-meta { font: 500 11px/1.3 var(--font-mono); color: var(--bone-600); letter-spacing: 0.04em;
          text-transform: uppercase; margin-top: 4px; }

        .em-principles {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column;
        }
        .prin {
          display: grid; grid-template-columns: 40px 64px 1fr; gap: 20px;
          padding: 28px 0; border-top: 1px solid var(--bone-500);
          align-items: start;
        }
        .prin:first-child { border-top: 0; padding-top: 0; }
        .prin-n {
          font-family: var(--font-mono); font-size: 13px; line-height: 1; color: var(--patina-500);
          letter-spacing: 0.06em; padding-top: 16px;
        }
        .prin-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 64px; height: 64px; padding-top: 4px;
          color: var(--patina-500); opacity: 0.35;
        }
        .prin-body { display: flex; flex-direction: column; gap: 10px; }
        .prin-t {
          font-family: var(--font-display); font-weight: 500;
          font-size: clamp(22px, 2.4vw, 28px); line-height: 1.2; letter-spacing: -0.025em;
          color: var(--carbon-100); margin: 0; max-width: 22ch;
        }
        .prin-b { font: 400 16px/1.55 var(--font-body); color: var(--carbon-50); margin: 0; max-width: 52ch; }

        @media (max-width: 880px) {
          .em-manifesto-grid { grid-template-columns: 1fr; }
          .em-manifesto-intro { position: static; }
          .prin { grid-template-columns: 32px 48px 1fr; gap: 14px; }
          .prin-icon { width: 48px; height: 48px; }
          .prin-icon svg { width: 36px; height: 36px; }
        }
      `}</style>
    </section>
  );
}
Object.assign(window, { Manifesto });
