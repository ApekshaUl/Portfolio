'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Github, Mail, Sparkles } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/hero/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { certifications, education, experience, highlights, personal, projects, skillGroups } from '@/lib/data';
import { ScrollProvider } from '@/lib/scroll';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-(--bg) text-(--text)">
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <Hero />

        <main className="pb-20">
          <section id="about" className="container-shell py-10 md:py-16">
            <div className="section-card p-6 md:p-8 lg:p-10">
              <SectionHeading
                eyebrow="About"
                title="A builder focused on reliable systems and thoughtful product work."
                copy="I work across full-stack delivery, combining backend logic, data handling, and clean front-end experiences to support enterprise products and user-facing workflows."
              />

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-(--line) bg-(--highlight) p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--line) bg-(--accent-soft) text-(--accent)">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-(--text-muted)">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="container-shell py-6 md:py-10">
            <SectionHeading
              eyebrow="Experience"
              title="Recent work across engineering, analytics, and product support."
              copy="My experience spans enterprise application enhancement, process automation, and data-driven problem solving in fast-moving delivery teams."
            />

            <div className="mt-8 space-y-5">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="section-card p-6 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em] text-(--text)">{item.role}</h3>
                      <p className="mt-1 text-base text-(--text-soft)">{item.company}</p>
                    </div>
                    <div className="text-sm text-(--text-soft)">
                      {item.location} · {item.period}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-(--text-muted) list-disc">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="container-shell py-8 md:py-12">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built for clarity, reliability, and practical use."
              copy="I enjoy building products that make complex workflows easier to understand and use, especially in Java-heavy and data-centric environments."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="section-card flex h-full flex-col p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--text-soft)">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-(--text)">
                        {project.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-(--line) px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-(--text-soft)">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-7 text-(--text-muted)">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-(--line) bg-(--highlight) px-2.5 py-1 text-[11px] text-(--text-soft)">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-(--line) px-3 py-2 text-sm text-(--text)">
                      <Github className="h-4 w-4" />
                      Repo
                    </a>
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-(--line) px-3 py-2 text-sm text-(--text)">
                        Live
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="container-shell py-8 md:py-12">
            <SectionHeading
              eyebrow="Skills"
              title="Technologies and practices I use in day-to-day delivery."
              copy="My work combines backend architecture, API quality, database understanding, and front-end implementation to create complete, working solutions."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="section-card p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.04em] text-(--text)">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--highlight)] px-2.5 py-1 text-sm text-[var(--text-muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="container-shell py-8 md:py-12">
            <div className="section-card p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div>
                  <SectionHeading
                    eyebrow="Education"
                    title="Academic foundation."
                    copy="Graduated in Computer Science Engineering from B.N.M. Institute of Technology."
                  />
                  <div className="mt-6 rounded-2xl border border-(--line) bg-(--highlight) p-5">
                    <p className="text-lg font-semibold text-(--text)">{education[0].school}</p>
                    <p className="mt-2 text-(--text-muted)">{education[0].degree}</p>
                    <p className="mt-2 text-sm text-(--text-soft)">{education[0].period}</p>
                  </div>
                </div>

                <div>
                  <SectionHeading
                    eyebrow="Certifications"
                    title="Professional learning."
                    copy="I continue building strong technical depth across Java, databases, Linux, and AI-adjacent knowledge."
                  />
                  <ul className="mt-6 space-y-3 pl-5 list-disc text-base leading-7 text-(--text-muted)">
                    {certifications.map((item) => (
                      <li key={item.title}>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer" className="text-(--text) underline decoration-(--line-strong) underline-offset-4 transition hover:text-(--brand)">
                            {item.title}
                          </a>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="container-shell py-8 md:py-12">
            <div className="section-card p-6 md:p-8">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful and reliable."
                copy="I’m open to software engineering opportunities where thoughtful systems, clear collaboration, and strong execution matter."
              />

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-(--brand) px-5 py-3 text-sm font-medium text-white"
                >
                  <Mail className="h-4 w-4" />
                  {personal.email}
                </a>
                <a
                  href={personal.resumeHref}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-(--line-strong) bg-(--panel) px-5 py-3 text-sm font-medium text-(--text)"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-(--line-strong) bg-(--panel) px-5 py-3 text-sm font-medium text-(--text)"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ScrollProvider>
  );
}
