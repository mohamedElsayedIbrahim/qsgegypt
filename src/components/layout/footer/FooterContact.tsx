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
    <h3 className="text-lg font-semibold mb-4 text-navy">Office Locations</h3>
    <div className="space-y-4 text-gray-700">
      <div>
        <strong>Visit The Office</strong>
        <p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm hover:text-gold"
          >
            107, 1st Floor, Adam Building<br />
            street Road, city, Country
          </a>
        </p>
      </div>

      <div>
        <strong>Phone Inquiry</strong>
        <p>
          <a href="tel:201212341234" className="hover:text-gold">
            +20 012 1234 1234
          </a>
        </p>
      </div>

      <div>
        <strong>Send Email</strong>
        <p>
          <a href="mailto:info@mail.com" className="hover:text-gold">
            info@mail.com
          </a>
        </p>
      </div>
    </div>
  </motion.div>
);

export default FooterContact;
