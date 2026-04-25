'use client';
import { useEffect } from 'react';
const PROJECTS=[{t:'Orbit Finance Rebrand',c:'Fintech · Brand Identity · 2024',img:'https://picsum.photos/700/460?random=20',col:'#F97316'},{t:'Pulse Health App',c:'Healthcare · UI/UX Design · 2024',img:'https://picsum.photos/700/460?random=21',col:'#22C55E'},{t:'Stackly SaaS Dashboard',c:'B2B SaaS · Product Design · 2023',img:'https://picsum.photos/700/460?random=22',col:'#8B5CF6'},{t:'Velvet Campaign',c:'Fashion · Creative Direction · 2023',img:'https://picsum.photos/700/460?random=23',col:'#EC4899'},{t:'NovaTech Design System',c:'Enterprise · Design Systems · 2023',img:'https://picsum.photos/700/460?random=24',col:'#06B6D4'},{t:'Arcadia Motion Brand',c:'E-commerce · Motion Design · 2022',img:'https://picsum.photos/700/460?random=25',col:'#F59E0B'}];
const SKILLS=[{n:'Brand Identity',p:95},{n:'UI/UX Design',p:92},{n:'Motion Design',p:85},{n:'Design Systems',p:90},{n:'Creative Direction',p:88},{n:'User Research',p:80}];
const REVIEWS=[{n:'Priya Seth',co:'CEO, Orbit Finance',q:'Alex redefined our brand identity in 3 weeks. Our customer trust scores are up 34% since launch.',img:'https://i.pravatar.cc/80?img=28'},{n:'Tom Aldridge',co:'Founder, Stackly',q:'The design system Alex built saved our team 12 hours per sprint. A genuine force multiplier.',img:'https://i.pravatar.cc/80?img=16'},{n:'Nadia Kross',co:'Art Director, Velvet',q:'Working with Alex is like having a creative director and strategist in one. Rare combination.',img:'https://i.pravatar.cc/80?img=8'}];
export default function PortfolioPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;1,200&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#060402;color:#f5ede0;font-family:'Josefin Sans',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,4,2,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(249,115,22,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Fraunces',serif;font-weight:600;font-size:1.2rem;color:#F97316;font-style:italic}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Josefin Sans',sans-serif;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;font-weight:300;color:rgba(249,115,22,.45);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#F97316}
    .nav-cta{padding:.45rem 1.4rem;border:1px solid rgba(249,115,22,.4);border-radius:2px;font-family:'Josefin Sans',sans-serif;font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:#F97316;cursor:pointer;transition:background .2s}.nav-cta:hover{background:rgba(249,115,22,.08)}
    .hero{min-height:100vh;padding-top:64px;display:flex;flex-direction:column;justify-content:flex-end;padding:64px 4rem 5rem;max-width:1400px;margin:0 auto;position:relative}
    .hero-num{position:absolute;top:50%;right:4rem;transform:translateY(-50%);font-family:'Fraunces',serif;font-size:26vw;font-weight:700;color:rgba(249,115,22,.04);line-height:1;pointer-events:none;user-select:none;font-style:italic}
    .badge{font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(249,115,22,.5);margin-bottom:1.5rem}
    h1{font-family:'Fraunces',serif;font-size:clamp(4rem,9vw,10rem);font-weight:700;line-height:.9;letter-spacing:-.02em;margin-bottom:2rem;font-style:italic}
    .grad{background:linear-gradient(135deg,#F97316,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .hero-meta{display:flex;align-items:flex-end;justify-content:space-between;gap:3rem;flex-wrap:wrap}
    p.sub{font-size:1rem;font-weight:200;color:rgba(245,237,224,.5);line-height:1.85;max-width:420px;letter-spacing:.03em}
    .btns{display:flex;gap:1rem;flex-wrap:wrap;flex-shrink:0}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:2px;font-family:'Josefin Sans',sans-serif;font-weight:400;font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:#fff;border:none;cursor:pointer;transition:transform .2s}.bp:hover{transform:translateY(-2px)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(249,115,22,.3);border-radius:2px;font-family:'Josefin Sans',sans-serif;font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:#F97316;background:none;cursor:pointer}.bo:hover{border-color:#F97316}
    .section{padding:7rem 4rem;border-top:1px solid rgba(249,115,22,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#F97316;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F97316}
    h2{font-family:'Fraunces',serif;font-size:clamp(2.5rem,5vw,5rem);font-weight:600;letter-spacing:-.02em;margin-bottom:3rem;font-style:italic}
    .proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .proj{border-radius:4px;overflow:hidden;border:1px solid rgba(249,115,22,.1);transition:transform .3s,box-shadow .3s;cursor:pointer}.proj:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.5)}
    .proj-img{height:220px;overflow:hidden}.proj-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.proj:hover .proj-img img{transform:scale(1.05)}
    .proj-body{padding:1.25rem;background:rgba(249,115,22,.03)}
    .proj-t{font-family:'Fraunces',serif;font-weight:600;font-size:1rem;margin-bottom:.3rem}
    .proj-c{font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.12em;color:rgba(245,237,224,.4);text-transform:uppercase}
    .skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
    .skill{display:flex;flex-direction:column;gap:.6rem}
    .skill-header{display:flex;justify-content:space-between;align-items:center}
    .skill-n{font-family:'Josefin Sans',sans-serif;font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;font-weight:400}
    .skill-p{font-family:'Space Mono',monospace;font-size:.65rem;color:#F97316}
    .skill-bar{height:3px;background:rgba(249,115,22,.12);border-radius:2px;overflow:hidden}
    .skill-fill{height:100%;background:linear-gradient(90deg,#F97316,#FB923C);border-radius:2px;transition:width 1s var(--ease)}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(249,115,22,.03);border:1px solid rgba(249,115,22,.08);border-radius:4px;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(249,115,22,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Fraunces',serif;font-weight:600;font-size:.95rem}.rev-co{font-family:'Space Mono',monospace;font-size:.58rem;color:rgba(249,115,22,.45)}
    .rev-q{font-family:'Fraunces',serif;font-size:.9rem;color:rgba(245,237,224,.6);line-height:1.75;font-style:italic}
    .cta-s{padding:8rem 4rem;text-align:center;border-top:1px solid rgba(249,115,22,.06)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(249,115,22,.06);display:flex;justify-content:space-between;font-family:'Space Mono',monospace;font-size:.7rem;color:rgba(249,115,22,.3)}
    @media(max-width:900px){.hero{padding:5rem 1.5rem 4rem}.hero-num{display:none}.hero-meta{flex-direction:column;align-items:flex-start}.proj-grid{grid-template-columns:1fr 1fr}.skills-grid{grid-template-columns:1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Alex Chen</div><ul className="nav-links">{['Work','About','Process','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Hire Me</a></nav>
  <div className="hero"><div className="hero-num">06</div><div className="badge">Product Designer & Creative Director · 6 years</div><h1>I craft<br/><span className="grad">digital</span><br/>experiences.</h1><div className="hero-meta"><p className="sub">Turning complex problems into elegant, revenue-generating interfaces. Currently open to senior design roles and select freelance projects.</p><div className="btns"><button className="bp">View My Work</button><button className="bo">Download CV</button></div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Selected Work</div><h2 className="rv">Recent <span className="grad">projects</span></h2><div className="proj-grid">{PROJECTS.map(p=><div key={p.t} className="proj rv"><div className="proj-img"><img src={p.img} alt={p.t}/></div><div className="proj-body"><div className="proj-t" style={{color:p.col}}>{p.t}</div><div className="proj-c">{p.c}</div></div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(249,115,22,.02)'}}><div className="inner"><div className="label rv">Expertise</div><h2 className="rv">Skills &amp; <span className="grad">capabilities</span></h2><div className="skills-grid">{SKILLS.map(s=><div key={s.n} className="skill rv"><div className="skill-header"><span className="skill-n">{s.n}</span><span className="skill-p">{s.p}%</span></div><div className="skill-bar"><div className="skill-fill" style={{width:`${s.p}%`}}/></div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Social Proof</div><h2 className="rv">What clients <span className="grad">say</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Available for work</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Fraunces',serif",fontSize:'clamp(2.5rem,5vw,5rem)',fontWeight:600,fontStyle:'italic'}}>Let's create something <span className="grad">remarkable</span></h2><div className="btns" style={{justifyContent:'center',marginTop:'1rem'}}><button className="bp">Get In Touch</button><button className="bo">View LinkedIn</button></div></div>
  <footer><span>© 2025 Alex Chen · Product Designer</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
