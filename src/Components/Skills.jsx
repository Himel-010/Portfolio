"use client"

import { Code2, Smartphone, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"

function Skills() {
  const skills = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Frontend Artistry",
      description: "Painting user interfaces with React, Vue, and modern CSS symphonies",
      gradient: "from-purple-500 to-pink-500",
      note: "♪",
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Harmonies",
      description: "Composing cross-platform experiences that resonate on every device",
      gradient: "from-pink-500 to-amber-500",
      note: "♫",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Rhythms",
      description: "Orchestrating server-side symphonies with Node.js and Python",
      gradient: "from-amber-500 to-purple-500",
      note: "♪",
      technologies: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Full-Stack Compositions",
      description: "Weaving complete digital experiences from concept to deployment",
      gradient: "from-purple-500 to-pink-500",
      note: "♬",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "GraphQL", "Microservices"],
    },
  ]

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black font-serif italic mb-8">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Artistic Arsenal
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light italic leading-relaxed">
            "Every line of code is a brushstroke, every function a melody, every project a masterpiece waiting to be
            born."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02, rotate: 1 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500`}
              />
              <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 h-full overflow-hidden">
                {/* Musical Note */}
                <div className="absolute top-4 right-4 text-4xl text-purple-300/30 font-bold">{skill.note}</div>

                <div className="space-y-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} shadow-lg`}>
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-serif italic">{skill.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-6">{skill.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                          className="px-3 py-1 text-xs font-medium bg-white/10 border border-purple-500/20 rounded-full text-purple-200 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Artistic Decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white font-serif italic mb-8">
            Tools &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instruments
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Git",
              "VS Code",
              "Figma",
              "Postman",
              "Jira",
              "Slack",
              "Adobe XD",
              "Photoshop",
              "Linux",
              "Nginx",
              "Redis",
              "Elasticsearch",
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 text-center group cursor-pointer"
              >
                <span className="text-gray-300 font-medium group-hover:text-purple-300 transition-colors duration-300">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
