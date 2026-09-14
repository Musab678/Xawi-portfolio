import { BOOKS, SERVICES } from '../data/content.js';
import Book3d from './Book3d.jsx';

/* showcase layout, 4 books over 3 columns: col1 = 1 centred, col2 = 2 stacked, col3 = 1 centred */
const SLOT = ['mid', 'r1', 'r2', 'mid'];
const COL = [1, 2, 2, 3];

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 13l6 6L21 5" stroke="#5A2E4A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Showcase() {
  return (
    <section className="showcase" id="works">
      <div className="sc-top on-dark">
        <svg className="swoosh" viewBox="0 0 1400 800" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#8A5F78" strokeWidth="1.2">
            <path d="M-100 700C200 480 500 640 800 380s500-260 800-420" />
            <path d="M-100 760C200 540 500 700 800 440s500-260 800-420" />
            <path d="M1500 820C1200 700 1000 760 700 620S200 480-100 520" />
            <path d="M1500 880C1200 760 1000 820 700 680S200 540-100 580" />
          </g>
        </svg>
        <div className="wrap center rv">
          <svg className="arrow" viewBox="0 0 240 80" fill="none" aria-hidden="true">
            <path d="M8 62C22 30 52 16 66 34s-14 34-24 20 6-38 40-40 60 14 78 6" stroke="#C9A87E" strokeWidth="6" strokeLinecap="round" />
            <path d="M148 8l24 12-20 18" stroke="#C9A87E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M232 26a30 30 0 1 1-42-6" stroke="#E0B7C2" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <h2><span className="t-gold">Weaving</span> the literary <span className="t-mint">masterpieces</span><br />for authors over the years</h2>
          <p className="lede" style={{ marginTop: 16, color: '#E3D4CD' }}>
            A look through the titles we've helped bring to print: the tales, the arguments and the
            narratives our authors trusted us to shape.
          </p>
        </div>
      </div>

      {/* books straddle the teal / mint colour break */}
      <div className="sc-books">
        <div className="wrap">
          <div className="sc-grid" id="scGrid">
            {BOOKS.map((b, i) => (
              <div className={`bk rv-s ${SLOT[i]}`} style={{ '--col': COL[i] }} key={b.title}>
                <Book3d book={b} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sc-bottom" id="legacy">
        <svg className="deco deco-l" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="180" cy="230" r="170" fill="#5A2E4A" />
          <g transform="rotate(-14 200 220)">
            <rect x="60" y="200" width="150" height="200" rx="4" fill="#F3E9DF" />
            <rect x="72" y="222" width="120" height="7" rx="3" fill="#C9A87E" />
            <rect x="72" y="242" width="90" height="7" rx="3" fill="#A5677C" />
          </g>
          <g transform="rotate(12 240 180)">
            <rect x="170" y="120" width="150" height="205" rx="4" fill="#E3D2C0" />
            <rect x="184" y="146" width="118" height="9" rx="4" fill="#452639" />
            <rect x="184" y="270" width="90" height="7" rx="3" fill="#452639" />
          </g>
        </svg>
        <svg className="deco deco-r" viewBox="0 0 400 400" aria-hidden="true">
          <g transform="rotate(-8 160 240)">
            <rect x="40" y="150" width="160" height="250" rx="4" fill="#E3D2C0" />
            <circle cx="120" cy="240" r="40" fill="#C9A87E" />
            <rect x="60" y="330" width="120" height="8" rx="4" fill="#452639" />
          </g>
          <g transform="rotate(9 260 230)">
            <rect x="180" y="120" width="170" height="270" rx="4" fill="#5A2E4A" />
            <rect x="196" y="150" width="138" height="9" rx="4" fill="#F3E9DF" />
            <circle cx="265" cy="250" r="46" fill="#A5677C" />
            <rect x="212" y="340" width="106" height="8" rx="4" fill="#F3E9DF" />
          </g>
        </svg>

        <div className="wrap">
          <div className="legacy-inner rv">
            <p className="kicker">Build Your Legacy</p>
            <h2>Write Your Narratives That<br />Inspire The World</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              One team carries the whole job: writing, editing, publishing and marketing, so the book
              lands in front of the readers you wrote it for, on the platforms that matter.
            </p>
            <ul className="checks" id="checks">
              {SERVICES.map((s, i) => (
                <li key={s} style={{ transitionDelay: `${i * 60}ms` }}>
                  <Check /><span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
