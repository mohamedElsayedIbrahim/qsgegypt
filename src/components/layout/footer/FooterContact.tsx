import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../appVariants";

const FooterContact: React.FC = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={0.4}
  >
    <h3 className="text-lg font-semibold mb-4 text-navy">Head Office</h3>
    <div className="space-y-4 text-gray-700">
      <div>
        <strong>Visit The Office</strong>
        <p>
          <a
            href="https://goo.gl/maps/N7J2NvqnWtpHn1CP9"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm hover:text-gold"
          >
            107, 1st Floor, Spectrum Building<br />
            Al Qataiyat Road, Dubai, UAE
          </a>
        </p>
      </div>

      <div>
        <strong>Phone Inquiry</strong>
        <p>
          <a href="tel:97143366144" className="hover:text-gold">
            +971 4 3366144
          </a>
        </p>
      </div>

      <div>
        <strong>Send Email</strong>
        <p>
          <a href="mailto:dome@domeint.com" className="hover:text-gold">
            dome@domeint.com
          </a>
        </p>
      </div>
    </div>
  </motion.div>
);

export default FooterContact;
