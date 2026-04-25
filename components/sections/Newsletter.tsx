'use client';
import { useState } from 'react';

type Channel = 'email' | 'phone' | 'whatsapp' | 'telegram';

const TABS: { id: Channel; label: string; icon: string; placeholder: string; type: string }[] = [
  { id: 'email',    label: 'Email',    icon: '✉',  placeholder: 'Enter your email address',  type: 'email' },
  { id: 'phone',    label: 'Mobile',   icon: '📱',  placeholder: '+91 98765 43210',            type: 'tel'   },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬',  placeholder: '+91 98765 43210 (WhatsApp)', type: 'tel'   },
  { id: 'telegram', label: 'Telegram', icon: '✈',  placeholder: '@yourusername or +91…',      type: 'text'  },
];

const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_RE = /^\+?[\d\s\-]{7,20}$/;

export default function Newsletter() {
  const [tab, setTab]     = useState<Channel>('email');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const validate = () => {
    const v = value.trim();
    if (!v) return 'Please enter a value';
    if (tab === 'email' && !EMAIL_RE.test(v)) return 'Invalid email address';
    if ((tab === 'phone' || tab === 'whatsapp') && !MOBILE_RE.test(v)) return 'Invalid number';
    if (tab === 'telegram' && v.length < 3) return 'Too short';
    return '';
  };

  const handleSubscribe = async () => {
    const err = validate();
    if (err) { setErrMsg(err); return; }
    setErrMsg('');
    setStatus('sending');
    try {
      const payload: Record<string, string> = {};
      if (tab === 'email')    payload.email    = value.trim();
      if (tab === 'phone')    payload.mobile   = value.trim();
      if (tab === 'whatsapp') payload.whatsapp = value.trim();
      if (tab === 'telegram') payload.telegram = value.trim();

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus('done');
      setValue('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const active = TABS.find(t => t.id === tab)!;

  return (
    <>
      <style>{`
        .newsletter-section { background: var(--bg); border-top: 1px solid var(--border); padding: 4rem 0; }
        .newsletter-inner { max-width: 1280px; margin: 0 auto; padding: 0 4rem; display: flex; align-items: center; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
        .newsletter-title { font-family: var(--ff-display); font-size: 1.4rem; font-weight: 700; letter-spacing: -.02em; margin-bottom: .4rem; }
        .newsletter-sub { font-size: .85rem; color: var(--text-muted); }
        .newsletter-tabs { display: flex; gap: .3rem; background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: .25rem; }
        .newsletter-tab { display: flex; align-items: center; gap: .35rem; padding: .4rem 1rem; border-radius: 7px; font-size: .72rem; font-family: var(--ff-mono); letter-spacing: .06em; text-transform: uppercase; color: var(--text-dim); transition: background .2s, color .2s; white-space: nowrap; }
        .newsletter-tab.active { background: var(--glass-b); color: var(--blue); border: 1px solid var(--border-b); }
        .newsletter-tab-icon { font-size: .85rem; }
        .newsletter-input-wrap { display: flex; gap: .5rem; align-items: center; background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: .3rem .3rem .3rem 1rem; min-width: 360px; transition: border-color .2s, box-shadow .2s; }
        .newsletter-input-wrap:focus-within { border-color: var(--blue); box-shadow: 0 0 0 3px var(--glow-b); }
        .newsletter-input-wrap.has-error { border-color: #ef4444; }
        .newsletter-input { flex: 1; background: none; border: none; outline: none; color: var(--text); font-family: var(--ff-body); font-size: .88rem; min-width: 0; }
        .newsletter-input::placeholder { color: var(--text-dim); }
        .newsletter-btn { padding: .6rem 1.4rem; background: linear-gradient(135deg,var(--blue),var(--purple)); border-radius: 7px; font-size: .78rem; font-weight: 600; letter-spacing: .06em; color: #fff; white-space: nowrap; transition: opacity .2s; }
        .newsletter-btn:hover:not(:disabled) { opacity: .85; }
        .newsletter-btn:disabled { opacity: .6; }
        .newsletter-btn.done { background: linear-gradient(135deg,#16a34a,#15803d); }
        .newsletter-btn.error { background: linear-gradient(135deg,#dc2626,#b91c1c); }
        .newsletter-footer { display: flex; align-items: center; justify-content: space-between; margin-top: .5rem; }
        .newsletter-privacy { font-size: .68rem; color: var(--text-dim); font-family: var(--ff-mono); letter-spacing: .04em; }
        .newsletter-errmsg { font-size: .68rem; color: #ef4444; font-family: var(--ff-mono); letter-spacing: .04em; }
        @media (max-width: 768px) {
          .newsletter-inner { flex-direction: column; align-items: flex-start; padding: 0 1.5rem; gap: 2rem; }
          .newsletter-tabs { flex-wrap: wrap; }
          .newsletter-input-wrap { min-width: 0; width: 100%; }
        }
      `}</style>
      <div className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-copy">
            <div className="newsletter-title">Stay in the loop</div>
            <div className="newsletter-sub">Design insights, AI trends &amp; studio updates — pick how you want to hear from us.</div>
          </div>
          <div>
            <div className="newsletter-tabs">
              {TABS.map(t => (
                <button
                  key={t.id}
                  className={`newsletter-tab${tab === t.id ? ' active' : ''}`}
                  onClick={() => { setTab(t.id); setValue(''); setErrMsg(''); }}
                >
                  <span className="newsletter-tab-icon">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '.8rem' }}>
              <div className={`newsletter-input-wrap${errMsg ? ' has-error' : ''}`}>
                <input
                  className="newsletter-input"
                  type={active.type}
                  placeholder={active.placeholder}
                  value={value}
                  onChange={e => { setValue(e.target.value); setErrMsg(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  maxLength={tab === 'email' ? 254 : 80}
                />
                <button
                  className={`newsletter-btn${status === 'done' ? ' done' : status === 'error' ? ' error' : ''}`}
                  onClick={handleSubscribe}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? '…' : status === 'done' ? '✓ Done!' : status === 'error' ? '✗ Retry' : 'Subscribe'}
                </button>
              </div>
              <div className="newsletter-footer">
                {errMsg
                  ? <span className="newsletter-errmsg">{errMsg}</span>
                  : <span className="newsletter-privacy">No spam. Unsubscribe anytime.</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
