function Header({theme = 'dark', onToggleTheme = () => {}}) {
  const goToReserve = () => {
    document.getElementById('reserve')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };
  const isDark = theme === 'dark';
  return (
    <header className="em-header">
      <div className="container em-header-inner">
        <Logo size={28} wordSize={22}/>
        <nav className="em-nav">
          <a href="#capsules">Capsules</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#specs">Specs</a>
        </nav>
        <div className="row" style={{gap: 10}}>
          <button
            className="em-theme-toggle"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleTheme}
          >
            <span className={"theme-side" + (isDark ? " is-on" : "")}>
              <Icon name="moon" size={14}/> Carbon
            </span>
            <span className={"theme-side" + (!isDark ? " is-on" : "")}>
              <Icon name="sun" size={14}/> Bone
            </span>
          </button>
          <a className="btn btn-text btn-sm" href="#" onClick={(e) => e.preventDefault()}>Sign in</a>
          <button className="btn btn-primary btn-md" onClick={goToReserve}>
            Reserve <Icon name="arrow-right" size={16}/>
          </button>
        </div>
      </div>
      <style>{`
        .em-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(15,14,13,0.72);
          backdrop-filter: saturate(160%) blur(20px);
          -webkit-backdrop-filter: saturate(160%) blur(20px);
          border-bottom: 1px solid var(--border);
        }
        [data-theme="light"] .em-header {
          background: rgba(250,250,247,0.78);
        }
        .em-header-inner {
          display: flex; justify-content: space-between; align-items: center;
          height: 73px; gap: 24px;
        }
        .em-nav { display: flex; gap: 28px; }
        .em-nav a {
          color: var(--fg-muted); text-decoration: none;
          font-family: var(--font-ui); font-weight: 500; font-size: 15px;
          letter-spacing: -0.005em;
          transition: color var(--dur-fast) var(--ease-out);
        }
        .em-nav a:hover { color: var(--fg); }

        .em-theme-toggle {
          display: inline-flex; align-items: center; padding: 3px;
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: 999px; cursor: pointer;
          transition: background-color var(--dur-fast), border-color var(--dur-fast);
        }
        .em-theme-toggle .theme-side {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 10px; border-radius: 999px;
          font: 500 12px/1 var(--font-ui); letter-spacing: -0.005em;
          color: var(--fg-subtle); white-space: nowrap;
          transition: color var(--dur-fast), background-color var(--dur-fast);
        }
        .em-theme-toggle .theme-side.is-on {
          background: var(--bg); color: var(--fg);
          box-shadow: 0 1px 2px 0 rgba(0,0,0,0.12);
        }
        .em-theme-toggle:hover { border-color: var(--border-strong); }

        @media (max-width: 880px) { .em-nav { display: none; } }
        @media (max-width: 640px) {
          .em-theme-toggle .theme-side:not(.is-on) { display: none; }
        }
      `}</style>
    </header>
  );
}
Object.assign(window, { Header });
