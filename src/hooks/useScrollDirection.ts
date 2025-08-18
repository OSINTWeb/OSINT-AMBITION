import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(options?: { threshold?: number; initial?: ScrollDirection }) {
	const threshold = options?.threshold ?? 10;
	const [direction, setDirection] = useState<ScrollDirection>(options?.initial ?? "up");
	const prevYRef = useRef<number>(0);
	const tickingRef = useRef<boolean>(false);

	useEffect(() => {
		prevYRef.current = window.scrollY || window.pageYOffset;

		function update() {
			const y = window.scrollY || window.pageYOffset;
			const delta = y - prevYRef.current;

			if (Math.abs(delta) >= threshold) {
				setDirection(delta > 0 ? "down" : "up");
				prevYRef.current = y;
			}
			tickingRef.current = false;
		}

		function onScroll() {
			if (!tickingRef.current) {
				window.requestAnimationFrame(update);
				tickingRef.current = true;
			}
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return direction;
}