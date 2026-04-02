"use client"; 
import PalmSundaySection from './components/PalmSundaySection'

import WorkList from "../src/components/WorkList";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>

        
          <div id = "Jimmy">
            <Image
            src="/jesus_nephites.jpeg"
            alt="Jesus Christ appearing to the Nephites"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <p className="max-w-md text-base leading-7 text-zinc-700 dark:text-zinc-300 italic border-l-4 pl-4">
            "Behold, I am Jesus Christ, whom the prophets testified shall come into the world. And behold, I am the light and the life of the world;... Arise and come forth unto me, that ye may thrust your hands into my side, and also that ye may feel the prints of the nails in my hands and in my feet, that ye may know that I am the God of Israel, and the God of the whole earth, and have been slain for the sins of the world. (3 Nephi 11:10–11, 14)"
          </p>
          </div>
          
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
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
