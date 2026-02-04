import { FiArrowUpRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ themeProps }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#home"
          className="text-lg font-semibold text-slate-900 dark:text-white"
        >
          Alex Carter
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition hover:text-slate-700 dark:text-white dark:hover:text-white/80"
          >
            Let&apos;s talk <FiArrowUpRight />
          </a>
        </div>
        <ThemeToggle {...themeProps} />
      </nav>
    </header>
  );
};

export default Navbar;
