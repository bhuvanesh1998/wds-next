'use client';
import { useEffect } from 'react';
const CATS=[{n:'Fresh Produce',i:'🥬',c:'#22C55E'},{n:'Dairy & Eggs',i:'🥛',c:'#FBBF24'},{n:'Bakery',i:'🍞',c:'#F97316'},{n:'Beverages',i:'🧃',c:'#06B6D4'},{n:'Snacks',i:'🍿',c:'#EC4899'},{n:'Household',i:'🧹',c:'#8B5CF6'}];
export default function ShoppingPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#001a0a;color:#f0fff5;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,26,10,.9);backdrop-filter:blur(20px);border-bottom:1px solid rgba(34,197,94,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#22C55E,#16A34A);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(34,197,94,.5);transition:color .2s}.nav-links a:hover{color:#22C55E}
    .nav-cta{padding:.45rem 1.25rem;background:#22C55E;border-radius:8px;font-size:.78rem;font-weight:700;color:#000}
    .hero{min-height:100vh;padding-top:64px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:64px 2rem 4rem;position:relative;overflow:hidden}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 60%,rgba(34,197,94,.08),transparent 65%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(34,197,94,.25);border-radius:50px;background:rgba(34,197,94,.07);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#22C55E;margin-bottom:2rem}
    .offer{background:#22C55E;color:#000;border-radius:4px;padding:.15rem .5rem;font-weight:700}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,6vw,6rem);font-weight:800;line-height:1;letter-spacing:-.04em;margin-bottom:1.5rem}
    .green{background:linear-gradient(135deg,#22C55E,#4ADE80);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(240,255,245,.5);line-height:1.8;margin-bottom:3rem;max-width:460px}
    .btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#22C55E,#16A34A);border-radius:10px;font-weight:700;font-size:.9rem;color:#000;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(34,197,94,.3)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(34,197,94,.25);border-radius:10px;font-size:.9rem;color:#22C55E;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#22C55E}
    .cats{padding:6rem 3rem;border-top:1px solid rgba(34,197,94,.08)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#22C55E;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#22C55E}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .cat{border-radius:20px;padding:2rem;display:flex;align-items:center;gap:1rem;cursor:pointer;transition:transform .3s,box-shadow .3s;border:1px solid transparent}.cat:hover{transform:translateY(-4px)}
    .cat-i{font-size:2.5rem}
    .cat-n{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem}
    .cta-s{padding:7rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(34,197,94,.1),transparent 60%)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(34,197,94,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(34,197,94,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{padding:5rem 1.25rem 3rem}.cats{padding:4rem 1.25rem}.cat-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">FreshMart</div><ul className="nav-links">{['Shop','Offers','Locations','About'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Order Now</a></nav>
  <div className="hero">
    <div className="badge"><span className="offer">FREE</span>Delivery on orders over $30</div>
    <h1>Fresh. Fast.<br/><span className="green">Delivered.</span></h1>
    <p className="sub">Your neighbourhood supermart, online. 5,000+ products, same-day delivery, always fresh — guaranteed.</p>
    <div className="btns"><button className="bp">Shop Now</button><button className="bo">See All Offers</button></div>
  </div>
  <div className="cats"><div className="inner"><div className="label rv">Shop By Category</div><h2 className="rv">What are you <span className="green">looking for?</span></h2><div className="cat-grid">{CATS.map(c=><div key={c.n} className="cat rv" style={{background:`rgba(${c.c==='#22C55E'?'34,197,94':c.c==='#FBBF24'?'251,191,36':c.c==='#F97316'?'249,115,22':c.c==='#06B6D4'?'6,182,212':c.c==='#EC4899'?'236,72,153':'139,92,246'},.06)`,borderColor:`rgba(${c.c==='#22C55E'?'34,197,94':c.c==='#FBBF24'?'251,191,36':c.c==='#F97316'?'249,115,22':c.c==='#06B6D4'?'6,182,212':c.c==='#EC4899'?'236,72,153':'139,92,246'},.12)`}}><div className="cat-i">{c.i}</div><div className="cat-n">{c.n}</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Join</div><h2 style={{marginBottom:'2rem'}}>Get <span className="green">15% off</span> every week</h2><button className="bp">Subscribe & Save</button></div>
  <footer><span>© 2025 FreshMart · Widescreen Shopping</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
