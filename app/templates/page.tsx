'use client';
import { useEffect, useRef } from 'react';

const TEMPLATES = [
  { slug: 'hr',           title: 'HR Consulting',        tag: 'People & Culture',    color: '#8B5CF6', bg: 'linear-gradient(135deg,#1a0533,#2d1060)',  desc: 'Talent acquisition, HR strategy & workforce transformation.' },
  { slug: 'accounts',     title: 'Accounts & Audit',     tag: 'Finance',             color: '#F59E0B', bg: 'linear-gradient(135deg,#0c0a00,#1a1400)',  desc: 'Precision financial reporting, compliance & audit excellence.' },
  { slug: 'analytics',    title: 'Data Analytics',       tag: 'Intelligence',        color: '#06B6D4', bg: 'linear-gradient(135deg,#00080f,#001a2e)',  desc: 'Turn raw data into decisions that drive growth.' },
  { slug: 'consulting',   title: 'Consulting Firm',      tag: 'Strategy',            color: '#D97706', bg: 'linear-gradient(135deg,#0f0800,#1c1000)',  desc: 'Executive strategy, transformation & market leadership.' },
  { slug: 'devops',       title: 'DevOps Agency',        tag: 'Engineering',         color: '#22C55E', bg: 'linear-gradient(135deg,#000d00,#001a08)',  desc: 'CI/CD, cloud infra & zero-downtime deployments.' },
  { slug: 'design',       title: 'Design Consulting',    tag: 'Creative',            color: '#EC4899', bg: 'linear-gradient(135deg,#1a0010,#2d0020)',  desc: 'Brand systems, product design & motion that converts.' },
  { slug: 'portfolio',    title: 'Portfolio Landing',    tag: 'Personal Brand',      color: '#F97316', bg: 'linear-gradient(135deg,#0f0800,#1a0c00)',  desc: 'A minimal, bold portfolio built to get you hired.' },
  { slug: 'ecommerce',    title: 'Ecommerce Landing',    tag: 'Commerce',            color: '#EF4444', bg: 'linear-gradient(135deg,#1a0000,#2d0808)',  desc: 'High-converting product pages with social proof built in.' },
  { slug: 'hospital',     title: 'Hospital Landing',     tag: 'Healthcare',          color: '#0EA5E9', bg: 'linear-gradient(135deg,#00060f,#001528)',  desc: 'Trust-first design for clinics, hospitals & health brands.' },
  { slug: 'app-showcase', title: 'App Showcase',         tag: 'Mobile / SaaS',       color: '#A78BFA', bg: 'linear-gradient(135deg,#0a001a,#120028)',  desc: 'Launch your app with a page that downloads it for you.' },
  { slug: 'shopping',     title: 'Shopping Mart',        tag: 'Retail',              color: '#10B981', bg: 'linear-gradient(135deg,#00100a,#001a10)',  desc: 'Category-first retail landing with promotions & trust.' },
  { slug: 'food-court',   title: 'Food Court',           tag: 'F&B',                 color: '#F97316', bg: 'linear-gradient(135deg,#0f0500,#1a0800)',  desc: 'Multi-vendor food court with cuisine discovery & ordering.' },
  { slug: 'fast-food',    title: 'Fast Food',            tag: 'Restaurant',          color: '#EF4444', bg: 'linear-gradient(135deg,#1a0000,#200500)',  desc: 'Bold, appetizing fast food landing built to order.' },
  { slug: 'grievance',    title: 'Grievance App',        tag: 'Civic Tech',          color: '#3B82F6', bg: 'linear-gradient(135deg,#00040f,#000c1f)',  desc: 'Transparent complaint management for citizens & orgs.' },
];

