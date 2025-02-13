import { type FC } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";

const SectionHeading: FC = () => {
  return (
    <div className={styles.top__container}>
      <motion.div
        className={styles.heading}
        variants={textVariant()}
        initial="hidden"
        whileInView={"show"}
      >
        <h2>Streamline your day-to-day with our ‍AI Platforms</h2>
      </motion.div>

      <motion.div
        className={styles.description}
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <p>
          Unlock your team&apos;s full potential with our AI platforms, designed
          to streamline your day-to-day operations and drive success.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionHeading;
