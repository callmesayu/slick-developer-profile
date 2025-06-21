
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: 'about' },
    { label: 'Work', href: 'projects' },
    { label: 'Contact', href: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-purple-900/80 backdrop-blur-sm border-b border-white/10' 
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div 
            className="font-bold text-xl sm:text-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className={`font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                  theme === 'dark' ? 'text-purple-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  theme === 'dark' ? 'bg-purple-400' : 'bg-blue-500'
                }`}></span>
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'text-yellow-400 hover:bg-white/10 hover:text-yellow-300' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'text-yellow-400 hover:bg-white/10' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={`p-2 ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-purple-900/95 backdrop-blur-sm border-b border-white/10' 
                  : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50'
              }`}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left font-medium transition-colors duration-200 py-3 px-2 rounded-lg ${
                      theme === 'dark' 
                        ? 'text-purple-200 hover:text-white hover:bg-white/5' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
