'use client';
import { useEffect } from 'react';
const STATS=[{v:'500+',l:'Specialist Doctors'},{v:'1.2M',l:'Patients Treated'},{v:'24/7',l:'Emergency Services'},{v:'98.6%',l:'Patient Satisfaction'}];
const DEPTS=[{n:'Cardiology',i:'❤️',d:'Advanced cardiac care, electrophysiology and minimally invasive surgeries.'},{n:'Neurology',i:'🧠',d:'Brain & spine specialists with cutting-edge imaging and neuro-rehab facilities.'},{n:'Oncology',i:'🔬',d:'Comprehensive cancer care from diagnosis to chemotherapy and immunotherapy.'},{n:'Orthopaedics',i:'🦴',d:'Joint replacement, sports injuries and advanced bone reconstruction.'},{n:'Paediatrics',i:'👶',d:'Complete child healthcare from neonatal care to adolescent medicine.'},{n:'Emergency',i:'🚑',d:'Level-1 trauma centre with 24/7 critical care and air ambulance access.'}];
const TEAM=[{n:'Dr. Ananya Krishnan',r:'Chief of Cardiology',img:'https://i.pravatar.cc/200?img=37'},{n:'Dr. Suresh Pillai',r:'Head of Neurology',img:'https://i.pravatar.cc/200?img=63'},{n:'Dr. Meera Gupta',r:'Oncology Director',img:'https://i.pravatar.cc/200?img=40'},{n:'Dr. Rajan Menon',r:'Orthopaedics Head',img:'https://i.pravatar.cc/200?img=71'}];
const REVIEWS=[{n:'Kavitha Subramanian',co:'Patient, Cardiology',q:'The care I received here was world-class. Dr. Krishnan explained everything clearly and the recovery was smooth.',img:'https://i.pravatar.cc/80?img=11'},{n:'Arjun Mehta',co:'Patient, Orthopaedics',q:'My knee replacement surgery was life-changing. Back to running marathons 6 months later. Incredible team.',img:'https://i.pravatar.cc/80?img=50'},{n:'Priya Lakshmi',co:'Patient, Oncology',q:'The oncology team held my hand through every step of chemotherapy. Deeply grateful for their compassion.',img:'https://i.pravatar.cc/80?img=2'}];
export default function HospitalPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;1,300&family=Roboto+Mono:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#f4f8fd;color:#0c1f3a;font-family:'Nunito Sans',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(244,248,253,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(14,165,233,.12);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Merriweather',serif;font-weight:700;font-size:1rem;background:linear-gradient(90deg,#0284C7,#0EA5E9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Nunito Sans',sans-serif;font-size:.85rem;color:rgba(14,165,233,.6);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#0284C7}
    .nav-cta{padding:.45rem 1.4rem;background:linear-gradient(135deg,#0284C7,#0EA5E9);border-radius:8px;font-family:'Nunito Sans',sans-serif;font-size:.82rem;font-weight:600;color:#fff;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:80px 4rem 3rem;max-width:1400px;margin:0 auto}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid rgba(14,165,233,.2);border-radius:50px;background:rgba(14,165,233,.06);font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:#0EA5E9;margin-bottom:2rem}
    .dot{width:6px;height:6px;background:#22C55E;border-radius:50%;animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.2}}
    h1{font-family:'Merriweather',serif;font-size:clamp(2.5rem,4.5vw,4.5rem);font-weight:700;line-height:1.1;letter-spacing:-.02em;margin-bottom:1.5rem;color:#0c1f3a}
    .grad{background:linear-gradient(135deg,#0284C7,#0EA5E9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1rem;font-weight:300;color:rgba(12,31,58,.55);line-height:1.85;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:linear-gradient(135deg,#0284C7,#0EA5E9);border-radius:10px;font-family:'Nunito Sans',sans-serif;font-weight:600;font-size:.9rem;color:#fff;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(14,165,233,.3)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(14,165,233,.3);border-radius:10px;font-size:.9rem;color:#0EA5E9;background:none;cursor:pointer}.bo:hover{border-color:#0284C7}
    .hero-img{border-radius:20px;overflow:hidden;border:1px solid rgba(14,165,233,.15);box-shadow:0 40px 80px rgba(14,165,233,.1)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{background:#edf4fb;border-top:1px solid rgba(14,165,233,.1);border-bottom:1px solid rgba(14,165,233,.1);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
    .stat-v{font-family:'Merriweather',serif;font-weight:700;font-size:2rem;color:#0284C7;margin-bottom:.3rem}
    .stat-l{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(12,31,58,.45)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(14,165,233,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Roboto Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#0EA5E9;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#0EA5E9}
    h2{font-family:'Merriweather',serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:700;letter-spacing:-.02em;margin-bottom:3rem;color:#0c1f3a}
    .dept-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .dept{background:#fff;border:1px solid rgba(14,165,233,.1);border-radius:16px;padding:2rem;transition:transform .3s,box-shadow .3s,border-color .3s}.dept:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(14,165,233,.1);border-color:rgba(14,165,233,.25)}
    .dept-i{font-size:2.5rem;margin-bottom:1rem}.dept-n{font-family:'Merriweather',serif;font-weight:700;color:#0c1f3a;margin-bottom:.5rem}.dept-d{font-size:.85rem;font-weight:300;color:rgba(12,31,58,.55);line-height:1.65}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{text-align:center;transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:1/1;border-radius:50%;overflow:hidden;margin-bottom:1rem;border:3px solid rgba(14,165,233,.2)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Merriweather',serif;font-weight:700;font-size:.9rem;color:#0c1f3a;margin-bottom:.25rem}
    .team-r{font-family:'Roboto Mono',monospace;font-size:.6rem;letter-spacing:.1em;color:rgba(14,165,233,.6);text-transform:uppercase}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:#fff;border:1px solid rgba(14,165,233,.1);border-radius:16px;padding:1.75rem;box-shadow:0 4px 20px rgba(14,165,233,.05)}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(14,165,233,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Merriweather',serif;font-weight:700;font-size:.88rem;color:#0c1f3a}.rev-co{font-family:'Roboto Mono',monospace;font-size:.6rem;color:rgba(14,165,233,.5)}
    .rev-q{font-size:.88rem;font-weight:300;color:rgba(12,31,58,.6);line-height:1.75;font-style:italic}
    .cta-s{padding:8rem 4rem;text-align:center;background:#edf4fb;border-top:1px solid rgba(14,165,233,.08)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(14,165,233,.08);display:flex;justify-content:space-between;font-family:'Roboto Mono',monospace;font-size:.7rem;color:rgba(14,165,233,.4);background:#f4f8fd}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.dept-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen Hospital</div><ul className="nav-links">{['Departments','Doctors','Appointments','Emergency'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Book Appointment</a></nav>
  <div className="hero"><div><div className="badge"><span className="dot"/>24/7 Emergency Care Available</div><h1>Your health,<br/>our <span className="grad">commitment.</span></h1><p className="sub">World-class medical care with compassion at its core. 500+ specialists, 24/7 emergency services, and cutting-edge treatment protocols across 30+ specialities.</p><div className="btns"><button className="bp">Book Appointment</button><button className="bo">Find a Doctor</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop" alt="Hospital"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Specialities</div><h2 className="rv">World-class <span className="grad">departments</span></h2><div className="dept-grid">{DEPTS.map(d=><div key={d.n} className="dept rv"><div className="dept-i">{d.i}</div><div className="dept-n">{d.n}</div><div className="dept-d">{d.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'#edf4fb'}}><div className="inner"><div className="label rv">Our Doctors</div><h2 className="rv">Led by the <span className="grad">best in medicine</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Patient Stories</div><h2 className="rv">Healing stories that <span className="grad">inspire</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Get Care</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Merriweather',serif",fontSize:'clamp(1.8rem,3.5vw,3rem)',fontWeight:700,color:'#0c1f3a'}}>Your wellness journey<br/>starts <span className="grad">today</span></h2><button className="bp" style={{marginTop:'.5rem'}}>Book Your Appointment</button></div>
  <footer><span>© 2025 Widescreen Hospital</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
