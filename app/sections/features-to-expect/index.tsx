import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";
import Link from "next/link";
import {
  BentoGrid,
  BentoGridFeatureLookupWrapper,
  BentoGridSeperator,
  BentoGridTopLayer,
  BentoGridWideCardWrapper,
} from "@/components/bento-grid";
import BentoCardLeft from "@/components/bento-grid/components/bento-grid-card-left";
import BentoGridCardRight from "@/components/bento-grid/components/bento-grid-card-right";
import BentoGridFeatureLookUpCard from "@/components/bento-grid/components/bento-grid-feature-lookup-card";
import { longTermFeatureLookup } from "./feature-lookup-data";
import FirstCard from "./components/first-card";
import SecondCard from "./components/second-card";
import WideCard from "./components/wide-card";

const FeaturesToExpect: FC = () => {
  return (
    <section className={styles.long__term__planning}>
      <LayoutWrapper>
        <div className={styles.heading__container}>
          <div className={styles.heading__inner__container}>
            <Link href="/">
              <SectionHeading
                badgeText="Features"
                heading="And all the features you've come to expect"
                badgeStyle="bg-[#9A1C56] border-none"
              />
            </Link>
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <div className={styles.hero_features}>
          <BentoGrid>
            <BentoGridFeatureLookupWrapper>
              {longTermFeatureLookup.map((featureLookup) => (
                <BentoGridFeatureLookUpCard
                  key={featureLookup.id}
                  {...featureLookup}
                />
              ))}
            </BentoGridFeatureLookupWrapper>
          </BentoGrid>
        </div>

        <BentoGrid>
          <BentoGridTopLayer>
            <BentoCardLeft
              title="Track, manage, and delight"
              description="Tickets done right. Along with the rest—billing, documentation, forms, client portal & more. 🤝

"
            >
              <FirstCard image="/tickets.webp" />
            </BentoCardLeft>
            <BentoGridCardRight
              title="Automate your way out of a job"
              description="Just don't tell anyone 🤫. Automate repetitive tasks, monitor your systems in real-time, and integrate with the tools you already use."
            >
              <FirstCard image="/group.webp" />
            </BentoGridCardRight>
          </BentoGridTopLayer>

          {/* <div className="h-6"></div>

          <BentoGridWideCardWrapper>
            <WideCard />
          </BentoGridWideCardWrapper> */}

          <BentoGridSeperator />

          {/* <BentoGridFeatureLookupWrapper>
            {longTermFeatureLookup.map((featureLookup) => (
              <BentoGridFeatureLookUpCard
                key={featureLookup.id}
                {...featureLookup}
              />
            ))}
          </BentoGridFeatureLookupWrapper> */}
        </BentoGrid>
      </LayoutWrapper>
    </section>
  );
};

export default FeaturesToExpect;
