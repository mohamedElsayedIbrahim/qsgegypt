import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

interface StatsListProps {
  stats: StatItem[];
}

const StatsList: React.FC<StatsListProps> = ({ stats }) => (
  <div className="flex flex-wrap justify-center gap-10 mb-12">
    {stats.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-40"
      >
        <div className="text-4xl font-bold text-primary">{item.value}</div>
        <div className="text-gray-700 mt-2 text-sm">{item.label}</div>
      </motion.div>
    ))}
  </div>
);

export default StatsList;
