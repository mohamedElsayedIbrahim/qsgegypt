import React from "react";
import { motion } from "framer-motion";
import type { FooterColumnProps } from "../../../interfaces/Components";
import { fadeUp } from "../../appVariants";


const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={delay}
  >
    <h3 className="text-lg font-semibold mb-4 text-navy">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default FooterColumn;
