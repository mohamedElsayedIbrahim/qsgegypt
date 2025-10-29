import { motion } from "framer-motion";

const MAP_URL =
  "https://www.domeint.com/templates/project/image/Map_static-02.png";

const MapImage: React.FC = () => (
  <motion.a
    href={MAP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    viewport={{ once: true }}
    className="inline-block shadow-lg hover:shadow-2xl transition"
  >
    <img
      src={MAP_URL}
      alt="Dome Group Offices Map"
      className="rounded-lg w-full max-w-3xl mx-auto"
    />
  </motion.a>
);

export default MapImage;
