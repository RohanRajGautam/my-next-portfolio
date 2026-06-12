import type { Metadata } from 'next';
import ProjectsSection from '@/components/sections/ProjectsSection';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: { canonical: '/projects' }
};

const Projects = () => <ProjectsSection />;

export default Projects;
