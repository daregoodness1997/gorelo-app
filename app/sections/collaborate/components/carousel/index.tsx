import { type FC } from "react";

import BlogCard from "../blog-card";
import blogData from "./blogs.json";

import styles from "./styles.module.css";

const Carousel: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {blogData.articles.map((article, idx) => (
        <BlogCard
          key={idx}
          heading={article.title}
          summary={article.title}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default Carousel;
