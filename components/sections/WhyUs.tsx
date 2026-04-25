'use client';
import { useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';

const PILLARS = [
  { icon: '◈', title: 'AI-First Approach',    desc: 'Every decision informed by model behavior, prompt design, and edge-case thinking.' },
  { icon: '⬡', title: 'Conversion-Focused',   desc: 'Design backed by analytics. We measure what matters — retention, activation, revenue.' },
  { icon: '◉', title: 'Scalable Systems',      desc: 'Token-based, documented, version-controlled. Built to outlast the engagement.' },
  { icon: '◌', title: 'Global Delivery',       desc: 'Async-first team with leads across US, EU, and Asia. We meet your timezone.' },
];

const STATS = [
  { count: 150, suffix: '+', label: 'Projects delivered', cls: 'floater-1' },
  { count: 98,  suffix: '%', label: 'Client satisfaction', cls: 'floater-2' },
  { count: 7,   suffix: ' yrs', label: 'In the craft',      cls: 'floater-3' },
];

export default function WhyUs() {
  useReveal();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0, t = 0, raf = 0;
    const rings = [
      { r: 80, speed: 0.008, dots: 6,  color: '#F97316' },
      { r: 140, speed: -0.005, dots: 10, color: '#FB923C' },
      { r: 200, speed: 0.003, dots: 14, color: '#FBBF24' },
    ];
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    const draw = () => {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      grad.addColorStop(0, 'rgba(249,115,22,0.3)'); grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(cx, cy, 60, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.shadowBlur = 20; ctx.shadowColor = '#F97316';
      ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      for (const ring of rings) {
        ctx.strokeStyle = ring.color + '20'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(cx, cy, ring.r, 0, Math.PI * 2); ctx.stroke();
        for (let i = 0; i < ring.dots; i++) {
          const angle = (i / ring.dots) * Math.PI * 2 + t * ring.speed * 100;
          const dx = cx + Math.cos(angle) * ring.r, dy = cy + Math.sin(angle) * ring.r;
          const pulse = (Math.sin(t * 0.05 + i) + 1) * .5;
          ctx.shadowBlur = 6 + pulse * 8; ctx.shadowColor = ring.color;
          ctx.fillStyle = ring.color; ctx.globalAlpha = .4 + pulse * .6;
          ctx.beginPath(); ctx.arc(dx, dy, 3, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      t++; raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* counter animation for stat floaters */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.stat-num[data-count]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count!);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.round(current) + suffix;
        }, 16);
        obs.unobserve(el);
      });
    }, { threshold: .3 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        #why { padding: 10rem 0; overflow: hidden; }
        .why-headline { font-family: var(--ff-display); font-size: clamp(2.8rem,5vw,5rem); font-weight: 800; line-height: 1.08; letter-spacing: -.04em; margin-bottom: 1.5rem; }
        .why-headline em { font-style: normal; background: linear-gradient(90deg,var(--blue),var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .why-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .why-pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3rem; }
        .pillar { padding: 1.5rem; border: 1px solid var(--border); border-radius: 12px; background: var(--glass); backdrop-filter: blur(8px); transition: border-color .3s, background .3s; }
        .pillar:hover { border-color: var(--border-b); background: var(--glass-b); }
        .pillar-icon { font-size: 1.3rem; margin-bottom: .8rem; }
        .pillar-title { font-family: var(--ff-display); font-size: .95rem; font-weight: 700; margin-bottom: .4rem; }
        .pillar-desc { font-size: .82rem; color: var(--text-muted); line-height: 1.6; }
        .why-visual { position: relative; height: 500px; }
        #why-canvas { position: absolute; inset: 0; border-radius: 20px; border: 1px solid var(--border); }
        .why-stat-floater { position: absolute; background: var(--glass); backdrop-filter: blur(16px); border: 1px solid var(--border-b); border-radius: 12px; padding: 1rem 1.5rem; z-index: 2; }
        .why-stat-floater .stat-num { font-family: var(--ff-display); font-size: 2.2rem; font-weight: 800; background: linear-gradient(135deg,var(--blue),var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .why-stat-floater .stat-label { font-size: .75rem; color: var(--text-muted); letter-spacing: .05em; }
        .floater-1 { top: 10%; left: -8%; }
        .floater-2 { bottom: 15%; right: -5%; }
        .floater-3 { top: 50%; left: 5%; }
      `}</style>
      <section id="why">
        <div className="section-inner">
          <div className="why-layout">
            <div>
              <div className="section-label reveal">Why Widescreen</div>
              <h2 className="why-headline reveal">We don&apos;t design<br /><em>screens.</em><br />We design<br /><em>intelligence.</em></h2>
              <div className="why-pillars">
                {PILLARS.map((p, i) => (
                  <div key={p.title} className={`pillar reveal${i === 1 ? ' reveal-delay-1' : i === 2 ? ' reveal-delay-2' : i === 3 ? ' reveal-delay-3' : ''}`}>
                    <div className="pillar-icon">{p.icon}</div>
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-visual reveal reveal-delay-2">
              <canvas id="why-canvas" ref={canvasRef} />
              {STATS.map(s => (
                <div key={s.label} className={`why-stat-floater ${s.cls}`}>
                  <div className="stat-num" data-count={s.count} data-suffix={s.suffix}>0{s.suffix}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
