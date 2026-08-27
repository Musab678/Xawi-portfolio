import { ALL_SERVICES } from '../data/content.js';

/* line-art icons, drawn on a 24px grid and stroked with currentColor so the
   featured card can flip them to ink without a second copy */
const ICONS = {
  publish: (
    <>
      <path d="M3 5.5C5.5 4 8.5 4 11 5.5v13C8.5 17 5.5 17 3 18.5v-13Zm18 0C18.5 4 15.5 4 13 5.5v13c2.5-1.5 5.5-1.5 8 0v-13Z" />
      <path d="M12 2.6v2.2" />
    </>
  ),
  mega: (
    <>
      <path d="M3 9.5v5h3.5l7.5 4.5v-14L6.5 9.5H3Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7M20 6a8.5 8.5 0 0 1 0 12" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13.5h2.2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm16 0h-2.2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-5Z" />
      <path d="M10.5 10v5m3-6v7" />
    </>
  ),
  quill: (
    <>
      <path d="M20.5 3.5c-7.5.6-12 3.6-13.8 7.9-.9 2.2-1 4.3-.7 6.1 1.8.3 3.9.2 6.1-.7 4.3-1.8 7.8-6.3 8.4-13.3Z" />
      <path d="M3.2 20.8 8 16m5.4-8.6-4.1 4.2m6-1.4-4.6 4.7" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.4 0 2-.9 1.4-1.9-.7-1.1-.1-2.4 1.2-2.4h1.6a4.3 4.3 0 0 0 4.3-4.3c0-4.8-3.9-9-8.5-9Z" />
      <circle cx="8" cy="11.5" r="1.1" /><circle cx="10.6" cy="7.6" r="1.1" /><circle cx="15.2" cy="8.2" r="1.1" />
    </>
  ),
  edit: (
    <>
      <path d="M13 3.5H6.5a1.5 1.5 0 0 0-1.5 1.5v14a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-6" />
      <path d="M11.5 15.5 9 16l.5-2.5 8-8 2 2-8 8Z" />
      <path d="M8 8.5h3m-3 4h2" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.8" y="4" width="18.4" height="13" rx="1.6" />
      <path d="M2.8 8h18.4M9 20.5h6M12 17v3.5" />
      <path d="M5.6 6h.01M7.6 6h.01" />
    </>
  ),
  printer: (
    <>
      <path d="M7 8.5V3.8h10v4.7" />
      <rect x="3.2" y="8.5" width="17.6" height="7.5" rx="1.6" />
      <path d="M7 13.5h10v6.7H7v-6.7Z" />
      <path d="M17.5 11.5h.01" />
    </>
  ),
  mic: (
    <>
      <rect x="9.2" y="2.8" width="5.6" height="10.6" rx="2.8" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.2M9 21.2h6" />
    </>
  ),
};

const Icon = ({ name }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICONS[name]}
  </svg>
);

export default function Services() {
  return (
    <section className="svcs" id="services">
      <div className="wrap">
        <div className="center rv">
          <h2>One-Stop Solution For All Your<br />Ghostwriting Needs</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            We help you fulfill your dream of being a renowned author.
          </p>
        </div>

        {/* first card is highlighted by default; hovering the grid releases it */}
        <div className="svc-grid">
          {ALL_SERVICES.map((s, i) => (
            <article className={`svc rv${i === 0 ? ' on' : ''}`} key={s.t}>
              <span className="svc-ico"><Icon name={s.icon} /></span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
