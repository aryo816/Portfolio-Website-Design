export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
      <p className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>
        © 2026 Aryo's Studio. All rights reserved.
      </p>
      <p className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>
        East Java, Indonesia — Crafted with intention
      </p>
    </footer>
  );
}
