import { useEffect, useRef, useState } from 'react';
import { SERVICE_MENU } from '../data/content.js';

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services', menu: SERVICE_MENU },
  { href: '#publishing', label: 'Publishing' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#works', label: 'Portfolio' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About us' },
  { href: '#contact', label: 'Contact us' },
];

export function Logo({ dark = false }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 6c-5 4-7 9-7 14s3 9 7 12c4-3 7-7 7-12s-2-10-7-14Z" fill="#C9A87E" />
      <path d="M32 14c-6-3-11-2-14 0 1 6 5 12 11 15 2-4 3-9 3-15Z" fill="#8E5F7C" />
      <path d="M32 14c6-3 11-2 14 0-1 6-5 12-11 15-2-4-3-9-3-15Z" fill="#5A2E4A" />
      <path d="M6 40c8-3 18-2 26 4 8-6 18-7 26-4v10c-8-3-18-2-26 4-8-6-18-7-26-4V40Z" fill={dark ? '#F3E8E0' : '#3A2130'} />
      {!dark && <path d="M32 44v10" stroke="#C9A87E" strokeWidth="2" />}
    </svg>
  );
}

const Caret = () => (
  <svg className="caret" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
    <path d="M1 1.5 5 5.5l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header({ onOpen }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('top');
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 40);
      /* the page order of sections differs from the menu order (About sits right
         under the hero), so pick the section whose top passed the header most
         recently rather than the last matching link in LINKS */
      let cur = 'top';
      let best = -Infinity;
      for (const l of LINKS) {
        const el = document.getElementById(l.href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 140 && top > best) { best = top; cur = l.href.slice(1); }
      }
      setActive(cur);
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  /* the dropdown closes on Escape and on any click outside the nav */
  useEffect(() => {
    if (!subOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setSubOpen(false); };
    const onDown = (e) => { if (!navRef.current?.contains(e.target)) setSubOpen(false); };
    addEventListener('keydown', onKey);
    addEventListener('pointerdown', onDown);
    return () => { removeEventListener('keydown', onKey); removeEventListener('pointerdown', onDown); };
  }, [subOpen]);

  const close = () => { setOpen(false); setSubOpen(false); };

  return (
    <header className={`header${stuck ? ' stuck' : ''}`} id="hdr">
      <div className="wrap">
        <a href="#top" className="logo" aria-label="Home">
          <Logo />
          <b>Pinnacle<span>Ghostwriting</span></b>
        </a>

        <nav className={`nav${open ? ' open' : ''}`} id="nav" ref={navRef}>
          {LINKS.map((l) => (
            l.menu ? (
              <div className={`has-sub${subOpen ? ' open' : ''}`} key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href.slice(1) ? 'active' : undefined}
                  aria-expanded={subOpen}
                  onClick={(e) => { e.preventDefault(); setSubOpen((v) => !v); }}
                >
                  <i /><span>{l.label}<Caret /></span>
                </a>
                <ul className="sub">
                  {l.menu.map((s) => (
                    <li key={s.t}><a href={s.href} onClick={close}>{s.t}</a></li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href.slice(1) ? 'active' : undefined}
                onClick={close}
              >
                <i /><span>{l.label}</span>
              </a>
            )
          ))}
          <button className="btn btn-gold" onClick={() => { close(); onOpen(); }}>Get a Quote</button>
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
