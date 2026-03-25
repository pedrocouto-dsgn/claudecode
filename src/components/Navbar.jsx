const navLinks = ['Gallery', 'Expertise', 'Studio', 'Journal'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/40 backdrop-blur-2xl flex justify-between items-center px-12 py-8">
      <div className="text-2xl font-black tracking-tighter text-white font-headline uppercase">
        COSMOS STUDIO
      </div>
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link) => (
          <a
            key={link}
            className="font-headline tracking-tighter font-bold uppercase text-neutral-500 hover:text-white transition-colors duration-500"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-8">
        <button className="font-headline tracking-tighter font-bold uppercase text-white hover:opacity-70 transition-opacity duration-500 active:scale-95 duration-700 ease-in-out">
          Inquiry
        </button>
      </div>
    </nav>
  );
}
