'use client';
import { useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';

const PROJECTS = [
  { num: '01 / 06', tag: 'AI Product Design', name: 'NeuralFlow Dashboard', desc: 'A full product redesign for an enterprise AI analytics platform. We rebuilt the information architecture and introduced real-time data visualizations that helped non-technical users understand model outputs.', metrics: [{ val: 340, suffix: '%', label: 'Retention uplift' }, { val: 4.2, suffix: 'x', label: 'Conversion' }, { val: 8, suffix: ' wks', label: 'To launch' }], canvasStyle: 'grid', hue: 200 },
  { num: '02 / 06', tag: 'UX Strategy + UI', name: 'Orbit Finance App', desc: 'End-to-end redesign of a consumer finance app serving 2M+ users. We simplified complex investment flows into intuitive one-tap experiences without losing the depth power users needed.', metrics: [{ val: 220, suffix: '%', label: 'Onboarding rate' }, { val: 98, suffix: '%', label: 'CSAT score' }], canvasStyle: 'flow', hue: 270 },
  { num: '03 / 06', tag: 'Design System', name: 'Pulse Design System', desc: 'A token-based, multi-brand design system with 180+ components, comprehensive documentation, and Figma + code sync. Adopted by 5 product teams in the first quarter.', metrics: [{ val: 60, suffix: '%', label: 'Dev time saved' }, { val: 180, suffix: '+', label: 'Components' }], canvasStyle: 'scatter', hue: 320 },
  { num: '04 / 06', tag: 'Web Development', name: 'Vertex SaaS Platform', desc: 'A ground-up rebuild of a B2B SaaS dashboard — Next.js App Router, edge-optimised APIs, and a component library that cut feature sprint time from 3 weeks to 4 days.', metrics: [{ val: 5.1, suffix: 'x', label: 'Speed improvement' }, { val: 92, suffix: '', label: 'Lighthouse score' }], canvasStyle: 'grid', hue: 170 },
  { num: '05 / 06', tag: 'Motion + Interaction', name: 'Kinetic Brand Motion', desc: 'A full motion identity system for a Series B startup — logo animations, UI transition library, marketing site interactions, and a custom animation toolkit for the design team.', metrics: [{ val: 3.5, suffix: 'x', label: 'Engagement' }, { val: 12, suffix: '', label: 'Awards' }], canvasStyle: 'flow', hue: 220 },
  { num: '06 / 06', tag: 'AI Product Design', name: 'Aether AI Assistant', desc: 'Voice + chat interface design for a consumer AI assistant. Designed the entire conversation UX, including multi-modal interactions, error recovery flows, and trust-building UI patterns.', metrics: [{ val: 480, suffix: '%', label: 'Daily active use' }, { val: 8.7, suffix: 'M', label: 'Sessions / mo' }], canvasStyle: 'scatter', hue: 290 },
];

function ProjectCanvas({ style, hue }: { style: string; hue: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0, t = 0, raf = 0;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };

    const drawGrid = () => {
      ctx.clearRect(0, 0, W, H);
      const cols = 12, rows = 8, cw = W / cols, ch = H / rows;
      for (let r = 0; r <= rows; r++) for (let c = 0; c <= cols; c++) {
        const wave = Math.sin(t * .03 + r * .5 + c * .3) * .5 + .5;
        ctx.fillStyle = `hsla(${hue + wave * 40},90%,65%,${wave * .6})`;
        ctx.fillRect(c * cw - 1, r * ch - 1, 2, 2);
      }
      ctx.strokeStyle = `hsla(${hue},80%,60%,0.08)`; ctx.lineWidth = .5;
      for (let c = 0; c <= cols; c++) { ctx.beginPath(); ctx.moveTo(c * cw, 0); ctx.lineTo(c * cw, H); ctx.stroke(); }
      for (let r = 0; r <= rows; r++) { ctx.beginPath(); ctx.moveTo(0, r * ch); ctx.lineTo(W, r * ch); ctx.stroke(); }
    };
    const drawFlow = () => {
      ctx.fillStyle = `hsla(${hue - 20},30%,8%,0.05)`; ctx.fillRect(0, 0, W, H);
      for (let l = 0; l < 6; l++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${hue + l * 15},85%,65%,${.3 + Math.sin(t * .02 + l) * .2})`;
        ctx.lineWidth = 1.5; ctx.shadowBlur = 12; ctx.shadowColor = `hsl(${hue + l * 15},85%,65%)`;
        for (let x = 0; x < W; x += 4) {
          const y = H / 2 + Math.sin(x * .015 + t * .025 + l * 0.8) * (40 + l * 15);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke(); ctx.shadowBlur = 0;
      }
    };
    const drawScatter = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < 60; i++) {
        const px = (Math.sin(i * 2.4 + t * .01) * .5 + .5) * W;
        const py = (Math.cos(i * 1.7 + t * .008) * .5 + .5) * H;
        const pulse = (Math.sin(t * .04 + i) + 1) * .5;
        ctx.shadowBlur = 8 + pulse * 12; ctx.shadowColor = `hsl(${hue + i * 3},85%,65%)`;
        ctx.fillStyle = `hsla(${hue + i * 3},85%,70%,${.3 + pulse * .5})`;
        ctx.beginPath(); ctx.arc(px, py, 2 + pulse * 2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      if (style === 'grid') drawGrid();
      else if (style === 'flow') drawFlow();
      else drawScatter();
      t++; raf = requestAnimationFrame(loop);
    };
    resize(); loop();
    window.addEventListener('resize', resize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [style, hue]);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

function Counter({ val, suffix }: { val: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = val / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= val) { current = val; clearInterval(timer); }
          el.textContent = (Number.isInteger(val) ? Math.round(current) : parseFloat(current.toFixed(1))) + suffix;
        }, 16);
        obs.disconnect();
      }
    }, { threshold: .3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [val, suffix]);
  return <span className="metric-val" ref={ref}>0{suffix}</span>;
}

export default function Work({ onOpenModal }: { onOpenModal: () => void }) {
  useReveal();
  return (
    <>
      <style>{`
        #work { padding: 8rem 0 0; }
        .work-header { max-width: 1280px; margin: 0 auto; padding: 0 4rem 4rem; display: flex; align-items: flex-end; justify-content: space-between; }
        .work-count { font-family: var(--ff-mono); font-size: .75rem; color: var(--text-dim); letter-spacing: .1em; margin-top: .5rem; }
        .projects-list { max-width: 1280px; margin: 0 auto; padding: 0 4rem 8rem; display: flex; flex-direction: column; }
        .project-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--border); padding: 5rem 0; align-items: center; }
        .project-row:last-child { border-bottom: 1px solid var(--border); }
        .project-row:nth-child(even) .project-row-visual { order: 2; }
        .project-row:nth-child(even) .project-row-info { order: 1; padding-right: 5rem; padding-left: 0; }
        .project-row-visual { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; border: 1px solid var(--border); background: var(--bg3); }
        .project-row-overlay { position: absolute; inset: 0; background: linear-gradient(135deg,transparent 60%,var(--bg3) 100%); z-index: 1; }
        .project-row-info { padding-left: 5rem; display: flex; flex-direction: column; gap: 1rem; }
        .project-row-number { font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .2em; color: var(--text-dim); }
        .project-row-tag { display: inline-flex; padding: .25rem .8rem; border: 1px solid var(--border-b); border-radius: 2rem; font-family: var(--ff-mono); font-size: .62rem; letter-spacing: .12em; color: var(--blue); text-transform: uppercase; width: fit-content; background: var(--glass-b); }
        .project-row-name { font-family: var(--ff-display); font-size: clamp(1.6rem,2.5vw,2.4rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.1; }
        .project-row-desc { font-size: .9rem; color: var(--text-muted); line-height: 1.75; }
        .project-row-metrics { display: flex; gap: 2rem; margin-top: .5rem; }
        .project-row-cta { display: inline-flex; align-items: center; gap: .5rem; padding: .7rem 1.6rem; border: 1px solid var(--border); border-radius: 2rem; font-size: .78rem; font-family: var(--ff-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); width: fit-content; margin-top: .5rem; transition: border-color .2s, color .2s; cursor: none; }
        .project-row-cta .mat-icon { font-family: 'Material Symbols Rounded'; font-size: .9rem; font-variation-settings: 'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 20; transition: transform .2s var(--ease-out); }
        .project-row-cta:hover { border-color: var(--blue); color: var(--blue); }
        .project-row-cta:hover .mat-icon { transform: translateX(4px); }
      `}</style>
      <section id="work">
        <div className="work-header">
          <div className="work-header-left reveal">
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">Craft that converts.<br />Design that scales.</h2>
            <p className="work-count">06 Projects — 2023–2025</p>
          </div>
        </div>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`project-row reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}`}>
              <div className="project-row-visual">
                <ProjectCanvas style={p.canvasStyle} hue={p.hue} />
                <div className="project-row-overlay" />
              </div>
              <div className="project-row-info">
                <div className="project-row-number">{p.num}</div>
                <div className="project-row-tag">{p.tag}</div>
                <h3 className="project-row-name">{p.name}</h3>
                <p className="project-row-desc">{p.desc}</p>
                <div className="project-row-metrics">
                  {p.metrics.map(m => (
                    <div key={m.label} className="metric">
                      <Counter val={m.val} suffix={m.suffix} />
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
                <button className="project-row-cta" onClick={onOpenModal}>
                  View Case Study <span className="mat-icon">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
