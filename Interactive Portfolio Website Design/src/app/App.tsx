import "../styles/fonts.css";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </div>
  );
}
