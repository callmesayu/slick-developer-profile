
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Zap, Users, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
  const { themeConfig } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const projects = [
    {
      title: "BucketListt Experiences",
      description: "A full-stack e-commerce solution with modern design, secure payments, and real-time inventory management. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        { icon: Users, text: "User Authentication" },
        { icon: Database, text: "Real-time Inventory" },
        { icon: Zap, text: "Payment Integration" },
        { icon: Code, text: "Admin Dashboard" }
      ],
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      glowColor: "blue"
    },
    {
      title: "Inventory Manage System",
      description: "Collaborative workspace with drag-and-drop functionality, real-time updates, team collaboration, and advanced analytics for productivity tracking.",
      tags: ["React", "TypeScript", "Socket.io", "MongoDb","NodeJs"],
      features: [
        { icon: Users, text: "Team Collaboration" },
        { icon: Zap, text: "Real-time Updates" },
        { icon: Code, text: "Drag & Drop" },
        { icon: Database, text: "Analytics Dashboard" }
      ],
      gradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
      glowColor: "green"
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-16 sm:py-20 lg:py-24 transition-colors duration-500 bg-gradient-to-br ${themeConfig.colors.background}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 ${themeConfig.colors.glass} border ${themeConfig.colors.border}`}
            >
              <motion.div 
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm font-semibold ${themeConfig.colors.textSecondary}`}>
                Featured Work
              </span>
            </motion.div>
            
            <motion.h2 
              variants={cardVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${themeConfig.colors.textPrimary}`}
            >
              My{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${themeConfig.colors.accent}`}>
                Projects
              </span>
            </motion.h2>
            
            <motion.div
              variants={cardVariants}
              className={`w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}
            />
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12 lg:space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Card */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    rotateX: 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className={`group overflow-hidden transition-all duration-700 border-0 relative ${themeConfig.colors.card}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <CardContent className="p-8 relative z-10">
                      <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                        <motion.div
                          animate={{ 
                            rotate: [0, 360]
                          }}
                          transition={{ 
                            duration: 30, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 opacity-20"
                        >
                          <div className={`w-full h-full bg-gradient-to-r ${
                            project.glowColor === 'blue'
                              ? 'from-blue-400 to-purple-400'
                              : 'from-green-400 to-teal-400'
                          }`} />
                        </motion.div>
                        
                        <motion.div 
                          className={`w-full h-full m-6 rounded-lg flex items-center justify-center relative z-10 ${themeConfig.colors.muted}`}
                          whileHover={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`text-center ${themeConfig.colors.textSecondary}`}
                          >
                            <div className={`w-16 h-16 bg-gradient-to-br ${themeConfig.colors.accent} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                              <Code className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm font-medium">Live Preview</p>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Feature Icons */}
                      <div className="flex justify-between mb-4">
                        {project.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.2, y: -5 }}
                            className={`p-2 rounded-lg ${themeConfig.colors.muted}`}
                            title={feature.text}
                          >
                            <feature.icon className={`w-4 h-4 ${themeConfig.colors.textSecondary}`} />
                          </motion.div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${themeConfig.colors.muted} ${themeConfig.colors.textSecondary} border ${themeConfig.colors.border}`}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  variants={cardVariants}
                >
                  <motion.h3 
                    className={`text-3xl sm:text-4xl font-bold ${themeConfig.colors.textPrimary}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-lg leading-relaxed ${themeConfig.colors.textSecondary}`}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <feature.icon className={`w-5 h-5 bg-gradient-to-r bg-clip-text text-transparent ${themeConfig.colors.accent}`} />
                        <span className={`text-sm ${themeConfig.colors.textSecondary}`}>
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className={`w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r ${themeConfig.colors.accent} hover:opacity-90`}>
                        <ExternalLink href="www.bucketlistt.com" className="mr-2 h-5 w-5" />
                        View Live
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
