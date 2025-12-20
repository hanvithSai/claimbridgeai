import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { ChatMessage } from "@/components/communication/ChatMessage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Bell, 
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  Smartphone
} from "lucide-react";

const conversationScenarios = {
  approval: [
    {
      message: "Good morning! This is ClaimsFlow AI from City General Hospital.",
      time: "10:00 AM",
      isOutgoing: true,
    },
    {
      message: "Your insurance claim for Patient ID #45892 has been approved.",
      time: "10:00 AM",
      isOutgoing: true,
    },
    {
      message: "Claim Amount: $4,250.00\nApproval Code: INS-2024-78453\nPatient discharge scheduled: Today at 2:00 PM",
      time: "10:00 AM",
      isOutgoing: true,
    },
    {
      message: "Thank you! That's wonderful news. We'll prepare for discharge.",
      time: "10:02 AM",
      isOutgoing: false,
    },
    {
      message: "Great! Discharge documents will be ready at the front desk. Have a healthy recovery! 💙",
      time: "10:02 AM",
      isOutgoing: true,
    },
  ],
  missingDoc: [
    {
      message: "Alert: Insurance claim #INS-2024-78460 requires additional documentation.",
      time: "9:15 AM",
      isOutgoing: true,
    },
    {
      message: "Missing Document: Pre-authorization form for MRI scan\nRequired by: Today 5:00 PM",
      time: "9:15 AM",
      isOutgoing: true,
    },
    {
      message: "Click here to upload: [Secure Upload Portal]",
      time: "9:15 AM",
      isOutgoing: true,
    },
    {
      message: "I'll get that from the doctor immediately. Thanks for the quick notification!",
      time: "9:18 AM",
      isOutgoing: false,
    },
    {
      message: "Document received and verified. Claim processing resumed. ETA: 15 minutes.",
      time: "9:45 AM",
      isOutgoing: true,
    },
  ],
  statusUpdate: [
    {
      message: "Status Update: Claim #INS-2024-78465",
      time: "11:30 AM",
      isOutgoing: true,
    },
    {
      message: "Current Status: Under Review\nProgress: 80% complete\nEstimated completion: 10 minutes",
      time: "11:30 AM",
      isOutgoing: true,
    },
    {
      message: "Your claim is being reviewed by our AI system. No action required from your side.",
      time: "11:30 AM",
      isOutgoing: true,
    },
    {
      message: "Thanks for keeping us updated!",
      time: "11:32 AM",
      isOutgoing: false,
    },
    {
      message: "✅ APPROVED!\n\nClaim #INS-2024-78465 has been approved.\nAmount: $2,890.00\nDischarge can proceed immediately.",
      time: "11:38 AM",
      isOutgoing: true,
    },
  ],
};

type ScenarioKey = keyof typeof conversationScenarios;

const scenarioInfo = {
  approval: {
    title: "Claim Approval",
    description: "Instant approval notification with discharge scheduling",
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
  },
  missingDoc: {
    title: "Missing Document Alert",
    description: "Proactive notification for required documentation",
    icon: AlertCircle,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  statusUpdate: {
    title: "Real-time Status",
    description: "Live updates on claim processing progress",
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

const CommunicationPage = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("approval");
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const messages = conversationScenarios[activeScenario];

  useEffect(() => {
    setVisibleMessages(0);
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= messages.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [activeScenario, messages.length]);

  const restartAnimation = () => {
    setVisibleMessages(0);
  };

  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Communication Demo"
            title="Real-Time Patient Notifications"
            description="See how automated messaging keeps patients and families informed throughout the claims process."
          />

          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Scenario Selector */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notification Scenarios
              </h3>
              
              {(Object.keys(scenarioInfo) as ScenarioKey[]).map((key) => {
                const info = scenarioInfo[key];
                const Icon = info.icon;
                const isActive = activeScenario === key;
                
                return (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveScenario(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-card"
                        : "border-border bg-card hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${info.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{info.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}

              <Button
                variant="outline"
                size="sm"
                onClick={restartAnimation}
                className="w-full mt-4 gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Replay Animation
              </Button>
            </div>

            {/* Phone Mockup */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-sm"
              >
                {/* Phone Frame */}
                <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-background rounded-[2.25rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-card px-6 py-2 flex items-center justify-between border-b border-border">
                      <span className="text-xs text-muted-foreground">9:41</span>
                      <div className="flex items-center gap-1">
                        <Smartphone className="w-3 h-3 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Chat Header */}
                    <div className="bg-card px-4 py-3 border-b border-border flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">ClaimsFlow AI</h4>
                        <p className="text-[10px] text-success flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                          Online - Instant responses
                        </p>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-background">
                      {messages.slice(0, visibleMessages).map((msg, index) => (
                        <ChatMessage
                          key={`${activeScenario}-${index}`}
                          {...msg}
                          delay={0}
                        />
                      ))}
                      
                      {visibleMessages < messages.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-card border border-border rounded-2xl px-4 py-2">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Input Area */}
                    <div className="bg-card px-4 py-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full px-4 py-2">
                          <span className="text-sm text-muted-foreground">Type a message...</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                >
                  Live Demo
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CommunicationPage;
