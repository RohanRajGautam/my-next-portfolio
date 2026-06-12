const ShowSkills = ({ skills }: { skills: string | string[] }) => {
  const list = Array.isArray(skills) ? skills : [skills];

  return (
    <>
      {list.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-sm text-muted"
        >
          {skill}
        </span>
      ))}
    </>
  );
};

export default ShowSkills;
