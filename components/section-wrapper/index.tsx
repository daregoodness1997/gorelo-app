import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface SectionWrapperProps {
  idName: string;
}

function SectionWrapper<P extends object>(Component: React.ComponentType<P>) {
  function HOC(
    props: P & React.ComponentProps<typeof Component> & SectionWrapperProps
  ) {
    return (
      <AnimatePresence mode="wait">
        <motion.section
          id={props.idName}
          variants={staggerContainer()}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 overflow-hidden w-screen`}
        >
          <Component {...(props as P)} />
        </motion.section>
      </AnimatePresence>
    );
  }
  return HOC;
}

export default SectionWrapper;
