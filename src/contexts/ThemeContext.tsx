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
  light: {
    name: 'Clean Light',
    type: 'minimal',
    colors: {
      background: 'from-white via-gray-50 to-blue-50',
      foreground: 'text-gray-900',
      primary: 'bg-blue-600',
      secondary: 'bg-slate-600',
      accent: 'from-blue-500 via-indigo-500 to-purple-500',
      muted: 'bg-white/90 backdrop-blur-sm',
      border: 'border-gray-200',
      card: 'bg-white/90 backdrop-blur-md border-gray-200 shadow-xl',
      glass: 'bg-white/90 border-gray-200',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600'
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
  sunset: {
    name: 'Warm Sunset',
    type: 'gradient',
    colors: {
      background: 'from-orange-800 via-red-800 to-pink-800',
      foreground: 'text-white',
      primary: 'bg-orange-500',
      secondary: 'bg-red-500',
      accent: 'from-orange-400 via-red-400 to-pink-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-orange-400/30',
      card: 'bg-white/10 backdrop-blur-md border-orange-400/30',
      glass: 'bg-white/10 border-orange-400/30',
      textPrimary: 'text-white',
      textSecondary: 'text-orange-200'
    }
  },
  forest: {
    name: 'Emerald Forest',
    type: 'gradient',
    colors: {
      background: 'from-green-900 via-emerald-800 to-teal-900',
      foreground: 'text-white',
      primary: 'bg-emerald-500',
      secondary: 'bg-green-500',
      accent: 'from-emerald-400 via-green-400 to-teal-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-emerald-400/30',
      card: 'bg-white/10 backdrop-blur-md border-emerald-400/30',
      glass: 'bg-white/10 border-emerald-400/30',
      textPrimary: 'text-white',
      textSecondary: 'text-emerald-200'
    }
  },
  royal: {
    name: 'Royal Purple',
    type: 'gradient',
    colors: {
      background: 'from-purple-900 via-violet-800 to-indigo-900',
      foreground: 'text-white',
      primary: 'bg-violet-500',
      secondary: 'bg-purple-500',
      accent: 'from-violet-400 via-purple-400 to-indigo-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-violet-400/30',
      card: 'bg-white/10 backdrop-blur-md border-violet-400/30',
      glass: 'bg-white/10 border-violet-400/30',
      textPrimary: 'text-white',
      textSecondary: 'text-violet-200'
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
  rose: {
    name: 'Rose Garden',
    type: 'gradient',
    colors: {
      background: 'from-rose-900 via-pink-800 to-purple-900',
      foreground: 'text-white',
      primary: 'bg-rose-500',
      secondary: 'bg-pink-500',
      accent: 'from-rose-400 via-pink-400 to-fuchsia-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-rose-400/30',
      card: 'bg-white/10 backdrop-blur-md border-rose-400/30',
      glass: 'bg-white/10 border-rose-400/30',
      textPrimary: 'text-white',
      textSecondary: 'text-rose-200'
    }
  },
  'minimal-light': {
    name: 'Pure Minimal',
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
    name: 'Dark Minimal',
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
  neon: {
    name: 'Electric Neon',
    type: 'gradient',
    colors: {
      background: 'from-black via-purple-900 to-black',
      foreground: 'text-white',
      primary: 'bg-fuchsia-500',
      secondary: 'bg-cyan-500',
      accent: 'from-fuchsia-400 via-purple-400 to-cyan-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-fuchsia-400/40',
      card: 'bg-black/60 backdrop-blur-md border-fuchsia-400/40',
      glass: 'bg-black/60 border-fuchsia-400/40',
      textPrimary: 'text-white',
      textSecondary: 'text-fuchsia-200'
    }
  },
  earth: {
    name: 'Golden Earth',
    type: 'gradient',
    colors: {
      background: 'from-amber-800 via-yellow-800 to-orange-800',
      foreground: 'text-white',
      primary: 'bg-amber-500',
      secondary: 'bg-yellow-500',
      accent: 'from-amber-400 via-yellow-400 to-orange-400',
      muted: 'bg-white/10 backdrop-blur-sm',
      border: 'border-amber-400/30',
      card: 'bg-white/10 backdrop-blur-md border-amber-400/30',
      glass: 'bg-white/10 border-amber-400/30',
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
