import React from "react";
import { Icon } from "@iconify/react";

const FooterBottom: React.FC = () => (
  <footer className="bg-navy border-t border-gray-700 mt-10 text-white">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/company/qsgegypt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition-colors"
        >
          <Icon icon="mdi:linkedin" className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/qsgegypt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition-colors"
        >
          <Icon icon="mdi:facebook" className="w-6 h-6" />
        </a>
      </div>

      {/* Text */}
      <div className="text-center md:text-right text-sm">
        <p>
          © 2025 QSG Egypt | Website Development by 
        <span className="mt-1">
          {" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            MRCO-Egypt
          </a>
        </span>
        </p>

      </div>

    </div>
  </footer>
);

export default FooterBottom;
