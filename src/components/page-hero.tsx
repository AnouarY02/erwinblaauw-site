import Link from 'next/link'

/**
 * De kop van een subpagina uit het ontwerp (`.phead`): kruimelpad, titel en
 * een korte inleiding op een oplopende lichte achtergrond.
 */
export function PageHero({
  crumb,
  title,
  intro,
}: {
  crumb: string
  title: string
  intro: string
}) {
  return (
    <section className="phead">
      <div className="wrap">
        <nav className="crumb" aria-label="Kruimelpad">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
    </section>
  )
}
