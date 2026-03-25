const BG_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZDDj6s6rWxBHjolxEbuYpAh-jysonwpTxcrUzRJwS4BH59R6baZvLzmy0DNt-A1JEtdlcb7zYRzDm3X-XdPSMw1LrS7JFVa_M8Waq2RNL5hzo-wsztwYeqM0yWsyZ7Nu_3bXN021QUZJE2XdZk-6dIpiklSaY90rSqaqOr2uymfRU3ywLUOB9J1260JzZsUv7h2etPt3nv7DRaGV7QVhjvEUfMDeiMhDBdFb5e8Ae_rifczFlY89M67L4dYJjimDUbLTec65iu8JV';

const steps = [
  {
    num: '01',
    title: 'Initial contact',
    text: 'You get in touch with us to discuss your goals, preferences and overall expectations for the project.',
    offset: false,
  },
  {
    num: '02',
    title: 'Project briefing',
    text: 'We define the scope, budget range, timeline and key requirements to establish a clear project brief.',
    offset: true,
  },
  {
    num: '03',
    title: 'Location analysis',
    text: 'The location is carefully reviewed to understand its conditions, context and any existing constraints.',
    offset: false,
  },
];

export default function StepsSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between py-20 px-12 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern architectural house at night with pool and lounge chairs"
          className="w-full h-full object-cover opacity-80"
          src={BG_IMAGE}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-[1920px] mx-auto">
        <h2 className="font-serif-display text-7xl md:text-9xl text-white font-light tracking-tight leading-[0.9] max-w-3xl">
          Steps to your
          <br />
          new home
        </h2>
        <div className="flex flex-col items-start md:items-end gap-8 md:text-right max-w-xs md:max-w-sm">
          <p className="font-headline text-neutral-300 text-sm md:text-base leading-relaxed">
            Our approach follows a clear sequence of stages, supporting consistent and informed decisions.
          </p>
          <button className="bg-white text-black px-8 py-4 font-headline font-bold uppercase tracking-tighter text-sm hover:bg-neutral-200 transition-colors duration-500">
            Discuss the Project
          </button>
        </div>
      </div>

      {/* Floating Glass Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1920px] mx-auto mt-20">
        {steps.map((step) => (
          <div
            key={step.num}
            className={`glass-card p-10 rounded-2xl flex flex-col justify-between h-[360px] group transition-all duration-700 hover:bg-white/10 ${
              step.offset ? 'md:-translate-y-12' : ''
            }`}
          >
            <div className="font-headline text-5xl font-light text-white/40">{step.num}</div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="font-headline text-neutral-300 text-sm leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
