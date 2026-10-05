'use client'

import { useState } from 'react'
import { services, site } from '@/data/site'
import { IconArrow, IconCheck, IconMail } from './icons'

/**
 * ------------------------------------------------------------------------
 * TODO — ONTVANGER VAN HET FORMULIER INSTELLEN
 * ------------------------------------------------------------------------
 * Dit formulier stuurt NU niets naar een server: er is bewust geen
 * mailkoppeling en geen (betaalde) formulierdienst geconfigureerd.
 *
 * Wat er nu gebeurt: na validatie opent de knop het e-mailprogramma van de
 * bezoeker met een volledig ingevulde e-mail aan MAILTO_RECIPIENT.
 *
 * >> ANDER ONTVANGSTADRES? Pas `site.email` aan in src/data/site.ts, of zet
 *    MAILTO_RECIPIENT hieronder op het definitieve adres van Erwin.
 *
 * >> LIEVER RECHTSTREEKS VERSTUREN (zonder mailprogramma)? Maak een formulier
 *    aan bij een formulierdienst (bijvoorbeeld Formspree) en zet daar het
 *    ontvangstadres van Erwin. Vervang daarna in onSubmit() de mailto-stap door
 *    een POST van `fields` als JSON naar het endpoint dat die dienst u geeft,
 *    en zet de status op 'sent' bij een geslaagd antwoord en op 'error' bij een
 *    fout. De statussen 'sending', 'sent' en 'error' en de bijbehorende
 *    meldingen staan daarvoor al klaar in dit bestand.
 *
 *    Dat is bewust nog niet ingebouwd: er mag geen dienst worden aangemaakt en
 *    er mag geen e-mail de deur uit zonder dat Erwin dat zelf instelt.
 * ------------------------------------------------------------------------
 */
const MAILTO_RECIPIENT = site.email // TODO: desgewenst het definitieve ontvangstadres van Erwin

type Fields = {
  naam: string
  email: string
  telefoon: string
  adres: string
  postcodeWoonplaats: string
  bericht: string
  diensten: string[]
}

const emptyFields: Fields = {
  naam: '',
  email: '',
  telefoon: '',
  adres: '',
  postcodeWoonplaats: '',
  bericht: '',
  diensten: [],
}

type Errors = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.naam.trim().length < 2) e.naam = 'Vul uw naam in.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.'
  if (f.telefoon.trim() && !/^[0-9+\s()-]{8,}$/.test(f.telefoon.trim()))
    e.telefoon = 'Vul een geldig telefoonnummer in, of laat het veld leeg.'
  if (f.bericht.trim().length < 10)
    e.bericht = 'Beschrijf uw vraag in minstens 10 tekens, zodat we u goed kunnen helpen.'
  return e
}

