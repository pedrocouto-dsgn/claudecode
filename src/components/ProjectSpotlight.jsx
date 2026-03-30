import { useState, useEffect, useCallback } from 'react';

const PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZDDj6s6rWxBHjolxEbuYpAh-jysonwpTxcrUzRJwS4BH59R6baZvLzmy0DNt-A1JEtdlcb7zYRzDm3X-XdPSMw1LrS7JFVa_M8Waq2RNL5hzo-wsztwYeqM0yWsyZ7Nu_3bXN021QUZJE2XdZk-6dIpiklSaY90rSqaqOr2uymfRU3ywLUOB9J1260JzZsUv7h2etPt3nv7DRaGV7QVhjvEUfMDeiMhDBdFb5e8Ae_rifczFlY89M67L4dYJjimDUbLTec65iu8JV';

const cards = [
  {
    num: '01',
    title: 'Estúdio',
    description:
      'Um espaço versátil preparado para gravações profissionais de áudio e vídeo, com isolamento acústico e equipamento de última geração.',
    image: PROJECT_IMAGE,
  },
  {
    num: '02',
    title: 'Plateia',
    description:
      'Uma área cuidadosamente desenhada para receber audiências ao vivo, com conforto acústico e visibilidade optimizada para cada lugar.',
    image: PROJECT_IMAGE,
  },
  {
    num: '03',
    title: 'Camarim',
    description:
      'Espaço privado e confortável para preparação dos convidados e apresentadores, com iluminação profissional e ambiente acolhedor.',
    image: PROJECT_IMAGE,
  },
  {
    num: '04',
    title: 'Régie',
    description:
      'O centro de controlo técnico onde som, imagem e transmissão são geridos em tempo real com precisão e fluidez.',
    image: PROJECT_IMAGE,
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function ProjectSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const card = cards[activeIndex];

  return (
    <section
      className="bg-black min-h-screen flex flex-col justify-between py-16 px-8 md:px-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1920px] mx-auto w-full flex-grow flex flex-col">
        {/* Top area: small text left + big title right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-body text-neutral-400 text-sm max-w-xs leading-relaxed">
              A focused overview highlighting key architectural ideas and
              refined execution.
            </p>
          </div>
          <div className="lg:col-span-9 text-right">
            <h2 className="font-headline text-[50px] leading-[0.95] font-light tracking-tight text-white">
              Premium <span className="italic font-normal text-neutral-400">homes</span>
              <br />
              made by <span className="font-bold">Cosmos Studio</span>
            </h2>
          </div>
        </div>

        {/* Main content: card info left + image right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start flex-grow">
          {/* Left Content */}
          <div className="lg:col-span-5 relative flex flex-col justify-between h-full min-h-[400px]">
            <div className="mb-8">
              <span className="font-['Inter'] text-[80px] leading-none text-white font-light tracking-tighter block transition-all duration-700">
                {card.num}
              </span>
            </div>

            <div className="mb-12">
              <h3 className="font-['Inter'] text-[50px] text-white font-medium tracking-tight transition-all duration-700">
                {card.title}
              </h3>
            </div>

            <div className="border-t border-neutral-800 pt-8 grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <p className="text-white font-medium">2024</p>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Lisboa, Portugal
                </div>
              </div>
              <div>
                <p className="text-neutral-400 text-[18px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6">Scope</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-2 border border-neutral-700 rounded-full text-[10px] uppercase tracking-widest text-neutral-300">Architecture</span>
                <span className="px-6 py-2 border border-neutral-700 rounded-full text-[10px] uppercase tracking-widest text-neutral-300">Engineering</span>
                <span className="px-6 py-2 border border-neutral-700 rounded-full text-[10px] uppercase tracking-widest text-neutral-300">Construction</span>
              </div>
            </div>

          </div>

          {/* Right Image + Controls */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative w-full flex-grow mb-8 overflow-hidden rounded-2xl">
              {cards.map((c, i) => (
                <img
                  key={c.num}
                  alt={c.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    i === activeIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                  src={c.image}
                />
              ))}
              <div className="w-full aspect-[16/10]" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-grow flex items-center gap-1 max-w-md">
                <span className="text-neutral-300 text-sm font-medium pr-4">
                  {card.num}/{String(cards.length).padStart(2, '0')}
                </span>
                <div className="flex-grow flex gap-1">
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-[2px] bg-neutral-800 relative overflow-hidden cursor-pointer"
                      onClick={() => setActiveIndex(i)}
                    >
                      <div
                        className={`absolute inset-0 bg-white transition-all duration-500 origin-left ${
                          i === activeIndex
                            ? 'scale-x-100'
                            : i < activeIndex
                              ? 'scale-x-100 bg-neutral-600'
                              : 'scale-x-0'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 ml-8">
                <button
                  onClick={goPrev}
                  className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                  onClick={goNext}
                  className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
