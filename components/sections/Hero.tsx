'use client';
import { useEffect, useRef } from 'react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* ── Neural canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const NODE_COUNT = 90, CONNECT_DIST = 160;
    let W = 0, H = 0, nodes: any[] = [], raf = 0;
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      mouseX = W / 2; mouseY = H / 2;
    };
    const createNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
        r: Math.random() * 1.5 + .5, pulse: Math.random() * Math.PI * 2,
      }));
    };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left; mouseY = e.clientY - rect.top;
    };
    document.addEventListener('mousemove', onMove);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      const time = t * 0.001;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.pulse += 0.02;
        const dx = mouseX - n.x, dy = mouseY - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) { n.vx += dx * 0.00005; n.vy += dy * 0.00005; }
        n.vx *= 0.999; n.vy *= 0.999;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.35;
            const hue = 200 + Math.sin(time + i * 0.1) * 50;
            ctx.strokeStyle = `hsla(${hue},90%,65%,${alpha})`;
            ctx.lineWidth = .6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const glow = (Math.sin(n.pulse) + 1) * .5;
        const alpha = .3 + glow * .5;
        const hue = 200 + Math.sin(n.pulse * .5) * 60;
        ctx.shadowBlur = 8 + glow * 8; ctx.shadowColor = `hsl(${hue},90%,65%)`;
        ctx.fillStyle = `hsla(${hue},90%,75%,${alpha})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + glow * .6, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    resize(); createNodes(); raf = requestAnimationFrame(draw);
    window.addEventListener('resize', () => { resize(); createNodes(); }, { passive: true });
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMove); };
  }, []);

  /* ── Hero tilt ── */
  useEffect(() => {
    const hero = document.getElementById('hero');
    const content = contentRef.current;
    if (!hero || !content) return;
    let tRX = 0, tRY = 0, cRX = 0, cRY = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      tRX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -8;
      tRY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 8;
    };
    const onLeave = () => { tRX = 0; tRY = 0; };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    const loop = () => {
      cRX += (tRX - cRX) * 0.06; cRY += (tRY - cRY) * 0.06;
      content.style.transform = `perspective(1200px) rotateX(${cRX}deg) rotateY(${cRY}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); hero.removeEventListener('mousemove', onMove); hero.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <>
      <style>{`
        #hero { position: relative; height: 100vh; min-height: 680px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        #neural-canvas { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; }
        .hero-vignette { position: absolute; inset: 0; z-index: 2; background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(5,5,8,.55) 65%, var(--bg) 100%); }
        .hero-bottom-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 220px; z-index: 2; background: linear-gradient(to bottom, transparent, var(--bg)); }
        .hero-content { position: relative; z-index: 3; text-align: center; max-width: 820px; padding: 0 2.5rem; will-change: transform; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: .55rem; padding: .45rem 1.1rem; border: 1px solid rgba(14,165,233,.3); border-radius: 2rem; background: rgba(14,165,233,.07); backdrop-filter: blur(16px); font-family: var(--ff-mono); font-size: .68rem; letter-spacing: .15em; color: var(--blue); text-transform: uppercase; margin-bottom: 2.5rem; opacity: 0; animation: fadeUp .8s .3s var(--ease-out) forwards; }
        .eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--blue); box-shadow: 0 0 6px var(--blue); animation: pulse-dot 2s ease-in-out infinite; flex-shrink: 0; }
        .hero-title { font-family: var(--ff-display); font-weight: 800; line-height: 1.0; letter-spacing: -.035em; margin-bottom: 0; opacity: 0; animation: fadeUp .9s .5s var(--ease-out) forwards; }
        .hero-title .t-line { display: block; white-space: nowrap; }
        .hero-title .t-sm { font-size: clamp(1.8rem, 3.2vw, 3.6rem); color: var(--text); }
        .hero-title .t-lg { font-size: clamp(2.8rem, 5.5vw, 6rem); }
        .hero-title .t-md { font-size: clamp(1.8rem, 3.2vw, 3.6rem); color: rgba(241,245,249,.55); }
        .gradient-text { background: linear-gradient(100deg, var(--blue) 0%, var(--purple) 45%, var(--pink) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-divider { width: 48px; height: 1px; background: linear-gradient(90deg, var(--blue), var(--purple)); margin: 2rem auto; opacity: 0; animation: fadeUp .8s .75s var(--ease-out) forwards; }
        .hero-sub { font-family: var(--ff-mono); font-size: .8rem; letter-spacing: .22em; color: var(--text-dim); text-transform: uppercase; margin-bottom: 2.8rem; opacity: 0; animation: fadeUp .8s .85s var(--ease-out) forwards; }
        .hero-sub em { color: var(--text-muted); font-style: normal; }
        .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; opacity: 0; animation: fadeUp .8s 1s var(--ease-out) forwards; }
        .hero-metrics { display: flex; gap: 3rem; justify-content: center; margin-top: 3.5rem; opacity: 0; animation: fadeUp .8s 1.1s var(--ease-out) forwards; }
        .hero-metric { display: flex; flex-direction: column; align-items: center; gap: .25rem; }
        .hero-metric-val { font-family: var(--ff-mono); font-size: .95rem; font-weight: 500; color: var(--text); }
        .hero-metric-label { font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .12em; text-transform: uppercase; color: var(--text-dim); }
        .hero-metric-sep { width: 1px; background: var(--border); align-self: stretch; }
        .hero-scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 3; display: flex; flex-direction: column; align-items: center; gap: .5rem; opacity: 0; animation: fadeIn 1s 1.6s forwards; }
        .scroll-line { width: 1px; height: 48px; background: linear-gradient(to bottom,transparent,var(--blue)); animation: scroll-line 2s ease-in-out infinite; }
        .scroll-label { font-family: var(--ff-mono); font-size: .6rem; letter-spacing: .18em; color: var(--text-dim); text-transform: uppercase; }
        @media (max-width: 768px) {
          .hero-title .t-line { white-space: normal; }
          .hero-metrics { gap: 1.5rem; }
          .hero-metric-sep { display: none; }
        }
      `}</style>
      <section id="hero">
        <canvas id="neural-canvas" ref={canvasRef} />
        <div className="hero-vignette" />
        <div className="hero-bottom-fade" />
        <div className="hero-content" ref={contentRef}>
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            AI-Oriented Product Design Studio
          </div>
          <h1 className="hero-title">
            <span className="t-line t-sm">We Design</span>
            <span className="t-line t-lg gradient-text">Intelligent</span>
            <span className="t-line t-sm">Experiences &amp; Products</span>
          </h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            <em>UX</em> · <em>UI</em> · <em>AI</em> · <em>Engineering</em> — built for scale
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onOpenModal}><span>View Our Work</span></button>
            <a href="#contact" className="btn-ghost">Start a Project</a>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric">
              <span className="hero-metric-val">50+</span>
              <span className="hero-metric-label">Products Shipped</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric">
              <span className="hero-metric-val">8 yrs</span>
              <span className="hero-metric-label">Experience</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric">
              <span className="hero-metric-val">98%</span>
              <span className="hero-metric-label">Client Retention</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </section>
    </>
  );
}
