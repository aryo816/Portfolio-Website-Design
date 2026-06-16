import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const marqueeItems = ["Brand Identity", "UI/UX Design", "Motion Design", "Web Design", "Visual System", "Typography", "Art Direction"];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden" style={{ paddingTop: "clamp(80px, 15vw, 120px)" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>Available for projects — 2026</span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="leading-none tracking-tight"
            style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "var(--foreground)", fontWeight: 400 }}
          >
            Design that
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-6 flex-wrap"
          >
            <h1 className="leading-none tracking-tight italic" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "var(--accent)", fontWeight: 400 }}>moves</h1>
            <h1 className="leading-none tracking-tight" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "var(--foreground)", fontWeight: 400 }}>people.</h1>
          </motion.div>
        </div>

        {/* Description and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16"
        >
          <p className="max-w-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)", fontSize: "1rem" }}>
            A multidisciplinary design studio crafting purposeful visual identities and digital experiences for ambitious brands.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:gap-5"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
            >
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
              style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}
            >
              Let's talk
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 px-6 md:px-12 pb-8 flex items-center justify-between"
      >
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "var(--border)" }} />
          <span className="text-xs rotate-90 origin-left tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>Scroll</span>
        </div>
        <div className="flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)", fontSize: "0.7rem" }}>
          <span>Based in East Java, ID</span>
          <span style={{ color: "var(--border)" }}>—</span>
          <span>Est. 2020</span>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden border-t py-4" style={{ borderColor: "var(--border)" }}>
        <div ref={marqueeRef} className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12 text-sm tracking-widest uppercase flex-shrink-0" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>
              {item}
              <span style={{ color: "var(--accent)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
