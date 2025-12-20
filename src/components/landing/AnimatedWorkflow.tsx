import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardList, 
  FileEdit, 
  Send, 
  UserCheck, 
  Clock,
  Share2,
  Bot,
  CheckSquare,
  Bell,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface WorkflowStepData {
  icon: LucideIcon;
  title: string;
  time: string;
  status: "pending" | "processing" | "complete" | "error";
}

const manualSteps: WorkflowStepData[] = [
  { icon: ClipboardList, title: "Patient Documentation", time: "4-6 hrs", status: "pending" },
  { icon: FileEdit, title: "Manual Data Entry", time: "2-4 hrs", status: "pending" },
  { icon: Send, title: "Document Submission", time: "1-2 days", status: "pending" },
  { icon: FileEdit, title: "Insurance Re-Entry", time: "4-8 hrs", status: "pending" },
  { icon: UserCheck, title: "Manual Review", time: "2-5 days", status: "pending" },
  { icon: Clock, title: "Discharge Delayed", time: "24-48 hrs", status: "pending" },
];

const aiSteps: WorkflowStepData[] = [
  { icon: Share2, title: "Auto Data Capture", time: "Instant", status: "pending" },
  { icon: Bot, title: "AI Processing", time: "2-3 min", status: "pending" },
  { icon: CheckSquare, title: "Auto Approval", time: "5-10 min", status: "pending" },
  { icon: Bell, title: "Instant Notification", time: "Instant", status: "pending" },
];

interface AnimatedWorkflowProps {
  type: "manual" | "ai";
  isActive: boolean;
  onComplete?: () => void;
}

export const AnimatedWorkflow = ({ type, isActive, onComplete }: AnimatedWorkflowProps) => {
  const steps = type === "manual" ? manualSteps : aiSteps;
  const [currentStep, setCurrentStep] = useState(-1);
  const [stepStatuses, setStepStatuses] = useState<WorkflowStepData["status"][]>(
    steps.map(() => "pending")
  );

  useEffect(() => {
    if (!isActive) {
      setCurrentStep(-1);
      setStepStatuses(steps.map(() => "pending"));
      return;
    }

    const interval = type === "manual" ? 1200 : 600;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          onComplete?.();
          return prev;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, steps.length, type, onComplete]);

  useEffect(() => {
    if (currentStep >= 0) {
      setStepStatuses((prev) => {
        const newStatuses = [...prev];
        // Mark current as processing
        if (currentStep < steps.length) {
          newStatuses[currentStep] = "processing";
        }
        // Mark previous as complete (or error for manual last step)
        if (currentStep > 0) {
          newStatuses[currentStep - 1] = type === "manual" && currentStep === steps.length 
            ? "error" 
            : "complete";
        }
        // Final step completion
        if (currentStep === steps.length - 1) {
          setTimeout(() => {
            setStepStatuses((s) => {
              const updated = [...s];
              updated[currentStep] = type === "manual" ? "error" : "complete";
              return updated;
            });
          }, type === "manual" ? 1000 : 500);
        }
        return newStatuses;
      });
    }
  }, [currentStep, steps.length, type]);

  const getStatusIcon = (status: WorkflowStepData["status"], Icon: LucideIcon) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "error":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "processing":
        return <Icon className="w-4 h-4 text-primary animate-pulse" />;
      default:
        return <Icon className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: WorkflowStepData["status"]) => {
    switch (status) {
      case "complete":
        return "border-success bg-success/10";
      case "error":
        return "border-destructive bg-destructive/10";
      case "processing":
        return "border-primary bg-primary/10 shadow-glow";
      default:
        return "border-border bg-card";
    }
  };

  return (
    <div className="space-y-2">
      {steps.map((step, index) => {
        const status = stepStatuses[index];
        const Icon = step.icon;
        
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0.5, x: -10 }}
            animate={{ 
              opacity: status === "pending" ? 0.5 : 1, 
              x: 0,
              scale: status === "processing" ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${getStatusColor(status)}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              status === "processing" ? "bg-primary/20" : "bg-muted"
            }`}>
              {getStatusIcon(status, Icon)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${
                status === "pending" ? "text-muted-foreground" : "text-foreground"
              }`}>
                {step.title}
              </p>
            </div>
            
            <span className={`text-xs font-medium whitespace-nowrap ${
              type === "manual" ? "text-destructive" : "text-success"
            }`}>
              {step.time}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export const WorkflowComparison = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);

  const restart = () => {
    setKey((k) => k + 1);
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Manual Workflow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-destructive/20 p-5 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Manual Process</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-destructive font-medium">5-7 days</span>
                <span className="text-[10px] text-muted-foreground">• High error rate</span>
              </div>
            </div>
          </div>
          
          <AnimatedWorkflow key={`manual-${key}`} type="manual" isActive={isPlaying} />
          
          <div className="mt-4 pt-3 border-t border-destructive/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-destructive" />
              <span className="text-xs text-muted-foreground">Patient waiting</span>
            </div>
            <span className="text-xs font-semibold text-destructive">Delayed Discharge</span>
          </div>
        </motion.div>

        {/* AI Workflow */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-success/30 p-5 shadow-card relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-success opacity-10 rounded-bl-full" />
          
          <div className="flex items-center gap-3 mb-4 relative">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI-Powered</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-success font-medium">15-30 min</span>
                <span className="text-[10px] text-muted-foreground">• Near-zero errors</span>
              </div>
            </div>
          </div>
          
          <AnimatedWorkflow key={`ai-${key}`} type="ai" isActive={isPlaying} />
          
          <div className="mt-4 pt-3 border-t border-success/20 flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground">Patient notified</span>
            </div>
            <span className="text-xs font-semibold text-success">Instant Discharge</span>
          </div>
        </motion.div>
      </div>
      
      {/* Replay Button */}
      <div className="flex justify-center mt-6">
        <Button variant="outline" size="sm" onClick={restart} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Replay Animation
        </Button>
      </div>
    </div>
  );
};
