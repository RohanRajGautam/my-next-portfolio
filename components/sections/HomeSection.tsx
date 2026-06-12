import Hero from '../content/Hero';
import AboutMe from '../content/AboutMe';
import Experience from '../content/Experience';
import Skills from '../content/Skills';
import ContactMe from '../content/ContactMe';
import SectionContainer from '../utils/SectionContainer';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <div className="flex flex-col gap-20">
        <section aria-label="About">
          <AboutMe />
        </section>

        <section id="work" aria-label="Experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section aria-label="Skills">
          <Skills />
        </section>

        <section aria-label="Contact">
          <ContactMe />
        </section>
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
