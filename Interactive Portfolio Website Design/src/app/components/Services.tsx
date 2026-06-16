import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    description: "Complete visual identity systems — logo, color, typography, brand guidelines, and collateral. We build marks that endure.",
    deliverables: ["Logo System", "Color Palette", "Typography", "Brand Guidelines", "Collateral"],
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "User-centered digital design for apps, dashboards, and websites. From wireframes to polished, production-ready interfaces.",
    deliverables: ["User Research", "Wireframing", "Prototyping", "UI Design", "Design System"],
  },
  {
    num: "03",
    title: "Web Design",
    description: "Bespoke websites that balance visual craft with conversion. We design with intent and attention to every detail.",
    deliverables: ["Landing Pages", "E-commerce", "Marketing Sites", "Animation", "SEO"],
  },
  {
    num: "04",
    title: "Art Direction",
    description: "Creative strategy, campaign concepts, and editorial direction for brands that want to say something meaningful.",
    deliverables: ["Campaign Concepts", "Photography Direction", "Editorial", "Motion Brief", "Styling"],
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-3 text-xs tracking-widest uppercase"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)" }}
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 leading-none"
          style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--foreground)", fontWeight: 400 }}
        >
          Our Services
        </motion.h2>

        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="py-8 cursor-pointer group"
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              data-hover
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-8 flex-1">
                  <span className="text-xs w-6 flex-shrink-0" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>
                    {service.num}
                  </span>
                  <h3 className="leading-none transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--foreground)", fontWeight: 400 }}>
                    {service.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{ borderColor: "var(--border)", transform: activeIdx === i ? "rotate(45deg)" : "none", borderColor: activeIdx === i ? "var(--accent)" : "var(--border)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke={activeIdx === i ? "var(--accent)" : "var(--muted-foreground)"} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {activeIdx === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="pl-0 md:pl-14 pt-5 flex flex-col md:flex-row gap-6 md:gap-8">
                    <p className="max-w-lg leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <span key={d} className="px-3 py-1 rounded-full text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)", border: "1px solid var(--accent)", backgroundColor: "rgba(212,255,79,0.05)" }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
