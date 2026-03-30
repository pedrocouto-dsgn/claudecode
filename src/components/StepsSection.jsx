const BG_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZDDj6s6rWxBHjolxEbuYpAh-jysonwpTxcrUzRJwS4BH59R6baZvLzmy0DNt-A1JEtdlcb7zYRzDm3X-XdPSMw1LrS7JFVa_M8Waq2RNL5hzo-wsztwYeqM0yWsyZ7Nu_3bXN021QUZJE2XdZk-6dIpiklSaY90rSqaqOr2uymfRU3ywLUOB9J1260JzZsUv7h2etPt3nv7DRaGV7QVhjvEUfMDeiMhDBdFb5e8Ae_rifczFlY89M67L4dYJjimDUbLTec65iu8JV';

export default function StepsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Image container with constrained height */}
      <div className="relative w-full h-[800px] overflow-hidden">
        {/* Background Image */}
        <img
          alt="Modern architectural house at night with pool and lounge chairs"
          className="w-full h-full object-cover"
          src={BG_IMAGE}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Top Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h2 className="font-headline text-[50px] text-white font-light tracking-tight leading-[0.9] max-w-3xl">
              Steps to your
              <br />
              new home
            </h2>
            <div className="flex flex-col items-start md:items-end gap-8 md:text-right max-w-xs md:max-w-sm">
              <p className="font-headline text-neutral-300 text-sm md:text-base leading-relaxed">
                Our approach follows a clear sequence of stages, supporting
                consistent and informed decisions.
              </p>
            </div>
          </div>

          {/* Single glass card at bottom */}
          <div className="glass-card p-8 md:p-10 rounded-2xl mx-2 md:mx-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                  Cosmos Studio
                </h3>
                <p className="font-body text-neutral-300 text-sm md:text-base leading-relaxed max-w-lg">
                  Rua Augusta 456, 3º andar, 1100-053 Lisboa, Portugal
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 text-sm shrink-0">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="font-mono text-[11px] text-neutral-500">
                  38.7223° N, 9.1393° W
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
