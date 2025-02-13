import { type FC } from "react";
import styles from "./styles.module.css";
import CarouselCard from "../carouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "./testimonials.json";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const Carousel: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.carousel__container}>
          <motion.div
            className={styles.carousel__inner__container}
            variants={staggerContainer()}
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            whileInView={"show"}
          >
            {testimonialsData.map((testimonial, idx) => (
              <CarouselCard key={idx} {...testimonial} />
            ))}
          </motion.div>
        </div>

        <div className={styles.card__controls__container}>
          <button className={styles.icon__button}>
            <ChevronLeft />
          </button>
          <button className={styles.icon__button}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
