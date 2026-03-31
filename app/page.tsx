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
    <main className="w-full">

      {/* ligne1 — fila header: [kinetic] | [Selected Work] */}
      <div className="grid grid-cols-2 border-t border-zinc-200">

        {/* Célula 1: botón kinetic — círculos concéntricos apilados */}
        <div className="py-8 px-8 flex items-center justify-center">
          <button className="relative w-24 h-24 flex items-center justify-center">
            {/* Cada div es un círculo con tamaño diferente, apilados en el centro */}
            <div className="absolute w-full h-full rounded-full border border-zinc-300 scale-100" />
            <div className="absolute w-full h-full rounded-full border border-zinc-300 scale-75" />
            <div className="absolute w-full h-full rounded-full border border-zinc-300 scale-50" />
            <div className="absolute w-full h-full rounded-full border border-zinc-300 scale-25" />
          </button>
        </div>

        {/* Célula 2: título de la sección */}
        <div className="py-8 px-8 flex items-center">
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">Selected Work</h2>
        </div>

      </div>

      {/* ligne2 — fila proyecto: [01 Lowlyland + imagen] | [kinetic] */}
      <div className="grid grid-cols-2 border-t border-zinc-200">

        {/* Célula 1: número + título + imagen (gris → color en hover) */}
        <button className="py-8 px-8 flex items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">01</span>
          <h3 className="text-2xl font-semibold flex-1">Lowlyland</h3>
          {/* La imagen empieza en gris y se vuelve a color al hacer hover */}
          <img
            src="/eastern1.png"
            alt="Lowlyland"
            className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </button>

      </div>

      {/* ligne3 — imagen a la IZQUIERDA (flex-row-reverse) */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button className="py-8 px-8 flex flex-row-reverse items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">02</span>
          <h3 className="text-2xl font-semibold flex-1">Bruce Mau Design</h3>
          <img src="/eastern1.png" alt="Bruce Mau Design" className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </button>
      </div>

      {/* ligne4 — imagen a la DERECHA (flex-row, normal) */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button className="py-8 px-8 flex flex-row items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">03</span>
          <h3 className="text-2xl font-semibold flex-1">Benjamin Righetti</h3>
          <img src="/eastern1.png" alt="Benjamin Righetti" className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </button>
      </div>

      {/* ligne5 — imagen a la IZQUIERDA (flex-row-reverse) */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button className="py-8 px-8 flex flex-row-reverse items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">04</span>
          <h3 className="text-2xl font-semibold flex-1">Vendredi Society</h3>
          <img src="/eastern1.png" alt="Vendredi Society" className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </button>
        <div className="py-8 px-8 flex items-center justify-center">
        </div>
      </div>

      {/* ligne6 — imagen a la DERECHA (flex-row, normal) */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button className="py-8 px-8 flex flex-row items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">05</span>
          <h3 className="text-2xl font-semibold flex-1">Field Day Sound</h3>
          <img src="/eastern1.png" alt="Field Day Sound" className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </button>
        <div className="py-8 px-8 flex items-center justify-center">
        </div>
      </div>

      {/* ligne7 — imagen a la IZQUIERDA (flex-row-reverse) */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button className="py-8 px-8 flex flex-row-reverse items-center gap-6 text-left group">
          <span className="text-xs text-zinc-400 w-8 shrink-0">06</span>
          <h3 className="text-2xl font-semibold flex-1">Eastern Studio</h3>
          <img src="/eastern1.png" alt="Eastern Studio" className="w-40 h-28 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
        </button>
        <div className="py-8 px-8 flex items-center justify-center">
          <div className="flex items-end gap-1 h-16">
            <div className="w-1 bg-zinc-300 h-1/4" />
            <div className="w-1 bg-zinc-300 h-1/2" />
            <div className="w-1 bg-zinc-300 h-3/4" />
            <div className="w-1 bg-zinc-300 h-full" />
            <div className="w-1 bg-zinc-300 h-3/4" />
            <div className="w-1 bg-zinc-300 h-1/2" />
            <div className="w-1 bg-zinc-300 h-1/4" />
          </div>
        </div>
      </div>

      {/* Borde inferior */}
      <div className="border-t border-zinc-200" />

    </main>
  );
}