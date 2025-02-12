"use client";
import { type FC, memo } from "react";
import styles from "./styles.module.css";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

// const Tilt = dynamic(() => import("react-next-tilt"), { ssr: false });
import Image from "next/image";

interface Props {
  testimonial: string;
  name: string;
  company: string;
}
const TestimonialCard: FC<Props> = ({ testimonial, name, company }) => {
  return (
    // <Tilt tiltClass={styles.card} scale={0.8} shadowEnable borderRadius="30px">
    <div className={styles.card}>
      <div className={styles.content__container}>
        <div className={styles.card__heading__container}>
          <p>{testimonial}</p>
          <h3> {name}</h3>
          <h4>{company}</h4>
        </div>
      </div>
    </div>

    // </Tilt>
  );
};

export default memo(TestimonialCard);
