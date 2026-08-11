import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductSegmentsProps {
  onOpenRfq: () => void;
}

interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string;
}

interface SegmentDef {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  categories: ProductCategory[];
}

const SEGMENTS: SegmentDef[] = [
  {
    id: 'automotive',
    title: 'AUTOMOTIVE',
    subtitle: 'Mobility & Powertrain Systems',
    accentColor: '#2563eb',
    categories: [
      {
        id: 'two-wheelers',
        name: 'Two-Wheelers',
        subtitle: 'Motorcycle Powertrain',
        description:
          'Precision forged crankshafts, connecting rods, rocker arms, and valvetrain assemblies for global motorcycle OEMs including Hero, Honda & KTM.',
        image: '/images/Two-Wheeler.png',
        specs: '14.2M Units/yr • Micro-alloy Steel',
      },
      {
        id: 'passenger-vehicles',
        name: 'Passenger Vehicles',
        subtitle: 'ICE & Hybrid Engines',
        description:
          'Engineered monoblock crankshafts, fracture-split connecting rods, and chassis components for ICE & hybrid passenger cars globally.',
        image: '/images/Passenger.png',
        specs: 'Sub-micron Journals • Ra < 0.08 μm',
      },
      {
        id: 'ev',
        name: 'EV & E-Mobility',
        subtitle: 'Electric Powertrain',
        description:
          'High-RPM hollow rotor shafts, e-axle gear reduction shafts, and battery structural components for next-gen electric vehicles.',
        image: '/images/EV.png',
        specs: 'Up to 20,000 RPM • Lightweight Alloys',
      },
      {
        id: 'commercial-vehicles',
        name: 'Commercial Vehicles',
        subtitle: 'Heavy Drivetrain',
        description:
          'Heavy-duty forged powertrain components, steering knuckles, and suspension links for commercial fleets and trucks.',
        image: '/images/Commercial.png',
        specs: '4,000T Forging • High Fatigue Strength',
      },
    ],
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL',
    subtitle: 'Off-Road, Marine & Machinery',
    accentColor: '#ea580c',
    categories: [
      {
        id: 'off-road',
        name: 'OffRoad Vehicles',
        subtitle: 'All-Terrain Systems',
        description:
          'High-torque forged drive assemblies and heavy suspension linkages for all-terrain utility vehicles and earthmovers.',
        image: '/images/OffRoad.png',
        specs: 'High Impact Resistance • Sealed Assemblies',
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
        subtitle: 'Farming Machinery',
        description:
          'Precision tractor engine crankshafts, connecting rods, and hydraulic pump components for modern farming equipment.',
        image: '/images/Agriculture.png',
        specs: 'Heavy Duty Forging • ISO DIN Standard',
      },
      {
        id: 'industrial-engines',
        name: 'Industrial Engines',
        subtitle: 'Power Generation',
        description:
          'Heavy-duty power generation engine components and multi-cylinder crankshafts engineered for continuous industrial duty cycles.',
        image: '/images/Industrial-Engine.png',
        specs: 'Continuous Duty • 100% MPI Inspection',
      },
      {
        id: 'marine',
        name: 'Marine',
        subtitle: 'Propulsion & Engines',
        description:
          'Corrosion-resistant forged marine propulsion shafts, connecting rods, and high-load marine engine assemblies.',
        image: '/images/Marine.png',
        specs: 'Marine Grade Alloys • Salt-Spray Tested',
      },
      {
        id: 'construction',
        name: 'Construction',
        subtitle: 'Earthmoving Machinery',
        description:
          'Heavy structural forgings, hydraulic pinions, and excavator track gear components for severe earthmoving duty.',
        image: '/images/Construction.png',
        specs: 'Extreme Load Bearing • Induction Hardened',
      },
    ],
  },
  {
    id: 'ads',
    title: 'ADS',
    subtitle: 'Aerospace, Defence & Semiconductors',
    accentColor: '#7c3aed',
    categories: [
      {
        id: 'aerospace',
        name: 'Aerospace',
        subtitle: 'Flight-Critical Systems',
        description:
          'AS9100D flight-critical structural fittings, door latching mechanisms, and titanium flight control actuator housings.',
        image: '/images/Aerospace.png',
        specs: 'AS9100D Rev D • 5-Axis CNC Machining',
      },
      {
        id: 'defence',
        name: 'Defence',
        subtitle: 'Tactical Engineering',
        description:
          'Armored vehicle transmission gears, heavy tactical mobility forged spindles, and defense-grade precision assemblies.',
        image: '/images/Defence.png',
        specs: 'High Tensile Armor Steel • MIL Spec Quality',
      },
      {
        id: 'semiconductors',
        name: 'Semiconductors',
        subtitle: 'Cleanroom Hardware',
        description:
          'Sub-micron ultra-precision CNC machined vacuum chamber components and wafer processing hardware for semiconductor fabs.',
        image: '/images/Semi-Conductor.png',
        specs: 'Sub-Micron Precision • Cleanroom Assembly',
      },
    ],
  },
];

