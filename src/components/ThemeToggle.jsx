import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ theme, manualTheme, onToggle, onReset }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
        <span className="hidden sm:inline">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
      </button>
      {manualTheme && (
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold text-slate-500 transition hover:text-slate-800 dark:text-white/60 dark:hover:text-white"
        >
          System
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
