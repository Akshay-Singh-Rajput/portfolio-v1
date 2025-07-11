"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Minimize2,
  X,
  Sparkles,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Message {
  type: "bot" | "user"
  content: string
  timestamp: Date
  suggestions?: string[]
}

const portfolioKnowledge = {
  experience: {
    text: "Akshay has 3+ years of experience as a Frontend Developer at Advantage Club, leading teams and building enterprise SaaS platforms for Fortune 500 companies. He's promoted to Team Lead and specializes in React.js, TypeScript, and performance optimization.",
    suggestions: [
      "Tell me about his leadership experience",
      "What technologies does he use?",
      "Show me his achievements",
    ],
  },
  skills: {
    text: "Expert in React.js, Next.js, TypeScript, Redux Toolkit, Node.js, AWS, and currently learning AI/ML at IIT Ropar. Specialized in performance optimization (40% improvement), team leadership, and enterprise SaaS development.",
    suggestions: ["What about his AI skills?", "Frontend technologies?", "Backend experience?"],
  },
  projects: {
    text: "Built enterprise onboarding platform serving 50+ companies, multi-tenant dashboard with 99.9% uptime, and AI-powered internal tools suite with 80% automation. Led teams of 4+ developers on mission-critical projects.",
    suggestions: ["Tell me about the onboarding platform", "What AI tools did he build?", "Show me project metrics"],
  },
  education: {
    text: "Currently pursuing Minor in AI from IIT Ropar (9-month program), completed Full Stack program from Masai School (1200+ hours), and has Diploma in Electrical Engineering. Includes campus immersion and live sessions with IIT faculty.",
    suggestions: ["What's he learning at IIT?", "Tell me about Masai School", "His educational background?"],
  },
  achievements: {
    text: "🏆 Rising Star Award winner, promoted to Team Lead, achieved 40% performance improvement, 60% faster deployments, led team of 4 developers, and consistently high performance ratings. Currently top performer in AI program.",
    suggestions: ["What awards has he won?", "His leadership achievements?", "Performance improvements?"],
  },
  contact: {
    text: "📧 Email: akshaysinghr98@gmail.com\n📱 Phone: +91-93405-42711\n📍 Location: Sector 48, Gurgaon, Haryana\n💼 Available for hire immediately!\n🔗 GitHub: github.com/Akshay-Singh-Rajput\n💼 LinkedIn: linkedin.com/in/akshay-kumar046203",
    suggestions: ["How can I contact him?", "Is he available for hire?", "Where is he located?"],
  },
  ai: {
    text: "Currently studying AI at IIT Ropar - learning Python, Machine Learning, Data Science, TensorFlow, and Prompt Engineering. Building AI-powered tools, integrating OpenAI APIs, and combining frontend development with machine learning capabilities.",
    suggestions: ["What AI projects has he built?", "His Python skills?", "Machine learning experience?"],
  },
  hiring: {
    text: "✅ Available immediately for full-time opportunities\n🚀 3+ years enterprise SaaS experience\n👥 Proven team leadership skills\n🎓 IIT Ropar AI certification in progress\n💰 Competitive salary expectations\n🌍 Open to remote/hybrid/on-site work\n📈 Ready to drive your next project to success!",
    suggestions: ["What's his availability?", "Salary expectations?", "Remote work?"],
  },
}

