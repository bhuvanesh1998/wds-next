'use client';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  { num: '01', icon: '◈', name: 'UX Strategy', desc: 'Deep research, journey mapping and systems thinking to architect experiences that reduce friction and maximize intent. We map the invisible pathways users take before they become loyal customers.' },
  { num: '02', icon: '⬡', name: 'UI Design Systems', desc: 'Scalable, token-based design systems that let your team ship faster without sacrificing coherence. From atoms to organisms, documented and production-ready.' },
  { num: '03', icon: '◉', name: 'AI Product Design', desc: 'Interfaces built around AI behavior — prompt flows, confidence indicators, error states, and feedback loops. We make AI feel human and trustworthy at every touchpoint.' },
  { num: '04', icon: '◫', name: 'Web & App Development', desc: 'Next.js, React, performance-obsessed engineering. We build what we design — no handoff loss, no fidelity compromise. From prototype to production in weeks.' },
  { num: '05', icon: '◌', name: 'Motion & Interaction', desc: 'Animation as communication, not decoration. We design motion systems that guide attention, signal state, and create the sense of a living, responsive product.' },
];

export default function Services() {
  useReveal();
  return (
    <>
      <style>{`
        #services { padding: 10rem 0; background: linear-gradient(to bottom,var(--bg),var(--bg2),var(--bg)); }
        .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; margin-top: 5rem; }
        .service-card { background: var(--bg2); padding: 2.5rem; position: relative; overflow: hidden; transition: background .3s; cursor: none; }
        .service-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg,var(--blue),var(--purple)); transform: scaleX(0); transform-origin: left; transition: transform .4s var(--ease-out); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover { background: var(--bg3); }
        .service-number { font-family: var(--ff-mono); font-size: .7rem; color: var(--text-dim); letter-spacing: .1em; margin-bottom: 1.5rem; }
        .service-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--glass-b); border: 1px solid var(--border-b); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.4rem; transition: transform .3s var(--ease-out); }
        .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }
        .service-name { font-family: var(--ff-display); font-size: 1.2rem; font-weight: 700; letter-spacing: -.02em; margin-bottom: .8rem; }
        .service-desc { font-size: .88rem; color: var(--text-muted); line-height: 1.7; max-height: 0; overflow: hidden; transition: max-height .5s var(--ease-out), opacity .4s; opacity: 0; }
        .service-card:hover .service-desc { max-height: 200px; opacity: 1; }
        .service-arrow { margin-top: 1.5rem; font-size: .75rem; color: var(--blue); font-family: var(--ff-mono); letter-spacing: .1em; text-transform: uppercase; display: flex; align-items: center; gap: .4rem; opacity: 0; transform: translateX(-8px); transition: opacity .3s, transform .3s var(--ease-out); }
        .service-card:hover .service-arrow { opacity: 1; transform: none; }
        .service-card-cta { background: linear-gradient(135deg,rgba(249,115,22,.06),rgba(251,146,60,.06)); }
        .service-card-cta .service-number { color: var(--purple); }
        .service-card-cta .service-name { font-size: 1.5rem; margin-top: 1.5rem; }
        .service-card-cta .service-desc { opacity: 1; max-height: none; }
        .service-card-cta .service-arrow { opacity: 1; transform: none; color: var(--purple); }
      `}</style>
      <section id="services">
        <div className="section-inner">
          <div className="services-header reveal" style={{ maxWidth: 560, marginBottom: 0 }}>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Where intelligence<br />meets craft</h2>
            <p className="section-sub">Five disciplines, one cohesive vision. We build the layer where human intent and machine capability converge.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={s.num} className={`service-card reveal${i === 1 ? ' reveal-delay-1' : i === 2 ? ' reveal-delay-2' : ''}`}>
                <div className="service-number">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-arrow">Explore ↗</div>
              </div>
            ))}
            <div className="service-card service-card-cta reveal reveal-delay-2">
              <div className="service-number">→</div>
              <div className="service-name">Ready to build something extraordinary?</div>
              <div className="service-desc">Let&apos;s talk scope, timeline and ambition. No templates. All custom.</div>
              <div className="service-arrow">Book a call ↗</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
