// Theme values map 1:1 to the CSS custom properties declared in
// styles/globals.css - change tokens there, not here.
module.exports = {
  content: ['./app/**/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'rgb(var(--color-bg) / <alpha-value>)',
      surface: 'rgb(var(--color-surface) / <alpha-value>)',
      text: 'rgb(var(--color-text) / <alpha-value>)',
      muted: 'rgb(var(--color-muted) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      border: 'rgb(var(--color-border) / <alpha-value>)'
    },
    fontFamily: {
      sans: ['var(--font-graphik)', 'system-ui', 'sans-serif'],
      display: ['var(--font-display)', 'var(--font-graphik)', 'sans-serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
    },
    fontSize: {
      sm: ['var(--text-sm)', { lineHeight: '1.5' }],
      base: ['var(--text-base)', { lineHeight: '1.6' }],
      md: ['var(--text-md)', { lineHeight: '1.5' }],
      lg: ['var(--text-lg)', { lineHeight: '1.3' }],
      xl: ['var(--text-xl)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      '2xl': [
        'var(--text-2xl)',
        { lineHeight: '1.15', letterSpacing: '-0.02em' }
      ],
      '3xl': [
        'var(--text-3xl)',
        { lineHeight: '1.1', letterSpacing: '-0.02em' }
      ]
    },
    borderRadius: {
      none: '0',
      sm: 'var(--radius-sm)',
      DEFAULT: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      full: '9999px'
    },
    boxShadow: {
      none: 'none',
      1: 'var(--shadow-1)',
      2: 'var(--shadow-2)'
    },
    transitionTimingFunction: {
      DEFAULT: 'var(--ease-out)'
    },
    transitionDuration: {
      fast: 'var(--duration-fast)',
      DEFAULT: 'var(--duration-base)',
      slow: 'var(--duration-slow)'
    },
    extend: {
      maxWidth: {
        content: '45rem' // single reading column, ~66ch at 16px body
      }
    }
  },
  plugins: []
};
