
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyber-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-electric-blue font-mono text-lg mb-2 animate-slide-in-left">Hello, I'm</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-scale-in">
              Alex Johnson
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 animate-slide-in-right">
              <span className="gradient-text">Full Stack Developer</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I craft exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and cloud architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/30"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/30"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/30"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex.johnson@example.com"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/30"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
