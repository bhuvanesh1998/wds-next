'use client';
import { useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#hero',         icon: 'home',            label: 'Home',     section: 'hero' },
  { href: '#work',         icon: 'cases',           label: 'Work',     section: 'work' },
  { href: '#services',     icon: 'design_services', label: 'Services', section: 'services' },
  { href: '#process',      icon: 'timeline',        label: 'Process',  section: 'process' },
  { href: '#why',          icon: 'hub',             label: 'About',    section: 'why' },
  { href: '#testimonials', icon: 'format_quote',    label: 'Clients',  section: 'testimonials' },
  { href: '#contact',      icon: 'mail',            label: 'Contact',  section: 'contact' },
];

export default function SidebarNav() {
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const links = navRef.current?.querySelectorAll<HTMLAnchorElement>('.nav-link') ?? [];
    const indicator = indicatorRef.current;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    function setActive(id: string) {
      links.forEach(l => {
        const isActive = l.dataset.section === id;
        l.classList.toggle('active', isActive);
        if (isActive && indicator && navRef.current) {
          const rect = l.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();
          indicator.style.top = (rect.top - navRect.top + rect.height / 2 - 18) + 'px';
        }
      });
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(s => obs.observe(s));

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector<HTMLElement>(link.getAttribute('href')!);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        nav#sidebar-nav {
          position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;
          width: 72px;
          display: flex; flex-direction: column; align-items: center;
          padding: 2rem 0;
          background: rgba(5,5,8,.7);
          backdrop-filter: blur(20px);
          border-right: 1px solid var(--border);
          transition: width .35s var(--ease-out);
          overflow: hidden;
        }
        nav#sidebar-nav:hover { width: 220px; }
        .nav-logo { display: flex; align-items: center; gap: .75rem; padding: 0 .85rem; align-self: stretch; margin-bottom: 2.5rem; overflow: hidden; min-width: 0; flex-shrink: 0; }
        .logo-mark { width: 38px; height: 38px; flex-shrink: 0; border-radius: 10px; background: linear-gradient(135deg, var(--blue), var(--purple)); display: flex; align-items: center; justify-content: center; font-family: var(--ff-display); font-weight: 800; font-size: 1rem; color: #fff; letter-spacing: -.02em; box-shadow: 0 0 16px var(--glow-b); }
        .logo-text { display: flex; flex-direction: column; overflow: hidden; opacity: 0; width: 0; transition: opacity .2s .05s, width .3s var(--ease-out); white-space: nowrap; }
        nav#sidebar-nav:hover .logo-text { opacity: 1; width: 120px; }
        .logo-wds { font-family: var(--ff-display); font-weight: 800; font-size: 1rem; letter-spacing: -.02em; background: linear-gradient(90deg, var(--blue), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.2; }
        .logo-full { font-size: .62rem; letter-spacing: .12em; text-transform: uppercase; color: var(--text-dim); font-family: var(--ff-mono); line-height: 1; }
        .nav-links { display: flex; flex-direction: column; gap: .3rem; flex: 1; align-items: flex-start; width: 100%; padding: 0 .8rem; }
        .nav-links a { display: flex; align-items: center; gap: 1rem; width: 100%; padding: .75rem .8rem; border-radius: 10px; font-size: .78rem; font-weight: 400; color: var(--text-dim); letter-spacing: .08em; text-transform: uppercase; transition: color .2s, background .2s; white-space: nowrap; }
        .nav-links a:hover { color: var(--text); background: var(--glass); }
        .nav-links a.active { color: var(--blue); background: var(--glass-b); }
        .nav-icon { width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; background: var(--bg2); font-family: 'Material Symbols Rounded'; font-size: 1.1rem; font-weight: 300; font-style: normal; line-height: 1; letter-spacing: normal; text-transform: none; color: var(--text-dim); -webkit-font-smoothing: antialiased; font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; transition: border-color .2s, background .2s, color .2s, font-variation-settings .2s; }
        .nav-links a:hover .nav-icon { border-color: var(--border-b); background: var(--glass-b); color: var(--blue); font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .nav-links a.active .nav-icon { border-color: var(--blue); color: var(--blue); font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .nav-link-label { opacity: 0; transition: opacity .2s .05s; font-family: var(--ff-mono); }
        nav#sidebar-nav:hover .nav-link-label { opacity: 1; }
        .nav-cta { margin-top: auto; width: calc(100% - 1.6rem); padding: .75rem .8rem; border: 1px solid var(--border-b); border-radius: 10px; font-size: .72rem; font-weight: 500; color: var(--blue) !important; letter-spacing: .08em; text-transform: uppercase; transition: background .2s, color .2s !important; display: flex; align-items: center; gap: 1rem; white-space: nowrap; font-family: var(--ff-mono); }
        .nav-cta:hover { background: var(--blue) !important; color: #000 !important; }
        .nav-cta:hover .nav-icon { background: rgba(0,0,0,.2); border-color: rgba(0,0,0,.2); color: #000; }
        .nav-cta .nav-link-label { color: var(--blue); }
        .nav-cta:hover .nav-link-label { color: #000; }
        .nav-cta .nav-icon { color: var(--blue); border-color: var(--border-b); background: var(--glass-b); font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
        .nav-indicator { position: absolute; left: 0; width: 3px; height: 36px; background: linear-gradient(to bottom, var(--blue), var(--purple)); border-radius: 0 2px 2px 0; transition: top .3s var(--ease-out); box-shadow: 2px 0 12px var(--glow-b); }
        @media (max-width: 768px) {
          nav#sidebar-nav { width: 100% !important; height: 56px; top: auto; bottom: 0; flex-direction: row; padding: 0 1rem; border-right: none; border-top: 1px solid var(--border); }
          .nav-logo { display: none; }
          .nav-links { flex-direction: row; flex: 1; padding: 0; justify-content: space-around; gap: 0; }
          .nav-links a { flex-direction: column; gap: .2rem; padding: .5rem .6rem; font-size: .6rem; }
          .nav-icon { width: 32px; height: 32px; font-size: 1.1rem; border: none; background: transparent; }
          .nav-link-label { opacity: 1 !important; font-size: .55rem; }
          .nav-cta { display: none; }
          .nav-indicator { display: none; }
        }
      `}</style>
      <nav id="sidebar-nav" ref={navRef}>
        <div className="nav-logo">
          <span className="logo-mark">W</span>
          <div className="logo-text">
            <span className="logo-wds">WDS</span>
            <span className="logo-full">Widescreen</span>
          </div>
        </div>
        <div className="nav-indicator" ref={indicatorRef} />
        <div className="nav-links">
          {NAV_LINKS.map(({ href, icon, label, section }) => (
            <a key={section} href={href} className={`nav-link${section === 'hero' ? ' active' : ''}`} data-section={section}>
              <span className="nav-icon">{icon}</span>
              <span className="nav-link-label">{label}</span>
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          <span className="nav-icon">rocket_launch</span>
          <span className="nav-link-label">Start a Project</span>
        </a>
      </nav>
    </>
  );
}
