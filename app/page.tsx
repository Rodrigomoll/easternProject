"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("line-visible");
            }, index * 180);
          }
        });
      },
      { threshold: 0.35 }
    );

    lineRefs.current.forEach((line) => {
      if (line) observer.observe(line);
    });

    return () => observer.disconnect();
  }, []);

  const lines = [
    "CHRIST IS",
    "THE RISEN HOPE",
    "OF EASTER AND",
    "THE LIGHT OF",
    "EVERY SOUL",
  ];

  return (
    <main className="min-h-screen bg-[#FFF9F4] text-[#5B4B5A]">
      <section className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-center justify-between text-[18px] font-semibold tracking-tight sm:text-[22px]">
          <p>CSS 220 Studio</p>
          <p>Easter • Hope • Light</p>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-12 space-y-0 text-center leading-[0.9] tracking-[-0.04em] text-[#7E6B7C]">
            {lines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <div
                  ref={(el) => {
                    lineRefs.current[i] = el;
                  }}
                  className="title-line text-[17vw] font-black uppercase sm:text-[14vw] lg:text-[9rem] xl:text-[10rem]"
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 pb-8 text-[#6B5D6A] sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="max-w-sm text-[20px] leading-[1.2] sm:text-[26px]">
                Easter reminds us that through Jesus Christ, sorrow is not the
                end, darkness does not win, and every life can begin again in
                Him.
              </p>
            </div>

            <div className="space-y-1 text-[20px] sm:text-[26px]">
              <p>Resurrection</p>
              <p>Grace</p>
              <p>Redemption</p>
              <p>Peace</p>
              <p>Faith in Christ</p>
              <p>New Life</p>
            </div>

            <div className="space-y-1 text-[20px] sm:text-[26px]">
              <p>He Lives</p>
              <p>He Knows Us</p>
              <p>He Strengthens</p>
              <p>He Heals</p>
              <p>He Restores</p>
              <p>And More...</p>
            </div>

            <div className="space-y-1 text-[20px] sm:text-[26px]">
              <p>John 11:25</p>
              <p>Luke 24</p>
              <p>3 Nephi 11</p>
              <p>Alma 7:11–13</p>
              <p>D&amp;C 76</p>
              <p>Come Unto Christ</p>
            </div>
          </div>

          <div className="pt-6 text-[28px] font-medium text-[#8D7990] sm:text-[34px]">
            Scroll
          </div>
        </div>
      </section>

      <style jsx>{`
        .title-line {
          transform: translateY(120%);
          opacity: 0;
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.9s ease;
          will-change: transform, opacity;
        }

        .line-visible {
          transform: translateY(0%);
          opacity: 1;
        }
      `}</style>
    </main>
  );
}