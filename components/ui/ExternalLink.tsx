import { ExternalLinkProps } from '@/types';

const ExternalLink = ({
  href,
  customClassName = 'text-muted transition-colors duration-fast hover:text-text',
  children
}: ExternalLinkProps) => (
  <a
    className={customClassName}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
