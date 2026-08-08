import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Genres from './components/Genres.jsx';
import Showcase from './components/Showcase.jsx';
import CtaStrip from './components/CtaStrip.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  /* ===================== SCROLL PROGRESS ===================== */
  useEffect(() => {
    const bar = document.getElementById('progress');
    const onScroll = () => {
      const h = document.documentElement;
      bar.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`;
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  /* ===================== REVEAL ===================== */
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });

    document.querySelectorAll('.rv,.rv-l,.rv-s,.arrow,.checks,.tag,.f-rule')
      .forEach((el, i) => {
        if (el.classList.contains('rv-s')) el.style.transitionDelay = `${(i % 5) * 90}ms`;
        io.observe(el);
      });

    return () => io.disconnect();
  }, []);

  /* auto-open the offer once per session */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!sessionStorage.getItem('pgw')) setModalOpen(true);
    }, 12000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="progress" id="progress" />

      <Header onOpen={openModal} />
      <Hero onOpen={openModal} />
      <About onOpen={openModal} />
      <Stats />
      <Genres />
      <Showcase />
      <CtaStrip onOpen={openModal} />
      <Testimonials />
      <Footer />

      <Modal open={modalOpen} onClose={closeModal} />
    </>
  );
}
