import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy-loaded subcomponents
const SectionTitle = lazy(() => import("../../../components/aboutSection/SectionTitle"));
const StatsList = lazy(() => import("../../../components/aboutSection/StatsList"));
const MapImage = lazy(() => import("../../../components/aboutSection/MapImage"));
const PatternImages = lazy(() => import("../../../components/aboutSection/PatternImages"));

// Simple fallback loader (can be replaced with shimmer)
const Loader: React.FC = () => (
  <div className="flex justify-center py-10">
    <div className="w-6 h-6 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutSection: React.FC = () => {
  const stats = [
    { value: 26, label: "Years Serving Clients" },
    { value: 32000, label: "Projects Completed" },
    { value: 1000, label: "Employees" },
  ];

  return (
    <section className="relative py-20 bg-off-white overflow-hidden">
      <Suspense fallback={<Loader />}>
        <PatternImages />
      </Suspense>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Suspense fallback={<Loader />}>
          <SectionTitle title="QSG Egypt Offices" />
        </Suspense>

        <motion.p
          className="max-w-3xl mx-auto text-medium-gray leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We have rapidly expanded our area of operations through the
          establishment of a network of strategically located offices in the
          UAE, Iraq, Yemen, Oman and Saudi Arabia.
          <br />
          <br />
          Dome’s management team in each country is led by experienced nationals
          with extensive local knowledge and a deep commitment to building
          strong, sustainable and profitable businesses.
        </motion.p>

        <Suspense fallback={<Loader />}>
          <StatsList stats={stats} />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <MapImage />
        </Suspense>
      </div>
    </section>
  );
};

export default AboutSection;
