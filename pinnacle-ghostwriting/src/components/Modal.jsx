import { useEffect, useState } from 'react';

export default function Modal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    sessionStorage.setItem('pgw', '1');
  };

  return (
    <div
      className={`overlay${open ? ' open' : ''}`}
      id="overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Limited time offer"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <button className="x" id="close" aria-label="Close" onClick={onClose}>&times;</button>
        <div className="modal-art">
          <svg viewBox="0 0 220 300" fill="none" aria-hidden="true">
            <rect x="30" y="36" width="160" height="212" rx="4" fill="#2C1724" stroke="#C9A87E" strokeWidth="2" />
            <rect x="46" y="52" width="128" height="180" rx="2" stroke="#E0B7C2" strokeOpacity=".5" />
            <path d="M110 92l13 27 30 4-22 21 5 30-26-14-26 14 5-30-22-21 30-4 13-27Z" fill="#C9A87E" />
            <rect x="70" y="184" width="80" height="6" rx="3" fill="#E0B7C2" />
            <rect x="86" y="202" width="48" height="5" rx="2.5" fill="#fff" fillOpacity=".4" />
          </svg>
        </div>
        <div className="modal-body">
          <p className="kicker" style={{ color: 'var(--plum)' }}>Limited Time Offer</p>
          <h3>Turn your author <span className="t-gold">dreams into reality</span></h3>
          <div className="off">70% Off Everything</div>
          {!sent && (
            <form id="form" onSubmit={submit}>
              <div className="field"><input type="text" placeholder="Your Name" required /></div>
              <div className="field"><input type="email" placeholder="Email Address" required /></div>
              <div className="field"><input type="tel" placeholder="Phone Number" /></div>
              <div className="field"><textarea placeholder="Tell us about your book" /></div>
              <button type="submit" className="btn btn-gold">Submit Now</button>
            </form>
          )}
          {sent && (
            <p id="done" style={{ color: 'var(--deep)', fontWeight: 600, marginTop: 16 }}>
              Thanks, we'll be in touch within one business day.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
