
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
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

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" }
  ];

  return (
    <section 
      id="contact" 
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
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
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
                Get In Touch
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Work{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'from-purple-400 to-cyan-400' 
                  : 'from-blue-600 to-purple-600'
              }`}>
                Together
              </span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${
                theme === 'dark' ? 'text-purple-200' : 'text-gray-600'
              }`}
            >
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's create something amazing together.
            </motion.p>
          </motion.div>
          
          {/* Contact Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`p-6 sm:p-8 rounded-2xl mb-6 sm:mb-8 transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left"
              >
                <p className={`text-xs sm:text-sm mb-1 ${
                  theme === 'dark' ? 'text-purple-300' : 'text-gray-500'
                }`}>
                  Email
                </p>
                <p className={`font-medium text-sm sm:text-base ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  alex.johnson@example.com
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left"
              >
                <p className={`text-xs sm:text-sm mb-1 ${
                  theme === 'dark' ? 'text-purple-300' : 'text-gray-500'
                }`}>
                  Location
                </p>
                <p className={`font-medium text-sm sm:text-base ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  San Francisco, CA
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className={`w-full sm:w-auto px-8 py-3 rounded-xl text-white font-medium ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </motion.div>
          </motion.div>

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
                } ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
