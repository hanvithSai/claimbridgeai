import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};
