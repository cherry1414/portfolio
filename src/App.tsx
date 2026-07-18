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

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              KT
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Kella Charan Teja
              </h1>
              <p className="text-slate-600">Frontend-leaning full stack developer</p>
            </div>
          </div>
          <nav className="flex gap-5 text-sm text-slate-600">
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
          </nav>
        </header>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            About
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Computer Science graduate and full stack developer with hands on experience
            building web applications using React, TypeScript, and Python. Comfortable
            working across frontend and backend, integrating REST APIs, and managing
            databases. Builds projects end to end independently.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Skills
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-medium text-slate-800">{group.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {group.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Projects
          </h2>
          <div className="mt-4 rounded-lg border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md">
            <h3 className="text-lg font-medium text-slate-900">ColdCraft</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
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
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
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
                <span className="font-medium text-slate-400">GitHub repo (coming soon)</span>
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
                <span className="font-medium text-slate-400">Live demo (coming soon)</span>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
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
