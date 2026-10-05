'use client'

import { useState } from 'react'
import { site } from '@/data/site'

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
 *    aan bij een formulierdienst en zet daar het ontvangstadres van Erwin.
 *    Vervang daarna in onSubmit() de mailto-stap door een POST van `fields`
 *    als JSON naar het endpoint dat die dienst u geeft.
 *
 *    Dat is bewust nog niet ingebouwd: er mag geen dienst worden aangemaakt en
 *    er mag geen e-mail de deur uit zonder dat Erwin dat zelf instelt.
 * ------------------------------------------------------------------------
 *
 * De opbouw (drie velden, "Verstuur", statusregel ernaast) komt uit het
 * ontwerp. Wat het ontwerp niet toont en hier wel zit: echte validatie met
 * zichtbare foutmeldingen die de voorlezer meekrijgt.
 */
const MAILTO_RECIPIENT = site.email // TODO: desgewenst het definitieve ontvangstadres van Erwin

type Fields = { naam: string; bereik: string; bericht: string }

const emptyFields: Fields = { naam: '', bereik: '', bericht: '' }

type Errors = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.naam.trim().length < 2) e.naam = 'Vul uw naam in.'
  if (f.bereik.trim().length < 6)
    e.bereik = 'Vul een telefoonnummer of e-mailadres in waarop we u kunnen bereiken.'
  if (f.bericht.trim().length < 10)
    e.bericht = 'Beschrijf uw vraag in minstens 10 tekens, zodat we u goed kunnen helpen.'
  return e
}

function buildMailto(f: Fields) {
  const lines = [
    `Naam: ${f.naam}`,
    `Telefoonnummer of e-mailadres: ${f.bereik}`,
    '',
    'Vraag:',
    f.bericht,
  ]
  const subject = `Adviesaanvraag via de website — ${f.naam}`
  return `mailto:${MAILTO_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join('\n'),
  )}`
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState('')

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(fields)
    setErrors(found)

    const first = Object.keys(found)[0]
    if (first) {
      setStatus('Er ontbreekt nog iets. Loop de velden met een melding even na.')
      document.getElementById(`veld-${first}`)?.focus()
      return
    }

    // Geen formulierdienst ingesteld (zie de TODO bovenaan dit bestand):
    // open het e-mailprogramma van de bezoeker met een ingevulde e-mail.
    setStatus(
      'Uw e-mailprogramma wordt geopend met de aanvraag erin. Verstuurt u die mail, dan komt uw bericht aan.',
    )
    window.location.href = buildMailto(fields)
  }

  function field(key: keyof Fields) {
    return {
      id: `veld-${key}`,
      name: key,
      required: true,
      value: fields[key],
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': errors[key] ? `fout-${key}` : undefined,
    } as const
  }

  return (
    <form className="form" id="adviesformulier" noValidate onSubmit={onSubmit}>
      <h2>Of laat een bericht achter</h2>

      <div className="f">
        <label htmlFor="veld-naam">Naam *</label>
        <input
          {...field('naam')}
          type="text"
          autoComplete="name"
          onChange={(e) => update('naam', e.target.value)}
        />
        {errors.naam && (
          <p className="f-error" id="fout-naam">
            {errors.naam}
          </p>
        )}
      </div>

      <div className="f">
        <label htmlFor="veld-bereik">Telefoonnummer of e-mailadres *</label>
        <input
          {...field('bereik')}
          type="text"
          onChange={(e) => update('bereik', e.target.value)}
        />
        {errors.bereik && (
          <p className="f-error" id="fout-bereik">
            {errors.bereik}
          </p>
        )}
      </div>

      <div className="f">
        <label htmlFor="veld-bericht">Uw vraag *</label>
        <textarea
          {...field('bericht')}
          rows={4}
          onChange={(e) => update('bericht', e.target.value)}
        />
        {errors.bericht && (
          <p className="f-error" id="fout-bericht">
            {errors.bericht}
          </p>
        )}
      </div>

      <div className="form-foot">
        <button className="btn btn-primary" type="submit">
          Verstuur
        </button>
        <p className="hint" id="form-status" role="status">
          {status}
        </p>
      </div>
    </form>
  )
}
