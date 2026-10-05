/**
 * De negen dienstillustraties, letterlijk overgenomen uit het ontwerp dat
 * Anouar heeft aangeleverd. De kleuren komen uit de CSS-klassen in
 * globals.css (.il-bg, .b, .s, .w, .z, .ink, ...), zodat ze meebewegen met
 * het thema en bij hover van een tegel.
 */
import type { Service } from '@/data/site'

type P = { className?: string }

export function IlGas({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een blauwe gasvlam op een brander"><rect width="320" height="240" className="il-bg" /><ellipse cx="160" cy="206" rx="96" ry="12" className="sh" />
<rect x="74" y="178" width="172" height="22" rx="11" className="w k" /><ellipse cx="160" cy="176" rx="58" ry="11" className="ink" />
<path d="M100 132c8 10 15 17 15 28a15 15 0 0 1-30 0c0-11 7-18 15-28z" className="s k" /><path d="M220 132c8 10 15 17 15 28a15 15 0 0 1-30 0c0-11 7-18 15-28z" className="s k" />
<path d="M160 34c22 30 48 50 48 86a48 48 0 0 1-96 0c0-23 12-36 23-52 4 15 10 21 18 23-4-23-2-40 7-57z" className="b k" />
<path d="M160 102c11 15 22 24 22 39a22 22 0 0 1-44 0c0-15 11-24 22-39z" className="s" /></svg>
  )
}

export function IlWater({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een kraan met een waterdruppel"><rect width="320" height="240" className="il-bg" /><rect x="34" y="52" width="18" height="76" rx="5" className="ink" /><path d="M52 90H168a40 40 0 0 1 40 40v10" className="po" strokeWidth="33" /><path d="M52 90H168a40 40 0 0 1 40 40v10" className="pi ws" strokeWidth="26" /><path d="M96 46h56" className="k" strokeWidth="7" /><rect x="116" y="46" width="16" height="30" className="w k" />
<rect x="190" y="138" width="36" height="14" rx="4" className="ink" /><path transform="translate(208 176) scale(1)" d="M0-14c8 10 12 16 12 23a12 12 0 0 1-24 0c0-7 4-13 12-23z" className="b k" />
<path d="M24 212c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 42 0 28 9 42 0 28-9 42 0" className="bl" strokeWidth="5" />
<path d="M24 228c14-9 28-9 42 0s28 9 42 0 28-9 42 0 28 9 42 0 28-9 42 0 28 9 42 0 28-9 42 0" className="sl" strokeWidth="5" /></svg>
  )
}

export function IlCv({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een radiator die warmte afgeeft"><rect width="320" height="240" className="il-bg" /><path d="M36 204H284" className="k" /><path d="M250 148h26v56" className="k" />
<rect x="62" y="74" width="190" height="112" rx="14" className="w k" /><rect x="78" y="88" width="22" height="84" rx="11" className="s k" /><rect x="112" y="88" width="22" height="84" rx="11" className="s k" /><rect x="146" y="88" width="22" height="84" rx="11" className="s k" /><rect x="180" y="88" width="22" height="84" rx="11" className="s k" /><rect x="214" y="88" width="22" height="84" rx="11" className="s k" />
<path d="M92 186v18M222 186v18" className="k" /><circle cx="264" cy="94" r="12" className="b k" /><path d="M252 94h-2" className="k" />
<path d="M112 58c-9-10 9-15 0-28M157 58c-9-10 9-15 0-28M202 58c-9-10 9-15 0-28" className="bl" strokeWidth="5" /></svg>
  )
}

export function IlSanitair({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een bad met douche"><rect width="320" height="240" className="il-bg" /><path d="M0 78H320M0 140H320M64 0V240M128 0V240M192 0V240M256 0V240" className="grid" />
<path d="M254 124V62a24 24 0 0 0-48 0" className="k" /><path d="M186 66h40" className="k" strokeWidth="9" />
<path d="M194 84v12M206 88v12M218 84v12" className="bl" strokeWidth="4" />
<path d="M50 134h220v18a42 42 0 0 1-42 42H92a42 42 0 0 1-42-42z" className="w k" /><rect x="38" y="122" width="244" height="16" rx="8" className="b k" />
<path d="M92 194v14M228 194v14" className="k" /><circle cx="88" cy="112" r="11" className="w k" /><circle cx="108" cy="102" r="8" className="w k" /><circle cx="126" cy="113" r="9" className="w k" /></svg>
  )
}

