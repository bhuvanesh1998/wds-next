'use client';
import { useEffect, useState } from 'react';
const CATS=[{n:'Fresh Produce',i:'🥬',c:'#22C55E',count:'240+ items'},{n:'Dairy & Eggs',i:'🥛',c:'#FBBF24',count:'80+ items'},{n:'Bakery',i:'🍞',c:'#F97316',count:'60+ items'},{n:'Beverages',i:'🧃',c:'#06B6D4',count:'120+ items'},{n:'Snacks',i:'🍿',c:'#EC4899',count:'180+ items'},{n:'Household',i:'🧹',c:'#8B5CF6',count:'90+ items'}];
const DEALS=[{n:'Organic Apples 1kg',p:'₹89',op:'₹140',img:'https://picsum.photos/300/300?random=50',badge:'36% OFF'},{n:'Full Cream Milk 1L',p:'₹62',op:'₹72',img:'https://picsum.photos/300/300?random=51',badge:'14% OFF'},{n:'Sourdough Loaf',p:'₹120',op:'₹160',img:'https://picsum.photos/300/300?random=52',badge:'25% OFF'},{n:'Mixed Nuts 500g',p:'₹299',op:'₹420',img:'https://picsum.photos/300/300?random=53',badge:'29% OFF'}];
const REVIEWS=[{n:'Sunita Sharma',co:'Member since 2022',q:'FreshMart saves me 3 hours every week. The quality is superb and delivery is always on time.',img:'https://i.pravatar.cc/80?img=27'},{n:'Kiran Rao',co:'Family Plan User',q:'The organic produce is genuinely fresh. I cancelled my vegetable vendor the same week I signed up.',img:'https://i.pravatar.cc/80?img=31'},{n:'Anjali Mehta',co:'Premium Member',q:'The app is intuitive and reorders are so easy. Customer service resolved my one query in 2 minutes.',img:'https://i.pravatar.cc/80?img=4'}];
export default function ShoppingPage(){
  const [cart,setCart]=useState(0);
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Quicksand:wght@300;400;500;600&family=Overpass+Mono:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#001a0a;color:#f0fff5;font-family:'Quicksand',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(0,26,10,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(34,197,94,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;background:linear-gradient(90deg,#22C55E,#16A34A);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Overpass Mono',monospace;font-size:.72rem;color:rgba(34,197,94,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#22C55E}
    .nav-right{display:flex;align-items:center;gap:1.5rem}
    .cart-btn{font-family:'Overpass Mono',monospace;font-size:.78rem;color:#22C55E;cursor:pointer;display:flex;align-items:center;gap:.4rem}
    .cart-count{background:#22C55E;color:#001a0a;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700}
    .nav-cta{padding:.45rem 1.4rem;background:#22C55E;border-radius:8px;font-family:'Poppins',sans-serif;font-size:.78rem;font-weight:700;color:#001a0a;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 60%,rgba(34,197,94,.07),transparent 60%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(34,197,94,.25);border-radius:50px;background:rgba(34,197,94,.07);font-family:'Overpass Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:#22C55E;margin-bottom:2rem}
    .offer{background:#22C55E;color:#001a0a;border-radius:4px;padding:.15rem .5rem;font-weight:700}
    h1{font-family:'Poppins',sans-serif;font-size:clamp(3rem,6vw,6rem);font-weight:700;line-height:1;letter-spacing:-.03em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#22C55E,#4ADE80);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(240,255,245,.5);line-height:1.85;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#22C55E,#16A34A);border-radius:10px;font-family:'Poppins',sans-serif;font-weight:700;font-size:.9rem;color:#001a0a;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(34,197,94,.3)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(34,197,94,.25);border-radius:10px;font-size:.9rem;color:#22C55E;background:none;cursor:pointer}.bo:hover{border-color:#22C55E}
    .hero-img{border-radius:20px;overflow:hidden;border:1px solid rgba(34,197,94,.1);box-shadow:0 40px 80px rgba(0,0,0,.5)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{background:rgba(34,197,94,.04);border-top:1px solid rgba(34,197,94,.08);border-bottom:1px solid rgba(34,197,94,.08);padding:2rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Poppins',sans-serif;font-weight:700;font-size:1.8rem;color:#22C55E;margin-bottom:.2rem}
    .stat-l{font-family:'Overpass Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(240,255,245,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(34,197,94,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Overpass Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#22C55E;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#22C55E}
    h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;letter-spacing:-.03em;margin-bottom:3rem}
    .cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .cat{border-radius:16px;padding:1.75rem;display:flex;align-items:center;gap:1.25rem;cursor:pointer;border:1px solid transparent;transition:transform .3s,box-shadow .3s}.cat:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.3)}
    .cat-i{font-size:2.5rem;flex-shrink:0}.cat-n{font-family:'Poppins',sans-serif;font-weight:600;font-size:1rem;margin-bottom:.2rem}.cat-cnt{font-family:'Overpass Mono',monospace;font-size:.62rem;opacity:.5}
    .deals-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
    .deal{background:rgba(34,197,94,.03);border:1px solid rgba(34,197,94,.08);border-radius:12px;overflow:hidden;transition:transform .3s,border-color .3s;cursor:pointer}.deal:hover{transform:translateY(-3px);border-color:rgba(34,197,94,.2)}
    .deal-img{position:relative}.deal-img img{width:100%;height:180px;object-fit:cover;display:block}
    .deal-badge{position:absolute;top:.5rem;right:.5rem;background:#22C55E;color:#001a0a;border-radius:4px;font-family:'Overpass Mono',monospace;font-size:.58rem;font-weight:700;padding:.2rem .5rem}
    .deal-body{padding:1rem}
    .deal-n{font-family:'Quicksand',sans-serif;font-weight:600;font-size:.9rem;margin-bottom:.4rem}
    .deal-prices{display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem}
    .deal-p{font-family:'Overpass Mono',monospace;font-size:.9rem;color:#22C55E;font-weight:700}
    .deal-op{font-family:'Overpass Mono',monospace;font-size:.78rem;color:rgba(240,255,245,.3);text-decoration:line-through}
    .deal-btn{display:block;width:100%;padding:.5rem;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.15);border-radius:6px;font-family:'Quicksand',sans-serif;font-size:.78rem;color:#22C55E;text-align:center;cursor:pointer;transition:background .2s}.deal-btn:hover{background:rgba(34,197,94,.18)}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem}
    .rev{background:rgba(34,197,94,.03);border:1px solid rgba(34,197,94,.08);border-radius:12px;padding:1.5rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(34,197,94,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Poppins',sans-serif;font-weight:600;font-size:.88rem}.rev-co{font-family:'Overpass Mono',monospace;font-size:.58rem;color:rgba(34,197,94,.45)}
    .rev-q{font-size:.85rem;font-weight:300;color:rgba(240,255,245,.6);line-height:1.7}
    .cta-s{padding:7rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(34,197,94,.08),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(34,197,94,.08);display:flex;justify-content:space-between;font-family:'Overpass Mono',monospace;font-size:.7rem;color:rgba(34,197,94,.3)}
    @media(max-width:1024px){.deals-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.cat-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">FreshMart</div><ul className="nav-links">{['Shop','Offers','Locations','About'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><div className="nav-right"><div className="cart-btn" onClick={()=>setCart(c=>c+1)}>🛒<span className="cart-count">{cart}</span></div><a href="#" className="nav-cta">Order Now</a></div></nav>
  <div className="hero"><div><div className="badge"><span className="offer">FREE</span>Delivery on orders over ₹499</div><h1>Fresh. Fast.<br/><span className="grad">Delivered.</span></h1><p className="sub">Your neighbourhood supermart, online. 5,000+ products, same-day delivery, always fresh — guaranteed. Serving 50,000+ happy families.</p><div className="btns"><button className="bp">Shop Now</button><button className="bo">See All Offers</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1542838132-04c2a89f7dc6?w=900&q=80&auto=format&fit=crop" alt="Fresh grocery"/></div></div>
  <div className="stats-bar"><div className="stats-inner"><div className="rv"><div className="stat-v">5,000+</div><div className="stat-l">Products</div></div><div className="rv"><div className="stat-v">2hr</div><div className="stat-l">Express Delivery</div></div><div className="rv"><div className="stat-v">50K+</div><div className="stat-l">Happy Families</div></div><div className="rv"><div className="stat-v">4.8★</div><div className="stat-l">App Rating</div></div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Shop By Category</div><h2 className="rv">What are you <span className="grad">looking for?</span></h2><div className="cat-grid">{CATS.map(c=><div key={c.n} className="cat rv" style={{background:`rgba(${c.c==='#22C55E'?'34,197,94':c.c==='#FBBF24'?'251,191,36':c.c==='#F97316'?'249,115,22':c.c==='#06B6D4'?'6,182,212':c.c==='#EC4899'?'236,72,153':'139,92,246'},.06)`,borderColor:`rgba(${c.c==='#22C55E'?'34,197,94':c.c==='#FBBF24'?'251,191,36':c.c==='#F97316'?'249,115,22':c.c==='#06B6D4'?'6,182,212':c.c==='#EC4899'?'236,72,153':'139,92,246'},.12)`}}><div className="cat-i">{c.i}</div><div><div className="cat-n" style={{color:c.c}}>{c.n}</div><div className="cat-cnt">{c.count}</div></div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(34,197,94,.03)'}}><div className="inner"><div className="label rv">Today's Deals</div><h2 className="rv">Fresh <span className="grad">savings</span> every day</h2><div className="deals-grid">{DEALS.map(d=><div key={d.n} className="deal rv"><div className="deal-img"><img src={d.img} alt={d.n}/><div className="deal-badge">{d.badge}</div></div><div className="deal-body"><div className="deal-n">{d.n}</div><div className="deal-prices"><span className="deal-p">{d.p}</span><span className="deal-op">{d.op}</span></div><div className="deal-btn" onClick={()=>setCart(c=>c+1)}>Add to Cart</div></div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Reviews</div><h2 className="rv">Why 50,000 families <span className="grad">trust us</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Membership</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Poppins',sans-serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700}}>Get <span className="grad">15% off</span> every week</h2><button className="bp">Subscribe & Save</button></div>
  <footer><span>© 2025 FreshMart · Widescreen Shopping</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
