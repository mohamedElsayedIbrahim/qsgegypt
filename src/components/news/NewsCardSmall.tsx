import React from "react";
import { motion, type Variants } from "framer-motion";
import type { NewsProps } from "../../interfaces/Components";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const NewsCardSmall: React.FC<NewsProps> = ({ news, index = 0 }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex bg-white/90 rounded-2xl shadow hover:shadow-xl transition overflow-hidden mb-6"
    >
      <div className="w-1/3">
        <a href={news.link} target="_blank" rel="noopener noreferrer">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </a>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-navy hover:text-gold transition-colors">
            <a href={news.link}>{news.title}</a>
          </h3>
          {news.description && (
            <p className="text-gray-700 line-clamp-2 mb-2">
              {news.description}
            </p>
          )}
        </div>
        <div>
          <div className="text-sm text-medium-gray mb-1">
            Posted on | {news.date}
          </div>
          <a
            href={news.link}
            className="text-gold hover:text-navy font-semibold transition-colors"
          >
            Read More...
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCardSmall;
