
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES, ThemeType } from "@/contexts/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme, themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeSelect = (selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const gradientThemes = Object.entries(THEMES).filter(([_, config]) => config.type === 'gradient');
  const minimalThemes = Object.entries(THEMES).filter(([_, config]) => config.type === 'minimal');

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-xl transition-all duration-300 ${themeConfig.colors.textSecondary} hover:${themeConfig.colors.textPrimary} hover:${themeConfig.colors.muted}`}
        >
          <Palette className="h-5 w-5" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ 
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className={`absolute right-0 top-14 z-50 w-72 rounded-2xl p-6 shadow-2xl ${themeConfig.colors.card} border ${themeConfig.colors.border} backdrop-blur-xl`}
            >
              <div className="space-y-6">
                {/* Gradient Themes */}
                <div>
                  <h3 className={`text-sm font-bold mb-4 ${themeConfig.colors.textPrimary} flex items-center gap-3`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}></div>
                    Gradient Themes
                  </h3>
                  <div className="space-y-2">
                    {gradientThemes.map(([themeKey, config]) => (
                      <motion.button
                        key={themeKey}
                        onClick={() => handleThemeSelect(themeKey as ThemeType)}
                        className={`relative w-full p-4 rounded-xl transition-all duration-300 border-2 group text-left ${
                          theme === themeKey 
                            ? `border-white/30 ${themeConfig.colors.muted} shadow-lg` 
                            : `border-transparent hover:border-white/20 hover:${themeConfig.colors.muted}`
                        }`}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`font-medium ${themeConfig.colors.textPrimary} group-hover:scale-105 transition-transform duration-200`}>
                          {config.name}
                        </div>
                        <AnimatePresence>
                          {theme === themeKey && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 500,
                                damping: 25
                              }}
                              className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <Check className="w-3 h-3 text-white font-bold" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Minimal Themes */}
                <div>
                  <h3 className={`text-sm font-bold mb-4 ${themeConfig.colors.textPrimary} flex items-center gap-3`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}></div>
                    Minimal Themes
                  </h3>
                  <div className="space-y-2">
                    {minimalThemes.map(([themeKey, config]) => (
                      <motion.button
                        key={themeKey}
                        onClick={() => handleThemeSelect(themeKey as ThemeType)}
                        className={`relative w-full p-4 rounded-xl transition-all duration-300 border-2 group text-left ${
                          theme === themeKey 
                            ? `border-white/30 ${themeConfig.colors.muted} shadow-lg` 
                            : `border-transparent hover:border-white/20 hover:${themeConfig.colors.muted}`
                        }`}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`font-medium ${themeConfig.colors.textPrimary} group-hover:scale-105 transition-transform duration-200`}>
                          {config.name}
                        </div>
                        <AnimatePresence>
                          {theme === themeKey && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 500,
                                damping: 25
                              }}
                              className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <Check className="w-3 h-3 text-white font-bold" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
