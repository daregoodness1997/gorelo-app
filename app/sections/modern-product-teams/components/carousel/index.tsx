import { type FC } from "react";
import styles from "./styles.module.css";
import CarouselCard from "../carousel-card";
import { modernProductCards } from "@/lib/constant";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

type Props = {
  options?: EmblaOptionsType;
};

const Carousel: FC<Props> = ({ options }) => {
  return (
    <div>
      <div className={styles.carousel__container}>
        <motion.div
          className={styles.carousel__inner__container}
          variants={staggerContainer()}
          initial="hidden"
          viewport={{ once: false, amount: 0.25 }}
          whileInView={"show"}
        >
          {modernProductCards.map((card) => (
            <CarouselCard key={card.id} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
