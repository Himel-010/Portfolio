"use client"

import { useState, useEffect } from "react"
import { Music, Play, Mail, Headphones } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const profileImageLink = "https://avatars.githubusercontent.com/u/174172092?v=4"

function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const artworks = [
    {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=700&h=500&fit=crop",
      title: "Digital Symphony",
      subtitle: "Web Applications",
      description: "Harmonious blend of design and functionality",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=500&fit=crop",
      title: "Mobile Melodies",
      subtitle: "App Development",
      description: "Crafting experiences that sing on every device",
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&h=500&fit=crop",
      title: "Code Compositions",
      subtitle: "Full-Stack Solutions",
      description: "Where backend rhythms meet frontend harmonies",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=500&fit=crop",
      title: "Creative Coding",
      subtitle: "Interactive Design",
      description: "Bringing imagination to life through code",
    },
    {
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&h=500&fit=crop",
      title: "Tech Artistry",
      subtitle: "Innovation Lab",
      description: "Where technology meets creative expression",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % artworks.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="about-me"
      className="relative z-10 min-h-screen flex items-center px-4 pt-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Poetic Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-8">
              {/* Artistic Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full"
              >
                <Music className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200 font-medium">Digital Composer</span>
              </motion.div>

              {/* Poetic Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="text-6xl lg:text-8xl font-black leading-tight"
                >
                  <span className="block text-white font-serif italic">SM. Asif</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent font-serif">
                    Arafat Himel
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="text-2xl lg:text-3xl text-gray-300 font-light italic leading-relaxed"
                >
                  <span className="block">"Composing digital symphonies</span>
                  <span className="block text-purple-300">through lines of code,</span>
                  <span className="block text-pink-300">crafting experiences</span>
                  <span className="block text-amber-300">that resonate with souls."</span>
                </motion.div>
              </div>

              {/* Artistic Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-xl text-gray-400 leading-relaxed max-w-lg font-light"
              >
                Where technology meets artistry, where logic dances with creativity, and where every pixel tells a story
                worth experiencing.
              </motion.p>
            </div>

            {/* Artistic Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex flex-wrap gap-6"
            >
              <ArtisticButton
                onClick={() => setIsPlaying(!isPlaying)}
                variant="primary"
                icon={<Play className="w-6 h-6" />}
              >
                Experience My Work
              </ArtisticButton>
              <ArtisticButton onClick={scrollToContact} variant="secondary" icon={<Mail className="w-6 h-6" />}>
                Let's Create Together
              </ArtisticButton>
            </motion.div>

            {/* Artistic Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-purple-500/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  120+
                </div>
                <div className="text-sm text-gray-400 font-light italic">Digital Compositions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-400 font-light italic">Years of Artistry</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                  85+
                </div>
                <div className="text-sm text-gray-400 font-light italic">Satisfied Souls</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Artistic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative"
          >
            <ArtisticHeroVisual
              isPlaying={isPlaying}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              artworks={artworks}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ArtisticButton({ children, onClick, variant = "primary", icon, className = "" }) {
  const variants = {
    primary: {
      bg: "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600",
      hover: "hover:from-purple-500 hover:via-pink-500 hover:to-amber-500",
      shadow: "shadow-2xl shadow-purple-500/30",
      text: "text-white",
    },
    secondary: {
      bg: "bg-white/5 backdrop-blur-xl border border-purple-500/30",
      hover: "hover:bg-white/10 hover:border-purple-400/50",
      shadow: "shadow-xl shadow-black/30",
      text: "text-white",
    },
  }

  const currentVariant = variants[variant]

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group relative px-10 py-5 rounded-2xl font-semibold transition-all duration-500
        ${currentVariant.bg} ${currentVariant.hover} ${currentVariant.shadow} ${currentVariant.text}
        overflow-hidden ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-4 justify-center">
        {icon && (
          <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6, type: "spring" }}>
            {icon}
          </motion.div>
        )}
        <span className="text-lg font-light">{children}</span>
      </div>
    </motion.button>
  )
}

function ArtisticHeroVisual({ isPlaying, currentImage, setCurrentImage, artworks }) {
  return (
    <div className="relative">
      {/* Main Artistic Container */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
        {/* Artistic Glow Effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-3xl blur-lg opacity-40" />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 rounded-3xl blur-md opacity-20" />

        {/* Content Container */}
        <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 backdrop-blur-sm border border-purple-500/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <img
                  src={artworks[currentImage].src || "/placeholder.svg"}
                  alt={artworks[currentImage].title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 rounded-3xl" />

                {/* Artistic Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-3xl font-bold text-white font-serif italic">{artworks[currentImage].title}</h3>
                    <p className="text-purple-300 font-medium text-lg">{artworks[currentImage].subtitle}</p>
                    <p className="text-gray-300 text-sm font-light italic">{artworks[currentImage].description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Artistic Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentImage
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Overlay */}
          <motion.div
            animate={isPlaying ? { scale: 1.1, opacity: 0.8 } : { scale: 1, opacity: 0.6 }}
            className="absolute top-6 right-6 p-4 bg-black/40 backdrop-blur-sm rounded-full border border-purple-500/30"
          >
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
            >
              <Headphones className="w-6 h-6 text-purple-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Artistic Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-amber-400 to-purple-400 rounded-full opacity-60"
        />
      </div>

      {/* Profile Image with Artistic Frame */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 p-1"
      >
        <img
          src={profileImageLink || "/placeholder.svg"}
          alt="SM. Asif Arafat Himel"
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent rounded-full" />
      </motion.div>

      {/* Status Badge */}
      <div className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="italic">Creating Magic</span>
      </div>
    </div>
  )
}

export default AboutMe
