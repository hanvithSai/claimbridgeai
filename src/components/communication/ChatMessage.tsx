import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

interface ChatMessageProps {
  message: string;
  time: string;
  isOutgoing?: boolean;
  status?: "sent" | "delivered" | "read";
  delay?: number;
}

export const ChatMessage = ({
  message,
  time,
  isOutgoing = false,
  status = "read",
  delay = 0,
}: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
          isOutgoing
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-card border border-border text-foreground rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        <div className={`flex items-center justify-end gap-1 mt-1 ${
          isOutgoing ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          <span className="text-[10px]">{time}</span>
          {isOutgoing && (
            status === "read" ? (
              <CheckCheck className="w-3.5 h-3.5" />
            ) : (
              <Check className="w-3.5 h-3.5" />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};