/* ─── Individual category cell ─────────────────────────────── */
interface CategoryCellProps {
  cat: ProductCategory;
  onHoverCat: (cat: ProductCategory) => void;
}

function CategoryCell({ cat, onHoverCat }: CategoryCellProps) {
  return (
    <div
      className="relative overflow-hidden cursor-pointer group bg-[#07090e] rounded-lg transition-all duration-300 w-full h-full flex items-center justify-center p-1"
      onMouseEnter={() => onHoverCat(cat)}
    >
      <img
        src={cat.image}
        alt={cat.name}
        className="w-full h-full object-contain object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      {/* Subtle hover tint */}
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300 pointer-events-none rounded-lg" />
    </div>
  );
}

/* ─── AUTOMOTIVE: 2×2 grid (4 equal cards) ──────────────────────────────────── */
function AutomotiveGrid({
  categories,
  onHoverCat,
}: {
  categories: ProductCategory[];
  onHoverCat: (cat: ProductCategory) => void;
}) {
  return (
    <div
      className="grid grid-cols-2 w-full h-full"
      style={{ gap: '4px', padding: '4px', gridTemplateRows: '1fr 1fr', backgroundColor: '#0a0c12', borderRadius: '14px' }}
    >
      {categories.map((cat) => (
        <div key={cat.id} className="relative overflow-hidden flex items-center justify-center bg-[#07090e]" style={{ borderRadius: '10px', minHeight: 0 }}>
          <CategoryCell cat={cat} onHoverCat={onHoverCat} />
        </div>
      ))}
    </div>
  );
}

