const PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZDDj6s6rWxBHjolxEbuYpAh-jysonwpTxcrUzRJwS4BH59R6baZvLzmy0DNt-A1JEtdlcb7zYRzDm3X-XdPSMw1LrS7JFVa_M8Waq2RNL5hzo-wsztwYeqM0yWsyZ7Nu_3bXN021QUZJE2XdZk-6dIpiklSaY90rSqaqOr2uymfRU3ywLUOB9J1260JzZsUv7h2etPt3nv7DRaGV7QVhjvEUfMDeiMhDBdFb5e8Ae_rifczFlY89M67L4dYJjimDUbLTec65iu8JV';

const scopeTags = ['Architecture', 'Engineering', 'Construction'];

export default function ProjectSpotlight() {
  return (
    <section className="bg-black py-32 px-12 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="mb-16">
          <p className="font-body text-neutral-400 text-sm max-w-xs leading-relaxed">
            A focused overview highlighting key architectural ideas and refined execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 relative">
            <div className="mb-12">
              <span className="font-serif-display text-[12rem] leading-none text-white font-light tracking-tighter block">
                01
              </span>
            </div>

            <div className="mb-16">
              <h2 className="font-serif-display text-7xl md:text-8xl text-white font-medium tracking-tight">
                Hillside
                <br />
                Residence
              </h2>
            </div>

            <div className="border-t border-neutral-800 pt-8 grid grid-cols-2 gap-8 mb-16">
              <div className="space-y-4">
                <p className="text-white font-medium">2024</p>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Los Angeles, USA
                </div>
              </div>
              <div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  A contemporary private residence designed with a strong focus on clarity, proportion and integration between architecture and landscape.
                </p>
              </div>
            </div>

            <div className="mb-20">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6">Scope</p>
              <div className="flex flex-wrap gap-3">
                {scopeTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-2 border border-neutral-700 rounded-full text-[10px] uppercase tracking-widest text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-tighter text-sm hover:bg-neutral-200 transition-colors">
                Discuss the Project
              </button>
              <div className="text-right">
                <p className="text-neutral-500 font-mono text-[10px] leading-tight">
                  34.0522° N
                  <br />
                  118.2437° W
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative w-full flex-grow mb-12">
              <img
                alt="Cinematic modern architectural house at dusk with large glass walls and swimming pool"
                className="w-full h-full object-cover rounded-2xl"
                src={PROJECT_IMAGE}
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex-grow flex items-center gap-1 max-w-md">
                <span className="text-neutral-300 text-sm font-medium pr-4">01/05</span>
                <div className="flex-grow h-[1px] bg-neutral-800 relative">
                  <div className="absolute left-0 top-0 h-[2px] w-1/5 bg-white -mt-[0.5px]" />
                </div>
              </div>
              <div className="flex gap-4 ml-12">
                <button className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-900 transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-neutral-200 transition-colors">
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
