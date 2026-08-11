import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SANSERA_MILESTONES } from '../data/sanseraData';

interface AboutSectionProps {
  onOpenFacilities: () => void;
  onOpenRfq: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenFacilities, onOpenRfq }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(SANSERA_MILESTONES.length - 1);

  return (
    <section id="about" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* ─── Two-Column: Editorial Text Left + 3D Hero Image Right ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left Column: Content ── */}
          <div className="space-y-8 reveal-3d lg:sticky lg:top-32">
            <span className="spec-label-light block">WHO WE ARE</span>

            <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-medium text-[#1d1d1f] leading-[1.05] tracking-[-0.03em] font-display">
              Four decades of<br />
              precision engineering.
            </h2>

            <div className="space-y-5">
              <p className="text-[17px] text-[#3a3a3c] leading-[1.65] font-normal">
                Sansera Engineering is an engineering-led manufacturer of complex, high-precision
                components and systems — powering the world's leading automotive and aerospace
                platforms with uninterrupted Tier-1 delivery.
              </p>
              <p className="text-[15px] text-[#6e6e73] leading-[1.7] font-normal">
                By designing our own special-purpose machines in-house, we eliminate external
                dependencies, compress lead times, and achieve cost structures that no
                conventional supplier can match.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-[#e5e5e5]">
              {[
                { value: '40+', label: 'Years of Engineering Excellence' },
                { value: '17+', label: 'Global Manufacturing Plants' },
                { value: '85M+', label: 'Precision Parts Per Year' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1.5 layer-3d-pop">
                  <div className="text-3xl font-semibold text-[#1d1d1f] font-display tracking-tight">{stat.value}</div>
                  <div className="text-[12px] text-[#6e6e73] leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenFacilities}
                className="btn-primary-light"
              >
                <span>Explore 17+ Global Plants</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenRfq}
                className="btn-ghost-light"
              >
                Connect With Engineering
              </button>
            </div>
          </div>

          {/* ── Right Column: Manufacturing Image (who we are.png) — Pixel-Perfect ── */}
          <div
            className="relative overflow-hidden rounded-[24px] shadow-2xl reveal-3d reveal-delay-1 group tilt-3d-card-light"
            style={{
              width: '100%',
              aspectRatio: '3 / 2',
            }}
          >
            {/* Image — object-cover fills the 3:2 container exactly matching the image's native ratio */}
            <img
              src="/images/who-we-are.png"
              alt="Who We Are — Sansera Precision Engineering Ecosystem"
              loading="eager"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />

            {/* Very subtle bottom gradient for badge readability — doesn't obscure the image */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{ height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)' }}
            />

            {/* Plant Badge Overlay with 3D Pop */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 layer-3d-pop">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase font-semibold">Precision Ecosystem</div>
                  <div className="text-sm sm:text-base font-semibold text-white font-display">Plant 07 — Bangalore HQ</div>
                  <div className="text-[11px] sm:text-xs text-slate-300">Bommasandra Industrial Area</div>
                </div>
                <div className="text-right space-y-0.5">
                  <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase font-semibold">Campus Scale</div>
                  <div className="text-sm sm:text-base font-semibold text-white font-display">38,500 m²</div>
                  <div className="text-[11px] sm:text-xs text-slate-300">IATF 16949 Certified</div>
                </div>
              </div>
            </div>

            {/* Top-left floating chip */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/15 text-[11px] sm:text-xs font-mono text-white/90 tracking-wider layer-3d-pop">
              EST. 1981 • BENGALURU
            </div>
          </div>
        </div>

        {/* ─── Milestone Growth Story ─── */}
        <div className="space-y-10 reveal-3d">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="spec-label-light block">STRATEGIC EVOLUTION</span>
              <h3 className="text-3xl sm:text-4xl font-medium text-[#1d1d1f] tracking-tight font-display">
                Four decades of continuous expansion
              </h3>
            </div>
            <span className="spec-label-light text-[#aeaeb2]">Select milestone year</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SANSERA_MILESTONES.map((milestone, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border tilt-3d-card-light ${
                  selectedMilestone === idx
                    ? 'bg-[#1d1d1f] border-[#1d1d1f] shadow-xl scale-[1.02]'
                    : 'bg-white border-[#e5e5e5] hover:border-[#1d1d1f]/40 hover:-translate-y-0.5'
                }`}
              >
                <div className={`text-2xl font-semibold font-display tracking-tight mb-1 ${
                  selectedMilestone === idx ? 'text-white' : 'text-[#1d1d1f]'
                }`}>
                  {milestone.year}
                </div>
                <div className={`text-xs font-normal line-clamp-1 ${
                  selectedMilestone === idx ? 'text-white/70' : 'text-[#6e6e73]'
                }`}>
                  {milestone.title}
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-[32px] bg-[#f5f5f7] border border-[#e5e5e5] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 tilt-3d-card-light">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="spec-label-light">{SANSERA_MILESTONES[selectedMilestone].year}</span>
                <span className="text-[11px] text-[#aeaeb2] font-mono tracking-wide">
                  {SANSERA_MILESTONES[selectedMilestone].stats}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-medium text-[#1d1d1f] font-display tracking-tight">
                {SANSERA_MILESTONES[selectedMilestone].title}
              </h4>
              <p className="text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                {SANSERA_MILESTONES[selectedMilestone].description}
              </p>
            </div>

            <button
              onClick={onOpenRfq}
              className="btn-ghost-light shrink-0 flex items-center gap-2"
            >
              <span>Explore Partnership</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
