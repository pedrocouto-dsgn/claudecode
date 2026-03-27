export default function JournalSpotlight() {
  return (
    <section className="bg-white py-32 px-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-black/10 pb-20">
        <div className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-[0.4em] text-neutral-400 mb-8">
            Journal Extract
          </p>
          <h2 className="font-headline text-5xl font-bold tracking-tighter leading-none text-black">
            THE SILENCE OF SPACE
          </h2>
        </div>
        <div className="text-right">
          <p className="font-body text-neutral-400 text-sm max-w-[280px] ml-auto">
            Exploring the psychological impact of void and volume in contemporary residential design.
          </p>
        </div>
      </div>
    </section>
  );
}
