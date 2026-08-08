export default function CtaStrip({ onOpen }) {
  return (
    <section className="cta-strip" id="contact">
      <div className="wrap">
        <div className="cta-inner rv">
          <h2>Let Your Narrative Take A Flight With Our Professionals</h2>
          <div className="btns" style={{ margin: 0 }}>
            <button className="btn btn-gold" onClick={onOpen}>Let's Discuss Your Book</button>
            <button className="btn btn-dark" onClick={onOpen}>Live Chat</button>
          </div>
        </div>
        <span className="tag">Every Story Deserves To Be Told</span>
      </div>
    </section>
  );
}
