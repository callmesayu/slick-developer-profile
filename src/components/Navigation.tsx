
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl gradient-text font-mono">
            &lt;AJ /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:text-electric-blue ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm"
              className="bg-electric-blue hover:bg-electric-blue/90 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-gray-800 hover:text-electric-blue transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm"
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
