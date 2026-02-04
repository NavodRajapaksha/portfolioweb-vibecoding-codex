import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const useTheme = () => {
  const [manualTheme, setManualTheme] = useState(() =>
    localStorage.getItem(STORAGE_KEY)
  );
  const systemTheme = useMemo(() => getSystemTheme(), []);
  const [theme, setTheme] = useState(manualTheme || systemTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(media.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    setManualTheme(nextTheme);
    setTheme(nextTheme);
  };

  const resetToSystem = () => {
    localStorage.removeItem(STORAGE_KEY);
    setManualTheme(null);
    setTheme(getSystemTheme());
  };

  return {
    theme,
    manualTheme,
    toggleTheme,
    resetToSystem,
  };
};
