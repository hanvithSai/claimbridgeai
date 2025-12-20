import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Users, DollarSign, CheckCircle2 } from "lucide-react";

const stats = [
  {
    label: "Faster Processing",
    value: "99%",
    change: "5-7 days → 30 min",
    trend: "up",
    icon: Clock,
  },
  {
    label: "Fewer Touchpoints",
    value: "80%",
    change: "12+ → 2-3 people",
    trend: "down",
    icon: Users,
  },
  {
    label: "Cost Reduction",
    value: "$73",
    change: "Saved per claim",
    trend: "down",
    icon: DollarSign,
  },
  {
    label: "First-Pass Approval",
    value: "94%",
    change: "Up from 62%",
    trend: "up",
    icon: CheckCircle2,
  },
];

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === "up" ? "text-success" : "text-success"
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>Improved</span>
              </div>
            </div>
            
            <motion.p
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
              className="text-3xl font-bold text-foreground mb-1"
            >
              {stat.value}
            </motion.p>
            
            <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
