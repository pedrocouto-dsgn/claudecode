export default function JournalSpotlight() {
  return (
    <section className="bg-surface-container-lowest py-32 px-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-20">
        <div className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-8">
            Journal Extract
          </p>
          <h2 className="font-headline text-5xl font-bold tracking-tighter leading-none text-white">
            THE SILENCE OF SPACE
          </h2>
        </div>
        <div className="text-right">
          <p className="font-body text-secondary/40 text-sm max-w-[280px] ml-auto">
            Exploring the psychological impact of void and volume in contemporary residential design.
          </p>
        </div>
      </div>
    </section>
  );
}
