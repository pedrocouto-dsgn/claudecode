export default function Navbar() {
  return (
    <nav className="w-full z-50 px-6 md:px-10 py-6">
      <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl px-8 md:px-12 py-6 flex justify-between items-center">
        <div>
          <div className="text-xl font-black tracking-tighter text-white font-headline uppercase">
            COSMOS STUDIO
          </div>
          <p className="font-body text-neutral-300 text-sm mt-1">
            Rua Augusta 456, 3º andar, 1100-053 Lisboa, Portugal
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-neutral-400">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span className="font-mono text-xs text-neutral-400">
            38.7223° N, 9.1393° W
          </span>
        </div>
      </div>
    </nav>
  );
}
