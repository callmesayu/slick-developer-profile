
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <div className="font-bold text-2xl gradient-text font-mono mb-4">
              &lt;AJ /&gt;
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-electric-blue transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex.johnson@example.com"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-electric-blue hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                alex.johnson@example.com
              </p>
              <p className="text-gray-300 text-sm">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Alex Johnson
            <span className="mx-2">•</span>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
