import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Award, Calendar } from 'lucide-react';
import { SANSERA_FACILITIES } from '../data/sanseraData';
import { FacilityItem } from '../types';

interface FacilitiesMapProps {
  onOpenRfq: () => void;
  onOpenPlantAudit: () => void;
}

export const FacilitiesMap: React.FC<FacilitiesMapProps> = ({ onOpenRfq, onOpenPlantAudit }) => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem>(SANSERA_FACILITIES[0]);
  const [activeRegion, setActiveRegion] = useState<'all' | 'india' | 'europe'>('all');

  const filteredFacilities = SANSERA_FACILITIES.filter(f => {
    if (activeRegion === 'europe') return f.country.includes('Sweden') || f.country.includes('Europe');
    if (activeRegion === 'india') return f.country === 'India';
    return true;
  });

  return (
    <section id="facilities" className="bg-[#f5f5f7] py-32 overflow-hidden border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

        {/* ─── Header & Audit Strip ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="space-y-4 max-w-2xl">
            <span className="spec-label-light block">Global Manufacturing Footprint & Compliance</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#1d1d1f] tracking-[-0.03em] leading-[1.08] font-display">
              17+ audit-ready facilities.<br />
              <span className="text-[#6e6e73]">India & Europe.</span>
            </h2>
            <p className="text-[16px] text-[#6e6e73] leading-[1.65] max-w-[480px]">
              Built for high-volume automotive and flight-critical aerospace production, certified under IATF 16949, AS9100D, and VDA 6.3 standards.
            </p>
          </div>

          {/* Region Filter Tabs */}
          <div className="flex items-center gap-1.5 p-2 rounded-full bg-white border border-[#e5e5e5] shadow-sm shrink-0">
            {(['all', 'india', 'europe'] as const).map((region) => {
              const labels = { all: 'All 17 Plants', india: 'India Facilities', europe: 'Sweden (Europe)' };
              return (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    activeRegion === region
                      ? 'bg-[#1d1d1f] text-white shadow-sm'
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {labels[region]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compliance Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal reveal-delay-1">
          {[
            { label: 'IATF 16949:2016', sub: 'Automotive Quality Management' },
            { label: 'AS9100D Rev D', sub: 'Aerospace Flight Critical Certification' },
            { label: 'VDA 6.3 Grade A', sub: 'German Process Audit Standard' },
            { label: 'ISO 14001:2015', sub: '100% Zero Liquid Discharge Clean Plants' },
          ].map((cert, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#e5e5e5] space-y-1 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold font-display text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{cert.label}</span>
              </div>
              <p className="text-[11px] text-[#6e6e73] font-mono">{cert.sub}</p>
            </div>
          ))}
        </div>

        {/* ─── Plants List + Detail Inspector ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Plant Selection List */}
          <div className="lg:col-span-5 space-y-3 max-h-[620px] overflow-y-auto pr-2 reveal reveal-delay-1">
            {filteredFacilities.map((facility) => {
              const isSelected = selectedFacility.id === facility.id;
              return (
                <div
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all duration-200 hover-lift ${
                    isSelected
                      ? 'bg-[#1d1d1f] border-[#1d1d1f] shadow-2xl text-white'
                      : 'bg-white border-[#e5e5e5] hover:border-[#1d1d1f]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`spec-label-light ${isSelected ? 'text-cyan-400 font-semibold' : ''}`}>
                      {facility.plantNo}
                    </span>
                    <span className={`text-[11px] font-mono ${isSelected ? 'text-white/60' : 'text-[#86868b]'}`}>
                      {facility.areaSqMeters}
                    </span>
                  </div>
                  <div className={`text-base font-semibold tracking-tight font-display ${isSelected ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {facility.name}
                  </div>
                  <div className={`text-xs mt-1 flex items-center gap-1.5 font-mono ${isSelected ? 'text-white/70' : 'text-[#6e6e73]'}`}>
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>{facility.location}, {facility.state} ({facility.country})</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Facility Detail Inspector */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-[#e5e5e5] overflow-hidden shadow-xl reveal reveal-delay-2">

            {/* Plant Header Image */}
            <div className="relative img-zoom" style={{ height: '260px' }}>
              <img
                src="/images/plant-exterior.avif"
                alt="Sansera Manufacturing Plant Exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="spec-label text-cyan-400 block mb-1">Audit-Ready Manufacturing Campus</span>
                <span className="text-2xl font-semibold text-white font-display">{selectedFacility.name}</span>
              </div>
            </div>

            {/* Details & Specs */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="spec-label-light block mb-1">{selectedFacility.plantNo}</span>
                  <h3 className="text-2xl font-semibold text-[#1d1d1f] font-display tracking-tight">
                    {selectedFacility.name}
                  </h3>
                  <div className="text-xs text-[#6e6e73] flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{selectedFacility.location}, {selectedFacility.state} — {selectedFacility.country}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="spec-label-light block mb-1">Campus Area</span>
                  <span className="text-2xl font-bold text-[#1d1d1f] font-display">{selectedFacility.areaSqMeters}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#f5f5f7] space-y-1">
                  <span className="spec-label-light block">Workforce & Engineers</span>
                  <span className="text-lg font-semibold text-[#1d1d1f] font-display">{selectedFacility.workforceCount}+ Certified Staff</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#f5f5f7] space-y-1">
                  <span className="spec-label-light block">Quality Certification</span>
                  <span className="text-base font-semibold text-[#1d1d1f] font-display">{selectedFacility.certifications[0]}</span>
                </div>
              </div>

              {/* Machinery & Infrastructure */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] space-y-1.5">
                <span className="spec-label-light block">Machinery & Automated Cell Infrastructure</span>
                <p className="text-[13px] text-[#3a3a3c] font-mono leading-relaxed">{selectedFacility.keyMachinery}</p>
              </div>

              {/* Audit Booking CTA Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#e5e5e5]">
                <div className="flex items-center gap-2 text-xs text-[#6e6e73] font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Audit-ready compliance & guest clearances active</span>
                </div>
                <button
                  onClick={onOpenPlantAudit}
                  className="btn-primary-light flex items-center gap-2.5 shrink-0 px-7 py-3.5 shadow-md"
                >
                  <span>Schedule Plant Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
