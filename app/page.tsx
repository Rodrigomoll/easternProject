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
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    lineRefs.current.forEach((line) => {
      if (line) observer.observe(line);
    });

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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[10%] h-48 w-48 rounded-full bg-[#F8CFE1]/40 blur-3xl" />
          <div className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-[#CFE8FF]/70 blur-3xl" />
          <div className="absolute bottom-[12%] left-[30%] h-52 w-52 rounded-full bg-[#E5D8FF]/50 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-screen max-w-[1450px] flex-col px-6 py-8">
          <div className="mb-10 flex items-center justify-between text-[15px] font-semibold uppercase tracking-[0.18em] text-[#7E7284] sm:text-[17px]">
            <p>Juliana Studio</p>
            <p>Easter • Hope • Light</p>
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-14 space-y-1 text-center leading-[0.92] tracking-[-0.05em]">
              {lines.map((line, i) => (
                <div key={line.text} className="overflow-hidden">
                  <div
                    ref={(el) => {
                      lineRefs.current[i] = el;
                    }}
                    className={`title-line ${line.color} text-[11vw] font-black uppercase sm:text-[8vw] lg:text-[5.5rem] xl:text-[6.5rem]`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {line.text}
                  </div>
                </div>
              ))}
            </div>

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

            <div className="pt-6 text-[22px] font-medium tracking-wide text-[#8D7990] sm:text-[28px]">
              Scroll
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-6 py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/60 bg-white/70 p-8 shadow-[0_10px_40px_rgba(120,120,160,0.10)] backdrop-blur">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#9B8AE8]">
              Hope
            </p>
            <h3 className="mb-3 text-2xl font-bold text-[#4B3F52]">
              He lives and leads us
            </h3>
            <p className="text-[17px] leading-8 text-[#6A5E69]">
              Because Jesus Christ rose again, hope is not wishful thinking. It
              is a living promise that grief, fear, and uncertainty do not have
              the final word.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/60 bg-white/70 p-8 shadow-[0_10px_40px_rgba(120,120,160,0.10)] backdrop-blur">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7FCFC3]">
              Healing
            </p>
            <h3 className="mb-3 text-2xl font-bold text-[#4B3F52]">
              He understands every heart
            </h3>
            <p className="text-[17px] leading-8 text-[#6A5E69]">
              Through His Atonement, Christ knows how to strengthen, comfort,
              and restore. Easter is not only about an empty tomb—it is about a
              Savior who is near.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/60 bg-white/70 p-8 shadow-[0_10px_40px_rgba(120,120,160,0.10)] backdrop-blur">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F2B680]">
              Renewal
            </p>
            <h3 className="mb-3 text-2xl font-bold text-[#4B3F52]">
              New life begins in Him
            </h3>
            <p className="text-[17px] leading-8 text-[#6A5E69]">
              Easter invites us to start again with faith. In Jesus Christ,
              broken things can be made whole, and every day can become a step
              toward light.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-6 pb-28 pt-8">
        <div className="rounded-[36px] border border-white/70 bg-white/75 p-10 shadow-[0_14px_50px_rgba(100,100,140,0.10)] backdrop-blur">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C88AA0]">
            Easter Message
          </p>
          <blockquote className="max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.03em] text-[#4B3F52] sm:text-4xl">
            “I am the resurrection, and the life: he that believeth in me,
            though he were dead, yet shall he live.”
          </blockquote>
          <p className="mt-5 text-lg text-[#7D7283]">John 11:25</p>
        </div>
      </section>

      <style jsx>{`
        .title-line {
          transform: translateY(135%);
          opacity: 0;
          filter: blur(8px);
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.9s ease,
            filter 0.9s ease;
          will-change: transform, opacity, filter;
        }

        .line-visible {
          transform: translateY(0%);
          opacity: 1;
          filter: blur(0);
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