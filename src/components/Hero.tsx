import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SANSERA_HERO_STATS } from '../data/sanseraData';

interface HeroProps {
  onOpenRfq: () => void;
  onExploreSolutions: () => void;
  onOpenShowroom: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq, onExploreSolutions }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden bg-[#06080d]">
      {/* Background Video Layer - Smooth, Muted, Autoplay, Looping Factory Robotic Arms */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Overlay (30–40%) for Pristine Legibility */}
        <div className="absolute inset-0 bg-black/35 backdrop-brightness-90" />
        
        {/* Soft Vignette & Gradient Overlays for Natural Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080d]/85 via-transparent to-[#06080d]/60" />
      </div>

      {/* Hero Content Container - Clean, Minimal & Premium (Apple / Tesla style layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          
          {/* Main Hero Headline (Preserving exact requested copy) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
            Engineering Precision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">
              Driving Tomorrow’s
            </span>{' '}
            Industries.
          </h1>

          {/* Subtitle Copy (Preserving exact prompt specification) */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed tracking-normal max-w-2xl">
            An engineering-led manufacturer of precision components and systems, powering automotive and industrial innovation through advanced design, manufacturing, and automation.
          </p>

          {/* Minimalist Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreSolutions}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-black font-semibold text-sm tracking-wide shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenRfq}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wide border border-white/20 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>Contact Our Experts</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Minimalist KPI Summary Strip at Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
          {SANSERA_HERO_STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className={`space-y-1 ${idx !== 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:block font-normal">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
