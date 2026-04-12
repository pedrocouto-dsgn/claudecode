import { motion } from "framer-motion";

function StarIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vertical line */}
      <line x1="32" y1="0" x2="32" y2="64" stroke="url(#starV)" strokeWidth="1.2" />
      {/* Horizontal line */}
      <line x1="0" y1="32" x2="64" y2="32" stroke="url(#starH)" strokeWidth="1.2" />
      {/* Center diamond flare */}
      <path
        d="M32 20 L36 32 L32 44 L28 32 Z"
        fill="url(#starFill)"
        opacity="0.9"
      />
      <path
        d="M20 32 L32 28 L44 32 L32 36 Z"
        fill="url(#starFill)"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="starV" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="starH" x1="0" y1="32" x2="64" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="starFill" x1="32" y1="20" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
      {/* Background: dark base + centered blue radial glow + dot grid */}
      <div className="absolute inset-0 bg-[#07080A]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(30,64,175,0.25) 0%, transparent 70%)",
        }}
      />
      <div className="linear-grid absolute inset-0 opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-12 pt-24 md:pt-32">
        {/* Star icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <StarIcon className="h-16 w-16 md:h-20 md:w-20" />
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
