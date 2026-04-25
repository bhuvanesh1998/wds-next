'use client';
import { useEffect } from 'react';

const TEMPLATES = [
  { slug: 'hr',           title: 'HR Consulting',     tag: 'People & Culture', color: '#8B5CF6', emoji: '👥', desc: 'Talent acquisition, culture design & workforce transformation at scale.' },
  { slug: 'accounts',     title: 'Accounts & Audit',  tag: 'Finance',          color: '#F59E0B', emoji: '📊', desc: 'Precision financial reporting, compliance audits & advisory services.' },
  { slug: 'analytics',    title: 'Data Analytics',    tag: 'Intelligence',     color: '#06B6D4', emoji: '📈', desc: 'Turn raw data into decisions. Dashboards, insights & predictive models.' },
  { slug: 'consulting',   title: 'Consulting Firm',   tag: 'Strategy',         color: '#D97706', emoji: '🧭', desc: 'Executive strategy, market entry & business transformation leadership.' },
  { slug: 'devops',       title: 'DevOps Agency',     tag: 'Engineering',      color: '#22C55E', emoji: '⚙️', desc: 'CI/CD pipelines, cloud infra, zero-downtime deployments & SRE practices.' },
  { slug: 'design',       title: 'Design Consulting', tag: 'Creative',         color: '#EC4899', emoji: '🎨', desc: 'Brand systems, product design & motion work that converts and inspires.' },
  { slug: 'portfolio',    title: 'Portfolio',         tag: 'Personal Brand',   color: '#F97316', emoji: '✦', desc: 'A bold, minimal portfolio built to land your next freelance or full-time role.' },
  { slug: 'ecommerce',    title: 'Ecommerce',         tag: 'Commerce',         color: '#EF4444', emoji: '🛍️', desc: 'High-converting product pages with trust signals, social proof & urgency.' },
  { slug: 'hospital',     title: 'Hospital',          tag: 'Healthcare',       color: '#0EA5E9', emoji: '🏥', desc: 'Trust-first design for clinics, hospitals & health brands. Appointment-ready.' },
  { slug: 'app-showcase', title: 'App Showcase',      tag: 'Mobile / SaaS',   color: '#A78BFA', emoji: '📱', desc: 'Launch your app with a page that downloads it for you. Reviews, features & CTA.' },
  { slug: 'shopping',     title: 'Shopping Mart',     tag: 'Retail',           color: '#10B981', emoji: '🛒', desc: 'Category-first retail landing with promotions, trust badges & quick reorder.' },
  { slug: 'food-court',   title: 'Food Court',        tag: 'F&B',              color: '#F97316', emoji: '🍜', desc: 'Multi-vendor food discovery. Cuisine stalls, daily deals & table ordering.' },
  { slug: 'fast-food',    title: 'Fast Food',         tag: 'Restaurant',       color: '#EF4444', emoji: '🍔', desc: 'Bold, appetite-driving fast food landing built to order in under 2 minutes.' },
  { slug: 'grievance',    title: 'Grievance App',     tag: 'Civic Tech',       color: '#3B82F6', emoji: '🏛️', desc: 'Transparent public grievance management. File, track & resolve with trust.' },
];

const MARQUEE = ['HR Consulting', 'Data Analytics', 'Ecommerce', 'DevOps', 'Hospital', 'App Showcase', 'Portfolio', 'Fast Food', 'Consulting', 'Food Court', 'Design', 'Grievance', 'Accounts', 'Shopping'];

