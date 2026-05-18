// Three capsule cards — recreated from the figma "Capsules" frame.
// Each is a memory packet: image stack, title, date, count, caption, share line, CTAs, tags.

const CAPSULES = [
  {
    title: "La Rochelle", date: "07.2026", count: 132, badge: "new",
    shared: "Romain",
    body: "On July 6th, my fiancé and I visited La Rochelle in western France. The island of Île de Ré was the ideal place to catch the sunset after a long day.",
    tags: ["beach", "sunset", "île de ré", "+12"],
    images: ['hero-photo.jpg', 'feature-photo.jpg', 'capsule-photo-1.jpg']
  },
  {
    title: "Sunday at home", date: "09.2025", count: 47, badge: null,
    shared: "Just you",
    body: "Sourdough. Coffee that went cold twice. The Sunday newspaper still arrives, even now. Lou slept by the window the entire morning.",
    tags: ["kitchen", "lou", "morning"],
    images: ['feature-photo.jpg', 'capsule-photo-1.jpg', 'hero-photo.jpg']
  },
  {
    title: "Bivouac · Trient", date: "08.2025", count: 89, badge: null,
    shared: "Anna · Felix",
    body: "Two nights above the treeline. The light at 04:50 was reason enough. We walked back down on the third day with seven hundred grams less of cheese.",
    tags: ["alps", "bivouac", "valais", "+3"],
    images: ['capsule-photo-1.jpg', 'hero-photo.jpg', 'feature-photo.jpg']
  },
];

function Capsule({c}) {
  return (
    <article className="cap">
      <div className="cap-top">
        {c.badge ? <span className="badge-new">{c.badge}</span> : <span/>}
        <span className="tag tag-warning">{c.count} archives</span>
      </div>
      <div className="cap-photos">
        {c.images.map((src, i) => (
          <div key={i} className={"cap-photo cap-photo-" + i}
               style={{backgroundImage: 'url(../../assets/' + src + ')'}}/>
        ))}
      </div>
      <div className="cap-body">
        <h3 className="cap-title">{c.title}</h3>
        <p className="cap-date">{c.date}</p>
        <p className="cap-text">{c.body}</p>
        <div className="cap-share">
          <span className="cap-avatar"/>
          <span>Shared with {c.shared}</span>
        </div>
      </div>
      <div className="cap-cta">
        <button className="btn btn-primary btn-md" style={{flex: 1}}>Show my souvenir</button>
        <button className="btn btn-secondary btn-md" style={{flex: 1}}>Print</button>
      </div>
      <div className="cap-tags">
        {c.tags.map((t, i) => (
          <span key={i} className="tag tag-on-dark">{t}</span>
        ))}
      </div>
    </article>
  );
}

function Capsules() {
  return (
    <section id="capsules" className="em-capsules section">
      <div className="container">
        <div className="em-capsules-head">
          <div className="stack-2" style={{maxWidth: 640}}>
            <span className="eyebrow">a glimpse</span>
            <h2 className="em-h2">Capsules</h2>
            <p className="em-lede">
              Each week, Emmma quietly assembles a memory capsule from your photo library —
              with a name it learns from where you were, who appears in the frames,
              and the time of day. Here are three from a real shelf.
            </p>
          </div>
        </div>
        <div className="em-capsules-grid">
          {CAPSULES.map((c, i) => <Capsule key={i} c={c}/>)}
        </div>
      </div>

      <style>{`
        .em-capsules { background: var(--bg); }
        .em-capsules-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          gap: 32px; margin-bottom: 56px; flex-wrap: wrap;
        }
        .em-capsules-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        @media (max-width: 1080px) { .em-capsules-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 720px)  { .em-capsules-grid { grid-template-columns: 1fr; } }

        .cap {
          position: relative; display: flex; flex-direction: column; gap: 18px;
          padding: 24px; border-radius: var(--radius-xl);
          background: var(--carbon-400); border: 1px solid var(--carbon-100);
          box-shadow: var(--elev-1), inset 0 0 0 1px rgba(247,243,242,0.04);
          transition: transform var(--dur-base) var(--ease-out),
                      box-shadow var(--dur-base) var(--ease-out);
        }
        .cap:hover { transform: translateY(-2px);
          box-shadow: 0 12px 32px -16px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(247,243,242,0.06); }
        .cap-top { display: flex; justify-content: space-between; align-items: center; min-height: 24px; }

        .cap-photos { position: relative; width: 100%; height: 158px; }
        .cap-photo {
          position: absolute; border-radius: 12px;
          background-size: cover; background-position: center;
          width: 110px; height: 130px;
          border: 2px solid var(--carbon-400);
          box-shadow: 0 6px 16px -6px rgba(0,0,0,0.6);
        }
        .cap-photo-0 { left: 0;  top: 14px; transform: rotate(-5deg); }
        .cap-photo-1 { left: 90px; top: 4px;  transform: rotate(2deg);  z-index: 2; }
        .cap-photo-2 { left: 180px; top: 18px; transform: rotate(7deg);  }

        .cap-body  { display: flex; flex-direction: column; gap: 8px; }
        .cap-title { font-family: var(--font-display); font-weight: 500; font-size: 28px;
          line-height: 1.14; letter-spacing: -0.03em; color: var(--linen-50); margin: 0; }
        .cap-date  { font-family: var(--font-display); font-weight: 500; font-size: 18px;
          line-height: 1.4; letter-spacing: -0.02em; color: var(--linen-200); margin: 0; }
        .cap-text  { font: 400 14.5px/1.55 var(--font-body); color: var(--linen-200); margin: 6px 0 0; }

        .cap-share {
          display: flex; align-items: center; gap: 10px;
          font: 500 13px/1 var(--font-body); color: var(--linen-400); margin-top: 6px;
        }
        .cap-avatar {
          width: 22px; height: 22px; border-radius: 999px;
          background: linear-gradient(135deg, var(--patina-500), var(--amber-400));
          border: 1.5px solid var(--carbon-400);
        }

        .cap-cta { display: flex; gap: 12px; }
        .cap-tags { display: flex; gap: 6px; flex-wrap: wrap; }
      `}</style>
    </section>
  );
}
Object.assign(window, { Capsules });
