const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-content px-6 pb-24 pt-12">
      {children}
    </div>
  );
};

export default SectionContainer;
