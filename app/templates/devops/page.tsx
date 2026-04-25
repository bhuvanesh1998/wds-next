'use client';
import { useEffect, useState } from 'react';
const STATS=[{v:'99.99%',l:'Uptime SLA'},{v:'< 4min',l:'Mean Deploy Time'},{v:'800+',l:'Pipelines Managed'},{v:'Zero',l:'Production Incidents (Q1)'}];
const SERVICES=[{i:'🔁',t:'CI/CD Pipelines',d:'GitHub Actions, GitLab CI and Jenkins pipelines that ship code in minutes, not days.'},{i:'☁️',t:'Cloud Infrastructure',d:'AWS, GCP and Azure IaC with Terraform and Pulumi — scalable by design.'},{i:'🐳',t:'Container Orchestration',d:'Kubernetes clusters, Helm charts and service mesh architectures at scale.'},{i:'🔐',t:'DevSecOps',d:'Security scanning, secrets management and SAST/DAST integrated into every build.'},{i:'📈',t:'Observability',d:'Prometheus, Grafana, Datadog dashboards and on-call runbooks from day one.'},{i:'🤖',t:'Platform Engineering',d:'Internal developer portals, golden paths and self-service infrastructure tools.'}];
const TEAM=[{n:'Rohan Verma',r:'Head of Platform Eng',img:'https://i.pravatar.cc/200?img=67'},{n:'Sara Chen',r:'Cloud Architect',img:'https://i.pravatar.cc/200?img=32'},{n:'Dev Anand',r:'SRE Lead',img:'https://i.pravatar.cc/200?img=56'},{n:'Mia Torres',r:'Security Engineer',img:'https://i.pravatar.cc/200?img=45'}];
const REVIEWS=[{n:'Harish Suri',co:'CTO, Scalepath',q:'They migrated our monolith to microservices with zero downtime over a weekend. Unbelievable team.',img:'https://i.pravatar.cc/80?img=18'},{n:'Lin Wei',co:'VP Eng, Krypto',q:'Deploy frequency went from weekly to 40x daily after our CI/CD overhaul. Massive productivity unlock.',img:'https://i.pravatar.cc/80?img=35'},{n:'Ananya Patel',co:'CTO, Zestful',q:'The observability stack they set up caught a silent failure that would have cost us $200K. Invaluable.',img:'https://i.pravatar.cc/80?img=9'}];
const LOGS=['$ kubectl get nodes --all-namespaces','✓ All 12 nodes Ready','$ terraform plan -out=infra.tfplan','✓ 0 to add, 3 to change, 0 to destroy','$ docker build -t app:v2.4.1 .','✓ Build complete in 38s','$ helm upgrade --install api ./charts/api','✓ Release "api" deployed in 41s','$ prometheus query: up{job="api"}','✓ 100% targets healthy'];
export default function DevOpsPage(){
  const [logIdx,setLogIdx]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setLogIdx(i=>(i+1)%LOGS.length),1600);return()=>clearInterval(t);},[]);
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech:wght@400&family=Roboto+Mono:wght@300;400;500&family=VT323&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#000d00;color:#00ff88;font-family:'Roboto Mono',monospace;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,13,0,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,255,136,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Share Tech',sans-serif;font-size:1.15rem;letter-spacing:.1em;color:#00ff88}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Roboto Mono',monospace;font-size:.75rem;color:rgba(0,255,136,.4);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#00ff88}
    .nav-cta{padding:.4rem 1.3rem;border:1px solid #00ff88;border-radius:3px;font-family:'Roboto Mono',monospace;font-size:.72rem;color:#000d00;background:#00ff88;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto}
    .badge{display:inline-flex;align-items:center;gap:.6rem;font-family:'Roboto Mono',monospace;font-size:.65rem;letter-spacing:.12em;color:rgba(0,255,136,.6);margin-bottom:2rem}
    .online{width:8px;height:8px;background:#00ff88;border-radius:50%;animation:blink .8s infinite}@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Share Tech',sans-serif;font-size:clamp(3rem,6vw,6.5rem);line-height:.95;letter-spacing:.02em;margin-bottom:1.5rem;text-transform:uppercase}
    .grad{color:#00ff88;text-shadow:0 0 40px rgba(0,255,136,.4)}
    p.sub{font-family:'Roboto Mono',monospace;font-size:.88rem;color:rgba(0,255,136,.5);line-height:1.9;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:#00ff88;border-radius:3px;font-family:'Roboto Mono',monospace;font-weight:500;font-size:.85rem;color:#000d00;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(0,255,136,.3)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(0,255,136,.3);border-radius:3px;font-size:.85rem;color:#00ff88;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#00ff88}
    .terminal{background:#000500;border:1px solid rgba(0,255,136,.2);border-radius:8px;overflow:hidden;box-shadow:0 0 60px rgba(0,255,136,.08)}
    .term-bar{background:rgba(0,255,136,.05);border-bottom:1px solid rgba(0,255,136,.1);padding:.6rem 1rem;display:flex;align-items:center;gap:.5rem}
    .term-dot{width:10px;height:10px;border-radius:50%;background:rgba(0,255,136,.2)}
    .term-title{font-family:'Roboto Mono',monospace;font-size:.65rem;color:rgba(0,255,136,.4);letter-spacing:.1em;margin-left:.5rem}
    .term-body{padding:1.5rem;min-height:380px;display:flex;flex-direction:column;gap:.6rem}
    .term-line{font-family:'VT323',monospace;font-size:1.1rem;color:#00ff88;animation:fadein .3s ease}
    .term-line.dim{color:rgba(0,255,136,.5)}@keyframes fadein{from{opacity:0}to{opacity:1}}
    .stats-bar{border-top:1px solid rgba(0,255,136,.08);border-bottom:1px solid rgba(0,255,136,.08);padding:2.5rem 4rem;background:rgba(0,255,136,.02)}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center}.stat-v{font-family:'Share Tech',sans-serif;font-size:2rem;letter-spacing:.05em;color:#00ff88;margin-bottom:.3rem;text-shadow:0 0 20px rgba(0,255,136,.3)}
    .stat-l{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(0,255,136,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(0,255,136,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#00ff88;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'//';color:rgba(0,255,136,.4)}
    h2{font-family:'Share Tech',sans-serif;font-size:clamp(2rem,4vw,3.5rem);letter-spacing:.04em;text-transform:uppercase;margin-bottom:3rem}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .svc{background:rgba(0,255,136,.02);border:1px solid rgba(0,255,136,.08);border-radius:4px;padding:1.75rem;transition:border-color .3s,box-shadow .3s}.svc:hover{border-color:rgba(0,255,136,.3);box-shadow:0 0 30px rgba(0,255,136,.05)}
    .svc-i{font-size:1.6rem;margin-bottom:.75rem}.svc-t{font-family:'Share Tech',sans-serif;font-size:1rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.4rem}.svc-d{font-size:.8rem;color:rgba(0,255,136,.45);line-height:1.7}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:1/1;border-radius:4px;overflow:hidden;margin-bottom:.9rem;border:1px solid rgba(0,255,136,.12);filter:grayscale(60%) sepia(20%) hue-rotate(80deg)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Share Tech',sans-serif;font-size:.95rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.2rem}
    .team-r{font-family:'Roboto Mono',monospace;font-size:.6rem;letter-spacing:.08em;color:rgba(0,255,136,.5)}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
    .rev{background:rgba(0,255,136,.02);border:1px solid rgba(0,255,136,.08);border-radius:4px;padding:1.5rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
    .rev-img{width:40px;height:40px;border-radius:2px;overflow:hidden;flex-shrink:0;border:1px solid rgba(0,255,136,.15);filter:grayscale(50%) sepia(20%) hue-rotate(80deg)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Share Tech',sans-serif;font-size:.9rem;letter-spacing:.05em;text-transform:uppercase}.rev-co{font-family:'Roboto Mono',monospace;font-size:.58rem;color:rgba(0,255,136,.4)}
    .rev-q{font-size:.82rem;color:rgba(0,255,136,.55);line-height:1.7}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 80%,rgba(0,255,136,.06),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(0,255,136,.06);display:flex;justify-content:space-between;font-family:'Roboto Mono',monospace;font-size:.68rem;color:rgba(0,255,136,.25)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.terminal{min-height:auto}.stats-inner,.svc-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">WIDESCREEN_OPS</div><ul className="nav-links">{['Platform','Services','Case Studies','Blog'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Get Audit</a></nav>
  <div className="hero">
    <div><div className="badge"><span className="online"/>All Systems Operational</div><h1>Ship faster.<br/><span className="grad">Break nothing.</span></h1><p className="sub">// Elite DevOps engineering team. CI/CD, cloud infrastructure, platform engineering and SRE — done right from day one.</p><div className="btns"><button className="bp">Get a Free Audit</button><button className="bo">View Services</button></div></div>
    <div className="terminal rv"><div className="term-bar"><span className="term-dot"/><span className="term-dot"/><span className="term-dot"/><span className="term-title">widescreen-ops — production</span></div><div className="term-body">{LOGS.slice(0,logIdx+1).map((l,i)=><div key={i} className={`term-line${i<logIdx?' dim':''}`}>{l}</div>)}</div></div>
  </div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Services</div><h2 className="rv">What we <span className="grad">engineer</span></h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(0,255,136,.01)'}}><div className="inner"><div className="label rv">// Team</div><h2 className="rv">The engineers <span className="grad">behind the magic</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">// Testimonials</div><h2 className="rv">Clients who <span className="grad">shipped faster</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">// "{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center',fontFamily:"'Roboto Mono',monospace"}}>// next step</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Share Tech',sans-serif",fontSize:'clamp(2rem,4vw,3.5rem)',textTransform:'uppercase',letterSpacing:'.04em'}}>Let's <span className="grad">build your platform</span></h2><button className="bp">Schedule a Call</button></div>
  <footer><span>© 2025 Widescreen DevOps · All systems nominal</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
