import React from "react";
import { motion } from "framer-motion";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import ScrollToTopButton from "./ScrollToTopButton";
import { fadeUp } from "../../appVariants";
import { companyLinks, quickLinks, servicesLinks } from "../../../static/footerData";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f6f6] border-t-4 border-[#856130] relative overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-transparent to-[#f6f6f6]/90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <a href="https://www.domeint.com">
            <img
              src="https://www.domeint.com/data/logo/logo/dome-logo.png"
              alt="Dome Logo"
              className="mb-4 max-h-14"
            />
          </a>
          <img
            src="https://www.domeint.com/templates/project/image/BV_3Certification_cb58bb1b7a77867b2b4e7618bf76aee4.png"
            alt="Certification"
            className="max-h-16"
          />
        </motion.div>

        <FooterColumn title="Services We Provide" links={servicesLinks} delay={0.1} />
        <FooterColumn title="Company" links={companyLinks} delay={0.2} />
        <FooterColumn title="Quick Links" links={quickLinks} delay={0.3} />
        <FooterContact />
      </div>

      <FooterBottom />
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
