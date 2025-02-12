"use client";
import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";
import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/react";
import faqsData from "./faqs.json";

const FAQs = () => {
  return (
    <section className={styles.testimonials}>
      <LayoutWrapper>
        <div className={styles.heading__container}>
          <div className={styles.heading__inner__container}>
            <Link href="/">
              <SectionHeading
                badgeText="FAQs"
                heading="Frequently asked questions"
                badgeStyle="bg-[#9A1C56] border-none"
              />
            </Link>
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <div className={styles.testimonials__carousel}>
          <Accordion variant="splitted">
            {faqsData.faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                aria-label={faq.question}
                title={faq.question}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default FAQs;
