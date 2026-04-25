'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [tab, setTab] = useState<'email' | 'phone'>('email');
  const [value, setValue] = useState('');
  const [done, setDone] = useState(false);

  const handleSubscribe = () => {
    if (!value.trim()) return;
    setDone(true);
    setValue('');
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <>
      <style>{`
        .newsletter-section { background: var(--bg); border-top: 1px solid var(--border); padding: 4rem 0; }
        .newsletter-inner { max-width: 1280px; margin: 0 auto; padding: 0 4rem; display: flex; align-items: center; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
        .newsletter-title { font-family: var(--ff-display); font-size: 1.4rem; font-weight: 700; letter-spacing: -.02em; margin-bottom: .4rem; }
        .newsletter-sub { font-size: .85rem; color: var(--text-muted); }
        .newsletter-form { display: flex; gap: .6rem; align-items: center; flex-wrap: wrap; }
        .newsletter-tabs { display: flex; gap: .3rem; background: var(--bg2); border: 1px solid var(--border); border-radius: 8px; padding: .25rem; }
        .newsletter-tab { padding: .35rem .9rem; border-radius: 6px; font-size: .75rem; font-family: var(--ff-mono); letter-spacing: .06em; text-transform: uppercase; color: var(--text-dim); transition: background .2s, color .2s; }
        .newsletter-tab.active { background: var(--glass-b); color: var(--blue); border: 1px solid var(--border-b); }
        .newsletter-input-wrap { display: flex; gap: .5rem; align-items: center; background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: .3rem .3rem .3rem 1rem; min-width: 340px; transition: border-color .2s, box-shadow .2s; }
        .newsletter-input-wrap:focus-within { border-color: var(--blue); box-shadow: 0 0 0 3px var(--glow-b); }
        .newsletter-input { flex: 1; background: none; border: none; outline: none; color: var(--text); font-family: var(--ff-body); font-size: .88rem; min-width: 0; }
        .newsletter-input::placeholder { color: var(--text-dim); }
        .newsletter-btn { padding: .6rem 1.4rem; background: linear-gradient(135deg,var(--blue),var(--purple)); border-radius: 7px; font-size: .78rem; font-weight: 600; letter-spacing: .06em; color: #fff; white-space: nowrap; transition: opacity .2s; }
        .newsletter-btn:hover { opacity: .85; }
        .newsletter-btn.done { background: linear-gradient(135deg,#10B981,#059669); }
        .newsletter-privacy { font-size: .7rem; color: var(--text-dim); font-family: var(--ff-mono); letter-spacing: .04em; margin-top: .5rem; }
      `}</style>
      <div className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-copy">
            <div className="newsletter-title">Stay in the loop</div>
            <div className="newsletter-sub">Design insights, AI product trends, and studio updates — no noise, just signal.</div>
          </div>
          <div>
            <div className="newsletter-tabs">
              <button className={`newsletter-tab${tab === 'email' ? ' active' : ''}`} onClick={() => setTab('email')}>Email</button>
              <button className={`newsletter-tab${tab === 'phone' ? ' active' : ''}`} onClick={() => setTab('phone')}>Mobile</button>
            </div>
            <div style={{ marginTop: '.8rem' }}>
              <div className="newsletter-input-wrap">
                <input
                  className="newsletter-input"
                  type={tab === 'email' ? 'email' : 'tel'}
                  placeholder={tab === 'email' ? 'Enter your email address' : '+1 (555) 000-0000'}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <button className={`newsletter-btn${done ? ' done' : ''}`} onClick={handleSubscribe}>
                  {done ? '✓ Done!' : 'Subscribe'}
                </button>
              </div>
              <div className="newsletter-privacy">No spam. Unsubscribe anytime.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
