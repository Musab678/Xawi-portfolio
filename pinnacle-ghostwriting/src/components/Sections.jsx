/* Publishing, Marketing and Pricing exist because the header links to them.
   The copy here is a working placeholder — swap it for the real thing. */

const PUB_STEPS = [
  { n: '01', t: 'Manuscript prep', d: 'Structural edit, proofread and a print-ready interior in every format a store asks for.' },
  { n: '02', t: 'Imprint & ISBN', d: 'Your own imprint, your ISBN, your copyright, registered in your name and not ours.' },
  { n: '03', t: 'Distribution', d: 'Amazon KDP, Barnes & Noble, Kobo, Apple Books and Ingram for the bricks-and-mortar trade.' },
  { n: '04', t: 'Launch', d: 'Pre-orders, review copies and a release week planned around your category, not a generic calendar.' },
];

const CHANNELS = [
  'Amazon ads & category placement',
  'Social media campaigns',
  'Book trailers & video',
  'Press releases and review outreach',
  'Author website and mailing list',
  'Podcast and interview booking',
];

const PLANS = [
  {
    t: 'Starter',
    d: 'A short book or novella, written and published.',
    inc: ['Up to 30,000 words', 'Developmental edit + proofread', 'Cover design', 'Amazon KDP publishing'],
  },
  {
    t: 'Complete',
    d: 'The full build: written, published and marketed.',
    inc: ['Up to 80,000 words', 'Full edit & proofread', 'Cover + interior design', 'Publishing on every major store', 'Launch marketing campaign'],
    best: true,
  },
  {
    t: 'Author Brand',
    d: 'A series, a backlist, or an author platform built to last.',
    inc: ['Unlimited word count', 'Everything in Complete', 'Audiobook production', 'Author website', 'Ongoing ad management'],
  },
];

export function Publishing() {
  return (
    <section className="pub" id="publishing">
      <div className="wrap">
        <div className="center rv">
          <p className="kicker">Book Publishing Services</p>
          <h2>Published Properly, And Still Entirely Yours</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            We take the finished manuscript through every gate between your draft and a live storefront,
            and you keep 100% of the rights and the royalties at the end of it.
          </p>
        </div>
        <ol className="steps">
          {PUB_STEPS.map((s) => (
            <li className="step rv" key={s.n}>
              <b>{s.n}</b>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Marketing({ onOpen }) {
  return (
    <section className="mkt on-dark" id="marketing">
      <div className="wrap mkt-inner">
        <div className="rv-l">
          <p className="kicker">Book Marketing Services</p>
          <h2>A Finished Book Is Only Half The Job</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Most books fail on discovery, not on writing. We run the campaigns that put yours in front of
            the readers who were already looking for it.
          </p>
          <div className="btns">
            <button className="btn btn-gold" onClick={onOpen}>Start Your Project</button>
          </div>
        </div>
        <ul className="channels rv">
          {CHANNELS.map((c) => (
            <li key={c}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 13l5 5L20 6" stroke="#C9A87E" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pricing({ onOpen }) {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="center rv">
          <p className="kicker">Pricing</p>
          <h2>Packages Built Around The Book</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Every manuscript is a different length and a different amount of work, so the final figure comes
            from a short conversation rather than a price list.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((p) => (
            <article className={`plan rv${p.best ? ' best' : ''}`} key={p.t}>
              {p.best && <span className="plan-flag">Most chosen</span>}
              <h3>{p.t}</h3>
              <p className="plan-d">{p.d}</p>
              <ul>
                {p.inc.map((i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 13l5 5L20 6" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${p.best ? 'btn-gold' : 'btn-dark'}`} onClick={onOpen}>Request a quote</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
