import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSlideFromTop = (
  ref: React.RefObject<HTMLElement | null>,
  delay = 0.2
) => {
  useEffect(() => {
    const el = ref.current;

    if (el) {
      gsap.fromTo(
        el,
        { y: -60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  }, [ref, delay]);
};
