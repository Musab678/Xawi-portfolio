import { REVIEWS } from '../data/content.js';

const Star = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#C9A87E">
    <path d="m12 2 3 6.6 7.2 1-5.2 5 1.3 7.1L12 18.4 5.7 21.7 7 14.6 1.8 9.6l7.2-1L12 2Z" />
  </svg>
);

const Quo = () => (
  <svg className="quo" width="42" height="34" viewBox="0 0 42 34" fill="currentColor">
    <path d="M0 34V18C0 8 6 1 17 0v7c-5 1-8 4-8 9h8v18H0Zm25 0V18C25 8 31 1 42 0v7c-5 1-8 4-8 9h8v18H25Z" />
  </svg>
);

export default function Testimonials() {
  const loop = REVIEWS.concat(REVIEWS);

  return (
    <section className="tst" id="reviews">
      <div className="wrap">
        <div className="tst-inner">
          <h2 className="rv-l">We are<br />The One-Stop<br />Solution for All Your<br />Ghostwriting Needs</h2>
          <div className="marquee" tabIndex={0} aria-label="Client testimonials, auto-scrolling">
            <div className="track" id="track">
              {loop.map((r, i) => (
                <article className="tcard" key={i}>
                  <Quo />
                  <div className="stars">{Array.from({ length: 5 }, (_, k) => <Star key={k} />)}</div>
                  <p>{r.q}</p>
                  <cite>-{r.n}</cite>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
