'use client';
import { useEffect } from 'react';
export default function DesignPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  const works=[{t:'Brand Identity',c:'#EC4899'},{t:'Design Systems',c:'#F97316'},{t:'Motion Design',c:'#A78BFA'},{t:'Product UX',c:'#06B6D4'},{t:'Packaging',c:'#22C55E'},{t:'Web Design',c:'#FBBF24'}];
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#0d000a;color:#fff5fd;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(13,0,10,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(236,72,153,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;background:linear-gradient(90deg,#EC4899,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(236,72,153,.5);transition:color .2s}.nav-links a:hover{color:#EC4899}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#EC4899,#F97316);border-radius:50px;font-size:.78rem;font-weight:700;color:#fff}
    .hero{min-height:100vh;padding-top:64px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding-left:2rem;padding-right:2rem;position:relative;overflow:hidden}
    .hero::before{content:'DESIGN';position:absolute;font-family:'Syne',sans-serif;font-weight:800;font-size:22vw;color:rgba(236,72,153,.04);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;white-space:nowrap;letter-spacing:-.05em}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.2rem;border:1px solid rgba(236,72,153,.25);border-radius:50px;background:rgba(236,72,153,.06);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#EC4899;margin-bottom:2.5rem;animation:fu .8s .2s both}
    .dot{width:6px;height:6px;background:#EC4899;border-radius:50%;box-shadow:0 0 10px #EC4899;animation:p 2s infinite}
    @keyframes p{0%,100%{opacity:1}50%{opacity:.2}}@keyframes fu{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
    h1{font-family:'Syne',sans-serif;font-size:clamp(3rem,7vw,7rem);font-weight:800;line-height:.95;letter-spacing:-.04em;margin-bottom:2rem;animation:fu .9s .3s both}
    .pink{background:linear-gradient(135deg,#EC4899,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1.05rem;color:rgba(255,245,253,.5);max-width:460px;line-height:1.75;margin-bottom:3rem;animation:fu .8s .5s both}
    .btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;animation:fu .8s .7s both}
    .bp{padding:.9rem 2.5rem;background:linear-gradient(135deg,#EC4899,#F97316);border-radius:50px;font-weight:700;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 20px 50px rgba(236,72,153,.35)}
    .bo{padding:.9rem 2.5rem;border:1px solid rgba(236,72,153,.3);border-radius:50px;font-size:.9rem;color:#EC4899;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#EC4899}
    .works{padding:6rem 3rem;border-top:1px solid rgba(236,72,153,.08)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#EC4899;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EC4899}
    h2{font-family:'Syne',sans-serif;font-size:clamp(2rem,4vw,3.5rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .works-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .work{border-radius:16px;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;cursor:pointer;transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden}
    .work::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.3)}
    .work span{position:relative;z-index:1;color:#fff}
    .work:hover{transform:scale(1.03);box-shadow:0 24px 60px rgba(0,0,0,.5)}
    .cta-s{padding:8rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(236,72,153,.1),transparent 60%)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(236,72,153,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(236,72,153,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.works{padding:4rem 1.25rem}.works-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">Widescreen Design</div><ul className="nav-links">{['Work','Process','Studio','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Let's Create</a></nav>
  <div className="hero">
    <div className="badge"><span className="dot"/>Award-Winning Design Studio</div>
    <h1>We make<br/><span className="pink">brands</span><br/>unforgettable.</h1>
    <p className="sub">Widescreen Design crafts visual identities, design systems, and motion that make your brand impossible to ignore.</p>
    <div className="btns"><button className="bp">See Our Work</button><button className="bo">Start a Project</button></div>
  </div>
  <div className="works">
    <div className="inner">
      <div className="label rv">Disciplines</div>
      <h2 className="rv">What we <span className="pink">create</span></h2>
      <div className="works-grid">
        {works.map(w=><div key={w.t} className="work rv" style={{background:`linear-gradient(135deg,${w.c}22,${w.c}44)`}}><span>{w.t}</span></div>)}
      </div>
    </div>
  </div>
  <div className="cta-s rv">
    <div className="label" style={{justifyContent:'center'}}>Next</div>
    <h2>Ready to look <span className="pink">incredible?</span></h2>
    <div style={{marginTop:'2rem'}}><button className="bp">Start a Project</button></div>
  </div>
  <footer><span>© 2025 Widescreen Design Consulting</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