function buildMailto(f: Fields) {
  const lines = [
    `Naam: ${f.naam}`,
    `E-mail: ${f.email}`,
    f.telefoon && `Telefoon: ${f.telefoon}`,
    f.adres && `Adres: ${f.adres}`,
    f.postcodeWoonplaats && `Postcode/woonplaats: ${f.postcodeWoonplaats}`,
    f.diensten.length > 0 && `Diensten: ${f.diensten.join(', ')}`,
    '',
    'Vraag of opmerking:',
    f.bericht,
  ].filter(Boolean) as string[]

  const subject = `Adviesaanvraag via de website — ${f.naam}`
  return `mailto:${MAILTO_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join('\n'),
  )}`
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<Errors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'mailto' | 'sent' | 'error'>('idle')

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function toggleService(label: string) {
    setFields((prev) => ({
      ...prev,
      diensten: prev.diensten.includes(label)
        ? prev.diensten.filter((d) => d !== label)
        : [...prev.diensten, label],
    }))
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(fields)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`veld-${first}`)?.focus()
      return
    }

    // Geen formulierdienst ingesteld (zie de TODO bovenaan dit bestand):
    // open het e-mailprogramma van de bezoeker met een ingevulde e-mail.
    setState('mailto')
    window.location.href = buildMailto(fields)
  }

  const inputClass =
    'mt-2 w-full rounded-lg border bg-white px-4 py-3 text-base text-charcoal-800 placeholder:text-navy-500 focus:border-copper-500'

  function fieldClass(key: keyof Fields) {
    return `${inputClass} ${errors[key] ? 'border-red-600' : 'border-navy-200'}`
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="veld-naam" className="block text-sm font-semibold text-navy-900">
            Naam <span className="text-copper-700">*</span>
          </label>
          <input
            id="veld-naam"
            name="naam"
            type="text"
            autoComplete="name"
            required
            value={fields.naam}
            onChange={(e) => update('naam', e.target.value)}
            aria-invalid={Boolean(errors.naam)}
            aria-describedby={errors.naam ? 'fout-naam' : undefined}
            className={fieldClass('naam')}
            placeholder="Uw naam"
          />
          {errors.naam && (
            <p id="fout-naam" className="mt-2 text-sm font-medium text-red-700">
              {errors.naam}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="veld-email" className="block text-sm font-semibold text-navy-900">
            E-mailadres <span className="text-copper-700">*</span>
          </label>
          <input
            id="veld-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'fout-email' : undefined}
            className={fieldClass('email')}
            placeholder="naam@voorbeeld.nl"
          />
          {errors.email && (
            <p id="fout-email" className="mt-2 text-sm font-medium text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="veld-telefoon" className="block text-sm font-semibold text-navy-900">
            Telefoonnummer
          </label>
          <input
            id="veld-telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
            value={fields.telefoon}
            onChange={(e) => update('telefoon', e.target.value)}
            aria-invalid={Boolean(errors.telefoon)}
            aria-describedby={errors.telefoon ? 'fout-telefoon' : undefined}
            className={fieldClass('telefoon')}
            placeholder="06 12 34 56 78"
          />
          {errors.telefoon && (
            <p id="fout-telefoon" className="mt-2 text-sm font-medium text-red-700">
              {errors.telefoon}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="veld-adres" className="block text-sm font-semibold text-navy-900">
            Adres
          </label>
          <input
            id="veld-adres"
            name="adres"
            type="text"
            autoComplete="street-address"
            value={fields.adres}
            onChange={(e) => update('adres', e.target.value)}
            className={fieldClass('adres')}
            placeholder="Straat en huisnummer"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="veld-postcodeWoonplaats"
            className="block text-sm font-semibold text-navy-900"
          >
            Postcode en woonplaats
          </label>
          <input
            id="veld-postcodeWoonplaats"
            name="postcodeWoonplaats"
            type="text"
            autoComplete="postal-code"
            value={fields.postcodeWoonplaats}
            onChange={(e) => update('postcodeWoonplaats', e.target.value)}
            className={fieldClass('postcodeWoonplaats')}
            placeholder="8401 PM Gorredijk"
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">
          Waar gaat uw vraag over?
        </legend>
        <p className="mt-1 text-sm text-charcoal-700">U kunt meerdere onderwerpen kiezen.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => {
            const checked = fields.diensten.includes(s.title)
            return (
              <label
                key={s.slug}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  checked
                    ? 'border-copper-600 bg-copper-50 text-copper-800'
                    : 'border-navy-200 bg-white text-navy-800 hover:border-navy-400'
                }`}
              >
                <input
                  type="checkbox"
                  name="diensten"
                  value={s.title}
                  checked={checked}
                  onChange={() => toggleService(s.title)}
                  className="h-4 w-4 rounded border-navy-300 text-copper-600 accent-copper-600"
                />
                {s.label}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="veld-bericht" className="block text-sm font-semibold text-navy-900">
          Uw vraag of opmerking <span className="text-copper-700">*</span>
        </label>
        <textarea
          id="veld-bericht"
          name="bericht"
          rows={6}
          required
          value={fields.bericht}
          onChange={(e) => update('bericht', e.target.value)}
          aria-invalid={Boolean(errors.bericht)}
          aria-describedby={errors.bericht ? 'fout-bericht' : undefined}
          className={fieldClass('bericht')}
          placeholder="Beschrijf kort wat u nodig heeft."
        />
        {errors.bericht && (
          <p id="fout-bericht" className="mt-2 text-sm font-medium text-red-700">
            {errors.bericht}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Versturen…' : 'Verstuur aanvraag'}
          <IconArrow className="h-5 w-5" />
        </button>
        <p className="text-sm text-charcoal-700">
          Liever direct contact?{' '}
          <a
            href={site.phoneHref}
            className="rounded font-semibold text-navy-900 underline decoration-copper-500 decoration-2 underline-offset-4"
          >
            Bel {site.phone}
          </a>
        </p>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {state === 'mailto' && (
          <p className="flex items-start gap-2 rounded-lg border border-navy-200 bg-navy-50 p-4 text-sm text-navy-900">
            <IconMail className="mt-0.5 h-5 w-5 shrink-0" />
            <span>
              Uw e-mailprogramma wordt geopend met de aanvraag erin. Verstuurt u daar de mail,
              dan komt uw bericht aan. Werkt dat niet? Mail dan rechtstreeks naar{' '}
              <a href={`mailto:${MAILTO_RECIPIENT}`} className="rounded font-semibold underline">
                {MAILTO_RECIPIENT}
              </a>
              .
            </span>
          </p>
        )}
        {state === 'sent' && (
          <p className="flex items-start gap-2 rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-900">
            <IconCheck className="mt-0.5 h-5 w-5 shrink-0" />
            <span>Bedankt, uw aanvraag is verstuurd. We nemen zo snel mogelijk contact op.</span>
          </p>
        )}
        {state === 'error' && (
          <p className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            Het versturen is niet gelukt. Mail uw vraag naar{' '}
            <a href={`mailto:${MAILTO_RECIPIENT}`} className="rounded font-semibold underline">
              {MAILTO_RECIPIENT}
            </a>{' '}
            of bel {site.phone}.
          </p>
        )}
      </div>
    </form>
  )
}
