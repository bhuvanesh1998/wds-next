'use client';
import { useEffect } from 'react';

export default function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <style>{`
        .modal-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(5,5,8,.95); backdrop-filter: blur(20px); display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity .3s; }
        .modal-overlay.open { opacity: 1; pointer-events: all; }
        .modal { max-width: 800px; width: 90%; background: var(--bg3); border: 1px solid var(--border-b); border-radius: 20px; padding: 3rem; transform: translateY(20px); transition: transform .4s var(--ease-out); position: relative; }
        .modal-overlay.open .modal { transform: none; }
        .modal-close { position: absolute; top: 1.5rem; right: 1.5rem; width: 36px; height: 36px; border-radius: 50%; background: var(--glass); border: 1px solid var(--border); color: var(--text-muted); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; transition: background .2s, color .2s; }
        .modal-close:hover { background: var(--border); color: var(--text); }
        .modal-tags { display: flex; gap: .8rem; flex-wrap: wrap; }
        .modal-tag { padding: .4rem 1rem; border: 1px solid var(--border); border-radius: 2rem; font-size: .75rem; color: var(--text-muted); font-family: var(--ff-mono); }
        .modal-metrics { display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem; }
      `}</style>
      <div className={`modal-overlay${open ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="modal">
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Case Study</div>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>NeuralFlow Dashboard</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A full product redesign for an enterprise AI analytics platform. We rebuilt the information architecture from scratch, introduced a real-time data visualization layer, and designed a suite of AI confidence indicators that helped non-technical users understand model outputs.
          </p>
          <div className="modal-metrics">
            <div className="metric"><span className="metric-val">340%</span><span className="metric-label">Retention uplift</span></div>
            <div className="metric"><span className="metric-val">4.2x</span><span className="metric-label">Conversion rate</span></div>
            <div className="metric"><span className="metric-val">8 wks</span><span className="metric-label">Time to launch</span></div>
          </div>
          <div className="modal-tags">
            {['UX Strategy', 'Design System', 'AI Product Design', 'Frontend Dev'].map(t => (
              <span key={t} className="modal-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
