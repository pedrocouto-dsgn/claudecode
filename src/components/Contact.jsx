"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <section
      id="contatos"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0c0d10" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
          {/* ---- Left column: heading + contact info ---- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-gradient-horizontal uppercase"
              style={{
                letterSpacing: "-0.03em",
                lineHeight: 1,
                fontSize: "clamp(40px, 6vw, 76px)",
              }}
            >
              Fale Conosco
            </motion.h2>

            {/* Email */}
            <motion.div variants={fadeUp} className="mt-16">
              <span
                className="text-[14px] text-white/50"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                Email:
              </span>
              <p
                className="mt-2 text-[20px] md:text-[24px] uppercase text-white tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                LINEARCREATIVESTUDIO@GMAIL.COM
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="my-8 h-px w-full bg-white/10" />

            {/* Phone */}
            <motion.div variants={fadeUp}>
              <span
                className="text-[14px] text-white/50"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                Phone:
              </span>
              <p
                className="mt-2 text-[20px] md:text-[24px] text-white"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                +31 (0) 20 343 9223
              </p>
            </motion.div>
          </motion.div>

          {/* ---- Right column: form ---- */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[14px] text-white/80"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/30 transition-colors duration-300 focus:border-white/25"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[14px] text-white/80"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/30 transition-colors duration-300 focus:border-white/25"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[14px] text-white/80"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+31 (0) 20 343 9223"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/30 transition-colors duration-300 focus:border-white/25"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[14px] text-white/80"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi team Halo! I'm reaching out for..."
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/30 transition-colors duration-300 focus:border-white/25"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="btn-pill-primary mt-2 rounded-full px-12 py-3.5 text-[14px] uppercase tracking-wide transition-transform duration-300 hover:-translate-y-0.5"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
              >
                Submit
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
