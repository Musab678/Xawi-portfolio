import { useEffect, useMemo } from 'react';
import { Logo } from './Header.jsx';

/* footer collage — same randomised block generator as the original script */
function useCollage() {
  return useMemo(() => {
    const pal = ['#4A2A3D', '#3E2231', '#573248', '#452639', '#503046'];
    const out = [];
    for (let y = -40; y < 720; y += 160) {
      for (let x = -40; x < 1420; x += 150) {
        out.push({
          x: x + Math.random() * 10,
          y: y + Math.random() * 10,
          fill: pal[Math.floor(Math.random() * pal.length)],
        });
      }
    }
    return out;
  }, []);
}

export default function Footer() {
  const blocks = useCollage();

  /* parallax on the two decorative book clusters above the footer */
  useEffect(() => {
    const par = [...document.querySelectorAll('.deco-l,.deco-r')];
    const onScroll = () => {
      const y = scrollY;
      par.forEach((el, i) => { el.style.marginBottom = `${(y * 0.02) * (i ? -1 : 1)}px`; });
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <svg className="collage" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g id="collageBooks">
          {blocks.map((b, i) => (
            <rect key={i} x={b.x} y={b.y} width="130" height="145" rx="3" fill={b.fill} />
          ))}
        </g>
      </svg>
      <div className="wrap">
        <div className="f-top">
          <div className="rv">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Ghostwriting</a></li>
              <li><a href="#services">Publishing</a></li>
              <li><a href="#services">Script writing</a></li>
              <li><a href="#works">Book Cover</a></li>
              <li><a href="#services">Editing</a></li>
              <li><a href="#services">Marketing</a></li>
              <li><a href="#genres">Genre</a></li>
            </ul>
          </div>
          <div className="rv">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Pricing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="rv">
            <h5>Connect With Us</h5>
            <ul className="f-contact">
              <li>
                <span className="ico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A2130" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />
                  </svg>
                </span>
                <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
              </li>
              <li className="tel" style={{ marginTop: 22 }}>
                <span className="ico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A2130" strokeWidth="2">
                    <path d="M21 15v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 18.7 18.7 0 0 1-5.8-5.8 19 19 0 0 1-3-8.4A2 2 0 0 1 3.7 1h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.7a2 2 0 0 1-.4 2L7.6 9a16 16 0 0 0 6 6l1.6-1.3a2 2 0 0 1 2-.4c.8.3 1.7.5 2.7.6A2 2 0 0 1 21 15Z" />
                  </svg>
                </span>
                <a href="tel:+10000000000">+1-000-000-0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="f-rule" />

        <div className="f-bot">
          <div className="rv">
            <h5>Follow Us</h5>
            <div className="social">
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F0E4DC"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F0E4DC"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1s.9 1 1.1 1.7c.3.6.5 1.3.5 2.4C22 9 22 9.3 22 12s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.6 4.6 0 0 1-1.1 1.7 4.6 4.6 0 0 1-1.7 1.1c-.6.3-1.3.5-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.3-.6-.5-1.3-.5-2.4C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4.2-.7.6-1.2 1.1-1.7s1-.9 1.7-1.1c.6-.3 1.3-.5 2.4-.5C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6ZM17.5 5.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F0E4DC"><path d="M6.9 8.5v11.6H3.2V8.5h3.7ZM5.1 2.9a2.1 2.1 0 1 1 0 4.3 2.1 2.1 0 0 1 0-4.3ZM20.8 20.1h-3.7v-6.1c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v6.3H9.6V8.5h3.7v1.6a3.7 3.7 0 0 1 3.3-1.9c2.4 0 4.2 1.6 4.2 5v6.9Z" /></svg>
              </a>
            </div>
            <div className="legal"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Condition</a></div>
            <p className="copy">© 2026 Pinnacle Ghostwriting All Right Reserved.</p>
          </div>

          <div className="f-brand rv">
            <a href="#" className="logo">
              <Logo dark />
              <b>Pinnacle<span>Ghostwriting</span></b>
            </a>
            <p>
              We're a team of ghostwriters, marketers, publishers and the supporting professionals who hold
              the whole operation together. Broad expertise, difficult briefs welcome, and work that holds
              up on the shelf.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
