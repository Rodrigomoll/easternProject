'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PalmSundaySection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '40px 20px 100px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              opacity: 0.65,
              marginBottom: '10px',
            }}
          >
            Holy Week Begins
          </p>

          <h2
            style={{
              fontSize: '2.8rem',
              marginBottom: '16px',
            }}
          >
            Palm Sunday
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              margin: '0 auto',
              maxWidth: '720px',
            }}
          >
            Palm Sunday marks Jesus Christ’s humble entry into Jerusalem. It
            reminds us that the King of Kings came with peace, humility, and
            love, beginning the sacred events of Holy Week.
          </p>
        </div>

        <div
          style={{
            transform: `translateY(${offsetY * 0.12}px) scale(${1 + offsetY * 0.0002})`,
            opacity: Math.min(1, 0.75 + offsetY / 1200),
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-out',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/palm-sunday.jpg"
            alt="Palm Sunday"
            width={950}
            height={620}
            priority
            style={{
              width: '100%',
              maxWidth: '950px',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
              objectFit: 'cover',
            }}
          />
        </div>
    </div>
    </section>
  )
}