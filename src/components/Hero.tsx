
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block text-blue-400 font-mono text-lg mb-4 animate-slide-in-left">
                👋 Hello, I'm
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-scale-in">
                <span className="block">Alex</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Johnson
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-light mb-6 animate-slide-in-right">
                <span className="text-gray-300">MERN Stack Developer</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I'm a passionate MERN stack developer with expertise in building 
              full-stack web applications using MongoDB, Express.js, React, and Node.js. 
              I love creating scalable and user-friendly digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:alex.johnson@example.com"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-700">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Alex Johnson - MERN Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center animate-float">
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-sm">Node</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
