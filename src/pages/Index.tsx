import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { WorkflowComparison } from "@/components/landing/AnimatedWorkflow";
import { StatsSection } from "@/components/landing/StatsSection";
import { MetricsBanner } from "@/components/landing/MetricsBanner";
import { 
  ArrowRight, 
  FileText, 
  RefreshCw, 
  Clock, 
  XCircle,
  Bot,
  Activity,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";

const problemItems = [
  { icon: FileText, text: "Manual data entry at every step", color: "text-destructive" },
  { icon: RefreshCw, text: "Insurance teams re-type all details", color: "text-destructive" },
  { icon: Clock, text: "Approval delays of days or weeks", color: "text-destructive" },
  { icon: XCircle, text: "Patient discharge held up", color: "text-destructive" },
];

const features = [
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Claims processed in minutes, not days. AI handles data extraction and validation automatically.",
  },
  {
    icon: Shield,
    title: "Reduced Errors",
    description: "Eliminate manual re-entry mistakes. AI ensures accuracy and consistency across all claims.",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Rule-based and ML-powered approvals for straightforward cases. Humans handle only exceptions.",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Workflow Transformation
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Reimagining Insurance Claims
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                in Hospital Settings
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform manual, error-prone insurance claims processing into an intelligent, 
              automated workflow that reduces delays and accelerates patient discharge.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/workflow">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                  Explore Workflow
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="gap-2">
                  <Activity className="w-4 h-4" />
                  View Impact Metrics
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <StatsSection />
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {problemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-background rounded-xl p-5 border border-destructive/20 shadow-card hover:shadow-card-hover transition-all"
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

      {/* Animated Workflow Comparison */}
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
              Live Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Watch the Transformation in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how AI transforms every step of the claims process in real-time.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <WorkflowComparison />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-success/10 text-success mb-4 inline-block">
              Key Benefits
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why AI-Powered Claims Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Real-World Impact Numbers
            </h2>
          </motion.div>
          <MetricsBanner />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              <Activity className="w-4 h-4" />
              Interactive Demo
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to See the Full Workflow?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Explore our detailed workflow simulation and see exactly how AI 
              transforms each step of the claims process.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/workflow">
                <Button size="lg" variant="secondary" className="gap-2 shadow-lg">
                  Start Interactive Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ai-logic">
                <Button size="lg" variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10">
                  <Bot className="w-4 h-4" />
                  Learn How AI Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
