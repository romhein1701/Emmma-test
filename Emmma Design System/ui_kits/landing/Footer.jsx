function Footer() {
  return (
    <footer className="em-footer">
      <div className="container">
        <div className="em-footer-grid">
          <div className="stack-2">
            <Logo size={28} wordSize={22}/>
            <p className="footer-tag">
              Hardware for memory.<br/>
              Built in Renens, Vaud — Switzerland.
            </p>
          </div>
          <FooterCol title="Product">
            <a href="#capsules">Capsules</a>
            <a href="#specs">Specifications</a>
            <a href="#">Print + frame add-ons</a>
            <a href="#">Ambient speaker</a>
          </FooterCol>
          <FooterCol title="Manifesto">
            <a href="#manifesto">Anti-cloud principles</a>
            <a href="#">Open firmware</a>
            <a href="#">Repair index</a>
            <a href="#">Press kit</a>
          </FooterCol>
          <FooterCol title="Quietly">
            <a href="#reserve">Reserve · batch 01</a>
            <a href="#">Workshop visits</a>
            <a href="mailto:hello@emmma.ch">hello@emmma.ch</a>
          </FooterCol>
        </div>
        <div className="em-footer-base">
          <div>© 2026 Emmma SA — written with three Ms.</div>
          <div className="em-footer-meta">
            <span>CH-550.1.234.567-8</span>
            <span className="dot-sep"/>
            <span>Privacy (boring · obvious)</span>
            <span className="dot-sep"/>
            <span>Terms</span>
          </div>
        </div>
      </div>
      <style>{`
        .em-footer { background: var(--surface); border-top: 1px solid var(--border);
          padding: 64px 0 32px; color: var(--fg-muted); }
        .em-footer-grid {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px 48px;
          padding-bottom: 48px; border-bottom: 1px solid var(--border);
        }
        .footer-tag { font: 400 14px/1.5 var(--font-body); color: var(--fg-subtle); margin: 0; max-width: 280px; }
        .footer-col-title {
          font: 500 11px/1 var(--font-mono); color: var(--fg-faint);
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px;
        }
        .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
        .footer-col-links a {
          color: var(--fg-muted); text-decoration: none;
          font: 500 14px/1.3 var(--font-ui); letter-spacing: -0.005em;
          transition: color var(--dur-fast);
        }
        .footer-col-links a:hover { color: var(--fg); }
        .em-footer-base {
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          padding-top: 24px; flex-wrap: wrap;
          font: 500 12px/1 var(--font-mono); color: var(--fg-faint); letter-spacing: 0.04em;
        }
        .em-footer-meta { display: flex; align-items: center; gap: 12px; }
        .dot-sep { width: 3px; height: 3px; border-radius: 999px; background: var(--fg-faint); }
        @media (max-width: 760px) {
          .em-footer-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({title, children}) {
  return (
    <div>
      <div className="footer-col-title">{title}</div>
      <div className="footer-col-links">{children}</div>
    </div>
  );
}

Object.assign(window, { Footer });
