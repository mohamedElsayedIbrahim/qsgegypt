import React from "react";
import { motion } from "framer-motion";
import type { ProjectImageProps } from "../../interfaces/Components";



const ProjectImage: React.FC<ProjectImageProps> = ({ image, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={image}
        alt=""
        loading="lazy"
        className="w-full h-80 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  );
};

export default ProjectImage;
