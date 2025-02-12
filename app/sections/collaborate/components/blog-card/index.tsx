import { type FC } from "react";
import Placeholder from "@/assets/placeholder-1.svg";
import EditorContent from "@/assets/editor-content.svg";

import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  image: string;
  heading: string;
  summary: string;
}
const BlogCard: FC<Props> = ({ image, heading, summary }) => {
  const firstTwoWords = heading?.split(" ").slice(0, 2).join(" ") || "";
  const remainingWords = heading?.split(" ").slice(2).join(" ") || "";
  return (
    <div className={styles.blog_container}>
      <div className={styles.blog_image_container}>
        <Image
          alt={heading}
          src={image}
          fill
          loading="lazy"
          className={styles.blog_image}
        />
      </div>
      <h4 className={styles.heading}>{heading}</h4>

      <p className={styles.paragraph}>{summary}</p>
    </div>
  );
};

export default BlogCard;
