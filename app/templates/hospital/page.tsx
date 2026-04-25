'use client';
import { useEffect } from 'react';
const DEPTS=[{n:'Cardiology',i:'❤️'},{n:'Neurology',i:'🧠'},{n:'Orthopaedics',i:'🦴'},{n:'Oncology',i:'🔬'},{n:'Paediatrics',i:'👶'},{n:'Emergency',i:'🚑'}];
export default function HospitalPage() {
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return (<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}body{background:#f8fbff;color:#0f2040;font-family:'DM Sans',sans-serif;overflow-x:hidden}
    .rv{opacity:0;transform:translateY(20px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(248,251,255,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(14,165,233,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;background:linear-gradient(90deg,#0284C7,#0EA5E9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(14,165,233,.6);transition:color .2s}.nav-links a:hover{color:#0284C7}
    .nav-cta{padding:.45rem 1.25rem;background:#0EA5E9;border-radius:8px;font-size:.78rem;font-weight:600;color:#fff;transition:background .2s}.nav-cta:hover{background:#0284C7}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding:64px 3rem 0;max-width:1300px;margin:0 auto}
    .hero-img{background:linear-gradient(135deg,rgba(14,165,233,.08),rgba(2,132,199,.12));border:1px solid rgba(14,165,233,.15);border-radius:24px;aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
    .pulse-ring{width:120px;height:120px;border-radius:50%;border:2px solid rgba(14,165,233,.4);display:flex;align-items:center;justify-content:center;animation:pulse-r 2s infinite}
    @keyframes pulse-r{0%{box-shadow:0 0 0 0 rgba(14,165,233,.3)}70%{box-shadow:0 0 0 30px rgba(14,165,233,0)}100%{box-shadow:0 0 0 0 rgba(14,165,233,0)}}
    .cross{font-size:3rem}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(14,165,233,.2);border-radius:50px;background:rgba(14,165,233,.06);font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#0EA5E9;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#22C55E;border-radius:50%;box-shadow:0 0 8px #22C55E;animation:p 2s infinite}
    @keyframes p{0%,100%{opacity:1}50%{opacity:.3}}
    h1{font-family:'Syne',sans-serif;font-size:clamp(2.5rem,4.5vw,4.5rem);font-weight:800;line-height:1.05;letter-spacing:-.03em;margin-bottom:1.5rem;color:#0f2040}
    .blue{background:linear-gradient(135deg,#0284C7,#0EA5E9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;color:rgba(15,32,64,.55);line-height:1.8;margin-bottom:2.5rem;max-width:460px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#0284C7,#0EA5E9);border-radius:10px;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(14,165,233,.3)}
    .bo{padding:.85rem 2.2rem;border:1px solid rgba(14,165,233,.3);border-radius:10px;font-size:.9rem;color:#0EA5E9;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#0284C7}
    .depts{padding:7rem 3rem;background:#f0f7ff}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#0EA5E9;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#0EA5E9}
    h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;color:#0f2040;margin-bottom:3rem}
    .dept-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .dept{background:#fff;border:1px solid rgba(14,165,233,.1);border-radius:16px;padding:2rem;text-align:center;transition:transform .3s,box-shadow .3s,border-color .3s}.dept:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(14,165,233,.1);border-color:rgba(14,165,233,.25)}
    .dept-i{font-size:2.2rem;margin-bottom:1rem}
    .dept-n{font-family:'Syne',sans-serif;font-weight:700;color:#0f2040}
    .cta-s{padding:8rem 3rem;text-align:center;background:#fff;border-top:1px solid rgba(14,165,233,.08)}
    footer{padding:2rem 3rem;border-top:1px solid rgba(14,165,233,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(14,165,233,.4);font-family:'JetBrains Mono',monospace;background:#f8fbff}
    @media(max-width:900px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{grid-template-columns:1fr;padding:5rem 1.25rem 2rem;gap:2rem}.hero-img{display:none}.depts{padding:4rem 1.25rem}.dept-grid{grid-template-columns:1fr 1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
  `}</style>
  <nav><div className="logo">Widescreen Hospital</div><ul className="nav-links">{['Departments','Doctors','Appointments','Emergency'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Book Appointment</a></nav>
  <div className="hero">
    <div>
      <div className="badge"><span className="dot"/>24/7 Emergency Care Available</div>
      <h1>Your health,<br/>our <span className="blue">commitment.</span></h1>
      <p className="sub">World-class medical care with compassion at its core. 500+ specialists, 24/7 emergency services, and cutting-edge treatment protocols.</p>
      <div className="btns"><button className="bp">Book Appointment</button><button className="bo">Find a Doctor</button></div>
    </div>
    <div className="hero-img rv"><div className="pulse-ring"><span className="cross">✚</span></div></div>
  </div>
  <div className="depts">
    <div className="inner">
      <div className="label rv">Specialities</div>
      <h2 className="rv">World-class <span className="blue">departments</span></h2>
      <div className="dept-grid">
        {DEPTS.map(d=><div key={d.n} className="dept rv"><div className="dept-i">{d.i}</div><div className="dept-n">{d.n}</div></div>)}
      </div>
    </div>
  </div>
  <div className="cta-s rv">
    <div className="label" style={{justifyContent:'center'}}>Get Care</div>
    <h2 style={{color:'#0f2040'}}>Your wellness journey<br/>starts <span className="blue">today</span></h2>
    <div style={{marginTop:'2rem'}}><button className="bp">Book Your Appointment</button></div>
  </div>
  <footer><span>© 2025 Widescreen Hospital</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
