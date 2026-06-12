import Link from 'next/link';
import ExternalLink from './ExternalLink';

const siteLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blogs' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/#contact' }
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/rohanrajgautam' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/rohanrajgautam' },
  { name: 'X', href: 'https://x.com/rohanrajgautam' },
  { name: 'hi@rrg.com.np', href: 'mailto:hi@rrg.com.np' }
];

const linkStyle =
  'flex h-11 items-center text-sm text-muted transition-colors duration-fast hover:text-text';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto w-full max-w-content px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <nav aria-label="Footer">
            <h2 className="mb-2 font-mono text-sm text-muted">Site</h2>
            <ul>
              {siteLinks.map(({ name, href }) => (
                <li key={href}>
                  <Link href={href} className={linkStyle}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-2 font-mono text-sm text-muted">Elsewhere</h2>
            <ul>
              {socialLinks.map(({ name, href }) => (
                <li key={href}>
                  <ExternalLink href={href} customClassName={linkStyle}>
                    {name}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="mb-2 font-mono text-sm text-muted">Now</h2>
            <p className="py-2.5 text-sm text-muted">
              Lead Software Engineer at Tirios, working remotely from Kathmandu.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 font-mono text-sm text-muted">
          © {new Date().getFullYear()} Rohan Raj Gautam{' '}
          <span aria-hidden="true">·</span> Kathmandu, Nepal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
