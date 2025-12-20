import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { WorkflowStep } from "@/components/workflow/WorkflowStep";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ClipboardList,
  FileEdit,
  Send,
  UserCheck,
  Clock,
  Share2,
  Bot,
  CheckSquare,
  Eye,
  Bell,
} from "lucide-react";

const manualSteps = [
  {
    step: 1,
    title: "Patient Admission & Treatment",
    description: "Patient is admitted, treated, and clinical documentation is created manually by hospital staff.",
    icon: ClipboardList,
    time: "4-6 hours",
    effort: "high" as const,
    risk: "medium" as const,
  },
  {
    step: 2,
    title: "Manual Document Preparation",
    description: "Hospital claims desk manually collects, organizes, and prepares all insurance documents, often re-entering data.",
    icon: FileEdit,
    time: "2-4 hours",
    effort: "high" as const,
    risk: "high" as const,
  },
  {
    step: 3,
    title: "Physical Document Submission",
    description: "Documents are sent via fax, email, or physical courier to the insurance company.",
    icon: Send,
    time: "1-2 days",
    effort: "medium" as const,
    risk: "high" as const,
  },
  {
    step: 4,
    title: "Insurance Team Re-Entry",
    description: "Insurance agents manually re-type all information from received documents into their systems.",
    icon: FileEdit,
    time: "4-8 hours",
    effort: "high" as const,
    risk: "high" as const,
  },
  {
    step: 5,
    title: "Manual Review & Approval",
    description: "Claims undergo manual review, often requiring back-and-forth communication for clarifications.",
    icon: UserCheck,
    time: "2-5 days",
    effort: "high" as const,
    risk: "high" as const,
  },
  {
    step: 6,
    title: "Delayed Patient Discharge",
    description: "Patient discharge is held pending insurance approval, causing extended hospital stays.",
    icon: Clock,
    time: "12-48 hours delay",
    effort: "medium" as const,
    risk: "high" as const,
  },
];

const aiSteps = [
  {
    step: 1,
    title: "Automated Data Capture",
    description: "Hospital EHR automatically shares structured patient and treatment data via secure API integration.",
    icon: Share2,
    time: "Instant",
    effort: "low" as const,
    risk: "low" as const,
  },
  {
    step: 2,
    title: "AI Data Structuring",
    description: "AI engine structures claims data, validates completeness, and auto-fills required insurance fields.",
    icon: Bot,
    time: "2-3 minutes",
    effort: "low" as const,
    risk: "low" as const,
  },
  {
    step: 3,
    title: "Rule-Based Auto-Approval",
    description: "Straightforward claims matching predefined rules are automatically approved without human intervention.",
    icon: CheckSquare,
    time: "5-10 minutes",
    effort: "low" as const,
    risk: "low" as const,
  },
  {
    step: 4,
    title: "Exception Flagging",
    description: "Only complex or edge cases are flagged for human review, with AI-generated summaries and recommendations.",
    icon: Eye,
    time: "10-15 minutes",
    effort: "medium" as const,
    risk: "low" as const,
  },
  {
    step: 5,
    title: "Instant Notification",
    description: "Approval status is instantly communicated to hospital and patient via automated notifications.",
    icon: Bell,
    time: "Instant",
    effort: "low" as const,
    risk: "low" as const,
  },
];

const WorkflowPage = () => {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Workflow Simulation"
            title="Step-by-Step Process Comparison"
            description="Explore each step of the claims workflow and see how AI automation transforms the process."
          />

          <div className="max-w-3xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="manual" className="gap-2">
                  <Clock className="w-4 h-4" />
                  Current Manual Workflow
                </TabsTrigger>
                <TabsTrigger value="ai" className="gap-2">
                  <Bot className="w-4 h-4" />
                  AI-Redesigned Workflow
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="manual" className="mt-0">
                  <motion.div
                    key="manual"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Summary Card */}
                    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                          <Clock className="w-4 h-4 text-destructive" />
                        </div>
                        <h3 className="font-semibold text-foreground">Manual Process Summary</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-destructive">5-7 days</p>
                          <p className="text-xs text-muted-foreground">Total Time</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-destructive">12+</p>
                          <p className="text-xs text-muted-foreground">Human Touchpoints</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-destructive">35%</p>
                          <p className="text-xs text-muted-foreground">Error Rate</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-0">
                      {manualSteps.map((step, index) => (
                        <WorkflowStep
                          key={step.step}
                          {...step}
                          isManual={true}
                          isLast={index === manualSteps.length - 1}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="ai" className="mt-0">
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Summary Card */}
                    <div className="bg-success/5 border border-success/20 rounded-xl p-5 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-success" />
                        </div>
                        <h3 className="font-semibold text-foreground">AI-Powered Process Summary</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-success">15-30 min</p>
                          <p className="text-xs text-muted-foreground">Total Time</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-success">2-3</p>
                          <p className="text-xs text-muted-foreground">Human Touchpoints</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-success">&lt;2%</p>
                          <p className="text-xs text-muted-foreground">Error Rate</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-0">
                      {aiSteps.map((step, index) => (
                        <WorkflowStep
                          key={step.step}
                          {...step}
                          isManual={false}
                          isLast={index === aiSteps.length - 1}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WorkflowPage;
