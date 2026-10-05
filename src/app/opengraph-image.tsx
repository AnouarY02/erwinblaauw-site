import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.name} — ${site.slogan}`

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0d1826 0%, #1c3252 58%, #2b4f7e 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 24,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#ecab7c',
            fontWeight: 700,
          }}
        >
          <div style={{ width: 54, height: 6, background: '#d96c2c', borderRadius: 3 }} />
          Installatietechniek · Gorredijk
        </div>
        <div style={{ display: 'flex', fontSize: 74, fontWeight: 800, marginTop: 28, lineHeight: 1.05 }}>
          Erwin Blaauw
        </div>
        <div style={{ display: 'flex', fontSize: 50, fontWeight: 700, color: '#e2854c', marginTop: 6 }}>
          De zekerheid van kwaliteit
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#c3d4e8', marginTop: 40 }}>
          Gas · Water · CV · Sanitair · Dak- en zinkwerk
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#92b0d3', marginTop: 18 }}>
          {site.address.street}, {site.address.postalCode} {site.address.city} · {site.phone}
        </div>
      </div>
    ),
    size,
  )
}
