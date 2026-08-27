import { RETAILERS } from '../data/content.js';

/* The ownership band, then the auto-scrolling "sell your book with" strip.
   The retailer names are set as type — drop real logo files into
   /public/images/retailers and swap them in if the client supplies them. */
export default function Retailers() {
  const loop = RETAILERS.concat(RETAILERS);

  return (
    <section className="retail" id="retail">
      <div className="own-band">
        <div className="wrap">
          <p className="band-line">
            <span className="spark" aria-hidden="true">✦</span>
            Compose and publish your book and own it completely, you are entitled to{' '}
            <em>100% rights and profits.</em>
            <span className="spark" aria-hidden="true">✦</span>
          </p>
        </div>
      </div>

      <div className="wrap">
        <p className="rt-head"><i aria-hidden="true" />Sell your book with<i aria-hidden="true" /></p>
        <div className="rt-marquee" tabIndex={0} aria-label="Retailers we distribute to, auto-scrolling">
          <ul className="rt-track">
            {loop.map((r, i) => (
              <li className="rt-logo" key={i} aria-hidden={i >= RETAILERS.length ? 'true' : undefined}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
