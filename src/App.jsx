import Navigation from "./Components/Navbar"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Projects from "./Components/ProjectCarousel"
import Contact from "./Components/ContactForm"
import Footer from "./Components/Footer"

export default function Page() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #0c0a1e 0%, 
            #1a0b2e 20%, 
            #2d1b47 40%, 
            #1a0b2e 60%, 
            #0c0a1e 80%, 
            #000000 100%
          )
        `,
      }}
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path d="M0,500 Q250,300 500,500 T1000,400" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path d="M0,300 Q300,100 600,300 T1000,200" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Musical Notes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#ec4899" : "#fbbf24",
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ♪
          </div>
        ))}
      </div>

      <Navigation />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
