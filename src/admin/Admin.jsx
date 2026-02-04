import { useMemo, useState } from "react";
import { FiEdit2, FiLogOut, FiPlus, FiSave, FiTrash2 } from "react-icons/fi";
const ADMIN_KEY = "portfolio-admin-auth";
const credentials = {
  username: "admin",
  password: "portfolio123",
};

const emptyProject = {
  title: "",
  description: "",
  techStack: "",
  image: "",
  github: "",
  demo: "",
};

const Admin = ({ projects, addProject, updateProject, deleteProject }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(ADMIN_KEY) === "true"
  );
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);

  const projectList = useMemo(() => projects, [projects]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      formState.username === credentials.username &&
      formState.password === credentials.password
    ) {
      localStorage.setItem(ADMIN_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials. Try admin / portfolio123.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_KEY);
    setIsAuthenticated(false);
  };

  const handleProjectChange = (event) => {
    const { name, value } = event.target;
    setProjectForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetProjectForm = () => {
    setProjectForm(emptyProject);
    setEditingId(null);
  };

  const handleProjectSubmit = (event) => {
    event.preventDefault();
    const projectPayload = {
      ...projectForm,
      techStack: projectForm.techStack
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    if (editingId) {
      updateProject({ ...projectPayload, id: editingId });
    } else {
      addProject(projectPayload);
    }

    resetProjectForm();
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setProjectForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(", "),
      image: project.image,
      github: project.github,
      demo: project.demo,
    });
  };

  if (!isAuthenticated) {
    return (
      <main className="section-padding">
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200/60 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-slate-900">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Enter your credentials to manage projects.
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={formState.username}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  username: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={formState.password}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" className="primary-button w-full">
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
              Manage project content that appears on the portfolio.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="secondary-button"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <form onSubmit={handleProjectSubmit} className="glass-card space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {editingId ? "Edit project" : "Add new project"}
              </h2>
              <button
                type="button"
                onClick={resetProjectForm}
                className="text-xs font-semibold text-slate-500 transition hover:text-slate-800 dark:text-white/60 dark:hover:text-white"
              >
                Reset
              </button>
            </div>
            <input
              name="title"
              value={projectForm.title}
              onChange={handleProjectChange}
              placeholder="Project title"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <textarea
              name="description"
              value={projectForm.description}
              onChange={handleProjectChange}
              placeholder="Short description"
              rows="3"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <input
              name="techStack"
              value={projectForm.techStack}
              onChange={handleProjectChange}
              placeholder="Tech stack (comma separated)"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <input
              name="image"
              value={projectForm.image}
              onChange={handleProjectChange}
              placeholder="Image URL"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <input
              name="github"
              value={projectForm.github}
              onChange={handleProjectChange}
              placeholder="GitHub repo URL"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <input
              name="demo"
              value={projectForm.demo}
              onChange={handleProjectChange}
              placeholder="Live demo URL"
              className="w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
            />
            <button type="submit" className="primary-button w-full">
              {editingId ? (
                <>
                  <FiSave /> Save Changes
                </>
              ) : (
                <>
                  <FiPlus /> Add Project
                </>
              )}
            </button>
          </form>

          <div className="space-y-4">
            {projectList.map((project) => (
              <div key={project.id} className="glass-card">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs text-slate-500 dark:text-white/60">
                      {project.techStack.join(" · ")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(project)}
                      className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteProject(project.id)}
                      className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-red-400 hover:text-red-500 dark:border-white/10 dark:text-white/70 dark:hover:border-red-500/50 dark:hover:text-red-400"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
