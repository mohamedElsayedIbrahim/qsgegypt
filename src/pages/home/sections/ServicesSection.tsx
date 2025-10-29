import React from "react";
import { services } from "../../../static/servicesData";
import ServicesHeader from "../../../components/service/ServicesHeader";
import ServiceCard from "../../../components/service/ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative py-20 mt-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.domeint.com/templates/project/image/bg-image-5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-6">
        <ServicesHeader title="Our Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
