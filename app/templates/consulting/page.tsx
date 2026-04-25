'use client';
import { useEffect } from 'react';
const PILLARS=[{n:'Strategy',d:'Market positioning, growth strategy and competitive intelligence.'},{ n:'Transformation',d:'Change management, org design and operational excellence.'},{n:'Technology',d:'Digital roadmaps, vendor selection and tech-driven innovation.'},{n:'M&A Advisory',d:'Due diligence, integration planning and value creation.'}];
export default function ConsultingPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#0a0600;color:#fdf4e3;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,6,0,.9);backdrop-filter:blur(20px);border-bottom:1px solid rgba(217,119,6,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;color:#D97706;letter-spacing:-.01em}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(217,119,6,.5);transition:color .2s}.nav-links a:hover{color:#D97706}
    .nav-cta{padding:.45rem 1.4rem;border:1px solid rgba(217,119,6,.4);border-radius:4px;font-size:.8rem;color:#D97706;transition:background .2s}.nav-cta:hover{background:rgba(217,119,6,.1)}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:6rem;padding-left:3rem;padding-right:3rem;max-width:1300px;margin:0 auto}
    .hero-right{display:flex;flex-direction:column;gap:1.5rem}
    .card{background:rgba(217,119,6,.04);border:1px solid rgba(217,119,6,.1);border-radius:12px;padding:1.75rem;transition:border-color .3s,transform .3s}.card:hover{border-color:rgba(217,119,6,.3);transform:translateX(8px)}
    .card-n{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:.4rem;color:#FBBF24}
    .card-d{font-size:.88rem;color:rgba(253,244,227,.5);line-height:1.6}
    .badge{display:inline-flex;align-items:center;gap:.6rem;padding:.4rem 1rem;border:1px solid rgba(217,119,6,.2);border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#D97706;margin-bottom:2.5rem}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,4.5vw,4.8rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem}
    .amber{background:linear-gradient(135deg,#D97706,#F59E0B,#FCD34D);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(253,244,227,.55);line-height:1.8;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#D97706,#B45309);border-radius:6px;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(217,119,6,.3)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(217,119,6,.25);border-radius:6px;font-size:.9rem;color:#D97706;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#D97706}
    .cta-s{padding:8rem 3rem;text-align:center;border-top:1px solid rgba(217,119,6,.08)}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#D97706;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#D97706}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:2rem}
    footer{padding:2rem 3rem;border-top:1px solid rgba(217,119,6,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(217,119,6,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.25rem 2rem;gap:3rem}nav{padding:0 1.25rem}.nav-links{display:none}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">Widescreen Consulting</div><ul className="nav-links">{['Expertise','Case Studies','Insights','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Talk to an Expert</a></nav>
  <div className="hero">
    <div>
      <div className="badge">Global Strategy Partners</div>
      <h1>Strategy that<br/>shapes <span className="amber">markets.</span></h1>
      <p className="sub">We partner with C-suite leaders to solve their most complex challenges — from market entry to full-scale digital transformation.</p>
      <div className="btns"><button className="bp">Start a Conversation</button><button className="bo">Read Case Studies</button></div>
    </div>
    <div className="hero-right rv">
      {PILLARS.map(p=><div key={p.n} className="card"><div className="card-n">{p.n}</div><div className="card-d">{p.d}</div></div>)}
    </div>
  </div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Next Step</div><h2>Ready to transform<br/>your <span className="amber">organisation?</span></h2><button className="bp">Book a Strategy Session</button></div>
  <footer><span>© 2025 Widescreen Consulting</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
