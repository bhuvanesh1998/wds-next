'use client';
import { useEffect, useRef, useState } from 'react';

export default function AccountsPage() {
  const [counts, setCounts] = useState([0,0,0,0]);
  const targets = [500,98,12,300];
  useEffect(()=>{
    const timers = targets.map((t,i)=>{
      let v=0; return setInterval(()=>{ v=Math.min(v+Math.ceil(t/60),t); setCounts(c=>{const n=[...c];n[i]=v;return n;}); if(v>=t) clearInterval(timers?.[i]); },25);
    });
    return ()=>timers.forEach(clearInterval);
  },[]);
  useEffect(()=>{
    const els=document.querySelectorAll<HTMLElement>('.rv');
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1});
    els.forEach(e=>obs.observe(e)); return ()=>obs.disconnect();
  },[]);
  const services=[
    'Financial Auditing','Tax Planning & Compliance','Management Accounting','Forensic Accounting','Payroll Processing','Corporate Finance Advisory',
  ];
  const stats=[{v:counts[0],s:'+',l:'Clients Served'},{v:counts[1],s:'%',l:'Accuracy Rate'},{v:counts[2],s:' yrs',l:'Of Excellence'},{v:counts[3],s:'+',l:'Audits Completed'}];
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#060400;color:#fdf6e3;font-family:'DM Sans',sans-serif;overflow-x:hidden}
      .rv{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.rv.in{opacity:1;transform:none}
      nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(6,4,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(245,158,11,.1);height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3rem}
      .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;background:linear-gradient(90deg,#F59E0B,#D97706);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      .nav-links{display:flex;gap:2rem;list-style:none}.nav-links a{font-size:.85rem;color:rgba(245,158,11,.5);transition:color .2s}.nav-links a:hover{color:#F59E0B}
      .nav-cta{padding:.45rem 1.25rem;background:linear-gradient(135deg,#F59E0B,#D97706);border-radius:6px;font-size:.8rem;font-weight:600;color:#000}
      .hero{min-height:100vh;padding-top:64px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;padding-left:3rem;padding-right:3rem}
      .hero::before{content:'';position:absolute;top:0;right:0;width:50%;height:100%;background:linear-gradient(135deg,rgba(245,158,11,.04),transparent);border-left:1px solid rgba(245,158,11,.06);pointer-events:none}
      .grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(245,158,11,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.04) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}
      .hero-inner{position:relative;z-index:1;max-width:680px}
      .badge{display:inline-flex;align-items:center;gap:.6rem;padding:.4rem 1rem;border:1px solid rgba(245,158,11,.25);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:#F59E0B;margin-bottom:2rem}
      .line{width:20px;height:1px;background:#F59E0B}
      h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,5vw,5rem);font-weight:800;line-height:1.05;letter-spacing:-.035em;margin-bottom:1.5rem}
      .gold{background:linear-gradient(135deg,#F59E0B,#FBBF24,#FDE68A);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      p.sub{font-size:1rem;color:rgba(253,246,227,.55);line-height:1.8;margin-bottom:2.5rem;max-width:480px}
      .btns{display:flex;gap:1rem;flex-wrap:wrap}
      .bp{padding:.85rem 2.2rem;background:linear-gradient(135deg,#F59E0B,#D97706);border-radius:8px;font-weight:600;font-size:.9rem;color:#000;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(245,158,11,.25)}
      .bo{padding:.85rem 2.2rem;border:1px solid rgba(245,158,11,.25);border-radius:8px;font-size:.9rem;color:#F59E0B;background:none;cursor:pointer;transition:border-color .2s}.bo:hover{border-color:#F59E0B}
      .stats-bar{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(245,158,11,.1);border-bottom:1px solid rgba(245,158,11,.1)}
      .stat{padding:2.5rem 3rem;border-right:1px solid rgba(245,158,11,.07)}
      .stat:last-child{border-right:none}
      .stat-v{font-family:'Syne',sans-serif;font-size:2.2rem;font-weight:800;background:linear-gradient(135deg,#F59E0B,#FBBF24);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      .stat-l{font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(245,158,11,.35);margin-top:.3rem}
      .section{padding:7rem 3rem}
      .inner{max-width:1200px;margin:0 auto}
      .label{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#F59E0B;display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem}.label::before{content:'';width:20px;height:1px;background:#F59E0B}
      h2{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:3rem}
      .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.08);border-radius:12px;overflow:hidden}
      .svc{background:#0c0800;padding:2rem;transition:background .3s}.svc:hover{background:rgba(245,158,11,.06)}
      .svc-n{font-family:'Syne',sans-serif;font-weight:700;margin-bottom:.4rem}
      .cta-s{padding:8rem 3rem;text-align:center;background:linear-gradient(to bottom,rgba(245,158,11,.04),transparent)}
      footer{padding:2rem 3rem;border-top:1px solid rgba(245,158,11,.08);display:flex;justify-content:space-between;font-size:.75rem;color:rgba(245,158,11,.3);font-family:'JetBrains Mono',monospace}
      @media(max-width:768px){nav{padding:0 1.25rem}.nav-links{display:none}.hero{padding:5rem 1.25rem 3rem}.stats-bar{grid-template-columns:1fr 1fr}.stat{border-right:none;border-bottom:1px solid rgba(245,158,11,.07);padding:1.5rem}.section{padding:4rem 1.25rem}.svc-grid{grid-template-columns:1fr}.cta-s{padding:4rem 1.25rem}footer{flex-direction:column;gap:.3rem;padding:1.25rem}}
    `}</style>
    <nav>
      <div className="logo">Widescreen Accounts</div>
      <ul className="nav-links">{['Services','Industries','Team','Contact'].map(l=><li key={l}><a href="#">{l}</a></li>)}</ul>
      <a href="#" className="nav-cta">Book Consultation</a>
    </nav>
    <div className="hero">
      <div className="grid-bg"/>
      <div className="hero-inner">
        <div className="badge"><span className="line"/>Certified Chartered Accountants</div>
        <h1>Precision.<br/>Compliance.<br/><span className="gold">Trust.</span></h1>
        <p className="sub">Expert financial auditing, tax advisory and accounting services trusted by 500+ businesses across industries for over a decade.</p>
        <div className="btns"><button className="bp">Request a Quote</button><button className="bo">Our Services</button></div>
      </div>
    </div>
    <div className="stats-bar">
      {stats.map(s=><div key={s.l} className="stat rv"><div className="stat-v">{s.v}{s.s}</div><div className="stat-l">{s.l}</div></div>)}
    </div>
    <section className="section">
      <div className="inner">
        <div className="label rv">What We Offer</div>
        <h2 className="rv">Financial expertise<br/>you can <span className="gold">rely on</span></h2>
        <div className="svc-grid">
          {services.map(s=><div key={s} className="svc rv"><div className="svc-n">{s}</div></div>)}
        </div>
      </div>
    </section>
    <div className="cta-s rv">
      <div className="label" style={{justifyContent:'center'}}>Let's Talk</div>
      <h2 style={{marginBottom:'2rem'}}>Ready for <span className="gold">financial clarity?</span></h2>
      <button className="bp">Schedule a Free Consultation</button>
    </div>
    <footer><span>© 2025 Widescreen Accounts & Audit</span><span>Powered by Widescreen Studio</span></footer>
  </>);
}
