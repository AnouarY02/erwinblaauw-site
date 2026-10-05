import { site } from '@/data/site'
import { mailtoAdvies } from '@/lib/mailto'
import { CallMailButtons } from './contact-actions'

export function CtaBand({
  title = 'Een vraag over gas, water, cv of dakwerk?',
  text = 'Bel even, dan kijken we samen wat er nodig is. Liever eerst uw situatie beschrijven? Mail uw vraag, dan reageren we zo snel mogelijk.',
  mailHref = mailtoAdvies,
}: {
  title?: string
  text?: string
  mailHref?: string
}) {
  return (
    <section className="dark-section relative overflow-hidden bg-navy-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_0%,rgba(58,102,156,0.45),transparent_60%),radial-gradient(700px_380px_at_88%_110%,rgba(217,108,44,0.3),transparent_62%)]"
      />
      <div className="container-page relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-sm font-bold text-white">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-navy-200 sm:text-lg">{text}</p>
          <CallMailButtons
            mailHref={mailHref}
            mailLabel="Mail uw vraag"
            tone="dark"
            className="mt-9 justify-center"
          />
          <p className="mt-7 text-sm text-navy-300">
            Mobiel{' '}
            <a
              href={site.mobileHref}
              className="rounded font-semibold text-white underline decoration-copper-400 decoration-2 underline-offset-4"
            >
              {site.mobile}
            </a>{' '}
            &middot;{' '}
            <a
              href={mailHref}
              className="rounded font-semibold text-white underline decoration-copper-400 decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
