import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSlideFromRight = (
  ref: React.RefObject<HTMLElement | null>,
  delay = 0.2
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
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
