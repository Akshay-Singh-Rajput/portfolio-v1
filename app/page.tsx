"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  MapPin,
  Calendar,
  Award,
  Phone,
  TrendingUp,
  Zap,
  Shield,
  Database,
  Users,
  Target,
  Briefcase,
  Star,
  Rocket,
  Brain,
  GraduationCap,
  BookOpen,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PortfolioChatbot } from "@/components/portfolio-chatbot"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const skills = [
    { name: "React.js & Next.js", level: 95, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "TypeScript & JavaScript", level: 90, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Redux Toolkit & State Management", level: 88, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Node.js & Express.js", level: 85, icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "MongoDB & Database Design", level: 80, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "AWS & Cloud Basics", level: 35, icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "AI/ML Fundamentals (Learning)", level: 25, icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Performance Optimization", level: 92, icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ]

  const projects = [
    {
      title: "Enterprise Employee Lifecycle Management Platform",
      description:
        "Architected and led development of a comprehensive SaaS onboarding solution serving 50+ global enterprises. Built with React 19, TypeScript, and microservices architecture, handling complete employee journey from hire to exit with 94% completion rate.",
      tech: ["React 19", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB", "AWS", "Docker", "Microservices"],
      github: "https://github.com/Akshay-Singh-Rajput",
      metrics: { companies: "50+", employees: "15K+", completion: "94%" },
      highlights: [
        "Led cross-functional team of 4 developers",
        "Reduced deployment time by 60% with custom CI/CD",
        "Achieved 94% employee onboarding completion rate",
        "Integrated AI-powered smart nudges and guidance",
      ],
    },
    {
      title: "Multi-Tenant Enterprise Dashboard & Analytics",
      description:
        "Developed scalable multi-tenant SaaS dashboard with real-time analytics, role-based access control, and dynamic feature toggling. Supports 1000+ concurrent users with optimized performance and lazy loading architecture.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Express", "MongoDB", "Socket.io", "Redis", "Elasticsearch"],
      github: "https://github.com/Akshay-Singh-Rajput",
      metrics: { tenants: "100+", users: "8K+", uptime: "99.9%" },
      highlights: [
        "Multi-tenant architecture with data isolation",
        "Real-time data synchronization across tenants",
        "50% faster load times with performance optimization",
        "Advanced role-based permission system",
      ],
    },
    {
      title: "AI-Powered Internal Tools Ecosystem",
      description:
        "Built comprehensive suite of 6+ internal productivity tools including Email Builder, Certificate Generator, Form Builder, and Survey Module. Integrated OpenAI for smart automation, reducing manual work by 80%.",
      tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Python", "AWS Lambda", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/Akshay-Singh-Rajput",
      metrics: { tools: "6+", automation: "80%", efficiency: "3x" },
      highlights: [
        "AI-powered content generation and automation",
        "80% reduction in manual administrative tasks",
        "Integrated Slack notifications and workflows",
        "Machine learning for predictive analytics",
      ],
    },
  ]

  const experience = [
    {
      title: "Frontend Developer & Team Lead",
      company: "Advantage Club (Global SaaS Platform)",
      period: "Aug 2022 - Present (3+ Years)",
      location: "Gurgaon, Haryana (On-site)",
      description:
        "Leading frontend development for enterprise SaaS platform serving global Fortune 500 companies. Spearheading core modules for rewards, recognition, wellness, and employee onboarding solutions with 99.9% uptime.",
      achievements: [
        "🚀 Led cross-functional team of 4 developers on enterprise onboarding platform serving 50+ companies",
        "⚡ Architected Master Module for corp-level feature toggling, reducing deployment cycles by 60%",
        "🛠️ Built 6+ mission-critical internal tools: Email Builder, Certificate Generator, Form Builder, Survey Module",
        "🔧 Engineered custom pre-deployment automation with build optimization, rollbacks, and Slack integration",
        "📈 Successfully migrated React 18 → 19 with performance improvements using lazy loading and code splitting",
        "🤖 Integrated AI Agent (Adva AI) for intelligent task execution, user guidance, and behavioral nudges",
        "👥 Promoted to Team Lead role after consistently mentoring junior developers and delivering high-impact projects",
        "🏆 Achieved 40% performance improvement through memory profiling and bundle size optimization",
      ],
      awards: ["🌟 Rising Star Award for Innovation & Frontend Leadership", "📊 Consistent High Performance Rating"],
    },
    {
      title: "Minor in Artificial Intelligence",
      company: "IIT Ropar (In collaboration with Masai School & NSDC)",
      period: "Current - 9 months program (Pursuing)",
      location: "Online + Campus Immersion",
      description:
        "Credit-certified Minor in Artificial Intelligence from IIT Ropar, focused on foundational Python, machine learning, data science, and prompt engineering. Includes hands-on projects, live sessions with IIT faculty, and 5-day campus immersion.",
      achievements: [
        "🎓 Pursuing credit-certified AI program from prestigious IIT Ropar",
        "🐍 Mastering Python for AI/ML applications and data science workflows",
        "🧠 Learning machine learning algorithms, neural networks, and deep learning frameworks",
        "📊 Hands-on experience with data science tools: Pandas, NumPy, Scikit-learn, TensorFlow",
        "💬 Advanced prompt engineering and AI model optimization techniques",
        "🏫 Live sessions with IIT faculty and 5-day campus immersion experience",
        "🔬 Working on AI-driven projects combining frontend development with machine learning",
        "📈 Integrating AI capabilities into web applications and SaaS platforms",
      ],
      awards: ["🎯 Academic Excellence in AI Fundamentals", "🚀 Innovation in AI-Web Integration"],
    },
    {
      title: "Full Stack Web Development Program",
      company: "Masai School (Intensive Bootcamp)",
      period: "Nov 2021 - Jun 2022",
      location: "Bengaluru",
      description:
        "Completed rigorous 1200+ hour full-stack development program with focus on modern web technologies, data structures, algorithms, and industry best practices.",
      achievements: [
        "💻 Completed 1200+ hours of hands-on coding with 95%+ assignment completion rate",
        "🏗️ Built 15+ full-stack projects using MERN stack with modern development practices",
        "🤝 Collaborated on team projects using Agile methodology and version control",
        "📚 Mastered data structures, algorithms, system design, and software engineering principles",
        "🎯 Achieved top 10% performance in technical assessments and coding challenges",
      ],
      awards: ["🏅 Excellence in Web Development", "⭐ Top Performer Recognition"],
    },
  ]

  const achievements = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Team Leadership",
      description: "Led 4+ developers on enterprise projects",
      color: "text-purple-400",
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Performance Expert",
      description: "40% app performance improvement",
      color: "text-green-400",
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Deployment Optimization",
      description: "60% faster deployment cycles",
      color: "text-blue-400",
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Integration Pioneer",
      description: "IIT Ropar AI certification + AI-powered tools",
      color: "text-pink-400",
    },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden transition-all duration-500">
        {/* SEO Keywords - Hidden */}
        <div className="sr-only">
          Frontend Developer, React Developer, JavaScript Developer, TypeScript Expert, Next.js Developer, Redux
          Specialist, SaaS Developer, Enterprise Frontend, Team Lead, Performance Optimization, AWS Developer, Node.js,
          Full Stack Developer, UI/UX Developer, Responsive Design, Modern Web Development, Agile Development, AI
          Developer, Machine Learning, Python Developer, IIT Ropar, Artificial Intelligence, Gurgaon Developer, India
          Frontend Developer
        </div>

        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
            animate={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <Navigation scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />

        {/* Key Achievements Section */}
        <section className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Hire Me?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Proven track record of delivering enterprise solutions, leading teams, and pioneering AI integration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center h-full">
                    <CardContent className="p-4 sm:p-6">
                      <motion.div
                        className={`${achievement.color} mb-3 sm:mb-4 flex justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Mastery in modern frontend technologies, enterprise development, and cutting-edge AI integration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <motion.div
                          className="p-2 bg-purple-500/20 rounded-lg mr-3"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Expertise Level</span>
                          <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-12"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                    Complete Technology Stack
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-3">Frontend Mastery</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {[
                          "React.js",
                          "Next.js",
                          "TypeScript",
                          "JavaScript ES6+",
                          "Redux Toolkit",
                          "HTML5",
                          "CSS3",
                          "SCSS",
                          "Tailwind CSS",
                          "Responsive Design",
                          "PWA",
                        ].map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/20 text-purple-300 text-xs cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-pink-400 mb-3">MERN Stack Mastery</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {[
                          "Node.js",
                          "Express.js",
                          "MongoDB",
                          "Mongoose ODM",
                          "REST APIs",
                          "JWT Authentication",
                          "Socket.io",
                          "Microservices",
                          "API Design",
                        ].map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 text-xs cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-3">AI & Learning Journey</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {[
                          "Python Basics",
                          "AI Fundamentals",
                          "IIT Ropar Program",
                          "Machine Learning Concepts",
                          "Data Science Intro",
                          "Prompt Engineering",
                          "AI Integration Planning",
                          "Future Tech Exploration",
                        ].map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-green-400 mb-3">DevOps & Leadership</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {[
                          "Git & GitHub",
                          "Basic AWS",
                          "CI/CD Basics",
                          "Team Leadership",
                          "Agile/Scrum",
                          "Code Reviews",
                          "Mentoring",
                          "Performance Optimization",
                        ].map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge
                              variant="secondary"
                              className="bg-green-500/20 text-green-300 text-xs cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise Projects Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Scalable SaaS solutions with AI integration powering Fortune 500 companies
              </p>
            </motion.div>

            <div className="space-y-8 sm:space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        <div className="order-2 lg:order-1">
                          <motion.div
                            className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-center">
                              <div className="flex justify-center mb-2">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                  <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mr-2" />
                                </motion.div>
                                <motion.div
                                  animate={{ rotate: -360 }}
                                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                  <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400" />
                                </motion.div>
                              </div>
                              <p className="text-gray-300 text-sm">Enterprise SaaS + AI Platform</p>
                              <p className="text-gray-400 text-xs">Confidential Access Required</p>
                            </div>
                          </motion.div>
                        </div>
                        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.tech.map((tech) => (
                              <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Badge
                                  variant="secondary"
                                  className="bg-purple-500/20 text-purple-300 cursor-pointer text-xs"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>

                          <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                              <div className="text-lg sm:text-2xl font-bold text-purple-400">
                                {project.metrics.companies || project.metrics.tenants || project.metrics.tools}
                              </div>
                              <div className="text-xs text-gray-400">Companies/Tenants/Tools</div>
                            </motion.div>
                            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                              <div className="text-lg sm:text-2xl font-bold text-pink-400">
                                {project.metrics.employees || project.metrics.users || project.metrics.automation}
                              </div>
                              <div className="text-xs text-gray-400">Users/Automation</div>
                            </motion.div>
                            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                              <div className="text-lg sm:text-2xl font-bold text-blue-400">
                                {project.metrics.completion || project.metrics.uptime || project.metrics.efficiency}
                              </div>
                              <div className="text-xs text-gray-400">Success Rate</div>
                            </motion.div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-base sm:text-lg font-semibold text-white">Impact & Achievements</h4>
                            <ul className="space-y-1">
                              {project.highlights.map((highlight, i) => (
                                <motion.li
                                  key={i}
                                  className="text-gray-300 flex items-start text-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                                  {highlight}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200"
                              onClick={() => window.open(project.github, "_blank")}
                            >
                              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              GitHub Profile
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 transition-all duration-200"
                              onClick={() =>
                                window.open("mailto:akshaysinghr98@gmail.com?subject=Demo Request", "_blank")
                              }
                            >
                              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              Request Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 sm:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional & Academic Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                From intensive training to leading enterprise teams, now pioneering AI integration at IIT Ropar
              </p>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <motion.div
                            className="p-2 sm:p-3 bg-purple-500/20 rounded-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {index === 1 ? (
                              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                            ) : index === 0 ? (
                              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                            ) : (
                              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                            )}
                          </motion.div>
                          <div>
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <p className="text-base sm:text-lg text-purple-400 font-semibold">{exp.company}</p>
                            {index === 1 && (
                              <motion.div
                                className="flex items-center gap-2 mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                                <span className="text-xs sm:text-sm text-pink-400">
                                  AI • Machine Learning • Data Science
                                </span>
                              </motion.div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end mt-3 lg:mt-0">
                          <div className="flex items-center text-gray-300 mb-1 sm:mb-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            <span className="text-sm sm:text-base">{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            <span className="text-sm sm:text-base">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{exp.description}</p>

                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold text-white flex items-center">
                          <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
                          Key Achievements & Impact
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-gray-300 flex items-start text-sm sm:text-base"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>

                        {exp.awards.length > 0 && (
                          <motion.div
                            className="mt-4 sm:mt-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <h5 className="text-sm sm:text-base font-semibold text-pink-400 mb-2 sm:mb-3 flex items-center">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              Recognition & Awards
                            </h5>
                            <div className="space-y-1 sm:space-y-2">
                              {exp.awards.map((award, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center text-gray-300 text-sm sm:text-base"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400" />
                                  {award}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Build the Future?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Let's discuss how my enterprise SaaS experience, team leadership skills, and cutting-edge AI knowledge
                from IIT Ropar can drive your next project to success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">akshaysinghr98@gmail.com</p>
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600"
                      onClick={() => window.open("mailto:akshaysinghr98@gmail.com?subject=Job Opportunity")}
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">+91-93405-42711</p>
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600"
                      onClick={() => window.open("tel:+919340542711")}
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  onClick={() => window.open("https://github.com/Akshay-Singh-Rajput", "_blank")}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent"
                  onClick={() => window.open("https://linkedin.com/in/akshay-kumar046203", "_blank")}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>

              <div className="text-gray-400 text-sm sm:text-base">
                <p className="mb-2">📍 Gurgaon, Haryana, India</p>
                <p>
                  © 2025 Akshay Kumar • Frontend Developer • React.js Expert • IIT Ropar AI Student •
                  Available for Hire ⚡
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <PortfolioChatbot />
      </div>
    </ThemeProvider>
  )
}
