"use client";
import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";
import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/react";
import faqsData from "./faqs.json";
import SectionWrapper from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

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
        <motion.div
          className={styles.testimonials__carousel}
          variants={staggerContainer()}
          initial="hidden"
          viewport={{ once: false, amount: 0.25 }}
          whileInView={"show"}
        >
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
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};

export default SectionWrapper(FAQs);
