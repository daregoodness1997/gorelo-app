import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";
import Link from "next/link";
import Carousel from "./components/carousel";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <LayoutWrapper>
        <div className={styles.heading__container}>
          <div className={styles.heading__inner__container}>
            <Link href="/">
              <SectionHeading
                badgeText="Testimonials"
                heading="Do not just take our word for it"
                badgeStyle="bg-[#9A1C56] border-none"
              />
            </Link>
          </div>
        </div>
      </LayoutWrapper>

      <div className={styles.testimonials__carousel}>
        <Carousel />
      </div>
    </section>
  );
};

export default Testimonials;
