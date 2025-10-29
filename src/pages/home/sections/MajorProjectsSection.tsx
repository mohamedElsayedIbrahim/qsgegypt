import React from "react";
import { motion } from "framer-motion";
import ProjectCarousel from "../../../components/majorProjectsSection/ProjectCarousel";
import { sectionVariants } from "../../../components/appVariants";



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
        <motion.div variants={sectionVariants} className="text-left mb-12">
          <a
            href="#"
            className="transition-colors duration-300 text-navy hover:text-gold"
          >
            <h3 className="text-3xl font-bold leading-tight">
              Some Of <br /> Our Major Projects
            </h3>
          </a>

          {/* Accent Line */}
          <div className="flex items-center mt-4 space-x-2">
            <span className="h-1 w-8 bg-gold"></span>
            <span className="h-2 w-2 bg-gold rounded-full"></span>
            <span className="h-2 w-2 bg-gold rounded-full"></span>
            <span className="h-2 w-2 bg-gold rounded-full"></span>
          </div>
        </motion.div>

        {/* Carousel */}
        <ProjectCarousel />
      </div>
    </motion.section>
  );
};

export default MajorProjectsSection;
