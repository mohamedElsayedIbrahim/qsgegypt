import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../appVariants";

const FooterBottom: React.FC = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={0.5}
    className="border-t border-gray-300 mt-10 pt-4 text-sm text-center text-gray-600"
  >
    <p>
      © 2018–2025 Dome Group. All rights reserved. DOME and its logo are trademarks of Dome Group of Companies.
    </p>
    <p className="mt-2">
      Design by{" "}
      <a
        href="https://www.redspider.ae/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:underline"
      >
        Red Spider
      </a>
    </p>
  </motion.div>
);

export default FooterBottom;
