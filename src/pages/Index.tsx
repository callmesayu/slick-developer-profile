
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { themeConfig } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 bg-gradient-to-br ${themeConfig.colors.background}`}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
