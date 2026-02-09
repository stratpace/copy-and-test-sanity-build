import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', path: '/expertise' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Reports', path: '/reports' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-navy-900/5 shadow-sm py-3' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <div className="flex items-baseline gap-2 text-navy-900" aria-label="Stratpace Advisory">
            <span className="font-sora font-extrabold text-sm uppercase tracking-[0.18em] text-current">STRATPACE</span>
            <span className="font-sora font-normal text-sm text-gold-600">Advisory</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium relative group transition-colors duration-200 ${
                pathname === link.path ? 'text-navy-900' : 'text-muted-text hover:text-navy-700'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold-600 transition-all duration-300 ease-out ${
                pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/design-system" className="hidden lg:block text-xs font-bold uppercase tracking-wider text-muted-text hover:text-gold-600">
             System
          </Link>
          <button className="hidden md:flex items-center justify-center h-10 px-6 bg-navy-900 text-white text-sm font-bold tracking-wide hover:bg-navy-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-navy-700">
            Client Portal
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-navy-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-navy-900 hover:text-gold-600 transition-colors py-2 border-b border-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 h-12 bg-navy-900 text-white font-bold rounded-sm">
              Client Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;