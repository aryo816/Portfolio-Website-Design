import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = ["Work", "About", "Services", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300"
        style={{ borderBottom: scrolled ? "1px solid var(--border)" : "none", backdropFilter: scrolled ? "blur(12px)" : "none", background: scrolled ? "rgba(8,8,8,0.85)" : "transparent" }}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
            <span className="text-xs font-mono font-medium" style={{ color: "var(--accent-foreground)", fontFamily: "JetBrains Mono, monospace" }}>A</span>
          </div>
          <span className="tracking-widest uppercase text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--foreground)" }}>Aryo's Studio</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative text-sm tracking-wider uppercase group overflow-hidden"
              style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">{link}</span>
              <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ backgroundColor: "var(--accent)" }} />
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-40 flex flex-col items-center gap-6 py-10"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}
          >
            {links.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} className="text-2xl tracking-widest uppercase" style={{ fontFamily: "Instrument Serif, serif", color: "var(--foreground)" }}>
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
