import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import type { StatCardProps, StatsListProps } from "../../interfaces/Components";

const StatsList: React.FC<StatsListProps> = ({ stats }) => (
  <div className="flex flex-wrap justify-center gap-10 mb-12">
    {stats.map((item, i) => (
      <StatCard key={i} value={item.value} label={item.label} delay={i * 0.2} />
    ))}
  </div>
);

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  // format with thousands separator
  const formatted = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString("en-US")
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      className="w-40 text-center group shadow-lg py-4"
    >
      {/* Count Number */}
      <motion.div
        className="
          text-4xl font-extrabold text-navy
          transition-colors duration-300
          group-hover:text-gold
        "
      >
        {formatted}
      </motion.div>

      {/* Label */}
      <div
        className="
          text-sm mt-2 font-medium text-medium-gray
          group-hover:text-navy
          transition-colors duration-300
        "
      >
        {label}
      </div>

      {/* Accent Bar */}
      <div
        className="
          mx-auto mt-3 w-10 h-1
          bg-gold
          group-hover:w-16
          transition-all duration-300
        "
      />
    </motion.div>
  );
};

export default StatsList;
