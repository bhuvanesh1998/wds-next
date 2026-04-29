import TopNav from '@/components/TopNav';
import Link from 'next/link';
import Cursor from '@/components/Cursor';

export default function RefundAndCancellation() {
  return (
    <>
      <Cursor />
      <TopNav />
      <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--ff-sans)', lineHeight: 1.6 }}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>Refund and Cancellation Policy</h1>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>Cancellation Policy</h2>
        <p>Clients may request to cancel their project or service within 7 days of signing the agreement or making the initial payment, provided work has not commenced. Once the project work has officially started, cancellation requests will be evaluated on a case-by-case basis, and the client will be billed for the work completed up to that point.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>Refund Policy</h2>
        <p>Refunds are only applicable under the following conditions:</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
          <li>If the cancellation request is made before the commencement of the project.</li>
          <li>If Widescreen Digital Solution fails to deliver the agreed-upon services due to internal reasons.</li>
        </ul>
        <p>No refunds will be provided once the final deliverables are handed over and approved by the client.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>Processing Refunds</h2>
        <p>Approved refunds will be processed within 7-10 business days and credited back to the original method of payment via the Cashfree payment gateway or the original payment method used.</p>
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
