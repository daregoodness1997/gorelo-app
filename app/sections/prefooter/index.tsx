import { type FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionWrapper from "@/components/section-wrapper";
import BlurPopUpByWord from "@/components/blur-pop-up-by-words";
import BlurPopUp from "@/components/blur-pop-up";

const PreFooter: FC = () => {
  return (
    <section className={styles.prefooter}>
      <LayoutWrapper>
        <div className={styles.grid__container}>
          <div className="">
            <h3 className={styles.heading}>
              <BlurPopUpByWord text="Get Started with a Free Trial" />
            </h3>

            <div className={styles.heading__text__container}>
              <BlurPopUp delay={1}>
                <p>
                  An all-in-one platform empowering MSPs and IT providers with
                  ticketing, billing, documentation, remote computer management,
                  and more!
                </p>
              </BlurPopUp>
            </div>
          </div>

          <div className={styles.links__outter__container}>
            <BlurPopUp delay={1.1}>
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
            </BlurPopUp>{" "}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default SectionWrapper(PreFooter);
