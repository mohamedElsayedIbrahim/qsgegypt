import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

import Chairman from '../../../assets/Staff Photos/Ashraf-Yassin.png'

// Lazy-loaded subcomponents
const SectionTitle = lazy(() => import("../../../components/aboutSection/SectionTitle"));
const PatternImages = lazy(() => import("../../../components/aboutSection/PatternImages"));

// Simple fallback loader
const Loader: React.FC = () => (
  <div className="flex justify-center py-10">
    <div className="w-6 h-6 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-off-white overflow-hidden">
      <Suspense fallback={<Loader />}>
        <PatternImages />
      </Suspense>

      <div className="container mx-auto px-6 relative z-10">
        <Suspense fallback={<Loader />}>
          <SectionTitle title="Chairman’s Message" />
        </Suspense>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 100 }} // start 100px to the right, invisible
            whileInView={{ opacity: 1, x: 0 }} // slide into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={Chairman}
              alt="Chairman Ashraf Yassin"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>


          {/* Text */}
          <motion.div
            className="flex-1 text-medium-gray leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              At QSG, we are proud of the diversity of our business portfolio, the global reach of our operations, and—most importantly—the strength, capabilities and experience of our team and calibers.
            </p>
            <p className="mb-4">
              For more than 28 years, the Group has established its reputation as a trusted leader in introducing and providing independent third-party inspection services (TPI), in areas such as trade (buying and selling), revising specifications conformity in different trade activities, banks and their clients with credit facilities needs, in addition to delivering specialized technical and management consulting.
            </p>
            <p className="mb-4">
              Our people’s passion, commitment, dedication, and expertise, supported by visionary leadership, have enabled us to consistently deliver excellence and go beyond our clients’ expectations.
            </p>
            <p>
              Leading this Group is both an honor and a responsibility. Together, we will build on our legacy, embrace innovation, and drive sustainable growth as we move confidently toward the future.
            </p>

            <p className="text-navy mt-4 font-bold">
              Eng. Ashraf Yassin
              <br />
              Chairman and Managing Director 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
