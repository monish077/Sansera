import React, { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  ShieldCheck,
  ArrowRight,
  Wind,
  Sun,
  Droplets,
  Recycle,
  Users,
  FileText,
  Download,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Heart,
  BookOpen,
} from 'lucide-react';
import { Navbar } from './Navbar';

interface SustainabilityPageProps {
  onBackToHome: () => void;
  onOpenRfq: () => void;
  onOpenEsgReport: () => void;
  onOpenContact: () => void;
}

// ─── Reveal hook ────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Counter animation ───────────────────────────────────────────────────────
function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal();
  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  onBackToHome,
  onOpenRfq,
  onOpenEsgReport,
  onOpenContact,
}) => {
  const [activeRisk, setActiveRisk] = useState<number | null>(null);
  const [roadmapStep, setRoadmapStep] = useState(0);

  // Auto-advance roadmap
  useEffect(() => {
    const t = setInterval(() => setRoadmapStep(p => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  // Reveal sections
  const ceo = useReveal();
  const kpi = useReveal();
  const energy = useReveal();
  const efficiency = useReveal();
  const water = useReveal();
  const circular = useReveal();
  const people = useReveal();
  const safety = useReveal();
  const community = useReveal();
  const supply = useReveal();
  const gov = useReveal();
  const certs = useReveal();
  const cta = useReveal();

  const IMG = '/images/sustainability/';

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">

      {/* ── NAVBAR ── */}
      <Navbar
        onOpenRfq={onOpenRfq}
        onOpenFinancials={onBackToHome}
        onOpenSustainabilityPage={undefined}
      />

      {/* ══════════════════════════════════════════════════════
          HERO — PRESERVED EXACTLY
          ══════════════════════════════════════════════════════ */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-100 opacity-95 brightness-[1.05] contrast-[1.04]">
            <source src="/sustainability bg video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/70 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-semibold tracking-widest uppercase">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>SANSERA SUSTAINABILITY &amp; CARBON NEUTRALITY</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-display">
              Engineering a <br />
              <span className="text-emerald-400">More Sustainable</span> Future.
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Advancing precision manufacturing through captive renewable energy, 100% Zero Liquid Discharge, scrap circularity, and lightweight EV components.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button onClick={onOpenEsgReport} className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                <span>Explore ESG Report 2024</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onOpenRfq} className="px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all">
                Connect With ESG Desk
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 14001 &amp; ISO 50001 Certified Facilities</span>
            </div>
            <div className="flex items-center gap-6">
              <span>60% Renewable Electricity — FY2024-25</span>
              <span>•</span>
              <span>Zero Liquid Discharge</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CEO / LEADERSHIP MESSAGE
          ══════════════════════════════════════════════════════ */}

      <br />
      <br />
      <br />
      <br />
      <section className="relative overflow-hidden bg-[#f4f8f5] py-0">
        <div
          ref={ceo.ref}
          className={`mx-auto max-w-7xl transition-all duration-1000 ${ceo.visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
            }`}
        >
          <div
            className="
        relative
        grid
        min-h-[680px]
        grid-cols-1
        lg:grid-cols-[54%_46%]
        xl:grid-cols-[52%_48%]
      "
          >

            {/* =========================================================
          LEFT — CONTENT
         ========================================================= */}
            <div
              className="
          relative
          z-20
          flex
          items-center
          bg-transparent
          px-7
          py-20
          sm:px-10
          lg:px-12
          xl:px-16
          2xl:px-20
          lg:py-24
        "
            >

              {/* =====================================================
            SUBTLE GREEN AMBIENT GLOW
           ===================================================== */}
              <div
                className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-400/10
            blur-[120px]
          "
              />

              {/* Small decorative glow */}
              <div
                className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-green-300/10
            blur-[110px]
          "
              />

              {/* =====================================================
            CONTENT
           ===================================================== */}
              <div className="relative max-w-2xl">

                {/* ===================================================
              SMALL HEADING
             =================================================== */}
                <div className="mb-7 flex items-center gap-3">

                  <span className="h-[2px] w-12 bg-emerald-500" />

                  <span
                    className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-600
                sm:text-[11px]
              "
                  >
                    Leadership Perspective
                  </span>

                </div>


                {/* ===================================================
              QUOTE MARK
             =================================================== */}
                <div
                  className="
              mb-1
              select-none
              font-serif
              text-[72px]
              leading-[0.55]
              text-emerald-500
              sm:text-[80px]
            "
                >
                  “
                </div>


                {/* ===================================================
              MAIN QUOTE
             =================================================== */}
                <h2
                  className="
              max-w-[680px]
              text-[1.7rem]
              font-light
              leading-[1.4]
              tracking-[-0.015em]
              text-slate-950

              sm:text-[1.9rem]

              lg:text-[2rem]

              xl:text-[2.25rem]
            "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Engineering a cleaner future is not only about reducing our
                  footprint. It is about building the systems, technologies and
                  culture that allow responsible growth to continue — for our
                  people, our customers and for the planet.
                </h2>


                {/* ===================================================
              GREEN UNDERLINE / ACCENT
             =================================================== */}
                <div
                  className="
              mt-6
              h-[2px]
              w-20
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-green-300
            "
                />


                {/* ===================================================
              SUPPORTING PARAGRAPH
             =================================================== */}
                <p
                  className="
              mt-8
              max-w-[610px]
              text-sm
              leading-7
              text-slate-600

              sm:text-base

              lg:text-[15px]
              lg:leading-7

              xl:text-base
            "
                >
                  Across renewable energy, water stewardship, circular
                  manufacturing, safety and community investment, Sansera is
                  working to embed sustainability into the way we engineer and
                  grow. Our FY2024-25 results reflect real progress — and a
                  commitment to go further.
                </p>


                {/* ===================================================
              CEO DETAILS
             =================================================== */}
                <div className="mt-9 flex items-center gap-4">

                  {/* Green accent */}
                  <div
                    className="
                h-[58px]
                w-[3px]
                shrink-0
                rounded-full
                bg-emerald-500
              "
                  />

                  <div>

                    {/* Name */}
                    <div
                      className="
                  text-base
                  font-semibold
                  tracking-wide
                  text-slate-950
                  sm:text-lg
                "
                    >
                      S. Sekhar Vasan
                    </div>


                    {/* Designation */}
                    <div
                      className="
                  mt-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-600
                  sm:text-[11px]
                "
                    >
                      Managing Director &amp; CEO
                    </div>


                    {/* Company */}
                    <div
                      className="
                  mt-1
                  text-xs
                  text-slate-500
                "
                    >
                      Sansera Engineering Limited
                    </div>

                  </div>

                </div>

              </div>
            </div>


            {/* =========================================================
          RIGHT — CEO IMAGE
          
          Transparent PNG
          No background
          No overlay
          No gradient
          No object-cover
         ========================================================= */}
            <div
              className="
          relative
          flex
          min-h-[560px]
          items-end
          justify-center
          overflow-hidden
          bg-transparent

          sm:min-h-[620px]

          lg:min-h-[680px]

          xl:min-h-[720px]
        "
            >

              {/* =====================================================
            DECORATIVE GREEN CIRCLES
           ===================================================== */}
              <div
                className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-emerald-200/50
          "
              />

              <div
                className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[-60px]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-emerald-200/30
          "
              />

              {/* =====================================================
            SOFT GREEN GLOW BEHIND CEO
           ===================================================== */}
              <div
                className="
            pointer-events-none
            absolute
            right-[5%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-emerald-200/20
            blur-[100px]
          "
              />


              {/* =====================================================
            ACTUAL CEO PNG
           ===================================================== */}
              <img
                src={`${IMG}CEO FINAL.png`}
                alt="S. Sekhar Vasan, Managing Director and CEO of Sansera Engineering"
                className="
            relative
            z-10
            block
            h-auto
            w-auto
            max-w-none
            shrink-0
            object-contain
            object-bottom

            /* Responsive image sizing */
            h-[560px]

            sm:h-[620px]

            lg:h-[700px]

            xl:h-[750px]

            2xl:h-[780px]

            /* Slightly push image toward right */
            lg:translate-x-[2%]
            xl:translate-x-[3%]
          "
              />

            </div>

          </div>


          {/* =========================================================
        BOTTOM GREEN ACCENT
       ========================================================= */}
          <div
            className="
        h-[3px]
        w-full
        bg-gradient-to-r
        from-emerald-600
        via-emerald-400
        to-transparent
      "
          />

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SUSTAINABILITY AT A GLANCE — EDITORIAL KPI
          ══════════════════════════════════════════════════════ */}
      <section id="metrics" className="py-24 lg:py-32 bg-[#f7faf8]">
        <div
          ref={kpi.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${kpi.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">FY2024-25 Performance</span>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05]">
              Sustainability <span className="text-emerald-600">at a Glance</span>
            </h2>
          </div>

          {/* Hero metric + grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* BIG central metric */}
            <div className="lg:col-span-4 bg-emerald-600 rounded-3xl p-10 flex flex-col justify-between text-white min-h-[280px]">
              <div>
                <div className="text-8xl font-bold tracking-tight leading-none">
                  <AnimatedNumber target={60} suffix="%" />
                </div>
                <div className="mt-4 text-lg font-medium text-emerald-100 leading-snug">Electricity sourced from renewable sources</div>
                <div className="mt-2 text-xs font-mono text-emerald-300">Solar · Wind · GC Hybrid</div>
              </div>
              <div className="mt-8 text-xs font-mono text-emerald-200 border-t border-emerald-500 pt-4">FY2024-25 · Target 80% by 2030</div>
            </div>

            {/* Column of medium metrics */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-slate-900 tracking-tight"><AnimatedNumber target={95} suffix="%" /></div>
                <div className="mt-2 text-base font-medium text-slate-800">Waste diverted from landfill</div>
                <div className="mt-1 text-xs text-slate-500">Waste used as alternative fuel / cement raw material</div>
                <div className="mt-3 text-[11px] font-mono text-emerald-600 uppercase">FY2024-25 · Target: Zero landfill by 2030</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-slate-900 tracking-tight">
                  <AnimatedNumber target={48} suffix="%" />
                </div>
                <div className="mt-2 text-base font-medium text-slate-800">Clean-energy share (electricity + fuel)</div>
                <div className="mt-3 text-[11px] font-mono text-emerald-600 uppercase">FY2024-25</div>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-4 grid grid-rows-3 gap-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><Users className="w-5 h-5" /></div>
                <div>
                  <div className="text-3xl font-bold text-slate-900"><AnimatedNumber target={10319} /></div>
                  <div className="text-xs text-slate-500 mt-0.5">Total workforce · FY2024-25</div>
                </div>
              </div>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><Heart className="w-5 h-5" /></div>
                <div>
                  <div className="text-3xl font-bold text-slate-900"><AnimatedNumber target={32000} suffix="+" /></div>
                  <div className="text-xs text-slate-500 mt-0.5">CSR beneficiaries · FY2024-25</div>
                </div>
              </div>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0"><Globe className="w-5 h-5" /></div>
                <div>
                  <div className="text-3xl font-bold text-slate-900"><AnimatedNumber target={65} suffix="%" /></div>
                  <div className="text-xs text-slate-500 mt-0.5">Suppliers assessed for sustainability · FY2024-25</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { val: '6.1%', label: 'Female representation', note: 'Target 10% by 2030', sub: 'FY2024-25' },
              { val: '11,003', label: 'Employees trained', note: 'Skill & safety programmes', sub: 'FY2024-25' },
              { val: '0', label: 'Fatalities', note: 'Across all plants', sub: 'FY2024-25' },
              { val: '0.04', label: 'LTIFR', note: 'Per million person-hours', sub: 'FY2024-25' },
            ].map((m, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-emerald-700 tracking-tight">{m.val}</div>
                <div className="mt-1 text-sm font-semibold text-slate-800">{m.label}</div>
                <div className="mt-1 text-xs text-slate-500">{m.note}</div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 uppercase">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RENEWABLE ENERGY — large split image
          ══════════════════════════════════════════════════════ */}
      <section id="renewable" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div
          ref={energy.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${energy.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — large image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: '560px' }}>
                <img
                  src={`${IMG}Screenshot 2026-08-11 at 10.26.54 AM.png`}
                  alt="Solar panels covering the globe — representing Sansera's renewable energy transition"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -right-4 lg:right-6 bg-emerald-600 text-white rounded-2xl px-6 py-5 shadow-xl shadow-emerald-900/20">
                <div className="text-4xl font-bold leading-none">60%</div>
                <div className="text-xs font-mono text-emerald-200 mt-1">Renewable Electricity</div>
                <div className="text-[10px] text-emerald-300 mt-0.5">FY2024-25</div>
              </div>

            </div>

            {/* Right — content */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Clean Energy Transition</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Powering Progress with <span className="text-emerald-600">Cleaner Energy</span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Renewable energy is central to Sansera's transition toward lower-footprint manufacturing. In FY2024-25, <strong className="text-slate-900">60% of electricity</strong> was sourced from renewable sources — solar, wind and hybrid power — supporting the company's journey toward an <strong className="text-emerald-700">80% clean-energy target by 2030</strong>.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Sun, label: 'Solar', detail: 'Captive solar installations across Karnataka plants' },
                  { icon: Wind, label: 'Wind', detail: '~35 million kWh/year green-energy procurement — FY2023-24' },
                  { icon: Zap, label: 'GC Hybrid', detail: 'Grid-connected hybrid systems for clean baseload power' },
                ].map(({ icon: Icon, label, detail }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{label}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">Clean-energy progress toward 2030 target</span>
                  <span className="font-bold text-emerald-700">60% / 80%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" style={{ width: '75%', transition: 'width 2s ease' }} />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>NOW · 60%</span>
                  <span>TARGET · 80% · 2030</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width solar image strip */}
          <div className="mt-20 relative rounded-3xl overflow-hidden" style={{ height: '380px' }}>
            <img
              src="/images/sustainability bg2.png"
              alt="Aerial view of Sansera solar field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-12 py-10 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">FY2023-24 Data</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">35,000 MWh renewable energy across Karnataka plants</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Approximately 35 million kWh/year of solar and wind green-energy procurement powering precision-manufacturing facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ENERGY EFFICIENCY
          ══════════════════════════════════════════════════════ */}
      <section id="efficiency" className="py-24 lg:py-32 bg-[#f7faf8]">
        <div
          ref={efficiency.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${efficiency.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">ISO 50001:2018 Certified</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Making Every Unit of <span className="text-emerald-600">Energy Count</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  Sansera combines renewable-energy procurement with operational efficiency. Energy audits, intelligent machine controls and smarter systems help reduce avoidable energy use across manufacturing operations.
                </p>
              </div>

              {/* Numbered list */}
              <div className="space-y-3">
                {[
                  'Regular energy audits across all plants',
                  'Auto-cutoff during machinery idle time',
                  'IE3/IE4 motors (93–95% efficiency)',
                  'Heat pumps replacing electric heaters in washing machines',
                  'Aluminium pipes for compressed-air distribution',
                  'LPG-to-PNG transition at multiple plants',
                  'Photosensors to optimize lighting systems',
                  'Waste-heat recovery using compressors',
                  'Pump & motor optimization in deep-hole drilling',
                  'Continuous improvement through ISO 50001 EMS',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Cert badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-emerald-200 rounded-2xl px-5 py-3 shadow-sm">
                <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900">ISO 50001:2018</div>
                  <div className="text-xs text-slate-500">All plants certified · Energy Management System</div>
                </div>
              </div>
            </div>

            {/* Right — data chart */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Total Energy Consumption</h3>
                <p className="text-xs text-slate-500 mb-8">MWh · FY2022-23 vs FY2023-24</p>

                {[
                  { year: 'FY2022-23', val: 141311, max: 170000, color: 'bg-slate-300' },
                  { year: 'FY2023-24', val: 164975, max: 170000, color: 'bg-emerald-500' },
                ].map((d, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{d.year}</span>
                      <span className="text-sm font-bold text-slate-900">{d.val.toLocaleString()} MWh</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full transition-all duration-1000`} style={{ width: `${(d.val / d.max) * 100}%` }} />
                    </div>
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Energy Intensity</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { year: 'FY2022-23', val: '6.76', unit: 'MWh / ₹M turnover' },
                      { year: 'FY2023-24', val: '6.47', unit: 'MWh / ₹M turnover', improved: true },
                    ].map((d, i) => (
                      <div key={i} className={`p-4 rounded-2xl ${d.improved ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50'}`}>
                        <div className={`text-2xl font-bold ${d.improved ? 'text-emerald-700' : 'text-slate-700'}`}>{d.val}</div>
                        <div className="text-[10px] text-slate-500 mt-1">{d.unit}</div>
                        <div className="text-[10px] font-mono text-slate-400 mt-0.5">{d.year}</div>
                        {d.improved && <div className="text-[10px] text-emerald-600 font-bold mt-1">↓ Improved</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Manufacturing image */}
              <div className="rounded-3xl overflow-hidden shadow-lg" style={{ height: '220px' }}>
                <img src="/images/plant-exterior.avif" alt="Sansera precision manufacturing plant" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WATER STEWARDSHIP
          ══════════════════════════════════════════════════════ */}
      <section id="water" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div
          ref={water.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${water.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <div className="relative" style={{ height: '520px' }}>
              <div className="rounded-3xl overflow-hidden h-full shadow-xl">
                <img
                  src={`${IMG}Screenshot 2026-08-11 at 12.50.07 PM.png`}
                  alt="Hands cradling a green earth — representing Sansera's water stewardship commitment"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* leaf-shaped callout */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl px-6 py-5 text-center"
                style={{ borderRadius: '58% 42% 40% 60% / 52% 48% 52% 48%', minWidth: '140px' }}
              >
                <div className="text-3xl font-bold text-emerald-700">7.33</div>
                <div className="text-[10px] text-slate-600 font-medium mt-1">KL per ₹M turnover</div>
                <div className="text-[9px] font-mono text-slate-400 mt-0.5">Water Intensity · FY2024-25</div>
              </div>
            </div>

            {/* Right — content */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Water Stewardship</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Every Drop <span className="text-emerald-600">Matters</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  Sansera focuses on reducing water intensity, treating wastewater and increasing responsible reuse. Zero Liquid Discharge systems are implemented across multiple facilities, while treated wastewater is reused for activities such as gardening.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Droplets, title: 'Zero Liquid Discharge (ZLD)', desc: 'ZLD systems implemented across multiple Sansera facilities — ensuring no industrial wastewater is discharged.' },
                  { icon: Recycle, title: 'ETP / STP Treatment', desc: 'Effluent and sewage treatment plants process wastewater at source before responsible reuse.' },
                  { icon: Leaf, title: 'Treated Water Reuse', desc: 'Treated wastewater is redirected for non-process uses such as landscaping and gardening across campuses.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{title}</div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CIRCULAR ECONOMY
          ══════════════════════════════════════════════════════ */}
      <section id="circular" className="py-24 lg:py-32 bg-[#f7faf8]">
        <div
          ref={circular.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${circular.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Circular Economy</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              From <span className="text-emerald-600">Waste</span> to Resource
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Sansera is strengthening circularity by reducing waste, recovering valuable materials, recycling metal scrap and diverting waste from landfill.
            </p>
          </div>

          {/* Two-column: infographic image + metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white p-4 border border-slate-100">
              <img
                src={`${IMG}Screenshot 2026-08-11 at 12.41.06 PM.png`}
                alt="Sansera aims for Zero Waste to Landfill by FY2027 — circular flow infographic"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="space-y-6">
              {/* Big stat */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
                <div className="text-7xl font-bold text-emerald-600 tracking-tight">95%</div>
                <div className="text-lg font-medium text-slate-800 mt-2">Waste to landfill eliminated</div>
                <div className="text-sm text-slate-500 mt-1">Waste channelled as alternative fuel / cement raw material</div>
                <div className="text-[11px] font-mono text-emerald-600 mt-3 uppercase">FY2024-25</div>
              </div>

              {/* Target */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 text-center">
                <div className="text-4xl font-bold text-emerald-400">ZERO</div>
                <div className="text-base font-medium mt-2">Waste to Landfill Target</div>
                <div className="text-sm text-slate-400 mt-1">Across all operations by 2030</div>
                <div className="text-[11px] font-mono text-emerald-500 mt-3">Annual Report 2024-25</div>
              </div>

              {/* Practices */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-4">Circular Practices</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Metal-chip compaction & recycling',
                    'Used-oil recovery',
                    'Battery buy-back programmes',
                    'Reuse of plastic bins & containers',
                    'Cotton-waste recollection',
                    'Segregation at source (colour-coded)',
                    'Alternative fuel co-processing',
                    'Food-waste reduction',
                    'Waste-recycler sustainability audits',
                    'Kaizen improvement initiatives',
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Circular flow visual */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
            <h3 className="text-center text-lg font-bold text-slate-900 mb-10">Material Lifecycle at Sansera</h3>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {['Raw Material', 'Precision Forging', 'CNC Machining', 'Scrap Recovery', 'Chip Compaction', 'Third-Party Recycling', 'Back to Steel Mills'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full border-2 border-emerald-300 bg-emerald-50 flex items-center justify-center">
                      <span className="text-xs font-bold text-emerald-700">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-600 text-center max-w-[80px] leading-tight">{step}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PEOPLE
          ══════════════════════════════════════════════════════ */}
      <section id="people" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div
          ref={people.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${people.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Our People</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              People <span className="text-emerald-600">Power</span> Progress
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-3xl leading-relaxed">
              Sustainability starts with people. Sansera invests in employee well-being, skills, engagement, safety and continuous improvement to create a workplace where people contribute, grow and innovate.
            </p>
          </div>

          {/* Large image editorial layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tall image */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl" style={{ minHeight: '520px' }}>
              <img
                src="/images/who-we-are.png"
                alt="Sansera Engineering team members at work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 space-y-6">
              {/* KPIs grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: 10319, fmt: '10,319', label: 'Total workforce', sub: 'FY2024-25', color: 'bg-emerald-600 text-white' },
                  { val: 11003, fmt: '11,003', label: 'Employees trained', sub: 'Skill & safety programmes', color: 'bg-white border border-slate-100 text-slate-900' },
                  { val: 100, fmt: '100%', label: 'Health & accident insurance', sub: 'Coverage across workforce', color: 'bg-white border border-slate-100 text-slate-900' },
                  { val: 6, fmt: '6.1%', label: 'Female representation', sub: 'Target 10% by 2030', color: 'bg-emerald-50 border border-emerald-100 text-slate-900' },
                ].map((m, i) => (
                  <div key={i} className={`rounded-2xl p-6 shadow-sm ${m.color}`}>
                    <div className={`text-4xl font-bold tracking-tight ${m.color.includes('emerald-600') ? 'text-white' : 'text-emerald-700'}`}>{m.fmt}</div>
                    <div className={`text-sm font-medium mt-2 ${m.color.includes('emerald-600') ? 'text-emerald-100' : 'text-slate-800'}`}>{m.label}</div>
                    <div className={`text-xs mt-1 ${m.color.includes('emerald-600') ? 'text-emerald-200' : 'text-slate-500'}`}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Engagement programmes */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-5">Employee Programmes & Initiatives</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Kaizen & Quality Circles',
                    'Safety Day events',
                    'Family Day celebrations',
                    'World Environment Day',
                    'Employee suggestion schemes',
                    'EHS Skill Olympiad',
                    'Annual medical check-ups',
                    'Gym / Yoga facilities',
                    'Service award recognition',
                    'Skill development training',
                    'Attendance bonus',
                    'PF, Gratuity & ESI',
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEI sub-section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl font-bold text-emerald-700">6.1%</div>
                  <div className="text-sm font-medium text-slate-900 mt-1">Female representation</div>
                  <div className="text-xs text-slate-500 mt-1">FY2024-25 · Growing inclusion programme</div>
                  <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '61%' }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>Now: 6.1%</span>
                    <span>2030 target: 10%</span>
                  </div>
                </div>
                {/* Certificate award image */}
                <div className="rounded-3xl overflow-hidden shadow-lg" style={{ minHeight: '160px' }}>
                  <img
                    src={`${IMG}Screenshot 2026-08-11 at 12.42.09 PM.png`}
                    alt="Sansera leadership presenting employee achievement award"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SAFETY
          ══════════════════════════════════════════════════════ */}
      <section id="safety" className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div
          ref={safety.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${safety.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">ISO 45001 · All Plants Certified</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  Safety <span className="text-emerald-400">by Design</span>
                </h2>
                <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                  Sansera protects employees through structured hazard assessment, safety training, PPE, machine safeguards, emergency systems, medical support and ISO 45001-aligned occupational health management.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: '0', label: 'Fatalities', sub: 'FY2024-25' },
                  { val: '0.04', label: 'LTIFR', sub: 'Per million person-hours · FY2024-25' },
                  { val: '14', label: 'Plants certified', sub: 'ISO 45001:2018 · FY2024-25' },
                  { val: '3×', label: 'Great Place to Work', sub: 'Certified consecutively' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                    <div className="text-4xl font-bold text-emerald-400 tracking-tight">{m.val}</div>
                    <div className="text-sm font-medium text-white mt-2">{m.label}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.sub}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  'HIRA — Hazard Identification & Risk Assessment',
                  'Lockout-Tagout procedures',
                  'Machine guards and safety sensors',
                  'Fire hydrants, extinguishers and alarms',
                  'PPE across all operations',
                  'Emergency procedures',
                  'Monthly health & safety audits',
                  'Chemical and fire-safety training',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — eco sustainability image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '540px' }}>
              <img
                src={`${IMG}Screenshot 2026-08-11 at 12.52.09 PM.png`}
                alt="Sustainability icons and green factory — representing Sansera's integrated EHSQ approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Integrated EHSQ System</div>
                <div className="text-white font-bold text-lg mt-1">Environment · Health · Safety · Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COMMUNITY / CSR
          ══════════════════════════════════════════════════════ */}
      <section id="community" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div
          ref={community.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${community.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images — stacked */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: '420px' }}>
                <img
                  src={`${IMG}Screenshot 2026-08-11 at 12.42.58 PM.png`}
                  alt="Sansera leadership planting a sapling with employees on World Environment Day"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* <div className="absolute -bottom-5 right-6 rounded-2xl overflow-hidden shadow-lg" style={{ width: '180px', height: '130px' }}>
                <img
                  src={`${IMG}Screenshot 2026-08-11 at 12.39.08 PM.png`}
                  alt="Hands holding a young sapling — representing community and environment care"
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Sansera Foundation · Est. 2007</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Creating Impact <span className="text-emerald-600">Beyond the Factory</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  Through the Sansera Foundation and employee volunteering, CSR initiatives support education, healthcare, community development, environmental sustainability and opportunities for underserved communities.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '32,000+', label: 'People benefited', sub: 'Education, healthcare & development' },
                  { val: '613', label: 'Scholarships', sub: 'Economically weaker sections' },
                  { val: '1,198', label: 'Blood donations', sub: 'Employee volunteering' },
                ].map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <div className="text-2xl font-bold text-emerald-700">{m.val}</div>
                    <div className="text-xs font-medium text-slate-800 mt-1">{m.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="text-sm font-bold text-slate-900 mb-4">CSR Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                  {['Education', 'Healthcare', 'Livelihood', 'Environment', 'Disability support', 'Skill development', 'Energy conservation', 'Water conservation', 'Sports', 'Sanitation'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SUPPLY CHAIN
          ══════════════════════════════════════════════════════ */}
      <section id="supply" className="py-24 lg:py-32 bg-[#f7faf8]">
        <div
          ref={supply.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${supply.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Responsible Sourcing</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Extending Sustainability Across <span className="text-emerald-600">the Value Chain</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  Sansera extends sustainability beyond its own facilities by assessing suppliers, encouraging responsible sourcing and collaborating with partners to improve environmental and social performance.
                </p>
              </div>

              {/* Progress bars */}
              <div className="space-y-5">
                {[
                  { label: 'FY2023-24', pct: 43, color: 'bg-slate-400' },
                  { label: 'FY2024-25', pct: 65, color: 'bg-emerald-500' },
                  { label: '2027 Target', pct: 75, color: 'bg-emerald-300', target: true },
                ].map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className={`font-medium ${d.target ? 'text-slate-400 italic' : 'text-slate-700'}`}>{d.label}</span>
                      <span className={`font-bold ${d.target ? 'text-slate-400' : 'text-slate-900'}`}>{d.pct}% {d.target ? '(target)' : ''}</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.pct}%` }} />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-slate-500">Suppliers assessed for sustainability practices</p>
              </div>

              {/* Supply chain flow */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="text-xs font-bold text-slate-700 mb-4">Responsible Sourcing Principles</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Human rights & labour standards',
                    'Environmental protection',
                    'Conflict mineral controls',
                    'Responsible natural raw material sourcing',
                    'Health and safety requirements',
                    'Sustainable development',
                    'Water & air quality standards',
                    'Waste reduction & recycling',
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — supply chain image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: '500px' }}>
              <img
                src={`${IMG}Screenshot 2026-08-11 at 12.52.56 PM.png`}
                alt="Business professionals holding a globe with sustainability icons — representing Sansera's supply chain sustainability"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-1">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Extending the ESG Boundary</div>
                <div className="text-xl font-bold text-white">65% of suppliers assessed for sustainability — FY2024-25</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GOVERNANCE
          ══════════════════════════════════════════════════════ */}
      <section id="governance" className="py-24 lg:py-32 bg-white">
        <div
          ref={gov.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${gov.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">ESG Governance</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              Governance that <span className="text-emerald-600">Builds Trust</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-3xl">
              Strong governance supports sustainable growth. Sansera combines board-level ESG oversight, ethical policies, transparent disclosures, compliance systems and stakeholder grievance mechanisms to strengthen accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Green investment image */}
            <div className="lg:col-span-1 rounded-3xl overflow-hidden shadow-lg" style={{ minHeight: '360px' }}>
              <img
                src={`${IMG}Screenshot 2026-08-11 at 12.49.15 PM.png`}
                alt="Growing trees on investment stacks — representing Sansera's ESG-aligned governance"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metrics + policies */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { val: '100%', label: 'Code of Conduct training', sub: 'All management levels · FY2024-25' },
                  { val: '3', label: 'Independent directors', sub: 'Board ESG Committee' },
                  { val: '0', label: 'Corruption / bribery incidents', sub: 'FY2024-25' },
                  { val: '155', label: 'Employee grievances addressed', sub: 'FY2024-25' },
                  { val: '161', label: 'Customer complaints resolved', sub: 'Zero pending at year-end' },
                  { val: 'TÜV SÜD', label: 'ESG limited assurance', sub: 'Key metrics verified · FY2024-25' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="text-2xl font-bold text-emerald-700 tracking-tight">{m.val}</div>
                    <div className="text-xs font-semibold text-slate-800 mt-1">{m.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="text-sm font-bold text-slate-900 mb-4">Governance Policies</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'ESG Policy', 'Code of Conduct', 'Whistleblower Policy',
                    'Anti-Bribery Policy', 'Human Rights Policy', 'Sustainable Procurement',
                    'Conflict Mineral Policy', 'CSR Policy', 'POSH Policy',
                    'Forced & Child Labour Policy', 'Responsible Sourcing', 'Grievance Policy',
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SDG alignment */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src={`${IMG}Screenshot 2026-08-11 at 12.48.04 PM.png`}
              alt="United Nations Sustainable Development Goals — aligned with Sansera's ESG programmes"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CERTIFICATIONS
          ══════════════════════════════════════════════════════ */}
      <section id="certifications" className="py-20 lg:py-28 bg-[#f7faf8]">
        <div
          ref={certs.ref}
          className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${certs.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Verified Standards</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              Standards that <span className="text-emerald-600">Strengthen</span> Our Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { code: 'ISO 14001', name: 'Environmental Management', icon: Leaf, note: 'All plants certified' },
              { code: 'ISO 45001', name: 'Occupational Health & Safety', icon: ShieldCheck, note: '14 plants certified · FY2024-25' },
              { code: 'ISO 50001', name: 'Energy Management System', icon: Zap, note: 'All plants certified · FY2024-25' },
              { code: 'IGBC Platinum', name: 'Green Building Certification', icon: Award, note: 'New & select existing facilities' },
              { code: 'Great Place to Work', name: 'Employer Excellence', icon: Heart, note: '3 consecutive years' },
              { code: 'TÜV SÜD', name: 'ESG Limited Assurance', icon: CheckCircle2, note: 'Key ESG metrics verified' },
            ].map(({ code, name, icon: Icon, note }, i) => (
              <div key={i} className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900">{code}</div>
                  <div className="text-sm text-slate-600">{name}</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2030 ROADMAP — TIMELINE
          ══════════════════════════════════════════════════════ */}
      <section id="roadmap" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Looking Forward</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              Our <span className="text-emerald-600">2030</span> Sustainability Roadmap
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-emerald-200 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  when: 'FY2025-26',
                  label: 'Immediate Focus',
                  items: [
                    'Expand renewable-energy capacity',
                    'Enhance diversity and inclusion',
                    'Deploy ESG data-management systems',
                    'Develop Scope 3 emissions inventory',
                    'Advance waste-reduction technologies',
                  ],
                  active: roadmapStep === 0,
                },
                {
                  when: '2027',
                  label: 'Milestone Target',
                  items: [
                    '75% supplier sustainability assessment coverage',
                    'Strengthen supply-chain sustainability assessments',
                  ],
                  active: roadmapStep === 1,
                },
                {
                  when: '2030',
                  label: 'Vision Targets',
                  items: [
                    '80% clean-energy consumption',
                    '10% female workforce representation',
                    'Zero waste to landfill across operations',
                    'ISO 27001 certification at all plants',
                    'Continued emissions reduction',
                  ],
                  active: roadmapStep === 2,
                },
              ].map((stage, i) => (
                <div
                  key={i}
                  onClick={() => setRoadmapStep(i)}
                  className={`cursor-pointer rounded-3xl p-8 border transition-all duration-500 ${stage.active
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-900 hover:border-emerald-300 hover:shadow-md'
                    }`}
                >
                  {/* dot on timeline */}
                  <div className={`hidden lg:flex w-6 h-6 rounded-full border-2 mb-6 items-center justify-center ${stage.active ? 'bg-white border-emerald-600' : 'bg-emerald-100 border-emerald-400'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${stage.active ? 'bg-emerald-600' : 'bg-emerald-400'}`} />
                  </div>

                  <div className={`text-3xl font-bold tracking-tight ${stage.active ? 'text-white' : 'text-emerald-700'}`}>{stage.when}</div>
                  <div className={`text-sm font-semibold mt-1 ${stage.active ? 'text-emerald-100' : 'text-slate-500'}`}>{stage.label}</div>

                  <div className="mt-6 space-y-2.5">
                    {stage.items.map((item, j) => (
                      <div key={j} className={`flex items-start gap-2.5 text-sm ${stage.active ? 'text-emerald-100' : 'text-slate-700'}`}>
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${stage.active ? 'text-emerald-200' : 'text-emerald-500'}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ESG RISKS & OPPORTUNITIES
          ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#f7faf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Material Topics</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              ESG Risks &amp; <span className="text-emerald-600">Opportunities</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                topic: 'GHG Emissions & Climate',
                risk: 'Emissions-intensive manufacturing; increasing customer, investor and regulatory expectations',
                mitigation: 'Renewable-energy sourcing, energy audits, energy efficiency and lower-footprint equipment',
                opportunity: 'Lower costs, stronger ESG positioning and growing customer preference for low-carbon supply chains',
              },
              {
                topic: 'Waste & Circular Economy',
                risk: 'Improper hazardous-waste handling and landfill dependency',
                mitigation: 'Colour-coded segregation, chip compaction, battery buy-back, authorized recycling and waste-recycler audits',
                opportunity: 'Circular economy value recovery, scrap recycling revenue and zero-landfill leadership',
              },
              {
                topic: 'Energy Efficiency',
                risk: 'Rising energy costs and grid dependency affecting competitiveness',
                mitigation: 'ISO 50001 EMS, IE3/IE4 motors, heat recovery, compressed-air optimization and photosensors',
                opportunity: 'Lower operational costs, improved emissions profile and stronger ESG benchmarks',
              },
              {
                topic: 'Product Responsibility / EV',
                risk: 'Slow EV transition readiness could limit future market access',
                mitigation: 'Ongoing expansion of EV and hybrid component manufacturing capabilities',
                opportunity: 'First-mover advantage in EV component supply; deepening customer relationships',
              },
              {
                topic: 'Occupational Safety',
                risk: 'Physical hazards, chemical exposure, ergonomic strain, noise and fire risks',
                mitigation: 'HIRA, ISO 45001, PPE, machine guards, monthly audits, Lockout-Tagout and medical surveillance',
                opportunity: 'Healthier workforce, lower absenteeism, improved Great Place to Work positioning',
              },
              {
                topic: 'Diversity, Equity & Inclusion',
                risk: 'Underrepresentation limiting talent pipeline and decision-making quality',
                mitigation: 'Structured DEI programmes and a 10% female workforce target for 2030',
                opportunity: 'Better innovation, creativity, engagement and employer reputation',
              },
              {
                topic: 'Sustainable Supply Chain',
                risk: 'Irresponsible sourcing; labour/human-rights violations; environmental non-compliance in supply chain',
                mitigation: 'Responsible sourcing policy, supplier assessments, conflict-mineral controls and ESG-aligned procurement',
                opportunity: 'Resilient supply chain, stronger customer ESG compliance scores and reduced tail risk',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeRisk === i ? 'border-emerald-300 shadow-md' : 'border-slate-200 bg-white'}`}
                onClick={() => setActiveRisk(activeRisk === i ? null : i)}
              >
                <div className={`flex items-center justify-between px-6 py-5 ${activeRisk === i ? 'bg-emerald-600 text-white' : 'bg-white text-slate-900 hover:bg-slate-50'}`}>
                  <span className="font-semibold text-base">{item.topic}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeRisk === i ? 'rotate-90' : ''}`} />
                </div>
                {activeRisk === i && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-emerald-200">
                    {[
                      { label: 'Risk', text: item.risk, color: 'bg-red-50 border-red-100' },
                      { label: 'Mitigation', text: item.mitigation, color: 'bg-yellow-50 border-yellow-100' },
                      { label: 'Opportunity', text: item.opportunity, color: 'bg-emerald-50 border-emerald-100' },
                    ].map((col, j) => (
                      <div key={j} className={`p-6 ${col.color} ${j < 2 ? 'md:border-r md:border-slate-200' : ''}`}>
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{col.label}</div>
                        <p className="text-sm text-slate-700 leading-relaxed">{col.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          REPORTS & POLICIES
          ══════════════════════════════════════════════════════ */}
      <section id="reports" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">Transparency</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
              Reports &amp; <span className="text-emerald-600">Policies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Sustainability Report FY2023-24', type: 'Report', primary: true },
              { name: 'Annual Report 2024-25', type: 'Report', primary: true },
              { name: 'ESG Policy', type: 'Policy' },
              { name: 'Energy Policy (ISO 50001)', type: 'Policy' },
              { name: 'Environmental, Occupational Health & Safety Policy', type: 'Policy' },
              { name: 'Sustainable Procurement Policy', type: 'Policy' },
              { name: 'CSR Policy', type: 'Policy' },
              { name: 'Human Rights & Working Conditions Policy', type: 'Policy' },
              { name: 'Whistleblower Policy', type: 'Policy' },
              { name: 'Anti-Bribery Policy', type: 'Policy' },
              { name: 'Responsible Sourcing of Raw Material Policy', type: 'Policy' },
              { name: 'Conflict Mineral Policy', type: 'Policy' },
            ].map((doc, i) => (
              <button
                key={i}
                onClick={onOpenEsgReport}
                className={`flex items-center justify-between gap-4 p-5 rounded-2xl border text-left group transition-all hover:-translate-y-0.5 ${doc.primary ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:shadow-xl' : 'bg-white border-slate-200 text-slate-900 hover:border-emerald-300 hover:shadow-md'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${doc.primary ? 'bg-emerald-500' : 'bg-slate-100'}`}>
                    {doc.type === 'Report' ? <FileText className={`w-4 h-4 ${doc.primary ? 'text-white' : 'text-slate-600'}`} /> : <BookOpen className={`w-4 h-4 ${doc.primary ? 'text-white' : 'text-slate-600'}`} />}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold leading-snug ${doc.primary ? 'text-white' : 'text-slate-900'}`}>{doc.name}</div>
                    <div className={`text-[10px] font-mono mt-0.5 uppercase ${doc.primary ? 'text-emerald-200' : 'text-slate-400'}`}>{doc.type}</div>
                  </div>
                </div>
                <Download className={`w-4 h-4 shrink-0 ${doc.primary ? 'text-emerald-200 group-hover:text-white' : 'text-slate-400 group-hover:text-emerald-600'} transition-colors`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${IMG}Screenshot 2026-08-11 at 12.51.40 PM.png`}
            alt="Green city in glass dome representing Sansera's sustainable future vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/20" />
        </div>

        <div
          ref={cta.ref}
          className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${cta.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-emerald-700 uppercase">High Precision for a Sustainable Future</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-tight">
              Engineering a <span className="text-emerald-600">More Sustainable</span> Future.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              From renewable wind and solar energy to efficient manufacturing, circular resource use, responsible sourcing, safer workplaces and stronger communities, we are building a more resilient future through precision engineering.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenEsgReport}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Request Sustainability Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBackToHome}
                className="px-8 py-4 rounded-full bg-white border border-slate-300 hover:border-emerald-400 text-slate-800 font-semibold text-sm transition-all hover:shadow-md"
              >
                Back to Main Site
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════ */}
      <footer className="py-10 bg-white border-t border-emerald-100 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-slate-500">
            © {new Date().getFullYear()} Sansera Engineering Limited. All Rights Reserved.
            <span className="ml-2 text-emerald-600 font-semibold">ISO 14001 · ISO 45001 · ISO 50001 Certified.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
