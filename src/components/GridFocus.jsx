const cards = [
  {
    num: '01',
    title: 'Focused expertise',
    text: 'Specializing in architectural narratives that bridge the gap between human experience and the built environment through rigorous research.',
    highlight: false,
  },
  {
    num: '02',
    title: 'Thoughtful execution',
    text: 'Every line drawn is a commitment to precision. We translate complex visions into tangible structures with an uncompromising eye for detail.',
    highlight: true,
  },
  {
    num: '03',
    title: 'Long-term quality',
    text: 'Creating timeless spaces that age with grace. Our material choices and structural logic are designed to transcend ephemeral design trends.',
    highlight: false,
  },
];

export default function GridFocus() {
  return (
    <section className="py-32 px-12 bg-[#000000] min-h-screen flex flex-col justify-center border-t border-neutral-800/10">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="mb-24">
          <h2 className="font-headline text-[clamp(2.5rem,6vw,5rem)] leading-tight font-light tracking-tight text-white/90">
            A modern studio with a <span className="italic font-normal">clear focus</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-neutral-800/30 border border-neutral-800/30">
          {cards.map((card) =>
            card.highlight ? (
              <div
                key={card.num}
                className="bg-white p-12 min-h-[420px] flex flex-col justify-between group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-headline text-sm font-bold tracking-widest text-neutral-400 uppercase">
                    {card.num}
                  </span>
                  <span className="material-symbols-outlined text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    north_east
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold uppercase text-black mb-6">
                    {card.title}
                  </h4>
                  <p className="font-body text-neutral-700 leading-relaxed text-sm max-w-xs">
                    {card.text}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={card.num}
                className="bg-[#0e0e0e] p-12 min-h-[420px] flex flex-col justify-between group hover:bg-[#131313] transition-colors duration-700"
              >
                <div className="flex justify-between items-start">
                  <span className="font-headline text-sm font-bold tracking-widest text-neutral-500 uppercase">
                    {card.num}
                  </span>
                  <span className="material-symbols-outlined text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    north_east
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold uppercase text-white mb-6">
                    {card.title}
                  </h4>
                  <p className="font-body text-neutral-400 leading-relaxed text-sm max-w-xs">
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
