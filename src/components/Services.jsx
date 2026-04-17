"use client";

import { motion } from "framer-motion";

/* ----------------------------------------------------------------------- */
/*  Card mockups                                                            */
/* ----------------------------------------------------------------------- */

function AgentesMockup() {
  // 4 icon squares + centered ring with "100+ Automations"
  return (
    <div className="relative mx-auto grid h-56 w-full max-w-sm grid-cols-3 grid-rows-2 gap-4 p-4">
      <div className="col-start-1 row-start-1 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      </div>
      <div className="col-start-3 row-start-1 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/60" fill="currentColor">
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      </div>
      <div className="col-start-1 row-start-2 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </div>
      <div className="col-start-3 row-start-2 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
        </svg>
      </div>

      {/* Center ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-linear-blue/70 bg-black text-center"
          style={{ boxShadow: "0 0 60px rgba(59,107,255,0.25), inset 0 0 20px rgba(59,107,255,0.15)" }}
        >
          <span className="font-display text-3xl text-white" style={{ letterSpacing: "-0.02em" }}>
            100+
          </span>
          <span
            className="mt-1 text-[11px] text-white/70"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
          >
            Automations
          </span>
        </div>
      </div>
    </div>
  );
}

function AutomacoesMockup() {
  return (
    <div className="relative mx-auto flex h-56 w-full max-w-sm flex-col justify-center gap-3 p-4">
      {/* Stacked response bubbles (decorative) */}
      <div className="relative">
        <div className="absolute inset-x-6 -top-4 h-6 rounded-xl border border-white/5 bg-white/[0.02]" />
        <div className="absolute inset-x-3 -top-2 h-6 rounded-xl border border-white/5 bg-white/[0.03]" />
        <div className="relative rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
          <p className="text-[13px] text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
            Where do Quokka&apos;s live?
          </p>
          <p
            className="mt-1 text-[11px] text-white/60"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
          >
            Quokka&apos;s live on Rottnest Island.
          </p>
        </div>
      </div>

      {/* Prompt input */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <span
          className="text-[12px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          Write your prompt...
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WebsitesMockup() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-sm p-2">
      <svg viewBox="0 0 320 200" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3B6BFF" />
            <stop offset="100%" stopColor="#8BA4FF" />
          </linearGradient>
          <linearGradient id="chartArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3B6BFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d="M10,160 L60,140 L110,120 L160,90 L210,80 L260,50 L310,40 L310,195 L10,195 Z"
          fill="url(#chartArea)"
        />
        {/* Line */}
        <path
          d="M10,160 L60,140 L110,120 L160,90 L210,80 L260,50 L310,40"
          fill="none"
          stroke="url(#chartLine)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dots */}
        <circle cx="160" cy="90" r="4" fill="#3B6BFF" />
        <circle cx="260" cy="50" r="4" fill="#3B6BFF" />
      </svg>

      {/* Labels */}
      <div
        className="absolute left-6 top-6 rounded-lg border border-linear-blue/50 bg-black/60 px-3 py-1 text-[11px] text-white"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
      >
        Efficiency +103%
      </div>
      <div
        className="absolute right-6 top-24 rounded-lg border border-linear-blue/50 bg-black/60 px-3 py-1 text-[11px] text-white"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
      >
        Cost -67%
      </div>
    </div>
  );
}

function SolucoesMockup() {
  return (
    <div className="relative mx-auto flex h-56 w-full flex-col gap-3 p-4">
      {/* You message */}
      <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-white/15 bg-white/[0.05]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              You
            </span>
            <span className="text-[10px] text-white/40" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
              8:15 AM
            </span>
          </div>
          <p className="mt-1 text-[12px] text-white/80" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
            Schedule a Google meeting with John for 3:45PM tomorrow!
          </p>
        </div>
      </div>

      {/* AI response */}
      <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-linear-blue/40 bg-linear-blue/10">
          <span className="text-[9px] font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            AI
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-medium text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              AI Assistant
            </span>
            <span className="text-[10px] text-white/40" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
              8:15 AM
            </span>
          </div>
          <p className="mt-1 text-[12px] text-white/80" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
            I&apos;ve successfully scheduled a Google meeting with John for 3:45PM tomorrow.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="mt-auto flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border border-white/20">
            <span className="text-[11px] text-white/60">+</span>
          </div>
          <span
            className="text-[12px] text-white/40"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
          >
            Message AI Assistant...
          </span>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15">
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-white/70" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConsultoriaMockup() {
  return (
    <div className="relative mx-auto flex h-56 w-full flex-col gap-3 p-4">
      {/* Big empty canvas area with status pill */}
      <div className="relative flex-1 rounded-xl border border-white/10 bg-white/[0.02]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full border border-linear-blue/50 bg-black/70 px-4 py-1.5 text-[12px] text-white"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
          >
            Generating image...
          </div>
        </div>
      </div>

      {/* Bottom input with Generate button */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <span
          className="text-[12px] text-white/40"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          Generate an image of...
        </span>
        <div
          className="rounded-md border border-linear-blue/50 bg-linear-blue/10 px-3 py-1 text-[11px] text-white"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          Generate
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/*  Card shell                                                              */
/* ----------------------------------------------------------------------- */

function ServiceCard({ mockup, title, description, className = "", glowDelay = "0s" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`card-glow rounded-2xl border border-white/10 bg-white/[0.015] p-6 md:p-8 ${className}`}
      style={{ "--glow-delay": glowDelay }}
    >
      <div className="mb-6">{mockup}</div>
      <h3
        className="font-display text-[22px] md:text-[26px] uppercase text-white"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <p
        className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60"
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

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: 'url("/3%20se%C3%A7%C3%A3o.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* Header row — title on the left, intro paragraph on the right */}
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
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-[15px] text-white/60"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300, letterSpacing: "-0.02em" }}
          >
            Integramos design, automação e inteligência artificial para gerar
            eficiência real.
          </motion.p>
        </div>

        {/* Cards grid — 3 on row 1, 2 on row 2 */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
          <ServiceCard
            className="md:col-span-2"
            glowDelay="0s"
            mockup={<AgentesMockup />}
            title="Agentes IA"
            description="Criamos agentes inteligentes com IA que automatizam leads e vendas, fazendo parte da tua equipa 24/7."
          />
          <ServiceCard
            className="md:col-span-2"
            glowDelay="-3s"
            mockup={<AutomacoesMockup />}
            title="Automações"
            description="Implementação de automações de processos empresariais múltiplas etapas entre ferramentas e plataformas."
          />
          <ServiceCard
            className="md:col-span-2"
            glowDelay="-5s"
            mockup={<WebsitesMockup />}
            title="Websites"
            description="Sites e aplicações web modernas, responsivas e otimizadas para performance e SEO."
          />
          <ServiceCard
            className="md:col-span-3"
            glowDelay="-1.5s"
            mockup={<SolucoesMockup />}
            title="Soluções de IA Personalizadas"
            description="Construímos sistemas de IA sob medida que estejam alinhados com os objetivos e desafios do seu negócio."
          />
          <ServiceCard
            className="md:col-span-3"
            glowDelay="-6s"
            mockup={<ConsultoriaMockup />}
            title={<>Consultoria<br />Estratégica de IA</>}
            description="Obtenha orientação especializada para implementar soluções de IA que impulsionem o crescimento dos negócios."
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
