import TopNav from '@/components/TopNav';
import Link from 'next/link';
import Cursor from '@/components/Cursor';

export default function ContactUs() {
  return (
    <>
      <Cursor />
      <TopNav />
      <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--ff-sans)', lineHeight: 1.6 }}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>Contact Us</h1>
        
        <p>We would love to hear from you. If you have any questions, concerns, or feedback, please reach out to us using the details below.</p>
        
        <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--bg-card, #f9f9f9)', borderRadius: '8px' }}>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', marginBottom: '1rem' }}>Widescreen Digital Solution</h3>
          <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> <a href="mailto:info@widescreen.in" style={{ color: 'inherit' }}>info@widescreen.in</a></p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> <a href="tel:+917092701804" style={{ color: 'inherit' }}>+91-70927-01804</a></p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Operating Address:</strong><br />
            No. 12, 1st Floor, Tech Park Road,<br />
            Chennai, Tamil Nadu, 600001,<br />
            India
          </p>
        </div>
      </main>
      <footer className="site-footer">
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1rem' }}>WDS</div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em' }}>
          © 2026 Widescreen Digital Solution. All rights reserved.
        </div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em', display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>Terms &amp; Conditions</Link>
          <Link href="/refund-and-cancellation" style={{ color: 'inherit', textDecoration: 'none' }}>Refund &amp; Cancellation</Link>
          <Link href="/contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
        </div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em' }}>
          info@widescreen.in
        </div>
      </footer>
    </>
  );
}
