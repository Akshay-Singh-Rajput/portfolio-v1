"use client"

import { motion } from "framer-motion"
import { Mail, Briefcase, ChevronDown, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "./animated-counter"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">AK</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center">
                Building enterprise-grade SaaS platforms at{" "}
                <span
                  className="text-purple-400 font-semibold cursor-pointer px-1 inline-block underline-offset-8 hover:underline hover:text-purple-300 hover:scale-105 transition-transform duration-200 ease-in-out"
                  onClick={() => window.open("https://www.advantageclub.ai/", "_blank")}
                >
                  Advantage Club
                </span>
              </p>


              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                <span className="text-base sm:text-lg text-pink-400 font-semibold cursor-pointer hover:underline hover:underline-offset-8
" onClick={() => window.open("https://masaischool.com/iit-ropar-ai-cse/", "_blank")}>IIT Ropar AI Student</span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <strong>3+ years</strong> of architecting scalable frontend solutions for Fortune 500 companies.
              Specialized in React.js, TypeScript, performance optimization, and leading high-impact development teams.
              Currently pursuing <strong>AI certification from IIT Ropar</strong> to integrate cutting-edge AI
              capabilities into web applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open("mailto:akshaysinghr98@gmail.com")}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Hire Me Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection("projects")}
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                  <AnimatedCounter end={3} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="text-2xl sm:text-3xl font-bold text-pink-400">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Enterprise Clients</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={15} suffix="K+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Users Impacted</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                <div className="text-2xl sm:text-3xl font-bold text-green-400">IIT</div>
                <div className="text-xs sm:text-sm text-gray-400">AI Certification</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
