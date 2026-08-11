import React, { useState, useEffect } from 'react';
import { SanseraLogo } from './SanseraLogo';
import { 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onOpenRfq: () => void;
  onOpenFinancials: () => void;
  onOpenSustainabilityPage?: () => void;
  onSelectSegment?: (segmentId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq, onOpenFinancials, onOpenSustainabilityPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06080d]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#06080d]/90 via-[#06080d]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group focus:outline-none transition-transform duration-300 hover:opacity-90">
            <SanseraLogo size="md" variant="dark" showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            <a
              href="#about"
              className="text-[13px] font-medium text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
            >
              Who We Are
            </a>

            <a
              href="#product-segments"
              className="text-[13px] font-medium text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
            >
              Product Segments
            </a>

            <a
              href="#in-house-building"
              className="text-[13px] font-medium text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
            >
              Automation
            </a>

            <a
              href="#facilities"
              className="text-[13px] font-medium text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
            >
              Global Plants
            </a>

            <a
              href="#sustainability"
              onClick={(e) => {
                if (onOpenSustainabilityPage) {
                  e.preventDefault();
                  onOpenSustainabilityPage();
                }
              }}
              className="text-[13px] font-medium text-slate-200 hover:text-emerald-400 transition-colors tracking-wide flex items-center gap-1"
            >
              <span>ESG &amp; Sustainability</span>
            </a>

            <a
              href="#investors"
              onClick={(e) => {
                e.preventDefault();
                onOpenFinancials();
              }}
              className="text-[13px] font-medium text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
            >
              Investors
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenRfq}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wide border border-white/15 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenRfq}
              className="px-3.5 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06080d]/98 border-b border-white/10 px-6 pt-5 pb-8 mt-3 space-y-4 backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col space-y-4 text-sm font-medium text-slate-200">
            <a 
              href="#product-segments" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 flex items-center justify-between"
            >
              <span>Product Segments</span>
            </a>
            <a 
              href="#in-house-building" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Automation &amp; Machine Building
            </a>
            <a 
              href="#facilities" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              17+ Global Plants
            </a>
            <a 
              href="#sustainability" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              Sustainability &amp; ESG
            </a>
            <a 
              href="#investors" 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinancials();
              }}
              className="py-1 hover:text-cyan-400"
            >
              Investor Relations
            </a>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs tracking-wider uppercase text-center shadow-lg"
              >
                Request Engineering RFQ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
