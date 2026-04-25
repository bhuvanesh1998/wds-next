'use client';
import { useEffect } from 'react';
const FEATURES=[{i:'⚡',t:'Instant Sync',d:'Real-time sync across all devices.'},{i:'🔒',t:'Bank-grade Security',d:'End-to-end encryption on everything.'},{i:'🤖',t:'AI Assistant',d:'Smart suggestions that learn from you.'},{i:'📊',t:'Analytics',d:'Understand your habits at a glance.'},{i:'🌐',t:'Works Offline',d:'Full functionality without internet.'},{i:'🎨',t:'Customisable',d:'Make it yours with themes and layouts.'}];
const REVIEWS=[{n:'Sarah K.',r:5,t:'"Changed how I work completely."'},{n:'Raj M.',r:5,t:'"Best app I\'ve ever downloaded."'},{n:'Emma L.',r:5,t:'"Incredibly intuitive and fast."'}];
export default function AppShowcasePage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#080014;color:#f5f0ff;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(8,0,20,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(167,139,250,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;background:linear-gradient(90deg,#A78BFA,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(167,139,250,.5);transition:color .2s}.nav-links a:hover{color:#A78BFA}
    .nav-dl{padding:.45rem 1.25rem;background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:8px;font-size:.78rem;font-weight:700;color:#fff}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding-left:3rem;padding-right:3rem;max-width:1300px;margin:0 auto}
    .phone{width:260px;height:520px;background:linear-gradient(145deg,#1a0035,#0d0020);border:2px solid rgba(167,139,250,.2);border-radius:40px;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;box-shadow:0 40px 80px rgba(124,58,237,.3)}
    .phone::before{content:'';position:absolute;top:10px;left:50%;transform:translateX(-50%);width:80px;height:24px;background:rgba(0,0,0,.8);border-radius:20px}
    .phone-inner{text-align:center;padding:2rem;z-index:1;position:relative}
    .app-icon{width:72px;height:72px;background:linear-gradient(135deg,#7C3AED,#A78BFA);border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 1rem;box-shadow:0 12px 30px rgba(124,58,237,.4)}
    .phone-title{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;margin-bottom:.5rem}
    .phone-sub{font-size:.75rem;color:rgba(167,139,250,.6)}
    .phone-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(124,58,237,.3),transparent 70%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(167,139,250,.25);border-radius:50px;background:rgba(167,139,250,.06);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#A78BFA;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#A78BFA;border-radius:50%;box-shadow:0 0 10px #A78BFA;animation:p 2s infinite}
    @keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,5vw,5rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#A78BFA,#7C3AED,#C4B5FD);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(245,240,255,.5);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .dl-btns{display:flex;gap:1rem;flex-wrap:wrap}
    .dl-btn{padding:.85rem 1.8rem;background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:12px;font-weight:600;font-size:.85rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;display:flex;align-items:center;gap:.5rem}.dl-btn:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(124,58,237,.35)}
    .dl-btn-o{padding:.85rem 1.8rem;border:1px solid rgba(167,139,250,.25);border-radius:12px;font-size:.85rem;color:#A78BFA;background:none;cursor:pointer;transition:border-color .2s;display:flex;align-items:center;gap:.5rem}.dl-btn-o:hover{border-color:#A78BFA}
    .stars{color:#FBBF24;font-size:.85rem;margin-bottom:1rem}
    .rating-text{font-family:'JetBrains Mono',monospace;font-size:.68rem;color:rgba(167,139,250,.5);letter-spacing:.08em}
    .feat-section{padding:7rem 3rem;border-top:1px solid rgba(167,139,250,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#A78BFA;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#A78BFA}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .feat{background:rgba(167,139,250,.04);border:1px solid rgba(167,139,250,.08);border-radius:16px;padding:1.75rem;transition:border-color .3s,background .3s}.feat:hover{border-color:rgba(167,139,250,.25);background:rgba(167,139,250,.08)}
    .feat-i{font-size:1.8rem;margin-bottom:.75rem}
    .feat-t{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:.4rem}
    .feat-d{font-size:.85rem;color:rgba(167,139,250,.5);line-height:1.6}
    .reviews{padding:5rem 3rem;background:rgba(124,58,237,.04);border-top:1px solid rgba(167,139,250,.06)}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(167,139,250,.04);border:1px solid rgba(167,139,250,.08);border-radius:16px;padding:1.5rem}
    .rev-stars{color:#FBBF24;margin-bottom:.75rem}
    .rev-t{font-size:.9rem;color:rgba(245,240,255,.7);line-height:1.6;margin-bottom:.75rem}
    .rev-n{font-family:'JetBrains Mono',monospace;font-size:.65rem;color:rgba(167,139,250,.4);letter-spacing:.1em}
    .cta-s{padding:8rem 3rem;text-align:center}
    footer{padding:2rem 3rem;border-top:1px solid rgba(167,139,250,.06);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(167,139,250,.3);font-family:'JetBrains Mono',monospace}
    @media(max-width:900px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{grid-template-columns:1fr;padding:5rem 1.25rem 2rem;gap:2rem}.phone{display:none}.feat-section,.reviews{padding:4rem 1.25rem}.feat-grid,.rev-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">FlowApp</div><ul className="nav-links">{['Features','Pricing','Reviews','Download'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-dl">Download Free</a></nav>
  <div className="hero">
    <div>
      <div className="badge"><span className="dot"/>Rated #1 Productivity App 2024</div>
      <h1>The app that<br/>makes you <span className="grad">10x</span><br/>faster.</h1>
      <p className="sub">FlowApp combines task management, AI assistance, and deep focus tools into one beautiful, seamless experience.</p>
      <div style={{marginBottom:'1.5rem'}}><div className="stars">★★★★★</div><div className="rating-text">4.9/5 · 50,000+ reviews</div></div>
      <div className="dl-btns"><button className="dl-btn">📱 App Store</button><button className="dl-btn-o">🤖 Google Play</button></div>
    </div>
    <div className="rv"><div className="phone"><div className="phone-glow"/><div className="phone-inner"><div className="app-icon">⚡</div><div className="phone-title">FlowApp</div><div className="phone-sub">Your productivity OS</div></div></div></div>
  </div>
  <div className="feat-section"><div className="inner"><div className="label rv">Features</div><h2 className="rv">Everything you need to <span className="grad">flow</span></h2><div className="feat-grid">{FEATURES.map(f=><div key={f.t} className="feat rv"><div className="feat-i">{f.i}</div><div className="feat-t">{f.t}</div><div className="feat-d">{f.d}</div></div>)}</div></div></div>
  <div className="reviews"><div className="inner"><div className="label rv">Reviews</div><h2 className="rv">Loved by <span className="grad">thousands</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-stars">{'★'.repeat(r.r)}</div><div className="rev-t">{r.t}</div><div className="rev-n">{r.n}</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Free Forever</div><h2 style={{marginBottom:'2rem'}}>Start flowing <span className="grad">today</span></h2><button className="dl-btn" style={{margin:'0 auto'}}>📱 Download Free</button></div>
  <footer><span>© 2025 FlowApp · Widescreen App Showcase</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
