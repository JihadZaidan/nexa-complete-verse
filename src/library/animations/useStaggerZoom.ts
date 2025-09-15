import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useStaggerZoom = (
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  baseDelay = 0.3
) => {
  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: baseDelay + i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });
  }, [refs, baseDelay]);
};
