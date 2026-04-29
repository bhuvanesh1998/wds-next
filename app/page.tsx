'use client';
import { useState } from 'react';
import Cursor from '@/components/Cursor';
import TopNav from '@/components/TopNav';
import Modal from '@/components/Modal';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import Templates from '@/components/sections/Templates';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/sections/Newsletter';

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Cursor />
      <TopNav />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />

      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Work onOpenModal={() => setModalOpen(true)} />
        <Templates />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
        <Newsletter />
      </main>

      <footer className="site-footer">
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1rem' }}>WDS</div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em' }}>
          © 2026 Widescreen Digital Solution. All rights reserved.
        </div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em', display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>Terms &amp; Conditions</a>
          <a href="/refund-and-cancellation" style={{ color: 'inherit', textDecoration: 'none' }}>Refund &amp; Cancellation</a>
          <a href="/contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</a>
        </div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.78rem', color: 'var(--text-dim)', letterSpacing: '.05em' }}>
          info@widescreen.in
        </div>
      </footer>
    </>
  );
}
