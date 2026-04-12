import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";

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
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Animated gradient background */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(3, 7, 18)"
        gradientBackgroundEnd="rgb(8, 12, 28)"
        firstColor="15, 40, 110"
        secondColor="20, 55, 130"
        thirdColor="10, 30, 85"
        fourthColor="5, 18, 55"
        fifthColor="12, 45, 95"
        pointerColor="30, 75, 140"
        size="80%"
        blendingValue="hard-light"
        interactive={true}
        containerClassName="absolute inset-0"
      />

      {/* Dot grid overlay */}
      <div className="linear-grid absolute inset-0 z-[1]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen w-full items-center justify-center"
      >
        <div className="flex w-full max-w-5xl flex-col items-center px-6 text-center">
          <motion.h1
            variants={fadeUp}
            className="font-display text-white"
            style={{
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
            }}
          >
            <span className="block text-[30px] sm:text-[38px] md:text-[45px]">
              AUTOMATIZE COM INTELIGÊNCIA.
            </span>
            <span className="block text-[30px] sm:text-[38px] md:text-[45px]">
              CRESÇA COM EFICIÊNCIA.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-white/80"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: "25px",
              letterSpacing: "-0.04em",
              lineHeight: 1.4,
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
              className="btn-pill-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] tracking-[-0.02em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Quero escalar com IA
            </a>
            <a
              href="#portfolio"
              className="btn-pill-ghost inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] tracking-[-0.02em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Ver projetos
            </a>
          </motion.div>
        </div>
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
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
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
