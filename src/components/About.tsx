
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Smartphone, Award, Users, Coffee, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern JavaScript frameworks with responsive design.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Proficient in Node.js, Express.js, RESTful APIs, and scalable server-side architecture.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experienced with MongoDB, PostgreSQL, and database optimization for high performance.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsive",
      description: "Creating mobile-first, responsive applications with modern UI/UX principles and PWA features.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { icon: Award, number: "12+", label: "Projects Completed", delay: 0.1 },
    { icon: Users, number: "6+", label: "Happy Clients", delay: 0.2 },
    { icon: Coffee, number: "1000+", label: "Cups of Coffee", delay: 0.3 },
    { icon: Zap, number: "1.5+", label: "Years of Industrial Experience", delay: 0.4 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="about" 
      className={`py-12 sm:py-16 lg:py-20 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
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
                About Me
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Crafting Digital{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}>
                Experiences
              </span>
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className={`w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}
            ></motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Image Section */}
            <motion.div 
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                  theme === 'dark' 
                    ? 'from-purple-500/20 to-cyan-500/20' 
                    : 'from-blue-500/20 to-purple-500/20'
                } blur-xl`}></div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Developer workspace"
                  className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <motion.div
                  animate={{ 
                    boxShadow: theme === 'dark' 
                      ? ["0 0 20px rgba(168, 85, 247, 0.3)", "0 0 40px rgba(168, 85, 247, 0.5)", "0 0 20px rgba(168, 85, 247, 0.3)"]
                      : ["0 0 20px rgba(59, 130, 246, 0.3)", "0 0 40px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl"
                ></motion.div>
              </motion.div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div 
              variants={itemVariants} 
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <motion.h3 
                variants={itemVariants}
                className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Passionate Full-Stack Developer
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className={`text-base sm:text-lg leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                }`}
              >
                I'm a dedicated full-stack developer with 1.5+ years of experience in building 
                modern, scalable web applications. My expertise spans across the entire development 
                lifecycle, from conception to deployment.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className={`text-base sm:text-lg leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                }`}
              >
                I'm passionate about writing clean, efficient code and staying up-to-date 
                with the latest technologies. I love solving complex problems and turning 
                innovative ideas into reality through elegant, user-centric solutions.
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`text-center p-4 rounded-xl ${
                      theme === 'dark' 
                        ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                        : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm'
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                    >
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: stat.delay, type: "spring", stiffness: 200 }}
                      className={`text-xl sm:text-2xl font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {stat.number}
                    </motion.div>
                    <div className={`text-xs sm:text-sm ${
                      theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Card className={`h-full text-center transition-all duration-500 border-0 ${
                  theme === 'dark' 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl'
                }`}>
                  <CardContent className="p-4 sm:p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${skill.gradient}`}
                    >
                      <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </motion.div>
                    
                    <motion.h4 
                      className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {skill.title}
                    </motion.h4>
                    
                    <motion.p 
                      className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                      }`}
                    >
                      {skill.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
