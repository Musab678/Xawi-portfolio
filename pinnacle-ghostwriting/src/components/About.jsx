import { BOOKS } from '../data/content.js';
import Book3d from './Book3d.jsx';

export default function About({ onOpen }) {
  /* same 8 books, same order — duplicated once for the seamless loop */
  const loop = BOOKS.concat(BOOKS);

  return (
    <section className="about" id="about">
      <div className="about-photo" aria-hidden="true" />
      <div className="about-veil" aria-hidden="true" />
      <svg className="topo" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="#E6D8C8" strokeWidth="1.4">
          <path d="M-50 120C180 40 340 210 520 150s300-120 480-40 260 40 300 10" />
          <path d="M-50 180C180 100 340 270 520 210s300-120 480-40 260 40 300 10" />
          <path d="M-50 250C180 170 340 340 520 280s300-120 480-40 260 40 300 10" />
          <path d="M-50 330C180 250 340 420 520 360s300-120 480-40 260 40 300 10" />
          <path d="M-50 420C180 340 340 510 520 450s300-120 480-40 260 40 300 10" />
          <ellipse cx="300" cy="300" rx="220" ry="150" /><ellipse cx="300" cy="300" rx="150" ry="100" />
          <ellipse cx="900" cy="260" rx="240" ry="160" /><ellipse cx="900" cy="260" rx="160" ry="105" />
        </g>
      </svg>

      <div className="wrap center rv">
        <p className="kicker">Elevate Your Narrative With Our Professionals</p>
        <h2>Step Into The World Of Literature With Our Creative Minds</h2>
        <p className="lede" style={{ marginTop: 18 }}>
          Give us the idea and we'll shape it into a finished book. Our team writes, edits, proofreads and
          publishes across the platforms readers actually buy from — Amazon, Barnes &amp; Noble, Kobo and more.
          Your story, your voice and your expertise stay yours the whole way through.
        </p>
        <div className="btns">
          <button className="btn btn-gold" onClick={onOpen}>Let's Discuss Your Book</button>
          <button className="btn btn-dark" onClick={onOpen}>Live Chat</button>
        </div>
      </div>

      <div className="cover-marquee" tabIndex={0} aria-label="Published titles, auto-scrolling">
        <div className="cover-track" id="coverTrack">
          {loop.map((b, i) => <Book3d key={i} book={b} eager={i < 6} />)}
        </div>
      </div>
    </section>
  );
}
