export default function Home() {
  return (
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