export default function Templates() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tpl-home-card');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('tpl-visible'), i * 55);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="templates">
      <style>{`
        #templates { padding: 8rem 0 6rem; border-top: 1px solid var(--border-b); overflow: hidden; }
        .tpl-inner { max-width: 1300px; margin: 0 auto; padding: 0 4rem; }

        .tpl-top-row {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 1.5rem; gap: 2rem; flex-wrap: wrap;
        }
        .tpl-count-badge {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--glass-b); border: 1px solid var(--border-b);
          border-radius: 50px; padding: .35rem 1rem;
          font-family: var(--ff-mono); font-size: .65rem;
          letter-spacing: .15em; text-transform: uppercase; color: var(--blue);
          margin-bottom: 1rem;
        }
        .tpl-count-dot { width: 6px; height: 6px; background: var(--blue); border-radius: 50%; }
        .tpl-view-all {
          font-family: var(--ff-mono); font-size: .72rem; letter-spacing: .1em;
          color: var(--blue); border: 1px solid var(--border-b); border-radius: 6px;
          padding: .5rem 1.25rem; text-decoration: none; transition: background .2s, transform .2s;
          white-space: nowrap; flex-shrink: 0; display: inline-flex; align-items: center; gap: .4rem;
        }
        .tpl-view-all:hover { background: var(--glass-b); transform: translateY(-1px); }

        .tpl-sub {
          font-size: .95rem; color: var(--text-muted); max-width: 520px;
          line-height: 1.75; margin-bottom: 3.5rem;
        }

        /* Marquee strip */
        .tpl-marquee-wrap {
          overflow: hidden; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: .75rem 0; margin-bottom: 3.5rem;
        }
        .tpl-marquee { display: flex; gap: 2.5rem; animation: tpl-scroll 28s linear infinite; width: max-content; }
        @keyframes tpl-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tpl-marquee-item {
          font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--text-dim); white-space: nowrap;
          display: flex; align-items: center; gap: 1rem;
        }
        .tpl-marquee-item::after { content: '·'; color: var(--blue); font-size: 1rem; }

        /* Grid */
        .tpl-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem;
        }
        .tpl-home-card {
          border-radius: 16px; border: 1px solid var(--border); background: var(--bg2);
          padding: 1.6rem; text-decoration: none; display: flex; flex-direction: column; gap: .75rem;
          opacity: 0; transform: translateY(18px);
          transition: opacity .6s var(--ease-out), transform .6s var(--ease-out),
                      border-color .25s, box-shadow .25s, background .25s;
          position: relative; overflow: hidden;
        }
        .tpl-home-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--card-color, transparent) 0%, transparent 60%);
          opacity: 0; transition: opacity .3s;
        }
        .tpl-home-card:hover::before { opacity: .06; }
        .tpl-home-card.tpl-visible { opacity: 1; transform: none; }
        .tpl-home-card:hover {
          border-color: var(--card-color, var(--border-b));
          box-shadow: 0 16px 48px rgba(0,0,0,.4);
          transform: translateY(-4px);
        }
        .tpl-card-top { display: flex; align-items: center; justify-content: space-between; }
        .tpl-card-emoji {
          width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center;
          justify-content: center; font-size: 1.25rem;
          background: color-mix(in srgb, var(--card-color, var(--blue)) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--card-color, var(--blue)) 20%, transparent);
          flex-shrink: 0;
        }
        .tpl-card-tag {
          font-family: var(--ff-mono); font-size: .58rem; letter-spacing: .12em;
          text-transform: uppercase; color: var(--card-color, var(--blue));
          background: color-mix(in srgb, var(--card-color, var(--blue)) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--card-color, var(--blue)) 20%, transparent);
          padding: .2rem .6rem; border-radius: 4px;
        }
        .tpl-card-title {
          font-family: var(--ff-display); font-weight: 700; font-size: 1rem;
          color: var(--text); line-height: 1.2;
        }
        .tpl-card-desc {
          font-size: .78rem; color: var(--text-dim); line-height: 1.65; flex: 1;
        }
        .tpl-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: .75rem; border-top: 1px solid var(--border);
          font-family: var(--ff-mono); font-size: .65rem;
          color: var(--card-color, var(--blue)); letter-spacing: .08em;
        }
        .tpl-card-arrow {
          transform: translateX(-4px); transition: transform .2s; opacity: .7;
        }
        .tpl-home-card:hover .tpl-card-arrow { transform: translateX(0); opacity: 1; }

        /* Bottom CTA row */
        .tpl-bottom {
          margin-top: 3rem; padding-top: 2.5rem; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;
        }
        .tpl-bottom-text {
          font-size: .9rem; color: var(--text-muted);
        }
        .tpl-bottom-text strong { color: var(--text); font-weight: 600; }

        @media (max-width: 1100px) { .tpl-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) {
          #templates { padding: 5rem 0 4rem; }
          .tpl-inner { padding: 0 1.25rem; }
          .tpl-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .tpl-card-desc { display: none; }
        }
        @media (max-width: 480px) {
          .tpl-grid { grid-template-columns: 1fr 1fr; gap: .75rem; }
        }
      `}</style>

      <div className="tpl-inner">
        <div className="tpl-top-row">
          <div>
            <div className="tpl-count-badge reveal">
              <span className="tpl-count-dot" />
              14 Industry Templates
            </div>
            <div className="section-label reveal">Templates</div>
            <h2 className="section-title reveal">
              Ready-to-launch<br />
              <span className="gradient-text">landing pages</span>
            </h2>
          </div>
          <a href="/templates" target="_blank" rel="noopener noreferrer" className="tpl-view-all reveal">
            Browse All <span>→</span>
          </a>
        </div>

        <p className="tpl-sub reveal">
          14 fully animated, production-ready landing pages across every major industry.
          Each template ships with unique color systems, typography, and interaction design —
          built to convert from day one.
        </p>
      </div>

      <div className="tpl-marquee-wrap">
        <div className="tpl-marquee">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="tpl-marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <div className="tpl-inner">
        <div className="tpl-grid">
          {TEMPLATES.map(t => (
            <a
              key={t.slug}
              href={`/templates/${t.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tpl-home-card"
              style={{ '--card-color': t.color } as React.CSSProperties}
            >
              <div className="tpl-card-top">
                <div className="tpl-card-emoji">{t.emoji}</div>
                <div className="tpl-card-tag">{t.tag}</div>
              </div>
              <div className="tpl-card-title">{t.title}</div>
              <div className="tpl-card-desc">{t.desc}</div>
              <div className="tpl-card-footer">
                <span>Live Preview</span>
                <span className="tpl-card-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="tpl-bottom reveal">
          <div className="tpl-bottom-text">
            <strong>Need a custom template?</strong> Every template can be fully white-labelled, rebranded, and extended for your client.
          </div>
          <a href="/templates" target="_blank" rel="noopener noreferrer" className="tpl-view-all">
            View Full Showcase →
          </a>
        </div>
      </div>
    </section>
  );
}
