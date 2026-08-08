import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#genres', label: 'Genres' },
  { href: '#works', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export function Logo({ dark = false }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 6c-5 4-7 9-7 14s3 9 7 12c4-3 7-7 7-12s-2-10-7-14Z" fill="#D9A93A" />
      <path d="M32 14c-6-3-11-2-14 0 1 6 5 12 11 15 2-4 3-9 3-15Z" fill="#2FA89A" />
      <path d="M32 14c6-3 11-2 14 0-1 6-5 12-11 15-2-4-3-9-3-15Z" fill="#1B6C63" />
      <path d="M6 40c8-3 18-2 26 4 8-6 18-7 26-4v10c-8-3-18-2-26 4-8-6-18-7-26-4V40Z" fill={dark ? '#EDF5F2' : '#123A32'} />
      {!dark && <path d="M32 44v10" stroke="#D9A93A" strokeWidth="2" />}
    </svg>
  );
}

export default function Header({ onOpen }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('top');
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 40);
      let cur = 'top';
      for (const l of LINKS) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 140) cur = l.href.slice(1);
      }
      setActive(cur);
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${stuck ? ' stuck' : ''}`} id="hdr">
      <div className="wrap">
        <a href="#" className="logo" aria-label="Home">
          <Logo />
          <b>Pinnacle<span>Ghostwriting</span></b>
        </a>

        <nav className={`nav${open ? ' open' : ''}`} id="nav" ref={navRef}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              <i /><span>{l.label}</span>
            </a>
          ))}
          <button className="btn btn-gold" onClick={onOpen}>Let's Discuss Your Book</button>
        </nav>

        <button
          className={`burger${open ? ' on' : ''}`}
          id="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