export function IlZink({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een huis met zinken dakgoot en regenpijp"><rect width="320" height="240" className="il-bg" /><path d="M30 210H292" className="k" /><rect x="78" y="124" width="164" height="86" className="w k" /><rect x="138" y="150" width="44" height="38" rx="3" className="s k" /><path d="M160 150v38M138 169h44" className="k" strokeWidth="2" />
<path d="M56 126 160 46 264 126z" className="b k" /><rect x="46" y="120" width="228" height="13" rx="6.5" className="z k" /><path d="M262 133v74" className="po" strokeWidth="16" /><path d="M262 133v74" className="pi zs" strokeWidth="9" /><path transform="translate(286 60) scale(0.6)" d="M0-14c8 10 12 16 12 23a12 12 0 0 1-24 0c0-7 4-13 12-23z" className="s k" /><path transform="translate(300 96) scale(0.6)" d="M0-14c8 10 12 16 12 23a12 12 0 0 1-24 0c0-7 4-13 12-23z" className="s k" /><path transform="translate(274 90) scale(0.6)" d="M0-14c8 10 12 16 12 23a12 12 0 0 1-24 0c0-7 4-13 12-23z" className="s k" /></svg>
  )
}

export function IlRiool({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een rioolbuis onder de grond"><rect width="320" height="240" className="il-bg" /><rect x="0" y="74" width="320" height="166" className="soil" /><path d="M0 74H320" className="k" /><rect x="56" y="62" width="62" height="14" rx="4" className="ink" /><path d="M87 76v54a26 26 0 0 0 26 26h96a26 26 0 0 1 26 26v60" className="po" strokeWidth="35" /><path d="M87 76v54a26 26 0 0 0 26 26h96a26 26 0 0 1 26 26v60" className="pi ws" strokeWidth="28" /><rect x="150" y="136" width="13" height="40" rx="3" className="ink" /><rect x="215" y="196" width="40" height="13" rx="3" className="ink" />
<path d="M176 156h14M184 150l7 6-7 6" className="bl" strokeWidth="4" /><path d="M150 36c0-10 14-10 14 0M210 30c0-10 14-10 14 0" className="k" strokeWidth="2.5" /></svg>
  )
}

export function IlDak({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een dak met dakpannen"><rect width="320" height="240" className="il-bg" /><rect x="186" y="34" width="30" height="46" className="w k" /><path d="M50 192 104 62H216L270 192z" className="b k" />
<path d="M90 95H230M77 127H243M63 160H257" className="wl" /><path d="M130 62v33M160 62v33M190 62v33M115 95v32M145 95v32M175 95v32M205 95v32M100 127v33M130 127v33M160 127v33M190 127v33M220 127v33M85 160v32M115 160v32M145 160v32M175 160v32M205 160v32M235 160v32" className="wl" />
<path d="M34 192H286" className="k" strokeWidth="7" /></svg>
  )
}

export function IlVentilatie({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een ventilator met luchtstroom"><rect width="320" height="240" className="il-bg" /><circle cx="118" cy="120" r="66" className="w k" /><path transform="rotate(0 118 120)" d="M118 120c8-32 34-44 46-27s-13 30-46 27z" className="b k" /><path transform="rotate(90 118 120)" d="M118 120c8-32 34-44 46-27s-13 30-46 27z" className="b k" /><path transform="rotate(180 118 120)" d="M118 120c8-32 34-44 46-27s-13 30-46 27z" className="b k" /><path transform="rotate(270 118 120)" d="M118 120c8-32 34-44 46-27s-13 30-46 27z" className="b k" /><circle cx="118" cy="120" r="11" className="ink" />
<path d="M206 88h56a15 15 0 1 0-15-15M206 120h88M206 152h46a15 15 0 1 1-15 15" className="bl" strokeWidth="5" /></svg>
  )
}

export function IlAdvies({ className = 'il' }: P) {
  return (
    <svg className={className} viewBox="0 0 320 240" role="img" aria-label="Illustratie van een klembord met afgevinkte punten en een lamp"><rect width="320" height="240" className="il-bg" /><rect x="76" y="50" width="140" height="164" rx="14" className="w k" /><rect x="118" y="38" width="56" height="24" rx="9" className="ink" /><path d="M96 96l9 9 15-18" className="bl" strokeWidth="5" /><path d="M134 98h62" className="sl" strokeWidth="9" /><path d="M96 134l9 9 15-18" className="bl" strokeWidth="5" /><path d="M134 136h62" className="sl" strokeWidth="9" /><path d="M96 172l9 9 15-18" className="bl" strokeWidth="5" /><path d="M134 174h62" className="sl" strokeWidth="9" />
<circle cx="254" cy="96" r="26" className="b k" /><rect x="244" y="122" width="20" height="13" rx="3" className="w k" /><path d="M254 56V44M290 96h12M282 66l9-9" className="k" /></svg>
  )
}

export const illustrations: Record<Service['slug'], (p: P) => React.JSX.Element> = {
  'gasinstallaties': IlGas,
  'waterleidinginstallaties': IlWater,
  'centrale-verwarming': IlCv,
  'badkamer-en-sanitair': IlSanitair,
  'zink-en-dakwerk': IlZink,
  'riolering': IlRiool,
  'dakbedekking': IlDak,
  'ventilatie-advies': IlVentilatie,
  'product-en-budget': IlAdvies,
}
