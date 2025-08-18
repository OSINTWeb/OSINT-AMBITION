import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const { once = true, root, rootMargin, threshold } = options ?? {};
  const elementRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    let didUnobserve = false;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          if (once && !didUnobserve) {
            obs.unobserve(entry.target);
            didUnobserve = true;
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { root: root ?? null, rootMargin, threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref: elementRef, inView } as const;
}


