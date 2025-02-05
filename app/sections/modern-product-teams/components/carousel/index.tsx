import { type FC } from "react";
import styles from "./styles.module.css";
import CarouselCard from "../carousel-card";
import { modernProductCards } from "@/lib/constant";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

type Props = {
  options?: EmblaOptionsType;
};

const Carousel: FC<Props> = ({ options }) => {
  //   const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__inner__container}>
          {modernProductCards.map((card) => (
            <CarouselCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
