import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formState.name.trim()) nextErrors.name = "Name is required.";
    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (formState.message.trim().length < 12) {
      nextErrors.message = "Message should be at least 12 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something together"
          subtitle="Share your project goals, timelines, and scope. I&apos;ll get back within 24 hours."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="glass-card space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-700 dark:text-white/80"
              >
                Name
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200/60 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <FiUser className="text-slate-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Alex Carter"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700 dark:text-white/80"
              >
                Email
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200/60 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <FiMail className="text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="hello@email.com"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700 dark:text-white/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-500">{errors.message}</p>
              )}
            </div>
            <button type="submit" className="primary-button w-full">
              Send Message
            </button>
            {submitted && (
              <p className="text-sm text-emerald-600">
                Thanks! Your message has been queued for review.
              </p>
            )}
          </form>
          <div className="glass-card space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Contact details
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Prefer email? Reach me at
                <a
                  href="mailto:hello@alexcarter.dev"
                  className="ml-1 font-semibold text-slate-900 dark:text-white"
                >
                  hello@alexcarter.dev
                </a>
                .
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-white/80">
                Socials
              </p>
              <div className="mt-3 flex flex-col gap-3 text-sm">
                <a
                  href="https://github.com/yourname"
                  className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href="https://www.fiverr.com/yourname"
                  className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                >
                  <FiMail /> Fiverr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
