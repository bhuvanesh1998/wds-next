'use client';
import { useEffect } from 'react';
const STATS=[{v:'₹4,200Cr',l:'Assets Under Advisory'},{v:'99.8%',l:'Compliance Rate'},{v:'18 Years',l:'Industry Experience'},{v:'850+',l:'Clients Served'}];
const SERVICES=[{i:'📑',t:'Statutory Audit',d:'Independent verification of financial statements in line with ICAI and IFRS standards.'},{i:'💼',t:'Tax Advisory',d:'Corporate tax planning, GST compliance and transfer pricing for MNCs and SMEs.'},{i:'🔍',t:'Forensic Accounting',d:'Investigation of financial fraud, asset tracing and litigation support.'},{i:'📊',t:'Management Accounting',d:'Cost analysis, budgeting frameworks and variance reporting for CFOs.'},{i:'🌐',t:'Cross-border Compliance',d:'Navigating FEMA, DTAA treaties and international tax obligations.'},{i:'🏛️',t:'IPO & Fund Raising',d:'Due diligence, DRHP preparation and SEBI compliance for listings.'}];
const TEAM=[{n:'CA Vikram Sethi',r:'Senior Partner',img:'https://i.pravatar.cc/200?img=60'},{n:'CA Anjali Iyer',r:'Tax Practice Head',img:'https://i.pravatar.cc/200?img=49'},{n:'CA Suresh Babu',r:'Forensic Lead',img:'https://i.pravatar.cc/200?img=70'},{n:'CA Nisha Khanna',r:'Assurance Partner',img:'https://i.pravatar.cc/200?img=38'}];
const REVIEWS=[{n:'Dinesh Karthik',co:'CFO, Helix Pharma',q:'Their forensic team uncovered a ₹3.2Cr discrepancy that our internal audit missed. Exceptional precision.',img:'https://i.pravatar.cc/80?img=12'},{n:'Shweta Bose',co:'MD, Arcadia Exports',q:'Cross-border tax structure they designed saved us ₹1.8Cr annually. Highly recommended.',img:'https://i.pravatar.cc/80?img=25'},{n:'Ravi Teja',co:'CEO, NovaTech',q:'Flawless IPO due diligence. The SEBI team had zero comments on our DRHP submission.',img:'https://i.pravatar.cc/80?img=59'}];
export default function AccountsPage(){
  useEffect(()=>{const els=document.querySelectorAll<HTMLElement>('.rv');const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*60);obs.unobserve(e.target);}}),{threshold:.06});els.forEach(e=>obs.observe(e));return()=>obs.disconnect();},[]);
  return(<><style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Source+Sans+3:wght@300;400;600&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#060400;color:#fdf5e0;font-family:'Source Sans 3',sans-serif;overflow-x:hidden;cursor:auto}
    .rv{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,4,0,.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(245,158,11,.15);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
    .logo{font-family:'Playfair Display',serif;font-weight:700;font-size:1.15rem;color:#F59E0B;font-style:italic}
    .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-family:'Courier Prime',monospace;font-size:.8rem;color:rgba(245,158,11,.5);transition:color .2s;cursor:pointer}.nav-links a:hover{color:#F59E0B}
    .nav-cta{padding:.45rem 1.4rem;background:#F59E0B;border-radius:4px;font-family:'Source Sans 3',sans-serif;font-size:.82rem;font-weight:600;color:#060400;cursor:pointer}
    .hero{min-height:100vh;padding-top:64px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding-left:4rem;padding-right:4rem;max-width:1400px;margin:0 auto;position:relative}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 30%,rgba(245,158,11,.07),transparent 60%);pointer-events:none}
    .badge{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;border:1px solid rgba(245,158,11,.3);border-radius:4px;background:rgba(245,158,11,.06);font-family:'Courier Prime',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:#F59E0B;margin-bottom:2rem}
    h1{font-family:'Playfair Display',serif;font-size:clamp(2.8rem,5vw,5.5rem);font-weight:800;line-height:1.05;letter-spacing:-.02em;margin-bottom:1.5rem}
    .grad{background:linear-gradient(135deg,#F59E0B,#FCD34D);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    p.sub{font-size:1.05rem;color:rgba(253,245,224,.55);line-height:1.85;margin-bottom:2.5rem;max-width:480px}
    .btns{display:flex;gap:1rem;flex-wrap:wrap}
    .bp{padding:.9rem 2.4rem;background:#F59E0B;border-radius:4px;font-family:'Source Sans 3',sans-serif;font-weight:600;font-size:.9rem;color:#060400;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(245,158,11,.3)}
    .bo{padding:.9rem 2.4rem;border:1px solid rgba(245,158,11,.3);border-radius:4px;font-size:.9rem;color:#F59E0B;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#F59E0B}
    .hero-img{border-radius:12px;overflow:hidden;border:1px solid rgba(245,158,11,.12);box-shadow:0 40px 80px rgba(0,0,0,.6)}
    .hero-img img{width:100%;height:480px;object-fit:cover;display:block}
    .stats-bar{background:rgba(245,158,11,.04);border-top:1px solid rgba(245,158,11,.1);border-bottom:1px solid rgba(245,158,11,.1);padding:2.5rem 4rem}
    .stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
    .stat{text-align:center;border-right:1px solid rgba(245,158,11,.1)}.stat:last-child{border:none}
    .stat-v{font-family:'Playfair Display',serif;font-weight:700;font-size:2rem;color:#F59E0B;margin-bottom:.3rem}
    .stat-l{font-family:'Courier Prime',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(253,245,224,.4)}
    .section{padding:7rem 4rem;border-top:1px solid rgba(245,158,11,.06)}
    .inner{max-width:1200px;margin:0 auto}
    .label{font-family:'Courier Prime',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:#F59E0B;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F59E0B}
    h2{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;letter-spacing:-.01em;margin-bottom:3rem}
    .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
    .svc{background:rgba(245,158,11,.03);border:1px solid rgba(245,158,11,.1);border-radius:8px;padding:2rem;transition:border-color .3s,transform .3s}.svc:hover{border-color:rgba(245,158,11,.3);transform:translateY(-4px)}
    .svc-i{font-size:2rem;margin-bottom:1rem}.svc-t{font-family:'Playfair Display',serif;font-weight:700;font-size:1.05rem;margin-bottom:.5rem}.svc-d{font-size:.9rem;color:rgba(253,245,224,.5);line-height:1.7}
    .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
    .team-card{transition:transform .3s}.team-card:hover{transform:translateY(-4px)}
    .team-img{width:100%;aspect-ratio:3/4;border-radius:8px;overflow:hidden;margin-bottom:1rem;border:1px solid rgba(245,158,11,.12)}
    .team-img img{width:100%;height:100%;object-fit:cover}
    .team-n{font-family:'Playfair Display',serif;font-weight:700;font-size:.95rem;margin-bottom:.25rem}
    .team-r{font-family:'Courier Prime',monospace;font-size:.62rem;letter-spacing:.1em;color:rgba(245,158,11,.6);text-transform:uppercase}
    .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
    .rev{background:rgba(245,158,11,.03);border:1px solid rgba(245,158,11,.1);border-radius:8px;padding:1.75rem}
    .rev-head{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem}
    .rev-img{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(245,158,11,.2)}
    .rev-img img{width:100%;height:100%;object-fit:cover}
    .rev-n{font-family:'Playfair Display',serif;font-weight:700;font-size:.9rem}.rev-co{font-family:'Courier Prime',monospace;font-size:.6rem;color:rgba(245,158,11,.5);letter-spacing:.08em}
    .rev-q{font-family:'Playfair Display',serif;font-size:.9rem;color:rgba(253,245,224,.65);line-height:1.75;font-style:italic}
    .cta-s{padding:8rem 4rem;text-align:center;background:rgba(245,158,11,.03);border-top:1px solid rgba(245,158,11,.08)}
    footer{padding:2rem 4rem;border-top:1px solid rgba(245,158,11,.08);display:flex;justify-content:space-between;font-family:'Courier Prime',monospace;font-size:.72rem;color:rgba(245,158,11,.35)}
    @media(max-width:900px){.hero{grid-template-columns:1fr;padding:5rem 1.5rem 3rem;gap:3rem}.hero-img img{height:260px}.stats-inner{grid-template-columns:1fr 1fr}.svc-grid{grid-template-columns:1fr 1fr}.team-grid{grid-template-columns:1fr 1fr}.rev-grid{grid-template-columns:1fr}.section,.cta-s{padding:4rem 1.5rem}.stats-bar{padding:2rem 1.5rem}nav{padding:0 1.25rem}.nav-links{display:none}footer{flex-direction:column;gap:.3rem;padding:1.5rem}}
  `}</style>
  <nav><div className="logo">Widescreen & Associates</div><ul className="nav-links">{['Services','Partners','Industries','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul><a href="#" className="nav-cta">Request a Consultation</a></nav>
  <div className="hero"><div><div className="badge">Chartered Accountants · Est. 2007</div><h1>Precision. <span className="grad">Integrity.</span><br/>Expertise.</h1><p className="sub">A full-service CA firm providing audit, tax, forensic and advisory services to India's leading corporations and emerging businesses.</p><div className="btns"><button className="bp">Book a Consultation</button><button className="bo">Download Firm Profile</button></div></div><div className="hero-img rv"><img src="https://images.unsplash.com/photo-1554224155-8d04cb9e4e3d?w=900&q=80&auto=format&fit=crop" alt="Accounting office"/></div></div>
  <div className="stats-bar"><div className="stats-inner">{STATS.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}</div><div className="stat-l">{s.l}</div></div>)}</div></div>
  <div className="section"><div className="inner"><div className="label rv">Our Practice Areas</div><h2 className="rv">Comprehensive financial <span className="grad">expertise</span></h2><div className="svc-grid">{SERVICES.map(s=><div key={s.t} className="svc rv"><div className="svc-i">{s.i}</div><div className="svc-t">{s.t}</div><div className="svc-d">{s.d}</div></div>)}</div></div></div>
  <div className="section" style={{background:'rgba(245,158,11,.02)'}}><div className="inner"><div className="label rv">Our Partners</div><h2 className="rv">Decades of <span className="grad">combined expertise</span></h2><div className="team-grid">{TEAM.map(m=><div key={m.n} className="team-card rv"><div className="team-img"><img src={m.img} alt={m.n}/></div><div className="team-n">{m.n}</div><div className="team-r">{m.r}</div></div>)}</div></div></div>
  <div className="section"><div className="inner"><div className="label rv">Client Testimonials</div><h2 className="rv">Trusted by <span className="grad">industry leaders</span></h2><div className="rev-grid">{REVIEWS.map(r=><div key={r.n} className="rev rv"><div className="rev-head"><div className="rev-img"><img src={r.img} alt={r.n}/></div><div><div className="rev-n">{r.n}</div><div className="rev-co">{r.co}</div></div></div><div className="rev-q">"{r.q}"</div></div>)}</div></div></div>
  <div className="cta-s rv"><div className="label" style={{justifyContent:'center'}}>Get In Touch</div><h2 style={{marginBottom:'1.5rem',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700}}>Let's discuss your <span className="grad">financial goals</span></h2><button className="bp" style={{marginTop:'1rem'}}>Schedule a Meeting</button></div>
  <footer><span>© 2025 Widescreen & Associates, Chartered Accountants</span><span>info@widescreen.in · +91 70927 01804</span></footer>
  </>);
}
