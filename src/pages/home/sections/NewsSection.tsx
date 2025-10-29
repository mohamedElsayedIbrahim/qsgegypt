import React from "react";
import { motion, type Variants } from "framer-motion";
import NewsList from "../../../components/news/NewsList";
import { newsData } from "../../../static/newsData";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NewsSection: React.FC = () => {
  

  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('http://www.domeint.com/templates/project/image/newss.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Section Title */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy">
            <a
              href="https://www.domeint.com/news"
              className="hover:text-gold transition-colors"
            >
              News & Updates
            </a>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-6 h-1 bg-gold rounded"></span>
            <span className="w-2 h-1 bg-gold rounded"></span>
            <span className="w-2 h-1 bg-gold rounded"></span>
          </div>
        </motion.div>

        {/* News Cards */}
        <NewsList news={newsData} />
      </div>
    </section>
  );
};

export default NewsSection;
