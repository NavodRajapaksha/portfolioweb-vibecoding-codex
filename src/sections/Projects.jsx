import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and case studies"
          subtitle="A glimpse into recent product builds, design systems, and technical experiments."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
