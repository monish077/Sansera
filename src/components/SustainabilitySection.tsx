import React from 'react';
import {
  Sun,
  Droplets,
  Recycle,
  ArrowRight,
  ShieldCheck,
  Leaf,
} from 'lucide-react';
import { SANSERA_ESG_METRICS } from '../data/sanseraData';

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
  const highlights = [
    {
      icon: Sun,
      value: '45.2 MWp',
      label: 'Captive Solar Power',
    },
    {
      icon: Droplets,
      value: '100%',
      label: 'Zero Liquid Discharge',
    },
    {
      icon: Recycle,
      value: '99.4%',
      label: 'Steel & Alloy Circularity',
    },
    {
      icon: Leaf,
      value: '2030',
      label: 'Sustainability Roadmap',
    },
  ];

  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-emerald-50/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">

          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5">
              <Leaf className="h-3.5 w-3.5 text-emerald-600" />

              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700">
                ESG & Sustainability
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Engineering a{' '}
              <span className="text-emerald-600">
                sustainable
              </span>{' '}
              future.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We are advancing responsible manufacturing through renewable
              energy, resource efficiency, circularity and sustainable
              mobility solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {onOpenSustainabilityPage && (
                <button
                  onClick={onOpenSustainabilityPage}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
                >
                  <span>Explore Sustainability</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </button>
              )}

              <button
                onClick={onOpenEsgReport}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md"
              >
                ESG Report
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Certification */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-100">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-bold text-slate-900">
                  Certified Sustainability Practices
                </div>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  Environmental, occupational health & safety and energy
                  management systems supporting responsible manufacturing.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['ISO 14001', 'ISO 45001', 'ISO 50001'].map((cert) => (
                    <span
                      key={cert}
                      className="rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wide text-emerald-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Highlights */}
        <div className="mt-14 border-y border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`
                    group px-5 py-7 sm:px-7 sm:py-8
                    transition-colors duration-300
                    hover:bg-emerald-50/50
                    ${
                      index < highlights.length - 1
                        ? 'border-r border-slate-200'
                        : ''
                    }
                    ${
                      index < 2
                        ? 'border-b border-slate-200 md:border-b-0'
                        : ''
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />

                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-400">
                      ESG
                    </span>
                  </div>

                  <div className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs font-medium leading-5 text-slate-500">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-[#f7faf8] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-emerald-600">
              Responsible Growth
            </div>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Precision engineering with sustainability at its core.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Discover our environmental initiatives, climate roadmap,
              circularity efforts and social responsibility programmes.
            </p>
          </div>

          {onOpenSustainabilityPage && (
            <button
              onClick={onOpenSustainabilityPage}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50"
            >
              View ESG Strategy
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};