'use client';
import { useEffect } from 'react';

const TEMPLATES = [
  { slug: 'hr',           title: 'HR Consulting',     tag: 'People & Culture', color: '#8B5CF6' },
  { slug: 'accounts',     title: 'Accounts & Audit',  tag: 'Finance',          color: '#F59E0B' },
  { slug: 'analytics',    title: 'Data Analytics',    tag: 'Intelligence',     color: '#06B6D4' },
  { slug: 'consulting',   title: 'Consulting Firm',   tag: 'Strategy',         color: '#D97706' },
  { slug: 'devops',       title: 'DevOps Agency',     tag: 'Engineering',      color: '#22C55E' },
  { slug: 'design',       title: 'Design Consulting', tag: 'Creative',         color: '#EC4899' },
  { slug: 'portfolio',    title: 'Portfolio',         tag: 'Personal Brand',   color: '#F97316' },
  { slug: 'ecommerce',    title: 'Ecommerce',         tag: 'Commerce',         color: '#EF4444' },
  { slug: 'hospital',     title: 'Hospital',          tag: 'Healthcare',       color: '#0EA5E9' },
  { slug: 'app-showcase', title: 'App Showcase',      tag: 'Mobile / SaaS',   color: '#A78BFA' },
  { slug: 'shopping',     title: 'Shopping Mart',     tag: 'Retail',           color: '#10B981' },
  { slug: 'food-court',   title: 'Food Court',        tag: 'F&B',              color: '#F97316' },
  { slug: 'fast-food',    title: 'Fast Food',         tag: 'Restaurant',       color: '#EF4444' },
  { slug: 'grievance',    title: 'Grievance App',     tag: 'Civic Tech',       color: '#3B82F6' },
];

export default function Templates() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tpl-home-card');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('tpl-visible'), i * 50);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="templates">
      <style>{`
        #templates {
          padding: 7rem 3rem;
          border-top: 1px solid var(--border-b);
        }
        .tpl-home-inner { max-width: 1300px; margin: 0 auto; }
        .tpl-home-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .tpl-home-all {
          font-family: var(--ff-mono);
          font-size: .75rem;
          letter-spacing: .1em;
          color: var(--blue);
          border: 1px solid var(--border-b);
          border-radius: 6px;
          padding: .45rem 1.1rem;
          text-decoration: none;
          transition: background .2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .tpl-home-all:hover { background: var(--glass-b); }
        .tpl-home-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .tpl-home-card {
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--bg2);
          padding: 1.4rem 1.5rem;
          cursor: pointer;
          text-decoration: none;
          display: block;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .55s, transform .55s, border-color .25s, box-shadow .25s;
        }
        .tpl-home-card.tpl-visible { opacity: 1; transform: none; }
        .tpl-home-card:hover {
          border-color: var(--color, var(--border-b));
          box-shadow: 0 12px 36px rgba(0,0,0,.35);
          transform: translateY(-3px);
        }
        .tpl-home-tag {
          font-family: var(--ff-mono);
          font-size: .6rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: .65rem;
          opacity: .7;
        }
        .tpl-home-title {
          font-family: var(--ff-display);
          font-weight: 700;
          font-size: .95rem;
          color: var(--text);
          line-height: 1.2;
        }
        .tpl-home-arrow {
          margin-top: .85rem;
          font-size: .78rem;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity .2s, transform .2s;
          color: var(--color, var(--blue));
          font-family: var(--ff-mono);
        }
        .tpl-home-card:hover .tpl-home-arrow { opacity: 1; transform: none; }
        @media (max-width: 1024px) { .tpl-home-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px) {
          #templates { padding: 4rem 1.25rem; }
          .tpl-home-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        }
        @media (max-width: 480px) { .tpl-home-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <div className="tpl-home-inner">
        <div className="tpl-home-header">
          <div>
            <div className="section-label">Templates</div>
            <h2 className="section-title">
              Ready-to-launch<br />
              <span className="gradient-text">landing pages</span>
            </h2>
          </div>
          <a href="/templates" target="_blank" rel="noopener noreferrer" className="tpl-home-all">
            View All Templates →
          </a>
        </div>

        <div className="tpl-home-grid">
          {TEMPLATES.map(t => (
            <a
              key={t.slug}
              href={`/templates/${t.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tpl-home-card"
              style={{ '--color': t.color } as React.CSSProperties}
            >
              <div className="tpl-home-tag" style={{ color: t.color }}>{t.tag}</div>
              <div className="tpl-home-title">{t.title}</div>
              <div className="tpl-home-arrow">Preview →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
