
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-black' 
        : 'bg-gradient-to-br from-slate-50 via-white to-gray-100'
    }`}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
