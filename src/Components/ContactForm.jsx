"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Mic, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", projectType: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "asif.arafat@example.com",
      href: "mailto:asif.arafat@example.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 123 456 789",
      href: "tel:+8801234567890",
      gradient: "from-pink-500 to-amber-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Dhaka,Bangladesh",
      gradient: "from-amber-500 to-purple-500",
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black font-serif italic mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Let's Create Magic
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light italic leading-relaxed">
            "Ready to compose your digital symphony? Let's turn your vision into a masterpiece."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Contact Methods */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-6 p-6 bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl group cursor-pointer"
                >
                  <div
                    className={`p-4 bg-gradient-to-r ${info.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif italic mb-2">{info.title}</h3>
                    <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Inspirational Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl"
            >
              <div className="text-4xl text-purple-300/30 font-bold mb-4">"</div>
              <p className="text-gray-400 font-light italic leading-relaxed text-lg">
                Every great project begins with a conversation. Let's start ours and create something extraordinary
                together. Your vision combined with my artistry can birth digital experiences that truly resonate.
              </p>
              <div className="text-4xl text-purple-300/30 font-bold text-right mt-4">"</div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl"
            >
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              <div>
                <h4 className="text-green-300 font-semibold">Currently Available</h4>
                <p className="text-green-400/80 text-sm">Ready for new projects and collaborations</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white font-serif italic mb-4">
                Start a{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h3>
              <p className="text-gray-400 font-light">Tell me about your project and let's bring it to life</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                >
                  <option value="">Select project type</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="fullstack">Full-Stack Solution</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, your vision, and how we can create something amazing together..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 overflow-hidden relative group ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-500 hover:via-pink-500 hover:to-amber-500 shadow-2xl shadow-purple-500/30"
                } text-white`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </div>
              </motion.button>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center ${
                    submitStatus === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  ) : (
                    <span>Something went wrong. Please try again.</span>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
