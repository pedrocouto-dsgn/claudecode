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

export default function PhilosophyShowcase() {
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto h-[85vh] relative">
          {cards.map((card, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={card.num}
                className={`absolute inset-0 rounded-2xl flex flex-col justify-between p-10 md:p-16 transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100'
                    : i < activeIndex
                      ? 'opacity-0 scale-95 pointer-events-none'
                      : 'opacity-0 scale-105 pointer-events-none'
                } ${
                  i % 2 === 0
                    ? 'bg-neutral-50 border border-neutral-200'
                    : 'bg-black'
                }`}
              >
                {/* Top row */}
                <div className="flex justify-between items-start">
                  <span
                    className={`font-headline text-lg md:text-xl font-bold tracking-widest uppercase ${
                      i % 2 === 0 ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {card.num}
                  </span>
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      i % 2 === 0 ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    north_east
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <h4
                    className={`font-headline text-[50px] font-bold uppercase mb-6 md:mb-8 tracking-tight ${
                      i % 2 === 0 ? 'text-black' : 'text-white'
                    }`}
                  >
                    {card.title}
                  </h4>
                  <p
                    className={`font-body leading-relaxed text-[18px] max-w-2xl ${
                      i % 2 === 0 ? 'text-neutral-500' : 'text-neutral-400'
                    }`}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Progress indicator */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex items-center gap-4 z-10">
            <span
              className={`text-sm font-medium font-headline ${
                activeIndex % 2 === 0 ? 'text-neutral-600' : 'text-neutral-300'
              }`}
            >
              {cards[activeIndex].num}/{String(cards.length).padStart(2, '0')}
            </span>
            <div className="w-32 md:w-48 h-[1px] bg-neutral-300 relative">
              <div
                className="absolute left-0 top-0 h-[2px] -mt-[0.5px] transition-all duration-700 ease-out"
                style={{
                  width: `${((activeIndex + 1) / cards.length) * 100}%`,
                  backgroundColor: activeIndex % 2 === 0 ? '#000' : '#fff',
                }}
              />
            </div>
          </div>

          {/* Side dots navigation */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? `w-2 h-2 ${activeIndex % 2 === 0 ? 'bg-black' : 'bg-white'}`
                    : `w-1.5 h-1.5 ${activeIndex % 2 === 0 ? 'bg-neutral-300' : 'bg-neutral-600'}`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
