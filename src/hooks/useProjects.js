import { useEffect, useState } from "react";
import { defaultProjects } from "../data/projects";

const STORAGE_KEY = "portfolio-projects";

const loadProjects = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultProjects;
};

export const useProjects = () => {
  const [projects, setProjects] = useState(() => loadProjects());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects((prev) => [{ ...project, id: crypto.randomUUID() }, ...prev]);
  };

  const updateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  const deleteProject = (projectId) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
  };
};
