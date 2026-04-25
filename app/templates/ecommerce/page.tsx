'use client';
import { useEffect, useState } from 'react';
const PRODUCTS=[{n:'AirPod Max Pro',p:'$349',op:'$449',tag:'SALE',img:'https://picsum.photos/400/400?random=30',c:'#EF4444'},{n:'Leather Slim Wallet',p:'$79',op:'',tag:'BESTSELLER',img:'https://picsum.photos/400/400?random=31',c:'#F97316'},{n:'Noise-X Headphones',p:'$199',op:'$260',tag:'30% OFF',img:'https://picsum.photos/400/400?random=32',c:'#8B5CF6'},{n:'Ultra Smart Watch',p:'$449',op:'',tag:'NEW',img:'https://picsum.photos/400/400?random=33',c:'#06B6D4'},{n:'Wireless Charger Pro',p:'$59',op:'$79',tag:'DEAL',img:'https://picsum.photos/400/400?random=34',c:'#22C55E'},{n:'Carbon Fibre Case',p:'$39',op:'',tag:'HOT',img:'https://picsum.photos/400/400?random=35',c:'#FBBF24'}];
const STATS=[{v:'50K+',l:'Happy Customers'},{v:'4.9★',l:'Average Rating'},{v:'Free',l:'Shipping on $50+'},{v:'30 Days',l:'Free Returns'}];
const REVIEWS=[{n:'Aditya Kumar',co:'Verified Buyer',q:'The AirPod Max Pro is genuinely better than the original. Build quality is superb and delivery was next day.',img:'https://i.pravatar.cc/80?img=13'},{n:'Preethi Nair',co:'Verified Buyer',q:'Ordered the slim wallet and it is absolutely stunning. The leather quality at this price is unmatched.',img:'https://i.pravatar.cc/80?img=22'},{n:'Chris Roberts',co:'Verified Buyer',q:'The smart watch tracks everything accurately. Battery lasts 8 days. Couldn\'t be happier.',img:'https://i.pravatar.cc/80?img=46'}];
export default function EcommercePage(){
  const [cart,setCart]=useState(0);
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Rubik:ital,wght@0,300;0,400;0,500;1,300&family=Inconsolata:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0d0000;color:#fff5f5;font-family:'Rubik',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(13,0,0,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(239,68,68,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Anton',sans-serif;font-size:1.4rem;letter-spacing:.08em;background:linear-gradient(90deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Rubik',sans-serif;font-size:.85rem;color:rgba(239,68,68,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#EF4444}
    .nav-right{display:flex;align-items:center;gap:1.5rem}
    .cart-btn{font-family:'Inconsolata',monospace;font-size:.82rem;color:#EF4444;cursor:pointer;display:flex;align-items:center;gap:.4rem}
    .cart-count{background:#EF4444;color:#fff;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:6px;font-family:'Rubik',sans-serif;font-size:.82rem;font-weight:500;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:conic-gradient(from 180deg at 80% 50%,rgba(239,68,68,.06),transparent 50%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(239,68,68,.25);border-radius:50px;background:rgba(239,68,68,.06);font-family:'Inconsolata',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#EF4444;margin-bottom:2rem}
    .pct{background:#EF4444;color:#fff;border-radius:4px;padding:.15rem .5rem;font-weight:700}
    h1{font-family:'Anton',sans-serif;font-size:clamp(3.5rem,7vw,8rem);line-height:.9;letter-spacing:.02em;margin-bottom:1.5rem;text-transform:uppercase}
    .grad{background:linear-gradient(135deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(255,245,245,.5);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:8px;font-family:'Rubik',sans-serif;font-weight:500;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(239,68,68,.35)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(239,68,68,.25);border-radius:8px;font-size:.9rem;color:#EF4444;background:none;cursor:pointer}.bo:hover{border-color:#EF4444}
    .hero-img{border-radius:16px;overflow:hidden;border:1px solid rgba(239,68,68,.1);box-shadow:0 40px 80px rgba(0,0,0,.6);animation:float 4s ease-in-out infinite}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{border-top:1px solid rgba(239,68,68,.08);border-bottom:1px solid rgba(239,68,68,.08);padding:2rem 4rem;background:rgba(239,68,68,.02)}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:.05em;color:#EF4444;margin-bottom:.2rem}
    .stat-l{font-family:'Inconsolata',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,245,245,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(239,68,68,.06)}
    .inner{max-width:1300px;margin:0 auto}
    .label{font-family:'Inconsolata',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:#EF4444;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EF4444}
    h2{font-family:'Anton',sans-serif;font-size:clamp(2.5rem,5vw,5rem);letter-spacing:.03em;text-transform:uppercase;margin-bottom:3rem}
    .prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .prod{background:#180000;border:1px solid rgba(239,68,68,.08);border-radius:12px;overflow:hidden;transition:transform .3s,border-color .3s;cursor:pointer}.prod:hover{transform:translateY(-4px);border-color:rgba(239,68,68,.25)}
    .prod-img{position:relative;overflow:hidden}.prod-img img{width:100%;height:220px;object-fit:cover;transition:transform .5s}.prod:hover .prod-img img{transform:scale(1.05)}
    .prod-tag{position:absolute;top:.75rem;left:.75rem;padding:.2rem .7rem;border-radius:4px;font-family:'Inconsolata',monospace;font-size:.58rem;font-weight:700;letter-spacing:.08em;color:#fff}
    .prod-body{padding:1.25rem}
    .prod-n{font-family:'Rubik',sans-serif;font-weight:500;margin-bottom:.5rem}
    .prod-prices{display:flex;align-items:center;gap:.6rem;margin-bottom:1rem}
    .prod-p{font-family:'Inconsolata',monospace;font-size:1rem;color:#EF4444;font-weight:700}
    .prod-op{font-family:'Inconsolata',monospace;font-size:.82rem;color:rgba(255,245,245,.3);text-decoration:line-through}
    .prod-btn{display:block;width:100%;padding:.6rem;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.15);border-radius:6px;font-family:'Rubik',sans-serif;font-size:.82rem;color:#EF4444;text-align:center;cursor:pointer;transition:background .2s}.prod-btn:hover{background:rgba(239,68,68,.2)}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:#180000;border:1px solid rgba(239,68,68,.08);border-radius:12px;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(239,68,68,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-stars{color:#FBBF24;font-size:.85rem;margin-bottom:.3rem}
    .rev-n{font-family:'Rubik',sans-serif;font-weight:500;font-size:.9rem}.rev-co{font-family:'Inconsolata',monospace;font-size:.6rem;color:rgba(239,68,68,.4)}
    .rev-q{font-size:.88rem;font-weight:300;color:rgba(255,245,245,.6);line-height:1.7}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(239,68,68,.1),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(239,68,68,.06);display:flex;justify-content:space-between;font-family:'Inconsolata',monospace;font-size:.72rem;color:rgba(239,68,68,.3)}
    @media(max-width:1024px){.prod-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">ShopWide</div><ul className="nav-links">{['Products','Deals','Categories','Track Order'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><div className="nav-right"><div className="cart-btn" onClick={()=>setCart(c=>c+1)}>🛒<span className="cart-count">{cart}</span></div><a href="#" className="nav-cta">Shop Now</a></div></nav>
  <div className="hero"><div><div className="badge"><span className="pct">FLASH SALE</span>Up to 50% off today only</div><h1><span className="grad">Premium</span><br/>gear.<br/>Better prices.</h1><p className="sub">Top-tier electronics, accessories and lifestyle products. Free shipping on orders over $50. 30-day no-questions-asked returns.</p><div className="btns"><button className="bp">Shop the Sale</button><button className="bo">Browse All</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop" alt="Shopping"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Trending Now</div><h2 className="rv"><span className="grad">Hot</span> Products</h2><div className="prod-grid">{PRODUCTS.map(p=><div key={p.n} className="prod rv"><div className="prod-img"><img src={p.img} alt={p.n}/><div className="prod-tag" style={{background:p.c}}>{p.tag}</div></div><div className="prod-body"><div className="prod-n">{p.n}</div><div className="prod-prices"><span className="prod-p">{p.p}</span>{p.op&&<span className="prod-op">{p.op}</span>}</div><div className="prod-btn" onClick={()=>setCart(c=>c+1)}>Add to Cart</div></div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(239,68,68,.02)'}}><div className="inner"><div className="label rv">Reviews</div><h2 className="rv"><span className="grad">What</span> Buyers Say</h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-stars">★★★★★</div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Newsletter</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Anton',sans-serif",fontSize:'clamp(2.5rem,5vw,5rem)',letterSpacing:'.03em',textTransform:'uppercase'}}>Get <span className="grad">10% off</span> your first order</h2><button className="bp">Subscribe & Save</button></div>
  <footer><span>© 2025 ShopWide · Widescreen Ecommerce</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
