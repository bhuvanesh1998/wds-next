'use client';
import { useEffect, useState } from 'react';
const CATEGORIES=[{n:'Infrastructure',i:'🏗️',count:142},{n:'Public Safety',i:'🛡️',count:89},{n:'Utilities',i:'💡',count:203},{n:'Environment',i:'🌿',count:67},{n:'Transport',i:'🚌',count:115},{n:'Municipal Services',i:'🏛️',count:94}];
const STATS=[{n:'Grievances Filed',v:'12,480'},{n:'Resolved This Month',v:'3,241'},{n:'Avg Resolution Time',v:'4.2 days'},{n:'Satisfaction Rate',v:'94%'}];
export default function GrievancePage() {
  const [step,setStep]=useState(1);
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#f5f7fa;color:#0f1c2e;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(245,247,250,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(30,64,175,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;display:flex;align-items:center;gap:.5rem}
    .logo-mark{width:28px;height:28px;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:.85rem}
    .logo-text{background:linear-gradient(90deg,#1E40AF,#3B82F6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(30,64,175,.6);transition:color .2s}.nav-links a:hover{color:#1E40AF}
    .nav-cta{padding:.45rem 1.25rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:8px;font-size:.78rem;font-weight:600;color:#fff}
    .hero{min-height:100vh;padding-top:64px;background:linear-gradient(180deg,#eef2ff 0%,#f5f7fa 100%);position:relative;overflow:hidden}
    .hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(30,64,175,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,64,175,.04) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
    .hero-content{max-width:1300px;margin:0 auto;padding:5rem 3rem 4rem;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;position:relative;z-index:1}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(30,64,175,.2);border-radius:50px;background:rgba(30,64,175,.06);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#1E40AF;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#22C55E;border-radius:50%;box-shadow:0 0 8px #22C55E;animation:p 2s infinite}
    @keyframes p{0%,100%{opacity:1}50%{opacity:.3}}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.5rem,4.5vw,4.5rem);font-weight:800;line-height:1.05;letter-spacing:-.03em;margin-bottom:1.5rem;color:#0f1c2e}
    .blue{background:linear-gradient(135deg,#1E40AF,#3B82F6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(15,28,46,.55);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border-radius:10px;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(30,64,175,.25)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(30,64,175,.25);border-radius:10px;font-size:.9rem;color:#1E40AF;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#1E40AF}
    .form-card{background:#fff;border-radius:20px;padding:2.5rem;box-shadow:0 20px 60px rgba(30,64,175,.08);border:1px solid rgba(30,64,175,.08)}
    .form-title{font-family:'Syne',sans-serif;font-weight:700;font-size:1.1rem;color:#0f1c2e;margin-bottom:.4rem}
    .form-sub{font-size:.8rem;color:rgba(15,28,46,.5);margin-bottom:1.75rem;font-family:'JetBrains Mono',monospace;letter-spacing:.05em}
    .steps{display:flex;gap:.5rem;margin-bottom:2rem}
    .step{flex:1;height:4px;border-radius:2px;background:rgba(30,64,175,.1);transition:background .3s}
    .step.done{background:#22C55E}.step.active{background:#3B82F6}
    .field{margin-bottom:1.25rem}
    .field label{display:block;font-size:.78rem;font-weight:600;color:#0f1c2e;margin-bottom:.4rem;font-family:'JetBrains Mono',monospace;letter-spacing:.05em}
    .field input,.field select,.field textarea{width:100%;padding:.7rem 1rem;background:#f8faff;border:1px solid rgba(30,64,175,.15);border-radius:8px;font-size:.88rem;color:#0f1c2e;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .2s}.field input:focus,.field select:focus,.field textarea:focus{border-color:#3B82F6}
    .field textarea{resize:none;height:90px}
    .form-btn{width:100%;padding:.8rem;background:linear-gradient(135deg,#1E40AF,#3B82F6);border:none;border-radius:8px;font-weight:600;font-size:.9rem;color:#fff;cursor:pointer;transition:opacity .2s}.form-btn:hover{opacity:.9}
    .stats{padding:5rem 3rem;background:#fff;border-top:1px solid rgba(30,64,175,.06)}
    .inner{max-width:1300px;margin:0 auto}
    .stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .stat{background:#f5f7fa;border:1px solid rgba(30,64,175,.08);border-radius:16px;padding:2rem;text-align:center;transition:border-color .3s}.stat:hover{border-color:rgba(30,64,175,.2)}
    .stat-v{font-family:'Syne',sans-serif;font-weight:800;font-size:2rem;color:#1E40AF;margin-bottom:.4rem}
    .stat-n{font-size:.82rem;color:rgba(15,28,46,.5)}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#1E40AF;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#1E40AF}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;color:#0f1c2e;margin-bottom:3rem}
    .cats-section{padding:6rem 3rem;background:#f5f7fa}
    .cat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
    .cat-card{background:#fff;border:1px solid rgba(30,64,175,.08);border-radius:14px;padding:1.5rem;display:flex;align-items:center;gap:1.25rem;cursor:pointer;transition:transform .3s,box-shadow .3s,border-color .3s}.cat-card:hover{transform:translateY(-3px);box-shadow:0 12px 35px rgba(30,64,175,.08);border-color:rgba(30,64,175,.2)}
    .cat-i{font-size:2rem;flex-shrink:0}
    .cat-n{font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;color:#0f1c2e}
    .cat-count{font-family:'JetBrains Mono',monospace;font-size:.68rem;color:rgba(30,64,175,.5);margin-top:.2rem}
    .track-section{padding:6rem 3rem;background:#fff;border-top:1px solid rgba(30,64,175,.06)}
    .track-box{max-width:600px;margin:0 auto;text-align:center}
    .track-input-row{display:flex;gap:.75rem;margin-top:2rem}
    .track-input{flex:1;padding:.8rem 1.25rem;background:#f8faff;border:1px solid rgba(30,64,175,.15);border-radius:10px;font-size:.9rem;color:#0f1c2e;outline:none;font-family:'DM Sans',sans-serif}.track-input:focus{border-color:#3B82F6}
    footer{padding:2rem 3rem;border-top:1px solid rgba(30,64,175,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(30,64,175,.4);font-family:'JetBrains Mono',monospace;background:#f5f7fa}
    @media(max-width:900px){nav{padding:0 1.25rem}.nav-links{display:none}.hero-content{grid-template-columns:1fr;padding:4rem 1.25rem 2rem;gap:2rem}.stats,.cats-section,.track-section{padding:4rem 1.25rem}.stat-grid{grid-template-columns:1fr 1fr}.cat-grid{grid-template-columns:1fr 1fr}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo"><span className="logo-mark">🏛️</span><span className="logo-text">Widescreen Portal</span></div><ul className="nav-links">{['File Grievance','Track Status','FAQs','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Login / Register</a></nav>
  <div className="hero">
    <div className="hero-grid-bg"/>
    <div className="hero-content">
      <div>
        <div className="badge"><span className="dot"/>Portal Active · Grievances Open</div>
        <h1>Your voice,<br/><span className="blue">officially</span><br/>heard.</h1>
        <p className="sub">File, track, and resolve public grievances through a transparent digital platform. Every concern gets a ticket, every ticket gets resolved.</p>
        <div className="btns"><button className="bp">File a Grievance</button><button className="bo">Track Status</button></div>
      </div>
      <div className="form-card rv">
        <div className="form-title">File a New Grievance</div>
        <div className="form-sub">Step {step} of 3 — {step===1?'Your Details':step===2?'Issue Details':'Review & Submit'}</div>
        <div className="steps">{[1,2,3].map(s=><div key={s} className={`step${step>s?' done':step===s?' active':''}`}/>)}</div>
        {step===1&&<><div className="field"><label>Full Name</label><input type="text" placeholder="Enter your full name"/></div><div className="field"><label>Mobile Number</label><input type="tel" placeholder="+91 00000 00000"/></div><div className="field"><label>Email Address</label><input type="email" placeholder="your@email.com"/></div></>}
        {step===2&&<><div className="field"><label>Category</label><select><option>Select category</option>{CATEGORIES.map(c=><option key={c.n}>{c.n}</option>)}</select></div><div className="field"><label>Location / Area</label><input type="text" placeholder="Ward, street or landmark"/></div><div className="field"><label>Description</label><textarea placeholder="Describe the issue in detail..."/></div></>}
        {step===3&&<div style={{background:'rgba(30,64,175,.04)',border:'1px solid rgba(30,64,175,.12)',borderRadius:'10px',padding:'1.25rem',marginBottom:'1.5rem',fontSize:'.85rem',color:'rgba(15,28,46,.7)',lineHeight:1.6}}>Your grievance will be submitted and assigned a unique tracking ID. You will receive an SMS and email confirmation within minutes.</div>}
        <button className="form-btn" onClick={()=>setStep(s=>s<3?s+1:s)}>{step<3?'Continue →':'Submit Grievance'}</button>
      </div>
    </div>
  </div>
  <div className="stats"><div className="inner"><div className="stat-grid">{STATS.map(s=><div key={s.n} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-n">{s.n}</div></div>)}</div></div></div>
  <div className="cats-section"><div className="inner"><div className="label rv">Categories</div><h2 className="rv">Browse by <span className="blue">department</span></h2><div className="cat-grid">{CATEGORIES.map(c=><div key={c.n} className="cat-card rv"><span className="cat-i">{c.i}</span><div><div className="cat-n">{c.n}</div><div className="cat-count">{c.count} open grievances</div></div></div>)}</div></div></div>
  <div className="track-section"><div className="inner"><div className="track-box rv"><div className="label" style={{justifyContent:'center'}}>Track</div><h2>Check your <span className="blue">grievance status</span></h2><p style={{color:'rgba(15,28,46,.5)',fontSize:'.9rem',marginTop:'.5rem'}}>Enter your ticket ID to get a real-time update</p><div className="track-input-row"><input className="track-input" type="text" placeholder="e.g. GRV-2025-00423"/><button className="bp" style={{flexShrink:0}}>Track</button></div></div></div></div>
  <footer><span>© 2025 Widescreen Grievance Portal</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
