import { useEffect, useRef } from "react";

function Reveal({ children, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.classList.add("reveal");
    if (delay) {
      node.classList.add(`reveal-delay-${delay}`);
    }

    if (!("IntersectionObserver" in window)) {
      node.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("in-view");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

export default Reveal;