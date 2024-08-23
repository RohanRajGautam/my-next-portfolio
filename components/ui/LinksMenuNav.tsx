import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '200ms'
  },
  {
    name: 'Blog',
    path: '/blogs',
    delay: '225ms'
  },
  {
    name: 'CV',
    path: '/cv',
    delay: '250ms'
  }
];

interface LinksMenuNavProps {
  toggleMenu: () => void;
}

const LinksMenuNav: React.FC<LinksMenuNavProps> = ({ toggleMenu }) => {
  return (
    <>
      {LinksMenu.map(({ name, path, delay }) => (
        <li
          key={name}
          className="border-gray-700 text-gray-100 text-sm font-semibold"
          style={{ transitionDelay: delay }}
        >
          <Link href={path} className="pb-4" onClick={toggleMenu}>
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default LinksMenuNav;
