'use client';
import { useEffect, useRef, useState } from 'react';

const LINES = ['$ initializing pipeline...','> connecting to cloud infra...','✓ kubernetes cluster ready','✓ ci/cd pipeline deployed','> running health checks...','✓ all 24 services healthy','$ zero downtime deploy complete','> monitoring active — 99.99% uptime'];
const SERVICES = [
  {n:'CI/CD Pipelines',d:'Automated build, test, release — every commit.'},
  {n:'Cloud Infrastructure',d:'AWS, GCP, Azure — architected for scale.'},
  {n:'Kubernetes Orchestration',d:'Container management at any scale.'},
  {n:'Security & Compliance',d:'DevSecOps baked into every stage.'},
  {n:'Observability',d:'Logs, metrics, traces — full visibility.'},
  {n:'Incident Response',d:'24/7 on-call and automated remediation.'},
];

export default function DevOpsPage() {
  const [lines, setLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(()=>{
    let i=0, j=0;
    const tick=setInterval(()=>{
      if(i<LINES.length){ setLines(l=>[...l,LINES[i]]); i++; } else { i=0; setLines([]); }
    },900);
    const blink=setInterval(()=>setCursor(c=>!c),530);
    return ()=>{ clearInterval(tick); clearInterval(blink); };
  },[]);

  useEffect(()=>{
    const els=document.querySelectorAll<HTMLElement>('.rv');
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1});
    els.forEach(e=>obs.observe(e)); return ()=>obs.disconnect();
  },[]);

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#000d02;color:#d4ffd4;font-family:'JetBrains Mono',monospace;overflow-x:hidden}
      .rv{opacity:0;transform:translateY(20px);transition:opacity .6s,transform .6s}.rv.in{opacity:1;transform:none}
      nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,13,2,.9);backdrop-filter:blur(16px);border-bottom:1px solid rgba(34,197,94,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
      .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;color:#22C55E;letter-spacing:-.01em}
      .logo span{color:#86efac}
      .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.75rem;color:rgba(34,197,94,.5);letter-spacing:.05em;transition:color .2s}.nav-links a:hover{color:#22C55E}
      .nav-cta{padding:.45rem 1.25rem;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:6px;font-size:.75rem;color:#22C55E;transition:background .2s}.nav-cta:hover{background:rgba(34,197,94,.2)}
      .hero-wrap{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding-left:3rem;padding-right:3rem;max-width:1300px;margin:0 auto}
      .hero-left{padding:2rem 0}
      .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .9rem;border:1px solid rgba(34,197,94,.2);border-radius:4px;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#22C55E;margin-bottom:2rem;background:rgba(34,197,94,.05)}
      .status-dot{width:6px;height:6px;background:#22C55E;border-radius:50%;box-shadow:0 0 10px #22C55E;animation:pulse 2s infinite}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
      h1{font-family:'Syne',sans-serif;font-size:clamp(2.5rem,4.5vw,4.5rem);font-weight:800;line-height:1.05;letter-spacing:-.03em;margin-bottom:1.5rem;color:#fff}
      .grad{color:#22C55E}
      p.sub{font-size:.95rem;color:rgba(212,255,212,.5);line-height:1.8;margin-bottom:2.5rem;max-width:440px}
      .btns{display:flex;gap:1rem;flex-wrap:wrap}
      .bp{padding:.8rem 2rem;background:#22C55E;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:700;color:#000;border:none;cursor:pointer;letter-spacing:.05em;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(34,197,94,.3)}
      .bo{padding:.8rem 2rem;border:1px solid rgba(34,197,94,.25);border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#22C55E;background:none;cursor:pointer;letter-spacing:.05em;transition:border-color .2s}.bo:hover{border-color:#22C55E}
      .terminal{background:#000;border:1px solid rgba(34,197,94,.2);border-radius:12px;overflow:hidden;font-size:.78rem}
      .term-bar{background:rgba(34,197,94,.06);padding:.6rem 1rem;display:flex;align-items:center;gap:.5rem;border-bottom:1px solid rgba(34,197,94,.1)}
      .term-dot{width:10px;height:10px;border-radius:50%}
      .term-body{padding:1.25rem;min-height:240px;max-height:300px;overflow:hidden}
      .term-line{color:#4ade80;line-height:2;animation:appear .3s both}
      .term-line.ok{color:#22C55E}.term-line.cmd{color:#86efac}
      @keyframes appear{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
      .cursor{display:inline-block;width:8px;height:14px;background:#22C55E;margin-left:2px;vertical-align:middle}
      .feat-section{padding:7rem 3rem;background:rgba(34,197,94,.015);border-top:1px solid rgba(34,197,94,.06)}
      .inner{max-width:1200px;margin:0 auto}
      .label{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#22C55E;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#22C55E}
      h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:800;letter-spacing:-.03em;color:#fff;margin-bottom:3rem}
      .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
      .feat{border:1px solid rgba(34,197,94,.08);border-radius:12px;padding:1.75rem;background:rgba(34,197,94,.03);transition:border-color .3s,background .3s}.feat:hover{border-color:rgba(34,197,94,.25);background:rgba(34,197,94,.07)}
      .feat-n{font-family:'Syne',sans-serif;font-weight:700;color:#fff;margin-bottom:.5rem}
      .feat-d{font-size:.8rem;color:rgba(34,197,94,.5);line-height:1.6}
      .cta-s{padding:8rem 3rem;text-align:center}
      .cta-s h2{margin-bottom:2rem}
      footer{padding:1.75rem 3rem;border-top:1px solid rgba(34,197,94,.06);display:flex;justify-content:space-between;font-size:.68rem;color:rgba(34,197,94,.3)}
      @media(max-width:900px){.hero-wrap{grid-template-columns:1fr;padding:1.5rem;gap:2rem}.feat-section{padding:4rem 1.25rem}.feat-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.5rem;padding:1.25rem}}
    `}</style>
    <nav>
      <div className="logo">Widescreen<span> DevOps</span></div>
      <ul className="nav-links">{['Services','Stack','Case Studies','Blog'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul>
      <a href="#" className="nav-cta">$ get_started</a>
    </nav>
    <div className="hero-wrap">
      <div className="hero-left">
        <div className="badge"><span className="status-dot"/>Systems Operational</div>
        <h1>Ship faster.<br/><span className="grad">Break nothing.</span></h1>
        <p className="sub">End-to-end DevOps engineering — CI/CD, cloud infra, Kubernetes, and 24/7 observability. We keep your systems flying.</p>
        <div className="btns"><button className="bp">$ deploy --now</button><button className="bo">View Architecture</button></div>
      </div>
      <div className="terminal rv">
        <div className="term-bar">
          <div className="term-dot" style={{background:'#ff5f57'}}/>
          <div className="term-dot" style={{background:'#ffbd2e'}}/>
          <div className="term-dot" style={{background:'#28c840'}}/>
          <span style={{marginLeft:'.5rem',fontSize:'.65rem',color:'rgba(34,197,94,.4)'}}>widescreen-devops ~ pipeline</span>
        </div>
        <div className="term-body">
          {lines.map((l,i)=>(
            <div key={i} className={`term-line ${l.startsWith('✓')?'ok':l.startsWith('$')||l.startsWith('>')?'cmd':''}`}>{l}</div>
          ))}
          <span className="cursor" style={{opacity:cursor?1:0}}/>
        </div>
      </div>
    </div>
    <div className="feat-section">
      <div className="inner">
        <div className="label rv">Services</div>
        <h2 className="rv">Full-stack <span className="grad">DevOps</span> engineering</h2>
        <div className="feat-grid">
          {SERVICES.map(s=><div key={s.n} className="feat rv"><div className="feat-n">{s.n}</div><div className="feat-d">{s.d}</div></div>)}
        </div>
      </div>
    </div>
    <div className="cta-s rv">
      <div className="label" style={{justifyContent:'center'}}>$ ready</div>
      <h2 style={{color:'#fff'}}>Zero-downtime. <span className="grad">Always.</span></h2>
      <button className="bp">Start Your DevOps Journey</button>
    </div>
    <footer><span>© 2025 Widescreen DevOps</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
