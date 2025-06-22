
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 
  | 'midnight' 
  | 'ocean' 
  | 'cyber'
  | 'minimal-light' 
  | 'minimal-dark' 
  | 'minimal-red'
  | 'minimal-blue'
  | 'minimal-green'
  | 'minimal-purple'
  | 'minimal-orange'
  | 'minimal-pink'
  | 'minimal-yellow'
  | 'minimal-teal';

export interface ThemeConfig {
  name: string;
  type: 'gradient' | 'minimal';
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    border: string;
    card: string;
    glass: string;
    textPrimary: string;
    textSecondary: string;
  };
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
  // Only 3 Gradient Themes
  midnight: {
    name: 'Midnight Purple',
    type: 'gradient',
    colors: {
      background: 'from-slate-900 via-purple-900 to-slate-900',
      foreground: 'text-white',
      primary: 'bg-purple-600',
      secondary: 'bg-violet-600',
      accent: 'from-purple-400 via-pink-400 to-cyan-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-white/20',
      card: 'bg-white/10 backdrop-blur-md border-white/20',
      glass: 'bg-white/10 border-white/20',
      textPrimary: 'text-white',
      textSecondary: 'text-purple-200'
    }
  },
  ocean: {
    name: 'Deep Ocean',
    type: 'gradient',
    colors: {
      background: 'from-blue-900 via-teal-800 to-cyan-900',
      foreground: 'text-white',
      primary: 'bg-cyan-500',
      secondary: 'bg-teal-500',
      accent: 'from-cyan-400 via-teal-400 to-blue-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-cyan-400/30',
      card: 'bg-white/10 backdrop-blur-md border-cyan-400/30',
      glass: 'bg-white/10 border-cyan-400/30',
      textPrimary: 'text-white',
      textSecondary: 'text-cyan-200'
    }
  },
  cyber: {
    name: 'Cyber Matrix',
    type: 'gradient',
    colors: {
      background: 'from-black via-gray-900 to-green-900',
      foreground: 'text-green-400',
      primary: 'bg-green-500',
      secondary: 'bg-cyan-500',
      accent: 'from-green-400 via-cyan-400 to-lime-400',
      muted: 'bg-green-900/20 backdrop-blur-sm',
      border: 'border-green-400/30',
      card: 'bg-gray-900/70 backdrop-blur-md border-green-400/30',
      glass: 'bg-gray-900/70 border-green-400/30',
      textPrimary: 'text-green-400',
      textSecondary: 'text-green-300'
    }
  },

  // Minimal Themes with Different Colors
  'minimal-light': {
    name: 'Pure Light',
    type: 'minimal',
    colors: {
      background: 'from-slate-50 to-white',
      foreground: 'text-slate-900',
      primary: 'bg-slate-800',
      secondary: 'bg-slate-600',
      accent: 'from-slate-800 via-slate-700 to-slate-600',
      muted: 'bg-slate-100/80 backdrop-blur-sm',
      border: 'border-slate-200',
      card: 'bg-white/90 backdrop-blur-md border-slate-200 shadow-xl',
      glass: 'bg-white/90 border-slate-200',
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600'
    }
  },
  'minimal-dark': {
    name: 'Pure Dark',
    type: 'minimal',
    colors: {
      background: 'from-slate-900 to-slate-800',
      foreground: 'text-slate-100',
      primary: 'bg-slate-200',
      secondary: 'bg-slate-300',
      accent: 'from-slate-200 via-slate-300 to-slate-400',
      muted: 'bg-slate-800/80 backdrop-blur-sm',
      border: 'border-slate-700',
      card: 'bg-slate-800/90 backdrop-blur-md border-slate-700',
      glass: 'bg-slate-800/90 border-slate-700',
      textPrimary: 'text-slate-100',
      textSecondary: 'text-slate-300'
    }
  },
  'minimal-red': {
    name: 'Crimson Red',
    type: 'minimal',
    colors: {
      background: 'from-red-50 to-white',
      foreground: 'text-red-900',
      primary: 'bg-red-600',
      secondary: 'bg-red-500',
      accent: 'from-red-600 via-red-500 to-red-400',
      muted: 'bg-red-50/80 backdrop-blur-sm',
      border: 'border-red-200',
      card: 'bg-white/90 backdrop-blur-md border-red-200 shadow-xl',
      glass: 'bg-white/90 border-red-200',
      textPrimary: 'text-red-900',
      textSecondary: 'text-red-700'
    }
  },
  'minimal-blue': {
    name: 'Ocean Blue',
    type: 'minimal',
    colors: {
      background: 'from-blue-50 to-white',
      foreground: 'text-blue-900',
      primary: 'bg-blue-600',
      secondary: 'bg-blue-500',
      accent: 'from-blue-600 via-blue-500 to-blue-400',
      muted: 'bg-blue-50/80 backdrop-blur-sm',
      border: 'border-blue-200',
      card: 'bg-white/90 backdrop-blur-md border-blue-200 shadow-xl',
      glass: 'bg-white/90 border-blue-200',
      textPrimary: 'text-blue-900',
      textSecondary: 'text-blue-700'
    }
  },
  'minimal-green': {
    name: 'Forest Green',
    type: 'minimal',
    colors: {
      background: 'from-green-50 to-white',
      foreground: 'text-green-900',
      primary: 'bg-green-600',
      secondary: 'bg-green-500',
      accent: 'from-green-600 via-green-500 to-green-400',
      muted: 'bg-green-50/80 backdrop-blur-sm',
      border: 'border-green-200',
      card: 'bg-white/90 backdrop-blur-md border-green-200 shadow-xl',
      glass: 'bg-white/90 border-green-200',
      textPrimary: 'text-green-900',
      textSecondary: 'text-green-700'
    }
  },
  'minimal-purple': {
    name: 'Royal Purple',
    type: 'minimal',
    colors: {
      background: 'from-purple-50 to-white',
      foreground: 'text-purple-900',
      primary: 'bg-purple-600',
      secondary: 'bg-purple-500',
      accent: 'from-purple-600 via-purple-500 to-purple-400',
      muted: 'bg-purple-50/80 backdrop-blur-sm',
      border: 'border-purple-200',
      card: 'bg-white/90 backdrop-blur-md border-purple-200 shadow-xl',
      glass: 'bg-white/90 border-purple-200',
      textPrimary: 'text-purple-900',
      textSecondary: 'text-purple-700'
    }
  },
  'minimal-orange': {
    name: 'Sunset Orange',
    type: 'minimal',
    colors: {
      background: 'from-orange-50 to-white',
      foreground: 'text-orange-900',
      primary: 'bg-orange-600',
      secondary: 'bg-orange-500',
      accent: 'from-orange-600 via-orange-500 to-orange-400',
      muted: 'bg-orange-50/80 backdrop-blur-sm',
      border: 'border-orange-200',
      card: 'bg-white/90 backdrop-blur-md border-orange-200 shadow-xl',
      glass: 'bg-white/90 border-orange-200',
      textPrimary: 'text-orange-900',
      textSecondary: 'text-orange-700'
    }
  },
  'minimal-pink': {
    name: 'Rose Pink',
    type: 'minimal',
    colors: {
      background: 'from-pink-50 to-white',
      foreground: 'text-pink-900',
      primary: 'bg-pink-600',
      secondary: 'bg-pink-500',
      accent: 'from-pink-600 via-pink-500 to-pink-400',
      muted: 'bg-pink-50/80 backdrop-blur-sm',
      border: 'border-pink-200',
      card: 'bg-white/90 backdrop-blur-md border-pink-200 shadow-xl',
      glass: 'bg-white/90 border-pink-200',
      textPrimary: 'text-pink-900',
      textSecondary: 'text-pink-700'
    }
  },
  'minimal-yellow': {
    name: 'Golden Yellow',
    type: 'minimal',
    colors: {
      background: 'from-yellow-50 to-white',
      foreground: 'text-yellow-900',
      primary: 'bg-yellow-600',
      secondary: 'bg-yellow-500',
      accent: 'from-yellow-600 via-yellow-500 to-yellow-400',
      muted: 'bg-yellow-50/80 backdrop-blur-sm',
      border: 'border-yellow-200',
      card: 'bg-white/90 backdrop-blur-md border-yellow-200 shadow-xl',
      glass: 'bg-white/90 border-yellow-200',
      textPrimary: 'text-yellow-900',
      textSecondary: 'text-yellow-700'
    }
  },
  'minimal-teal': {
    name: 'Aqua Teal',
    type: 'minimal',
    colors: {
      background: 'from-teal-50 to-white',
      foreground: 'text-teal-900',
      primary: 'bg-teal-600',
      secondary: 'bg-teal-500',
      accent: 'from-teal-600 via-teal-500 to-teal-400',
      muted: 'bg-teal-50/80 backdrop-blur-sm',
      border: 'border-teal-200',
      card: 'bg-white/90 backdrop-blur-md border-teal-200 shadow-xl',
      glass: 'bg-white/90 border-teal-200',
      textPrimary: 'text-teal-900',
      textSecondary: 'text-teal-700'
    }
  }
};

interface ThemeContextType {
  theme: ThemeType;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('midnight');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && THEMES[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    const isLightTheme = theme.includes('minimal') && !theme.includes('dark');
    document.documentElement.classList.add(isLightTheme ? 'light' : 'dark');
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'midnight' ? 'minimal-light' : 'midnight');
  };

  const themeConfig = THEMES[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
