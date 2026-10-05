import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-adobe-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/favicon.png" alt="PixelForge Logo" className="w-13 h-13 object-contain" />
              <span className="font-semibold text-xl tracking-tight text-adobe-text">PixelForge</span>
            </div>
            <p className="text-adobe-text-muted max-w-sm mb-8">
              The modern, high-performance photo editor built for everyone. No subscriptions, just pure creativity.
            </p>
            <a href="https://github.com/rakhondesaurabh-cyber/PixelForge/releases/download/PixelForge/PixelForge.Setup.1.0.0.exe" download className="bg-adobe-blue hover:bg-adobe-blue-hover text-white px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 w-fit">
              <Download size={18} /> Get PixelForge Free
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-adobe-text mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Download</a></li>
              <li><a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Release Notes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-adobe-text mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Documentation</Link></li>
              <li><a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Community</a></li>
              <li><a href="#" className="text-adobe-text-muted hover:text-adobe-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-adobe-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-adobe-text-muted">
            © {new Date().getFullYear()} PixelForge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-adobe-text-muted hover:text-adobe-text transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-adobe-text-muted hover:text-adobe-text transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
