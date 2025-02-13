import { type FC } from "react";
import styles from "./styles.module.css";
import SectionHeading from "@/components/sectionHeading";
import Carousel from "./components/carousel";
import LayoutWrapper from "@/components/layout-wrapper";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../slider/EmblaCarousel";
import SectionWrapper from "@/components/section-wrapper";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Collaborate: FC = () => {
  return (
    <section className={styles.collaborate}>
      <LayoutWrapper>
        <div className={styles.heading__container}>
          <div className={styles.heading__inner__container}>
            <SectionHeading
              heading="Latest Insights & Articles"
              badgeText="Blogs"
              badgeStyle="bg-[#b59aff] border-none"
            />
          </div>

          <div className={styles.heading__text__container}>
            <p>
              Stay updated with the latest trends, best practices, and insights
              in development and collaboration.
            </p>
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <Carousel />
      </LayoutWrapper>
    </section>
  );
};

export default SectionWrapper(Collaborate);
