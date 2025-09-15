import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useZoom = (
  ref: React.RefObject<HTMLElement | null>,
  delay = 0.1
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  }, [ref, delay]);
};
