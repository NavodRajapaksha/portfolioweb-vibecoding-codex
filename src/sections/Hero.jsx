import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
            Full Stack Developer
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Building modern web experiences that feel effortless and convert.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 dark:text-white/70">
            I&apos;m Alex Carter, a full stack developer focused on crafting fast,
            responsive digital products. I help teams design, build, and launch
            delightful web applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View Projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me <FiArrowUpRight />
            </a>
            <button type="button" className="secondary-button">
              Download Resume <FiDownload />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="glass-card flex flex-col justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
              Highlights
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Delivering end-to-end solutions
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
              From product strategy to deployment, I blend clean engineering with
              thoughtful design to create memorable experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Projects shipped", value: "32+" },
              { label: "Client satisfaction", value: "98%" },
              { label: "Years experience", value: "5+" },
              { label: "Team collabs", value: "18" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-sm dark:border-white/10 dark:bg-slate-900/60"
              >
                <p className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
                <p className="text-slate-500 dark:text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
