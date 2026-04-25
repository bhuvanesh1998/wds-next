'use client';
import { useEffect } from 'react';
const STATS=[{v:'10B+',l:'Data Points Processed'},{v:'3.8x',l:'Avg ROI Delivered'},{v:'200ms',l:'Dashboard Load Time'},{v:'99.9%',l:'Platform Uptime'}];
const SERVICES=[{i:'📊',t:'Business Intelligence',d:'Live dashboards connecting your ERP, CRM and marketing stack into one source of truth.'},{i:'🤖',t:'Predictive Modelling',d:'ML models that forecast churn, demand and revenue with 94% accuracy.'},{i:'🗃️',t:'Data Engineering',d:'Scalable pipelines on Snowflake, BigQuery or Redshift — built to last.'},{i:'👁️',t:'Customer Analytics',d:'360-degree customer views, cohort analysis and LTV segmentation.'},{i:'🌐',t:'Real-time Streaming',d:'Kafka and Flink powered streams for sub-second decision making.'},{i:'🔐',t:'Data Governance',d:'GDPR-compliant data catalogues, lineage tracking and access control.'}];
const TEAM=[{n:'Dr. Aditi Sharma',r:'Chief Data Scientist',img:'https://i.pravatar.cc/200?img=36'},{n:'Kiran Mehta',r:'ML Engineering Lead',img:'https://i.pravatar.cc/200?img=65'},{n:'James Liu',r:'Data Architecture',img:'https://i.pravatar.cc/200?img=53'},{n:'Pooja Varma',r:'Analytics Consultant',img:'https://i.pravatar.cc/200?img=41'}];
const REVIEWS=[{n:'Alok Sinha',co:'CTO, RetailX',q:'Their demand forecasting model cut our overstock by 34% in the first quarter. Exceptional ROI.',img:'https://i.pravatar.cc/80?img=14'},{n:'Nadia Petrov',co:'Head of Growth, Fintro',q:'The churn prediction model alone retained 1,200 customers in the first month. Incredible work.',img:'https://i.pravatar.cc/80?img=29'},{n:'Sujay Pillai',co:'VP Data, Orbis',q:'We went from 3-day reporting cycles to real-time dashboards. It changed how we make decisions.',img:'https://i.pravatar.cc/80?img=57'}];
export default function AnalyticsPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=Inter:wght@300;400;500&family=Fira+Code:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#00080f;color:#e0f7ff;font-family:'Inter',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,8,15,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(6,182,212,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.1rem;color:#06B6D4;letter-spacing:-.02em}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Fira Code',monospace;font-size:.75rem;color:rgba(6,182,212,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#06B6D4}
    .nav-cta{padding:.45rem 1.4rem;background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.3);border-radius:6px;font-family:'Fira Code',monospace;font-size:.75rem;color:#06B6D4;cursor:pointer;transition:background .2s}.nav-cta:hover{background:rgba(6,182,212,.2)}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem 1rem;border:1px solid rgba(6,182,212,.25);border-radius:4px;background:rgba(6,182,212,.06);font-family:'Fira Code',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:#06B6D4;margin-bottom:2rem}
    .pulse{width:7px;height:7px;background:#06B6D4;border-radius:50%;animation:pulse 2s infinite}@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(6,182,212,.4)}50%{box-shadow:0 0 0 8px rgba(6,182,212,0)}}
    h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(2.8rem,5vw,5rem);font-weight:700;line-height:1;letter-spacing:-.04em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#06B6D4,#67E8F9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(224,247,255,.5);line-height:1.85;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#0891B2,#06B6D4);border-radius:6px;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(6,182,212,.3)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(6,182,212,.25);border-radius:6px;font-size:.9rem;color:#06B6D4;background:none;cursor:pointer}.bo:hover{border-color:#06B6D4}
    .hero-img{border-radius:12px;overflow:hidden;border:1px solid rgba(6,182,212,.12);box-shadow:0 0 80px rgba(6,182,212,.1)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{border-top:1px solid rgba(6,182,212,.08);border-bottom:1px solid rgba(6,182,212,.08);padding:2.5rem 4rem;background:rgba(6,182,212,.03)}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center}.stat-v{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:2.2rem;color:#06B6D4;margin-bottom:.3rem}
    .stat-l{font-family:'Fira Code',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(224,247,255,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(6,182,212,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Fira Code',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#06B6D4;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#06B6D4}
    h2{font-family:'Space Grotesk',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;letter-spacing:-.03em;margin-bottom:3rem}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .svc{background:rgba(6,182,212,.03);border:1px solid rgba(6,182,212,.08);border-radius:10px;padding:1.75rem;transition:border-color .3s,transform .3s}.svc:hover{border-color:rgba(6,182,212,.25);transform:translateY(-3px)}
    .svc-i{font-size:1.8rem;margin-bottom:.75rem}.svc-t{font-family:'Space Grotesk',sans-serif;font-weight:600;margin-bottom:.4rem}.svc-d{font-size:.85rem;color:rgba(224,247,255,.45);line-height:1.65}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:1/1;border-radius:10px;overflow:hidden;margin-bottom:.9rem;border:1px solid rgba(6,182,212,.1)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.9rem;margin-bottom:.2rem}
    .team-r{font-family:'Fira Code',monospace;font-size:.6rem;letter-spacing:.08em;color:rgba(6,182,212,.55);text-transform:uppercase}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
    .rev{background:rgba(6,182,212,.03);border:1px solid rgba(6,182,212,.08);border-radius:10px;padding:1.5rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
    .rev-img{width:40px;height:40px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid rgba(6,182,212,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.88rem}.rev-co{font-family:'Fira Code',monospace;font-size:.58rem;color:rgba(6,182,212,.5);letter-spacing:.06em}
    .rev-q{font-size:.85rem;color:rgba(224,247,255,.6);line-height:1.7}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 80%,rgba(6,182,212,.08),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(6,182,212,.06);display:flex;justify-content:space-between;font-family:'Fira Code',monospace;font-size:.7rem;color:rgba(6,182,212,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:240px}.stats-inner,.svc-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen Analytics</div><ul className="nav-links">{['Platform','Solutions','Pricing','Docs'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Start Free Trial</a></nav>
  <div className="hero"><div><div className="badge"><span className="pulse"/>Live Data Intelligence Platform</div><h1>Turn data into<br/><span className="grad">decisions.</span></h1><p className="sub">Enterprise analytics that connects every data source, surfaces real-time insights and powers ML models that actually get deployed.</p><div className="btns"><button className="bp">Start Free Trial</button><button className="bo">See a Demo</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop" alt="Analytics dashboard"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Capabilities</div><h2 className="rv">Everything you need to <span className="grad">go data-first</span></h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(6,182,212,.02)'}}><div className="inner"><div className="label rv">Our Experts</div><h2 className="rv">The <span className="grad">science team</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Customer Stories</div><h2 className="rv">Outcomes that <span className="grad">speak for themselves</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Get Started</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Space Grotesk',sans-serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700}}>Start making <span className="grad">smarter decisions today</span></h2><button className="bp" style={{marginTop:'.5rem'}}>Request a Demo</button></div>
  <footer><span>© 2025 Widescreen Analytics Platform</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
