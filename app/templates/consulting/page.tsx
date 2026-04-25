'use client';
import { useEffect } from 'react';
const STATS=[{v:'$2.4B',l:'Value Created for Clients'},{v:'150+',l:'Transformation Projects'},{v:'23',l:'Countries Served'},{v:'12 Wks',l:'Avg Engagement Length'}];
const SERVICES=[{i:'♟️',t:'Growth Strategy',d:'Market entry, competitive positioning and revenue acceleration roadmaps.'},{i:'🔄',t:'Business Transformation',d:'Operating model redesign, M&A integration and post-merger synergies.'},{i:'💡',t:'Innovation Labs',d:'Structured ideation, rapid prototyping and new venture incubation.'},{i:'📉',t:'Cost Optimisation',d:'Zero-based budgeting, process automation and procurement restructuring.'},{i:'🌍',t:'Market Expansion',d:'International growth strategies with localisation and regulatory roadmaps.'},{i:'🤝',t:'Board Advisory',d:'Governance reviews, succession planning and investor relations support.'}];
const TEAM=[{n:'Vikrant Malhotra',r:'Managing Partner',img:'https://i.pravatar.cc/200?img=62'},{n:'Claire Dubois',r:'Strategy Partner',img:'https://i.pravatar.cc/200?img=39'},{n:'Arun Krishnan',r:'Transformation Lead',img:'https://i.pravatar.cc/200?img=55'},{n:'Lena Fischer',r:'Innovation Partner',img:'https://i.pravatar.cc/200?img=48'}];
const REVIEWS=[{n:'Mark Holt',co:'CEO, VentureHive',q:'Their market entry strategy opened three new verticals generating $40M in year one. Transformative.',img:'https://i.pravatar.cc/80?img=15'},{n:'Shreya Agarwal',co:'CFO, NexaGroup',q:'The cost optimisation program saved ₹12Cr without a single redundancy. Smart and humane.',img:'https://i.pravatar.cc/80?img=26'},{n:'Pascal Renard',co:'Chairman, EuroBase',q:'Their board governance review completely reset how we make strategic decisions. Invaluable.',img:'https://i.pravatar.cc/80?img=43'}];
export default function ConsultingPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Raleway:wght@300;400;500;600&family=Share+Tech+Mono&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#06040a;color:#f4f0e8;font-family:'Raleway',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,4,10,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(212,180,94,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:1.25rem;color:#D4B45E;font-style:italic;letter-spacing:.02em}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Raleway',sans-serif;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(212,180,94,.45);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#D4B45E}
    .nav-cta{padding:.45rem 1.6rem;border:1px solid rgba(212,180,94,.4);border-radius:2px;font-family:'Raleway',sans-serif;font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#D4B45E;cursor:pointer;transition:background .2s}.nav-cta:hover{background:rgba(212,180,94,.08)}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(212,180,94,.2),transparent)}
    .badge{display:inline-flex;align-items:center;gap:.6rem;font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(212,180,94,.6);margin-bottom:2rem}
    .badge::before{content:'';width:30px;height:1px;background:rgba(212,180,94,.4)}
    h1{font-family:'Cormorant Garamond',serif;font-size:clamp(3.5rem,6vw,7rem);font-weight:600;line-height:.95;letter-spacing:-.01em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#D4B45E,#F0D080);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(244,240,232,.5);line-height:1.9;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.6rem;background:linear-gradient(135deg,#B8952A,#D4B45E);border-radius:2px;font-family:'Raleway',sans-serif;font-weight:600;font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;color:#06040a;border:none;cursor:pointer;transition:transform .2s}.bp:hover{transform:translateY(-2px)}
    .bo{padding:.9rem 2.6rem;border:1px solid rgba(212,180,94,.3);border-radius:2px;font-family:'Raleway',sans-serif;font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;color:#D4B45E;background:none;cursor:pointer}.bo:hover{border-color:#D4B45E}
    .hero-img{border-radius:4px;overflow:hidden;border:1px solid rgba(212,180,94,.1);box-shadow:0 40px 80px rgba(0,0,0,.6)}
    .hero-img img{width:100%;height:520px;object-fit:cover;display:block}
    .stats-bar{border-top:1px solid rgba(212,180,94,.08);border-bottom:1px solid rgba(212,180,94,.08);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center;padding:0 1.5rem;border-right:1px solid rgba(212,180,94,.08)}.stat:last-child{border:none}
    .stat-v{font-family:'Cormorant Garamond',serif;font-weight:700;font-size:2.4rem;color:#D4B45E;margin-bottom:.3rem}
    .stat-l{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(244,240,232,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(212,180,94,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:#D4B45E;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#D4B45E}
    h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2.5rem,4vw,4rem);font-weight:600;letter-spacing:-.01em;margin-bottom:3rem;line-height:1.1}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .svc{background:rgba(212,180,94,.02);border:1px solid rgba(212,180,94,.08);border-radius:2px;padding:2rem;transition:border-color .3s,transform .3s}.svc:hover{border-color:rgba(212,180,94,.25);transform:translateY(-4px)}
    .svc-i{font-size:1.8rem;margin-bottom:1rem}.svc-t{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:1.2rem;margin-bottom:.5rem}.svc-d{font-size:.88rem;font-weight:300;color:rgba(244,240,232,.45);line-height:1.7}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:3/4;border-radius:2px;overflow:hidden;margin-bottom:1rem;border:1px solid rgba(212,180,94,.1);filter:grayscale(30%)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:1rem;margin-bottom:.25rem}
    .team-r{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.1em;color:rgba(212,180,94,.55);text-transform:uppercase}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(212,180,94,.02);border:1px solid rgba(212,180,94,.08);border-radius:2px;padding:2rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1.25rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid rgba(212,180,94,.2);filter:grayscale(20%)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:1rem}.rev-co{font-family:'Share Tech Mono',monospace;font-size:.58rem;color:rgba(212,180,94,.45);letter-spacing:.08em}
    .rev-q{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(244,240,232,.65);line-height:1.75;font-style:italic}
    .cta-s{padding:8rem 4rem;text-align:center;border-top:1px solid rgba(212,180,94,.08)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(212,180,94,.06);display:flex;justify-content:space-between;font-family:'Share Tech Mono',monospace;font-size:.7rem;color:rgba(212,180,94,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner,.svc-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen Consulting</div><ul className="nav-links">{['Practice','Insights','Careers','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Speak to a Partner</a></nav>
  <div className="hero"><div><div className="badge">Strategic Management Consulting</div><h1>Strategy that<br/><span className="grad">moves</span><br/>markets.</h1><p className="sub">We work with ambitious leadership teams to define direction, accelerate growth and build organisations built to outlast disruption.</p><div className="btns"><button className="bp">Speak to a Partner</button><button className="bo">Our Thinking</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop" alt="Strategy meeting"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Practice Areas</div><h2 className="rv">Where we <span className="grad">create impact</span></h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(212,180,94,.02)'}}><div className="inner"><div className="label rv">Our Partners</div><h2 className="rv">Led by the <span className="grad">world's best</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Client Voices</div><h2 className="rv">Results they <span className="grad">couldn't ignore</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>New Engagement</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(2.5rem,4vw,4rem)',fontWeight:600}}>Ready to build something <span className="grad">extraordinary?</span></h2><button className="bp" style={{marginTop:'.5rem'}}>Begin a Conversation</button></div>
  <footer><span>© 2025 Widescreen Management Consulting</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
