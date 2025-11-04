const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative z-10 w-10/12 lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16">
      {children}
    </section>
  );
};

export default SectionContainer;
