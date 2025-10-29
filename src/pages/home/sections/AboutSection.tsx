import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy-loaded subcomponents
const SectionTitle = lazy(() => import("../../../components/aboutSection/SectionTitle"));
// const StatsList = lazy(() => import("../../../components/aboutSection/StatsList"));
// const MapImage = lazy(() => import("../../../components/aboutSection/MapImage"));
const PatternImages = lazy(() => import("../../../components/aboutSection/PatternImages"));

// Simple fallback loader (can be replaced with shimmer)
const Loader: React.FC = () => (
  <div className="flex justify-center py-10">
    <div className="w-6 h-6 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutSection: React.FC = () => {
  // const stats = [
  //   { value: 26, label: "Years Serving Clients" },
  //   { value: 32000, label: "Projects Completed" },
  //   { value: 1000, label: "Employees" },
  // ];

  return (
    <section className="relative py-20 bg-off-white overflow-hidden">
      <Suspense fallback={<Loader />}>
        <PatternImages />
      </Suspense>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Suspense fallback={<Loader />}>
          <SectionTitle title="Chairman’s Message" />
        </Suspense>

        <motion.p
          className="max-w-3xl mx-auto text-medium-gray leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          At QSG, we are proud of the diversity of our business portfolio, the global reach of our operations, and—most importantly—the strength, capabilities and experience of our team and calibers.
          
          <br />
          <br />

For more than 28 years, the Group has established its reputation as a trusted leader in introducing and providing independent third-party inspection services (TPI) , in areas such as trade (buying and selling) revising the specifications conformity in different trade activities , banks and their clients with credit facilities needs , in addition to delivering specialized technical and management consulting.

<br />
<br />

Our people’s passion, commitment, dedication and expertise, supported by visionary leadership, have enabled us to consistently deliver excellence and go beyond our clients’ expectations.

<br />
<br />
Leading this Group is both an honor and a responsibility. Together, we will build on our legacy, embrace innovation, and drive sustainable growth as we move confidently toward the future.

        </motion.p>

        {/* <Suspense fallback={<Loader />}>
          <StatsList stats={stats} />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <MapImage />
        </Suspense> */}
      </div>
    </section>
  );
};

export default AboutSection;
