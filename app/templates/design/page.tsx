'use client';
import { useEffect } from 'react';
const STATS=[{v:'320+',l:'Brands Designed'},{v:'18',l:'Awwwards Won'},{v:'6.2x',l:'Avg Conversion Lift'},{v:'3 Wks',l:'Brand Sprint Delivery'}];
const SERVICES=[{i:'◉',t:'Brand Identity',d:'Logos, color systems, typography and the full visual language of your brand.'},{i:'⬡',t:'UI/UX Design',d:'User research, wireframes, high-fidelity prototypes and design systems.'},{i:'▶',t:'Motion & Animation',d:'Lottie animations, scroll experiences and brand films that stop thumbs.'},{i:'◈',t:'Packaging Design',d:'Shelf-ready packaging with premium finish specifications and dielines.'},{i:'⬜',t:'Design Systems',d:'Figma component libraries, tokens and documentation your team will love.'},{i:'◆',t:'Creative Direction',d:'Art direction, campaign concepts and visual strategy for your next big launch.'}];
const WORK=[{t:'Rebranding · Fintech 2024',c:'Orbit Finance',col:'#EC4899'},{t:'App UI · Health 2024',c:'Pulse Wellness',col:'#F97316'},{t:'Campaign · Fashion 2024',c:'Velvet & Co',col:'#8B5CF6'},{t:'Identity · SaaS 2023',c:'Stackly',col:'#06B6D4'}];
const REVIEWS=[{n:'Ariana Vale',co:'CMO, Orbit Finance',q:'They redefined our brand in 3 weeks. Our NPS went from 42 to 71 post-rebrand. Extraordinary.',img:'https://i.pravatar.cc/80?img=23'},{n:'Leo Martins',co:'Founder, Pulse',q:'The UI they designed converted at 4.1% vs our old 1.8%. Design really does make money.',img:'https://i.pravatar.cc/80?img=17'},{n:'Zara Ahmed',co:'Creative Director, Velvet',q:'They got our brand voice in the first call. The campaign visuals were 100% on-brief every time.',img:'https://i.pravatar.cc/80?img=7'}];
export default function DesignPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0a0008;color:#ffe0f5;font-family:'Nunito',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,0,8,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(236,72,153,.15);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Bebas Neue',sans-serif;font-size:1.4rem;letter-spacing:.12em;background:linear-gradient(90deg,#EC4899,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'DM Mono',monospace;font-size:.75rem;color:rgba(236,72,153,.45);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#EC4899}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#EC4899,#F97316);border-radius:0;font-family:'Bebas Neue',sans-serif;font-size:.9rem;letter-spacing:.1em;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:end;gap:4rem;padding:80px 4rem 4rem;max-width:1400px;margin:0 auto;position:relative}
    .hero-num{position:absolute;top:50%;right:3rem;transform:translateY(-50%);font-family:'Bebas Neue',sans-serif;font-size:22vw;color:rgba(236,72,153,.04);line-height:1;pointer-events:none;user-select:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(236,72,153,.6);margin-bottom:1.5rem;border:1px solid rgba(236,72,153,.2);padding:.3rem .9rem;border-radius:0}
    h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(5rem,10vw,12rem);line-height:.88;letter-spacing:.02em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#EC4899,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1.05rem;font-weight:300;color:rgba(255,224,245,.5);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.6rem;background:linear-gradient(135deg,#EC4899,#F97316);border-radius:0;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(236,72,153,.3)}
    .bo{padding:.9rem 2.6rem;border:1px solid rgba(236,72,153,.3);border-radius:0;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;color:#EC4899;background:none;cursor:pointer}.bo:hover{border-color:#EC4899}
    .hero-img{border-radius:0;overflow:hidden;border:1px solid rgba(236,72,153,.1)}
    .hero-img img{width:100%;height:520px;object-fit:cover;display:block}
    .stats-bar{border-top:2px solid rgba(236,72,153,.2);border-bottom:1px solid rgba(236,72,153,.08);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center}.stat-v{font-family:'Bebas Neue',sans-serif;font-size:3rem;letter-spacing:.05em;background:linear-gradient(135deg,#EC4899,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin-bottom:.3rem}
    .stat-l{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,224,245,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(236,72,153,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#EC4899;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EC4899}
    h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,6vw,6rem);letter-spacing:.03em;line-height:.95;margin-bottom:3rem}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .svc{background:rgba(236,72,153,.03);border:1px solid rgba(236,72,153,.08);border-radius:0;padding:2rem;transition:border-color .3s,transform .3s}.svc:hover{border-color:rgba(236,72,153,.3);transform:translateY(-4px)}
    .svc-i{font-size:1.6rem;margin-bottom:.75rem;color:#EC4899}.svc-t{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.06em;margin-bottom:.4rem}.svc-d{font-size:.88rem;font-weight:300;color:rgba(255,224,245,.45);line-height:1.65}
    .work-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
    .work-card{border-radius:0;overflow:hidden;border:1px solid rgba(236,72,153,.1);transition:transform .3s}.work-card:hover{transform:scale(1.02)}
    .work-img{height:220px;background:linear-gradient(135deg,rgba(236,72,153,.08),rgba(249,115,22,.08));display:flex;align-items:center;justify-content:center}
    .work-img img{width:100%;height:100%;object-fit:cover}
    .work-body{padding:1.25rem;background:rgba(236,72,153,.03)}
    .work-t{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(236,72,153,.5);margin-bottom:.3rem}
    .work-c{font-family:'Bebas Neue',sans-serif;font-size:1.4rem;letter-spacing:.05em}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
    .rev{background:rgba(236,72,153,.03);border:1px solid rgba(236,72,153,.08);border-radius:0;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:0;overflow:hidden;flex-shrink:0;border:1px solid rgba(236,72,153,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.05em}.rev-co{font-family:'DM Mono',monospace;font-size:.58rem;color:rgba(236,72,153,.45)}
    .rev-q{font-size:.88rem;font-weight:300;color:rgba(255,224,245,.6);line-height:1.7}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 80%,rgba(236,72,153,.1),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(236,72,153,.08);display:flex;justify-content:space-between;font-family:'DM Mono',monospace;font-size:.7rem;color:rgba(236,72,153,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.hero-num{display:none}.stats-inner,.svc-grid,.work-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen Design</div><ul className="nav-links">{['Work','Process','Studio','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Start a Project</a></nav>
  <div className="hero"><div><div className="hero-num">W</div><div className="badge">Creative Studio · Est. 2019</div><h1><span className="grad">Design</span><br/>that sells.</h1><p className="sub">We create brands, interfaces and campaigns that people remember — and businesses that convert. No compromises.</p><div className="btns"><button className="bp">Start a Project</button><button className="bo">View Our Work</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop" alt="Design studio"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Services</div><h2 className="rv"><span className="grad">What</span><br/>We Create</h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(236,72,153,.02)'}}><div className="inner"><div className="label rv">Selected Work</div><h2 className="rv"><span className="grad">Recent</span><br/>Projects</h2><div className="work-grid">{WORK.map((w,i)=><div key={w.c} className="work-card rv"><div className="work-img"><img src={`https://picsum.photos/600/300?random=${i+10}`} alt={w.c}/></div><div className="work-body"><div className="work-t">{w.t}</div><div className="work-c" style={{color:w.col}}>{w.c}</div></div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Testimonials</div><h2 className="rv"><span className="grad">Client</span><br/>Stories</h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>New Project</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(3rem,6vw,6rem)',letterSpacing:'.03em'}}><span className="grad">Let's make</span><br/>something iconic.</h2><button className="bp">Get in Touch</button></div>
  <footer><span>© 2025 Widescreen Design Studio</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
