import React from "react";
import { motion, type Variants } from "framer-motion";
import ProjectCarousel from "../../components/majorProjectsSection/ProjectCarousel";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MajorProjectsSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          'url("http://www.domeint.com/templates/project/image/ssddf.jpg")',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          variants={sectionVariants}
          className="text-left mb-12"
        >
          <a
            href="https://www.domeint.com/projects.html"
            className="text-white hover:text-yellow-400 transition"
          >
            <h3 className="text-3xl font-bold leading-tight">
              Some Of <br /> Our Major Projects
            </h3>
          </a>
          <div className="flex items-center mt-4 space-x-2">
            <span className="h-1 w-8 bg-yellow-400"></span>
            <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
            <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
            <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
          </div>
        </motion.div>

        {/* Carousel */}
        <ProjectCarousel />
      </div>
    </motion.section>
  );
};

export default MajorProjectsSection;
