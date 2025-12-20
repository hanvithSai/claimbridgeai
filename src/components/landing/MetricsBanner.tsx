import { motion } from "framer-motion";

const metrics = [
  { value: "500+", label: "Claims/Day" },
  { value: "320hrs", label: "Saved Weekly" },
  { value: "4.8/5", label: "Satisfaction" },
  { value: "340%", label: "First Year ROI" },
];

export const MetricsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-hero rounded-2xl p-1"
    >
      <div className="bg-card/95 backdrop-blur rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-2xl md:text-3xl font-bold text-primary mb-1"
              >
                {metric.value}
              </motion.p>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
