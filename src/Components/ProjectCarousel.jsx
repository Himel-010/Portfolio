"use client"

import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

function Projects() {
  const projects = [
    {
      title: "Digital Symphony #1",
      type: "Web Application",
      description:
        "A harmonious blend of React and Node.js creating beautiful user experiences with real-time collaboration features",
      color: "purple",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/project1",
      live: "https://project1.example.com",
      featured: true,
    },
    {
      title: "Mobile Melody",
      type: "Mobile App",
      description: "Cross-platform mobile application with native performance and beautiful animations",
      color: "pink",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/project2",
      live: "https://apps.apple.com/app/mobile-melody",
      featured: true,
    },
    {
      title: "Code Composition",
      type: "Full-Stack Platform",
      description: "Complete digital solution from database to deployment with microservices architecture",
      color: "amber",
      tech: ["Next.js", "PostgreSQL", "AWS", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/project3",
      live: "https://codecomposition.example.com",
      featured: true,
    },
    {
      title: "UI Harmony",
      type: "Design System",
      description: "Comprehensive design system for consistent user interfaces across multiple platforms",
      color: "purple",
      tech: ["Figma", "Storybook", "CSS", "React"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/ui-harmony",
      live: "https://uiharmony.example.com",
      featured: false,
    },
    {
      title: "API Orchestra",
      type: "Backend Service",
      description: "Scalable REST API serving millions of requests daily with advanced caching and monitoring",
      color: "pink",
      tech: ["Python", "FastAPI", "Docker", "Redis"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/api-orchestra",
      live: "https://api.orchestra.example.com",
      featured: false,
    },
    {
      title: "Data Sonata",
      type: "Analytics Platform",
      description: "Real-time data visualization and analytics dashboard with interactive charts and insights",
      color: "amber",
      tech: ["D3.js", "Python", "Redis", "WebSocket"],
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/example/data-sonata",
      live: "https://datasonata.example.com",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black font-serif italic mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Gallery of Dreams
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light italic leading-relaxed">
            "Each project is a verse in the poetry of possibility, a note in the symphony of innovation."
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white font-serif italic mb-12 text-center"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compositions
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white font-serif italic mb-12 text-center"
          >
            Other{" "}
            <span className="bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              Creations
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + featuredProjects.length}
                featured={false}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-400 font-light italic mb-8">
            "Want to see more of my work or collaborate on something amazing?"
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-500 hover:via-pink-500 hover:to-amber-500 text-white font-semibold rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-500"
          >
            Let's Create Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, rotate: featured ? 2 : 1 }}
      className={`group relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden cursor-pointer ${
        featured ? "p-0" : "p-8"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          project.color === "purple"
            ? "from-purple-500/10 to-pink-500/10"
            : project.color === "pink"
              ? "from-pink-500/10 to-amber-500/10"
              : "from-amber-500/10 to-purple-500/10"
        } group-hover:opacity-80 transition-opacity duration-300`}
      />

      <div className="relative">
        {/* Project Image for Featured Projects */}
        {featured && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Project Links Overlay */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-purple-300 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:text-purple-300 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        )}

        {/* Project Content */}
        <div className={featured ? "p-8" : ""}>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white font-serif italic">{project.title}</h3>
              <p className="text-purple-300 font-medium">{project.type}</p>
              <p className="text-gray-400 font-light leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-medium bg-white/10 border border-purple-500/20 rounded-full text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Links for Non-Featured Projects */}
            {!featured && (
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            )}
          </div>
        </div>

        {/* Artistic Decoration */}
        <div className="absolute top-4 right-4 text-2xl text-purple-300/20 font-bold">♪</div>
      </div>
    </motion.div>
  )
}

export default Projects
