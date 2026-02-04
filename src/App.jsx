import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Admin from "./admin/Admin";
import { useTheme } from "./hooks/useTheme";
import { useProjects } from "./hooks/useProjects";

const HomePage = ({ projects }) => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Experience />
      <Contact />
    </main>
  );
};

const App = () => {
  const themeProps = useTheme();
  const { projects, addProject, updateProject, deleteProject } = useProjects();

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar themeProps={themeProps} />
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route
          path="/admin"
          element={
            <Admin
              projects={projects}
              addProject={addProject}
              updateProject={updateProject}
              deleteProject={deleteProject}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
