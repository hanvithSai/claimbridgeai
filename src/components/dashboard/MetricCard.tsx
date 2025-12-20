import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  beforeValue: string;
  afterValue: string;
  improvement: string;
  icon: LucideIcon;
  delay?: number;
}

export const MetricCard = ({
  title,
  beforeValue,
  afterValue,
  improvement,
  icon: Icon,
  delay = 0,
}: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-success/10 text-success">
          {improvement}
        </span>
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground mb-4">{title}</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Before</p>
          <p className="text-lg font-semibold text-destructive">{beforeValue}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">After</p>
          <p className="text-lg font-semibold text-success">{afterValue}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: delay + 0.5 }}
            className="h-full bg-gradient-success rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
