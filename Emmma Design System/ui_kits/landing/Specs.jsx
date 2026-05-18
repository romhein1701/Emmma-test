const SPECS = [
  {label: "STORAGE",       value: "1.2", unit: "TB",   note: "NVMe · user-replaceable"},
  {label: "AI",            value: "12B", unit: "params", note: "On-device · MLX runtime"},
  {label: "PHOTOS",        value: "≈ 400K", unit: "JPEG · 12 MP", note: "At 3 MB per frame"},
  {label: "BATTERY",       value: "9", unit: "hours", note: "Standby · 14 days"},
  {label: "PROCESSING",    value: "0.4s", unit: "per photo", note: "Curate · tag · place"},
  {label: "TELEMETRY",     value: "0", unit: "bytes", note: "Never. Air-gappable."},
];

const BOX = [
  "Emmma capsule (carbon or bone)",
  "Wired companion stand · braided USB-C",
  "Printed setup booklet, in your language",
  "One year of free firmware updates",
];

function Specs() {
  return (
    <section id="specs" className="em-specs section">
      <div className="container">
        <div className="em-specs-head">
          <span className="eyebrow"><Icon name="package" size={14}/> hardware</span>
          <h2 className="em-h2">A small object, doing one thing well.</h2>
          <p className="em-lede" style={{maxWidth: 640}}>
            120 × 80 × 24 mm, 320 g. Bead-blasted aluminium and a single woven cotton power cord.
            No screen — the capsule speaks through your phone, your speaker, or a print.
          </p>
        </div>
        <div className="em-specs-grid">
          {SPECS.map(s => (
            <div key={s.label} className="spec">
              <span className="spec-label">{s.label}</span>
              <div className="spec-row">
                <span className="spec-value">{s.value}</span>
                <span className="spec-unit">{s.unit}</span>
              </div>
              <span className="spec-note">{s.note}</span>
            </div>
          ))}
        </div>
        <div className="em-specs-box">
          <div className="box-head">
            <Icon name="printer" size={16} color="var(--patina-500)"/>
            <span>In the box</span>
          </div>
          <ul className="box-list">
            {BOX.map((b, i) => (
              <li key={i}>
                <Icon name="check" size={14} color="var(--patina-500)"/>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .em-specs { background: var(--bg); }
        .em-specs-head { display: flex; flex-direction: column; gap: 20px; margin-bottom: 64px; max-width: 720px; }
        .em-specs-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
        }
        .spec {
          padding: 28px 28px 24px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--surface);
          display: flex; flex-direction: column; gap: 10px;
        }
        .spec-label { font: 500 11px/1 var(--font-mono); color: var(--fg-subtle); letter-spacing: 0.08em; }
        .spec-row { display: flex; align-items: baseline; gap: 8px; }
        .spec-value { font-family: var(--font-display); font-weight: 500; font-size: 44px;
          line-height: 1; letter-spacing: -0.035em; color: var(--fg);
          font-variant-numeric: tabular-nums; }
        .spec-unit  { font-family: var(--font-mono); font-weight: 500; font-size: 13px;
          color: var(--fg-subtle); letter-spacing: 0.02em; text-transform: uppercase; }
        .spec-note  { font: 400 13px/1.5 var(--font-body); color: var(--fg-muted); margin-top: 4px; }

        .em-specs-box {
          margin-top: 32px; padding: 24px 28px; border-radius: var(--radius-lg);
          background: var(--bg-tint); border: 1px solid rgba(146,134,23,0.18);
          display: flex; align-items: flex-start; gap: 32px; flex-wrap: wrap;
        }
        .box-head { display: flex; align-items: center; gap: 8px;
          font: 500 12px/1 var(--font-mono); color: var(--patina-300);
          letter-spacing: 0.06em; text-transform: uppercase; padding-top: 4px; min-width: 140px; }
        .box-list { list-style: none; padding: 0; margin: 0;
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px 32px; flex: 1; min-width: 280px; }
        .box-list li { display: flex; align-items: center; gap: 10px;
          font: 400 14.5px/1.4 var(--font-body); color: var(--fg-muted); }

        @media (max-width: 880px) {
          .em-specs-grid { grid-template-columns: 1fr 1fr; }
          .box-list { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .em-specs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
Object.assign(window, { Specs });
