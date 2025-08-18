import React from "react";
import { useInView } from "../hooks/useInView";

type FadeInUpProps = {
  children: React.ReactNode;
  delayMs?: number;
  distance?: number; // px translateY distance
  className?: string;
};

export function FadeInUp({ children, delayMs = 0, distance = 16, className }: FadeInUpProps) {
  const { ref, inView } = useInView({ root: null, threshold: 0.1, once: true });

  const style: React.CSSProperties = {
    transition: "opacity 500ms ease-out, transform 500ms ease-out",
    transitionDelay: `${delayMs}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : `translateY(${distance}px)`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>} style={style} className={className}>
      {children}
    </div>
  );
}


