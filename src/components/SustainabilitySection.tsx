import React from 'react';
import { Sun, Droplets, Recycle, Feather, ArrowRight, ShieldCheck, Wind, Leaf } from 'lucide-react';
import { SANSERA_ESG_METRICS } from '../data/sanseraData';

const iconMap: Record<string, any> = { Sun, Droplets, Recycle, Feather, Wind, Leaf };

interface SustainabilitySectionProps {
  onOpenRfq: () => void;
  onOpenEsgReport: () => void;
  onOpenSustainabilityPage?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  onOpenRfq,
  onOpenEsgReport,
  onOpenSustainabilityPage,
}) => {
  return (
    <section id="sustainability" className="relative bg-[#070b10] text-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════
          FULL-WIDTH HIGH-VISIBILITY BACKGROUND IMAGE (WWIND.jpeg)
          ═══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/WWIND.jpeg"
          alt="Wind Energy & Sustainability"
          className="w-full h-full object-cover scale-100 opacity-100 brightness-[1.05] contrast-[1.05] transition-opacity duration-1000"
        />

        {/* Subtle directional gradient overlay - shaded on left for text contrast, clear on right for wind turbines */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b10]/75 via-transparent to-[#070b10]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b10]/85 via-[#070b10]/45 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 sm:py-36 space-y-20">

        {/* ─── Editorial Header ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal-3d">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider layer-3d-pop">
              <Leaf className="w-3.5 h-3.5" />
              <span>ESG &amp; CARBON NEUTRALITY STANDARDS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-white tracking-[-0.03em] leading-[1.06] font-display drop-shadow-md">
              Engineering a<br />
              <span className="text-emerald-400">low-carbon global future.</span>
            </h2>

            <p className="text-[17px] text-slate-100 leading-[1.65] max-w-[540px] drop-shadow-sm font-normal">
              Pioneering responsible manufacturing through 45.2 MWp captive solar estate, 100% Zero Liquid Discharge, steel scrap circularity, and lightweight EV components.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {onOpenSustainabilityPage && (
                <button
                  onClick={onOpenSustainabilityPage}
                  className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-400 text-black font-bold text-sm tracking-wide transition-all hover:bg-emerald-300 hover:-translate-y-0.5 shadow-xl shadow-emerald-500/20"
                >
                  <span>Explore Sustainability Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onOpenEsgReport}
                className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/15 text-white font-semibold text-sm backdrop-blur-xl border border-white/25 transition-all hover:bg-white/25"
              >
                Request ESG Report
              </button>
            </div>
          </div>

          {/* ISO Badge with 3D Tilt */}
          <div className="flex items-center gap-3.5 p-5 rounded-3xl bg-black/45 backdrop-blur-md border border-white/20 shadow-2xl shrink-0 tilt-3d-card">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 layer-3d-pop">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="layer-3d-pop">
              <div className="text-sm font-semibold text-white font-display">ISO 14001:2015 &amp; ISO 50001</div>
              <div className="text-xs text-emerald-300 font-medium">100% Green Audited Manufacturing Facilities</div>
            </div>
          </div>
        </div>

        {/* ─── Clean Energy Pillars Strip with 3D Tilt Cards ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 reveal-3d">
          {[
            { icon: Sun, value: '45.2 MWp', label: 'Captive Solar Power', color: 'text-amber-400' },
            { icon: Wind, value: '100%', label: 'Renewable Energy Target', color: 'text-sky-400' },
            { icon: Droplets, value: 'ZLD', label: 'Zero Liquid Discharge', color: 'text-blue-400' },
            { icon: Leaf, value: 'Net Zero', label: 'Carbon Neutrality Roadmap', color: 'text-emerald-400' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-black/45 backdrop-blur-md border border-white/20 flex flex-col gap-3 shadow-xl hover:border-white/40 transition-colors tilt-3d-card"
              >
                <Icon className={`w-7 h-7 ${item.color} layer-3d-pop`} />
                <div className="layer-3d-pop">
                  <div className={`text-2xl font-bold font-display ${item.color}`}>{item.value}</div>
                  <div className="text-xs text-slate-200 mt-1 leading-tight font-medium">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── ESG Metric Glass Cards with 3D Tilt ─── */}
        <div className="space-y-4 reveal-3d reveal-delay-1">
          <span className="spec-label text-emerald-400 block tracking-widest">ENVIRONMENTAL PERFORMANCE METRICS</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SANSERA_ESG_METRICS.map((esg, idx) => {
              const Icon = iconMap[esg.icon] || Sun;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[28px] bg-black/50 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 shadow-2xl tilt-3d-card"
                  style={{ minHeight: '300px' }}
                >
                  <div className="space-y-4 layer-3d-pop">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[44px] font-bold text-white font-display tracking-tight leading-none">
                        {esg.value}
                        <span className="text-base text-emerald-400 ml-1.5 font-normal">{esg.unit}</span>
                      </div>
                      <div className="text-base font-semibold text-white mt-2 font-display">
                        {esg.metric}
                      </div>
                    </div>
                    <p className="text-[13.5px] text-slate-200 leading-relaxed">
                      {esg.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/15 mt-4 layer-3d-pop">
                    <span className="text-[11px] font-mono text-emerald-300 font-semibold tracking-wider uppercase">
                      Target: {esg.target}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CTA Banner with 3D Tilt Card ─── */}
        <div className="relative overflow-hidden p-10 sm:p-14 rounded-[32px] bg-gradient-to-r from-black/80 via-emerald-950/70 to-black/80 backdrop-blur-2xl border border-emerald-500/30 reveal-3d reveal-delay-2 shadow-2xl tilt-3d-card">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl layer-3d-pop">
              <span className="spec-label text-emerald-400 block">Circularity &amp; Fleet Decarbonization</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white font-display tracking-tight">
                Accelerating global OEM Scope 3 decarbonization.
              </h3>
              <p className="text-[15px] text-slate-200 leading-relaxed">
                By engineering hollow rotor shafts, fracture-split con-rods, and aluminum forged links,
                we assist global OEM fleets in eliminating tens of thousands of metric tonnes of lifecycle emissions.
              </p>
              <div className="flex flex-wrap gap-6 pt-3">
                {[
                  { value: '99.4%', label: 'Steel &amp; Alloy Circularity' },
                  { value: '-28%', label: 'Mass Reduction via Lightweighting' },
                  { value: '30K MT', label: 'CO₂ Avoided per Lifecycle' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-emerald-400 font-display">{stat.value}</div>
                    <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenEsgReport}
              className="shrink-0 flex items-center gap-2.5 px-8 py-4.5 rounded-full bg-emerald-400 text-black font-bold text-sm tracking-wide transition-all hover:bg-emerald-300 hover:-translate-y-0.5 shadow-xl shadow-emerald-500/20 layer-3d-pop"
            >
              <span>Request ESG Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
