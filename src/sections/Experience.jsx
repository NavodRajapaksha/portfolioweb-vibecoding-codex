import SectionHeading from "../components/SectionHeading";
import { timelineItems } from "../data/timeline";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="A journey of continuous learning"
          subtitle="Education and key milestones that shaped my approach to product development."
        />
        <div className="relative grid gap-6 border-l border-slate-200/60 pl-6 dark:border-white/10">
          {timelineItems.map((item) => (
            <div key={item.title} className="relative">
              <div className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-slate-900 dark:bg-white" />
              <div className="glass-card">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/60">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
