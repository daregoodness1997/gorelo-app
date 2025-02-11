import { type FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import LayoutWrapper from "@/components/layout-wrapper";

const PreFooter: FC = () => {
  return (
    <section className={styles.prefooter}>
      <LayoutWrapper>
        <div className={styles.grid__container}>
          <div className="">
            <h3 className={styles.heading}>Get Started with a Free Trial</h3>
            <div className={styles.heading__text__container}>
              <p>
                Expand the capabilities of the Linear system with a wide variety
                of integrations that keep everyone in your organization aligned
                and focused.
              </p>
            </div>
          </div>

          <div className={styles.links__outter__container}>
            <div className={styles.links__inner__container}>
              <Link className={styles.get__started__link} href="/">
                {" "}
                Get Started{" "}
              </Link>
              <Link className={styles.talk__to__sales} href="/">
                {" "}
                Book a Demo{" "}
              </Link>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default PreFooter;
