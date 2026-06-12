'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Eases wheel/touch scrolling site-wide. Renders nothing; skipped entirely
// for users who prefer reduced motion (native scrolling stays untouched).
const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      anchors: true // /#work and /#contact glide instead of jumping
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
