'use client';

import { useId } from 'react';
import type { CSSProperties, MouseEvent } from 'react';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const STARS = [
  { x: 20.5, y: 3.5, size: 1 },
  { x: 22, y: 10, size: 0.65 }
];

const STAR_PATH =
  'M0 -2.4 L0.6 -0.6 L2.4 0 L0.6 0.6 L0 2.4 L-0.6 0.6 L-2.4 0 L-0.6 -0.6Z';

const stagger = (i: number) => ({ '--i': i } as CSSProperties);

// Theme state lives on <html data-theme>; the icon morphs via CSS (see
// globals.css) so the server and client render identical markup.
const ThemeToggle = () => {
  const maskId = `theme-eclipse-${useId().replace(/:/g, '')}`;

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';

    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* private mode */
      }
    };

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const doc = document as ViewTransitionDocument;

    if (reduceMotion) {
      apply();
      return;
    }

    if (!doc.startViewTransition) {
      // Fallback: fade every themed color for one beat.
      root.classList.add('theme-transitioning');
      window.setTimeout(
        () => root.classList.remove('theme-transitioning'),
        550
      );
      apply();
      return;
    }

    // The new theme spreads out from the toggle as a growing circle.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(apply);

    transition.ready
      .then(() => {
        const options = {
          duration: 900,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
        };

        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`
            ]
          },
          { ...options, pseudoElement: '::view-transition-new(root)' }
        );

        // The outgoing theme recedes slightly as it is overtaken.
        root.animate(
          { filter: ['brightness(1) blur(0px)', 'brightness(0.75) blur(2px)'] },
          { ...options, pseudoElement: '::view-transition-old(root)' }
        );
      })
      .catch(() => {
        /* transition skipped - the theme is still applied */
      });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="theme-toggle flex h-11 w-11 items-center justify-center rounded-sm text-muted transition duration-fast hover:text-text active:scale-90"
    >
      {/* Two stacked SVGs so each group rotates about its own box center -
          SVG transform origins inside a single viewBox are inconsistent
          across browsers. */}
      <span aria-hidden="true" className="theme-icon relative block h-5 w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="theme-icon__rays absolute inset-0 h-full w-full"
        >
          {RAY_ANGLES.map((angle, i) => (
            <g key={angle} transform={`rotate(${angle} 12 12)`}>
              <line
                className="theme-icon__ray"
                style={stagger(i)}
                x1="12"
                y1="1.75"
                x2="12"
                y2="3.75"
              />
            </g>
          ))}
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="theme-icon__body absolute inset-0 h-full w-full"
        >
          <defs>
            <mask id={maskId}>
              <rect width="24" height="24" fill="white" />
              {/* slides over the core to carve the crescent */}
              <circle
                className="theme-icon__eclipse"
                cx="15.2"
                cy="8.8"
                r="7"
                fill="black"
              />
            </mask>
          </defs>

          <g mask={`url(#${maskId})`}>
            <circle className="theme-icon__core" cx="12" cy="12" r="5" />
          </g>

          {STARS.map(({ x, y, size }, i) => (
            <g
              key={i}
              transform={`translate(${x} ${y}) scale(${size})`}
              className="theme-icon__twinkle"
              style={stagger(i)}
            >
              <path
                className="theme-icon__star"
                style={stagger(i)}
                d={STAR_PATH}
              />
            </g>
          ))}
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
