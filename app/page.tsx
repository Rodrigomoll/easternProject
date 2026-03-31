"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("line-visible");
          } else {
            entry.target.classList.remove("line-visible");
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    lineRefs.current.forEach((line) => {
      if (line) observer.observe(line);
    });

    return () => observer.disconnect();
  }, []);

  const lines = [
    { text: "CHRIST IS", color: "text-[#C08497]" },
    { text: "THE RISEN HOPE", color: "text-[#A78BFA]" },
    { text: "OF EASTER AND", color: "text-[#7DD3C7]" },
    { text: "THE LIGHT OF", color: "text-[#F9A8D4]" },
    { text: "EVERY SOUL", color: "text-[#F4B183]" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF4FF] to-[#FDF6FF] text-[#4B3F52]">
      <section className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 py-8">
        
        {/* TOP BAR */}
        <div className="mb-10 flex items-center justify-between text-[16px] font-semibold sm:text-[18px]">
          <p>Juliana Studio</p>
          <p>Easter • Hope • Light</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-1 flex-col justify-center">
          
          {/* TITLE */}
          <div className="mb-12 space-y-1 text-center leading-[0.95] tracking-[-0.04em]">
            {lines.map((line, i) => (
              <div key={line.text} className="overflow-hidden">
                <div
                  ref={(el) => {
                    lineRefs.current[i] = el;
                  }}
                  className={`title-line ${line.color} text-[11vw] font-black uppercase sm:text-[8vw] lg:text-[5rem] xl:text-[6rem]`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {line.text}
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 gap-10 pb-8 text-[#5F5565] sm:grid-cols-2 lg:grid-cols-4">
            
            <div>
              <p className="max-w-sm text-[18px] leading-[1.3] sm:text-[22px]">
                Easter reminds us that through Jesus Christ, darkness does not
                win, sorrow is not the end, and every life can begin again in Him.
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

          {/* SCROLL TEXT */}
          <div className="pt-6 text-[22px] font-medium text-[#8D7990] sm:text-[26px]">
            Scroll
          </div>

        </div>
      </section>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        .title-line {
          transform: translateY(120%);
          opacity: 0;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.8s ease;
        }

        .line-visible {
          transform: translateY(0%);
          opacity: 1;
        }
      `}</style>
    </main>
  );
}