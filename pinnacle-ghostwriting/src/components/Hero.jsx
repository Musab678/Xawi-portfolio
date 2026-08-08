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
          <h1 className="up">Leave A Lasting<br /><span className="t-cyan">Impression</span> With<br />Our Ghostwriters</h1>
          <p className="up">The book in your head could be someone else's turning point. Talk to us today and we'll write it in your voice, start to finish.</p>
          <div className="btns up">
            <button className="btn btn-gold" onClick={onOpen}>Let's Discuss Your Book</button>
            <button className="btn btn-ghost" onClick={onOpen}>Live Chat</button>
          </div>
        </div>
      </div>
    </section>
  );
}
