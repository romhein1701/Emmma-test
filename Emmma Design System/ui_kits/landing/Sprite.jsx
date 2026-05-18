// Icon layer — Lucide via CDN.
// We render through dangerouslySetInnerHTML so React keeps ownership of the DOM
// (no MutationObserver / data-lucide rewrites needed).

const ICON_CACHE = {};

function getLucideSvg(name) {
  if (ICON_CACHE[name]) return ICON_CACHE[name];
  const L = window.lucide;
  if (!L) return '';
  // lucide@latest exposes icons under PascalCase keys
  const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const node = L.icons && (L.icons[pascal] || L.icons[name]);
  if (!node) return '';
  // node is an array tuple [tag, attrs, children]; lucide also ships createElement
  let svg = '';
  try {
    const el = L.createElement(node);
    svg = el.outerHTML || new XMLSerializer().serializeToString(el);
  } catch (e) {
    svg = '';
  }
  ICON_CACHE[name] = svg;
  return svg;
}

function Icon({name, size = 20, color, strokeWidth = 1.75, className = ''}) {
  // wrapper span gets currentColor + size; inner svg comes from lucide
  const html = getLucideSvg(name);
  return (
    <span
      className={'lucide-wrap ' + className}
      aria-hidden="true"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, color: color || 'currentColor',
        flex: 'none',
        ['--sw']: strokeWidth,
      }}
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}

// Brand mark — single-path SVG, kept inline (not in Lucide).
function Logo({size = 28, className = '', showWord = true, wordSize = 22}) {
  return (
    <div className={'row ' + className} style={{gap: 10}}>
      <span style={{
        display: 'inline-flex', width: size, height: size,
        color: 'var(--patina-500)', flex: 'none',
      }}>
        <svg viewBox="0 0 24 24" width={size} height={size}>
          <path fill="currentColor" d="M 18.969 1.697 C 18.963 1.69 18.957 1.683 18.951 1.676 C 18.257 0.658 17.166 0 15.941 0 C 14.7 0 13.597 0.674 12.904 1.713 C 12.211 0.674 11.108 0 9.868 0 C 8.628 0 7.525 0.674 6.832 1.713 C 6.139 0.674 5.036 0 3.795 0 C 1.703 0 0 1.917 0 4.274 L 0 17.614 C 0 18.425 0.268 19.229 0.755 19.879 C 0.773 19.904 0.793 19.927 0.815 19.949 L 4.475 23.766 C 4.625 23.921 4.825 24 5.025 24 C 5.214 24 5.403 23.93 5.551 23.79 C 5.855 23.501 5.866 23.022 5.576 22.719 L 2.155 19.153 C 1.795 18.777 1.564 18.291 1.527 17.771 C 1.524 17.719 1.522 17.667 1.522 17.614 L 1.522 4.274 C 1.522 2.753 2.542 1.515 3.795 1.515 C 5.049 1.515 6.069 2.753 6.069 4.274 L 6.069 11.991 C 6.069 12.018 6.07 12.044 6.073 12.07 L 6.073 17.614 C 6.073 18.425 6.341 19.229 6.828 19.879 C 6.846 19.904 6.866 19.927 6.887 19.949 L 10.547 23.766 C 10.697 23.921 10.897 24 11.098 24 C 11.287 24 11.476 23.93 11.623 23.79 C 11.927 23.501 11.938 23.022 11.648 22.719 L 8.228 19.153 C 7.867 18.777 7.637 18.291 7.6 17.771 C 7.596 17.719 7.594 17.667 7.594 17.614 L 7.594 4.274 C 7.594 2.753 8.614 1.515 9.868 1.515 C 11.121 1.515 12.141 2.753 12.141 4.274 L 12.141 11.991 C 12.141 12.018 12.143 12.044 12.145 12.07 L 12.145 17.614 C 12.145 18.425 12.413 19.229 12.9 19.879 C 12.919 19.904 12.939 19.927 12.96 19.949 L 16.62 23.765 C 16.77 23.921 16.97 24 17.171 24 C 17.359 24 17.549 23.93 17.696 23.79 C 18 23.501 18.011 23.022 17.721 22.719 L 14.3 19.153 C 13.94 18.777 13.709 18.291 13.673 17.771 C 13.669 17.719 13.667 17.667 13.667 17.614 L 13.667 4.274 C 13.667 2.753 14.687 1.515 15.94 1.515 C 16.651 1.515 17.286 1.913 17.704 2.535 C 17.707 2.541 17.711 2.547 17.715 2.553 C 18.027 3.025 18.214 3.623 18.214 4.274 L 18.214 17.614 C 18.214 18.425 18.482 19.229 18.969 19.879 C 18.987 19.904 19.007 19.927 19.028 19.949 L 22.689 23.765 C 22.835 23.918 23.035 24 23.239 24 C 23.334 24 23.43 23.982 23.522 23.945 C 23.811 23.83 24 23.552 24 23.242 L 24 9.655 C 24 8.843 23.731 8.037 23.242 7.387 L 18.969 1.697 L 18.969 1.697 Z"/>
        </svg>
      </span>
      {showWord && (
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: wordSize, letterSpacing: '-0.03em', color: 'var(--fg)',
        }}>Emmma</span>
      )}
    </div>
  );
}

// Empty stub kept for compatibility with previous import.
function Sprite() { return null; }

Object.assign(window, { Sprite, Logo, Icon });
