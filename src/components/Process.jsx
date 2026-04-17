"use client";

import { motion } from "framer-motion";

/* ----------------------------------------------------------------------- */
/*  Card mockups                                                            */
/* ----------------------------------------------------------------------- */

function AnaliseMockup() {
  return (
    <div className="relative mx-auto flex h-48 w-full items-center justify-center gap-4 p-4">
      {/* Left document */}
      <div className="flex h-full w-1/2 flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="h-2 w-3/4 rounded bg-white/15" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="mt-auto h-2 w-2/3 rounded bg-white/8" />
        <div className="h-2 w-full rounded bg-white/8" />
        <div className="h-2 w-1/2 rounded bg-white/8" />
      </div>
      {/* Right document */}
      <div className="flex h-full w-1/2 flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="h-2 w-2/3 rounded bg-white/15" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-4/5 rounded bg-white/10" />
        <div className="mt-auto flex gap-2">
          <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

function CriacaoMockup() {
  return (
    <div className="relative mx-auto flex h-48 w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      {/* Tab bar */}
      <div className="flex items-center gap-0 border-b border-white/10">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div
          className="border-b border-white/40 px-4 py-2 text-[10px] text-white/80"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
        >
          HTML
        </div>
        <div
          className="px-4 py-2 text-[10px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          React
        </div>
        <div
          className="px-4 py-2 text-[10px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          CSS
        </div>
      </div>

      {/* Code lines */}
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>1</span>
          <span className="text-[10px] text-white/60" style={{ fontFamily: "monospace" }}>&lt;html lang=&quot;en&quot;&gt;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>2</span>
          <span className="text-[10px] text-white/60 pl-3" style={{ fontFamily: "monospace" }}>&lt;head&gt;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>3</span>
          <span className="text-[10px] text-white/60 pl-6" style={{ fontFamily: "monospace" }}>
            &lt;meta <span className="rounded bg-white/10 px-1 text-white/80">charset=&quot;UTF-8&quot;</span>&gt;
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>4</span>
          <span className="text-[10px] text-white/60 pl-6" style={{ fontFamily: "monospace" }}>&lt;meta name=&quot;viewport&quot;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>5</span>
          <span className="text-[10px] text-white/60 pl-10" style={{ fontFamily: "monospace" }}>
            content=&quot;width=dev
            <span className="ml-1 rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-white/70" style={{ fontFamily: "Poppins, sans-serif" }}>
              Tibor
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/25" style={{ fontFamily: "monospace" }}>6</span>
          <span className="text-[10px] text-white/60 pl-10" style={{ fontFamily: "monospace" }}>width, initial-</span>
        </div>
      </div>
    </div>
  );
}

function ManutencaoMockup() {
  return (
    <div className="relative mx-auto h-48 w-full p-2">
      <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="procLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3B6BFF" />
            <stop offset="100%" stopColor="#8BA4FF" />
          </linearGradient>
          <linearGradient id="procArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B6BFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3B6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M10,130 L70,110 L130,100 L180,75 L230,65 L280,40 L310,30 L310,175 L10,175 Z"
          fill="url(#procArea)"
        />
        <path
          d="M10,130 L70,110 L130,100 L180,75 L230,65 L280,40 L310,30"
          fill="none"
          stroke="url(#procLine)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="180" cy="75" r="3.5" fill="#3B6BFF" />
        <circle cx="280" cy="40" r="3.5" fill="#3B6BFF" />
      </svg>

      {/* Labels */}
      <div
        className="absolute right-6 top-4 rounded-lg border border-white/15 bg-black/70 px-3 py-1 text-[10px] text-white/90"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
      >
        Efficiency +103%
      </div>
      <div
        className="absolute right-6 bottom-16 rounded-lg border border-white/15 bg-black/70 px-3 py-1 text-[10px] text-white/90"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
      >
        Operational cost -67%
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Card shell                                                              */
/* ----------------------------------------------------------------------- */

function ProcessCard({ mockup, number, title, description, glowDelay = "0s" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-glow rounded-2xl border border-white/10 bg-white/[0.015] p-6 md:p-8"
      style={{ "--glow-delay": glowDelay }}
    >
      <div className="mb-6">{mockup}</div>

      <div className="flex items-baseline gap-3">
        <span
          className="text-[14px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          {number}
        </span>
        <h3
          className="font-display text-[22px] md:text-[26px] uppercase text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h3>
      </div>

      <p
        className="mt-3 text-[14px] leading-relaxed text-white/50"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, letterSpacing: "-0.02em" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Main section                                                            */
/* ----------------------------------------------------------------------- */

export default function Process() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07080A" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* Header — title left, paragraph right */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-gradient-horizontal uppercase"
            style={{
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontSize: "clamp(40px, 6vw, 76px)",
            }}
          >
            Nosso Processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xs text-right text-[15px] text-white/60"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, letterSpacing: "-0.02em" }}
          >
            Tudo o que você precisa para colaborar, criar e escalar, tudo em um
            só lugar
          </motion.p>
        </div>

        {/* 3 cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          <ProcessCard
            glowDelay="0s"
            mockup={<AnaliseMockup />}
            number="01"
            title="Análise"
            description="A equipa realiza uma análise minuciosa dos seus fluxos de trabalho atuais para ver como se podia melhorar seus processos."
          />
          <ProcessCard
            glowDelay="-4s"
            mockup={<CriacaoMockup />}
            number="02"
            title="Criação e Implementação"
            description="Nossos desenvolvedores começarão a criar soluções de IA personalizadas para sua empresa, priorizando continuamente a qualidade e a segurança."
          />
          <ProcessCard
            glowDelay="-8s"
            mockup={<ManutencaoMockup />}
            number="03"
            title="Manutenção"
            description="Após a implementação, nossa equipe continuará trabalhando, fornecendo suporte e aprimoramentos contínuos de soluções implementadas."
          />
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contatos"
            className="btn-pill-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-[15px] tracking-[-0.02em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
          >
            Quero escalar com IA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
