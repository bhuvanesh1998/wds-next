'use client';
import { useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  { num: '01', phase: 'Discover', title: 'Research & Clarity', desc: 'Stakeholder interviews, competitive landscape, user research and opportunity mapping. We diagnose before we prescribe.' },
  { num: '02', phase: 'Design',   title: 'Concept & Craft',    desc: 'Information architecture, wireframes, high-fidelity UI, motion prototypes. Iteration cycles that move at startup speed.' },
  { num: '03', phase: 'Build',    title: 'Engineer & Ship',    desc: 'Production-grade code with component libraries, CI/CD and accessibility baked in. Designs that survive contact with reality.' },
  { num: '04', phase: 'Scale',    title: 'Grow & Evolve',      desc: 'Analytics integration, A/B testing, design system evolution. We stay embedded until the metrics prove the work.' },
];

export default function Process() {
  useReveal();
  const fillRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = document.getElementById('process');
    if (!section) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (fillRef.current) fillRef.current.style.width = '100%';
        stepsRef.current.forEach((s, i) => { setTimeout(() => s?.classList.add('active'), i * 300); });
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #process { padding: 10rem 0; }
        .process-header { margin-bottom: 6rem; }
        .process-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; }
        .process-line { position: absolute; top: 36px; left: 0; right: 0; height: 1px; background: var(--border); z-index: 0; }
        .process-line-fill { height: 100%; background: linear-gradient(90deg,var(--blue),var(--purple)); width: 0%; transition: width 1.5s var(--ease-out); }
        .step { position: relative; z-index: 1; padding-top: 5rem; padding-right: 2rem; }
        .step-node { position: absolute; top: 0; left: 0; width: 72px; height: 72px; border-radius: 50%; background: var(--bg2); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--ff-mono); font-size: .75rem; letter-spacing: .1em; color: var(--text-dim); transition: border-color .4s, color .4s, background .4s, box-shadow .4s; }
        .step.active .step-node { border-color: var(--blue); color: var(--blue); background: rgba(14,165,233,.1); box-shadow: 0 0 30px var(--glow-b); }
        .step-number { font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .15em; color: var(--text-dim); text-transform: uppercase; margin-bottom: .5rem; }
        .step-title { font-family: var(--ff-display); font-size: 1.5rem; font-weight: 700; letter-spacing: -.02em; margin-bottom: .8rem; }
        .step-desc { font-size: .88rem; color: var(--text-muted); line-height: 1.7; }
      `}</style>
      <section id="process">
        <div className="section-inner">
          <div className="process-header reveal">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">From signal to shipped</h2>
          </div>
          <div className="process-steps">
            <div className="process-line"><div className="process-line-fill" ref={fillRef} /></div>
            {STEPS.map((s, i) => (
              <div key={s.num} className="step" ref={el => { if (el) stepsRef.current[i] = el; }}>
                <div className="step-node">{s.num}</div>
                <div className="step-number">{s.phase}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
