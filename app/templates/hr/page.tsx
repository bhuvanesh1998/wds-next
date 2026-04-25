'use client';
import { useEffect, useRef } from 'react';

const SERVICES = ['Talent Acquisition','HR Strategy','Learning & Development','Payroll Management','Culture Design','Performance Systems'];
const STATS = [{ v: '500+', l: 'Placements' },{ v: '98%', l: 'Retention Rate' },{ v: '12 yrs', l: 'Experience' },{ v: '200+', l: 'Clients' }];

export default function HRPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight, t = 0, raf = 0;
    const nodes = Array.from({length: 40}, () => ({ x: Math.random()*W, y: Math.random()*H, vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3 }));
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      nodes.forEach(n => { n.x+=n.vx; n.y+=n.vy; if(n.x<0||n.x>W) n.vx*=-1; if(n.y<0||n.y>H) n.vy*=-1; });
      for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++) {
        const d=Math.hypot(nodes[i].x-nodes[j].x,nodes[i].y-nodes[j].y);
        if(d<120){ ctx.strokeStyle=`rgba(139,92,246,${(1-d/120)*.15})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.stroke(); }
      }
      nodes.forEach(n => { ctx.fillStyle='rgba(167,139,250,.4)'; ctx.beginPath(); ctx.arc(n.x,n.y,2,0,Math.PI*2); ctx.fill(); });
      t++; raf=requestAnimationFrame(draw);
    };
    draw();
    const r = () => { W=c.width=c.offsetWidth; H=c.height=c.offsetHeight; };
    window.addEventListener('resize',r,{passive:true});
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize',r); };
  },[]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } }),{threshold:.1});
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  },[]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        :root{--p:#8B5CF6;--p2:#A78BFA;--bg:#07030f;--bg2:#0e0620;--t:#f5f0ff;--tm:#b09dd4;--td:#5a4878}
        body{background:var(--bg);color:var(--t);font-family:'DM Sans',sans-serif;overflow-x:hidden}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
        .reveal.in{opacity:1;transform:none}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(7,3,15,.8);backdrop-filter:blur(20px);border-bottom:1px solid rgba(139,92,246,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
        .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,var(--p),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .nav-links{display:flex;gap:2rem;list-style:none}
        .nav-links a{font-size:.85rem;color:var(--tm);transition:color .2s}
        .nav-links a:hover{color:var(--t)}
        .nav-cta{padding:.5rem 1.4rem;background:var(--p);border-radius:8px;font-size:.8rem;font-weight:600;color:#fff;transition:opacity .2s}
        .nav-cta:hover{opacity:.85}
        hero-wrap{display:block;position:relative;min-height:100vh;padding-top:64px}
        canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
        .hero{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem 2rem}
        .hero-badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(139,92,246,.3);border-radius:2rem;background:rgba(139,92,246,.08);font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:var(--p);margin-bottom:2rem;animation:fadeUp .8s .2s both}
        .badge-dot{width:5px;height:5px;background:var(--p);border-radius:50%;box-shadow:0 0 8px var(--p);animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.5);opacity:.4}}
        h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,6vw,5.5rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem;animation:fadeUp .9s .4s both}
        .grad{background:linear-gradient(135deg,var(--p),var(--p2),#e0aaff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .hero-sub{font-size:1.05rem;color:var(--tm);max-width:520px;line-height:1.75;margin-bottom:2.5rem;animation:fadeUp .8s .6s both}
        .hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;animation:fadeUp .8s .8s both}
        .btn-p{padding:.85rem 2.2rem;background:linear-gradient(135deg,var(--p),var(--p2));border-radius:10px;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}
        .btn-p:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(139,92,246,.35)}
        .btn-o{padding:.85rem 2.2rem;border:1px solid rgba(139,92,246,.35);border-radius:10px;font-size:.9rem;color:var(--p2);background:none;cursor:pointer;transition:border-color .2s,background .2s}
        .btn-o:hover{border-color:var(--p);background:rgba(139,92,246,.08)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        .stats{display:flex;gap:3rem;justify-content:center;flex-wrap:wrap;padding:4rem 3rem;background:linear-gradient(to bottom,rgba(139,92,246,.04),transparent)}
        .stat{text-align:center}
        .stat-v{font-family:'Syne',sans-serif;font-size:2.5rem;font-weight:800;background:linear-gradient(135deg,var(--p),var(--p2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .stat-l{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:var(--td);margin-top:.3rem}
        .section{padding:7rem 3rem}
        .inner{max-width:1200px;margin:0 auto}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--p);display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}
        .section-label::before{content:'';width:20px;height:1px;background:var(--p)}
        h2{font-family:'Syne',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1rem}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.1);border-radius:16px;overflow:hidden;margin-top:3rem}
        .service-item{background:var(--bg2);padding:2rem;transition:background .3s}
        .service-item:hover{background:rgba(139,92,246,.08)}
        .service-num{font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--p);letter-spacing:.1em;margin-bottom:.75rem}
        .service-name{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem}
        .cta-section{padding:8rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(139,92,246,.12),transparent 70%)}
        .cta-title{font-family:'Syne',sans-serif;font-size:clamp(2rem,4vw,3.5rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1rem}
        footer{padding:2rem 3rem;border-top:1px solid rgba(139,92,246,.1);display:flex;justify-content:space-between;align-items:center;font-size:.78rem;color:var(--td);font-family:'JetBrains Mono',monospace}
        @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}h1{font-size:2.5rem}.services-grid{grid-template-columns:1fr}.section{padding:4rem 1.25rem}.stats{gap:1.5rem;padding:3rem 1.25rem}}
      `}</style>
      <nav>
        <div className="logo">Widescreen HR</div>
        <ul className="nav-links">
          {['Services','About','Case Studies','Contact'].map(l => <li key={l}><a href="#">{l}</a></li>)}
        </ul>
        <a href="#" className="nav-cta">Get Started</a>
      </nav>
      <div style={{position:'relative',minHeight:'100vh',paddingTop:'64px'}}>
        <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} />
        <div className="hero">
          <div className="hero-badge"><span className="badge-dot"/>HR Consulting Excellence</div>
          <h1>People are your<br/><span className="grad">Greatest Asset</span></h1>
          <p className="hero-sub">We help organisations attract, develop and retain exceptional talent through strategic HR consulting built for the future of work.</p>
          <div className="hero-btns">
            <button className="btn-p">Book a Consultation</button>
            <button className="btn-o">View Case Studies</button>
          </div>
        </div>
      </div>
      <div className="stats">
        {STATS.map(s => <div key={s.l} className="stat reveal"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}
      </div>
      <section className="section">
        <div className="inner">
          <div className="section-label reveal">What We Do</div>
          <h2 className="reveal">Human-centred<br/>HR Solutions</h2>
          <div className="services-grid">
            {SERVICES.map((s,i) => (
              <div key={s} className="service-item reveal">
                <div className="service-num">0{i+1}</div>
                <div className="service-name">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cta-section reveal">
        <div className="section-label" style={{justifyContent:'center'}}>Ready?</div>
        <div className="cta-title">Let's build your<br/><span className="grad">dream team</span></div>
        <div style={{marginTop:'2rem'}}><button className="btn-p">Start the Conversation</button></div>
      </div>
      <footer>
        <span>© 2025 Widescreen HR Consulting</span>
        <span>Powered by Widescreen Studio</span>
      </footer>
    </>
  );
}
