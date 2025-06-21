
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      gradient: "from-purple-500/20 to-blue-500/20",
      delay: 0
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced analytics dashboard.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      delay: 0.2
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-12 sm:py-16 lg:py-20 transition-colors duration-500 ${
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6 ${
                theme === 'dark' 
                  ? 'bg-purple-500/20 border border-purple-500/30' 
                  : 'bg-blue-100 border border-blue-200'
              }`}
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-purple-400' : 'bg-blue-500'
              }`}></div>
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-purple-200' : 'text-blue-700'
              }`}>
                My Work
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Featured{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}>
                Projects
              </span>
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className={`w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}
            ></motion.div>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16 sm:space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <motion.h3 
                    className={`text-2xl sm:text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-base sm:text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className={`w-full sm:w-auto px-6 py-3 rounded-xl text-white font-medium ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      }`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          theme === 'dark' 
                            ? 'border-purple-400/30 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/50' 
                            : 'border-blue-400/50 text-blue-600 hover:bg-blue-50 hover:border-blue-500'
                        }`}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Project Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className={`overflow-hidden transition-all duration-500 border-0 ${
                    theme === 'dark' 
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl'
                  }`}>
                    <CardContent className="p-0">
                      <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <motion.div
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 20, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 opacity-10"
                        >
                          <div className={`w-full h-full bg-gradient-to-r ${
                            theme === 'dark' 
                              ? 'from-purple-400 to-cyan-400' 
                              : 'from-blue-400 to-purple-400'
                          }`}></div>
                        </motion.div>
                        
                        <div className={`w-full h-full m-4 sm:m-6 rounded-lg flex items-center justify-center relative z-10 ${
                          theme === 'dark' ? 'bg-white/90' : 'bg-white/95'
                        }`}>
                          <div className="text-gray-600 text-center">
                            <motion.div
                              animate={{ y: [-5, 5, -5] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-3 sm:mb-4"
                            ></motion.div>
                            <p className="text-xs sm:text-sm font-medium">Project Preview</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
