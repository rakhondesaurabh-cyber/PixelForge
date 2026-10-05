import { Download, Menu, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-adobe-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.png" alt="PixelForge Logo" className="w-11 h-11 object-contain" />
              <span className="font-semibold text-xl tracking-tight text-adobe-text">PixelForge</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link to="/#features" className="text-sm font-medium text-adobe-text-muted hover:text-adobe-text transition-colors">Features</Link>
              <Link to="/#compare" className="text-sm font-medium text-adobe-text-muted hover:text-adobe-text transition-colors">Compare</Link>
              <Link to="/docs" className="text-sm font-medium text-adobe-text-muted hover:text-adobe-text transition-colors">Documentation</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-adobe-text-muted hover:text-adobe-text transition-colors">Sign In</a>
            <a href="https://github.com/rakhondesaurabh-cyber/PixelForge/releases/download/PixelForge/PixelForge.Setup.1.0.0.exe" download className="bg-adobe-blue hover:bg-adobe-blue-hover text-white px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              Download Free <ChevronRight size={16} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-adobe-text">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
