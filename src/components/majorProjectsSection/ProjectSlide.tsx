import React from "react";
import { motion, type Variants } from "framer-motion";
import type { ProjectSlideProps } from "../../interfaces/Components";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index }) => {
  return (
    <motion.div
      custom={index}
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-stretch bg-white/5 backdrop-blur rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="w-full md:w-1/2">
        <ProjectImage image={project.image} link={project.link} />
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <ProjectContent {...project} />
      </div>
    </motion.div>
  );
};

export default ProjectSlide;
