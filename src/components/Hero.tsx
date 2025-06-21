
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const jobs = [
    { company: "Incipient Infotech", role: "ReactJs/NextJs Developer", period: "April 2025 - Present" },
    { company: "Nimblechapps", role: "Full Stack Developer", period: "January 2024 - April 2025" },
    { company: "Freelance", role: "Full stack developer", period: "June 2022 - December 2023" },
    { company: "Tatvasoft", role: "Summer Intern", period: "May 2022 - June 2022" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <section className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute top-20 left-4 sm:left-20 w-48 sm:w-80 h-48 sm:h-80 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-purple-500/20' : 'bg-blue-300/30'
          }`}
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className={`absolute bottom-40 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-500/10' : 'bg-purple-300/20'
          }`}
        ></motion.div>
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className={`absolute top-1/2 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-cyan-500/10' : 'bg-pink-300/20'
          }`}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative"
            >
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl p-1 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-purple-400/20 to-blue-400/20 backdrop-blur-sm border border-white/10' 
                  : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-gray-200'
              }`}>
                <img 
                  src=  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-white"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm'
              }`}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              ></motion.div>
              <span className={`text-xs sm:text-sm font-medium ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-600'
              }`}>
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className={`text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hii, I'm 
            </motion.span>{" "}
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'from-purple-400 via-pink-400 to-cyan-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            }`}>
              Sahil Meghanathi
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="inline-block"
            >
              !
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-base sm:text-xl leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 ${
              theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
            }`}
          >
            A passionate full-stack developer with 1.5+ years of experience creating 
            meaningful and delightful digital products that create an equilibrium 
            between user needs and business goals.
          </motion.p>

          {/* Work Experience Cards */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <motion.h2 
              className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Work Experience
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                  className={`p-4 sm:p-6 text-left rounded-2xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded"></div>
                  </motion.div>
                  <h3 className={`font-semibold text-sm sm:text-lg mb-1 sm:mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {job.company}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-1 ${
                    theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
                  }`}>
                    {job.role}
                  </p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-purple-300' : 'text-gray-500'
                  }`}>
                    {job.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <motion.p 
              className={`mb-4 sm:mb-6 text-sm sm:text-base ${
                theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
              }`}
            >
              I'm currently looking to join a{" "}
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                cross-functional
              </span>{" "}
              team
            </motion.p>
            <motion.p 
              className={`text-xs sm:text-sm mb-6 sm:mb-8 ${
                theme === 'dark' ? 'text-purple-300' : 'text-gray-500'
              }`}
            >
              that values improving people's lives through accessible design
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl text-white font-medium ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-purple-400/30 text-purple-200 hover:bg-purple-400/10 hover:border-purple-400/50' 
                      : 'border-blue-400/50 text-blue-600 hover:bg-blue-50 hover:border-blue-500'
                  }`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              variants={containerVariants}
              className="flex justify-center gap-3 sm:gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10 text-purple-200 hover:text-white hover:bg-white/10' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm hover:shadow-md'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-2 rounded-full cursor-pointer ${
                theme === 'dark' 
                  ? 'text-purple-400 hover:text-purple-300' 
                  : 'text-blue-500 hover:text-blue-600'
              }`}
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Cosmic Element */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-2xl ${
          theme === 'dark' ? 'bg-purple-500/30' : 'bg-blue-500/20'
        }`}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
