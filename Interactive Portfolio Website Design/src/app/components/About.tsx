import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "12", label: "Awards Won" },
];

const skills = [
  "Brand Strategy", "Visual Identity", "UI/UX Design", "Motion Design",
  "Art Direction", "Web Design", "Editorial Design", "Typography",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imgUrl = "https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxVSSUyMFVYJTIwZGVzaWduJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzgxNTQwMTM2fDA&ixlib=rb-4.1.0&q=80&w=800";

  return (
    <section id="about" className="py-28 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative pb-10 md:pb-0 pr-6 md:pr-0"
        >
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
            <img src={imgUrl} alt="Design studio workspace" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.4), transparent)" }} />
          </div>
          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-6 rounded-2xl p-5" style={{ backgroundColor: "var(--accent)", minWidth: "140px" }}>
            <div className="text-4xl font-light leading-none mb-1" style={{ fontFamily: "Instrument Serif, serif", color: "var(--accent-foreground)" }}>80+</div>
            <div className="text-xs tracking-wider uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent-foreground)", opacity: 0.8 }}>Projects Done</div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)" }}>
            About the Studio
          </p>
          <h2 className="mb-6 leading-tight" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--foreground)", fontWeight: 400 }}>
            We turn vision into visual language.
          </h2>
          <p className="mb-4 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Aryo's Studio is an East Java-based design studio founded in 2020. We work at the intersection of strategy and aesthetics — helping brands define who they are and how they show up in the world.
          </p>
          <p className="mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Our process is rooted in research and conversation. We believe great design emerges from deep understanding — of your audience, your market, and your own unique point of view.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)", border: "1px solid var(--border)", backgroundColor: "var(--secondary)" }}>
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label}>
                <div className="leading-none mb-1" style={{ fontFamily: "Instrument Serif, serif", fontSize: "2.5rem", color: "var(--foreground)", fontWeight: 400 }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
