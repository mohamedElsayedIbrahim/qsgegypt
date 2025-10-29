import React, { Suspense } from "react";

// Lazy load sections
const Banner = React.lazy(() => import("./sections/Banner"));
const AboutSection = React.lazy(() => import("./sections/AboutSection"));
const ServicesSection = React.lazy(() => import("./sections/ServicesSection"));
const MajorProjectsSection = React.lazy(() => import("./sections/MajorProjectsSection"));
const NewsSection = React.lazy(() => import("./sections/NewsSection"));
const ClientsSection = React.lazy(() => import("./sections/ClientsSection"));

const Home: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <MajorProjectsSection />
      <NewsSection />
    </Suspense>
  );
};

export default Home;
