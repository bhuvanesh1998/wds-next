'use client';
import { useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';

export default function CTA() {
  useReveal();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0, t = 0, raf = 0;
    const blobs = [
      { x: .2, y: .4, r: .35, color: '249,115,22', speed: 1 },
      { x: .8, y: .6, r: .3,  color: '251,146,60', speed: 1.3 },
      { x: .5, y: .2, r: .25, color: '251,191,36', speed: .7 },
    ];
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const b of blobs) {
        const bx = (b.x + Math.sin(t * 0.005 * b.speed) * .15) * W;
        const by = (b.y + Math.cos(t * 0.005 * b.speed) * .15) * H;
        const br = b.r * Math.min(W, H);
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        g.addColorStop(0, `rgba(${b.color},0.18)`); g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      t++; raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <style>{`
        #cta { padding: 12rem 0; position: relative; overflow: hidden; text-align: center; }
        #cta-canvas { position: absolute; inset: 0; z-index: 0; }
        .cta-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 2rem; }
        .cta-eyebrow { font-family: var(--ff-mono); font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; color: var(--blue); margin-bottom: 2rem; }
        .cta-title { font-family: var(--ff-display); font-size: clamp(3rem,6vw,5.5rem); font-weight: 800; line-height: 1.05; letter-spacing: -.04em; margin-bottom: 1.5rem; }
        .cta-sub { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 3rem; }
        .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .cta-gradient { background: linear-gradient(135deg,var(--blue),var(--purple),var(--pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>
      <section id="cta">
        <canvas id="cta-canvas" ref={canvasRef} />
        <div className="cta-content">
          <div className="cta-eyebrow reveal">Ready when you are</div>
          <h2 className="cta-title reveal">
            Let&apos;s Build the<br />
            <span className="cta-gradient">Future Together</span>
          </h2>
          <p className="cta-sub reveal reveal-delay-1">Bring your boldest product vision. We&apos;ll bring the craft, strategy, and engineering to make it real — fast.</p>
          <div className="cta-actions reveal reveal-delay-2">
            <a href="#contact" className="btn-primary"><span>Book a Discovery Call</span></a>
            <a href="#work" className="btn-ghost">View All Work</a>
          </div>
        </div>
      </section>
    </>
  );
}
