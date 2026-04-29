import TopNav from '@/components/TopNav';
import Link from 'next/link';
import Cursor from '@/components/Cursor';

export default function TermsAndConditions() {
  return (
    <>
      <Cursor />
      <TopNav />
      <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--ff-sans)', lineHeight: 1.6 }}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>Terms and Conditions</h1>
        <p>Last updated: April 30, 2026</p>
        <p>Welcome to Widescreen Digital Solution (Widescreen.in). By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>1. Services</h2>
        <p>We provide UI/UX design, web development, and digital transformation services. The scope of work, deliverables, and timelines will be agreed upon in a separate contract or proposal.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>2. Payments</h2>
        <p>All payments for services must be made in accordance with the terms specified in your invoice or contract. We use third-party payment gateways (such as Cashfree) to process payments securely. By making a payment, you agree to the payment gateway's terms of service.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>3. Intellectual Property</h2>
        <p>Upon full payment, the client owns the final deliverables. We retain the right to showcase the work in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>4. User Responsibilities</h2>
        <p>You agree to provide accurate information and cooperate with our team to ensure the timely delivery of services. Any delays caused by the client may result in project timeline extensions.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>5. Limitation of Liability</h2>
        <p>Widescreen Digital Solution shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--ff-display)' }}>6. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Chennai, India.</p>
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
