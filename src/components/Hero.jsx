import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a0f1f_0%,_#000_70%)]" />

      {/* Dot grid */}
      <div className="linear-grid absolute inset-0" />

      {/* Animated blue orbs */}
      <motion.div
        className="orb"
        initial={{ x: -120, y: -60, opacity: 0.0 }}
        animate={{
          x: [-120, 40, -80, -120],
          y: [-60, 30, 80, -60],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          left: "12%",
          top: "20%",
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(59,107,255,0.55) 0%, rgba(59,107,255,0) 70%)",
        }}
      />
      <motion.div
        className="orb"
        initial={{ x: 60, y: 80, opacity: 0.0 }}
        animate={{
          x: [60, -40, 120, 60],
          y: [80, 0, 60, 80],
          opacity: [0.25, 0.45, 0.3, 0.25],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          right: "8%",
          bottom: "10%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(30,64,175,0.45) 0%, rgba(30,64,175,0) 70%)",
        }}
      />
      <motion.div
        className="orb"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          left: "50%",
          top: "55%",
          width: 680,
          height: 380,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(96,132,255,0.28) 0%, rgba(96,132,255,0) 65%)",
        }}
      />

      {/* Vignette pulling focus to copy */}
      <div className="linear-vignette absolute inset-0" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-white"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            letterSpacing: "0.04em",
            lineHeight: 1.02,
          }}
        >
          <span className="block text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
            AUTOMATIZE COM INTELIGÊNCIA.
          </span>
          <span className="block text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
            CRESÇA COM EFICIÊNCIA.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/70"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          Combinamos design, automação e IA para transformar sua operação em
          um sistema que gera resultado todos os dias.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#contatos"
            className="btn-pill-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600 }}
          >
            Quero escalar com IA
          </a>
          <a
            href="#portfolio"
            className="btn-pill-ghost inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] tracking-[0.22em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 500 }}
          >
            Ver projetos
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span
          className="text-xs tracking-[0.3em] text-white/70"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Scroll
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/10">
          <span className="scroll-line absolute inset-x-0 top-0 block h-full bg-white/80" />
        </span>
      </motion.div>
    </section>
  );
}
