import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  FileText, 
  RefreshCw, 
  Clock, 
  XCircle,
  Zap,
  CheckCircle2,
  Bot,
  ArrowDown,
  Activity
} from "lucide-react";

const problemItems = [
  { icon: FileText, text: "Manual data entry at every step", color: "text-destructive" },
  { icon: RefreshCw, text: "Insurance teams re-type all details", color: "text-destructive" },
  { icon: Clock, text: "Approval delays of days or weeks", color: "text-destructive" },
  { icon: XCircle, text: "Patient discharge held up", color: "text-destructive" },
];

const manualWorkflowSteps = [
  "Patient documents collected manually",
  "Data entered into hospital system",
  "Physical forms sent to insurance",
  "Insurance re-types all information",
  "Manual review and back-and-forth",
  "Approval after multiple iterations",
  "Patient finally discharged",
];

const aiWorkflowSteps = [
  "Auto-capture from hospital systems",
  "AI structures and validates data",
  "Instant API transmission",
  "ML-based auto-approval",
  "Only exceptions reviewed",
  "Real-time status updates",
  "Immediate patient discharge",
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Workflow Transformation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Reimagining Insurance Claims
              <span className="block text-primary">in Hospital Settings</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform manual, error-prone insurance claims processing into an intelligent, 
              automated workflow that reduces delays and accelerates patient discharge.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/workflow">
                <Button size="lg" className="gap-2">
                  Explore Workflow
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg">
                  View Impact Metrics
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-destructive/10 text-destructive mb-4 inline-block">
              The Problem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Current Claims Processing is Broken
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manual processes create bottlenecks, errors, and frustrating delays for everyone involved.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {problemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-5 border border-border shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 inline-block">
              The Transformation
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              From Manual Chaos to Intelligent Automation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how AI transforms every step of the claims process.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Manual Workflow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Current Manual Workflow</h3>
                  <p className="text-xs text-destructive font-medium">5-7 days average</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {manualWorkflowSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </div>
                    <span className="text-sm text-foreground">{step}</span>
                    {index < manualWorkflowSteps.length - 1 && (
                      <ArrowDown className="w-3 h-3 text-muted-foreground ml-auto opacity-50" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Total Time</span>
                <span className="text-sm font-semibold text-destructive">120-168 hours</span>
              </div>
            </motion.div>

            {/* AI Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl border border-success/30 p-6 shadow-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-success opacity-10 rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI-Redesigned Workflow</h3>
                  <p className="text-xs text-success font-medium">Under 30 minutes</p>
                </div>
              </div>
              
              <div className="space-y-3 relative">
                {aiWorkflowSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-success/20 flex items-center justify-between relative">
                <span className="text-xs text-muted-foreground">Total Time</span>
                <span className="text-sm font-semibold text-success">15-30 minutes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Interactive Demo
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to See the Transformation?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Explore our interactive workflow simulation and see exactly how AI 
              transforms each step of the claims process.
            </p>
            
            <Link to="/workflow">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Interactive Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
