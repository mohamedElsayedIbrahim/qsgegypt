import React from "react";
import { motion } from "framer-motion";
import type { ProjectContentProps } from "../../interfaces/Components";

const ProjectContent: React.FC<ProjectContentProps> = ({
  category,
  categoryLink,
  title,
  description,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-white"
    >
      <a
        href={categoryLink}
        className="text-sm uppercase tracking-wide text-yellow-400 hover:underline"
      >
        {category}
      </a>

      <h3 className="text-2xl font-semibold mt-2 mb-3">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded transition-all duration-300"
      >
        Read More →
      </a>
    </motion.div>
  );
};

export default ProjectContent;
