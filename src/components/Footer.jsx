const socialLinks = ['Instagram', 'LinkedIn', 'Vimeo', 'Terms'];

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full border-t border-neutral-800/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-20 w-full max-w-screen-2xl mx-auto">
        <div className="mb-12 md:mb-0">
          <div className="text-lg font-bold text-white font-headline mb-4 uppercase">
            COSMOS STUDIO
          </div>
          <p className="font-headline text-[10px] tracking-widest uppercase text-neutral-600">
            © 2024 COSMOS STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="flex gap-12">
          {socialLinks.map((link) => (
            <a
              key={link}
              className="font-headline text-[10px] tracking-widest uppercase text-neutral-600 hover:text-white transition-colors duration-300"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
