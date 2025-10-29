import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
      {title}
    </h3>
    <div className="flex justify-center items-center gap-2 mb-10">
      <span className="w-8 h-1 bg-gray-800 rounded"></span>
      <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
      <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
      <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
    </div>
  </motion.div>
);

export default SectionTitle;
