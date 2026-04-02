"use client"; 
import PalmSundaySection from './components/PalmSundaySection'

import WorkList from "../src/components/WorkList";

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: '#f8f5f0',
        color: '#1f1f1f',
        minHeight: '100vh',
      }}
    >
      <section
        style={{
          padding: '80px 20px 40px',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            opacity: 0.7,
            marginBottom: '12px',
          }}
        >
          Easter Portfolio
        </p>

        <h1
          style={{
            fontSize: '3.5rem',
            marginBottom: '16px',
          }}
        >
          Holy Week
        </h1>

        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.7',
          }}
        >
          This portfolio reflects meaningful moments from Easter week and the
          life of Jesus Christ.
        </p>
        <WorkList />
      </section>

      <PalmSundaySection />
    </main>
  )
}