import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 200, damping: 30 });
  const trailY = useSpring(cursorY, { stiffness: 200, damping: 30 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleEnter = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(2.5)";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const handleLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);

    const observer = new MutationObserver(() => {
      const targets = document.querySelectorAll("a, button, [data-hover]");
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleEnter);
        t.removeEventListener("mouseleave", handleLeave);
        t.addEventListener("mouseenter", handleEnter);
        t.addEventListener("mouseleave", handleLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const initialTargets = document.querySelectorAll("a, button, [data-hover]");
    initialTargets.forEach((t) => {
      t.addEventListener("mouseenter", handleEnter);
      t.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice()) return null;

  return (
    <>
      <motion.div
        ref={dotRef}
        style={{ x: cursorX, y: cursorY, backgroundColor: "var(--accent)", position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%", pointerEvents: "none", zIndex: 9999, translateX: "-50%", translateY: "-50%", transition: "opacity 0.15s" }}
      />
      <motion.div
        ref={ringRef}
        style={{ x: trailX, y: trailY, borderColor: "var(--accent)", position: "fixed", top: 0, left: 0, width: 32, height: 32, borderRadius: "50%", border: "1px solid", pointerEvents: "none", zIndex: 9998, translateX: "-50%", translateY: "-50%", transition: "transform 0.3s" }}
      />
    </>
  );
}
