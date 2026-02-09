import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t-4 border-gold-600">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-2 text-white" aria-label="Stratpace Advisory">
              <span className="font-sora font-extrabold text-sm uppercase tracking-[0.18em] text-current">STRATPACE</span>
              <span className="font-sora font-normal text-sm text-gold-600">Advisory</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing clarity in complex markets through rigorous data analysis and strategic foresight.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors transform hover:-translate-y-1 duration-200"><span className="material-symbols-outlined text-xl">public</span></a>
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors transform hover:-translate-y-1 duration-200"><span className="material-symbols-outlined text-xl">share</span></a>
              <a href="#" className="text-gray-400 hover:text-gold-600 transition-colors transform hover:-translate-y-1 duration-200"><span className="material-symbols-outlined text-xl">rss_feed</span></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-600 mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Careers</Link></li>
              <li><Link to="/reports" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Press Room</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-600 mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link to="/capabilities" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Market Intelligence</Link></li>
              <li><Link to="/capabilities" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Strategic Advisory</Link></li>
              <li><Link to="/expertise" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Competitive Landscape</Link></li>
              <li><Link to="/capabilities" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Custom Research</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-600 mb-6">Contact</h4>
            <address className="not-italic text-sm text-gray-300 flex flex-col gap-3">
              <p>100 Bishopsgate<br/>London, EC2M 1GT<br/>United Kingdom</p>
              <p><a href="mailto:info@stratpace.com" className="hover:text-white hover:underline decoration-gold-600 transition-all">info@stratpace.com</a></p>
              <p>+44 (0) 20 7123 4567</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Stratpace Advisory Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;