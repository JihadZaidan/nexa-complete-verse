import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSlideUp = (
  ref: React.RefObject<HTMLElement | null>,
  delay = 0
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "back.out(1.7)",
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
