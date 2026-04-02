"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
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
    </main>
  );
}