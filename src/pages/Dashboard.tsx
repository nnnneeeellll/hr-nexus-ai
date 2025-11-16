import { Link } from "react-router-dom";
import { Users, MessageCircle, DollarSign, TrendingUp, Activity, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const modules = [
    {
      title: "Talent Acquisition",
      description: "AI-powered resume screening and candidate matching",
      icon: Users,
      link: "/talent-acquisition",
      gradient: "from-primary to-primary-glow",
      stats: { label: "Candidates", value: "156" },
    },
    {
      title: "Employee Engagement",
      description: "Wellness tracking and burnout prevention",
      icon: MessageCircle,
      link: "/employee-engagement",
      gradient: "from-accent to-primary",
      stats: { label: "Wellness Score", value: "87%" },
    },
    {
      title: "Payroll & Compliance",
      description: "Automated payroll with intelligent tax calculations",
      icon: DollarSign,
      link: "/payroll-compliance",
      gradient: "from-primary to-accent",
      stats: { label: "Employees", value: "247" },
    },
  ];

  const quickStats = [
    { label: "Active Employees", value: "247", change: "+12%", icon: Users, color: "text-primary" },
    { label: "Open Positions", value: "18", change: "+5", icon: TrendingUp, color: "text-accent" },
    { label: "Avg. Wellness", value: "87%", change: "+3%", icon: Activity, color: "text-primary" },
    { label: "Pending Tasks", value: "24", change: "-8", icon: Clock, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold gradient-text">OptiHR Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            AI-Powered HR & Workforce Management System
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat) => (
            <Card key={stat.label} className="stat-card">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.change.startsWith("+")
                        ? "bg-green-500/20 text-green-600 dark:text-green-400"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Modules */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">AI Agent Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link key={module.title} to={module.link}>
                <Card className="module-card group relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-glow`}
                    >
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <p className="text-sm text-muted-foreground">{module.stats.label}</p>
                        <p className="text-2xl font-bold gradient-text">{module.stats.value}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary">→</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="glass-card p-8 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: "New candidate matched",
                details: "John Smith - 87% match for Senior Developer",
                time: "2 minutes ago",
                type: "talent",
              },
              {
                action: "Wellness check completed",
                details: "5 employees completed their weekly wellness survey",
                time: "1 hour ago",
                type: "engagement",
              },
              {
                action: "Payroll processed",
                details: "Monthly payroll for 247 employees completed successfully",
                time: "3 hours ago",
                type: "payroll",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === "talent"
                      ? "bg-primary/20"
                      : activity.type === "engagement"
                      ? "bg-accent/20"
                      : "bg-primary/20"
                  }`}
                >
                  {activity.type === "talent" ? (
                    <Users className="w-5 h-5 text-primary" />
                  ) : activity.type === "engagement" ? (
                    <Activity className="w-5 h-5 text-accent" />
                  ) : (
                    <DollarSign className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
