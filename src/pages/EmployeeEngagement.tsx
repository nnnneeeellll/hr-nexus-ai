import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Heart, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function EmployeeEngagement() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your wellness companion. How are you feeling today? 😊",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [wellnessScore, setWellnessScore] = useState(75);
  const [burnoutRisk, setBurnoutRisk] = useState("Low");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's great to hear! Remember to take breaks and stay hydrated. 💧",
        "I understand. It's important to maintain work-life balance. Have you tried our wellness programs?",
        "Thank you for sharing. Would you like some tips on stress management? 🧘‍♀️",
        "I'm here to help! Let's work together to improve your workplace experience.",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);

      // Update wellness metrics
      const newScore = Math.max(60, Math.min(90, wellnessScore + Math.random() * 10 - 5));
      setWellnessScore(Math.round(newScore));
      setBurnoutRisk(newScore > 75 ? "Low" : newScore > 60 ? "Medium" : "High");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Employee Engagement Agent</h1>
          <p className="text-muted-foreground text-lg">AI-powered wellness support and burnout prevention</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <Card className="glass-card rounded-3xl lg:col-span-2 flex flex-col h-[700px]">
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Wellness Companion</h2>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-slide-in ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-primary"
                        : "bg-gradient-to-br from-primary to-accent"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 animate-slide-in">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-border/50">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 h-12 rounded-xl"
                />
                <Button
                  onClick={handleSend}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12 px-6"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Wellness Metrics */}
          <div className="space-y-6">
            {/* Wellness Score */}
            <Card className="glass-card p-6 rounded-3xl hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Wellness Score</h3>
                </div>
                <div className="text-center py-4">
                  <div className="text-5xl font-bold gradient-text">{wellnessScore}</div>
                  <p className="text-sm text-muted-foreground mt-2">Out of 100</p>
                </div>
                <Progress value={wellnessScore} className="h-3" />
                <p className="text-sm text-muted-foreground text-center">
                  Based on conversation analysis
                </p>
              </div>
            </Card>

            {/* Burnout Risk */}
            <Card className="glass-card p-6 rounded-3xl hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Burnout Risk</h3>
                </div>
                <div className="text-center py-4">
                  <span
                    className={`inline-block px-6 py-3 rounded-full font-semibold text-lg ${
                      burnoutRisk === "Low"
                        ? "bg-green-500/20 text-green-600 dark:text-green-400"
                        : burnoutRisk === "Medium"
                        ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                        : "bg-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {burnoutRisk}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Monitoring your well-being patterns
                </p>
              </div>
            </Card>

            {/* Alert Card */}
            {burnoutRisk !== "Low" && (
              <Card className="glass-card p-6 rounded-3xl border-2 border-accent/50 animate-slide-in">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Wellness Alert</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consider scheduling a break or talking to HR about workload management.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Schedule Wellness Session
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
