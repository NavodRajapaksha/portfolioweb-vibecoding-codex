import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-soft transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
