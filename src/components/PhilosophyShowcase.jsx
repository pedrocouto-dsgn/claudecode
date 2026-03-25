const SHOWCASE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZDDj6s6rWxBHjolxEbuYpAh-jysonwpTxcrUzRJwS4BH59R6baZvLzmy0DNt-A1JEtdlcb7zYRzDm3X-XdPSMw1LrS7JFVa_M8Waq2RNL5hzo-wsztwYeqM0yWsyZ7Nu_3bXN021QUZJE2XdZk-6dIpiklSaY90rSqaqOr2uymfRU3ywLUOB9J1260JzZsUv7h2etPt3nv7DRaGV7QVhjvEUfMDeiMhDBdFb5e8Ae_rifczFlY89M67L4dYJjimDUbLTec65iu8JV';

export default function PhilosophyShowcase() {
  return (
    <section className="relative bg-black h-screen w-full flex items-center justify-center px-4 md:px-12 overflow-hidden">
      <div className="relative w-full h-full max-w-[1920px] mx-auto flex items-center">
        {/* Left Sidebar Navigation */}
        <div className="absolute left-0 z-20 flex flex-col gap-12 font-headline text-xs tracking-widest text-neutral-600 font-bold uppercase">
          <span className="cursor-pointer hover:text-white transition-colors duration-300">01</span>
          <span className="cursor-pointer hover:text-white transition-colors duration-300">02</span>
          <span className="text-white relative after:content-[''] after:absolute after:left-10 after:top-1/2 after:w-8 after:h-[1px] after:bg-white">
            03
          </span>
        </div>

        {/* Main Image Container */}
        <div className="relative w-full h-[85vh] ml-16 md:ml-24 overflow-hidden rounded-xl">
          <img
            alt="Modern architectural house at dusk with cinematic lighting"
            className="w-full h-full object-cover brightness-75 contrast-110"
            src={SHOWCASE_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-2xl">
              <h2 className="font-headline text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold text-white mb-6 tracking-tight">
                What defines our work
              </h2>
              <p className="font-body text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl">
                Our projects are shaped by structure, responsibility and attention to how spaces are used and experienced over time.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Scroll Indicators */}
        <div className="absolute right-0 z-20 flex flex-col gap-2 items-center">
          <div className="w-[1px] h-12 bg-neutral-800" />
          <div className="w-[2px] h-16 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <div className="w-[1px] h-48 bg-neutral-800" />
        </div>
      </div>
    </section>
  );
}
