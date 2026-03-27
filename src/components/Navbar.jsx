export default function Navbar() {
  return (
    <nav className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 z-50">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-2xl px-8 md:px-12 py-6 flex justify-between items-center">
        <div>
          <div className="text-lg md:text-xl font-black tracking-tighter text-white font-headline uppercase">
            COSMOS STUDIO
          </div>
          <p className="font-body text-neutral-300/80 text-sm mt-1">
            Rua Augusta 456, 3º andar, 1100-053 Lisboa, Portugal
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="material-symbols-outlined text-neutral-400 text-sm">location_on</span>
          <span className="font-mono text-xs text-neutral-400">
            38.7223° N, 9.1393° W
          </span>
        </div>
      </div>
    </nav>
  );
}
