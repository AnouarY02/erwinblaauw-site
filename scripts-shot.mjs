import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = 'http://127.0.0.1:3477'
const OUT = 'screenshots'
mkdirSync(OUT, { recursive: true })

const pages = [
  ['home', '/'],
  ['diensten', '/diensten'],
  ['referenties', '/referenties'],
  ['over-ons', '/over-ons'],
  ['contact', '/contact'],
  ['route', '/route'],
  ['404', '/deze-pagina-bestaat-niet'],
]

const viewports = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobiel', { width: 390, height: 844 }],
]

const browser = await chromium.launch({ args: ['--no-sandbox'] })
const problems = []

for (const [vpName, viewport] of viewports) {
  const ctx = await browser.newContext({
    viewport,
    deviceScaleFactor: 2,
    locale: 'nl-NL',
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  page.on('console', (m) => {
    if (m.type() === 'error') problems.push(`[console ${vpName}] ${m.text()}`)
  })
  page.on('pageerror', (e) => problems.push(`[pageerror ${vpName}] ${e.message}`))

  for (const [name, path] of pages) {
    const res = await page.goto(BASE + path, { waitUntil: 'networkidle' })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(350)
    await page.screenshot({ path: `${OUT}/${name}-${vpName}-boven.png` })
    await page.screenshot({ path: `${OUT}/${name}-${vpName}-volledig.png`, fullPage: true })

    // Horizontale overflow opsporen
    const overflow = await page.evaluate(() => {
      const d = document.documentElement
      return { scrollW: d.scrollWidth, clientW: d.clientWidth }
    })
    if (overflow.scrollW > overflow.clientW + 1)
      problems.push(`[overflow ${vpName}] ${path}: scrollWidth ${overflow.scrollW} > ${overflow.clientW}`)

    console.log(`${vpName} ${path} -> ${res.status()}`)
  }

  // Mobiel menu open vastleggen
  if (vpName === 'mobiel') {
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: /Menu openen/i }).click()
    await page.waitForTimeout(300)
    await page.screenshot({ path: `${OUT}/home-mobiel-menu-open.png` })
    console.log('mobiel menu-open geschoten')
  }

  // Formuliervalidatie vastleggen (desktop)
  if (vpName === 'desktop') {
    await page.goto(BASE + '/contact', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: /Verstuur aanvraag/i }).click()
    await page.waitForTimeout(400)
    const errCount = await page.locator('p.text-red-700').count()
    problems.push(`[info] validatiefouten bij leeg formulier: ${errCount}`)
    await page.locator('#veld-bericht').scrollIntoViewIfNeeded()
    await page.screenshot({ path: `${OUT}/contact-desktop-validatie.png` })

    // Toetsenbordnavigatie: eerste tab moet de skiplink zijn
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    await page.keyboard.press('Tab')
    const firstFocus = await page.evaluate(() => document.activeElement?.textContent?.trim())
    problems.push(`[info] eerste tab-stop: ${firstFocus}`)
    await page.screenshot({ path: `${OUT}/home-desktop-skiplink-focus.png` })
  }

  await ctx.close()
}

await browser.close()
console.log('\n--- bevindingen ---')
console.log(problems.length ? problems.join('\n') : 'geen console-errors of overflow')
