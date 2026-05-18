function Reserve() {
  const [finish, setFinish] = React.useState('carbon');
  const [qty, setQty] = React.useState(1);
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState('Switzerland');
  const [submitted, setSubmitted] = React.useState(null);
  const [remaining, setRemaining] = React.useState(213);

  const total = 349 * qty;

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    const id = 'EM-2026-' + Math.random().toString(16).slice(2, 6).toUpperCase();
    setSubmitted({id, email, finish, qty, country, total});
    setRemaining(r => Math.max(0, r - qty));
  };

  const reset = () => { setSubmitted(null); setEmail(''); setQty(1); };

  return (
    <section id="reserve" className="em-reserve section">
      <div className="container em-reserve-grid">
        <div className="stack-3">
          <span className="eyebrow"><Icon name="sparkles" size={12} color="var(--amber-400)"/> batch 01 · early-bird</span>
          <h2 className="em-h2">Reserve your capsule.</h2>
          <p className="em-lede" style={{maxWidth: 500}}>
            500 units, hand-assembled in Renens. €349 to reserve — fully refundable until your capsule
            leaves the workshop. Shipping inside the EU + UK + CH only for batch 01.
          </p>
          <div className="em-reserve-counter">
            <div>
              <div className="ctr-label">Remaining · batch 01</div>
              <div className="ctr-bar"><div className="ctr-fill" style={{width: (remaining/500*100) + '%'}}/></div>
            </div>
            <div className="ctr-num">{remaining} / 500</div>
          </div>
        </div>

        <div className="em-reserve-card">
          {submitted ? (
            <div className="em-reserve-confirmed">
              <span className="eyebrow"><Icon name="check" size={14}/> reserved</span>
              <h3 className="conf-title">You're in batch 01.</h3>
              <p className="conf-body">
                We've put aside <b>{submitted.qty} × Emmma</b> in <b>{submitted.finish}</b> for{' '}
                <b>{submitted.email}</b>. You'll hear from us once when your capsule is wrapped in linen,
                and again when it leaves the workshop in Renens. That's the only mail you'll get.
              </p>
              <div className="conf-meta">
                <div><span className="ctr-label">Order</span><span className="conf-mono">#{submitted.id}</span></div>
                <div><span className="ctr-label">Total · refundable</span><span className="conf-mono">€{submitted.total}</span></div>
                <div><span className="ctr-label">Ships to</span><span className="conf-mono">{submitted.country}</span></div>
              </div>
              <button className="btn btn-secondary btn-md" onClick={reset} style={{marginTop: 24}}>
                Reserve another capsule
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="stack-3">
              <div className="field">
                <label className="field-label">Email — for one quiet update when it ships</label>
                <div className="input">
                  <input type="email" required value={email}
                         onChange={e => setEmail(e.target.value)}
                         placeholder="you@home.org"/>
                </div>
              </div>

              <div className="row" style={{gap: 16, flexWrap: 'wrap'}}>
                <div className="field" style={{flex: '1 1 200px'}}>
                  <label className="field-label">Ship to</label>
                  <div className="input">
                    <select value={country} onChange={e => setCountry(e.target.value)}
                            style={{background: 'transparent', color: 'inherit', border: 0, outline: 0, font: 'inherit', flex: 1, appearance: 'none'}}>
                      {['Switzerland','France','Germany','Belgium','Netherlands','United Kingdom','Italy','Spain','Austria'].map(c =>
                        <option key={c}>{c}</option>
                      )}
                    </select>
                    <Icon name="chevron-down" size={14} color="var(--fg-faint)"/>
                  </div>
                </div>
                <div className="field" style={{flex: '0 1 140px'}}>
                  <label className="field-label">Capsules</label>
                  <div className="qty">
                    <button type="button" className="qty-btn" onClick={() => setQty(q => Math.max(1, q-1))}>−</button>
                    <span className="qty-n">{qty}</span>
                    <button type="button" className="qty-btn" onClick={() => setQty(q => Math.min(5, q+1))}>+</button>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="field-label">Finish</label>
                <div className="finish-row">
                  {[
                    {id: 'carbon', label: 'Carbon', sub: 'Black anodised'},
                    {id: 'bone',   label: 'Bone',   sub: 'Bead-blasted aluminium'},
                  ].map(o => (
                    <label key={o.id} className={"finish-opt" + (finish === o.id ? " is-on" : "")}>
                      <input type="radio" name="finish" checked={finish === o.id}
                             onChange={() => setFinish(o.id)}/>
                      <span className={"finish-swatch finish-" + o.id}/>
                      <div className="stack-1">
                        <span className="finish-label">{o.label}</span>
                        <span className="finish-sub">{o.sub}</span>
                      </div>
                      <span className={"radio" + (finish === o.id ? " on" : "")}/>
                    </label>
                  ))}
                </div>
              </div>

              <div className="em-reserve-total">
                <div>
                  <div className="ctr-label">Refundable reservation</div>
                  <div className="total-num">€{total}<span className="total-sub"> · €349 / capsule</span></div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{whiteSpace: 'nowrap'}}>
                  Reserve your capsule <Icon name="arrow-right" size={16}/>
                </button>
              </div>
              <div className="em-reserve-trust">
                <Icon name="lock" size={12} color="var(--fg-subtle)"/>
                Stored locally. We never see your card — payment goes through Stripe in Lausanne.
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .em-reserve { background: var(--bg); }
        .em-reserve-grid {
          display: grid; grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(32px, 5vw, 80px); align-items: flex-start;
        }
        .em-reserve-counter {
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
          padding: 16px 0 0; border-top: 1px solid var(--border);
        }
        .ctr-label { font: 500 11px/1 var(--font-mono); letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--fg-subtle); display: block; margin-bottom: 8px; }
        .ctr-bar { width: 200px; height: 6px; background: var(--surface-2); border-radius: 999px; overflow: hidden; }
        .ctr-fill { height: 100%; background: var(--patina-500); transition: width .4s var(--ease-out); }
        .ctr-num { font-family: var(--font-mono); font-weight: 500; font-size: 18px;
          color: var(--fg); font-variant-numeric: tabular-nums; }

        .em-reserve-card {
          padding: 28px; border-radius: var(--radius-xl);
          background: var(--surface); border: 1px solid var(--border);
          box-shadow: var(--elev-2), inset 0 0 0 1px rgba(247,243,242,0.04);
        }

        .qty {
          display: flex; align-items: center; height: 44px;
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .qty-btn { background: transparent; border: 0; color: var(--fg); width: 40px; height: 100%;
          font-size: 18px; cursor: pointer; transition: color var(--dur-fast); }
        .qty-btn:hover { color: var(--patina-400); }
        .qty-n { flex: 1; text-align: center; font-family: var(--font-mono); font-weight: 500; font-size: 16px;
          font-variant-numeric: tabular-nums; color: var(--fg); }

        .finish-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .finish-opt {
          display: flex; align-items: center; gap: 12px;
          padding: 14px; border-radius: var(--radius-sm);
          background: var(--surface-2); border: 1px solid var(--border);
          cursor: pointer; transition: border-color var(--dur-fast), background-color var(--dur-fast);
        }
        .finish-opt:hover { border-color: var(--border-strong); }
        .finish-opt.is-on { border-color: var(--patina-400); background: var(--bg-tint); }
        .finish-opt input { position: absolute; opacity: 0; pointer-events: none; }
        .finish-swatch { width: 28px; height: 28px; border-radius: 8px; flex: none;
          border: 1px solid rgba(0,0,0,0.2); }
        .finish-carbon { background: linear-gradient(135deg, #1A1716, #0F0E0D); }
        .finish-bone   { background: linear-gradient(135deg, #F7F3ED, #D1CEBC); }
        .finish-label { font: 500 14px/1 var(--font-ui); color: var(--fg); }
        .finish-sub   { font: 500 11px/1 var(--font-mono); color: var(--fg-subtle);
          letter-spacing: 0.02em; }
        .finish-opt .radio { margin-left: auto; }

        .em-reserve-total {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 18px 20px; border-radius: var(--radius-md);
          background: var(--bg); border: 1px solid var(--border);
        }
        .total-num { font-family: var(--font-display); font-weight: 500; font-size: 28px;
          letter-spacing: -0.025em; color: var(--fg); font-variant-numeric: tabular-nums; }
        .total-sub { font-family: var(--font-mono); font-weight: 500; font-size: 12px;
          letter-spacing: 0.02em; color: var(--fg-subtle); margin-left: 4px; }
        .em-reserve-trust { display: flex; align-items: center; gap: 8px;
          font: 400 12px/1.4 var(--font-body); color: var(--fg-subtle); }

        .em-reserve-confirmed { display: flex; flex-direction: column; gap: 16px; }
        .conf-title { font-family: var(--font-display); font-weight: 500;
          font-size: 32px; line-height: 1.15; letter-spacing: -0.03em;
          color: var(--fg); margin: 0; }
        .conf-body  { font: 400 16px/1.55 var(--font-body); color: var(--fg-muted); margin: 0; }
        .conf-meta  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          padding: 16px 20px; border-radius: var(--radius-md);
          background: var(--bg); border: 1px solid var(--border); margin-top: 8px; }
        .conf-meta > div { display: flex; flex-direction: column; gap: 6px; }
        .conf-mono { font-family: var(--font-mono); font-weight: 500; font-size: 14px;
          color: var(--fg); }

        @media (max-width: 880px) {
          .em-reserve-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
Object.assign(window, { Reserve });
