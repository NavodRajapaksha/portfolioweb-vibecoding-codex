import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced full-stack toolkit"
          subtitle="From pixel-perfect UI to reliable backend architecture, I work across the stack to deliver complete solutions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-white/70">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
