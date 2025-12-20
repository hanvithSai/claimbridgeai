import { motion } from "framer-motion";
import { Clock, Users, AlertTriangle, CheckCircle2, ArrowDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  time: string;
  effort: "high" | "medium" | "low";
  risk: "high" | "medium" | "low";
  isManual?: boolean;
  isLast?: boolean;
  delay?: number;
}

const effortConfig = {
  high: { label: "High Effort", color: "text-destructive", bg: "bg-destructive/10" },
  medium: { label: "Medium Effort", color: "text-warning", bg: "bg-warning/10" },
  low: { label: "Low Effort", color: "text-success", bg: "bg-success/10" },
};

const riskConfig = {
  high: { label: "High Risk", color: "text-destructive", bg: "bg-destructive/10" },
  medium: { label: "Medium Risk", color: "text-warning", bg: "bg-warning/10" },
  low: { label: "Low Risk", color: "text-success", bg: "bg-success/10" },
};

export const WorkflowStep = ({
  step,
  title,
  description,
  icon: Icon,
  time,
  effort,
  risk,
  isManual = true,
  isLast = false,
  delay = 0,
}: WorkflowStepProps) => {
  const effortStyle = effortConfig[effort];
  const riskStyle = riskConfig[risk];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className={`bg-card rounded-xl p-5 border shadow-card hover:shadow-card-hover transition-shadow ${
        isManual ? "border-border" : "border-success/30"
      }`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
            isManual ? "bg-secondary" : "bg-success/10"
          }`}>
            <Icon className={`w-6 h-6 ${isManual ? "text-secondary-foreground" : "text-success"}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                isManual ? "bg-muted text-muted-foreground" : "bg-success/10 text-success"
              }`}>
                Step {step}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className={isManual ? "text-destructive font-medium" : "text-success font-medium"}>
                  {time}
                </span>
              </div>
              
              <div className={`flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full ${effortStyle.bg}`}>
                <Users className={`w-3.5 h-3.5 ${effortStyle.color}`} />
                <span className={`${effortStyle.color} font-medium`}>{effortStyle.label}</span>
              </div>
              
              <div className={`flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full ${riskStyle.bg}`}>
                {risk === "low" ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${riskStyle.color}`} />
                ) : (
                  <AlertTriangle className={`w-3.5 h-3.5 ${riskStyle.color}`} />
                )}
                <span className={`${riskStyle.color} font-medium`}>{riskStyle.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!isLast && (
        <div className="flex justify-center py-2">
          <ArrowDown className={`w-5 h-5 ${isManual ? "text-muted-foreground" : "text-success"}`} />
        </div>
      )}
    </motion.div>
  );
};
