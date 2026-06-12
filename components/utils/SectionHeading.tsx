// Section headings carry a small monospace label - the "build metadata"
// register used across the site for dates, metrics, and stack names.
const SectionHeading = ({
  label,
  title,
  id,
  as: Tag = 'h2'
}: {
  label: string;
  title: string;
  id?: string;
  as?: 'h1' | 'h2';
}) => {
  return (
    <div id={id} className="scroll-mt-24">
      <p aria-hidden="true" className="mb-2 font-mono text-sm text-accent">
        {label}
      </p>
      <Tag
        className={
          Tag === 'h1'
            ? 'font-display text-xl font-semibold text-text md:text-2xl'
            : 'font-display text-lg font-semibold text-text'
        }
      >
        {title}
      </Tag>
    </div>
  );
};

export default SectionHeading;
