'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blogs' },
  { name: 'CV', href: '/cv' }
];

const isActivePath = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);

const Header = () => {
  const pathname = usePathname() ?? '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    // The layout never re-mounts, so this reveal plays once on first load.
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex h-11 items-center font-mono text-base font-medium text-text"
          onClick={() => setMenuOpen(false)}
        >
          rrg<span className="text-accent">()</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ name, href }) => {
              const active = isActivePath(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'flex h-11 items-center px-3 text-sm transition-colors duration-fast',
                      active
                        ? 'text-text underline decoration-accent decoration-2 underline-offset-8'
                        : 'text-muted hover:text-text'
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors duration-fast hover:text-text md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <>
                  <path d="M5 5l10 10" />
                  <path d="M15 5L5 15" />
                </>
              ) : (
                <>
                  <path d="M2.5 7h15" />
                  <path d="M2.5 13h15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-menu"
          className="mx-auto w-full max-w-content border-t border-border px-6 py-2 md:hidden"
        >
          {navLinks.map(({ name, href }) => {
            const active = isActivePath(pathname, href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'flex h-12 items-center text-base transition-colors duration-fast',
                    active ? 'text-text' : 'text-muted hover:text-text'
                  )}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="mr-2 font-mono text-accent"
                    >
                      ·
                    </span>
                  )}
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </motion.header>
  );
};

export default Header;
