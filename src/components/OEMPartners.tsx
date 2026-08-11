import React, { useState } from 'react';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { SANSERA_OEM_PARTNERS } from '../data/sanseraData';
import { OEMPartner } from '../types';

interface OEMPartnersProps {
  onOpenRfq: () => void;
  onOpenOemOnboarding: () => void;
}

export const OEMPartners: React.FC<OEMPartnersProps> = ({ onOpenRfq, onOpenOemOnboarding }) => {
  const [selectedPartner, setSelectedPartner] = useState<OEMPartner>(SANSERA_OEM_PARTNERS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Two-Wheeler', 'Passenger Vehicle', 'Commercial & Industrial', 'Aerospace'];

  const filteredPartners = SANSERA_OEM_PARTNERS.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="oem-partners" className="bg-white py-32 overflow-hidden border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* ─── Header ─── */}
        <div className="max-w-4xl space-y-6 reveal">
          <span className="spec-label-light block">Direct Tier-1 OEM Relationships</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#1d1d1f] leading-[1.06] tracking-[-0.03em] font-display">
            Trusted by the world's leading automotive &{' '}
            <span className="text-[#6e6e73]">aerospace manufacturers.</span>
          </h2>
          <p className="text-[17px] text-[#6e6e73] leading-[1.65] max-w-[580px]">
            Supplying critical powertrain, suspension, and flight-control assemblies with decades of uninterrupted Tier-1 delivery to global OEMs across North America, Europe, and Asia.
          </p>
        </div>

        {/* ─── Category Filter Pills ─── */}
        <div className="flex flex-wrap items-center gap-2.5 reveal reveal-delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-lg'
                  : 'bg-white text-[#6e6e73] border-[#e5e5e5] hover:border-[#1d1d1f]/40 hover:text-[#1d1d1f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── Partner Grid ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 reveal reveal-delay-2">
          {filteredPartners.map((partner) => {
            const isSelected = selectedPartner.id === partner.id;
            return (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift ${
                  isSelected
                    ? 'bg-[#1d1d1f] border-[#1d1d1f] shadow-2xl text-white'
                    : 'bg-white border-[#e5e5e5] hover:border-[#1d1d1f]/30'
                }`}
                style={{ minHeight: '160px' }}
              >
                <div className="space-y-2">
                  <div className={`text-[10px] font-mono uppercase tracking-wider ${
                    isSelected ? 'text-cyan-400 font-semibold' : 'text-[#86868b]'
                  }`}>
                    {partner.category}
                  </div>
                  <div className={`text-xl font-bold tracking-tight font-display ${
                    isSelected ? 'text-white' : 'text-[#1d1d1f]'
                  }`}>
                    {partner.logoText}
                  </div>
                  <div className={`text-xs line-clamp-1 ${
                    isSelected ? 'text-white/70' : 'text-[#6e6e73]'
                  }`}>
                    {partner.name}
                  </div>
                </div>
                <div className={`mt-4 pt-3 border-t text-[10px] font-mono ${
                  isSelected ? 'border-white/15 text-white/50' : 'border-[#e5e5e5] text-[#aeaeb2]'
                }`}>
                  {partner.partnershipDuration.split(' ').slice(0, 2).join(' ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Selected Partner Showcase & Onboarding CTA ─── */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#f5f5f7] border border-[#e5e5e5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 reveal reveal-delay-3 shadow-sm">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="spec-label-light">{selectedPartner.category}</span>
              <span className="text-[11px] text-[#86868b] font-mono">
                Partner Since {selectedPartner.partnershipDuration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f] font-display tracking-tight">
              {selectedPartner.name}
            </h3>

            <div className="space-y-2">
              <span className="spec-label-light block">Supplied Serial Components</span>
              <div className="flex flex-wrap gap-2">
                {selectedPartner.suppliedComponents.map((comp, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-[12px] text-[#1d1d1f] font-medium shadow-2xs">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenOemOnboarding}
            className="btn-primary-light flex items-center gap-2.5 shrink-0 shadow-lg px-8 py-4.5"
          >
            <span>Onboard as OEM Client</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
