'use client';
import { useEffect, useRef } from 'react';

export default function AnalyticsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let W = c.width = c.offsetWidth, H = c.height = c.offsetHeight, t = 0, raf = 0;
    const bars = Array.from({length:20},(_,i)=>({x:i,h:Math.random(),th:Math.random(),speed:.005+Math.random()*.01}));
    const draw = () => {
      ctx.clearRect(0,0,W,H); t+=.01;
      bars.forEach(b=>{ b.h+=(b.th-b.h)*.05; if(Math.abs(b.h-b.th)<.01) b.th=.2+Math.random()*.7; });
      const bw=W/bars.length, pad=2;
      bars.forEach((b,i)=>{
        const bh=b.h*(H*.6), by=H*.7-bh;
        const g=ctx.createLinearGradient(0,by,0,H*.7);
        g.addColorStop(0,'rgba(6,182,212,.5)'); g.addColorStop(1,'rgba(6,182,212,.02)');
        ctx.fillStyle=g; ctx.fillRect(i*bw+pad,by,bw-pad*2,bh);
      });
      // Grid
      ctx.strokeStyle='rgba(6,182,212,.06)'; ctx.lineWidth=1;
      for(let y=0;y<H;y+=60){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
      for(let x=0;x<W;x+=80){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      // Line chart
      ctx.beginPath(); ctx.strokeStyle='rgba(6,182,212,.7)'; ctx.lineWidth=2;
      bars.forEach((b,i)=>{ const x=i*W/bars.length+W/(bars.length*2), y=H*.7-b.h*(H*.55); i===0?ctx.moveTo(x,y):ctx.lineTo(x,y); });
      ctx.stroke();
      raf=requestAnimationFrame(draw);
    };
    draw();
    const r=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
    window.addEventListener('resize',r,{passive:true});
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',r);};
  },[]);
  useEffect(()=>{
    const els=document.querySelectorAll<HTMLElement>('.rv');
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1});
    els.forEach(e=>obs.observe(e)); return ()=>obs.disconnect();
  },[]);

  const features=[
    {icon:'◈',title:'Real-time Dashboards',desc:'Live data visualisation with sub-second latency across all your sources.'},
    {icon:'◉',title:'Predictive Models',desc:'ML-powered forecasting that surfaces opportunities before they emerge.'},
    {icon:'◫',title:'Data Pipeline',desc:'ETL automation that cleans, transforms and routes data without manual work.'},
    {icon:'⬡',title:'Custom Reports',desc:'Board-ready reports built to your KPIs, delivered on schedule.'},
    {icon:'◌',title:'API Integrations',desc:'Connect 200+ tools — CRMs, ERPs, ad platforms — in minutes.'},
    {icon:'◈',title:'Anomaly Detection',desc:'Automated alerts when numbers deviate from expected patterns.'},
  ];

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#00080f;color:#e0f7fa;font-family:'DM Sans',sans-serif;overflow-x:hidden}
      .rv{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.rv.in{opacity:1;transform:none}
      nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,8,15,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(6,182,212,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
      .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#06B6D4,#22D3EE);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(6,182,212,.6);transition:color .2s}.nav-links a:hover{color:#06B6D4}
      .nav-cta{padding:.45rem 1.25rem;background:rgba(6,182,212,.12);border:1px solid rgba(6,182,212,.3);border-radius:8px;font-size:.78rem;font-weight:600;color:#06B6D4;transition:background .2s}.nav-cta:hover{background:rgba(6,182,212,.2)}
      .hero-wrap{position:relative;min-height:100vh;padding-top:64px;overflow:hidden}
      canvas{position:absolute;bottom:0;left:0;width:100%;height:70%;pointer-events:none}
      .hero{position:relative;z-index:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-height:calc(100vh - 64px);padding:2rem 3rem;max-width:700px}
      .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(6,182,212,.25);border-radius:2rem;background:rgba(6,182,212,.06);font-family:'JetBrains Mono',monospace;font-size:.67rem;letter-spacing:.15em;text-transform:uppercase;color:#06B6D4;margin-bottom:2rem;animation:fu .8s .2s both}
      .dot{width:5px;height:5px;background:#06B6D4;border-radius:50%;box-shadow:0 0 8px #06B6D4;animation:pulse 2s infinite}
      @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.5)}}
      h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,5.5vw,5rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem;animation:fu .9s .3s both}
      .grad{background:linear-gradient(135deg,#06B6D4,#22D3EE,#67E8F9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      p.sub{font-size:1.05rem;color:rgba(6,182,212,.65);line-height:1.75;margin-bottom:2.5rem;animation:fu .8s .5s both;max-width:480px}
      .btns{display:flex;gap:1rem;flex-wrap:wrap;animation:fu .8s .7s both}
      .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#06B6D4,#0891B2);border-radius:10px;font-weight:600;font-size:.9rem;color:#000;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(6,182,212,.3)}
      .bo{padding:.85rem 2.2rem;border:1px solid rgba(6,182,212,.3);border-radius:10px;font-size:.9rem;color:#06B6D4;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#06B6D4}
      @keyframes fu{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
      .feat-section{padding:7rem 3rem;background:linear-gradient(to bottom,rgba(6,182,212,.03),transparent)}
      .inner{max-width:1200px;margin:0 auto}
      .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#06B6D4;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#06B6D4}
      h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
      .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
      .feat{background:rgba(6,182,212,.04);border:1px solid rgba(6,182,212,.08);border-radius:16px;padding:2rem;transition:border-color .3s,background .3s}.feat:hover{border-color:rgba(6,182,212,.25);background:rgba(6,182,212,.08)}
      .feat-icon{font-size:1.6rem;margin-bottom:1rem;color:#06B6D4}
      .feat-title{font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;margin-bottom:.6rem}
      .feat-desc{font-size:.88rem;color:rgba(6,182,212,.55);line-height:1.6}
      .cta-s{padding:8rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(6,182,212,.1),transparent 60%)}
      .cta-s h2{font-size:clamp(2rem,4vw,3.5rem);margin-bottom:2rem}
      footer{padding:2rem 3rem;border-top:1px solid rgba(6,182,212,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(6,182,212,.3);font-family:'JetBrains Mono',monospace}
      @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{padding:2rem 1.25rem;max-width:100%}.feat-section{padding:4rem 1.25rem}.feat-grid{grid-template-columns:1fr}.cta-s{padding:4rem 1.25rem}footer{padding:1.5rem 1.25rem;flex-direction:column;gap:.5rem}}
    `}</style>
    <nav>
      <div className="logo">Widescreen Analytics</div>
      <ul className="nav-links">{['Platform','Solutions','Pricing','Docs'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul>
      <a href="#" className="nav-cta">Start Free Trial</a>
    </nav>
    <div className="hero-wrap">
      <canvas ref={canvasRef}/>
      <div className="hero">
        <div className="badge"><span className="dot"/>Data Intelligence Platform</div>
        <h1>Your data,<br/><span className="grad">finally clear.</span></h1>
        <p className="sub">Turn chaotic data streams into confident decisions. Real-time analytics, predictive models, and beautiful dashboards — all in one platform.</p>
        <div className="btns"><button className="bp">Get Started Free</button><button className="bo">Watch Demo</button></div>
      </div>
    </div>
    <div className="feat-section">
      <div className="inner">
        <div className="label rv">Capabilities</div>
        <h2 className="rv">Everything you need<br/>to <span className="grad">see clearly</span></h2>
        <div className="feat-grid">
          {features.map(f=>(
            <div key={f.title} className="feat rv">
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="cta-s rv">
      <div className="label" style={{justifyContent:'center'}}>Get Started</div>
      <h2>Start turning data into<br/><span className="grad">competitive advantage</span></h2>
      <button className="bp">Try Free for 14 Days</button>
    </div>
    <footer><span>© 2025 Widescreen Analytics</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
