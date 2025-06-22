
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
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-xl transition-all duration-300 ${
          themeConfig.type === 'gradient'
            ? `${themeConfig.colors.textSecondary} hover:${themeConfig.colors.muted}`
            : `${themeConfig.colors.textSecondary} hover:${themeConfig.colors.muted}`
        }`}
      >
        <Palette className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute right-0 top-12 z-50 w-72 rounded-2xl p-4 shadow-2xl ${
                themeConfig.colors.card
              } border ${themeConfig.colors.border}`}
            >
              <div className="space-y-4">
                {/* Gradient Themes */}
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${themeConfig.colors.textPrimary}`}>
                    Gradient Themes
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {gradientThemes.map(([themeKey, config]) => (
                      <motion.button
                        key={themeKey}
                        onClick={() => handleThemeSelect(themeKey as ThemeType)}
                        className={`relative p-3 rounded-xl transition-all duration-200 border-2 ${
                          theme === themeKey 
                            ? 'border-white/30 ring-2 ring-white/20' 
                            : 'border-transparent hover:border-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-full h-8 rounded-lg bg-gradient-to-r ${config.colors.background} mb-2`} />
                        <div className={`text-xs font-medium ${config.colors.textPrimary}`}>
                          {config.name}
                        </div>
                        {theme === themeKey && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"
                          >
                            <Check className="w-2 h-2 text-black" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Minimal Themes */}
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${themeConfig.colors.textPrimary}`}>
                    Minimal Themes
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {minimalThemes.map(([themeKey, config]) => (
                      <motion.button
                        key={themeKey}
                        onClick={() => handleThemeSelect(themeKey as ThemeType)}
                        className={`relative p-3 rounded-xl transition-all duration-200 border-2 ${
                          theme === themeKey 
                            ? 'border-white/30 ring-2 ring-white/20' 
                            : 'border-transparent hover:border-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-full h-8 rounded-lg bg-gradient-to-r ${config.colors.background} mb-2 border ${config.colors.border}`} />
                        <div className={`text-xs font-medium ${config.colors.textPrimary}`}>
                          {config.name}
                        </div>
                        {theme === themeKey && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"
                          >
                            <Check className="w-2 h-2 text-black" />
                          </motion.div>
                        )}
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
