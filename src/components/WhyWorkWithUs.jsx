const SECTION_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC750tqF4WOf1v8X77T7qZpMhY1vA96Y0X9P6iY-zQ8P3v4uX4E5F-G6H7I8J9K0L1M2N3O4P5Q6R7S8T9U0V1W2X3Y4Z5a6b7c8d9e0f';

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
    isLast: true,
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-black py-32 px-12 min-h-screen flex flex-col justify-center overflow-hidden border-t border-neutral-900">
      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[700px]">
          <div>
            <h2 className="font-headline text-7xl md:text-[5.5rem] leading-[1.05] font-black tracking-tight text-white uppercase">
              Why work
              <br />
              with us
            </h2>
          </div>
          <div className="mt-20">
            <img
              alt="Modern architectural masterpiece with poolside seating and large glass facades at dusk"
              className="w-full aspect-[4/3] object-cover rounded-3xl"
              src={SECTION_IMAGE}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <div className="space-y-0">
            {items.map((item) => (
              <div
                key={item.num}
                className={`group border-t ${item.isLast ? 'border-b' : ''} border-neutral-800/50 py-12 flex items-start gap-12 transition-colors duration-500`}
              >
                <div className="font-headline text-5xl md:text-6xl font-light text-neutral-700 group-hover:text-white transition-colors duration-500">
                  {item.num}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <span className="px-4 py-1 border border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-500 group-hover:border-neutral-700 transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-body text-neutral-400 leading-relaxed text-sm md:text-base max-w-xl">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
