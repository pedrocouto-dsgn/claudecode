export default function ContactSection() {
  return (
    <section className="bg-[#131313] w-full py-20 md:py-32 px-8 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Title */}
        <h2 className="font-headline text-[clamp(3rem,8vw,7rem)] font-light tracking-tight text-neutral-400 leading-[1] mb-20 md:mb-28">
          Let&apos;s talk
        </h2>

        {/* Main grid: info left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Side: Contact + Offices + Social */}
          <div className="flex flex-col gap-16">
            {/* Contact */}
            <div className="flex gap-8 md:gap-16">
              <p className="font-body text-neutral-500 text-sm uppercase tracking-widest shrink-0 pt-2 w-20">
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+351211234567"
                  className="font-headline text-2xl md:text-3xl text-white font-light hover:text-neutral-300 transition-colors"
                >
                  +351 21 123 4567
                </a>
                <a
                  href="mailto:info@cosmosstudio.pt"
                  className="font-headline text-2xl md:text-3xl text-white font-light hover:text-neutral-300 transition-colors"
                >
                  info@cosmosstudio.pt
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="flex gap-8 md:gap-16">
              <p className="font-body text-neutral-500 text-sm uppercase tracking-widest shrink-0 pt-2 w-20">
                Offices
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-headline text-2xl md:text-3xl text-white font-light mb-4">
                    Lisboa
                  </h4>
                  <div className="font-body text-neutral-400 text-sm leading-relaxed">
                    <p>Rua Augusta 456</p>
                    <p>3º andar</p>
                    <p>1100-053 Lisboa</p>
                    <p className="mt-2">+351 21 123 4567</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-headline text-2xl md:text-3xl text-white font-light mb-4">
                    Porto
                  </h4>
                  <div className="font-body text-neutral-400 text-sm leading-relaxed">
                    <p>Av. dos Aliados 200</p>
                    <p>5º andar</p>
                    <p>4000-064 Porto</p>
                    <p className="mt-2">+351 22 987 6543</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-8 md:gap-16">
              <p className="font-body text-neutral-500 text-sm uppercase tracking-widest shrink-0 pt-1 w-20">
                Social
              </p>
              <div className="flex flex-wrap gap-8">
                <a href="#" className="font-body text-neutral-400 text-sm hover:text-white transition-colors">Instagram</a>
                <a href="#" className="font-body text-neutral-400 text-sm hover:text-white transition-colors">Facebook</a>
                <a href="#" className="font-body text-neutral-400 text-sm hover:text-white transition-colors">X (Twitter)</a>
                <a href="#" className="font-body text-neutral-400 text-sm hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-neutral-500 font-body text-sm focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-neutral-500 font-body text-sm focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-neutral-500 font-body text-sm focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-transparent border-b border-neutral-700 py-4 text-white placeholder-neutral-500 font-body text-sm focus:outline-none focus:border-white transition-colors"
            />

            {/* Checkbox */}
            <label className="flex items-start gap-3 mt-4 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 border border-neutral-600 bg-transparent rounded-none accent-white"
              />
              <span className="font-body text-neutral-400 text-xs leading-relaxed">
                By submitting this form, you agree to the processing of your personal data in accordance with our{' '}
                <a href="#" className="text-white underline hover:no-underline">[Privacy Policy]</a>.
              </span>
            </label>

            {/* Submit button */}
            <button className="mt-4 self-start bg-white text-black px-10 py-4 rounded-full font-headline font-bold text-sm hover:bg-neutral-200 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
