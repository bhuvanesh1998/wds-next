'use client';
import { useEffect } from 'react';
const STALLS=[{n:'Spice Garden',c:'Indian',i:'🍛',col:'#F97316'},{n:'Sakura Bites',c:'Japanese',i:'🍱',col:'#EC4899'},{n:'La Trattoria',c:'Italian',i:'🍝',col:'#EF4444'},{n:'Dragon Wok',c:'Chinese',i:'🥡',col:'#FBBF24'},{n:'Shawarma King',c:'Middle Eastern',i:'🌯',col:'#22C55E'},{n:'The Burger Co.',c:'American',i:'🍔',col:'#06B6D4'}];
const OFFERS=[{t:'Combo Meal Deal',d:'Any main + drink + dessert for $12.99',tag:'TODAY ONLY'},{t:'Family Feast',d:'4 mains + 4 drinks + 2 desserts',tag:'WEEKEND'},{t:'Loyalty Points',d:'Earn 2x points every Tuesday',tag:'MEMBERS'}];
export default function FoodCourtPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#0a0500;color:#fff8f0;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,5,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(249,115,22,.15);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#F97316,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(249,115,22,.5);transition:color .2s}.nav-links a:hover{color:#F97316}
    .nav-cta{padding:.45rem 1.25rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:8px;font-size:.78rem;font-weight:700;color:#fff}
    .hero{min-height:100vh;padding-top:64px;position:relative;display:flex;align-items:center;overflow:hidden}
    .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(249,115,22,.12),transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(251,191,36,.08),transparent 50%)}
    .floating-emoji{position:absolute;font-size:4rem;opacity:.06;animation:float 6s ease-in-out infinite;pointer-events:none}
    @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(10deg)}}
    .hero-content{position:relative;z-index:1;max-width:1300px;margin:0 auto;padding:0 3rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(249,115,22,.3);border-radius:50px;background:rgba(249,115,22,.08);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#FBBF24;margin-bottom:2rem}
    .live{width:7px;height:7px;background:#22C55E;border-radius:50%;box-shadow:0 0 10px #22C55E;animation:p 1.5s infinite}
    @keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Syne',sans-serif;font-size:clamp(3rem,6vw,6.5rem);font-weight:800;line-height:.95;letter-spacing:-.04em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#F97316,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(255,248,240,.5);line-height:1.8;margin-bottom:2.5rem;max-width:420px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:10px;font-weight:700;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(249,115,22,.4)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(249,115,22,.25);border-radius:10px;font-size:.9rem;color:#F97316;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#F97316}
    .hero-visual{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .food-card{background:rgba(249,115,22,.06);border:1px solid rgba(249,115,22,.1);border-radius:16px;padding:1.25rem;text-align:center;transition:transform .3s,border-color .3s;animation:float 5s ease-in-out infinite}.food-card:hover{transform:scale(1.05);border-color:rgba(249,115,22,.3)}.food-card:nth-child(2){animation-delay:1s}.food-card:nth-child(3){animation-delay:2s}.food-card:nth-child(4){animation-delay:.5s}
    .fc-i{font-size:2.5rem;margin-bottom:.5rem}
    .fc-n{font-family:'Syne',sans-serif;font-weight:700;font-size:.85rem;color:#fff8f0}
    .fc-c{font-size:.72rem;color:rgba(249,115,22,.6);margin-top:.2rem}
    .stalls{padding:6rem 3rem;border-top:1px solid rgba(249,115,22,.08)}
    .inner{max-width:1300px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#F97316;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F97316}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .stall-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .stall{border-radius:20px;padding:2rem;border:1px solid transparent;transition:transform .3s,box-shadow .3s;cursor:pointer}.stall:hover{transform:translateY(-6px)}
    .stall-header{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}
    .stall-i{font-size:2.2rem}
    .stall-n{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem}
    .stall-c{font-size:.75rem;color:rgba(255,248,240,.4);margin-top:.2rem;font-family:'JetBrains Mono',monospace;letter-spacing:.05em}
    .stall-tag{display:inline-block;padding:.2rem .65rem;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:700;letter-spacing:.08em;color:#fff;margin-top:.75rem}
    .offers{padding:5rem 3rem;background:rgba(249,115,22,.03);border-top:1px solid rgba(249,115,22,.06)}
    .offer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .offer{background:rgba(249,115,22,.05);border:1px solid rgba(249,115,22,.1);border-radius:16px;padding:1.5rem;transition:border-color .3s}.offer:hover{border-color:rgba(249,115,22,.3)}
    .offer-tag{display:inline-block;padding:.2rem .7rem;background:#F97316;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:700;color:#fff;margin-bottom:.75rem}
    .offer-t{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:.5rem}
    .offer-d{font-size:.85rem;color:rgba(255,248,240,.5);line-height:1.6}
    .cta-s{padding:7rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(249,115,22,.1),transparent 60%)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(249,115,22,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(249,115,22,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:900px){nav{padding:0 1.25rem}.nav-links{display:none}.hero-content{grid-template-columns:1fr;padding:5rem 1.25rem 2rem;gap:2rem}.hero-visual{display:none}.stalls,.offers{padding:4rem 1.25rem}.stall-grid,.offer-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <span className="floating-emoji" style={{top:'15%',left:'5%',animationDelay:'0s'}}>🍕</span>
  <span className="floating-emoji" style={{top:'60%',left:'90%',animationDelay:'2s'}}>🍜</span>
  <span className="floating-emoji" style={{top:'80%',left:'15%',animationDelay:'4s'}}>🥗</span>
  <nav><div className="logo">Widescreen Food Court</div><ul className="nav-links">{['Stalls','Menu','Offers','Find Us'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Order Now</a></nav>
  <div className="hero">
    <div className="hero-bg"/>
    <div className="hero-content">
      <div>
        <div className="badge"><span className="live"/>Open Now · 10am – 10pm Daily</div>
        <h1>World<br/>flavours,<br/><span className="grad">one roof.</span></h1>
        <p className="sub">20+ cuisine stalls, craft drinks, live cooking stations. The ultimate food destination in the heart of the city.</p>
        <div className="btns"><button className="bp">Explore Menu</button><button className="bo">Get Directions</button></div>
      </div>
      <div className="hero-visual rv">
        {STALLS.slice(0,4).map(s=><div key={s.n} className="food-card"><div className="fc-i">{s.i}</div><div className="fc-n">{s.n}</div><div className="fc-c">{s.c}</div></div>)}
      </div>
    </div>
  </div>
  <div className="stalls"><div className="inner"><div className="label rv">Our Stalls</div><h2 className="rv">20+ cuisines, <span className="grad">endless choice</span></h2><div className="stall-grid">{STALLS.map(s=><div key={s.n} className="stall rv" style={{background:`rgba(${s.col==='#F97316'?'249,115,22':s.col==='#EC4899'?'236,72,153':s.col==='#EF4444'?'239,68,68':s.col==='#FBBF24'?'251,191,36':s.col==='#22C55E'?'34,197,94':'6,182,212'},.05)`,borderColor:`rgba(${s.col==='#F97316'?'249,115,22':s.col==='#EC4899'?'236,72,153':s.col==='#EF4444'?'239,68,68':s.col==='#FBBF24'?'251,191,36':s.col==='#22C55E'?'34,197,94':'6,182,212'},.12)`}}><div className="stall-header"><span className="stall-i">{s.i}</span><div><div className="stall-n">{s.n}</div><div className="stall-c">{s.c}</div></div></div><div className="stall-tag" style={{background:s.col}}>View Menu</div></div>)}</div></div></div>
  <div className="offers"><div className="inner"><div className="label rv">Deals</div><h2 className="rv">Today's <span className="grad">best offers</span></h2><div className="offer-grid">{OFFERS.map(o=><div key={o.t} className="offer rv"><div className="offer-tag">{o.tag}</div><div className="offer-t">{o.t}</div><div className="offer-d">{o.d}</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Download App</div><h2 style={{marginBottom:'2rem'}}>Order from your <span className="grad">table</span></h2><button className="bp">Get the App</button></div>
  <footer><span>© 2025 Widescreen Food Court</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
