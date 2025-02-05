import { type FC } from "react";
import styles from "./styles.module.css";

const SectionHeading: FC = () => {
  return (
    <div className={styles.top__container}>
      <div className={styles.heading}>
        <h2>Streamline your day-to-day with our ‍AI Platforms</h2>
      </div>

      <div className={styles.description}>
        <p>
          Unlock your team&apos;s full potential with our AI platforms, designed
          to streamline your day-to-day operations and drive success.
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
