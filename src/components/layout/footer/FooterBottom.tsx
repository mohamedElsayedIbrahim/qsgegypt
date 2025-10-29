import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../appVariants";
import { Icon } from "@iconify/react";

const FooterBottom: React.FC = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={0.5}
    className="border-t border-gray-300 mt-10 pt-4 text-sm text-center text-gray-200 bg-navy"
  >
    <div className="flex justify-center items-center gap-4 mb-2">
      <a
        href="https://www.linkedin.com/company/qsg-egypt"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition-colors"
      >
        <Icon icon="mdi:linkedin" className="w-5 h-5 inline" />
      </a>
      <a
        href="https://www.facebook.com/QSG.Egypt"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition-colors"
      >
        <Icon icon="mdi:facebook" className="w-5 h-5 inline" />
      </a>
    </div>

    <p>
      © 2025 QSG Group. All rights reserved. QSG and its logo are trademarks of QSG Group of Companies.
    </p>
    <p className="mt-2">
      Design by{" "}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:underline"
      >
        Mohamed Reiad
      </a>
    </p>
  </motion.div>
);

export default FooterBottom;
