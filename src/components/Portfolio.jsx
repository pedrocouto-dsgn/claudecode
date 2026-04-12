import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  { id: 1, label: "Projeto 01" },
  { id: 2, label: "Projeto 02" },
  { id: 3, label: "Projeto 03" },
  { id: 4, label: "Projeto 04" },
];

function ProjectCard({ label, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end"  → the element's top hits the viewport's bottom
    // "start start" → the element's top hits the viewport's top
    offset: ["start end", "start start"],
  });

  // Scale: starts at 20%, grows to 100% as the card reaches the top
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  // Rounded corners shrink as the card scales up
  const borderRadius = useTransform(scrollYProgress, [0, 1], [32, 0]);
  // Fade-in during the first half of travel
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, borderRadius, opacity }}
      className="sticky top-0 h-screen w-full overflow-hidden"
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ backgroundColor: "#d4d4d4" }}
      >
        <span
          className="select-none text-2xl md:text-4xl text-black/20 uppercase tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
        >
          {label} — Placeholder
        </span>

        {/* Position number */}
        <span
          className="absolute bottom-6 right-8 text-[13px] text-black/30"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07080A" }}
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
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
          Projetos Recentes
        </motion.h2>
      </div>

      {/* Scroll-scaling cards — they stack with sticky positioning so each
          card overlaps the previous one as the user scrolls, growing from
          ~82% to 100% width. */}
      <div className="mt-12 md:mt-16">
        {PROJECTS.map((project, i) => (
          <div key={project.id}>
            <ProjectCard label={project.label} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
