import { motion } from "framer-motion";

function InstagramIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/footer(1).webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-12 pt-24 md:pt-32">
        {/* LOGO.svg icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/LOGO.svg"
            alt="Linear logo icon"
            className="h-16 w-16 md:h-20 md:w-20"
            draggable={false}
          />
        </motion.div>

        {/* LINEAR wordmark */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-gradient-horizontal text-center uppercase"
          style={{
            fontSize: "clamp(56px, 10vw, 130px)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          LINEAR
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-center text-[16px] md:text-[20px] tracking-[0.38em] text-white/60"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          [ CREATIVE&nbsp;&nbsp;STUDIO ]
        </motion.p>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 text-white/70 transition-colors duration-300 hover:text-white"
        >
          <InstagramIcon className="h-8 w-8" />
        </motion.a>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center text-[13px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          © 2026 Linear Creative Lab. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