const quickActions = [
  { icon: <Code className="w-3 h-3" />, text: "Skills", key: "skills" },
  { icon: <Briefcase className="w-3 h-3" />, text: "Experience", key: "experience" },
  { icon: <GraduationCap className="w-3 h-3" />, text: "Education", key: "education" },
  { icon: <Award className="w-3 h-3" />, text: "Awards", key: "achievements" },
  { icon: <Mail className="w-3 h-3" />, text: "Contact", key: "hiring" },
]

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "👋 Hi! I'm Akshay's AI assistant. I can help you learn about his experience, skills, projects, and availability for hire. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "Tell me about his experience",
        "What are his skills?",
        "Is he available for hire?",
        "Show me his projects",
      ],
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    if (input.includes("experience") || input.includes("work") || input.includes("job") || input.includes("career")) {
      return portfolioKnowledge.experience
    } else if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech") ||
      input.includes("frontend") ||
      input.includes("react")
    ) {
      return portfolioKnowledge.skills
    } else if (
      input.includes("project") ||
      input.includes("built") ||
      input.includes("developed") ||
      input.includes("portfolio")
    ) {
      return portfolioKnowledge.projects
    } else if (
      input.includes("education") ||
      input.includes("study") ||
      input.includes("iit") ||
      input.includes("masai") ||
      input.includes("learning")
    ) {
      return portfolioKnowledge.education
    } else if (
      input.includes("achievement") ||
      input.includes("award") ||
      input.includes("recognition") ||
      input.includes("accomplishment")
    ) {
      return portfolioKnowledge.achievements
    } else if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("phone") ||
      input.includes("reach")
    ) {
      return portfolioKnowledge.contact
    } else if (
      input.includes("hire") ||
      input.includes("available") ||
      input.includes("job") ||
      input.includes("opportunity") ||
      input.includes("salary")
    ) {
      return portfolioKnowledge.hiring
    } else if (
      input.includes("ai") ||
      input.includes("artificial intelligence") ||
      input.includes("machine learning") ||
      input.includes("python")
    ) {
      return portfolioKnowledge.ai
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("start")) {
      return {
        text: "Hello! 👋 I'm here to help you learn about Akshay Kumar's professional background. He's a Frontend Developer with 3+ years of experience, currently pursuing AI certification from IIT Ropar. What specific area interests you?",
        suggestions: ["His work experience", "Technical skills", "AI learning journey", "Contact information"],
      }
    } else {
      return {
        text: "I can help you learn about Akshay's:\n\n🔧 Technical Skills & Experience\n💼 Work Projects & Achievements\n🎓 Education & AI Learning\n📞 Contact Information & Availability\n\nWhat would you like to explore?",
        suggestions: [
          "Show me his skills",
          "Tell me about his projects",
          "Is he available for hire?",
          "His AI experience",
        ],
      }
    }
  }

  const handleSend = async (message?: string) => {
    const messageToSend = message || input
    if (!messageToSend.trim()) return

    const userMessage: Message = {
      type: "user",
      content: messageToSend,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate realistic typing delay
    setTimeout(
      () => {
        const response = getResponse(messageToSend)
        const botResponse: Message = {
          type: "bot",
          content: response.text,
          timestamp: new Date(),
          suggestions: response.suggestions,
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // 1-2 second delay
  }

  const handleQuickAction = (key: string) => {
    const response = portfolioKnowledge[key as keyof typeof portfolioKnowledge]
    if (response) {
      handleSend(`Tell me about ${key}`)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] max-w-sm sm:w-96 h-[70vh] max-h-[500px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  className="p-1.5 sm:p-2 bg-purple-500 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                <div>
                  <span className="font-semibold text-white text-sm sm:text-base">Portfolio Assistant</span>
                  <div className="flex items-center gap-1 text-xs text-purple-300">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>AI-Powered</span>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-1 sm:p-2"
              >
                <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="p-2 sm:p-3 border-b border-white/10">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.key}
                    size="sm"
                    variant="ghost"
                    onClick={() => handleQuickAction(action.key)}
                    className="text-xs text-purple-300 hover:bg-purple-500/20 hover:text-white p-1.5 sm:p-2 h-auto"
                  >
                    {action.icon}
                    <span className="ml-1 hidden sm:inline">{action.text}</span>
                    <span className="ml-1 sm:hidden">{action.text.slice(0, 4)}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-3 sm:p-4 h-[calc(70vh-200px)] max-h-80">
              <div className="space-y-3 sm:space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 sm:gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "bot" && (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    )}
                    <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
                      <div
                        className={`p-2.5 sm:p-3 rounded-2xl text-xs sm:text-sm ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white ml-auto"
                            : "bg-white/10 text-gray-100"
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.content}</div>
                      </div>
                      {message.suggestions && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {message.suggestions.map((suggestion, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs cursor-pointer bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 px-2 py-1"
                              onClick={() => handleSend(suggestion)}
                            >
                              {suggestion}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <span className="text-xs text-gray-400 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    {message.type === "user" && (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 sm:gap-3 justify-start"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white/10 text-gray-100 p-2.5 sm:p-3 rounded-2xl">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-white/20 bg-black/20">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                  placeholder="Ask about experience, skills..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSend()}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl p-2 sm:p-3"
                  disabled={isTyping || !input.trim()}
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg relative overflow-hidden"
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.div>
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-xs text-white font-bold">!</span>
            </motion.div>
          )}
        </Button>
      </motion.div>
    </div>
  )
}
