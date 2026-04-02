"use client";

import { useEffect, useRef, useState } from "react";
import PalmSundaySection from './components/PalmSundaySection'
import Image from "next/image";
import WorkList from "../src/components/WorkList";
export default function Page() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const lines = [
    { text: "CHRIST IS", color: "text-[#C88AA0]" },
    { text: "THE RISEN HOPE", color: "text-[#9B8AE8]" },
    { text: "OF EASTER AND", color: "text-[#7FCFC3]" },
    { text: "THE LIGHT OF", color: "text-[#F0A8CF]" },
    { text: "EVERY SOUL", color: "text-[#F2B680]" },
  ];
  return (
    <>
    <main className="min-h-screen bg-gradient-to-b from-[#DFF1FF] via-[#F8F4FF] to-[#FFF9F4] text-[#4B3F52]">
      <section ref={heroRef} className="relative overflow-hidden">
        
        {/* SOFT BACKGROUND LIGHTS */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[10%] h-48 w-48 rounded-full bg-[#F8CFE1]/40 blur-3xl" />
          <div className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-[#CFE8FF]/70 blur-3xl" />
          <div className="absolute bottom-[12%] left-[30%] h-52 w-52 rounded-full bg-[#E5D8FF]/50 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-screen max-w-[1450px] flex-col px-6 py-8">
          
          {/* HEADER */}
          <div className="mb-10 flex items-center justify-between text-[15px] font-semibold uppercase tracking-[0.18em] text-[#7E7284]">
            <p>Juliana Studio</p>
            <p>Easter • Hope • Light</p>
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col justify-center">
            
            {/* TITLE */}
            <div className="mb-14 space-y-1 text-center leading-[0.92] tracking-[-0.05em]">
              {lines.map((line, i) => (
                <div key={line.text} className="overflow-hidden">
                  <div
                    className={`title-line ${
                      isVisible ? "line-visible" : ""
                    } ${line.color} text-[11vw] font-black uppercase sm:text-[8vw] lg:text-[5.5rem] xl:text-[6.5rem]`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {line.text}
                  </div>
                </div>
              ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-10 pb-8 text-[#615764] sm:grid-cols-2 lg:grid-cols-4">
              
              <div>
                <p className="max-w-sm text-[18px] leading-[1.28] sm:text-[24px]">
                  Easter reminds us that through Jesus Christ, darkness does not
                  win, sorrow is not the end, and every soul can begin again in
                  Him.
                </p>
              </div>

              <div className="space-y-1 text-[18px] sm:text-[22px]">
                <p>Resurrection</p>
                <p>Grace</p>
                <p>Redemption</p>
                <p>Peace</p>
                <p>Faith in Christ</p>
                <p>New Life</p>
              </div>

              <div className="space-y-1 text-[18px] sm:text-[22px]">
                <p>He Lives</p>
                <p>He Knows Us</p>
                <p>He Strengthens</p>
                <p>He Heals</p>
                <p>He Restores</p>
                <p>And More...</p>
              </div>

              <div className="space-y-1 text-[18px] sm:text-[22px]">
                <p>John 11:25</p>
                <p>Luke 24</p>
                <p>3 Nephi 11</p>
                <p>Alma 7:11–13</p>
                <p>D&amp;C 76</p>
                <p>Come Unto Christ</p>
              </div>

            </div>

            {/* SCROLL */}
            <div className="pt-6 text-[22px] font-medium text-[#8D7990]">
              Scroll
            </div>

          </div>
        </div>
        </section>
    </main>
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

      {/* ANIMATION */}
      <style jsx>{`
        .title-line {
          transform: translateY(135%);
          opacity: 0;
          filter: blur(8px);
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.9s ease,
            filter 0.9s ease;
        }

        .line-visible {
          transform: translateY(0%);
          opacity: 1;
          filter: blur(0);
        }
      `}</style>
      <PalmSundaySection />
    </main>
    
    </div>
    </>
  )
}
