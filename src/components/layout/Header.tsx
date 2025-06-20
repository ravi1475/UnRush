import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#case-studies' },
    { name: 'How We Work', href: '#methodology' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    const element = document.querySelector('#cta-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm border-b border-soft-gray'
    }`}>
      <div className="container-max">
        <div className="flex justify-between items-center header-height">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 ${
              isScrolled ? 'drop-shadow-md' : ''
            }`}>
              <img 
                src="/Real logo.png" 
                alt="Unrush Logo" 
                className="h-12 w-auto object-contain group-hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
            <span className="ml-3 text-xl font-montserrat font-bold text-charcoal group-hover:text-deep-indigo transition-colors duration-300">
              Unrush
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-charcoal hover:text-deep-indigo transition-all duration-300 font-inter font-medium group py-2"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-deep-indigo to-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={handleCTAClick}
              className="btn-primary group relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center font-semibold">
                <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Start Project
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-deep-indigo p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 border-t border-gray-200' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 text-charcoal hover:text-deep-indigo hover:bg-gray-50 transition-all duration-300 font-inter font-medium rounded-lg mx-2 animate-fade-in`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-2 pt-4 border-t border-gray-200 mt-4">
              <button 
                onClick={handleCTAClick}
                className="btn-primary w-full group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative flex items-center justify-center font-semibold">
                  <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Start Project
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
