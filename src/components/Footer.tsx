
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <div className="font-bold text-2xl mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                &lt;Alex/&gt;
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              MERN Stack Developer passionate about creating scalable web applications 
              and turning innovative ideas into reality through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex.johnson@example.com"
                className="p-3 rounded-full bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-lg mb-6 text-blue-400">Quick Links</h3>
            <div className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold text-lg mb-6 text-blue-400">Services</h3>
            <div className="space-y-3">
              {[
                'Full-Stack Development',
                'MERN Stack Applications',
                'API Development',
                'Database Design',
                'Code Review'
              ].map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-semibold text-lg mb-6 text-blue-400">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-1">Email</p>
                <p className="text-white font-medium">alex.johnson@example.com</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-1">Phone</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-1">Location</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 flex items-center gap-2 mb-4 md:mb-0">
              Made with <Heart className="h-4 w-4 text-red-500" /> and <Code2 className="h-4 w-4 text-blue-400" /> by Alex Johnson
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
