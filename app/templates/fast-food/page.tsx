'use client';
import { useEffect, useState } from 'react';
const MENU=[{n:'Classic Smash Burger',p:'₹249',i:'🍔',hot:true,cal:'680 kcal',img:'https://picsum.photos/360/260?random=60'},{n:'Crispy Chicken Wrap',p:'₹199',i:'🌯',hot:false,cal:'520 kcal',img:'https://picsum.photos/360/260?random=61'},{n:'Loaded Cheese Fries',p:'₹149',i:'🍟',hot:true,cal:'430 kcal',img:'https://picsum.photos/360/260?random=62'},{n:'Spicy Chicken Tenders',p:'₹229',i:'🍗',hot:true,cal:'580 kcal',img:'https://picsum.photos/360/260?random=63'},{n:'Veggie Crunch Wrap',p:'₹179',i:'🥗',hot:false,cal:'420 kcal',img:'https://picsum.photos/360/260?random=64'},{n:'Double Choco Shake',p:'₹129',i:'🥤',hot:false,cal:'620 kcal',img:'https://picsum.photos/360/260?random=65'}];
const STATS=[{v:'< 8min',l:'Average Ready Time'},{v:'₹199',l:'Starting Price'},{v:'4.8★',l:'Customer Rating'},{v:'50K+',l:'Burgers Served'}];
const REVIEWS=[{n:'Amar Singh',co:'Regular at Koramangala',q:'The smash burger is genuinely the best in the city. Crispy edges, juicy centre. I am here 3 times a week.',img:'https://i.pravatar.cc/80?img=34'},{n:'Deepika Nair',co:'Verified Order',q:'Fastest delivery in town. My order was at my door in 22 minutes and still piping hot. Remarkable.',img:'https://i.pravatar.cc/80?img=10'},{n:'Vikram Das',co:'Foodie & Critic',q:'The loaded cheese fries are worth the trip alone. The seasoning is unlike anything I have had before.',img:'https://i.pravatar.cc/80?img=42'}];
export default function FastFoodPage(){
  const [active,setActive]=useState('Burgers');
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,900;1,700&family=Barlow:ital,wght@0,300;0,400;0,500;1,300&family=Share+Tech+Mono&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0c0100;color:#fff8f0;font-family:'Barlow',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(12,1,0,.98);backdrop-filter:blur(20px);border-bottom:2px solid rgba(239,68,68,.2);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:1.5rem;letter-spacing:.06em;text-transform:uppercase;background:linear-gradient(90deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:rgba(239,68,68,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#EF4444}
    .nav-order{padding:.5rem 1.4rem;background:#EF4444;border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;color:#fff;cursor:pointer;animation:pulse-btn 2s infinite}
    @keyframes pulse-btn{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.4)}50%{box-shadow:0 0 0 10px rgba(239,68,68,0)}}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1.1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(239,68,68,.08) 0%,transparent 50%);pointer-events:none}
    .ticker{position:absolute;bottom:0;left:0;right:0;background:#EF4444;padding:.55rem 0;overflow:hidden;white-space:nowrap}
    .ticker-inner{display:inline-flex;gap:3rem;animation:ticker 22s linear infinite}
    @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .ticker-item{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:.82rem;letter-spacing:.12em;text-transform:uppercase;color:#fff}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem 1rem;border:2px solid #EF4444;border-radius:3px;font-family:'Share Tech Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:#EF4444;margin-bottom:1.5rem;background:rgba(239,68,68,.05)}
    h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(4rem,8vw,10rem);font-weight:900;line-height:.88;letter-spacing:.02em;text-transform:uppercase;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1.05rem;font-weight:300;color:rgba(255,248,240,.5);line-height:1.75;margin-bottom:2.5rem;max-width:440px}
    .time-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:50px;padding:.4rem 1rem;font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#EF4444;margin-bottom:2rem}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.6rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;letter-spacing:.08em;text-transform:uppercase;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-3px);box-shadow:0 20px 40px rgba(239,68,68,.4)}
    .bo{padding:.9rem 2.6rem;border:2px solid rgba(239,68,68,.3);border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-size:1rem;letter-spacing:.08em;text-transform:uppercase;color:#EF4444;background:none;cursor:pointer}.bo:hover{border-color:#EF4444}
    .hero-img{border-radius:12px;overflow:hidden;border:1px solid rgba(239,68,68,.1);box-shadow:0 40px 80px rgba(0,0,0,.6)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{border-top:1px solid rgba(239,68,68,.1);border-bottom:1px solid rgba(239,68,68,.08);padding:2rem 4rem;background:rgba(239,68,68,.02)}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:2rem;letter-spacing:.05em;color:#EF4444;text-transform:uppercase;margin-bottom:.2rem}
    .stat-l{font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,248,240,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(239,68,68,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Share Tech Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#EF4444;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EF4444}
    h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(3rem,6vw,6rem);font-weight:900;letter-spacing:.03em;text-transform:uppercase;margin-bottom:1.5rem}
    .cats{display:flex;gap:1rem;margin-bottom:3rem;flex-wrap:wrap}
    .cat{padding:.5rem 1.4rem;border:1px solid rgba(239,68,68,.2);border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-size:.85rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(239,68,68,.5);cursor:pointer;background:none;transition:all .2s}
    .cat.active,.cat:hover{background:#EF4444;color:#fff;border-color:#EF4444}
    .menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .menu-item{background:#160000;border:1px solid rgba(239,68,68,.08);border-radius:10px;overflow:hidden;transition:transform .3s,border-color .3s;cursor:pointer}.menu-item:hover{transform:translateY(-3px);border-color:rgba(239,68,68,.25)}
    .menu-img img{width:100%;height:180px;object-fit:cover;display:block}
    .menu-body{padding:1.25rem}
    .menu-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.4rem}
    .menu-n{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.05rem;letter-spacing:.03em}
    .hot-tag{background:#EF4444;color:#fff;border-radius:3px;font-family:'Share Tech Mono',monospace;font-size:.52rem;font-weight:700;padding:.15rem .5rem;letter-spacing:.06em}
    .menu-cal{font-family:'Share Tech Mono',monospace;font-size:.62rem;color:rgba(255,248,240,.35);margin-bottom:.5rem}
    .menu-p{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1.2rem;letter-spacing:.03em;color:#EF4444}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:#160000;border:1px solid rgba(239,68,68,.08);border-radius:10px;padding:1.5rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
    .rev-img{width:44px;height:44px;border-radius:4px;overflow:hidden;flex-shrink:0;border:1px solid rgba(239,68,68,.15)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;letter-spacing:.03em}.rev-co{font-family:'Share Tech Mono',monospace;font-size:.58rem;color:rgba(239,68,68,.4)}
    .rev-q{font-size:.88rem;font-weight:300;color:rgba(255,248,240,.6);line-height:1.7}
    .cta-s{padding:7rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 80%,rgba(239,68,68,.1),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(239,68,68,.08);display:flex;justify-content:space-between;font-family:'Share Tech Mono',monospace;font-size:.7rem;color:rgba(239,68,68,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 4rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.menu-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
    @media(max-width:600px){.menu-grid{grid-template-columns:1fr}}
  `}</style>
  <nav><div className="logo">WDS Grill</div><ul className="nav-links">{['Menu','Deals','Locations','Track Order'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-order">Order Now</a></nav>
  <div className="hero">
    <div><div className="badge">🔥 Freshly Made to Order</div><div className="time-badge">⚡ Ready in 8–12 minutes</div><h1><span className="grad">Ridiculously</span><br/>good food.</h1><p className="sub">Smash burgers, crispy fries, loaded wraps. Made hot, served fast — or we do it again. No compromises, no excuses.</p><div className="btns"><button className="bp">Order Now</button><button className="bo">View Full Menu</button></div></div>
    <div className="hero-img rv"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80&auto=format&fit=crop" alt="Fast food"/></div>
    <div className="ticker"><div className="ticker-inner">{['🍔 Classic Smash','🍟 Loaded Fries','🌯 Crispy Wrap','🥤 Thick Shake','🍗 Tenders','🧀 Cheese Pull'].concat(['🍔 Classic Smash','🍟 Loaded Fries','🌯 Crispy Wrap','🥤 Thick Shake','🍗 Tenders','🧀 Cheese Pull']).map((t,i)=><span key={i} className="ticker-item">{t}</span>)}</div></div>
  </div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Menu</div><h2 className="rv">Hot off the <span className="grad">grill</span></h2><div className="cats">{['Burgers','Wraps','Sides','Drinks'].map(c=><button key={c} className={`cat${active===c?' active':''}`} onClick={()=>setActive(c)}>{c}</button>)}</div><div className="menu-grid">{MENU.map(m=><div key={m.n} className="menu-item rv"><div className="menu-img"><img src={m.img} alt={m.n}/></div><div className="menu-body"><div className="menu-top"><div className="menu-n">{m.n}</div>{m.hot&&<span className="hot-tag">HOT</span>}</div><div className="menu-cal">{m.cal}</div><div className="menu-p">{m.p}</div></div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(239,68,68,.02)'}}><div className="inner"><div className="label rv">Reviews</div><h2 className="rv">What our <span className="grad">fans say</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Loyalty</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Barlow Condensed',sans-serif",fontSize:'clamp(3rem,6vw,6rem)',fontWeight:900,letterSpacing:'.03em',textTransform:'uppercase'}}>Buy 5, get <span className="grad">1 free</span></h2><button className="bp">Join the Club</button></div>
  <footer><span>© 2025 WDS Grill · Widescreen Fast Food</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
