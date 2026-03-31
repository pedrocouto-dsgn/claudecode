const cards = [
  {
    num: '01',
    title: 'Focused expertise',
    text: 'We concentrate on a limited number of projects to ensure full attention, consistency and control at every stage of the process.',
    highlight: false,
  },
  {
    num: '02',
    title: 'Thoughtful execution',
    text: 'Every element is carefully considered — from overall composition to the smallest architectural and technical decisions, with precision.',
    highlight: true,
  },
  {
    num: '03',
    title: 'Long-term quality',
    text: 'Our work is guided by durability, relevance and carefully developed solutions that remain strong, refined and appropriate over time.',
    highlight: false,
  },
];

export default function GridFocus() {
  return (
    <section className="py-32 px-12 bg-[#111111] min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Title area with description on the right */}
        <div className="flex justify-between items-start mb-24">
          <h2 className="font-headline text-[80px] leading-[0.95] font-light tracking-tight text-white/90 max-w-3xl">
            Tecnologia certa.<br />
            <span className="italic font-normal text-white/60">Resultado imediato</span>
          </h2>
          <div className="hidden md:flex flex-col items-end gap-6 pt-4">
            <p className="text-neutral-400 text-[15px] leading-relaxed max-w-[280px] text-right">
              Axis House is a team working<br />
              at the intersection of real estate,<br />
              architecture, and technology.
            </p>
            <button className="border border-neutral-500 text-white px-8 py-3 font-headline text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500">
              Discuss the Project
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card) =>
            card.highlight ? (
              <div
                key={card.num}
                className="bg-white rounded-2xl p-10 min-h-[420px] flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="font-headline text-[64px] font-light tracking-tight text-black leading-none">
                    {card.num}
                  </span>
                  <span className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-black mb-4">
                    {card.title}
                  </h4>
                  <p className="text-neutral-500 leading-relaxed text-[15px] max-w-xs">
                    {card.text}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={card.num}
                className="bg-[#1a1a1a] rounded-2xl p-10 min-h-[420px] flex flex-col justify-between group cursor-pointer border border-neutral-700/50 hover:border-neutral-600 transition-colors duration-700"
              >
                <div className="flex justify-between items-start">
                  <span className="font-headline text-[64px] font-light tracking-tight text-white/80 leading-none">
                    {card.num}
                  </span>
                  <span className="bg-white text-black w-12 h-12 rounded-xl flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-white mb-4">
                    {card.title}
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-[15px] max-w-xs">
                    {card.text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
