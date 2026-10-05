import Link from 'next/link'
import { IconArrow } from './icons'

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string
  title: string
  intro: string
  crumb: string
}) {
  return (
    <section className="dark-section relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(900px_420px_at_12%_-20%,rgba(58,102,156,0.4),transparent_62%),radial-gradient(620px_340px_at_95%_0%,rgba(217,108,44,0.22),transparent_60%)]"
      />
      <div className="container-page relative py-16 lg:py-20">
        <nav aria-label="Kruimelpad" className="text-sm">
          <ol className="flex items-center gap-2 text-navy-300">
            <li>
              <Link href="/" className="rounded hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <IconArrow className="h-4 w-4" />
            </li>
            <li className="font-medium text-white">{crumb}</li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{intro}</p>
      </div>
    </section>
  )
}
