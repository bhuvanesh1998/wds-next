import TopNav from '@/components/TopNav';
import Link from 'next/link';
import Cursor from '@/components/Cursor';

export default function ContactUs() {
  return (
    <>
      <Cursor />
      <TopNav />
      <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--ff-sans)', lineHeight: 1.6 }}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated on 30-04-2026 05:02:35</p>
        
        <p>You may contact us using the information below:</p>
        
        <div style={{ marginTop: '2rem', padding: '2.5rem', backgroundColor: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '20px' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Legal entity name:</strong> DHEENADAYALAN BHUVANESH</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Registered Address:</strong><br />
            15,Perumal Koil Street,Amman Temple Oppsite, Porur, Tamil Nadu, PIN: 600116
          </p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Operational Address:</strong><br />
            15,Perumal Koil Street,Amman Temple Oppsite, Porur, Tamil Nadu, PIN: 600116
          </p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Telephone No:</strong> <a href="tel:+917092701804" style={{ color: 'inherit' }}>7092701804</a></p>
          <p style={{ marginBottom: '0.5rem' }}><strong>E-Mail ID:</strong> <a href="mailto:bhuvaneshnumlk@gmail.com" style={{ color: 'inherit' }}>bhuvaneshnumlk@gmail.com</a></p>
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
