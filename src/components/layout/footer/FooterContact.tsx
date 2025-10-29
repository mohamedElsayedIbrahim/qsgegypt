import React from "react";

const FooterContact: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-center text-navy">Office Locations</h3>

    <div className="flex flex-col md:flex-row gap-6">

      {/* Alexandria Office */}
      <div className="flex-1 space-y-3 text-gray-700">
        <strong className="block text-md">Alexandria Office</strong>
        <p className="text-sm">
          42 Abdel Latif Al Sufani St., <br />Sidi Jaber<br />
          Alexandria - Egypt
        </p>
        <p>
          <strong>Tel:</strong>{" "}
          <a href="tel:+2035443445" className="hover:text-gold">
            +20 3 544 3445
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:inspect@qsgegypt.net" className="hover:text-gold">
            inspect@qsgegypt.net
          </a>
        </p>
      </div>

      {/* Cairo Office */}
      <div className="flex-1 space-y-3 text-gray-700">
        <strong className="block text-md">Cairo Office</strong>
        <p className="text-sm">
          4 A El-Saraya El-Kobra St., <br />Garden City<br />
          Cairo - Egypt
        </p>
        <p>
          <strong>Tel:</strong>{" "}
          <a href="tel:+20227923043" className="hover:text-gold">
            +20 2 2792 3043
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:qsg@qsg-egypt.net" className="hover:text-gold">
            qsg@qsg-egypt.net
          </a>
        </p>
      </div>

    </div>
  </div>
);

export default FooterContact;
