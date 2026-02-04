import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Design-led development for modern teams"
          subtitle="I partner with founders and product teams to translate complex problems into elegant interfaces, scalable APIs, and delightful user journeys."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card">
            <p className="text-base text-slate-600 dark:text-white/70">
              With a background in both front-end engineering and backend systems,
              I focus on building fast, maintainable applications that feel
              intuitive. I work across the full stack, translating product goals
              into polished, accessible experiences.
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-white/70">
              My career focus is on shipping high-impact web apps, balancing
              aesthetics with performance, and building design systems that scale
              with your product.
            </p>
          </div>
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Tech focus
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-white/70">
              <li>⚡ React, Tailwind CSS, Framer Motion</li>
              <li>🔐 Node.js, Express, MongoDB, REST APIs</li>
              <li>🚀 Deployment on Netlify, CI/CD automation</li>
              <li>🧠 UX research, accessibility, design systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
