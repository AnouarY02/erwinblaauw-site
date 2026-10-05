import Image from 'next/image'
import Link from 'next/link'
import type { Photo } from '@/data/photos'
import { IconArrow } from './icons'

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  photo,
}: {
  eyebrow: string
  title: string
  intro: string
  crumb: string
  /** Optioneel achtergrondbeeld. Blijft altijd onder een donkere laag liggen. */
  photo?: Photo
}) {
  return (
    <section className="dark-section relative overflow-hidden bg-navy-950">
      {photo && (
        <Image
          src={photo.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-30"
        />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          photo
            ? 'bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60'
            : 'bg-[radial-gradient(900px_420px_at_12%_-20%,rgba(58,102,156,0.4),transparent_62%),radial-gradient(620px_340px_at_95%_0%,rgba(217,108,44,0.22),transparent_60%)]'
        }`}
      />
      <div className="container-page relative py-16 lg:py-24">
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

        <p className="eyebrow mt-9 text-copper-300">
          <span aria-hidden="true" className="h-px w-7 bg-copper-400/70" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-display-md font-bold text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{intro}</p>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  )
}
