'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

// Strip HTML tags and control characters to prevent XSS/injection
function sanitize(val: string) {
  return val.replace(/<[^>]*>/g, '').replace(/[^\x20-\x7E -￿]/g, '').trim().slice(0, 1000);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE  = /^[a-zA-Z\s'\-À-ÿ]{1,80}$/;

const DETAILS = [
  { icon: '✉', label: 'Email us',      text: 'info@widescreen.in' },
  { icon: '📞', label: 'Call us',       text: '+91 70927 01804' },
  { icon: '🌐', label: 'Response time', text: 'Within 24 hours' },
  { icon: '◎', label: 'Timezone',       text: 'IST · GMT · EST coverage' },
];

export default function Contact() {
  useReveal();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', service: '', message: '', budget: '' });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.value.slice(0, 1000);
    setForm(f => ({ ...f, [k]: val }));
    setErrors(err => ({ ...err, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<string, string>> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    else if (!NAME_RE.test(form.firstName)) e.firstName = 'Letters only';
    if (form.lastName && !NAME_RE.test(form.lastName)) e.lastName = 'Letters only';
    if (!form.email.trim()) e.email = 'Required';
    else if (!EMAIL_RE.test(form.email)) e.email = 'Invalid email';
    if (form.message && form.message.length < 10) e.message = 'Too short (min 10 chars)';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    try {
      const payload = {
        firstName: sanitize(form.firstName),
        lastName:  sanitize(form.lastName),
        email:     form.email.trim().slice(0, 254),
        company:   sanitize(form.company),
        service:   sanitize(form.service),
        message:   sanitize(form.message),
        budget:    sanitize(form.budget),
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ firstName: '', lastName: '', email: '', company: '', service: '', message: '', budget: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <>
      <style>{`
        #contact { padding: 10rem 0; background: var(--bg2); border-top: 1px solid var(--border); }
        .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
        .contact-tagline { font-family: var(--ff-display); font-size: clamp(2rem,3.5vw,3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -.03em; margin-bottom: 1.5rem; }
        .contact-sub { font-size: .95rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 2.5rem; }
        .contact-details { display: flex; flex-direction: column; gap: 1rem; }
        .contact-detail-item { display: flex; align-items: center; gap: 1rem; font-size: .88rem; color: var(--text-muted); }
        .contact-detail-icon { width: 40px; height: 40px; flex-shrink: 0; border-radius: 10px; background: var(--glass-b); border: 1px solid var(--border-b); display: flex; align-items: center; justify-content: center; font-size: .9rem; }
        .contact-detail-text { font-family: var(--ff-mono); font-size: .8rem; letter-spacing: .05em; }
        .contact-detail-label { font-size: .7rem; color: var(--text-dim); margin-bottom: .1rem; }
        .contact-form { background: var(--bg3); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1rem; }
        .form-label { font-family: var(--ff-mono); font-size: .65rem; letter-spacing: .15em; text-transform: uppercase; color: var(--text-dim); }
        .form-input, .form-textarea, .form-select { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: .85rem 1rem; color: var(--text); font-family: var(--ff-body); font-size: .9rem; outline: none; transition: border-color .2s, box-shadow .2s; width: 100%; }
        .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: var(--blue); box-shadow: 0 0 0 3px var(--glow-b); }
        .form-input.err, .form-textarea.err { border-color: #ef4444; }
        .form-error { font-family: var(--ff-mono); font-size: .6rem; color: #ef4444; margin-top: .25rem; letter-spacing: .05em; }
        .form-input::placeholder, .form-textarea::placeholder { color: var(--text-dim); }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-select { appearance: none; cursor: none; }
        .form-select option { background: var(--bg2); }
        .form-submit { width: 100%; padding: 1rem; background: linear-gradient(135deg,var(--blue),var(--purple)); border-radius: 10px; font-weight: 600; font-size: .9rem; letter-spacing: .04em; color: #fff; transition: opacity .2s, transform .2s var(--ease-out); margin-top: .5rem; cursor: none; }
        .form-submit:hover:not(:disabled) { opacity: .9; transform: translateY(-1px); }
        .form-submit:disabled { opacity: .6; }
        .form-submit.sent { background: linear-gradient(135deg,#16a34a,#15803d); }
        .form-submit.error { background: linear-gradient(135deg,#dc2626,#b91c1c); }
        .contact-gradient { background: linear-gradient(90deg,var(--blue),var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>
      <section id="contact">
        <div className="section-inner">
          <div className="contact-layout">
            <div className="contact-left reveal">
              <div className="section-label">Get In Touch</div>
              <h2 className="contact-tagline">
                Let&apos;s talk about<br />your next{' '}
                <span className="contact-gradient">big idea</span>
              </h2>
              <p className="contact-sub">Whether you&apos;re a startup ready to launch, or an enterprise looking to reimagine your digital experience — we want to hear from you.</p>
              <div className="contact-details">
                {DETAILS.map(d => (
                  <div key={d.label} className="contact-detail-item">
                    <div className="contact-detail-icon">{d.icon}</div>
                    <div>
                      <div className="contact-detail-label">{d.label}</div>
                      <div className="contact-detail-text">{d.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className={`form-input${errors.firstName ? ' err' : ''}`} type="text" placeholder="Alex" value={form.firstName} onChange={set('firstName')} maxLength={80} />
                  {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className={`form-input${errors.lastName ? ' err' : ''}`} type="text" placeholder="Rivera" value={form.lastName} onChange={set('lastName')} maxLength={80} />
                  {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className={`form-input${errors.email ? ' err' : ''}`} type="email" placeholder="alex@company.com" value={form.email} onChange={set('email')} maxLength={254} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input className="form-input" type="text" placeholder="Acme Corp" value={form.company} onChange={set('company')} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">What are you building?</label>
                <select className="form-select form-input" value={form.service} onChange={set('service')}>
                  <option value="" disabled>Select a service</option>
                  <option>UX Strategy</option>
                  <option>UI Design System</option>
                  <option>AI Product Design</option>
                  <option>Web &amp; App Development</option>
                  <option>Motion &amp; Interaction Design</option>
                  <option>Full Product Engagement</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Tell us about your project</label>
                <textarea className={`form-textarea${errors.message ? ' err' : ''}`} placeholder="We're building a B2B SaaS tool and need a complete redesign..." value={form.message} onChange={set('message')} maxLength={1000} />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <select className="form-select form-input" value={form.budget} onChange={set('budget')}>
                  <option value="" disabled>Select a range</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $50k</option>
                  <option>$50k – $150k</option>
                  <option>$150k+</option>
                </select>
              </div>
              <button type="submit" disabled={status === 'sending'} className={`form-submit${status === 'sent' ? ' sent' : status === 'error' ? ' error' : ''}`}>
                {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Message Sent!' : status === 'error' ? '✗ Failed — Try Again' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
