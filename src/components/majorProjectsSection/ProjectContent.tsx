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
      className="text-navy"
    >
      {/* Category Link */}
      <a
        href={categoryLink}
        className="text-sm uppercase tracking-wide text-gold hover:text-navy transition-colors"
      >
        {category}
      </a>

      {/* Project Title */}
      <h3 className="text-2xl font-semibold mt-2 mb-3 text-navy">
        {title}
      </h3>

      {/* Description */}
      <p className="text-medi-gray)] mb-4 leading-relaxed">
        {description}
      </p>

      {/* Read More Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 border border-gold text-gold rounded hover:bg-gold hover:text-navy transition-all duration-300"
      >
        Read More →
      </a>
    </motion.div>
  );
};

export default ProjectContent;
