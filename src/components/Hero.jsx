const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5Bqm6_UJqyC5EVp8NFbATQ_N2y3D8sY0ZIwTmoETkN0c-wfFiquYY0EaNVl2GrJUCv0EE49X7oStrQsAfUUSWQYe-5QF-IC0F4lrRwhIu-Cvem0TOwG-38BFoZrT97pVd0HbCkmBWpmBxjQg4nKcBXHri6w-rqRjGdNYwv_3ZbG3ObgTinp9I6LNfodyAbnExJS9r-TyLJrK8eyBUgat56U0Tk4Oxvo3OQGjGQ4A85NKuDAa4pJBvMkR_x-XRYfcAxNb4W6zomoc';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-end pt-32 pb-10 px-12 overflow-hidden">
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
          <h1 className="font-headline text-[80px] leading-[0.9] font-black tracking-tighter uppercase text-white mb-0">
            High-end studio
            <br />
            with a clear focus
          </h1>
        </div>

        <div className="col-span-12 md:col-span-8">
          <p className="text-neutral-300 max-w-xl text-[18px] leading-relaxed mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
