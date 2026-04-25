'use client';
import { useEffect, useState } from 'react';
const STATS=[{v:'12,480',l:'Grievances Filed'},{v:'94%',l:'Resolution Rate'},{v:'4.2 Days',l:'Avg Resolution Time'},{v:'4.8★',l:'Citizen Satisfaction'}];
const CATEGORIES=[{n:'Infrastructure',i:'🏗️',count:142,col:'#3B82F6'},{n:'Public Safety',i:'🛡️',count:89,col:'#EF4444'},{n:'Utilities',i:'💡',count:203,col:'#F59E0B'},{n:'Environment',i:'🌿',count:67,col:'#22C55E'},{n:'Transport',i:'🚌',count:115,col:'#8B5CF6'},{n:'Municipal Services',i:'🏛️',count:94,col:'#06B6D4'}];
const HOW=[{n:'01',t:'File Your Grievance',d:'Submit your complaint with location, category and supporting photos or documents through our secure form.'},{n:'02',t:'Get a Ticket ID',d:'Receive an instant acknowledgement with a unique tracking ID via SMS and email within 60 seconds.'},{n:'03',t:'Track in Real-time',d:'Follow your grievance through each department stage on a transparent public dashboard.'},{n:'04',t:'Get it Resolved',d:'Our dedicated resolution team ensures closure with a written response and satisfaction rating.'}];
const REVIEWS=[{n:'Kavitha Rajendran',co:'Resident, Chennai',q:'My waterlogging complaint was resolved in 3 days. The tracking system kept me informed at every step.',img:'https://i.pravatar.cc/80?img=27'},{n:'Suresh Pillai',co:'Shopkeeper, Kochi',q:'I filed 4 complaints this year and every single one was addressed. This system actually works.',img:'https://i.pravatar.cc/80?img=66'},{n:'Ananya Bose',co:'Citizen, Pune',q:'The transparency is refreshing. I could see exactly who was handling my case and when they updated it.',img:'https://i.pravatar.cc/80?img=2'}];
export default function GrievancePage(){
  const [step,setStep]=useState(1);
  const [track,setTrack]=useState('');
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300&family=Roboto+Mono:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#f2f5fa;color:#0c1830;font-family:'Source Serif 4',serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(242,245,250,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(30,64,175,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{display:flex;align-items:center;gap:.6rem;font-family:'Libre Baskerville',serif;font-weight:700;font-size:1rem;color:#1E40AF}
    .logo-mark{width:28px;height:28px;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:.85rem}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Source Serif 4',serif;font-size:.85rem;font-weight:400;color:rgba(30,64,175,.6);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#1E40AF}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:8px;font-family:'Source Serif 4',serif;font-size:.82rem;font-weight:600;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;background:linear-gradient(180deg,#e8eef8 0%,#f2f5fa 100%);position:relative;overflow:hidden}
    .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(30,64,175,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,64,175,.04) 1px,transparent 1px);background-size:44px 44px;pointer-events:none}
    .hero-content{max-width:1400px;margin:0 auto;padding:5rem 4rem 4rem;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center;position:relative;z-index:1}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(30,64,175,.2);border-radius:50px;background:rgba(30,64,175,.06);font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:#1E40AF;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#22C55E;border-radius:50%;animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}
    h1{font-family:'Libre Baskerville',serif;font-size:clamp(2.5rem,4.5vw,4.5rem);font-weight:700;line-height:1.1;letter-spacing:-.02em;margin-bottom:1.5rem;color:#0c1830}
    .grad{background:linear-gradient(135deg,#1E40AF,#3B82F6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(12,24,48,.55);line-height:1.9;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:10px;font-family:'Source Serif 4',serif;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(30,64,175,.25)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(30,64,175,.25);border-radius:10px;font-size:.9rem;color:#1E40AF;background:none;cursor:pointer}.bo:hover{border-color:#1E40AF}
    .form-card{background:#fff;border-radius:20px;padding:2.5rem;box-shadow:0 20px 60px rgba(30,64,175,.08);border:1px solid rgba(30,64,175,.08)}
    .form-title{font-family:'Libre Baskerville',serif;font-weight:700;font-size:1.1rem;color:#0c1830;margin-bottom:.4rem}
    .form-sub{font-family:'Roboto Mono',monospace;font-size:.7rem;color:rgba(12,24,48,.45);margin-bottom:1.75rem;letter-spacing:.04em}
    .steps{display:flex;gap:.5rem;margin-bottom:2rem}
    .step-bar{flex:1;height:4px;border-radius:2px;background:rgba(30,64,175,.1);transition:background .3s}
    .step-bar.done{background:#22C55E}.step-bar.active{background:#3B82F6}
    .field{margin-bottom:1.25rem}
    .field label{display:block;font-family:'Roboto Mono',monospace;font-size:.65rem;font-weight:500;color:#0c1830;margin-bottom:.4rem;letter-spacing:.06em;text-transform:uppercase}
    .field input,.field select,.field textarea{width:100%;padding:.75rem 1rem;background:#f8faff;border:1px solid rgba(30,64,175,.15);border-radius:8px;font-family:'Source Serif 4',serif;font-size:.9rem;color:#0c1830;outline:none;transition:border-color .2s;cursor:auto}.field input:focus,.field select:focus,.field textarea:focus{border-color:#3B82F6}
    .field textarea{resize:none;height:90px}
    .form-btn{width:100%;padding:.85rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border:none;border-radius:8px;font-family:'Source Serif 4',serif;font-weight:600;font-size:.9rem;color:#fff;cursor:pointer;transition:opacity .2s}.form-btn:hover{opacity:.9}
    .stats-bar{background:#fff;border-top:1px solid rgba(30,64,175,.06);border-bottom:1px solid rgba(30,64,175,.06);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Libre Baskerville',serif;font-weight:700;font-size:2rem;color:#1E40AF;margin-bottom:.3rem}
    .stat-l{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(12,24,48,.45)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(30,64,175,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#1E40AF;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#1E40AF}
    h2{font-family:'Libre Baskerville',serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;letter-spacing:-.01em;margin-bottom:3rem;color:#0c1830}
    .cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .cat-card{background:#fff;border:1px solid rgba(30,64,175,.08);border-radius:12px;padding:1.5rem;display:flex;align-items:center;gap:1.25rem;cursor:pointer;transition:transform .3s,box-shadow .3s,border-color .3s}.cat-card:hover{transform:translateY(-3px);box-shadow:0 12px 35px rgba(30,64,175,.08);border-color:rgba(30,64,175,.2)}
    .cat-i{font-size:2rem;flex-shrink:0}.cat-n{font-family:'Libre Baskerville',serif;font-weight:700;font-size:.9rem;color:#0c1830;margin-bottom:.2rem}
    .cat-count{font-family:'Roboto Mono',monospace;font-size:.62rem;color:rgba(30,64,175,.5)}
    .how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .how{background:#fff;border:1px solid rgba(30,64,175,.08);border-radius:12px;padding:2rem;transition:border-color .3s}.how:hover{border-color:rgba(30,64,175,.2)}
    .how-n{font-family:'Roboto Mono',monospace;font-size:2rem;color:rgba(30,64,175,.15);font-weight:500;margin-bottom:1rem;line-height:1}
    .how-t{font-family:'Libre Baskerville',serif;font-weight:700;font-size:.95rem;color:#0c1830;margin-bottom:.5rem}
    .how-d{font-size:.85rem;font-weight:300;color:rgba(12,24,48,.55);line-height:1.7}
    .track-box{max-width:600px;margin:0 auto;text-align:center}
    .track-row{display:flex;gap:.75rem;margin-top:2rem}
    .track-input{flex:1;padding:.8rem 1.25rem;background:#fff;border:1px solid rgba(30,64,175,.15);border-radius:10px;font-family:'Source Serif 4',serif;font-size:.9rem;color:#0c1830;outline:none;cursor:auto}.track-input:focus{border-color:#3B82F6}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:#fff;border:1px solid rgba(30,64,175,.08);border-radius:12px;padding:1.75rem;box-shadow:0 4px 20px rgba(30,64,175,.05)}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(30,64,175,.15)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Libre Baskerville',serif;font-weight:700;font-size:.88rem;color:#0c1830}.rev-co{font-family:'Roboto Mono',monospace;font-size:.58rem;color:rgba(30,64,175,.45)}
    .rev-q{font-family:'Source Serif 4',serif;font-size:.88rem;font-weight:300;color:rgba(12,24,48,.6);line-height:1.75;font-style:italic}
    footer{padding:2rem 4rem;border-top:1px solid rgba(30,64,175,.08);display:flex;justify-content:space-between;font-family:'Roboto Mono',monospace;font-size:.7rem;color:rgba(30,64,175,.4);background:#f2f5fa}
    @media(max-width:900px){.hero-content{grid-template-columns:1fr;padding:4rem 1.5rem 2rem;gap:3rem}.stats-inner{grid-template-columns:1fr 1fr}.cat-grid,.how-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo"><span className="logo-mark">🏛️</span>Widescreen Portal</div><ul className="nav-links">{['File Grievance','Track Status','Departments','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Login / Register</a></nav>
  <div className="hero"><div className="hero-grid"/>
    <div className="hero-content"><div>
      <div className="badge"><span className="dot"/>Portal Active · 24/7 Support</div>
      <h1>Your voice,<br/><span className="grad">officially</span><br/>heard.</h1>
      <p className="sub">File, track and resolve public grievances through a transparent digital platform. Every concern gets a ticket. Every ticket gets resolved with accountability.</p>
      <div className="btns"><button className="bp">File a Grievance</button><button className="bo">Track My Status</button></div>
    </div>
    <div className="form-card rv"><div className="form-title">File a New Grievance</div><div className="form-sub">Step {step} of 3 — {step===1?'Your Details':step===2?'Issue Details':'Review & Submit'}</div><div className="steps">{[1,2,3].map(s=><div key={s} className={`step-bar${step>s?' done':step===s?' active':''}`}/>)}</div>{step===1&&<><div className="field"><label>Full Name</label><input type="text" placeholder="Enter your full name"/></div><div className="field"><label>Mobile Number</label><input type="tel" placeholder="+91 00000 00000"/></div><div className="field"><label>Email Address</label><input type="email" placeholder="your@email.com"/></div></>}{step===2&&<><div className="field"><label>Category</label><select>{CATEGORIES.map(c=><option key={c.n}>{c.n}</option>)}</select></div><div className="field"><label>Location</label><input type="text" placeholder="Ward, street or landmark"/></div><div className="field"><label>Description</label><textarea placeholder="Describe the issue in detail..."/></div></>}{step===3&&<div style={{background:'rgba(30,64,175,.04)',border:'1px solid rgba(30,64,175,.12)',borderRadius:'10px',padding:'1.25rem',marginBottom:'1.5rem',fontSize:'.85rem',color:'rgba(12,24,48,.7)',lineHeight:1.7,fontFamily:"'Source Serif 4',serif"}}>Your grievance will be submitted and assigned a unique tracking ID. You will receive an SMS and email confirmation within 60 seconds.</div>}<button className="form-btn" onClick={()=>setStep(s=>s<3?s+1:1)}>{step<3?'Continue →':'Submit Grievance'}</button></div></div>
  </div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Categories</div><h2 className="rv">Browse by <span className="grad">department</span></h2><div className="cat-grid">{CATEGORIES.map(c=><div key={c.n} className="cat-card rv"><span className="cat-i">{c.i}</span><div><div className="cat-n">{c.n}</div><div className="cat-count">{c.count} open grievances</div></div></div>)}</div></div></div>
  <div className="section" style={{background:'#fff'}}><div className="inner"><div className="label rv">How It Works</div><h2 className="rv">From complaint to <span className="grad">resolution</span></h2><div className="how-grid">{HOW.map(h=><div key={h.n} className="how rv"><div className="how-n">{h.n}</div><div className="how-t">{h.t}</div><div className="how-d">{h.d}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="track-box rv"><div className="label" style={{justifyContent:'center'}}>Track</div><h2>Check your <span className="grad">grievance status</span></h2><p style={{color:'rgba(12,24,48,.5)',fontSize:'.9rem',marginTop:'.5rem',fontWeight:300}}>Enter your ticket ID to see a real-time update on your complaint</p><div className="track-row"><input className="track-input" type="text" placeholder="e.g. GRV-2025-00423" value={track} onChange={e=>setTrack(e.target.value)}/><button className="bp">Track →</button></div></div><div className="rev-grid" style={{marginTop:'4rem'}}><div className="label rv" style={{gridColumn:'1/-1'}}>Citizen Reviews</div>{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <footer><span>© 2025 Widescreen Grievance Portal · All rights reserved</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
