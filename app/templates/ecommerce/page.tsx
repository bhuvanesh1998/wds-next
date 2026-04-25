'use client';
import { useEffect } from 'react';
const PRODUCTS=[{n:'Wireless Pro Max',p:'$299',tag:'NEW',c:'#EF4444'},{n:'Leather Wallet',p:'$79',tag:'BESTSELLER',c:'#F97316'},{n:'Noise Cancelling',p:'$199',tag:'SALE',c:'#8B5CF6'},{n:'Smart Watch',p:'$449',tag:'HOT',c:'#06B6D4'}];
export default function EcommercePage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#0d0000;color:#fff5f5;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(13,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(239,68,68,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(239,68,68,.5);transition:color .2s}.nav-links a:hover{color:#EF4444}
    .nav-right{display:flex;align-items:center;gap:1.5rem}
    .nav-cart{padding:.45rem 1.25rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:8px;font-size:.78rem;font-weight:700;color:#fff}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding-left:3rem;padding-right:3rem;max-width:1300px;margin:0 auto}
    .hero-visual{background:linear-gradient(135deg,rgba(239,68,68,.08),rgba(249,115,22,.06));border:1px solid rgba(239,68,68,.12);border-radius:24px;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;font-size:8rem;position:relative;overflow:hidden}
    .hero-visual::before{content:'';position:absolute;top:-50%;right:-50%;width:200%;height:200%;background:conic-gradient(from 0deg,transparent,rgba(239,68,68,.06),transparent);animation:spin 8s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.2rem;border:1px solid rgba(239,68,68,.25);border-radius:50px;background:rgba(239,68,68,.06);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#EF4444;margin-bottom:2rem}
    .pct{padding:.2rem .6rem;background:#EF4444;border-radius:4px;font-weight:700}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,5vw,5rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem}
    .red{background:linear-gradient(135deg,#EF4444,#F97316);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(255,245,245,.5);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:10px;font-weight:700;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(239,68,68,.35)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(239,68,68,.25);border-radius:10px;font-size:.9rem;color:#EF4444;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#EF4444}
    .products{padding:7rem 3rem;border-top:1px solid rgba(239,68,68,.06)}
    .inner{max-width:1300px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#EF4444;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#EF4444}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .prod{background:#150000;border:1px solid rgba(239,68,68,.08);border-radius:16px;overflow:hidden;transition:transform .3s,border-color .3s}.prod:hover{transform:translateY(-4px);border-color:rgba(239,68,68,.25)}
    .prod-img{aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;font-size:3.5rem;position:relative}
    .prod-tag{position:absolute;top:.75rem;left:.75rem;padding:.2rem .6rem;background:var(--tc);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.58rem;font-weight:700;letter-spacing:.08em;color:#fff}
    .prod-body{padding:1.25rem}
    .prod-n{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:.4rem}
    .prod-p{font-family:'JetBrains Mono',monospace;font-size:.9rem;color:#EF4444}
    .prod-btn{display:block;width:100%;margin-top:1rem;padding:.6rem;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.15);border-radius:8px;font-size:.78rem;color:#EF4444;text-align:center;cursor:pointer;transition:background .2s}.prod-btn:hover{background:rgba(239,68,68,.18)}
    .cta-s{padding:7rem 3rem;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(239,68,68,.1),transparent 60%)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(239,68,68,.06);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(239,68,68,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:1024px){.prod-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{grid-template-columns:1fr;padding:5rem 1.25rem 2rem;gap:2rem}.hero-visual{display:none}.products{padding:4rem 1.25rem}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">ShopWide</div><ul className="nav-links">{['Products','Deals','Categories','About'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><div className="nav-right"><span style={{color:'rgba(239,68,68,.5)',fontSize:'.85rem'}}>🛒 3</span><a href="#" className="nav-cart">Shop Now</a></div></nav>
  <div className="hero">
    <div>
      <div className="badge"><span className="pct">50% OFF</span>Limited Time Flash Sale</div>
      <h1>Premium products,<br/><span className="red">unbeatable</span> prices.</h1>
      <p className="sub">Curated selection of top-tier electronics, accessories and lifestyle products. Free shipping on orders over $50.</p>
      <div className="btns"><button className="bp">Shop the Sale</button><button className="bo">Browse All</button></div>
    </div>
    <div className="hero-visual rv"><span style={{position:'relative',zIndex:1}}>🛍️</span></div>
  </div>
  <div className="products">
    <div className="inner">
      <div className="label rv">Featured</div>
      <h2 className="rv">Trending <span className="red">products</span></h2>
      <div className="prod-grid">
        {PRODUCTS.map(p=><div key={p.n} className="prod rv"><div className="prod-img" style={{background:`linear-gradient(135deg,${p.c}12,${p.c}22)`}}><div className="prod-tag" style={{'--tc':p.c} as any}>{p.tag}</div>📦</div><div className="prod-body"><div className="prod-n">{p.n}</div><div className="prod-p">{p.p}</div><div className="prod-btn">Add to Cart</div></div></div>)}
      </div>
    </div>
  </div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Join</div><h2 style={{marginBottom:'2rem'}}>Get <span className="red">10% off</span> your first order</h2><button className="bp">Subscribe & Save</button></div>
  <footer><span>© 2025 ShopWide · Widescreen Ecommerce</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
