import { type FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  image: string;
}

const FirstCard: FC<Props> = ({ image }) => {
  return (
    <div className={styles.project__overview__card}>
      <div className={styles.outter__container}>
        <div className={styles.inner__container}>
          <div className={styles.image_container}>
            <Image alt="" src={image} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
