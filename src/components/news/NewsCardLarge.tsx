import React from "react";
import { motion, type Variants } from "framer-motion";
import type { NewsProps } from "../../interfaces/Components";


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const NewsCardLarge: React.FC<NewsProps> = ({ news, index = 0 }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform"
    >
      <a href={news.link} target="_blank" rel="noopener noreferrer">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </a>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-navy mb-3 hover:text-gold transition-colors">
          <a href={news.link}>{news.title}</a>
        </h3>
        <p className="text-gray-700 mb-4">{news.description}</p>
        <div className="text-sm text-medium-gray mb-3">
          Posted on | {news.date}
        </div>
        <a
          href={news.link}
          className="text-gold hover:text-navy font-semibold transition-colors"
        >
          Read More...
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCardLarge;
