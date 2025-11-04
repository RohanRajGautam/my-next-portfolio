'use client';

import React, { useEffect, useRef } from 'react';

const CometStarsTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const meteorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* --------------------------------------------------------------
     CREATE BACKGROUND STARS (unchanged – just a helper)
  -------------------------------------------------------------- */
  const createStar = (container: HTMLDivElement) => {
    const star = document.createElement('div');
    star.className = 'star';

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 1 + 0.5;          // 0.5-1.5 px
    const opacity = Math.random() * 0.4 + 0.2;     // 0.2-0.6
    const duration = Math.random() * 4 + 3;       // 3-7 s
    const delay = Math.random() * 2;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = `${opacity}`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
  };

  /* --------------------------------------------------------------
     CREATE ONE METEOR
  -------------------------------------------------------------- */
  const createMeteor = (container: HTMLDivElement) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const meteor = document.createElement('div');
    meteor.className = 'meteor';

    // ---- start (top edge, random X) ----
    const startX = Math.random() * vw;
    const startY = -30; // a little above the viewport

    // ---- end (somewhere in the lower 60 % of the screen) ----
    const targetX = Math.random() * vw * 0.8 + vw * 0.1; // 10-90 % width
    const targetY = vh * 0.6 + Math.random() * vh * 0.3; // 60-90 % height

    const deltaX = targetX - startX;
    const deltaY = targetY - startY;
    const distance = Math.hypot(deltaX, deltaY);
    const angleDeg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // extend a bit past the target so the tail fades nicely
    const endX = startX + Math.cos(angleDeg * Math.PI / 180) * distance * 1.3;
    const endY = startY + Math.sin(angleDeg * Math.PI / 180) * distance * 1.3;

    const duration = Math.random() * 6 + 12; // 12-18 s

    meteor.style.setProperty('--start-x', `${startX}px`);
    meteor.style.setProperty('--start-y', `${startY}px`);
    meteor.style.setProperty('--end-x', `${endX}px`);
    meteor.style.setProperty('--end-y', `${endY}px`);
    meteor.style.setProperty('--angle', `${angleDeg}deg`);
    meteor.style.animationDuration = `${duration}s`;

    container.appendChild(meteor);

    /* ---- schedule removal + next meteor ---- */
    meteorTimeoutRef.current = setTimeout(() => {
      meteor.remove();                     // clean up
      scheduleNextMeteor(container);       // start the next one
    }, duration * 1000);
  };

  /* --------------------------------------------------------------
     SCHEDULE NEXT METEOR (guarantees only ONE active)
  -------------------------------------------------------------- */
  const scheduleNextMeteor = (container: HTMLDivElement) => {
    const gap = Math.random() * 3000 + 8000; // 8-11 s pause after previous ends
    meteorTimeoutRef.current = setTimeout(() => createMeteor(container), gap);
  };

  /* --------------------------------------------------------------
     EFFECT – stars + first meteor
  -------------------------------------------------------------- */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ---- background stars ----
    const maxStars = 60;
    for (let i = 0; i < maxStars; i++) {
      setTimeout(() => createStar(container), i * 30);
    }

    // ---- first meteor (after a short intro) ----
    const firstDelay = 3000;
    meteorTimeoutRef.current = setTimeout(() => {
      createMeteor(container);
    }, firstDelay);

    // ---- cleanup ----
    return () => {
      if (meteorTimeoutRef.current) clearTimeout(meteorTimeoutRef.current);
      container.innerHTML = ''; // remove everything on unmount
    };

  /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      />
      <style jsx global>{`
        /* ---------- BACKGROUND STARS ---------- */
        .star {
          position: absolute;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          box-shadow:
            0 0 2px rgba(255, 255, 255, 0.3),
            0 0 4px rgba(255, 255, 255, 0.2);
          animation: twinkle linear infinite;
        }
        @keyframes twinkle {
          0%,
          100% { opacity: 0.3; transform: scale(1); }
          50%  { opacity: 0.7; transform: scale(1.1); }
        }

        /* ---------- SINGLE METEOR ---------- */
        .meteor {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow:
            0 0 4px rgba(255, 255, 255, 0.8),
            0 0 8px rgba(255, 255, 255, 0.6),
            0 0 12px rgba(255, 255, 255, 0.4);
          animation: meteor-fall ease-out forwards;
        }

        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0.3) 60%,
            transparent 100%
          );
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
        }

        .meteor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 45px;
          height: 0.5px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 50%;
        }

        @keyframes meteor-fall {
          0% {
            transform: translate(var(--start-x), var(--start-y)) scale(1);
            opacity: 0;
          }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0.4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CometStarsTrail;