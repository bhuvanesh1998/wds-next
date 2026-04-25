'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let rafId: number;
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.14;
      ry.current += (my.current - ry.current) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top = ry.current + 'px';
      }
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    const hoverEls = document.querySelectorAll('a, button, .service-card, .pillar');
    const addHover = () => document.body.classList.add('hovering');
    const rmHover = () => document.body.classList.remove('hovering');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        #cursor {
          position: fixed; z-index: 9999;
          width: 12px; height: 12px;
          background: var(--blue);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%,-50%);
          transition: width .2s, height .2s, background .2s;
          mix-blend-mode: screen;
        }
        #cursor-ring {
          position: fixed; z-index: 9998;
          width: 36px; height: 36px;
          border: 1px solid rgba(14,165,233,.4);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%,-50%);
          transition: transform .12s var(--ease-out), width .25s, height .25s, border-color .25s;
        }
        body.hovering #cursor { width: 8px; height: 8px; background: var(--purple); }
        body.hovering #cursor-ring { width: 52px; height: 52px; border-color: rgba(139,92,246,.5); }
      `}</style>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
