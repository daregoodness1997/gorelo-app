import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";

const About: FC = () => {
  return (
    <main className=" min-h-screen pt-[calc(var(--header-top)+var(--header-height))]">
      <section className={styles.pricing}>
        <LayoutWrapper>
          <div className={styles.heading__container}>
            <div className={styles.heading__inner__container}>
              <SectionHeading
                heading="About"
                badgeText="About"
                badgeStyle="bg-[#D4B144] border-none"
              />

              <div>
                <p>
                  <span>Optimized for speed and efficiency.</span> Create tasks
                  in seconds, discuss issues in context, and breeze through your
                  work in views tailored to you and your team.
                </p>
              </div>
            </div>
          </div>
        </LayoutWrapper>

        <section className="my-8">
          <LayoutWrapper>
            <h1 className="text-white">Heading</h1>
          </LayoutWrapper>
        </section>
      </section>
    </main>
  );
};

export default About;
