export default function Hero({ onOpen }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          className="shelf-img"
          src="/images/books-bg.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
      </div>

      <div className="hero-photo">
        <img src="/images/writer.jpg" alt="A writer at work on a typewriter" fetchPriority="high" />
      </div>
      <div className="hero-gold" />

      <div className="wrap">
        <div className="hero-copy">
          <h1 className="up">Turn Your Ideas Into<br />Books That <span className="t-cyan">Actually Sell</span></h1>
          <p className="up">We handle writing, publishing, and marketing so you don&rsquo;t have to.</p>
          <div className="btns up">
            <button className="btn btn-gold" onClick={onOpen}>Start Your Project</button>
            <button className="btn btn-ghost" onClick={onOpen}>Book a Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
