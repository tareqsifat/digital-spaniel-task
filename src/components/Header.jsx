import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppDispatch, useMobileMenu, useScrollState } from '../hooks/useRedux';
import { toggleMobileMenu, closeMobileMenu, setScrollDirection, setHeaderVisible } from '../store/slices/uiSlice';
import { Button } from '@/components/ui/button';
import logo from '../assets/DigitalSpaniellogo01-01.png';

const Header = () => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useMobileMenu();
  const { headerVisible } = useScrollState();
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        dispatch(setScrollDirection('down'));
        dispatch(setHeaderVisible(false));
      } else {
        // Scrolling up
        dispatch(setScrollDirection('up'));
        dispatch(setHeaderVisible(true));
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, dispatch]);

  const handleNavClick = (href) => {
    dispatch(closeMobileMenu());
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Digital Spaniel" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                  item.name === 'Services' ? 'text-blue-600' : ''
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => handleNavClick('#contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full mt-4"
            onClick={() => handleNavClick('#contact')}
          >
            Let's Talk
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

