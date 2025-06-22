
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES, ThemeType } from "@/contexts/ThemeContext";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          className={`p-2 rounded-xl transition-all duration-300 ${themeConfig.colors.textSecondary} hover:${themeConfig.colors.textPrimary} hover:${themeConfig.colors.muted}`}
        >
          <Palette className="h-4 w-4" />
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
              className={`absolute right-0 top-12 z-50 w-64 rounded-xl p-4 shadow-2xl ${themeConfig.colors.card} border ${themeConfig.colors.border} backdrop-blur-xl`}
            >
              <ScrollArea className="h-80 w-full pr-2">
                <div className="space-y-4">
                  {/* Gradient Themes */}
                  <div>
                    <h3 className={`text-xs font-bold mb-3 ${themeConfig.colors.textPrimary} flex items-center gap-2`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}></div>
                      Gradient Themes
                    </h3>
                    <div className="space-y-1">
                      {gradientThemes.map(([themeKey, config]) => (
                        <motion.button
                          key={themeKey}
                          onClick={() => handleThemeSelect(themeKey as ThemeType)}
                          className={`relative w-full p-3 rounded-lg transition-all duration-300 border group text-left ${
                            theme === themeKey 
                              ? `border-white/30 ${themeConfig.colors.muted} shadow-md` 
                              : `border-transparent hover:border-white/10 hover:${themeConfig.colors.muted}`
                          }`}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`font-medium text-sm ${themeConfig.colors.textPrimary} group-hover:scale-105 transition-transform duration-200`}>
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
                                className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md"
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
                    <h3 className={`text-xs font-bold mb-3 ${themeConfig.colors.textPrimary} flex items-center gap-2`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${themeConfig.colors.accent}`}></div>
                      Minimal Themes
                    </h3>
                    <div className="space-y-1">
                      {minimalThemes.map(([themeKey, config]) => (
                        <motion.button
                          key={themeKey}
                          onClick={() => handleThemeSelect(themeKey as ThemeType)}
                          className={`relative w-full p-3 rounded-lg transition-all duration-300 border group text-left ${
                            theme === themeKey 
                              ? `border-white/30 ${themeConfig.colors.muted} shadow-md` 
                              : `border-transparent hover:border-white/10 hover:${themeConfig.colors.muted}`
                          }`}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`font-medium text-sm ${themeConfig.colors.textPrimary} group-hover:scale-105 transition-transform duration-200`}>
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
                                className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md"
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
              </ScrollArea>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
