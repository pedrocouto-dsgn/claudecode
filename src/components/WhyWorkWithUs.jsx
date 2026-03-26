import { useRef, useState, useEffect } from 'react';

const items = [
  {
    num: '01',
    title: 'Responsibility',
    tag: 'Commitment',
    text: 'We take responsibility for the full scope of work, allowing decisions, coordination and execution to remain aligned throughout the project.',
  },
  {
    num: '02',
    title: 'Collaboration',
    tag: 'Connection',
    text: 'Clients work directly with the team involved in the project, ensuring clear communication and faster, more informed decisions.',
  },
  {
    num: '03',
    title: 'Workflow',
    tag: 'Process',
    text: 'Each project is developed through a clear and structured process, helping to minimise uncertainty and avoid unnecessary complexity.',
  },
  {
    num: '04',
    title: 'Involvement',
    tag: 'Presence',
    text: 'We stay closely involved at every stage of the project, maintaining continuity from early planning through construction and completion.',
  },
];

export default function WhyWorkWithUs() {
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
        setActiveIndex(items.length - 1);
        return;
      }

      const progress = sectionTop / scrollableHeight;
      const index = Math.min(
        Math.floor(progress * items.length),
        items.length - 1
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
      className="relative bg-black border-t border-neutral-900"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center px-8 md:px-12 overflow-hidden">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Title (sticky) */}
          <div className="lg:col-span-4">
            <h2 className="font-headline text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-black tracking-tight text-white uppercase">
              Why work
              <br />
              with us
            </h2>
          </div>

          {/* Right Side: Stacking cards */}
          <div className="lg:col-span-8 relative h-[320px] md:h-[360px]">
            {items.map((item, i) => {
              const isVisible = i <= activeIndex;
              const distanceFromTop = activeIndex - i;
              const scale = 1 - distanceFromTop * 0.02;
              const yOffset = distanceFromTop * -8;

              return (
                <div
                  key={item.num}
                  className={`absolute inset-0 bg-black border-t ${i === items.length - 1 ? 'border-b' : ''} border-neutral-800/50 py-12 flex items-start gap-12 transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100'
                      : 'opacity-0 translate-y-16 pointer-events-none'
                  }`}
                  style={{
                    zIndex: isVisible ? i + 1 : 0,
                    transform: isVisible
                      ? `translateY(${yOffset}px) scale(${scale})`
                      : 'translateY(64px) scale(0.95)',
                  }}
                >
                  <div className="font-headline text-5xl md:text-6xl font-light text-neutral-700">
                    {item.num}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <span className="px-4 py-1 border border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-500">
                        {item.tag}
                      </span>
                    </div>
                    <p className="font-body text-neutral-400 leading-relaxed text-sm md:text-base max-w-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
