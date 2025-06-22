
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 
  | 'dark' 
  | 'light' 
  | 'ocean' 
  | 'sunset' 
  | 'forest' 
  | 'royal' 
  | 'cyber' 
  | 'rose' 
  | 'minimal-light' 
  | 'minimal-dark' 
  | 'neon' 
  | 'earth';

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
  dark: {
    name: 'Dark',
    type: 'gradient',
    colors: {
      background: 'from-purple-900 via-indigo-900 to-black',
      foreground: 'text-white',
      primary: 'bg-purple-600',
      secondary: 'bg-indigo-600',
      accent: 'from-purple-400 to-cyan-400',
      muted: 'bg-white/5',
      border: 'border-white/10',
      card: 'bg-white/5 backdrop-blur-sm border-white/10',
      glass: 'bg-white/5 border-white/10',
      textPrimary: 'text-white',
      textSecondary: 'text-purple-200'
    }
  },
  light: {
    name: 'Light',
    type: 'minimal',
    colors: {
      background: 'from-gray-50 via-white to-blue-50',
      foreground: 'text-gray-900',
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      accent: 'from-blue-600 to-purple-600',
      muted: 'bg-white/80',
      border: 'border-gray-200',
      card: 'bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg',
      glass: 'bg-white/80 border-gray-200',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600'
    }
  },
  ocean: {
    name: 'Ocean',
    type: 'gradient',
    colors: {
      background: 'from-blue-900 via-teal-900 to-cyan-900',
      foreground: 'text-white',
      primary: 'bg-cyan-600',
      secondary: 'bg-teal-600',
      accent: 'from-cyan-400 to-blue-400',
      muted: 'bg-white/5',
      border: 'border-cyan-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-cyan-500/20',
      glass: 'bg-white/5 border-cyan-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-cyan-200'
    }
  },
  sunset: {
    name: 'Sunset',
    type: 'gradient',
    colors: {
      background: 'from-orange-900 via-red-900 to-pink-900',
      foreground: 'text-white',
      primary: 'bg-orange-600',
      secondary: 'bg-red-600',
      accent: 'from-orange-400 to-pink-400',
      muted: 'bg-white/5',
      border: 'border-orange-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-orange-500/20',
      glass: 'bg-white/5 border-orange-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-orange-200'
    }
  },
  forest: {
    name: 'Forest',
    type: 'gradient',
    colors: {
      background: 'from-green-900 via-emerald-900 to-teal-900',
      foreground: 'text-white',
      primary: 'bg-emerald-600',
      secondary: 'bg-green-600',
      accent: 'from-emerald-400 to-green-400',
      muted: 'bg-white/5',
      border: 'border-emerald-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-emerald-500/20',
      glass: 'bg-white/5 border-emerald-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-emerald-200'
    }
  },
  royal: {
    name: 'Royal',
    type: 'gradient',
    colors: {
      background: 'from-purple-900 via-violet-900 to-indigo-900',
      foreground: 'text-white',
      primary: 'bg-violet-600',
      secondary: 'bg-purple-600',
      accent: 'from-violet-400 to-purple-400',
      muted: 'bg-white/5',
      border: 'border-violet-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-violet-500/20',
      glass: 'bg-white/5 border-violet-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-violet-200'
    }
  },
  cyber: {
    name: 'Cyber',
    type: 'gradient',
    colors: {
      background: 'from-slate-900 via-gray-900 to-black',
      foreground: 'text-green-400',
      primary: 'bg-green-600',
      secondary: 'bg-cyan-600',
      accent: 'from-green-400 to-cyan-400',
      muted: 'bg-green-900/10',
      border: 'border-green-500/20',
      card: 'bg-gray-900/50 backdrop-blur-sm border-green-500/20',
      glass: 'bg-gray-900/50 border-green-500/20',
      textPrimary: 'text-green-400',
      textSecondary: 'text-green-300'
    }
  },
  rose: {
    name: 'Rose',
    type: 'gradient',
    colors: {
      background: 'from-rose-900 via-pink-900 to-purple-900',
      foreground: 'text-white',
      primary: 'bg-rose-600',
      secondary: 'bg-pink-600',
      accent: 'from-rose-400 to-pink-400',
      muted: 'bg-white/5',
      border: 'border-rose-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-rose-500/20',
      glass: 'bg-white/5 border-rose-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-rose-200'
    }
  },
  'minimal-light': {
    name: 'Minimal Light',
    type: 'minimal',
    colors: {
      background: 'from-slate-50 to-white',
      foreground: 'text-slate-900',
      primary: 'bg-slate-900',
      secondary: 'bg-slate-600',
      accent: 'from-slate-900 to-slate-700',
      muted: 'bg-slate-100',
      border: 'border-slate-200',
      card: 'bg-white border-slate-200 shadow-sm',
      glass: 'bg-white/90 border-slate-200',
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600'
    }
  },
  'minimal-dark': {
    name: 'Minimal Dark',
    type: 'minimal',
    colors: {
      background: 'from-slate-900 to-slate-800',
      foreground: 'text-slate-100',
      primary: 'bg-slate-100',
      secondary: 'bg-slate-300',
      accent: 'from-slate-100 to-slate-300',
      muted: 'bg-slate-800',
      border: 'border-slate-700',
      card: 'bg-slate-800 border-slate-700',
      glass: 'bg-slate-800/90 border-slate-700',
      textPrimary: 'text-slate-100',
      textSecondary: 'text-slate-300'
    }
  },
  neon: {
    name: 'Neon',
    type: 'gradient',
    colors: {
      background: 'from-black via-purple-900 to-black',
      foreground: 'text-white',
      primary: 'bg-fuchsia-600',
      secondary: 'bg-cyan-600',
      accent: 'from-fuchsia-400 to-cyan-400',
      muted: 'bg-white/5',
      border: 'border-fuchsia-500/30',
      card: 'bg-black/50 backdrop-blur-sm border-fuchsia-500/30',
      glass: 'bg-black/50 border-fuchsia-500/30',
      textPrimary: 'text-white',
      textSecondary: 'text-fuchsia-200'
    }
  },
  earth: {
    name: 'Earth',
    type: 'gradient',
    colors: {
      background: 'from-amber-900 via-yellow-900 to-orange-900',
      foreground: 'text-white',
      primary: 'bg-amber-600',
      secondary: 'bg-yellow-600',
      accent: 'from-amber-400 to-yellow-400',
      muted: 'bg-white/5',
      border: 'border-amber-500/20',
      card: 'bg-white/5 backdrop-blur-sm border-amber-500/20',
      glass: 'bg-white/5 border-amber-500/20',
      textPrimary: 'text-white',
      textSecondary: 'text-amber-200'
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
  const [theme, setThemeState] = useState<ThemeType>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && THEMES[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme === 'light' || theme === 'minimal-light' ? 'light' : 'dark');
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const themeConfig = THEMES[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
