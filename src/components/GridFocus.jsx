import { useState, useEffect, useRef } from 'react';

const cards = [
  {
    num: '01',
    title: 'Podcasts',
    text: 'Conversas aprofundadas com especialistas e vozes influentes que partilham conhecimento, inspiração e perspectivas únicas sobre o mundo.',
  },
  {
    num: '02',
    title: 'Cursos',
    text: 'Programas de aprendizagem estruturados que combinam teoria e prática para desenvolver competências com impacto real na sua carreira.',
  },
  {
    num: '03',
    title: 'Conteúdos digitais',
    text: 'Recursos criativos e educativos pensados para consumo online — artigos, vídeos, guias e ferramentas ao seu alcance.',
  },
  {
    num: '04',
    title: 'Eventos ao vivo',
    text: 'Experiências presenciais que conectam pessoas, ideias e oportunidades num ambiente imersivo e memorável.',
  },
  {
    num: '05',
    title: 'Formações',
    text: 'Workshops intensivos e sessões práticas desenhadas para acelerar o crescimento profissional e pessoal dos participantes.',
  },
  {
    num: '06',
    title: 'Sessões fotográficas',
    text: 'Produções visuais de alta qualidade que capturam a essência de marcas, espaços e pessoas com um olhar autoral.',
  },
];

export default function GridFocus() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const scrollableHeight = section.scrollHeight - window.innerHeight;

      if (sectionTop < 0) {
        setActiveIndex(0);
        return;
      }
      if (sectionTop >= scrollableHeight) {
        setActiveIndex(cards.length - 1);
        return;
      }

      const progress = sectionTop / scrollableHeight;
      const index = Math.min(
        Math.floor(progress * cards.length),
        cards.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] border-t border-neutral-800/10"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h2 className="font-headline text-[clamp(2.5rem,6vw,5rem)] leading-tight font-light tracking-tight text-white/90">
              A modern studio with a{' '}
              <span className="italic font-normal">clear focus</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Left: Progress indicator */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-6 shrink-0">
              {cards.map((card, i) => (
                <button
                  key={card.num}
                  onClick={() => {
                    const section = sectionRef.current;
                    if (!section) return;
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;
                    const scrollableHeight =
                      section.scrollHeight - window.innerHeight;
                    const targetScroll =
                      sectionTop + (i / cards.length) * scrollableHeight;
                    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                  }}
                  className={`font-headline text-sm font-bold tracking-widest uppercase transition-all duration-500 cursor-pointer ${
                    i === activeIndex
                      ? 'text-white scale-110'
                      : 'text-neutral-600 hover:text-neutral-400'
                  }`}
                >
                  {card.num}
                  {i === activeIndex && (
                    <span className="block h-[2px] bg-white mt-2 transition-all duration-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Right: Active card */}
            <div className="flex-grow w-full">
              <div className="relative min-h-[360px] md:min-h-[420px]">
                {cards.map((card, i) => {
                  const isActive = i === activeIndex;
                  const isHighlight = i === 1;

                  return (
                    <div
                      key={card.num}
                      className={`absolute inset-0 p-8 md:p-12 rounded-xl flex flex-col justify-between transition-all duration-700 ease-out ${
                        isActive
                          ? 'opacity-100 translate-y-0 scale-100'
                          : i < activeIndex
                            ? 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
                            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                      } ${
                        isHighlight && isActive
                          ? 'bg-white'
                          : 'bg-[#0e0e0e] border border-neutral-800/30'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className={`font-headline text-sm font-bold tracking-widest uppercase ${
                            isHighlight && isActive
                              ? 'text-neutral-400'
                              : 'text-neutral-500'
                          }`}
                        >
                          {card.num}
                        </span>
                        <span
                          className={`material-symbols-outlined transition-all duration-500 ${
                            isHighlight && isActive
                              ? 'text-black'
                              : 'text-neutral-500'
                          }`}
                        >
                          north_east
                        </span>
                      </div>
                      <div>
                        <h4
                          className={`font-headline text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight ${
                            isHighlight && isActive
                              ? 'text-black'
                              : 'text-white'
                          }`}
                        >
                          {card.title}
                        </h4>
                        <p
                          className={`font-body leading-relaxed text-sm md:text-base max-w-xl ${
                            isHighlight && isActive
                              ? 'text-neutral-700'
                              : 'text-neutral-400'
                          }`}
                        >
                          {card.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="mt-12 flex items-center gap-4">
                <span className="text-neutral-300 text-sm font-medium font-headline">
                  {activeCard.num}/{String(cards.length).padStart(2, '0')}
                </span>
                <div className="flex-grow h-[1px] bg-neutral-800 relative">
                  <div
                    className="absolute left-0 top-0 h-[2px] bg-white -mt-[0.5px] transition-all duration-700 ease-out"
                    style={{
                      width: `${((activeIndex + 1) / cards.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
