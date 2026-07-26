import { useEffect, useState } from 'react'

const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { label: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Zustand', 'TanStack Router', 'TanStack Query'] },
  { label: 'Backend', items: ['FastAPI', 'Node.js', 'REST APIs', 'Supabase', 'PostgreSQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Zod'] },
]

const projectTech = ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Supabase', 'PostgreSQL']

// Central place to manage outbound links — update these once real URLs exist.
const links = {
  github: 'https://github.com/cherry1414',
  linkedin: 'https://linkedin.com/in/kellacharanteja',
  email: 'k.charanteja22@gmail.com',
  project: {
    github: '', // e.g. 'https://github.com/cherry1414/coldcraft'
    demo: '', // e.g. 'https://coldcraft.vercel.app'
  },
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a10.98 10.98 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.27 5.71.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
      <path d="M15.5 8.5V6a2 2 0 0 0-2-2H5.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  )
}

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    console.log(
      '%cHey, curious developer 👋',
      'font-size: 16px; font-weight: 600; color: #2563eb;',
    )
    console.log(
      "Since you're here — I'm Charan, and this site is React + TypeScript + Tailwind. Let's connect: k.charanteja22@gmail.com",
    )
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(links.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-200">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20"
      />

      <button
        type="button"
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:scale-105 hover:text-accent active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
      >
        {theme === 'light' ? <MoonIcon className="h-4.5 w-4.5" /> : <SunIcon className="h-5 w-5" />}
      </button>

      <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 cursor-default select-none items-center justify-center rounded-full bg-accent text-sm font-semibold text-white transition-transform duration-300 hover:-rotate-6 hover:scale-110">
              KT
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Kella Charan Teja
              </h1>
              <p className="text-slate-600 dark:text-slate-400">Frontend-leaning full stack developer</p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </span>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500 transition-colors hover:border-accent/40 hover:text-accent dark:border-slate-700 dark:text-slate-400"
            >
              {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </nav>
        </header>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            About
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            Computer Science graduate and full stack developer with hands on experience
            building web applications using React, TypeScript, and Python. Comfortable
            working across frontend and backend, integrating REST APIs, and managing
            databases. Builds projects end to end independently.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Skills
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">{group.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {group.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Projects
          </h2>
          <div className="mt-4 rounded-lg border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md dark:border-slate-700 dark:hover:shadow-slate-900/50">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">ColdCraft</h3>
            <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
              A cold email automation platform built independently end to end. The
              frontend is built with Next.js and TypeScript, including a workflow
              builder where users configure multi step agent pipelines and monitor
              campaign progress. The backend runs on FastAPI, orchestrating multiple
              agents that handle prospect research, personalization, and email
              drafting using an LLM, backed by a Supabase PostgreSQL database.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {projectTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-5 text-sm">
              {links.project.github ? (
                <a
                  href={links.project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  GitHub repo
                </a>
              ) : (
                <span className="font-medium text-slate-400 dark:text-slate-600">GitHub repo (coming soon)</span>
              )}
              {links.project.demo ? (
                <a
                  href={links.project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Live demo
                </a>
              ) : (
                <span className="font-medium text-slate-400 dark:text-slate-600">Live demo (coming soon)</span>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          Open to opportunities. Reach out at{' '}
          <a href={`mailto:${links.email}`} className="text-accent transition-colors hover:text-accent/80">
            {links.email}
          </a>{' '}
          or connect on{' '}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-accent/80"
          >
            LinkedIn
          </a>{' '}
          /{' '}
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-accent/80"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  )
}

export default App
