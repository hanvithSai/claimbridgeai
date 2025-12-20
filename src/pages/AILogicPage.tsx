import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Bot,
  Brain,
  Shield,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Users,
  Workflow,
  Scale,
} from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Data Structuring",
    description: "AI parses unstructured medical documents and extracts key information into standardized claim fields.",
    examples: ["Diagnosis codes (ICD-10)", "Procedure codes (CPT)", "Treatment dates", "Provider information"],
  },
  {
    icon: CheckCircle2,
    title: "Rule-Based Validation",
    description: "Claims are checked against predefined insurance rules and policy terms for automatic approval.",
    examples: ["Policy coverage verification", "Pre-authorization matching", "Benefit limit checks", "Network provider validation"],
  },
  {
    icon: Lightbulb,
    title: "ML-Powered Analysis",
    description: "Machine learning models identify patterns and predict claim outcomes based on historical data.",
    examples: ["Fraud detection patterns", "Claim approval probability", "Document completeness scoring", "Risk assessment"],
  },
  {
    icon: AlertTriangle,
    title: "Exception Flagging",
    description: "Complex or unusual cases are flagged for human review with AI-generated summaries and recommendations.",
    examples: ["High-value claims", "Unusual procedure combinations", "Policy edge cases", "Potential fraud indicators"],
  },
];

const humanRoles = [
  {
    role: "Claims Specialist",
    responsibility: "Reviews flagged exceptions and makes final decisions on complex cases",
    aiSupport: "Receives AI-generated case summaries, risk scores, and approval recommendations",
  },
  {
    role: "Medical Reviewer",
    responsibility: "Validates medical necessity for flagged high-cost procedures",
    aiSupport: "Gets AI-compiled patient history, treatment patterns, and clinical guidelines",
  },
  {
    role: "Fraud Analyst",
    responsibility: "Investigates AI-flagged suspicious patterns",
    aiSupport: "Receives anomaly reports, pattern analysis, and network connection maps",
  },
];

const safetyReasons = [
  {
    icon: Scale,
    title: "Accountability",
    description: "Humans maintain final accountability for decisions affecting patient care and financial outcomes.",
  },
  {
    icon: Eye,
    title: "Edge Case Handling",
    description: "Complex situations often require nuanced judgment that current AI cannot reliably provide.",
  },
  {
    icon: Shield,
    title: "Error Recovery",
    description: "Human oversight catches AI errors before they impact patients, maintaining system integrity.",
  },
  {
    icon: Users,
    title: "Patient Trust",
    description: "Patients and providers trust systems where humans remain in the decision loop for important matters.",
  },
];

const AILogicPage = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="AI Logic Explained"
            title="How AI and Humans Work Together"
            description="Understanding the intelligent division of labor between AI automation and human expertise."
          />

          {/* AI Does Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">What AI Does</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {aiCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {capability.examples.map((example) => (
                            <span
                              key={example}
                              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Human Roles Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
              <h2 className="text-xl font-bold text-foreground">What Humans Do</h2>
            </motion.div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {humanRoles.map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.responsibility}</p>
                    <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                      <p className="text-xs text-success font-medium mb-1">AI Support:</p>
                      <p className="text-xs text-muted-foreground">{item.aiSupport}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Why This Is Safer Section */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Why This Is Safer Than Full Automation</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {safetyReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-5 border border-border shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-card rounded-2xl border border-border p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Decision Flow</h3>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { label: "Claim Submitted", sub: "100% of claims", color: "bg-secondary" },
                  { label: "AI Processing", sub: "Validation & scoring", color: "bg-primary/10" },
                  { label: "Auto-Approved", sub: "~85% of claims", color: "bg-success/10" },
                  { label: "Human Review", sub: "~15% flagged", color: "bg-warning/10" },
                  { label: "Final Decision", sub: "100% resolved", color: "bg-accent/10" },
                ].map((step, index, arr) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className={`${step.color} rounded-xl p-4 text-center min-w-[140px]`}>
                      <p className="text-sm font-semibold text-foreground">{step.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{step.sub}</p>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="hidden md:block w-8 h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AILogicPage;
