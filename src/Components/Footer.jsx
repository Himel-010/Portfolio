"use client"

import { Github, Mail, Heart, ArrowUp, Music } from "lucide-react"
import { motion } from "framer-motion"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { name: "About Me", id: "about-me" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/CaptainMASUD",
      color: "hover:text-purple-300",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:asif.arafat@example.com",
      color: "hover:text-pink-300",
    },
  ]

  return (
    <footer className="relative py-20 px-4 border-t border-purple-500/20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl font-black font-serif italic bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Asif.Art
                </div>
                <Music className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-400 font-light italic leading-relaxed text-lg max-w-md">
                "Composing digital symphonies through lines of code, crafting experiences that resonate with souls and
                inspire the future of technology."
              </p>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
            >
              <h4 className="text-white font-semibold mb-3 font-serif italic">Stay in Harmony</h4>
              <p className="text-gray-400 text-sm mb-4">Get updates on my latest projects and creative insights</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-2 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white font-serif italic mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="block text-gray-400 hover:text-purple-300 transition-all duration-300 font-light text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-colors duration-300 font-light"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white font-serif italic mb-6">Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className={`flex items-center gap-3 text-gray-400 ${social.color} transition-all duration-300 font-light`}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-green-400/80 text-xs">Open to new projects and collaborations</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 font-light text-center md:text-left">
              <p>© 2024 SM. Asif Arafat Himel. All rights reserved.</p>
              <p className="text-sm mt-1 italic">Crafted with passion and precision</p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-gray-400 font-light">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>

            {/* Version */}
            <div className="text-gray-500 text-sm font-light">v2024.1.0</div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-500/5 to-purple-500/5 rounded-full blur-2xl" />
      </div>
    </footer>
  )
}

export default Footer
