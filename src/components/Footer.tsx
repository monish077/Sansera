import React from 'react';
import { SanseraLogo } from './SanseraLogo';
import { Phone, ArrowUp, TrendingUp, FileText, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenRfq: () => void;
  onOpenFinancials: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq, onOpenFinancials, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f8fafc] text-slate-600 text-xs relative overflow-hidden border-t border-slate-200">

      {/* ─── Top Contact Desk Banner ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-6 space-y-5">
            <SanseraLogo size="md" variant="light" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
              Get in Touch with Sansera Engineering
            </h3>
            <p className="text-slate-600 text-sm max-w-lg font-normal leading-relaxed">
              Engineering-led manufacturer of complex, high-precision forged and CNC-machined assemblies. Delivering Tier-1 reliability for automotive and aerospace OEMs globally.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-1">
              <div className="text-[10px] font-mono uppercase text-cyan-700 tracking-widest font-semibold">Toll-Free Global Desk</div>
              <div className="text-base font-semibold text-slate-900 flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-cyan-600" />
                1800-2121-321 / +91 (80) 6784-8100
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="px-7 py-4.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-wide border border-slate-300 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Get in Touch
              </button>

              <button
                onClick={onOpenRfq}
                className="px-8 py-4.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xs tracking-wide transition-all shadow-xl shadow-slate-900/15 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Request RFQ</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ─── 4-Column Directory ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Corporate HQ */}
          <div className="space-y-4">
            <div className="text-cyan-700 font-semibold text-xs uppercase font-mono tracking-widest">
              Corporate Headquarters
            </div>
            <div className="space-y-2 text-slate-600 leading-relaxed text-xs">
              <div className="font-bold text-slate-900">Sansera Engineering Limited</div>
              <div>Plant 07, 143/A, Bommasandra Industrial Area,</div>
              <div>Anekal Taluk, Bengaluru – 560 099,</div>
              <div>Karnataka, India.</div>
              <div className="pt-2 text-slate-500 font-mono text-[11px]">CIN: L34103KA1981PLC013042</div>
            </div>
          </div>

          {/* Column 2: Product Segments */}
          <div className="space-y-4">
            <div className="text-cyan-700 font-semibold text-xs uppercase font-mono tracking-widest">
              Product Segments
            </div>
            <ul className="space-y-2.5 text-slate-600 font-medium">
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">Precision Crankshaft Assemblies</a></li>
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">Fracture-Split Connecting Rods</a></li>
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">Roller Rocker Arms & Valvetrain</a></li>
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">Aerospace Flight Control Actuators</a></li>
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">EV Hollow High-RPM Rotor Shafts</a></li>
              <li><a href="#product-segments" className="hover:text-slate-900 transition-colors">Chassis Steering Knuckles & Forgings</a></li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Operations */}
          <div className="space-y-4">
            <div className="text-cyan-700 font-semibold text-xs uppercase font-mono tracking-widest">
              Capabilities & Operations
            </div>
            <ul className="space-y-2.5 text-slate-600 font-medium">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">Closed-Die Forging (4,000T Presses)</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition-colors">5-Axis High-Speed CNC Machining</a></li>
              <li><a href="#automation" className="hover:text-slate-900 transition-colors">Proprietary In-House SPM Building</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition-colors">Controlled Atmosphere Heat Treatment</a></li>
              <li><a href="#facilities" className="hover:text-slate-900 transition-colors">17+ Global Manufacturing Plants</a></li>
              <li><a href="#sustainability" className="hover:text-slate-900 transition-colors">Zero Liquid Discharge & Solar Power</a></li>
            </ul>
          </div>

          {/* Column 4: Investors & Governance */}
          <div className="space-y-4">
            <div className="text-cyan-700 font-semibold text-xs uppercase font-mono tracking-widest">
              Investors & Governance
            </div>
            <ul className="space-y-2.5 text-slate-600 font-medium">
              <li>
                <button onClick={onOpenFinancials} className="hover:text-slate-900 transition-colors text-left flex items-center gap-1.5 font-mono">
                  <span>NSE: SANSERA (₹2,145.30)</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                </button>
              </li>
              <li><a href="#investors" className="hover:text-slate-900 transition-colors">Audited Financial Results (Q4 FY24)</a></li>
              <li><a href="#investors" className="hover:text-slate-900 transition-colors">Annual Reports & AGM Notices</a></li>
              <li><a href="#about" className="hover:text-slate-900 transition-colors">Global OEM Client Case Studies</a></li>
              <li><a href="#sustainability" className="hover:text-slate-900 transition-colors">ESG Disclosures & Sustainability</a></li>
              <li><button onClick={onOpenContact} className="hover:text-slate-900 transition-colors text-left">Get in Touch / Global Desk</button></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ─── Bottom Legal Bar ─── */}
      <div className="border-t border-slate-200 py-6 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px] font-mono">
            © {new Date().getFullYear()} Sansera Engineering Limited. All Rights Reserved. IATF 16949 & AS 9100D Certified.
          </div>
          <div className="flex items-center gap-5 text-[11px] font-medium">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <span className="text-slate-300">•</span>
            <a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Supply</a>
            <span className="text-slate-300">•</span>
            <a href="#disclaimer" className="hover:text-slate-900 transition-colors">Statutory Disclosures</a>
            <span className="text-slate-300">•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
