'use client';
import { useEffect, useState } from 'react';
const MENU=[{n:'Classic Smash Burger',p:'$8.99',i:'🍔',hot:true},{n:'Crispy Chicken Wrap',p:'$7.49',i:'🌯',hot:false},{n:'Loaded Cheese Fries',p:'$4.99',i:'🍟',hot:true},{n:'Spicy Chicken Tenders',p:'$8.49',i:'🍗',hot:true},{n:'Veggie Crunch Wrap',p:'$6.99',i:'🥗',hot:false},{n:'Double Choco Shake',p:'$4.49',i:'🥤',hot:false}];
export default function FastFoodPage() {
  const [active,setActive]=useState('Burgers');
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#0c0100;color:#fff8f0;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(12,1,0,.95);backdrop-filter:blur(20px);border-bottom:2px solid rgba(239,68,68,.2);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:900;font-size:1.2rem;letter-spacing:-.03em;background:linear-gradient(90deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(239,68,68,.5);transition:color .2s}.nav-links a:hover{color:#EF4444}
    .nav-order{padding:.5rem 1.4rem;background:#EF4444;border-radius:6px;font-weight:700;font-size:.78rem;color:#fff;animation:pulse-btn 2s infinite}
    @keyframes pulse-btn{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.4)}50%{box-shadow:0 0 0 10px rgba(239,68,68,0)}}
    .hero{min-height:100vh;padding-top:64px;display:flex;align-items:center;position:relative;overflow:hidden}
    .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,rgba(239,68,68,.1) 0%,transparent 50%),radial-gradient(ellipse at 80% 50%,rgba(249,115,22,.08),transparent 60%)}
    .ticker{position:absolute;bottom:0;left:0;right:0;background:#EF4444;padding:.6rem 0;overflow:hidden;white-space:nowrap}
    .ticker-inner{display:inline-flex;gap:4rem;animation:ticker 20s linear infinite}
    @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .ticker-item{font-family:'Syne',sans-serif;font-weight:800;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:#fff}
    .hero-content{position:relative;z-index:1;max-width:1300px;margin:0 auto;padding:0 3rem;display:grid;grid-template-columns:1.2fr 1fr;gap:5rem;align-items:center}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem 1rem;border:2px solid #EF4444;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#EF4444;margin-bottom:1.5rem;background:rgba(239,68,68,.06)}
    h1{font-family:'Syne',sans-serif;font-size:clamp(3.5rem,7vw,8rem);font-weight:900;line-height:.9;letter-spacing:-.05em;margin-bottom:1.5rem;text-transform:uppercase}
    .red{background:linear-gradient(135deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(255,248,240,.5);line-height:1.75;margin-bottom:2.5rem;max-width:440px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:8px;font-weight:800;font-size:.95rem;color:#fff;border:none;cursor:pointer;text-transform:uppercase;letter-spacing:.05em;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-3px);box-shadow:0 20px 40px rgba(239,68,68,.4)}
    .bo{padding:.9rem 2.4rem;border:2px solid rgba(239,68,68,.3);border-radius:8px;font-size:.9rem;color:#EF4444;background:none;cursor:pointer;text-transform:uppercase;font-weight:600;letter-spacing:.05em;transition:border-color .2s}.bo:hover{border-color:#EF4444}
    .hero-visual{position:relative;text-align:center}
    .big-emoji{font-size:12rem;line-height:1;filter:drop-shadow(0 20px 60px rgba(239,68,68,.4));animation:bounce 3s ease-in-out infinite}
    @keyframes bounce{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-15px) rotate(5deg)}}
    .time-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:50px;padding:.4rem 1rem;font-family:'JetBrains Mono',monospace;font-size:.68rem;color:#EF4444;margin-top:1rem}
    .menu-section{padding:7rem 3rem;border-top:1px solid rgba(239,68,68,.08)}
    .inner{max-width:1300px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#EF4444;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EF4444}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1.5rem}
    .cats{display:flex;gap:1rem;margin-bottom:3rem;flex-wrap:wrap}
    .cat{padding:.5rem 1.25rem;border:1px solid rgba(239,68,68,.2);border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.08em;color:rgba(239,68,68,.5);cursor:pointer;transition:all .2s;background:none}
    .cat.active,.cat:hover{background:#EF4444;color:#fff;border-color:#EF4444}
    .menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .menu-item{background:#160000;border:1px solid rgba(239,68,68,.08);border-radius:16px;padding:1.5rem;display:flex;align-items:center;gap:1.25rem;cursor:pointer;transition:transform .3s,border-color .3s}.menu-item:hover{transform:translateY(-3px);border-color:rgba(239,68,68,.25)}
    .mi-i{font-size:2.5rem;flex-shrink:0}
    .mi-n{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:.3rem}
    .mi-p{font-family:'JetBrains Mono',monospace;font-size:.9rem;color:#EF4444}
    .hot-tag{display:inline-block;padding:.15rem .5rem;background:#EF4444;border-radius:3px;font-family:'JetBrains Mono',monospace;font-size:.55rem;font-weight:700;color:#fff;letter-spacing:.08em;margin-left:.5rem;vertical-align:middle}
    .cta-s{padding:7rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(239,68,68,.12),transparent 60%)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(239,68,68,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(239,68,68,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:900px){nav{padding:0 1.25rem}.nav-links{display:none}.hero-content{grid-template-columns:1fr;padding:5rem 1.25rem 4rem;gap:2rem}.big-emoji{font-size:7rem}.menu-section{padding:4rem 1.25rem}.menu-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
    @media(max-width:600px){.menu-grid{grid-template-columns:1fr}}
  `}</style>
  <nav><div className="logo">WDS Grill</div><ul className="nav-links">{['Menu','Deals','Locations','Track Order'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-order">Order Now</a></nav>
  <div className="hero">
    <div className="hero-bg"/>
    <div className="hero-content">
      <div>
        <div className="badge">🔥 Freshly Made to Order</div>
        <h1><span className="red">Ridiculously</span><br/>good food.</h1>
        <p className="sub">Smash burgers, crispy fries, loaded wraps. Made hot, served fast, eaten immediately — or we do it again.</p>
        <div className="btns"><button className="bp">Order Now</button><button className="bo">View Menu</button></div>
      </div>
      <div className="hero-visual rv">
        <div className="big-emoji">🍔</div>
        <div className="time-badge">⚡ Ready in 8–12 mins</div>
      </div>
    </div>
    <div className="ticker"><div className="ticker-inner">{'🍔 Classic Smash · 🍟 Loaded Fries · 🌯 Crispy Wrap · 🥤 Thick Shake · 🍗 Tenders · 🧀 Cheese Pull · '.repeat(4).split('').map((c,i)=><span key={i}>{c}</span>)}</div></div>
  </div>
  <div className="menu-section"><div className="inner"><div className="label rv">Menu</div><h2 className="rv">Hot off the <span className="red">grill</span></h2><div className="cats">{['Burgers','Wraps','Sides','Drinks'].map(c=><button key={c} className={`cat${active===c?' active':''}`} onClick={()=>setActive(c)}>{c}</button>)}</div><div className="menu-grid">{MENU.map(m=><div key={m.n} className="menu-item rv"><div className="mi-i">{m.i}</div><div><div className="mi-n">{m.n}{m.hot&&<span className="hot-tag">HOT</span>}</div><div className="mi-p">{m.p}</div></div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Loyalty</div><h2 style={{marginBottom:'2rem'}}>Buy 5, get <span className="red">1 free</span></h2><button className="bp">Join the Club</button></div>
  <footer><span>© 2025 WDS Grill · Widescreen Fast Food</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
