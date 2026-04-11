import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contatos", href: "#contatos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/*
       * 3-column grid: logo · centered menu · mobile button placeholder.
       * With this layout the <ul> is perfectly centered in the viewport
       * regardless of the logo width.
       */}
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="flex flex-col leading-none select-none justify-self-start"
        >
          <span
            className="font-display text-2xl md:text-[28px] tracking-[0.18em] text-white"
          >
            LINEAR
          </span>
          <span
            className="mt-1 text-[10px] md:text-[11px] tracking-[0.32em] text-white/60"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
          >
            [ CREATIVE&nbsp;STUDIO ]
          </span>
        </a>

        {/* Desktop links — centered column */}
        <ul
          className="hidden md:flex items-center gap-12 text-[17px] text-white/85 justify-self-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-2 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right slot — empty on desktop, hamburger on mobile */}
        <div className="justify-self-end">
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden relative h-10 w-10 flex items-center justify-center"
          >
            <span
              className={`absolute block h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-px w-6 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-20 z-40 bg-black/95 backdrop-blur-xl"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="flex flex-col items-center justify-center gap-10 pt-20 font-display"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl tracking-[0.18em] text-white/90 hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
