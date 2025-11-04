'use client';

import React, { useEffect, useRef } from 'react';

const CometStarsTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let starCount = 0;
    const maxStars = 60; // Reduced for subtlety

    // Create subtle background stars
    const createStar = () => {
      if (starCount >= maxStars) return;

      const star = document.createElement('div');
      star.className = 'star';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Smaller, more subtle stars
      const size = Math.random() * 1 + 0.5; // 0.5-1.5px
      const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6 opacity
      const duration = Math.random() * 4 + 3; // Slower twinkle
      const delay = Math.random() * 2;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${opacity}`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
      starCount++;
    };

    // Create slow background meteors that move continuously
    const createSlowMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'slow-meteor';

      // Start from random position at top
      const startX = Math.random() * 100;
      const startY = -20;

      // Slow diagonal movement
      const angleDeg = Math.random() * 15 + 60; // 60-75 degrees
      const angle = angleDeg * (Math.PI / 180);
      const distance = 150; // Long distance for slow movement

      const endX = startX + Math.cos(angle) * distance;
      const endY = startY + Math.sin(angle) * distance;

      // Very slow speed - 8-12 seconds
      const duration = Math.random() * 4 + 8;

      meteor.style.setProperty('--start-x', `${startX}%`);
      meteor.style.setProperty('--start-y', `${startY}%`);
      meteor.style.setProperty('--end-x', `${endX}%`);
      meteor.style.setProperty('--end-y', `${endY}%`);
      meteor.style.setProperty('--angle', `${angleDeg}deg`);
      meteor.style.animationDuration = `${duration}s`;

      container.appendChild(meteor);

      // Remove meteor after animation
      setTimeout(() => {
        if (meteor.parentNode) {
          meteor.parentNode.removeChild(meteor);
          // Create a new one
          setTimeout(() => createSlowMeteor(), Math.random() * 3000 + 2000);
        }
      }, duration * 1000);
    };

    // Create fast falling meteor/shooting star
    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';

      // Start from random position at top of screen
      const startX = Math.random() * 100;
      const startY = -10;

      // End position - diagonal down
      const angleDeg = Math.random() * 25 + 45;
      const angle = angleDeg * (Math.PI / 180);
      const distance = Math.random() * 60 + 80;

      const endX = startX + Math.cos(angle) * distance;
      const endY = startY + Math.sin(angle) * distance;

      // Fast speed
      const duration = Math.random() * 0.6 + 0.4; // 0.4-1.0 seconds

      meteor.style.setProperty('--start-x', `${startX}%`);
      meteor.style.setProperty('--start-y', `${startY}%`);
      meteor.style.setProperty('--end-x', `${endX}%`);
      meteor.style.setProperty('--end-y', `${endY}%`);
      meteor.style.setProperty('--angle', `${angleDeg}deg`);
      meteor.style.animationDuration = `${duration}s`;

      container.appendChild(meteor);

      // Remove meteor after animation
      setTimeout(() => {
        if (meteor.parentNode) {
          meteor.parentNode.removeChild(meteor);
        }
      }, duration * 1000);
    };

    // Initial background stars
    for (let i = 0; i < maxStars; i++) {
      setTimeout(() => createStar(), i * 30);
    }

    // Create 2-3 slow meteors initially
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createSlowMeteor(), i * 2000);
    }

    // Create fast meteors periodically (every 3-5 seconds)
    const createMeteorPeriodically = () => {
      const delay = Math.random() * 2000 + 3000; // 3-5 seconds
      setTimeout(() => {
        createMeteor();
        createMeteorPeriodically();
      }, delay);
    };

    // Start fast meteor creation
    createMeteorPeriodically();

    return () => {
      // Cleanup handled by individual timeouts
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
        aria-hidden="true"
      />
      <style jsx global>{`
        .star {
          position: absolute;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.3),
            0 0 4px rgba(255, 255, 255, 0.2);
          animation: twinkle linear infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .slow-meteor {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.5),
            0 0 8px rgba(255, 255, 255, 0.3);
          animation: slow-meteor-fall linear forwards;
        }

        .slow-meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.2) 30%,
            rgba(255, 255, 255, 0.1) 60%,
            transparent 100%
          );
          transform-origin: left center;
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
        }

        @keyframes slow-meteor-fall {
          0% {
            transform: translate(var(--start-x), var(--start-y)) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0.5);
            opacity: 0;
          }
        }

        .meteor {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 8px rgba(255, 255, 255, 1),
            0 0 16px rgba(255, 255, 255, 0.8),
            0 0 24px rgba(255, 255, 255, 0.6);
          animation: meteor-fall linear forwards;
          z-index: 2;
        }

        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 20%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.2) 80%,
            transparent 100%
          );
          transform-origin: left center;
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
            0 0 16px rgba(255, 255, 255, 0.6);
        }

        .meteor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          transform-origin: left center;
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 50%;
        }

        @keyframes meteor-fall {
          0% {
            transform: translate(var(--start-x), var(--start-y)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CometStarsTrail;
