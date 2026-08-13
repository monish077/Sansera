import React, { useState, useEffect } from 'react';
import { SanseraLogo } from './SanseraLogo';
import {
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenRfq: () => void;
  onOpenFinancials: () => void;
  onOpenSustainabilityPage?: () => void;
  onSelectSegment?: (segmentId: string) => void;

  // Controls navbar appearance
  variant?: 'default' | 'sustainability';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRfq,
  onOpenFinancials,
  onOpenSustainabilityPage,
  variant = 'default',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSustainability = variant === 'sustainability';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out

        ${
          isSustainability
            ? scrolled
              ? `
                bg-white/90
                backdrop-blur-xl
                border-b border-emerald-100/80
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                py-3.5
              `
              : `
                bg-transparent
                border-b border-transparent
                shadow-none
                backdrop-blur-0
                py-5
              `
            : scrolled
              ? `
                bg-[#06080d]/85
                backdrop-blur-xl
                border-b border-white/[0.08]
                shadow-2xl
                py-3.5
              `
              : `
                bg-gradient-to-b
                from-[#06080d]/90
                via-[#06080d]/40
                to-transparent
                py-5
              `
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <a
            href="/"
            className="
              flex items-center
              group
              focus:outline-none
              transition-all
              duration-300
              hover:opacity-90
            "
          >
            <SanseraLogo
              size="md"
              variant={isSustainability ? 'light' : 'dark'}
              showTagline={true}
            />
          </a>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden lg:flex items-center gap-9">

            {/* Who We Are */}
            <a
              href="#about"
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-slate-800 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-cyan-400'
                }
              `}
            >
              Who We Are
            </a>


            {/* Product Segments */}
            <a
              href="#product-segments"
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-slate-800 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-cyan-400'
                }
              `}
            >
              Product Segments
            </a>


            {/* Automation */}
            <a
              href="#in-house-building"
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-slate-800 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-cyan-400'
                }
              `}
            >
              Automation
            </a>


            {/* Global Plants */}
            <a
              href="#facilities"
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-slate-800 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-cyan-400'
                }
              `}
            >
              Global Plants
            </a>


            {/* Sustainability */}
            <a
              href="#sustainability"
              onClick={(e) => {
                if (onOpenSustainabilityPage) {
                  e.preventDefault();
                  onOpenSustainabilityPage();
                }
              }}
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300
                flex items-center gap-1

                ${
                  isSustainability
                    ? 'text-emerald-700 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-emerald-400'
                }
              `}
            >
              <span>ESG &amp; Sustainability</span>
            </a>


            {/* Investors */}
            <a
              href="#investors"
              onClick={(e) => {
                e.preventDefault();
                onOpenFinancials();
              }}
              className={`
                text-[13px]
                font-medium
                tracking-wide
                transition-colors
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-slate-800 hover:text-emerald-600'
                    : 'text-slate-200 hover:text-cyan-400'
                }
              `}
            >
              Investors
            </a>

          </nav>


          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}
          <div className="hidden lg:flex items-center gap-4">

            <button
              onClick={onOpenRfq}
              className={`
                group
                inline-flex
                items-center
                gap-1.5
                px-5
                py-2.5
                rounded-full
                text-xs
                font-semibold
                tracking-wide
                transition-all
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? `
                        bg-emerald-600
                        hover:bg-emerald-700
                        text-white
                        border border-emerald-600
                        shadow-sm
                      `
                      : `
                        bg-white/20
                        hover:bg-white/30
                        text-slate-900
                        border border-slate-900/15
                        backdrop-blur-md
                      `
                    : `
                      bg-white/10
                      hover:bg-white/20
                      text-white
                      border border-white/15
                      hover:border-cyan-400/50
                      backdrop-blur-md
                    `
                }
              `}
            >
              <span>Get in Touch</span>

              <ArrowUpRight
                className={`
                  w-3.5
                  h-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5

                  ${
                    isSustainability
                      ? scrolled
                        ? 'text-emerald-100'
                        : 'text-emerald-700'
                      : 'text-cyan-400'
                  }
                `}
              />
            </button>

          </div>


          {/* =====================================================
              MOBILE CONTROLS
          ====================================================== */}
          <div className="lg:hidden flex items-center gap-3">

            {/* Contact */}
            <button
              onClick={onOpenRfq}
              className={`
                px-3.5
                py-1.5
                rounded-full
                text-xs
                font-semibold
                transition-all
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/80 text-emerald-700 border border-slate-900/10 backdrop-blur-md'
                    : 'bg-cyan-500 text-black'
                }
              `}
            >
              Contact
            </button>


            {/* Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                p-2
                rounded-xl
                focus:outline-none
                transition-all
                duration-300

                ${
                  isSustainability
                    ? scrolled
                      ? 'bg-slate-50 border border-emerald-100 text-slate-700'
                      : 'bg-white/60 border border-slate-900/10 text-slate-800 backdrop-blur-md'
                    : 'bg-white/5 border border-white/10 text-slate-200'
                }
              `}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>

        </div>
      </div>


      {/* =========================================================
          MOBILE DRAWER
      ========================================================== */}
      {mobileMenuOpen && (
        <div
          className={`
            lg:hidden
            mt-3
            border-b
            px-6
            pt-5
            pb-8
            backdrop-blur-2xl
            animate-fade-in

            ${
              isSustainability
                ? `
                  bg-white/95
                  border-emerald-100
                `
                : `
                  bg-[#06080d]/98
                  border-white/10
                `
            }
          `}
        >

          <div
            className={`
              flex
              flex-col
              space-y-4
              text-sm
              font-medium

              ${
                isSustainability
                  ? 'text-slate-700'
                  : 'text-slate-200'
              }
            `}
          >

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-600"
            >
              Who We Are
            </a>


            <a
              href="#product-segments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-600"
            >
              Product Segments
            </a>


            <a
              href="#in-house-building"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-600"
            >
              Automation &amp; Machine Building
            </a>


            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-600"
            >
              17+ Global Plants
            </a>


            <a
              href="#sustainability"
              onClick={() => {
                setMobileMenuOpen(false);

                if (onOpenSustainabilityPage) {
                  onOpenSustainabilityPage();
                }
              }}
              className="py-1 text-emerald-700 hover:text-emerald-600"
            >
              Sustainability &amp; ESG
            </a>


            <a
              href="#investors"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinancials();
              }}
              className="py-1 hover:text-emerald-600"
            >
              Investor Relations
            </a>


            <div className="pt-4 border-t border-emerald-100">

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-emerald-600
                  hover:bg-emerald-700
                  text-white
                  font-medium
                  text-xs
                  tracking-wider
                  uppercase
                  text-center
                  shadow-lg
                  transition-all
                "
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