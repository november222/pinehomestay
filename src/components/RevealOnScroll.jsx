import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function RevealOnScroll({ children, delay = 0 }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
