const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
