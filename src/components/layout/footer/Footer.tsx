import React from "react";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import ScrollToTopButton from "./ScrollToTopButton";
import { companyLinks, servicesLinks } from "../../../static/footerData";
import QSGLOGO from '../../../assets/QSG-Egypt.webp';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f6f6] border-t-4 border-[#856130] relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <a href="#">
            <img
              src={QSGLOGO}
              alt="QSG EGYPT"
              className="mb-4 max-h-50"
            />
          </a>
        </div>

        {/* Columns */}
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Services" links={servicesLinks} />

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <FooterContact />
        </div>
      </div>

      <FooterBottom />
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
