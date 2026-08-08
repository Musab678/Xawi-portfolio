import { GENRES } from '../data/content.js';

export default function Genres() {
  return (
    <section className="genres" id="genres">
      <div className="wrap">
        <div className="center rv">
          <p className="kicker">The Exploring Journey That Awaits</p>
          <h2>To Experience The Essence of Each Genre</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Our writers work confidently across every genre we take on. Look through the shelves below and
            pick the one that lines up with the book you have in mind.
          </p>
        </div>
        <div className="genre-grid" id="genreGrid">
          {GENRES.map((g, i) => (
            <article className={`genre rv${i === 0 ? ' on' : ''}`} key={g.t}>
              <h3>{g.t}</h3>
              <p>{g.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
