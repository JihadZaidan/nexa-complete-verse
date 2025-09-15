import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFadeIn = (
  targetRef: React.RefObject<HTMLElement | null>,
  delay = 0.2
) => {
  useEffect(() => {
    const el = targetRef.current;

    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    }
  }, [targetRef, delay]);
};
