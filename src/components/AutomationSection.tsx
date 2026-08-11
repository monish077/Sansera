import React from 'react';
import { ArrowRight, Cpu, Bot, Zap, ShieldCheck } from 'lucide-react';

interface AutomationSectionProps {
  onOpenRfq: () => void;
  onOpenCustomMachine: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onOpenRfq, onOpenCustomMachine }) => {
  return (
    <section id="in-house-building" className="bg-white py-32 overflow-hidden border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ─── Full-bleed Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image with Glass Spec Chip */}
          <div className="relative rounded-[32px] overflow-hidden img-zoom reveal shadow-2xl" style={{ aspectRatio: '4/5' }}>
            <img
              src="/images/machined-parts-line.jpg"
              alt="Sansera In-House Automated Machining Line"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Glass Spec Chip */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl rounded-3xl p-6 border border-[#e5e5e5] shadow-2xl max-w-xs space-y-1">
              <span className="spec-label-light block text-cyan-700">In-House SPM Building</span>
              <div className="text-2xl font-bold text-[#1d1d1f] font-display tracking-tight">40% CapEx Reduction</div>
              <p className="text-xs text-[#6e6e73]">Proprietary multi-spindle SPM cells built by Sansera automation engineers.</p>
            </div>
          </div>

          {/* Right Column: Editorial Showcase & Metrics */}
          <div className="space-y-10 reveal reveal-delay-1">
            <div className="space-y-6">
              <span className="spec-label-light block">Proprietary Manufacturing Technology</span>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#1d1d1f] leading-[1.07] tracking-[-0.03em] font-display">
                In-house machine building & 6-axis robotic integration.
              </h2>
              <p className="text-[17px] text-[#3a3a3c] leading-[1.65] max-w-[500px]">
                Unlike traditional suppliers who rely entirely on third-party machine vendors, Sansera designs, fabricates, and programs its own Special Purpose Machines (SPM) and 6-axis robotic cells entirely in-house.
              </p>
            </div>

            {/* Three Industrial Metric Cards */}
            <div className="space-y-0 divide-y divide-[#e5e5e5]">
              {[
                {
                  label: 'Benchmarked CapEx Advantage',
                  value: '40% Cost Savings',
                  desc: 'Lower equipment CapEx & reduced cycle times through multi-spindle fixtures and overhead gantries.',
                  color: 'text-[#1d1d1f]',
                },
                {
                  label: 'Robotic Cell Deployment',
                  value: '400+ Automated Cells',
                  desc: 'Vision-guided robotic loading, deburring, ultrasonic cleaning, and 100% part orientation.',
                  color: 'text-[#1d1d1f]',
                },
                {
                  label: 'Inspection Quality Assurance',
                  value: 'Sub-Pixel AOI Metrology',
                  desc: '100% inline vision camera measurement at full line speed — micro-flaws, finish, and dimensions.',
                  color: 'text-[#1d1d1f]',
                },
              ].map((item, idx) => (
                <div key={idx} className="py-6 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="spec-label-light">{item.label}</span>
                    <span className={`text-lg font-bold font-display tracking-tight ${item.color}`}>{item.value}</span>
                  </div>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCustomMachine}
                className="btn-primary-light flex items-center gap-2.5 shadow-lg px-8 py-4.5"
              >
                <span>Inquire About Custom Machine Building</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
