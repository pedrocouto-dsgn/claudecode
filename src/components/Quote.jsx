import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section
      id="sobre"
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#07080A" }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-32 md:py-48 lg:py-56">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-gradient-horizontal text-left uppercase"
          style={{
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            fontSize: "clamp(32px, 5.2vw, 68px)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Quam duis eget varius
          facilisis. Mi cursus dignissim feugiat sed.
        </motion.h2>
      </div>
    </section>
  );
}
