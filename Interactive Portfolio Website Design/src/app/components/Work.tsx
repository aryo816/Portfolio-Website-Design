import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Vela Collective",
    category: "Brand Identity",
    year: "2025",
    description: "Complete visual identity for a luxury sustainable fashion house. From logo system to packaging and digital touchpoints.",
    image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxVSSUyMFVYJTIwZGVzaWduJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzgxNTQwMTM2fDA&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["Branding", "Print", "Digital"],
    color: "#d4ff4f",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "Pulse Finance",
    category: "UI/UX Design",
    year: "2025",
    description: "Dashboard and mobile app redesign for a fintech startup serving 2M+ users.",
    image: "https://images.unsplash.com/photo-1622790210211-b5c39301578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxVSSUyMFVYJTIwZGVzaWduJTIwYnJhbmRpbmclMjBtb2NrdXAlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzgxNTQwMTM2fDA&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["UX", "Mobile", "Web App"],
    color: "#a78bfa",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Terra Organics",
    category: "Web Design",
    year: "2024",
    description: "E-commerce website and brand system for an organic food retailer.",
    image: "https://images.unsplash.com/photo-1768729797971-472ce92e7a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc4MTU0MDEzMnww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["Web", "E-commerce", "Brand"],
    color: "#4fffb0",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Onyx Architecture",
    category: "Art Direction",
    year: "2024",
    description: "Photography art direction and editorial design for an award-winning architecture firm's annual publication.",
    image: "https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc4MTU0MDEzMnww&ixlib=rb-4.1.0&q=80&w=800",
    tags: ["Editorial", "Print", "Photography"],
    color: "#ff9f4f",
    span: "col-span-2",
  },
];

const filters = ["All", "Branding", "UX", "Web", "Print"];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer col-span-1 ${project.span === "col-span-2" ? "md:col-span-2" : "md:col-span-1"}`}
      style={{ aspectRatio: project.span === "col-span-2" ? "16/9" : "4/5", border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" style={{ opacity: hovered ? 1 : 0.7 }} />

      {/* Top tags */}
      <div className="absolute top-5 left-5 flex gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full text-xs tracking-wider backdrop-blur-sm" style={{ fontFamily: "JetBrains Mono, monospace", backgroundColor: "rgba(255,255,255,0.1)", color: "var(--foreground)", border: "1px solid var(--border)" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Year */}
      <div className="absolute top-5 right-5" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--muted-foreground)" }}>
        {project.year}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-2 text-xs tracking-widest uppercase transition-colors duration-300" style={{ fontFamily: "JetBrains Mono, monospace", color: project.color }}>
          {project.category}
        </div>
        <h3 className="mb-2 leading-tight" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--foreground)", fontWeight: 400 }}>
          {project.title}
        </h3>
        <p
          className="max-w-md leading-relaxed md:transition-opacity md:duration-300"
          style={{ fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", color: "var(--muted-foreground)", opacity: hovered ? 1 : 0 }}
        >
          {project.description}
        </p>
        <div
          className="mt-4 flex items-center gap-2 text-sm md:transition-opacity md:duration-300"
          style={{ fontFamily: "DM Sans, sans-serif", color: project.color, opacity: hovered ? 1 : 0 }}
        >
          View Case Study
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="py-28 px-6 md:px-12">
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)" }}
          >
            Selected Work — 2024/25
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-none"
            style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--foreground)", fontWeight: 400 }}
          >
            Recent Projects
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                backgroundColor: activeFilter === f ? "var(--accent)" : "var(--secondary)",
                color: activeFilter === f ? "var(--accent-foreground)" : "var(--muted-foreground)",
                border: "1px solid",
                borderColor: activeFilter === f ? "var(--accent)" : "var(--border)",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
