import type { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' }
};

const About = () => <AboutSection />;

export default About;
