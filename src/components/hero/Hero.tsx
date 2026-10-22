import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personal } from '@/lib/data';

export function Hero() {
  return (
    <header id="top" className="container-shell py-6 md:py-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-xl">
          <p className="eyebrow">{personal.title}</p>
          <h1 className="text-5xl font-semibold tracking-[-0.08em] text-(--text) md:text-6xl lg:text-7xl">
            {personal.name}
          </h1>

          <p className="mt-5 text-lg text-(--text-muted) md:text-xl">{personal.role}</p>
          <p className="mt-4 max-w-lg text-base leading-7 text-(--text-muted) md:text-lg">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-(--brand) px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-px"
            >
              Explore my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={personal.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-(--line-strong) bg-(--panel) px-5 py-3 text-sm font-medium text-(--text)"
            >
              <Download className="h-4 w-4" />
              Resume ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-(--text-soft)">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {personal.availability}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {personal.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-(--line) p-3 text-(--text) transition hover:border-(--text)">
              <Github className="h-4 w-4" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-(--line) p-3 text-(--text) transition hover:border-(--text)">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 rounded-full border border-(--line) px-3 py-2 text-sm text-(--text) transition hover:border-(--text)">
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-(--line) bg-(--panel) p-3 shadow-(--shadow)">
            <div className="flex h-[420px] items-center justify-center rounded-[24px] border border-(--line) bg-[linear-gradient(135deg,#f4f3ef,#e7e5e1)] p-6">
              <video
                className="h-full w-full rounded-[20px] object-cover"
                src="/hero/Character_speaking_in_3D_animation_20261021172754.mp4"
                loop
                playsInline
                controls
                preload="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
