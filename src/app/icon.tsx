import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1c3252',
          color: '#ffffff',
          fontSize: 34,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: -1,
        }}
      >
        <span>E</span>
        <span style={{ color: '#d96c2c' }}>B</span>
      </div>
    ),
    size,
  )
}
