
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Zap, Users, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();

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
      className={`py-16 sm:py-20 lg:py-24 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-black' 
          : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
      }`}
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
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 ${
                theme === 'dark' 
                  ? 'bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl' 
                  : 'bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg'
              }`}
            >
              <motion.div 
                className={`w-2 h-2 rounded-full ${
                  theme === 'dark' ? 'bg-purple-400' : 'bg-blue-500'
                }`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-purple-200' : 'text-blue-700'
              }`}>
                Featured Work
              </span>
            </motion.div>
            
            <motion.h2 
              variants={cardVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              My{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'from-purple-400 via-pink-400 to-cyan-400' 
                  : 'from-blue-600 via-purple-600 to-pink-600'
              }`}>
                Projects
              </span>
            </motion.h2>
            
            <motion.div
              variants={cardVariants}
              className={`w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}
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
                  <Card className={`group overflow-hidden transition-all duration-700 border-0 relative ${
                    theme === 'dark' 
                      ? 'bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/10 hover:shadow-purple-500/20' 
                      : 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:bg-white/80 hover:shadow-2xl'
                  }`}>
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
                          className={`w-full h-full m-6 rounded-lg flex items-center justify-center relative z-10 ${
                            theme === 'dark' ? 'bg-white/90' : 'bg-white/95'
                          }`}
                          whileHover={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="text-gray-600 text-center"
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                              <Code className="w-8 h-8 text-gray-500" />
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
                            className={`p-2 rounded-lg ${
                              theme === 'dark' ? 'bg-white/10' : 'bg-white/50'
                            }`}
                            title={feature.text}
                          >
                            <feature.icon className={`w-4 h-4 ${
                              theme === 'dark' ? 'text-purple-300' : 'text-blue-600'
                            }`} />
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
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              theme === 'dark' 
                                ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30' 
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}
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
                    className={`text-3xl sm:text-4xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                    }`}
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
                        <feature.icon className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-purple-400' : 'text-blue-500'
                        }`} />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                        }`}>
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
                      <Button className={`w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold shadow-lg ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-purple-500/25' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25'
                      }`}>
                        <ExternalLink href="www.bucketlistt.com" className="mr-2 h-5 w-5" />
                        View Live
                      </Button>
                    </motion.div>
                    
                    {/* <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                          theme === 'dark' 
                            ? 'border-purple-400/30 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/50 bg-white/5' 
                            : 'border-blue-400/50 text-blue-600 hover:bg-blue-50 hover:border-blue-500 bg-white/50'
                        }`}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Source Code
                      </Button>
                    </motion.div> */}
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
