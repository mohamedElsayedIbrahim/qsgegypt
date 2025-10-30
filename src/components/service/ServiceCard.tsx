import React from "react";
import { motion, type Variants } from "framer-motion";
import type { SeriveProps } from "../../interfaces/Components";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const ServiceCard: React.FC<SeriveProps> = ({ service, index }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative group rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white py-4 text-center">
        <h4 className="text-gray-900 font-semibold text-[14px]">{service.title}</h4>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
