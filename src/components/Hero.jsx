const HERO_IMAGE = '/5-maneras-estudio-visual-sonido-1200x500-1.jpeg';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-end pt-32 pb-10 px-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          alt="Professional recording studio with mixing console and audio equipment"
          className="w-full h-full object-cover opacity-55"
          src={HERO_IMAGE}
        />
{/* no gradient overlay */}
      </div>

      <div className="relative z-10 w-full editorial-grid gap-4">
        <div className="col-span-12 md:col-span-8">
          <h1 className="font-headline text-[80px] leading-[0.9] font-black tracking-tighter uppercase text-white mb-0">
            Um estúdio onde a tua ideia ganha forma com som, imagem e presença.
          </h1>
        </div>

        <div className="col-span-12 md:col-span-8">
          <p className="text-neutral-300 max-w-xl text-[18px] leading-relaxed mt-6">
            Grava, produz e transmite com qualidade profissional num ambiente pensado ao detalhe, do áudio à imagem, do controlo à experiência.
          </p>
        </div>
      </div>
    </section>
  );
}
