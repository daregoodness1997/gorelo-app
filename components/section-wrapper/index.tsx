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
          viewport={{ once: false, amount: 0.25 }}
        >
          <Component {...(props as P)} />
        </motion.section>
      </AnimatePresence>
    );
  }
  return HOC;
}

export default SectionWrapper;
