import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { clients } from "../../../static/clientData";

const ClientsSection: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-off-white" style={{ marginTop: 80 }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center items-center mb-4 space-x-2">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="w-6 h-1 bg-gold rounded"></span>
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="w-2 h-2 bg-gold rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            <a href="#" className="hover:text-gold transition-colors">
              Our Clients
            </a>
          </h2>
        </motion.div>

        {/* Responsive Logo Carousel */}
        <Slider {...settings}>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center px-4 py-2 md:py-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.img}
                alt={client.alt}
                className="max-h-10 sm:max-h-14 md:max-h-16 lg:max-h-20 xl:max-h-24 object-contain w-auto mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
