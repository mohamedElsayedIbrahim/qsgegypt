import React from "react";
import { motion } from "framer-motion";
import type { ProjectSlideProps } from "../../interfaces/Components";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import { slideVariants } from "../appVariants";

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index }) => {
  return (
    <motion.div
      custom={index}
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-lg border border-light-navy bg-off-white"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <ProjectImage image={project.image} link={project.link} />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-white text-navy">
        <ProjectContent {...project} />
      </div>
    </motion.div>
  );
};

export default ProjectSlide;
