import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useStaggerChildren = (
  ref: React.RefObject<HTMLElement | null>,
  selector = ".animated-item",
  delay = 0.2
) => {
  useEffect(() => {
    if (ref.current) {
      const children = ref.current.querySelectorAll(selector);
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }
  }, [ref, selector, delay]);
};
  