export default function TemplatesPage() {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tpl-card');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050302; color: #fef3e2; font-family: 'DM Sans', sans-serif; }
        .tpl-page { min-height: 100vh; background: #050302; }

        /* Header */
        .tpl-header { position: sticky; top: 0; z-index: 50; background: rgba(5,3,2,.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(249,115,22,.12); padding: 0 3rem; height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .tpl-header-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; background: linear-gradient(90deg,#F97316,#FB923C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .tpl-header-back { font-family: 'JetBrains Mono', monospace; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(196,168,130,.6); text-decoration: none; transition: color .2s; }
        .tpl-header-back:hover { color: #F97316; }

        /* Hero */
        .tpl-hero { padding: 6rem 3rem 4rem; text-align: center; position: relative; overflow: hidden; }
        .tpl-hero::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(249,115,22,.08) 0%, transparent 70%); pointer-events: none; }
        .tpl-eyebrow { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: #F97316; margin-bottom: 1.5rem; }
        .tpl-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem,5vw,4.5rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.05; margin-bottom: 1.25rem; }
        .tpl-hero h1 span { background: linear-gradient(135deg,#F97316,#FB923C,#FBBF24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .tpl-hero p { font-size: 1.05rem; color: rgba(196,168,130,.8); max-width: 520px; margin: 0 auto 1rem; line-height: 1.7; }
        .tpl-count { font-family: 'JetBrains Mono', monospace; font-size: .75rem; color: rgba(107,87,68,.8); letter-spacing: .1em; }

        /* Grid */
        .tpl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; padding: 2rem 3rem 6rem; max-width: 1400px; margin: 0 auto; }

        /* Card */
        .tpl-card { border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,200,150,.07); background: #100c08; cursor: pointer; transition: transform .4s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .4s; opacity: 0; transform: translateY(32px); }
        .tpl-card.visible { opacity: 1; transform: translateY(0); }
        .tpl-card:hover { transform: translateY(-6px) scale(1.01); border-color: rgba(249,115,22,.3); box-shadow: 0 24px 60px rgba(0,0,0,.5); }
        .tpl-preview { height: 220px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .tpl-preview-inner { display: flex; flex-direction: column; align-items: center; gap: .75rem; z-index: 1; }
        .tpl-preview-icon { font-size: 3rem; filter: drop-shadow(0 0 20px currentColor); }
        .tpl-preview-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; letter-spacing: -.02em; color: #fff; text-shadow: 0 2px 20px rgba(0,0,0,.5); }
        .tpl-preview-tag { font-family: 'JetBrains Mono', monospace; font-size: .6rem; letter-spacing: .15em; text-transform: uppercase; padding: .25rem .7rem; border-radius: 2rem; border: 1px solid rgba(255,255,255,.2); color: rgba(255,255,255,.7); background: rgba(255,255,255,.07); }
        .tpl-preview-glow { position: absolute; inset: 0; opacity: .6; }
        .tpl-preview-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size: 32px 32px; }
        .tpl-body { padding: 1.5rem; }
        .tpl-body-desc { font-size: .88rem; color: rgba(196,168,130,.7); line-height: 1.6; margin-bottom: 1.25rem; }
        .tpl-body-footer { display: flex; align-items: center; justify-content: space-between; }
        .tpl-body-brand { font-family: 'JetBrains Mono', monospace; font-size: .62rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(107,87,68,.6); }
        .tpl-body-link { font-family: 'JetBrains Mono', monospace; font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; padding: .4rem 1rem; border-radius: 6px; border: 1px solid; transition: background .2s, color .2s; }
        .tpl-card:hover .tpl-body-link { color: #000 !important; }

        @media (max-width: 768px) {
          .tpl-header { padding: 0 1.25rem; }
          .tpl-hero { padding: 4rem 1.25rem 2.5rem; }
          .tpl-grid { padding: 1rem 1.25rem 4rem; gap: 1rem; grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tpl-page">
        <header className="tpl-header">
          <span className="tpl-header-logo">Widescreen</span>
          <a href="/" className="tpl-header-back">← Back to Studio</a>
        </header>

        <section className="tpl-hero">
          <div className="tpl-eyebrow">Template Showcase</div>
          <h1>14 Industries.<br /><span>One Studio.</span></h1>
          <p>Every template is unique, animated, and built to convert — all crafted by Widescreen.</p>
          <div className="tpl-count">14 templates · click any to open full preview</div>
        </section>

        <div className="tpl-grid">
          {TEMPLATES.map(({ slug, title, tag, color, bg, desc }) => (
            <div
              key={slug}
              className="tpl-card"
              onClick={() => window.open(`/templates/${slug}`, '_blank')}
            >
              <div className="tpl-preview" style={{ background: bg }}>
                <div className="tpl-preview-grid" />
                <div className="tpl-preview-glow" style={{ background: `radial-gradient(circle at 50% 60%, ${color}33, transparent 70%)` }} />
                <div className="tpl-preview-inner">
                  <div className="tpl-preview-name" style={{ color }}>{title}</div>
                  <div className="tpl-preview-tag">{tag}</div>
                </div>
              </div>
              <div className="tpl-body">
                <div className="tpl-body-desc">{desc}</div>
                <div className="tpl-body-footer">
                  <span className="tpl-body-brand">Widescreen Studio</span>
                  <span className="tpl-body-link" style={{ borderColor: color, color }}>View →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
