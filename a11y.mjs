import { chromium } from 'playwright'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const axePath = require.resolve('axe-core/axe.min.js')

const b = await chromium.launch({ args: ['--no-sandbox'] })
const pages = ['/', '/diensten', '/referenties', '/over-ons', '/contact', '/route', '/bestaat-niet']
let total = 0
for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  const c = await b.newContext({ viewport: vp })
  const p = await c.newPage()
  for (const u of pages) {
    await p.goto('http://127.0.0.1:3477' + u, { waitUntil: 'networkidle' })
    await p.addScriptTag({ path: axePath })
    const r = await p.evaluate(async () =>
      await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
      }),
    )
    if (r.violations.length) {
      console.log(`\n${vp.width}px ${u}`)
      for (const v of r.violations) {
        total += v.nodes.length
        console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length}x)`)
        console.log(`     ${v.nodes[0].target.join(' ')}`)
        if (v.nodes[0].failureSummary) console.log(`     ${v.nodes[0].failureSummary.replace(/\n/g, ' | ')}`)
      }
    }
  }
  await c.close()
}
await b.close()
console.log(`\nTotaal WCAG A/AA-overtredingen: ${total}`)
