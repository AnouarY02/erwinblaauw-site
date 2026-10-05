/**
 * De sectiekop uit het ontwerp (`.sec-head`): links een bovenkopje met de
 * titel, rechts een korte inleiding.
 */
export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <div className="sec-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="sec-intro">{intro}</p>
    </div>
  )
}
