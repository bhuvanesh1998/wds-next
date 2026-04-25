'use client';
import { useEffect } from 'react';
const STATS=[{v:'2,400+',l:'Placements Made'},{v:'98%',l:'Client Retention'},{v:'14 Days',l:'Avg Time-to-Hire'},{v:'40+',l:'Industries Served'}];
const SERVICES=[{i:'🎯',t:'Executive Search',d:'C-suite and director-level placements with rigorous assessment.'},{i:'🌱',t:'Culture Design',d:'Define values and rituals that attract and retain top talent.'},{i:'📋',t:'HR Audits',d:'End-to-end policy review, compliance check, workforce gap analysis.'},{i:'🚀',t:'Onboarding Systems',d:'Structured 90-day journeys that cut first-year attrition by 60%.'},{i:'📊',t:'People Analytics',d:'Data-driven dashboards, attrition models and engagement scores.'},{i:'🤝',t:'DEI Programs',d:'Evidence-based diversity strategies with measurable outcomes.'}];
const TEAM=[{n:'Priya Menon',r:'Managing Director',img:'https://i.pravatar.cc/200?img=47'},{n:'Arjun Kaul',r:'Head of Talent',img:'https://i.pravatar.cc/200?img=52'},{n:'Sofia Cruz',r:'Culture Strategist',img:'https://i.pravatar.cc/200?img=44'},{n:'Rahul Nair',r:'HR Analytics Lead',img:'https://i.pravatar.cc/200?img=68'}];
const REVIEWS=[{n:'Meera Joshi',co:'CTO, FinEdge',q:'They filled 3 senior roles in 12 days. Quality unlike anything we had seen.',img:'https://i.pravatar.cc/80?img=21'},{n:'Samuel Osei',co:'CEO, Buildwise',q:'Our culture score jumped from 3.2 to 4.7 within 6 months. Remarkable.',img:'https://i.pravatar.cc/80?img=33'},{n:'Tanvi Rao',co:'VP People, Klearstack',q:'The onboarding system reduced our 90-day churn by 58%. Transformative.',img:'https://i.pravatar.cc/80?img=5'}];
export default function HRPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Lato:ital,wght@0,300;0,400;0,700;1,300&family=IBM+Plex+Mono:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0e0018;color:#f0e6ff;font-family:'Lato',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(14,0,24,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(139,92,246,.15);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Outfit',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#8B5CF6,#A78BFA);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'IBM Plex Mono',monospace;font-size:.78rem;color:rgba(167,139,250,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#A78BFA}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#7C3AED,#8B5CF6);border-radius:8px;font-family:'Outfit',sans-serif;font-size:.8rem;font-weight:700;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding-left:4rem;padding-right:4rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 50%,rgba(139,92,246,.1),transparent 60%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(139,92,246,.3);border-radius:50px;background:rgba(139,92,246,.07);font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:#A78BFA;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#22C55E;border-radius:50%;animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Outfit',sans-serif;font-size:clamp(3rem,5.5vw,5.5rem);font-weight:800;line-height:.95;letter-spacing:-.03em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#8B5CF6,#C4B5FD);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1.05rem;color:rgba(240,230,255,.55);line-height:1.8;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:10px;font-family:'Outfit',sans-serif;font-weight:700;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(124,58,237,.35)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(139,92,246,.3);border-radius:10px;font-size:.9rem;color:#A78BFA;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#A78BFA}
    .hero-img{border-radius:24px;overflow:hidden;border:1px solid rgba(139,92,246,.15);box-shadow:0 40px 80px rgba(0,0,0,.5)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{background:rgba(139,92,246,.05);border-top:1px solid rgba(139,92,246,.08);border-bottom:1px solid rgba(139,92,246,.08);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center}.stat-v{font-family:'Outfit',sans-serif;font-weight:800;font-size:2.4rem;background:linear-gradient(135deg,#8B5CF6,#C4B5FD);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.3rem}
    .stat-l{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(240,230,255,.4)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(139,92,246,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'IBM Plex Mono',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:#8B5CF6;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#8B5CF6}
    h2{font-family:'Outfit',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .svc{background:rgba(139,92,246,.04);border:1px solid rgba(139,92,246,.1);border-radius:16px;padding:2rem;transition:border-color .3s,transform .3s}.svc:hover{border-color:rgba(139,92,246,.3);transform:translateY(-4px)}
    .svc-i{font-size:2rem;margin-bottom:1rem}.svc-t{font-family:'Outfit',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:.5rem}.svc-d{font-size:.88rem;color:rgba(240,230,255,.5);line-height:1.65}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{text-align:center;transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:1/1;border-radius:16px;overflow:hidden;margin-bottom:1rem;border:2px solid rgba(139,92,246,.15)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Outfit',sans-serif;font-weight:700;margin-bottom:.25rem}
    .team-r{font-family:'IBM Plex Mono',monospace;font-size:.62rem;letter-spacing:.1em;color:rgba(167,139,250,.6);text-transform:uppercase}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(139,92,246,.04);border:1px solid rgba(139,92,246,.1);border-radius:16px;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(139,92,246,.25)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Outfit',sans-serif;font-weight:700;font-size:.9rem}.rev-co{font-family:'IBM Plex Mono',monospace;font-size:.6rem;color:rgba(167,139,250,.5);letter-spacing:.08em}
    .rev-q{font-size:.88rem;color:rgba(240,230,255,.65);line-height:1.7;font-style:italic}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(139,92,246,.12),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(139,92,246,.08);display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:rgba(167,139,250,.35)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner,.svc-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen HR</div><ul className="nav-links">{['Services','Team','Case Studies','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Get a Proposal</a></nav>
  <div className="hero"><div><div className="badge"><span className="dot"/>Trusted by 300+ Growing Companies</div><h1>People-first.<br/><span className="grad">Results-led.</span></h1><p className="sub">We build HR systems that attract exceptional talent, nurture culture, and create workplaces where people do the best work of their lives.</p><div className="btns"><button className="bp">Start a Conversation</button><button className="bo">View Case Studies</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop" alt="HR team"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">What We Do</div><h2 className="rv">HR solutions for <span className="grad">modern organisations</span></h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(139,92,246,.03)'}}><div className="inner"><div className="label rv">Leadership</div><h2 className="rv">Meet the <span className="grad">team</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Testimonials</div><h2 className="rv">What our clients <span className="grad">say</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Let's Talk</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Outfit',sans-serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800}}>Ready to transform <span className="grad">your people strategy?</span></h2><p style={{color:'rgba(240,230,255,.5)',marginBottom:'2rem',maxWidth:480,margin:'0 auto 2rem'}}>Book a free 45-minute strategy call.</p><button className="bp">Book a Free Call</button></div>
  <footer><span>© 2025 Widescreen HR Consulting</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
