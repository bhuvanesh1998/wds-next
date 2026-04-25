'use client';
import { useEffect } from 'react';
const STALLS=[{n:'Spice Garden',c:'Authentic Indian',i:'🍛',col:'#F97316',seats:40,rating:'4.8'},{n:'Sakura Bites',c:'Japanese Fusion',i:'🍱',col:'#EC4899',seats:24,rating:'4.9'},{n:'La Trattoria',c:'Italian Kitchen',i:'🍝',col:'#EF4444',seats:36,rating:'4.7'},{n:'Dragon Wok',c:'Pan-Asian',i:'🥡',col:'#FBBF24',seats:30,rating:'4.8'},{n:'Shawarma Palace',c:'Middle Eastern',i:'🌯',col:'#22C55E',seats:20,rating:'4.6'},{n:'The Burger Co.',c:'American Grill',i:'🍔',col:'#06B6D4',seats:28,rating:'4.9'}];
const OFFERS=[{t:'Combo Meal Deal',d:'Any main + drink + dessert for ₹299',tag:'TODAY ONLY'},{t:'Family Feast',d:'4 mains + 4 drinks + 2 desserts for ₹999',tag:'WEEKEND'},{t:'Loyalty Points',d:'Earn 2x points every Tuesday at any stall',tag:'MEMBERS'},{t:'Happy Hours',d:'20% off all beverages 3pm – 6pm daily',tag:'DAILY'}];
const REVIEWS=[{n:'Rohit Kumar',co:'Regular Visitor',q:'The Spice Garden dal makhani is the best I have had outside of a 5-star. The food court is spotlessly clean.',img:'https://i.pravatar.cc/80?img=24'},{n:'Sarah Thomas',co:'Food Blogger',q:'Six cuisines under one roof and every single one is exceptional. La Trattoria pizza is worth the visit alone.',img:'https://i.pravatar.cc/80?img=30'},{n:'Amitesh Jain',co:'Office Crowd',q:'We bring the entire team here for Friday lunch. The variety means everyone is happy. Brilliant concept.',img:'https://i.pravatar.cc/80?img=20'}];
export default function FoodCourtPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Mulish:ital,wght@0,300;0,400;0,600;1,300&family=Courier+Prime:ital,wght@0,400;0,700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0a0500;color:#fff8f0;font-family:'Mulish',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,5,0,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(249,115,22,.15);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Righteous',sans-serif;font-size:1.3rem;letter-spacing:.05em;background:linear-gradient(90deg,#F97316,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Courier Prime',monospace;font-size:.78rem;color:rgba(249,115,22,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#F97316}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:8px;font-family:'Righteous',sans-serif;font-size:.85rem;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(249,115,22,.1),transparent 55%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(249,115,22,.3);border-radius:50px;background:rgba(249,115,22,.07);font-family:'Courier Prime',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:#FBBF24;margin-bottom:2rem}
    .live{width:7px;height:7px;background:#22C55E;border-radius:50%;box-shadow:0 0 10px #22C55E;animation:p 1.5s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Righteous',sans-serif;font-size:clamp(3rem,6vw,7rem);line-height:.92;letter-spacing:.02em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#F97316,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(255,248,240,.5);line-height:1.85;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#F97316,#EA580C);border-radius:10px;font-family:'Righteous',sans-serif;font-size:.95rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(249,115,22,.4)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(249,115,22,.25);border-radius:10px;font-size:.9rem;color:#F97316;background:none;cursor:pointer}.bo:hover{border-color:#F97316}
    .hero-img{border-radius:20px;overflow:hidden;border:1px solid rgba(249,115,22,.1);box-shadow:0 40px 80px rgba(0,0,0,.6)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{background:rgba(249,115,22,.04);border-top:1px solid rgba(249,115,22,.08);border-bottom:1px solid rgba(249,115,22,.08);padding:2rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Righteous',sans-serif;font-size:2rem;color:#F97316;margin-bottom:.2rem}
    .stat-l{font-family:'Courier Prime',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,248,240,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(249,115,22,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Courier Prime',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#F97316;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F97316}
    h2{font-family:'Righteous',sans-serif;font-size:clamp(2.5rem,5vw,5rem);letter-spacing:.02em;margin-bottom:3rem}
    .stall-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .stall{border-radius:20px;padding:1.75rem;border:1px solid transparent;transition:transform .3s,box-shadow .3s;cursor:pointer}.stall:hover{transform:translateY(-6px)}
    .stall-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}
    .stall-left{display:flex;align-items:center;gap:.9rem}
    .stall-i{font-size:2rem}
    .stall-n{font-family:'Righteous',sans-serif;font-size:1rem;letter-spacing:.03em}
    .stall-c{font-family:'Courier Prime',monospace;font-size:.62rem;opacity:.5;letter-spacing:.06em;margin-top:.15rem}
    .stall-rating{font-family:'Courier Prime',monospace;font-size:.75rem;color:#FBBF24}
    .stall-meta{display:flex;gap:1rem}
    .stall-m{font-family:'Courier Prime',monospace;font-size:.62rem;color:rgba(255,248,240,.4);letter-spacing:.05em}
    .offers-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
    .offer{background:rgba(249,115,22,.05);border:1px solid rgba(249,115,22,.1);border-radius:16px;padding:1.75rem;display:flex;gap:1.25rem;align-items:flex-start;transition:border-color .3s}.offer:hover{border-color:rgba(249,115,22,.3)}
    .offer-tag{background:#F97316;color:#fff;border-radius:4px;font-family:'Courier Prime',monospace;font-size:.58rem;font-weight:700;padding:.2rem .65rem;white-space:nowrap;flex-shrink:0;margin-top:.2rem;letter-spacing:.08em}
    .offer-t{font-family:'Righteous',sans-serif;font-size:1rem;letter-spacing:.02em;margin-bottom:.4rem}
    .offer-d{font-size:.85rem;font-weight:300;color:rgba(255,248,240,.5);line-height:1.6}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(249,115,22,.04);border:1px solid rgba(249,115,22,.08);border-radius:16px;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(249,115,22,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Righteous',sans-serif;font-size:.95rem}.rev-co{font-family:'Courier Prime',monospace;font-size:.6rem;color:rgba(249,115,22,.45)}
    .rev-q{font-size:.88rem;font-weight:300;color:rgba(255,248,240,.6);line-height:1.7}
    .cta-s{padding:7rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(249,115,22,.1),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(249,115,22,.08);display:flex;justify-content:space-between;font-family:'Courier Prime',monospace;font-size:.72rem;color:rgba(249,115,22,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.stall-grid{grid-template-columns:1fr 1fr}.offers-grid{grid-template-columns:1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">WDS Food Court</div><ul className="nav-links">{['Stalls','Menu','Offers','Find Us'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Order Now</a></nav>
  <div className="hero"><div><div className="badge"><span className="live"/>Open Now · 10am – 10pm Daily</div><h1>World flavours,<br/><span className="grad">one roof.</span></h1><p className="sub">20+ cuisine stalls, craft drinks, live cooking stations and a 500-seat dining area. The ultimate food destination in the heart of the city.</p><div className="btns"><button className="bp">Explore Menu</button><button className="bo">Get Directions</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop" alt="Food court"/></div></div>
  <div className="stats-bar"><div className="stats-inner"><div className="rv"><div className="stat-v">20+</div><div className="stat-l">Cuisine Stalls</div></div><div className="rv"><div className="stat-v">500</div><div className="stat-l">Dining Seats</div></div><div className="rv"><div className="stat-v">4.8★</div><div className="stat-l">Avg Rating</div></div><div className="rv"><div className="stat-v">₹150</div><div className="stat-l">Avg Meal Cost</div></div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Our Stalls</div><h2 className="rv">20+ cuisines, <span className="grad">endless choice</span></h2><div className="stall-grid">{STALLS.map(s=><div key={s.n} className="stall rv" style={{background:`rgba(${s.col==='#F97316'?'249,115,22':s.col==='#EC4899'?'236,72,153':s.col==='#EF4444'?'239,68,68':s.col==='#FBBF24'?'251,191,36':s.col==='#22C55E'?'34,197,94':'6,182,212'},.05)`,borderColor:`rgba(${s.col==='#F97316'?'249,115,22':s.col==='#EC4899'?'236,72,153':s.col==='#EF4444'?'239,68,68':s.col==='#FBBF24'?'251,191,36':s.col==='#22C55E'?'34,197,94':'6,182,212'},.12)`}}><div className="stall-top"><div className="stall-left"><span className="stall-i">{s.i}</span><div><div className="stall-n" style={{color:s.col}}>{s.n}</div><div className="stall-c">{s.c}</div></div></div><div className="stall-rating">★ {s.rating}</div></div><div className="stall-meta"><span className="stall-m">🪑 {s.seats} seats</span><span className="stall-m">Live Cooking</span></div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(249,115,22,.03)'}}><div className="inner"><div className="label rv">Deals</div><h2 className="rv">Today's <span className="grad">best offers</span></h2><div className="offers-grid">{OFFERS.map(o=><div key={o.t} className="offer rv"><div className="offer-tag">{o.tag}</div><div><div className="offer-t">{o.t}</div><div className="offer-d">{o.d}</div></div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Reviews</div><h2 className="rv">What our <span className="grad">diners say</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Download App</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Righteous',sans-serif",fontSize:'clamp(2.5rem,5vw,5rem)',letterSpacing:'.02em'}}>Order from your <span className="grad">table</span></h2><button className="bp">Get the App — It's Free</button></div>
  <footer><span>© 2025 Widescreen Food Court</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
