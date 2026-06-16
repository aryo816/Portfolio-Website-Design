import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const socials = [
  { name: "Instagram", handle: "@aryoprmd" },
  { name: "LinkedIn", handle: "Danang Aryo Permadi" },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    fontFamily: "DM Sans, sans-serif",
    backgroundColor: "var(--secondary)",
    color: "var(--foreground)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "14px 18px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  } as const;

  return (
    <section id="contact" className="py-28 px-6 md:px-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)" }}>
            Get In Touch
          </p>
          <h2 className="mb-6 leading-tight" style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--foreground)", fontWeight: 400 }}>
            Let's build something great together.
          </h2>
          <p className="mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            We're always open to new collaborations, partnerships, and exciting projects. Drop us a message and we'll be in touch within 24 hours.
          </p>

          <div className="mb-10">
            <a href="mailto:hello@aryosstudio.id" className="block text-2xl hover:opacity-70 transition-opacity duration-200" style={{ fontFamily: "Instrument Serif, serif", color: "var(--foreground)", fontWeight: 400, fontStyle: "italic" }}>
              hello@aryosstudio.id
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <div key={s.name} className="flex items-center justify-between py-3 border-b group cursor-pointer" style={{ borderColor: "var(--border)" }}>
                <span className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{s.name}</span>
                <span className="text-sm group-hover:text-[var(--accent)] transition-colors duration-200" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--foreground)" }}>{s.handle}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 rounded-2xl border p-12 text-center" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: "var(--accent)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="var(--accent-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "Instrument Serif, serif", fontSize: "2rem", color: "var(--foreground)", fontWeight: 400 }}>Message sent!</h3>
              <p style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="mt-4 text-sm underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
              <div>
                <label className="block mb-2 text-xs tracking-wider uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              <div>
                <label className="block mb-2 text-xs tracking-wider uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              <div>
                <label className="block mb-2 text-xs tracking-wider uppercase" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
