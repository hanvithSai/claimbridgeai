import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Clock,
  Users,
  Timer,
  DollarSign,
  XCircle,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const metrics = [
  {
    title: "Average Claim Approval Time",
    beforeValue: "5-7 days",
    afterValue: "25 min",
    improvement: "99% faster",
    icon: Clock,
  },
  {
    title: "Human Touchpoints",
    beforeValue: "12+",
    afterValue: "2-3",
    improvement: "80% less",
    icon: Users,
  },
  {
    title: "Patient Discharge Delay",
    beforeValue: "24-48 hrs",
    afterValue: "< 1 hr",
    improvement: "96% reduction",
    icon: Timer,
  },
  {
    title: "Cost Per Claim",
    beforeValue: "$85",
    afterValue: "$12",
    improvement: "$73 saved",
    icon: DollarSign,
  },
  {
    title: "Claim Rejection Rate",
    beforeValue: "18%",
    afterValue: "4%",
    improvement: "78% fewer",
    icon: XCircle,
  },
  {
    title: "First-Time Approval Rate",
    beforeValue: "62%",
    afterValue: "94%",
    improvement: "+32% increase",
    icon: TrendingUp,
  },
];

const comparisonData = [
  { category: "Data Entry Errors", before: 35, after: 2 },
  { category: "Duplicate Work", before: 85, after: 5 },
  { category: "Patient Satisfaction", before: 45, after: 92 },
  { category: "Staff Efficiency", before: 30, after: 85 },
];

const DashboardPage = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Impact Dashboard"
            title="Measurable Transformation Results"
            description="Quantified improvements across all key performance indicators after AI workflow implementation."
          />

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.title}
                {...metric}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Comparison Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Before vs After Comparison</h3>
              <p className="text-sm text-muted-foreground">Percentage scores across key operational metrics</p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-destructive" />
                          <span className="text-muted-foreground">Before: </span>
                          <span className="font-medium text-destructive">{item.before}%</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-success" />
                          <span className="text-muted-foreground">After: </span>
                          <span className="font-medium text-success">{item.after}%</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.before}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full bg-destructive/30 rounded-full"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.after}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        className="h-full bg-gradient-success rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/30" />
                  <span className="text-xs text-muted-foreground">Before AI (problems)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-success" />
                  <span className="text-xs text-muted-foreground">After AI (improvements)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Claims Processed Daily", value: "500+", sublabel: "vs 50 manual" },
                { label: "Hours Saved Weekly", value: "320", sublabel: "per claims desk" },
                { label: "Patient Satisfaction", value: "4.8/5", sublabel: "up from 2.9/5" },
                { label: "ROI First Year", value: "340%", sublabel: "projected" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-primary/5 rounded-xl p-4 text-center border border-primary/10"
                >
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs font-medium text-foreground">{stat.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DashboardPage;
