import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import CustomerList from "./components/customer-list";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CustomerMarquee from "./components/customer-marquee";

const Customers: FC = () => {
  return (
    <section className={styles.customers}>
      <LayoutWrapper>
        <p className={styles.description__large__screen}>
          <span className={styles.highlight}>
            Powering the world&lsquo;s best IT teams.
          </span>
          <br />
          Join clients around the globe working with us meticulously{" "}
        </p>

        <p className={styles.description__small__screen}>
          Powering the world&lsquo;s best IT teams. Join clients around the
          globe working with us meticulously.
        </p>

        <div className={styles.customer__list__container}>
          <CustomerList />

          <div className={styles.link__container}>
            <Link href="/" className={styles.link}>
              <span className={styles.link__text}> Meet our Customers </span>
              <ChevronRight />
            </Link>
          </div>
        </div>
      </LayoutWrapper>
      <div className={styles.customer__marquee__container}>
        <CustomerMarquee />
      </div>
    </section>
  );
};

export default Customers;
