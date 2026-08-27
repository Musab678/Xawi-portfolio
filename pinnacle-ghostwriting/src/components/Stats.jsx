import { useEffect, useRef } from 'react';

const STATS = [
  { count: 800, suffix: '+', label: <>Books Written</> },
  { count: 200, suffix: '+', label: <>Writers &amp;<br />Editors</> },
  { count: 98, suffix: '%', label: <>Customer<br />Satisfaction</> },
  { count: 90, suffix: '%', label: <>of customers<br />return</> },
];

function Counter({ end, suffix }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / 1500, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.5 });
    o.observe(el);
    return () => o.disconnect();
  }, [end, suffix]);

  return <b ref={ref}>0</b>;
}

export default function Stats() {
  return (
    <>
      <section className="stats">
        <div className="stats-photo" aria-hidden="true">
          <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="800" fill="#452639" />
            <circle cx="230" cy="250" r="105" fill="#6E4459" />
            <path d="M60 800c0-190 80-290 170-290s170 100 170 290H60Z" fill="#57324A" />
            <g stroke="#331B2A" strokeWidth="7" fill="none">
              <circle cx="200" cy="252" r="34" /><circle cx="284" cy="252" r="34" /><path d="M234 252h16" />
            </g>
            <rect x="300" y="470" width="120" height="170" rx="6" fill="#8A5B72" />
          </svg>
        </div>
        <div className="wrap">
          <div className="stats-head rv">
            <h2>Express Your Idea &amp; Tell Your<br /><span className="t-gold" style={{ fontStyle: 'italic' }}>Story</span> Through Our Ghostwriters</h2>
            <div className="dots" id="dots" aria-hidden="true">
              {Array.from({ length: 32 }, (_, i) => (
                <i key={i} style={{ animationDelay: `${(i % 8) * 0.16}s` }} />
              ))}
            </div>
          </div>
          <div className="stat-grid rv">
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <Counter end={s.count} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="stats-pad" />
    </>
  );
}
