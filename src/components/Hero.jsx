const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5Bqm6_UJqyC5EVp8NFbATQ_N2y3D8sY0ZIwTmoETkN0c-wfFiquYY0EaNVl2GrJUCv0EE49X7oStrQsAfUUSWQYe-5QF-IC0F4lrRwhIu-Cvem0TOwG-38BFoZrT97pVd0HbCkmBWpmBxjQg4nKcBXHri6w-rqRjGdNYwv_3ZbG3ObgTinp9I6LNfodyAbnExJS9r-TyLJrK8eyBUgat56U0Tk4Oxvo3OQGjGQ4A85NKuDAa4pJBvMkR_x-XRYfcAxNb4W6zomoc';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-end pt-32 pb-24 px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="monolithic brutalist concrete architecture at dusk with minimalist geometry and soft atmospheric lighting casting dramatic long shadows"
          className="w-full h-full object-cover"
          src={HERO_IMAGE}
        />
{/* no gradient overlay */}
      </div>

      <div className="relative z-10 w-full editorial-grid gap-4">
        <div className="col-span-12 md:col-span-8">
          <h1 className="font-headline text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-black tracking-tighter uppercase text-white mb-12">
            High-end studio
            <br />
            with a clear focus
          </h1>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-12 md:pb-4">
          <div className="flex gap-12 border-t border-white/20 pt-8">
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-neutral-300 mb-2">Projects</p>
              <p className="font-headline text-4xl font-bold italic text-white">140+</p>
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-neutral-300 mb-2">Awards</p>
              <p className="font-headline text-4xl font-bold italic text-white">24</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-neutral-300 mb-4 flex items-center gap-2">
              Latest Project <span className="w-12 h-[1px] bg-neutral-300" />
            </p>
            <h3 className="font-headline text-2xl font-bold uppercase mb-2 group-hover:pl-4 transition-all duration-700 text-white">
              Ridge House
            </h3>
            <p className="text-neutral-300 max-w-xs text-sm leading-relaxed">
              A coastal retreat harmonized with the rugged terrain of northern peaks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
