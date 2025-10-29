import React from "react";
import Banner from "./sections/Banner";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import NewsSection from "./sections/NewsSection";
import MajorProjectsSection from "./sections/MajorProjectsSection";
import ClientsSection from "./sections/ClientsSection";

const Home: React.FC = () => {
  return <>
  
  <Banner />
  <AboutSection />
  <ServicesSection />
  <MajorProjectsSection />
  <NewsSection/>
  <ClientsSection />
  
  </>;
};

export default Home;
