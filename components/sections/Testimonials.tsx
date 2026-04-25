'use client';
import { useReveal } from '@/hooks/useReveal';

const TESTIMONIALS = [
  { quote: '"Widescreen completely transformed how we think about our product. They brought both strategic depth and visual craft we\'d never experienced in an agency before."', initials: 'SK', name: 'Sarah Kim', role: 'CPO, NeuralFlow' },
  { quote: '"The design system they built cut our sprint cycles in half. Every new feature ships faster because the foundation is so solid."', initials: 'MR', name: 'Marcus Reed', role: 'CTO, Orbit Finance' },
  { quote: '"They made our AI feel approachable. Users trust it now in a way they didn\'t before. That\'s a genuinely hard design problem they solved with elegance."', initials: 'AP', name: 'Amara Patel', role: 'Founder, Aether AI' },
  { quote: '"Not just a design agency — genuine product partners. They pushed back on our assumptions and were right every single time."', initials: 'JL', name: 'James Liu', role: 'CEO, Vertex Labs' },
];

const LOGOS = ['NeuralFlow', 'Orbit', 'Vertex Labs', 'Aether AI', 'Kinetic', 'Pulse', 'Meridian'];

function TestimonialCard({ quote, initials, name, role }: typeof TESTIMONIALS[0]) {
  return (
    <div className="testimonial-card">
      <p className="testi-quote">{quote}</p>
      <div className="testi-author">
        <div className="testi-avatar">{initials}</div>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  useReveal();
  return (
    <>
      <style>{`
        #testimonials { padding: 8rem 0; overflow: hidden; background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .marquee-wrapper { overflow: hidden; margin-bottom: 2rem; }
        .marquee { display: flex; gap: 2rem; animation: marquee 30s linear infinite; width: max-content; }
        .marquee-2 { animation-direction: reverse; animation-duration: 35s; }
        .testimonial-card { flex: 0 0 400px; padding: 2rem; background: var(--glass); border: 1px solid var(--border); border-radius: 16px; backdrop-filter: blur(8px); }
        .testi-quote { font-size: .92rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.2rem; }
        .testi-author { display: flex; align-items: center; gap: .8rem; }
        .testi-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg,var(--blue),var(--purple)); font-family: var(--ff-mono); font-size: .7rem; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 500; }
        .testi-name { font-size: .85rem; font-weight: 500; }
        .testi-role { font-size: .75rem; color: var(--text-dim); }
        .logos-strip { display: flex; gap: 4rem; justify-content: center; align-items: center; margin-top: 4rem; padding: 0 4rem; flex-wrap: wrap; opacity: 0; transition: opacity 1s ease; }
        .logos-strip.visible { opacity: 1; }
        .logo-item { font-family: var(--ff-display); font-size: 1rem; font-weight: 700; color: var(--text-dim); letter-spacing: -.02em; transition: color .3s, text-shadow .3s; }
        .logo-item:hover { color: var(--text-muted); text-shadow: 0 0 20px var(--glow-b); }
      `}</style>
      <section id="testimonials">
        <div className="section-inner" style={{ marginBottom: '3rem' }}>
          <div className="section-label reveal">What Clients Say</div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee marquee-2">
            {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
        <div className="logos-strip reveal">
          {LOGOS.map(l => <div key={l} className="logo-item">{l}</div>)}
        </div>
      </section>
    </>
  );
}
