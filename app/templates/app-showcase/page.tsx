'use client';
import { useEffect } from 'react';
const STATS=[{v:'4.9★',l:'App Store Rating'},{v:'2M+',l:'Active Users'},{v:'50K+',l:'5-Star Reviews'},{v:'#1',l:'Productivity Chart'}];
const FEATURES=[{i:'⚡',t:'Instant Sync',d:'Real-time sync across all devices in under 200ms. Never out of date.'},{i:'🔒',t:'Bank-grade Security',d:'End-to-end AES-256 encryption. Zero-knowledge architecture.'},{i:'🤖',t:'AI Assistant',d:'Smart suggestions and auto-completions that learn your patterns.'},{i:'📊',t:'Deep Analytics',d:'Understand your habits, productivity patterns and focus blocks.'},{i:'🌐',t:'Offline-first',d:'Full functionality without internet. Syncs automatically on reconnect.'},{i:'🎨',t:'Fully Customisable',d:'200+ themes, custom widgets and drag-and-drop layouts. Your way.'}];
const REVIEWS=[{n:'Sarah Kim',co:'Designer, Google',q:'FlowApp completely changed how I manage my day. The AI suggestions alone save me 2 hours daily.',img:'https://i.pravatar.cc/80?img=6'},{n:'Raj Mehta',co:'Engineer, Stripe',q:'Best productivity app I have ever downloaded. The offline mode works flawlessly during my commute.',img:'https://i.pravatar.cc/80?img=19'},{n:'Emma Laurent',co:'Founder, Notion clone',q:'I built a competing product and still use FlowApp personally. It is just that good.',img:'https://i.pravatar.cc/80?img=3'}];
const SCREENS=['https://picsum.photos/280/560?random=40','https://picsum.photos/280/560?random=41','https://picsum.photos/280/560?random=42'];
export default function AppShowcasePage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300&family=Manrope:wght@300;400;500;600&family=Martian+Mono:wght@300;400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#070010;color:#f0eaff;font-family:'Manrope',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(7,0,16,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(167,139,250,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Urbanist',sans-serif;font-weight:800;font-size:1.15rem;background:linear-gradient(90deg,#A78BFA,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Martian Mono',monospace;font-size:.72rem;color:rgba(167,139,250,.45);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#A78BFA}
    .nav-dl{padding:.45rem 1.4rem;background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:8px;font-family:'Urbanist',sans-serif;font-size:.8rem;font-weight:600;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 40%,rgba(124,58,237,.1),transparent 55%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(167,139,250,.25);border-radius:50px;background:rgba(167,139,250,.06);font-family:'Martian Mono',monospace;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:#A78BFA;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#A78BFA;border-radius:50%;box-shadow:0 0 10px #A78BFA;animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Urbanist',sans-serif;font-size:clamp(3rem,5.5vw,5.5rem);font-weight:800;line-height:1;letter-spacing:-.035em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#A78BFA,#7C3AED,#C4B5FD);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(240,234,255,.5);line-height:1.85;margin-bottom:2rem;max-width:480px}
    .rating{margin-bottom:2rem}.stars{color:#FBBF24;font-size:.88rem;margin-bottom:.3rem}.rating-txt{font-family:'Martian Mono',monospace;font-size:.65rem;color:rgba(167,139,250,.5);letter-spacing:.08em}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 1.8rem;background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:12px;font-family:'Urbanist',sans-serif;font-weight:600;font-size:.88rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;display:flex;align-items:center;gap:.5rem}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(124,58,237,.35)}
    .bo{padding:.9rem 1.8rem;border:1px solid rgba(167,139,250,.25);border-radius:12px;font-size:.88rem;color:#A78BFA;background:none;cursor:pointer;display:flex;align-items:center;gap:.5rem}.bo:hover{border-color:#A78BFA}
    .screens{display:flex;gap:1rem;align-items:center;justify-content:center}
    .screen{border-radius:24px;overflow:hidden;border:1px solid rgba(167,139,250,.15);box-shadow:0 20px 60px rgba(124,58,237,.2)}
    .screen:nth-child(1){transform:rotate(-6deg) translateY(20px);width:180px}
    .screen:nth-child(2){transform:scale(1.05);width:200px;box-shadow:0 30px 80px rgba(124,58,237,.35)}
    .screen:nth-child(3){transform:rotate(6deg) translateY(20px);width:180px}
    .screen img{width:100%;display:block}
    .stats-bar{background:rgba(124,58,237,.05);border-top:1px solid rgba(167,139,250,.08);border-bottom:1px solid rgba(167,139,250,.08);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Urbanist',sans-serif;font-weight:800;font-size:2.2rem;background:linear-gradient(135deg,#A78BFA,#C4B5FD);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.3rem}
    .stat-l{font-family:'Martian Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(240,234,255,.35)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(167,139,250,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Martian Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#A78BFA;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#A78BFA}
    h2{font-family:'Urbanist',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
    .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .feat{background:rgba(167,139,250,.04);border:1px solid rgba(167,139,250,.08);border-radius:16px;padding:1.75rem;transition:border-color .3s,transform .3s}.feat:hover{border-color:rgba(167,139,250,.25);transform:translateY(-4px)}
    .feat-i{font-size:1.8rem;margin-bottom:.75rem}.feat-t{font-family:'Urbanist',sans-serif;font-weight:700;margin-bottom:.4rem}.feat-d{font-size:.85rem;font-weight:300;color:rgba(240,234,255,.45);line-height:1.65}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(167,139,250,.04);border:1px solid rgba(167,139,250,.08);border-radius:16px;padding:1.5rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(167,139,250,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-stars{color:#FBBF24;font-size:.78rem;margin-bottom:.2rem}
    .rev-n{font-family:'Urbanist',sans-serif;font-weight:700;font-size:.88rem}.rev-co{font-family:'Martian Mono',monospace;font-size:.58rem;color:rgba(167,139,250,.45)}
    .rev-q{font-size:.85rem;font-weight:300;color:rgba(240,234,255,.6);line-height:1.7}
    .cta-s{padding:8rem 4rem;text-align:center;background:radial-gradient(ellipse at 50% 80%,rgba(124,58,237,.1),transparent 60%)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(167,139,250,.06);display:flex;justify-content:space-between;font-family:'Martian Mono',monospace;font-size:.68rem;color:rgba(167,139,250,.3)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.screens{display:none}.stats-inner,.feat-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">FlowApp</div><ul className="nav-links">{['Features','Pricing','Reviews','Download'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-dl">Download Free</a></nav>
  <div className="hero"><div><div className="badge"><span className="dot"/>Rated #1 Productivity App 2025</div><h1>The app that<br/>makes you <span className="grad">10x faster.</span></h1><p className="sub">FlowApp combines task management, AI assistance and deep focus tools into one beautiful, seamless experience built for peak performance.</p><div className="rating"><div className="stars">★★★★★</div><div className="rating-txt">4.9 / 5 · 50,000+ verified reviews</div></div><div className="btns"><button className="bp">📱 App Store</button><button className="bo">🤖 Google Play</button></div></div><div className="screens rv">{SCREENS.map((s,i)=><div key={i} className="screen"><img src={s} alt={`App screen ${i+1}`}/></div>)}</div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Features</div><h2 className="rv">Everything you need to <span className="grad">flow</span></h2><div className="feat-grid">{FEATURES.map(f=><div key={f.t} className="feat rv"><div className="feat-i">{f.i}</div><div className="feat-t">{f.t}</div><div className="feat-d">{f.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(124,58,237,.04)'}}><div className="inner"><div className="label rv">Reviews</div><h2 className="rv">Loved by <span className="grad">thousands</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-stars">★★★★★</div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Free Forever</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Urbanist',sans-serif",fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:800}}>Start flowing <span className="grad">today</span></h2><div className="btns" style={{justifyContent:'center',marginTop:'1rem'}}><button className="bp">📱 Download Free</button><button className="bo">🌐 Web Version</button></div></div>
  <footer><span>© 2025 FlowApp · Widescreen App Showcase</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