/* ─── INDUSTRIAL: top 2 + bottom 3 (5 cards) ─────────────────────────── */
function IndustrialGrid({
  categories,
  onHoverCat,
}: {
  categories: ProductCategory[];
  onHoverCat: (cat: ProductCategory) => void;
}) {
  return (
    <div
      className="flex flex-col w-full h-full"
      style={{ gap: '4px', padding: '4px', backgroundColor: '#0a0c12', borderRadius: '14px' }}
    >
      <div className="flex min-h-0" style={{ gap: '4px', flex: '1' }}>
        {categories.slice(0, 2).map((cat) => (
          <div key={cat.id} className="relative overflow-hidden flex items-center justify-center bg-[#07090e]" style={{ flex: 1, borderRadius: '10px', minWidth: 0 }}>
            <CategoryCell cat={cat} onHoverCat={onHoverCat} />
          </div>
        ))}
      </div>
      <div className="flex min-h-0" style={{ gap: '4px', flex: '1' }}>
        {categories.slice(2, 5).map((cat) => (
          <div key={cat.id} className="relative overflow-hidden flex items-center justify-center bg-[#07090e]" style={{ flex: 1, borderRadius: '10px', minWidth: 0 }}>
            <CategoryCell cat={cat} onHoverCat={onHoverCat} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ADS: 1 top + 2 bottom (3 cards) ─────────────────────────── */
function AdsGrid({
  categories,
  onHoverCat,
}: {
  categories: ProductCategory[];
  onHoverCat: (cat: ProductCategory) => void;
}) {
  return (
    <div
      className="flex flex-col w-full h-full"
      style={{ gap: '4px', padding: '4px', backgroundColor: '#0a0c12', borderRadius: '14px' }}
    >
      <div className="relative overflow-hidden flex items-center justify-center bg-[#07090e]" style={{ flex: '1.2', borderRadius: '10px', minHeight: 0 }}>
        <CategoryCell cat={categories[0]} onHoverCat={onHoverCat} />
      </div>
      <div className="flex min-h-0" style={{ gap: '4px', flex: '1' }}>
        {categories.slice(1).map((cat) => (
          <div key={cat.id} className="relative overflow-hidden flex items-center justify-center bg-[#07090e]" style={{ flex: 1, borderRadius: '10px', minWidth: 0 }}>
            <CategoryCell cat={cat} onHoverCat={onHoverCat} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export const ProductSegments: React.FC<ProductSegmentsProps> = ({ onOpenRfq }) => {
  const [hoveredMap, setHoveredMap] = useState<Record<string, ProductCategory | null>>({
    automotive: null,
    industrial: null,
    ads: null,
  });

  const handleHoverCat = (segId: string, cat: ProductCategory | null) => {
    setHoveredMap((prev) => ({ ...prev, [segId]: cat }));
  };

  return (
    <section id="product-segments" className="bg-white py-24 sm:py-32 overflow-hidden border-t border-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 space-y-12">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal-3d">
          <div className="space-y-3">
            <span className="spec-label-light block">OUR PRODUCT SEGMENTS</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-medium text-[#1d1d1f] tracking-[-0.03em] leading-[1.06] font-display">
              Precision across mobility,
              <br />
              <span className="text-[#6e6e73]">industrial systems &amp; advanced technology.</span>
            </h2>
          </div>
          <button
            onClick={onOpenRfq}
            className="btn-primary-light shrink-0 px-6 py-3"
          >
            <span>Request Component RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ─── 3 Segment Cards (3D Tilt Cards) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal-3d reveal-delay-1">
          {SEGMENTS.map((seg) => {
            const hoveredCat = hoveredMap[seg.id];

            return (
              <div
                key={seg.id}
                onMouseLeave={() => handleHoverCat(seg.id, null)}
                onClick={() => onOpenRfq()}
                className="relative overflow-hidden rounded-[28px] bg-white border border-[#e5e5e5] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer tilt-3d-card-light"
                style={{ height: '640px' }}
              >
                {/* ── Segment Tab Header ── */}
                <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] shrink-0 bg-white layer-3d-pop">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: seg.accentColor }}
                    />
                    <h3 className="text-base font-bold text-[#1d1d1f] font-display tracking-wider">
                      {seg.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#f5f5f7] border border-[#e5e5e5] text-[#6e6e73]">
                    {seg.categories.length} Sectors
                  </span>
                </div>

                {/* ── Image Grid Container ── */}
                <div className="relative flex-1 min-h-0 bg-[#07090e] p-2">

                  {/* Hover fill overlay */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none p-2"
                    style={{
                      opacity: hoveredCat ? 1 : 0,
                      transition: 'opacity 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    {hoveredCat && (
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#07090e] border border-white/25 shadow-2xl">
                        <img
                          src={hoveredCat.image}
                          alt={hoveredCat.name}
                          className="w-full h-full object-contain object-center p-2 bg-[#07090e]"
                          style={{ transform: 'scale(1.02)', transition: 'transform 0.5s ease' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2.5 layer-3d-pop">
                          <span
                            className="text-[11px] font-mono tracking-[0.2em] uppercase block font-semibold"
                            style={{ color: seg.accentColor }}
                          >
                            {hoveredCat.subtitle}
                          </span>
                          <h4 className="text-2xl font-bold text-white font-display leading-tight">
                            {hoveredCat.name}
                          </h4>
                          <p className="text-sm text-slate-200 leading-relaxed font-normal">
                            {hoveredCat.description}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-white/20">
                            <span
                              className="text-[11px] font-mono font-semibold"
                              style={{ color: seg.accentColor }}
                            >
                              {hoveredCat.specs}
                            </span>
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              Request RFQ
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Underneath Sub-Grid Layout */}
                  <div className="w-full h-full">
                    {seg.id === 'automotive' && (
                      <AutomotiveGrid
                        categories={seg.categories}
                        onHoverCat={(cat) => handleHoverCat(seg.id, cat)}
                      />
                    )}
                    {seg.id === 'industrial' && (
                      <IndustrialGrid
                        categories={seg.categories}
                        onHoverCat={(cat) => handleHoverCat(seg.id, cat)}
                      />
                    )}
                    {seg.id === 'ads' && (
                      <AdsGrid
                        categories={seg.categories}
                        onHoverCat={(cat) => handleHoverCat(seg.id, cat)}
                      />
                    )}
                  </div>
                </div>

                {/* ── Segment Subtitle Footer ── */}
                <div className="px-6 py-3.5 border-t border-[#e5e5e5] bg-[#f5f5f7] shrink-0">
                  <p className="text-xs text-[#6e6e73] font-medium">{seg.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Bottom CTA Strip (3D Tilt Card) ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 rounded-[28px] bg-[#f5f5f7] border border-[#e5e5e5] reveal-3d reveal-delay-2 shadow-sm tilt-3d-card-light">
          <div className="space-y-1 max-w-2xl">
            <span className="spec-label-light block">Direct Engineering Sourcing</span>
            <h3 className="text-xl sm:text-2xl font-medium text-[#1d1d1f] font-display tracking-tight">
              Request feasibility study &amp; component RFQ package
            </h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Connect directly with Sansera forging metallurgists, CNC process architects, and tooling engineers.
            </p>
          </div>
          <button
            onClick={onOpenRfq}
            className="btn-primary-light shrink-0 px-8 py-4 shadow-md"
          >
            <span>Request Component RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
