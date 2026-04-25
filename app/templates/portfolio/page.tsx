'use client';
import { useEffect } from 'react';
const PROJECTS=[{t:'Brand Overhaul',c:'Fintech · 2024',bg:'#1a0c00'},{t:'Mobile App UI',c:'Health · 2024',bg:'#0a001a'},{t:'Motion System',c:'SaaS · 2023',bg:'#001a08'},{t:'Web Redesign',c:'Retail · 2023',bg:'#1a0000'},{t:'Design System',c:'B2B · 2023',bg:'#001218'},{t:'Campaign',c:'Fashion · 2022',bg:'#100018'}];
export default function PortfolioPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#080604;color:#fef3e2;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(8,6,4,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(249,115,22,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;color:#F97316}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(249,115,22,.45);transition:color .2s}.nav-links a:hover{color:#F97316}
    .nav-cta{padding:.45rem 1.25rem;border:1px solid rgba(249,115,22,.35);border-radius:6px;font-size:.78rem;color:#F97316;transition:background .2s}.nav-cta:hover{background:rgba(249,115,22,.1)}
    .hero{min-height:100vh;padding-top:64px;display:flex;flex-direction:column;justify-content:flex-end;padding:64px 3rem 4rem;max-width:1300px;margin:0 auto;position:relative}
    .hero-num{position:absolute;top:50%;right:3rem;transform:translateY(-50%);font-family:'Syne',sans-serif;font-size:20vw;font-weight:800;color:rgba(249,115,22,.04);line-height:1;pointer-events:none;user-select:none}
    .hero-bottom{position:relative;z-index:1}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .9rem;border:1px solid rgba(249,115,22,.2);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:#F97316;margin-bottom:2rem}
    h1{font-family:'Syne',sans-serif;font-size:clamp(3.5rem,8vw,8rem);font-weight:800;line-height:.95;letter-spacing:-.04em;margin-bottom:2rem}
    .orange{background:linear-gradient(135deg,#F97316,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .hero-meta{display:flex;align-items:center;gap:3rem;flex-wrap:wrap}
    p.sub{font-size:1rem;color:rgba(254,243,226,.45);line-height:1.75;max-width:400px}
    .btns{display:flex;gap:1rem}
    .bp{padding:.85rem 2rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:8px;font-weight:600;font-size:.88rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(249,115,22,.3)}
    .bo{padding:.85rem 2rem;border:1px solid rgba(249,115,22,.25);border-radius:8px;font-size:.88rem;color:#F97316;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#F97316}
    .projects{padding:6rem 3rem;border-top:1px solid rgba(249,115,22,.08)}
    .inner{max-width:1300px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F97316}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .proj{border-radius:16px;aspect-ratio:3/2;display:flex;flex-direction:column;justify-content:flex-end;padding:1.5rem;cursor:pointer;transition:transform .3s}.proj:hover{transform:scale(1.02)}
    .proj-t{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.6)}
    .proj-c{font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.1em;color:rgba(255,255,255,.45);text-transform:uppercase;margin-top:.25rem}
    .cta-s{padding:8rem 3rem;text-align:center;border-top:1px solid rgba(249,115,22,.08)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(249,115,22,.06);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(249,115,22,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{padding:5rem 1.25rem 3rem}.projects{padding:4rem 1.25rem}.proj-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">Alex Chen</div><ul className="nav-links">{['Work','About','Process','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Hire Me</a></nav>
  <div className="hero">
    <div className="hero-num">06</div>
    <div className="hero-bottom">
      <div className="badge">Product Designer & Creative Director</div>
      <h1>I craft<br/><span className="orange">digital</span><br/>experiences.</h1>
      <div className="hero-meta">
        <p className="sub">6 years of turning complex problems into elegant interfaces. Open to full-time and freelance.</p>
        <div className="btns"><button className="bp">View Work</button><button className="bo">Download CV</button></div>
      </div>
    </div>
  </div>
  <div className="projects">
    <div className="inner">
      <div className="label rv">Selected Work</div>
      <h2 className="rv">Recent <span className="orange">projects</span></h2>
      <div className="proj-grid">
        {PROJECTS.map(p=><div key={p.t} className="proj rv" style={{background:p.bg,border:'1px solid rgba(249,115,22,.08)'}}><div className="proj-t">{p.t}</div><div className="proj-c">{p.c}</div></div>)}
      </div>
    </div>
  </div>
  <div className="cta-s rv">
    <div className="label" style={{justifyContent:'center'}}>Available for work</div>
    <h2 style={{marginBottom:'2rem'}}>Let's create something <span className="orange">remarkable</span></h2>
    <button className="bp">Get In Touch</button>
  </div>
  <footer><span>© 2025 Alex Chen · Widescreen Portfolio</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
