import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, BarChart3, MessageSquare, Lightbulb, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Overview", icon: Home },
  { path: "/workflow", label: "Workflow", icon: Activity },
  { path: "/dashboard", label: "Impact", icon: BarChart3 },
  { path: "/communication", label: "Communication", icon: MessageSquare },
  { path: "/ai-logic", label: "AI Logic", icon: Lightbulb },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">ClaimsFlow AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span className={`flex items-center gap-2 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-1">
            {navItems.slice(0, 4).map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-lg transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
