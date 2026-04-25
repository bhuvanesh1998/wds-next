'use client';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '#work',         label: 'Work',      section: 'work' },
  { href: '#services',     label: 'Services',  section: 'services' },
  { href: '#templates',    label: 'Templates', section: 'templates' },
  { href: '#process',      label: 'Process',   section: 'process' },
  { href: '#why',          label: 'About',     section: 'why' },
  { href: '#contact',      label: 'Contact',   section: 'contact' },
];

export default function TopNav() {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(s => obs.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector<HTMLElement>(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        #top-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2.5rem;
          transition: background .3s, border-color .3s, backdrop-filter .3s;
        }
        #top-nav.scrolled {
          background: rgba(8,6,4,.82);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .tnav-logo {
          display: flex; align-items: center; gap: .65rem;
          text-decoration: none; flex-shrink: 0;
        }
        .tnav-logo { gap: .55rem; }
        .tnav-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .tnav-logo-name {
          font-family: var(--ff-display); font-weight: 800; font-size: 1rem;
          letter-spacing: -.02em;
          background: linear-gradient(90deg, #F97316, #FB923C);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .tnav-logo-sub {
          font-family: var(--ff-mono); font-size: .48rem;
          letter-spacing: .16em; text-transform: uppercase; color: var(--text-dim);
          margin-top: 2px;
        }
        .tnav-links {
          display: flex; align-items: center; gap: .25rem;
          list-style: none;
        }
        .tnav-links a {
          display: block; padding: .45rem .85rem;
          font-family: var(--ff-mono); font-size: .72rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--text-dim); border-radius: 8px;
          transition: color .2s, background .2s;
          position: relative;
        }
        .tnav-links a:hover { color: var(--text); background: var(--glass); }
        .tnav-links a.active { color: var(--blue); }
        .tnav-links a.active::after {
          content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 16px; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, var(--blue), var(--purple));
        }
        .tnav-cta {
          padding: .5rem 1.25rem;
          background: linear-gradient(135deg, var(--blue), var(--purple));
          border-radius: 8px; font-family: var(--ff-mono); font-size: .72rem;
          font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
          color: #fff; transition: opacity .2s, transform .2s var(--ease-out);
          white-space: nowrap;
        }
        .tnav-cta:hover { opacity: .88; transform: translateY(-1px); }

        /* Hamburger */
        .tnav-burger {
          display: none; flex-direction: column; gap: 5px;
          width: 36px; height: 36px; align-items: center; justify-content: center;
          border-radius: 8px; border: 1px solid var(--border);
          background: var(--glass); cursor: none;
        }
        .tnav-burger span {
          display: block; width: 18px; height: 1.5px;
          background: var(--text-muted); border-radius: 2px;
          transition: transform .25s var(--ease-out), opacity .2s;
        }
        .tnav-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .tnav-burger.open span:nth-child(2) { opacity: 0; }
        .tnav-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile drawer */
        .tnav-drawer {
          display: none; position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(8,6,4,.97); backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 2rem 2rem; flex-direction: column; gap: .25rem;
          z-index: 99;
        }
        .tnav-drawer.open { display: flex; }
        .tnav-drawer a {
          display: block; padding: .9rem 1rem;
          font-family: var(--ff-mono); font-size: .85rem;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--text-muted); border-radius: 10px;
          border: 1px solid transparent;
          transition: color .2s, background .2s, border-color .2s;
        }
        .tnav-drawer a:hover { color: var(--text); background: var(--glass); }
        .tnav-drawer a.active { color: var(--blue); background: var(--glass-b); border-color: var(--border-b); }
        .tnav-drawer-cta {
          margin-top: 1rem; padding: 1rem;
          background: linear-gradient(135deg, var(--blue), var(--purple));
          border-radius: 10px; text-align: center;
          font-family: var(--ff-mono); font-size: .8rem;
          font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
          color: #fff;
        }

        @media (max-width: 768px) {
          #top-nav { padding: 0 1.25rem; }
          .tnav-links, .tnav-cta { display: none; }
          .tnav-burger { display: flex; }
        }
      `}</style>

      <nav id="top-nav" ref={navRef} className={scrolled ? 'scrolled' : ''}>
        <a className="tnav-logo" href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
          {/* Lightning-bolt mark SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#F97316"/>
            <polygon points="19,4 11,17 16,17 13,28 21,15 16,15" fill="#fff"/>
          </svg>
          <div className="tnav-logo-text">
            <span className="tnav-logo-name">Widescreen</span>
            <span className="tnav-logo-sub">Digital Solutions</span>
          </div>
        </a>

        <ul className="tnav-links">
          {NAV_LINKS.map(({ href, label, section }) => (
            <li key={section}>
              <a
                href={href}
                className={active === section ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(href); }}
              >{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="tnav-cta" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>
          Start a Project
        </a>

        <button
          className={`tnav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`tnav-drawer${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label, section }) => (
          <a
            key={section}
            href={href}
            className={active === section ? 'active' : ''}
            onClick={e => { e.preventDefault(); scrollTo(href); }}
          >{label}</a>
        ))}
        <a href="#contact" className="tnav-drawer-cta" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>
          Start a Project →
        </a>
      </div>
    </>
  );
}
