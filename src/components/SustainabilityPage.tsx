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
  BarChart3,
  RefreshCw,
  HeartHandshake,
  Globe2,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { SanseraLogo } from './SanseraLogo';

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
  variant="sustainability"
/>

      {/* ══════════════════════════════════════════════════════
          HERO — PRESERVED EXACTLY
          ══════════════════════════════════════════════════════ */}
      <section
  id="hero"
  className="relative h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#f7faf8]"
>
  {/* ================= BACKGROUND VIDEO ================= */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover object-center"
    >
      <source
        src="/sustainability bg video.mp4"
        type="video/mp4"
      />
    </video>

    {/* Light readability gradient */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-white/90
        via-white/45
        to-transparent
      "
    />

    {/* Soft bottom fade */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t
        from-[#f7faf8]/70
        via-transparent
        to-white/10
      "
    />
  </div>


  {/* ================= AMBIENT LIGHT ================= */}
  <div
    className="
      pointer-events-none
      absolute
      -left-40
      top-1/3
      z-0
      h-[420px]
      w-[420px]
      rounded-full
      bg-emerald-200/20
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-32
      top-[-80px]
      z-0
      h-[360px]
      w-[360px]
      rounded-full
      bg-emerald-100/20
      blur-[100px]
    "
  />


  {/* ================= MAIN CONTENT ================= */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      h-full
      max-w-7xl
      items-start
      px-6
      pt-28
      pb-32
      lg:px-8
      lg:pt-32
      lg:pb-32
    "
  >
    <div className="w-full max-w-3xl">


      {/* ================= EYEBROW ================= */}
      <div
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-200
          bg-white/75
          px-3.5
          py-1.5
          shadow-sm
          backdrop-blur-md
          text-[10px]
          font-mono
          font-semibold
          uppercase
          tracking-[0.16em]
          text-emerald-700
          sm:text-xs
        "
      >
        <span className="relative flex h-2 w-2">
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-emerald-500
              opacity-40
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2
              w-2
              rounded-full
              bg-emerald-500
            "
          />
        </span>

        <Leaf className="h-3.5 w-3.5 text-emerald-600" />

        <span>
          Sansera Sustainability &amp; Carbon Neutrality
        </span>
      </div>


      {/* ================= HEADING ================= */}
      <h1
        className="
          font-display
          text-[clamp(2.8rem,5.2vw,5rem)]
          font-bold
          leading-[0.98]
          tracking-[-0.04em]
          text-slate-900
        "
      >
        Engineering a
        <br />

        <span className="text-emerald-600">
          More Sustainable
        </span>{" "}
        Future.
      </h1>


      {/* ================= DESCRIPTION ================= */}
      <p
        className="
          mt-5
          max-w-2xl
          text-sm
          leading-6
          text-slate-700
          sm:text-base
          sm:leading-7
          lg:text-[17px]
          lg:leading-7
        "
      >
        Advancing precision manufacturing through captive
        renewable energy, 100% Zero Liquid Discharge, scrap
        circularity, and lightweight EV components.
      </p>


      {/* ================= CTA ================= */}
      <div className="mt-6 flex flex-wrap items-center gap-3">

        {/* Primary CTA */}
        <button
          onClick={onOpenEsgReport}
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-emerald-600
            px-6
            py-3
            text-sm
            font-bold
            tracking-wide
            text-white
            shadow-lg
            shadow-emerald-600/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-700
            hover:shadow-xl
          "
        >
          <span>
            Explore ESG Report 2024
          </span>

          <span
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-white/15
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </button>


        {/* Secondary CTA */}
        <button
          onClick={onOpenRfq}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-300
            bg-white/75
            px-6
            py-3
            text-sm
            font-semibold
            text-slate-800
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-emerald-400
            hover:bg-white
            hover:text-emerald-700
            hover:shadow-md
          "
        >
          <span>
            Connect With ESG Desk
          </span>

          <ArrowRight
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>


      {/* ================= TRUST INDICATORS ================= */}
      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-x-5
          gap-y-2
          border-t
          border-slate-300/60
          pt-4
        "
      >

        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

          <span
            className="
              text-[10px]
              font-mono
              font-medium
              text-slate-600
            "
          >
            ISO 14001
          </span>
        </div>


        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />

          <span
            className="
              text-[10px]
              font-mono
              font-medium
              text-slate-600
            "
          >
            ISO 50001
          </span>
        </div>


        <div className="flex items-center gap-1.5">
          <Leaf className="h-3.5 w-3.5 text-emerald-600" />

          <span
            className="
              text-[10px]
              font-mono
              font-medium
              text-slate-600
            "
          >
            Renewable Energy
          </span>
        </div>


        <div className="flex items-center gap-1.5">
          <Droplets className="h-3.5 w-3.5 text-emerald-600" />

          <span
            className="
              text-[10px]
              font-mono
              font-medium
              text-slate-600
            "
          >
            Zero Liquid Discharge
          </span>
        </div>

      </div>

    </div>
  </div>


  {/* ================= BOTTOM METRICS ================= */}
  <div className="absolute bottom-0 left-0 right-0 z-20">
    <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">

      <div
        className="
          grid
          grid-cols-2
          overflow-hidden
          rounded-2xl
          border
          border-slate-200/80
          bg-white/85
          shadow-lg
          shadow-slate-900/5
          backdrop-blur-xl
          sm:grid-cols-4
        "
      >

        {/* 60% */}
        <div
          className="
            border-b
            border-r
            border-slate-200
            px-4
            py-3
            sm:border-b-0
          "
        >
          <div className="text-lg font-bold tracking-tight text-emerald-600">
            60%
          </div>

          <div
            className="
              mt-0.5
              text-[8px]
              font-mono
              uppercase
              tracking-[0.12em]
              text-slate-500
              sm:text-[9px]
            "
          >
            Renewable Electricity
          </div>

          <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
            FY2024-25
          </div>
        </div>


        {/* 100% */}
        <div
          className="
            border-b
            border-slate-200
            px-4
            py-3
            sm:border-b-0
            sm:border-r
          "
        >
          <div className="text-lg font-bold tracking-tight text-emerald-600">
            100%
          </div>

          <div
            className="
              mt-0.5
              text-[8px]
              font-mono
              uppercase
              tracking-[0.12em]
              text-slate-500
              sm:text-[9px]
            "
          >
            Zero Liquid Discharge
          </div>

          <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
            Multiple facilities
          </div>
        </div>


        {/* 95% */}
        <div
          className="
            border-r
            border-slate-200
            px-4
            py-3
          "
        >
          <div className="text-lg font-bold tracking-tight text-emerald-600">
            95%
          </div>

          <div
            className="
              mt-0.5
              text-[8px]
              font-mono
              uppercase
              tracking-[0.12em]
              text-slate-500
              sm:text-[9px]
            "
          >
            Waste Diverted
          </div>

          <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
            FY2024-25
          </div>
        </div>


        {/* 2030 */}
        <div className="px-4 py-3">

          <div className="text-lg font-bold tracking-tight text-emerald-600">
            2030
          </div>

          <div
            className="
              mt-0.5
              text-[8px]
              font-mono
              uppercase
              tracking-[0.12em]
              text-slate-500
              sm:text-[9px]
            "
          >
            Sustainability Vision
          </div>

          <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
            Long-term roadmap
          </div>

        </div>

      </div>
    </div>
  </div>


  {/* ================= VERY SUBTLE BOTTOM FADE ================= */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      right-0
      h-16
      bg-gradient-to-t
      from-[#f7faf8]/40
      to-transparent
    "
  />

</section>

      {/* ══════════════════════════════════════════════════════
          CEO / LEADERSHIP MESSAGE
          ══════════════════════════════════════════════════════ */}

      
      <section className="relative h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#f4f8f5]">
  <div
    ref={ceo.ref}
    className={`mx-auto h-full max-w-7xl transition-all duration-1000 ${
      ceo.visible
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
    }`}
  >

    {/* =========================================================
        MAIN GRID
       ========================================================= */}
    <div
      className="
        relative
        grid
        h-full
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
          h-full
          items-center
          bg-transparent
          px-6
          py-16
          sm:px-10
          lg:px-10
          lg:py-20
          xl:px-14
          2xl:px-16
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
            h-[380px]
            w-[380px]
            rounded-full
            bg-emerald-400/10
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-green-300/10
            blur-[100px]
          "
        />


        {/* =====================================================
            CONTENT
           ===================================================== */}
        <div className="relative w-full max-w-2xl">

          {/* ===================================================
              SMALL HEADING
             =================================================== */}
          <div className="mb-4 flex items-center gap-3">

            <span className="h-[2px] w-10 bg-emerald-500" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-600
                sm:text-[10px]
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
              mb-0
              select-none
              font-serif
              text-[58px]
              leading-[0.45]
              text-emerald-500
              sm:text-[64px]
            "
          >
            “
          </div>


          {/* ===================================================
              MAIN QUOTE
             =================================================== */}
          <h2
            className="
              max-w-[640px]
              text-[1.55rem]
              font-light
              leading-[1.32]
              tracking-[-0.015em]
              text-slate-950
              sm:text-[1.7rem]
              lg:text-[1.8rem]
              xl:text-[2rem]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Engineering a cleaner future is not only about reducing
            our footprint. It is about building the systems,
            technologies and culture that allow responsible growth
            to continue — for our people, our customers and for the
            planet.
          </h2>


          {/* ===================================================
              GREEN ACCENT
             =================================================== */}
          <div
            className="
              mt-4
              h-[2px]
              w-16
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
              mt-5
              max-w-[570px]
              text-[12px]
              leading-6
              text-slate-600
              sm:text-[13px]
              sm:leading-6
              lg:text-[13px]
              xl:text-sm
            "
          >
            Across renewable energy, water stewardship, circular
            manufacturing, safety and community investment, Sansera
            is working to embed sustainability into the way we
            engineer and grow. Our FY2024-25 results reflect real
            progress — and a commitment to go further.
          </p>


          {/* ===================================================
              CEO DETAILS
             =================================================== */}
          <div className="mt-5 flex items-center gap-3">

            {/* Green accent */}
            <div
              className="
                h-[48px]
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
                  text-sm
                  font-semibold
                  tracking-wide
                  text-slate-950
                  sm:text-base
                "
              >
                S. Sekhar Vasan
              </div>


              {/* Designation */}
              <div
                className="
                  mt-0.5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-600
                  sm:text-[9px]
                "
              >
                Managing Director &amp; Chairman
              </div>


              {/* Company */}
              <div
                className="
                  mt-0.5
                  text-[10px]
                  text-slate-500
                  sm:text-[11px]
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
         ========================================================= */}
      <div
        className="
          relative
          hidden
          h-full
          min-h-0
          items-end
          justify-center
          overflow-hidden
          bg-transparent
          lg:flex
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
            h-[480px]
            w-[480px]
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
            h-[380px]
            w-[380px]
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
            top-[18%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-emerald-200/20
            blur-[90px]
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

            h-[620px]

            xl:h-[680px]

            2xl:h-[720px]

            lg:translate-x-[3%]

            xl:translate-x-[4%]
          "
        />

      </div>

    </div>


    {/* =========================================================
        BOTTOM GREEN ACCENT
       ========================================================= */}
    <div
      className="
        absolute
        bottom-0
        left-0
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
      <section
  id="metrics"
  className="relative h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#f7faf8]"
>
  <div
    ref={kpi.ref}
    className={`mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8 transition-all duration-1000 ${
      kpi.visible
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
    }`}
  >

    {/* =========================================================
        HEADER
       ========================================================= */}
    <div className="mb-8 lg:mb-9">

      <h2
        className="
          text-3xl
          font-medium
          leading-[1.05]
          tracking-tight
          text-slate-900
          sm:text-4xl
          lg:text-5xl
          xl:text-6xl
        "
      >
        Sustainability{" "}
        <span className="text-emerald-600">
          at a Glance
        </span>
      </h2>

    </div>


    {/* =========================================================
        MAIN METRIC GRID
       ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        gap-4
        lg:grid-cols-12
        lg:gap-5
      "
    >

      {/* =======================================================
          BIG CENTRAL METRIC
         ======================================================= */}
      <div
        className="
          flex
          min-h-[220px]
          flex-col
          justify-between
          rounded-3xl
          bg-emerald-600
          p-7
          text-white
          shadow-lg
          shadow-emerald-900/10
          sm:p-8
          lg:col-span-4
          lg:min-h-[410px]
          lg:p-8
          xl:p-9
        "
      >

        <div>

          <div
            className="
              text-6xl
              font-bold
              leading-none
              tracking-tight
              sm:text-7xl
              lg:text-[5.5rem]
              xl:text-[6rem]
            "
          >
            <AnimatedNumber
              target={60}
              suffix="%"
            />
          </div>


          <div
            className="
              mt-3
              max-w-[300px]
              text-base
              font-medium
              leading-snug
              text-emerald-100
              sm:text-lg
            "
          >
            Electricity sourced from renewable sources
          </div>


          <div
            className="
              mt-2
              text-[10px]
              font-mono
              uppercase
              tracking-wider
              text-emerald-300
              sm:text-xs
            "
          >
            Solar · Wind · GC Hybrid
          </div>

        </div>


        {/* Bottom information */}
        <div
          className="
            mt-6
            border-t
            border-emerald-500
            pt-3
            text-[10px]
            font-mono
            text-emerald-200
            sm:text-xs
          "
        >
          FY2024-25 · Target 80% by 2030
        </div>

      </div>


      {/* =======================================================
          MEDIUM METRICS
         ======================================================= */}
      <div
        className="
          grid
          grid-rows-2
          gap-4
          lg:col-span-4
          lg:gap-5
        "
      >

        {/* =====================================================
            WASTE METRIC
           ===================================================== */}
        <div
          className="
            flex
            flex-col
            justify-center
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-6
            shadow-sm
            sm:p-7
            lg:p-7
          "
        >

          <div
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            <AnimatedNumber
              target={95}
              suffix="%"
            />
          </div>


          <div
            className="
              mt-2
              text-sm
              font-medium
              text-slate-800
              sm:text-base
            "
          >
            Waste diverted from landfill
          </div>


          <div
            className="
              mt-1
              max-w-md
              text-[11px]
              leading-5
              text-slate-500
              sm:text-xs
            "
          >
            Waste used as alternative fuel / cement raw material
          </div>


          <div
            className="
              mt-2
              text-[9px]
              font-mono
              uppercase
              tracking-wider
              text-emerald-600
              sm:text-[10px]
            "
          >
            FY2024-25 · Target: Zero landfill by 2030
          </div>

        </div>


        {/* =====================================================
            CLEAN ENERGY METRIC
           ===================================================== */}
        <div
          className="
            flex
            flex-col
            justify-center
            rounded-3xl
            border
            border-slate-100
            bg-white
            p-6
            shadow-sm
            sm:p-7
            lg:p-7
          "
        >

          <div
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            <AnimatedNumber
              target={48}
              suffix="%"
            />
          </div>


          <div
            className="
              mt-2
              text-sm
              font-medium
              text-slate-800
              sm:text-base
            "
          >
            Clean-energy share
          </div>


          <div
            className="
              mt-1
              text-[11px]
              leading-5
              text-slate-500
              sm:text-xs
            "
          >
            Electricity + fuel
          </div>


          <div
            className="
              mt-2
              text-[9px]
              font-mono
              uppercase
              tracking-wider
              text-emerald-600
              sm:text-[10px]
            "
          >
            FY2024-25
          </div>

        </div>

      </div>


      {/* =======================================================
          IMAGE
         ======================================================= */}
      <div
        className="
          relative
          min-h-[220px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-100
          bg-white
          shadow-sm
          lg:col-span-4
          lg:min-h-[410px]
        "
      >

        <img
          src="/images/sustainability/ChatGPT Image Aug 12, 2026, 04_34_14 PM.png"
          alt="Sustainability at a Glance"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

      </div>

    </div>


    {/* =========================================================
        SMALL BOTTOM LABEL
       ========================================================= */}
    <div
      className="
        mt-5
        flex
        items-center
        justify-between
        border-t
        border-slate-200
        pt-3
      "
    >

      <div
        className="
          text-[9px]
          font-mono
          uppercase
          tracking-[0.18em]
          text-slate-400
          sm:text-[10px]
        "
      >
        FY2024-25 Performance
      </div>


      <div
        className="
          flex
          items-center
          gap-2
          text-[9px]
          font-mono
          uppercase
          tracking-[0.18em]
          text-emerald-600
          sm:text-[10px]
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Sustainability Metrics
      </div>

    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          WATER STEWARDSHIP
          ══════════════════════════════════════════════════════ */}
      <section
  id="water"
  className="relative min-h-screen overflow-hidden bg-white py-10 lg:py-12"
>
  <div
    ref={water.ref}
    className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
      water.visible
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
    }`}
  >
    {/* =========================================================
        SECTION HEADER
    ========================================================= */}
    <div className="mb-7 max-w-3xl lg:mb-8">
      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-600 sm:text-xs">
        Water Stewardship
      </span>

      <h2 className="mt-2 text-3xl font-medium leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
        Every Drop{" "}
        <span className="text-emerald-600">Matters</span>
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base lg:leading-7">
        Sansera focuses on reducing water intensity, treating wastewater and
        increasing responsible reuse. Zero Liquid Discharge systems are
        implemented across multiple facilities, while treated wastewater is
        reused for activities such as gardening.
      </p>
    </div>

    {/* =========================================================
        MAIN CONTENT
    ========================================================= */}
    <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">

      {/* =======================================================
          LEFT — IMAGE
      ======================================================= */}
      <div className="lg:col-span-6">
        <div className="group relative h-[420px] overflow-hidden rounded-3xl shadow-xl sm:h-[450px] lg:h-[calc(100vh-250px)] lg:min-h-[480px] lg:max-h-[560px]">

          <img
            src={`${IMG}rain.png`}
            alt="Hands cradling a green earth — representing Sansera's water stewardship commitment"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />

          {/* =====================================================
              IMAGE LABEL
          ===================================================== */}
          <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-md">
              <Droplets className="h-3.5 w-3.5 text-emerald-600" />

              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-700">
                Water Stewardship
              </span>
            </div>
          </div>

          {/* =====================================================
              WATER INTENSITY METRIC
          ===================================================== */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
            <div className="w-fit max-w-[280px] rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:p-5">

              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold leading-none tracking-tight text-emerald-700 sm:text-5xl">
                  7.33
                </div>

                <div className="pb-0.5 text-[11px] font-medium text-slate-600 sm:text-xs">
                  KL / ₹M turnover
                </div>
              </div>

              <div className="mt-1.5 text-[9px] font-mono uppercase tracking-wide text-slate-400">
                Water Intensity · FY2024-25
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — CONTENT
      ======================================================= */}
      <div className="flex flex-col justify-center lg:col-span-6">

        {/* Intro */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-emerald-500" />

            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-600">
              Responsible Water Management
            </span>
          </div>
        </div>

        {/* =====================================================
            WATER INITIATIVES
        ===================================================== */}
        <div className="space-y-3">

          {[
            {
              icon: Droplets,
              title: "Zero Liquid Discharge (ZLD)",
              desc: "ZLD systems implemented across multiple Sansera facilities — ensuring no industrial wastewater is discharged.",
            },
            {
              icon: Recycle,
              title: "ETP / STP Treatment",
              desc: "Effluent and sewage treatment plants process wastewater at source before responsible reuse.",
            },
            {
              icon: Leaf,
              title: "Treated Water Reuse",
              desc: "Treated wastewater is redirected for non-process uses such as landscaping and gardening across campuses.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-100 bg-[#f7faf8] p-4 transition-all duration-300 hover:border-emerald-100 hover:bg-white hover:shadow-md sm:p-5"
            >
              <div className="flex items-start gap-3.5">

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-11 sm:w-11">
                  <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {title}
                    </h3>

                    <span className="hidden text-[9px] font-mono text-slate-300 sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {desc}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ===================================================== */}
        <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5">

          <div className="flex items-start gap-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf className="h-4 w-4" />
            </div>

            <div>
              <div className="text-sm font-bold text-slate-900">
                Water. Treat. Reuse.
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-600 sm:leading-6">
                Responsible water management connects treatment, conservation
                and reuse across Sansera's manufacturing campuses.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  {/* =========================================================
      SUBTLE BOTTOM ACCENT
  ========================================================= */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
</section>

      {/* ══════════════════════════════════════════════════════
          CIRCULAR ECONOMY
          ══════════════════════════════════════════════════════ */}
      <section
  id="circular"
  className="py-16 lg:py-20 bg-[#f7faf8] overflow-hidden"
>
  <div
    ref={circular.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      circular.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        SECTION HEADER
    ========================================================= */}
    <div className="max-w-3xl mb-8 lg:mb-9">
      <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">
        Circular Economy
      </span>

      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.05]">
        From <span className="text-emerald-600">Waste</span> to Resource
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
        Sansera is strengthening circularity by reducing waste, recovering
        valuable materials, recycling metal scrap and diverting waste from
        landfill.
      </p>
    </div>

    {/* =========================================================
        MAIN CONTENT
        LEFT IMAGE = SAME HEIGHT AS ALL 3 RIGHT CARDS
    ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — IMAGE
          DESKTOP HEIGHT MATCHES ALL 3 RIGHT CARDS
      ======================================================= */}
      <div className="lg:col-span-7 lg:h-[540px]">
        <div
          className="
            relative
            h-[360px]
            sm:h-[430px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-white
            border
            border-slate-100
            shadow-md
            group
          "
        >
          {/* IMAGE */}
          <img
            src={`${IMG}circle1.png`}
            alt="Sansera circular economy and Zero Waste to Landfill flow"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              p-3
              sm:p-4
              lg:p-5
              transition-transform
              duration-700
              group-hover:scale-[1.015]
            "
          />

          {/* BOTTOM GRADIENT */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-36
              bg-gradient-to-t
              from-slate-950/75
              via-slate-950/20
              to-transparent
              pointer-events-none
            "
          />

          {/* TOP LABEL */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white/90
                backdrop-blur-sm
                shadow-sm
              "
            >
              <Recycle className="w-3.5 h-3.5 text-emerald-600" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.14em]
                  text-slate-700
                  uppercase
                "
              >
                Circular Manufacturing
              </span>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <div className="max-w-lg">
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.18em]
                  text-emerald-300
                  uppercase
                "
              >
                Zero Waste to Landfill
              </span>

              <h3
                className="
                  mt-1.5
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  text-white
                  leading-tight
                "
              >
                Turning manufacturing waste into valuable resources.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — EXACTLY 3 CARDS
      ======================================================= */}
      <div
        className="
          lg:col-span-5
          lg:h-[540px]
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            CARD 1 — 95%
        ===================================================== */}
        <div
          className="
            bg-white
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            shrink-0
          "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-600
                  uppercase
                "
              >
                FY2024-25 Performance
              </span>

              <div
                className="
                  mt-2
                  text-5xl
                  sm:text-6xl
                  font-bold
                  text-emerald-600
                  tracking-tight
                  leading-none
                "
              >
                95%
              </div>

              <div className="mt-2 text-sm font-bold text-slate-900">
                Waste diverted from landfill
              </div>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-slate-500
                  leading-relaxed
                  max-w-sm
                "
              >
                Waste channelled as alternative fuel / cement raw material.
              </p>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Recycle className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* =====================================================
            CARD 2 — ZERO TARGET
        ===================================================== */}
        <div
          className="
            relative
            overflow-hidden
            bg-slate-900
            rounded-[22px]
            p-5
            sm:p-6
            text-white
            shrink-0
          "
        >
          {/* Decorative circles */}
          <div
            className="
              absolute
              -right-10
              -top-10
              w-32
              h-32
              rounded-full
              border
              border-emerald-500/20
            "
          />

          <div
            className="
              absolute
              -right-4
              -top-4
              w-20
              h-20
              rounded-full
              border
              border-emerald-500/20
            "
          />

          <div className="relative">
            <span
              className="
                text-[9px]
                font-mono
                font-bold
                tracking-[0.16em]
                text-emerald-400
                uppercase
              "
            >
              Long-Term Target
            </span>

            <div className="mt-2 flex items-baseline gap-2">
              <div
                className="
                  text-4xl
                  sm:text-5xl
                  font-bold
                  tracking-tight
                  text-emerald-400
                "
              >
                ZERO
              </div>

              <div className="text-xs text-slate-300">
                waste to landfill
              </div>
            </div>

            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Target across operations by 2030.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-700">
              <div
                className="
                  text-[9px]
                  font-mono
                  text-emerald-500
                  uppercase
                  tracking-wide
                "
              >
                Annual Report 2024-25
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CARD 3 — CIRCULAR PRACTICES
            THIS EXPANDS TO FILL REMAINING HEIGHT
        ===================================================== */}
        <div
          className="
            bg-white
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            flex-1
            min-h-0
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Circular Practices
              </h3>

              <p className="text-[10px] text-slate-500 mt-0.5">
                Resource recovery across operations
              </p>
            </div>

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Leaf className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* PRACTICES */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {[
              "Metal-chip compaction & recycling",
              "Used-oil recovery",
              "Battery buy-back programmes",
              "Reuse of plastic bins & containers",
              "Cotton-waste recollection",
              "Segregation at source",
              "Alternative fuel co-processing",
              "Food-waste reduction",
              "Waste-recycler sustainability audits",
              "Kaizen improvement initiatives",
            ].map((practice, i) => (
              <div
                key={i}
                className="group flex items-start gap-2"
              >
                <CheckCircle2
                  className="
                    w-3.5
                    h-3.5
                    text-emerald-500
                    shrink-0
                    mt-0.5
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    text-slate-700
                    leading-snug
                  "
                >
                  {practice}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        MATERIAL LIFECYCLE
    ========================================================= */}
    <div className="mt-5 lg:mt-6">
      <div
        className="
          bg-white
          rounded-[22px]
          border
          border-slate-100
          shadow-sm
          px-5
          py-5
          sm:px-7
          sm:py-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-2
            mb-6
          "
        >
          <div>
            <span
              className="
                text-[9px]
                font-mono
                font-bold
                tracking-[0.17em]
                text-emerald-600
                uppercase
              "
            >
              Circular Flow
            </span>

            <h3
              className="
                mt-1
                text-lg
                sm:text-xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Material Lifecycle at Sansera
            </h3>
          </div>

          <p
            className="
              text-[10px]
              text-slate-500
              max-w-xs
              sm:text-right
            "
          >
            Materials move through a continuous recovery and recycling cycle.
          </p>
        </div>

        {/* =====================================================
            DESKTOP FLOW
        ===================================================== */}
        <div className="hidden lg:flex items-start">
          {[
            "Raw Material",
            "Precision Forging",
            "CNC Machining",
            "Scrap Recovery",
            "Chip Compaction",
            "Third-Party Recycling",
            "Back to Steel Mills",
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex-1 flex flex-col items-center text-center">
                <div
                  className="
                    relative
                    w-11
                    h-11
                    rounded-full
                    border-2
                    border-emerald-200
                    bg-emerald-50
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-emerald-600
                    hover:border-emerald-600
                    group
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      text-emerald-700
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <span
                  className="
                    mt-2
                    text-[10px]
                    font-semibold
                    text-slate-700
                    leading-tight
                    max-w-[95px]
                  "
                >
                  {step}
                </span>
              </div>

              {i < arr.length - 1 && (
                <div
                  className="
                    w-6
                    flex
                    items-center
                    justify-center
                    pt-5
                    shrink-0
                  "
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* =====================================================
            TABLET / MOBILE FLOW
        ===================================================== */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Raw Material",
            "Precision Forging",
            "CNC Machining",
            "Scrap Recovery",
            "Chip Compaction",
            "Third-Party Recycling",
            "Back to Steel Mills",
          ].map((step, i) => (
            <div
              key={i}
              className="
                relative
                bg-[#f7faf8]
                rounded-xl
                p-3
                border
                border-slate-100
              "
            >
              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-emerald-100
                  border
                  border-emerald-200
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-[9px] font-bold text-emerald-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  text-slate-700
                  leading-snug
                "
              >
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <div
          className="
            mt-6
            pt-4
            border-t
            border-slate-100
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >
          <div className="flex items-center gap-2.5">
            <div
              className="
                w-8
                h-8
                rounded-lg
                bg-emerald-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-900">
                Designed for circularity
              </div>

              <div className="text-[10px] text-slate-500 mt-0.5">
                Recover · Recycle · Reuse
              </div>
            </div>
          </div>

          <div
            className="
              text-[9px]
              font-mono
              font-bold
              text-emerald-600
              uppercase
              tracking-[0.14em]
            "
          >
            Waste → Resource → Manufacturing
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          PEOPLE
          ══════════════════════════════════════════════════════ */}
      <section
  id="people"
  className="py-16 lg:py-20 bg-white overflow-hidden"
>
  <div
    ref={people.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      people.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        SECTION HEADER
    ========================================================= */}
    <div className="max-w-3xl mb-8 lg:mb-9">
      <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-emerald-600 uppercase">
        Our People
      </span>

      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.05]">
        People <span className="text-emerald-600">Power</span> Progress
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
        Sustainability starts with people. Sansera invests in employee
        well-being, skills, engagement, safety and continuous improvement to
        create a workplace where people contribute, grow and innovate.
      </p>
    </div>

    {/* =========================================================
        MAIN PPT-STYLE CONTENT
        LEFT IMAGE + RIGHT CONTENT
    ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — PEOPLE IMAGE
          SAME HEIGHT AS RIGHT CONTENT
      ======================================================= */}
      <div className="lg:col-span-5 lg:h-[560px]">
        <div
          className="
            relative
            h-[390px]
            sm:h-[470px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-slate-50
            border
            border-slate-100
            shadow-md
            group
          "
        >
          {/* PEOPLE IMAGE */}
          <img
            src="/images/who-we-are.png"
            alt="Sansera Engineering team members at work"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.02]
            "
          />

          {/* BOTTOM GRADIENT */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-48
              bg-gradient-to-t
              from-slate-950/80
              via-slate-950/25
              to-transparent
              pointer-events-none
            "
          />

          {/* TOP LABEL */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
            <div
              className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                bg-white/90
                backdrop-blur-sm
                shadow-sm
              "
            >
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.15em]
                  text-slate-700
                  uppercase
                "
              >
                Our People
              </span>
            </div>
          </div>

          {/* IMAGE CONTENT */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <span
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                font-bold
                tracking-[0.18em]
                text-emerald-300
                uppercase
              "
            >
              People & Culture
            </span>

            <h3
              className="
                mt-1.5
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-white
                leading-tight
                max-w-md
              "
            >
              Empowering people to build a safer, smarter and more sustainable
              future.
            </h3>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — KPI + PROGRAMMES
      ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[560px]
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            KPI CARDS
        ===================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* KPI 1 */}
          <div
            className="
              bg-emerald-600
              rounded-[22px]
              p-5
              sm:p-6
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-white
                  leading-none
                "
              >
                10,319
              </div>

              <div className="text-sm font-medium text-emerald-100 mt-2">
                Total workforce
              </div>

              <div className="text-[10px] text-emerald-200 mt-1">
                FY2024-25
              </div>
            </div>

            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-300" />
          </div>

          {/* KPI 2 */}
          <div
            className="
              bg-white
              rounded-[22px]
              p-5
              sm:p-6
              border
              border-slate-100
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-emerald-700
                  leading-none
                "
              >
                11,003
              </div>

              <div className="text-sm font-medium text-slate-800 mt-2">
                Employees trained
              </div>

              <div className="text-[10px] text-slate-500 mt-1">
                Skill & safety programmes
              </div>
            </div>

            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-200" />
          </div>

          {/* KPI 3 */}
          <div
            className="
              bg-white
              rounded-[22px]
              p-5
              sm:p-6
              border
              border-slate-100
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-emerald-700
                  leading-none
                "
              >
                100%
              </div>

              <div className="text-sm font-medium text-slate-800 mt-2">
                Health & accident insurance
              </div>

              <div className="text-[10px] text-slate-500 mt-1">
                Coverage across workforce
              </div>
            </div>

            <div className="mt-4 h-1 w-10 rounded-full bg-emerald-200" />
          </div>

          {/* KPI 4 */}
          <div
            className="
              bg-emerald-50
              rounded-[22px]
              p-5
              sm:p-6
              border
              border-emerald-100
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-emerald-700
                  leading-none
                "
              >
                6.1%
              </div>

              <div className="text-sm font-medium text-slate-800 mt-2">
                Female representation
              </div>

              <div className="text-[10px] text-slate-500 mt-1">
                Target 10% by 2030
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="h-1.5 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: "61%" }}
                />
              </div>

              <div
                className="
                  flex
                  justify-between
                  mt-1.5
                  text-[8px]
                  font-mono
                  text-slate-400
                "
              >
                <span>NOW · 6.1%</span>
                <span>TARGET · 10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            EMPLOYEE PROGRAMMES
        ===================================================== */}
        <div
          className="
            bg-slate-50
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            flex-1
            min-h-0
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-600
                  uppercase
                "
              >
                Employee Engagement
              </span>

              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Employee Programmes & Initiatives
              </h4>
            </div>

            {/* Decorative icon */}
            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-white
                border
                border-emerald-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* PROGRAMMES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
            {[
              "Kaizen & Quality Circles",
              "Safety Day events",
              "Family Day celebrations",
              "World Environment Day",
              "Employee suggestion schemes",
              "EHS Skill Olympiad",
              "Annual medical check-ups",
              "Gym / Yoga facilities",
              "Service award recognition",
              "Skill development training",
              "Attendance bonus",
              "PF, Gratuity & ESI",
            ].map((p, i) => (
              <div
                key={i}
                className="
                  flex
                  items-start
                  gap-2
                  text-[10px]
                  sm:text-[11px]
                  text-slate-700
                  leading-snug
                "
              >
                <div
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-emerald-500
                    shrink-0
                    mt-1
                  "
                />

                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        SMALL BOTTOM STATEMENT
        KEEPS THE PAGE BALANCED WITHOUT THE AWARD IMAGE
    ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        px-5
        py-4
        bg-white
        rounded-[20px]
        border
        border-slate-100
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-3
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-8
            h-8
            rounded-lg
            bg-emerald-50
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <HeartHandshake className="w-4 h-4 text-emerald-600" />
        </div>

        <div>
          <div className="text-xs font-bold text-slate-900">
            People-first sustainability
          </div>

          <div className="text-[10px] text-slate-500 mt-0.5">
            Well-being · Skills · Safety · Inclusion
          </div>
        </div>
      </div>

      <div
        className="
          text-[9px]
          font-mono
          font-bold
          text-emerald-600
          uppercase
          tracking-[0.14em]
        "
      >
        People → Progress → Sustainable Future
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          SAFETY
          ══════════════════════════════════════════════════════ */}
     <section
  id="safety"
  className="py-16 lg:py-20 bg-slate-900 text-white overflow-hidden"
>
  <div
    ref={safety.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      safety.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        MAIN PPT-STYLE CONTENT
        ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — SAFETY IMAGE
          ======================================================= */}
      <div className="lg:col-span-5 lg:h-[610px]">
        <div
          className="
            relative
            h-[390px]
            sm:h-[470px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-slate-800
            border
            border-slate-700
            shadow-2xl
            group
          "
        >
          {/* IMAGE */}
          <img
            src={`${IMG}green.png`}
            alt="Sustainability icons and green factory representing Sansera's integrated EHSQ approach"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.02]
            "
          />

          {/* IMAGE GRADIENT */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/90
              via-slate-950/20
              to-transparent
              pointer-events-none
            "
          />

          {/* TOP LABEL */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-slate-950/70
                backdrop-blur-md
                border
                border-white/10
                shadow-sm
              "
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.15em]
                  text-white
                  uppercase
                "
              >
                Workplace Safety
              </span>
            </div>
          </div>

          {/* IMAGE BOTTOM CONTENT */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <span
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                font-bold
                tracking-[0.18em]
                text-emerald-400
                uppercase
              "
            >
              Integrated EHSQ System
            </span>

            <h3
              className="
                mt-1.5
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-white
                leading-tight
                max-w-md
              "
            >
              Environment, Health, Safety & Quality.
            </h3>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                text-slate-300
                leading-relaxed
                max-w-md
              "
            >
              Building safer workplaces through structured systems,
              continuous monitoring and employee participation.
            </p>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — SAFETY CONTENT
          ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[610px]
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <div>
          <span
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-emerald-400
              uppercase
            "
          >
            ISO 45001 · All Plants Certified
          </span>

          <h2
            className="
              mt-2
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-medium
              tracking-tight
              text-white
              leading-[1.05]
            "
          >
            Safety <span className="text-emerald-400">by Design</span>
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-300
              max-w-2xl
              leading-relaxed
            "
          >
            Sansera protects employees through structured hazard assessment,
            safety training, PPE, machine safeguards, emergency systems,
            medical support and ISO 45001-aligned occupational health
            management.
          </p>
        </div>

        {/* =====================================================
            SAFETY KPI CARDS
            ===================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* KPI 1 — FATALITIES */}
          <div
            className="
              bg-slate-800
              rounded-[20px]
              p-5
              border
              border-slate-700
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  text-emerald-400
                  tracking-tight
                  leading-none
                "
              >
                0
              </div>

              <div className="text-sm font-medium text-white mt-2">
                Fatalities
              </div>

              <div className="text-[10px] text-slate-400 mt-1">
                FY2024-25
              </div>
            </div>

            <div className="h-1 w-10 bg-emerald-500 rounded-full mt-4" />
          </div>

          {/* KPI 2 — LTIFR */}
          <div
            className="
              bg-slate-800
              rounded-[20px]
              p-5
              border
              border-slate-700
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  text-emerald-400
                  tracking-tight
                  leading-none
                "
              >
                0.04
              </div>

              <div className="text-sm font-medium text-white mt-2">
                LTIFR
              </div>

              <div className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                Per million person-hours
              </div>

              <div
                className="
                  text-[9px]
                  font-mono
                  text-slate-500
                  mt-1
                  uppercase
                "
              >
                FY2024-25
              </div>
            </div>

            <div className="h-1 w-10 bg-emerald-500 rounded-full mt-4" />
          </div>

          {/* KPI 3 — PLANTS */}
          <div
            className="
              bg-emerald-600
              rounded-[20px]
              p-5
              border
              border-emerald-500
              shadow-sm
              min-h-[145px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-4xl
                  lg:text-5xl
                  font-bold
                  text-white
                  tracking-tight
                  leading-none
                "
              >
                14
              </div>

              <div className="text-sm font-medium text-emerald-50 mt-2">
                Plants certified
              </div>

              <div className="text-[10px] text-emerald-100 mt-1">
                ISO 45001:2018
              </div>

              <div
                className="
                  text-[9px]
                  font-mono
                  text-emerald-200
                  mt-1
                  uppercase
                "
              >
                FY2024-25
              </div>
            </div>

            <div className="h-1 w-10 bg-emerald-300 rounded-full mt-4" />
          </div>
        </div>

        {/* =====================================================
            SAFETY FRAMEWORK
            ===================================================== */}
        <div
          className="
            bg-slate-800/70
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-700
            shadow-sm
            flex-1
            min-h-0
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-400
                  uppercase
                "
              >
                Safety Framework
              </span>

              <h3 className="text-sm font-bold text-white mt-1">
                Workplace Safety Practices
              </h3>
            </div>

            <div
              className="
                hidden
                sm:flex
                w-9
                h-9
                rounded-xl
                bg-emerald-500/10
                items-center
                justify-center
              "
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* SAFETY PRACTICES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {[
              "HIRA — Hazard Identification & Risk Assessment",
              "Lockout-Tagout procedures",
              "Machine guards and safety sensors",
              "Fire hydrants, extinguishers and alarms",
              "PPE across all operations",
              "Emergency procedures",
              "Monthly health & safety audits",
              "Chemical and fire-safety training",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-start
                  gap-2
                  text-[10px]
                  sm:text-[11px]
                  text-slate-300
                  leading-snug
                "
              >
                <ShieldCheck
                  className="
                    w-3.5
                    h-3.5
                    text-emerald-500
                    shrink-0
                    mt-0.5
                  "
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        BOTTOM SAFETY COMMITMENT
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        bg-emerald-500/10
        border
        border-emerald-500/20
        rounded-[20px]
        px-5
        py-4
        sm:px-6
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >
        {/* LEFT */}
        <div>
          <div
            className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.15em]
              text-emerald-400
              uppercase
            "
          >
            Safety Commitment
          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-300
              mt-1
              max-w-2xl
              leading-relaxed
            "
          >
            A strong safety culture is embedded across operations through
            prevention, preparedness, training and continuous improvement.
          </p>
        </div>

        {/* RIGHT */}
        <div className="shrink-0 sm:text-right">
          <div className="text-2xl font-bold text-emerald-400 leading-none">
            ZERO
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
              mt-1
            "
          >
            Fatalities · FY2024-25
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          SUPPLY CHAIN
          ══════════════════════════════════════════════════════ */}
          <section
  id="supply"
  className="py-16 lg:py-20 bg-[#f7faf8] overflow-hidden"
>
  <div
    ref={supply.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      supply.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        MAIN PPT-STYLE CONTENT
        ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — CONTENT
          ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[610px]
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <div className="shrink-0">
          <span
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-emerald-600
              uppercase
            "
          >
            Responsible Sourcing
          </span>

          <h2
            className="
              mt-2
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-medium
              tracking-tight
              text-slate-900
              leading-[1.05]
              max-w-3xl
            "
          >
            Extending Sustainability Across{" "}
            <span className="text-emerald-600">
              the Value Chain
            </span>
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
              max-w-2xl
            "
          >
            Sansera extends sustainability beyond its own facilities
            by assessing suppliers, encouraging responsible sourcing
            and collaborating with partners to improve environmental
            and social performance.
          </p>
        </div>

        {/* =====================================================
            SUPPLIER ASSESSMENT — FILLS REMAINING SPACE
            ===================================================== */}
        <div
          className="
            flex-1
            bg-white
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            flex
            flex-col
            justify-between
            min-h-0
          "
        >
          {/* TOP CONTENT */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span
                  className="
                    text-[9px]
                    font-mono
                    font-bold
                    tracking-[0.16em]
                    text-emerald-600
                    uppercase
                  "
                >
                  Supplier Assessment
                </span>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  Sustainability Assessment Progress
                </h3>
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  w-9
                  h-9
                  rounded-xl
                  bg-emerald-50
                  items-center
                  justify-center
                "
              >
                <Globe2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>

            {/* =================================================
                PROGRESS BARS
                ================================================= */}
            <div className="space-y-7">
              {[
                {
                  label: "FY2023-24",
                  pct: 43,
                  color: "bg-slate-400",
                },
                {
                  label: "FY2024-25",
                  pct: 65,
                  color: "bg-emerald-500",
                },
                {
                  label: "2027 Target",
                  pct: 75,
                  color: "bg-emerald-300",
                  target: true,
                },
              ].map((d, i) => (
                <div key={i}>
                  {/* Label + percentage */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        d.target
                          ? "text-slate-400 italic"
                          : "text-slate-700"
                      }`}
                    >
                      {d.label}
                    </span>

                    <span
                      className={`text-xs sm:text-sm font-bold ${
                        d.target
                          ? "text-slate-400"
                          : "text-slate-900"
                      }`}
                    >
                      {d.pct}%

                      {d.target && (
                        <span className="font-normal ml-1">
                          (target)
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Progress track */}
                  <div
                    className="
                      relative
                      h-3
                      bg-slate-200
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-y-0
                        left-0
                        ${d.color}
                        rounded-full
                        transition-all
                        duration-1000
                        ease-out
                      `}
                      style={{
                        width: `${d.pct}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              BOTTOM INFORMATION
              ================================================= */}
          <div className="mt-8">
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                sm:text-xs
                text-slate-500
                mb-5
              "
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />

              <span>
                Suppliers assessed for sustainability practices
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — SUPPLY CHAIN IMAGE
          ======================================================= */}
      <div
        className="
          lg:col-span-5
          lg:h-[610px]
        "
      >
        <div
          className="
            relative
            h-[390px]
            sm:h-[480px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-slate-100
            shadow-xl
            border
            border-slate-100
            group
          "
        >
          {/* IMAGE */}
          <img
            src={`${IMG}Solaranlage Komplettset_ Der große Anbieter-Vergleich 91.jpg`}
            alt="Business professionals holding a globe with sustainability icons — representing Sansera's supply chain sustainability"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.02]
            "
          />

          {/* IMAGE GRADIENT */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/85
              via-slate-950/15
              to-transparent
              pointer-events-none
            "
          />

          {/* TOP LABEL */}
          <div
            className="
              absolute
              top-4
              left-4
              sm:top-5
              sm:left-5
              z-10
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-white/90
                backdrop-blur-md
                border
                border-white/50
                shadow-sm
              "
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.15em]
                  text-slate-700
                  uppercase
                "
              >
                Sustainable Supply Chain
              </span>
            </div>
          </div>

          {/* IMAGE BOTTOM CONTENT */}
          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              sm:bottom-6
              sm:left-6
              sm:right-6
              z-10
            "
          >
            <div className="max-w-lg">
              <div
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.18em]
                  text-emerald-300
                  uppercase
                "
              >
                Extending the ESG Boundary
              </div>

              <h3
                className="
                  mt-1.5
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  text-white
                  leading-tight
                "
              >
                Building sustainability across every stage of the
                value chain.
              </h3>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-px
                    w-8
                    sm:w-10
                    bg-emerald-400
                    shrink-0
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-mono
                    text-slate-300
                  "
                >
                  65% of suppliers assessed · FY2024-25
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        BOTTOM VALUE-CHAIN STATEMENT
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        bg-emerald-50
        border
        border-emerald-100
        rounded-[20px]
        px-5
        py-4
        sm:px-6
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        "
      >
        <div>
          <div
            className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.15em]
              text-emerald-600
              uppercase
            "
          >
            Responsible Value Chain
          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-600
              mt-1
              leading-relaxed
            "
          >
            Sustainability expectations extend across suppliers,
            sourcing decisions and the wider value chain.
          </p>
        </div>

        <div className="shrink-0 sm:text-right">
          <div className="text-xl font-bold text-emerald-600">
            65%
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
            "
          >
            Suppliers assessed · FY2024-25
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          GOVERNANCE
          ══════════════════════════════════════════════════════ */}
      <section
  id="governance"
  className="py-16 lg:py-20 bg-white overflow-hidden"
>
  <div
    ref={gov.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      gov.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        MAIN PPT-STYLE GRID
        ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — GOVERNANCE IMAGE
          ======================================================= */}
      <div
        className="
          lg:col-span-5
          lg:h-[610px]
        "
      >
        <div
          className="
            relative
            h-[390px]
            sm:h-[480px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-slate-100
            border
            border-slate-100
            shadow-xl
            group
          "
        >
          {/* IMAGE */}
          <img
            src={`${IMG}ChatGPT Image Aug 12, 2026, 05_20_32 PM.png`}
            alt="Growing trees on investment stacks — representing Sansera's ESG-aligned governance"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.02]
            "
          />

          {/* IMAGE GRADIENT */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/85
              via-slate-950/15
              to-transparent
              pointer-events-none
            "
          />

          {/* TOP LABEL */}
          <div
            className="
              absolute
              top-4
              left-4
              sm:top-5
              sm:left-5
              z-10
            "
          >
            <div
              className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                bg-white/90
                backdrop-blur-md
                border
                border-white/50
                shadow-sm
              "
            >
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.15em]
                  text-slate-700
                  uppercase
                "
              >
                ESG Governance
              </span>
            </div>
          </div>

          {/* IMAGE BOTTOM CONTENT */}
          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              sm:bottom-7
              sm:left-7
              sm:right-7
              z-10
            "
          >
            <div
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                font-bold
                tracking-[0.18em]
                text-emerald-300
                uppercase
              "
            >
              Accountability & Transparency
            </div>

            <h3
              className="
                mt-1.5
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-white
                leading-tight
                max-w-md
              "
            >
              Building trust through responsible governance.
            </h3>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — GOVERNANCE CONTENT
          ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[610px]
          min-h-0
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="shrink-0">
          <span
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-emerald-600
              uppercase
            "
          >
            ESG Governance
          </span>

          <h2
            className="
              mt-2
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-medium
              tracking-tight
              text-slate-900
              leading-[1.05]
            "
          >
            Governance that{" "}
            <span className="text-emerald-600">
              Builds Trust
            </span>
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
              max-w-3xl
            "
          >
            Strong governance supports sustainable growth. Sansera combines
            board-level ESG oversight, ethical policies, transparent
            disclosures, compliance systems and stakeholder grievance
            mechanisms to strengthen accountability.
          </p>
        </div>

        {/* =====================================================
            KPI CARDS
            ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-3
            shrink-0
          "
        >
          {/* KPI 1 */}
          <div
            className="
              bg-slate-50
              rounded-[18px]
              p-4
              sm:p-5
              border
              border-slate-100
              shadow-sm
              min-h-[125px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-2xl
                  lg:text-3xl
                  font-bold
                  text-emerald-700
                  tracking-tight
                "
              >
                100%
              </div>

              <div
                className="
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  text-slate-800
                  mt-1.5
                  leading-snug
                "
              >
                Code of Conduct training
              </div>

              <div
                className="
                  text-[9px]
                  sm:text-[10px]
                  text-slate-500
                  mt-1
                  leading-relaxed
                "
              >
                All management levels · FY2024-25
              </div>
            </div>
          </div>

          {/* KPI 2 */}
          <div
            className="
              bg-slate-50
              rounded-[18px]
              p-4
              sm:p-5
              border
              border-slate-100
              shadow-sm
              min-h-[125px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-2xl
                  lg:text-3xl
                  font-bold
                  text-emerald-700
                  tracking-tight
                "
              >
                0
              </div>

              <div
                className="
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  text-slate-800
                  mt-1.5
                  leading-snug
                "
              >
                Corruption / bribery incidents
              </div>

              <div
                className="
                  text-[9px]
                  sm:text-[10px]
                  text-slate-500
                  mt-1
                  leading-relaxed
                "
              >
                FY2024-25
              </div>
            </div>
          </div>

          {/* KPI 3 */}
          <div
            className="
              bg-slate-50
              rounded-[18px]
              p-4
              sm:p-5
              border
              border-slate-100
              shadow-sm
              min-h-[125px]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  text-2xl
                  lg:text-3xl
                  font-bold
                  text-emerald-700
                  tracking-tight
                  whitespace-nowrap
                "
              >
                TÜV SÜD
              </div>

              <div
                className="
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  text-slate-800
                  mt-1.5
                  leading-snug
                "
              >
                ESG limited assurance
              </div>

              <div
                className="
                  text-[9px]
                  sm:text-[10px]
                  text-slate-500
                  mt-1
                  leading-relaxed
                "
              >
                Key metrics verified · FY2024-25
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            GOVERNANCE POLICIES
            ALL 12 ITEMS FIT INSIDE THE CARD
            ===================================================== */}
        <div
          className="
            flex-1
            min-h-0
            bg-slate-50
            rounded-[22px]
            px-5
            py-4
            sm:px-6
            sm:py-5
            border
            border-slate-100
            overflow-hidden
          "
        >
          {/* CARD HEADER */}
          <div
            className="
              flex
              items-start
              justify-between
              mb-3
              shrink-0
            "
          >
            <div className="min-w-0">
              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-600
                  uppercase
                "
              >
                Governance Framework
              </span>

              <h3
                className="
                  text-sm
                  sm:text-base
                  font-bold
                  text-slate-900
                  mt-1
                "
              >
                Governance Policies
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  text-slate-500
                  mt-1
                  leading-relaxed
                "
              >
                Frameworks supporting ethical and responsible business
                practices
              </p>
            </div>

            {/* ICON */}
            <div
              className="
                hidden
                sm:flex
                w-9
                h-9
                rounded-xl
                bg-emerald-100
                items-center
                justify-center
                shrink-0
                ml-4
              "
            >
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
            </div>
          </div>

          {/* =================================================
              POLICY GRID
              6 ROWS × 2 COLUMNS
              ================================================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              grid-flow-row
              gap-x-8
              gap-y-2
              sm:gap-y-2.5
            "
          >
            {[
              "ESG Policy",
              "Code of Conduct",
              "Whistleblower Policy",
              "Anti-Bribery Policy",
              "Human Rights Policy",
              "Sustainable Procurement",
              "Conflict Mineral Policy",
              "CSR Policy",
              "POSH Policy",
              "Forced & Child Labour Policy",
              "Responsible Sourcing",
              "Grievance Policy",
            ].map((p, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-2.5
                  min-w-0
                  h-[27px]
                "
              >
                {/* BULLET */}
                <div
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-emerald-500
                    shrink-0
                  "
                />

                {/* POLICY NAME */}
                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    text-slate-700
                    leading-none
                    truncate
                  "
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        SDG ALIGNMENT — PPT BOTTOM STRIP
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        bg-emerald-50
        border
        border-emerald-100
        rounded-[20px]
        px-5
        py-4
        sm:px-6
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        "
      >
        {/* LEFT */}
        <div className="min-w-0">
          <div
            className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.16em]
              text-emerald-600
              uppercase
            "
          >
            Sustainable Development Goals
          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-600
              mt-1
              leading-relaxed
            "
          >
            ESG programmes aligned with global sustainability priorities
            through responsible governance, ethical business and
            stakeholder accountability.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            shrink-0
            sm:text-right
            border-l-0
            sm:border-l
            border-emerald-200
            sm:pl-5
          "
        >
          <div
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-emerald-600
            "
          >
            ESG
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
              whitespace-nowrap
            "
          >
            Global sustainability alignment
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          CERTIFICATIONS
          ══════════════════════════════════════════════════════ */}
      <section
  id="certifications"
  className="py-16 lg:py-20 bg-[#f7faf8] overflow-hidden"
>
  <div
    ref={certs.ref}
    className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 transition-all duration-1000 ${
      certs.visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }`}
  >
    {/* =========================================================
        MAIN PPT-STYLE GRID
        ========================================================= */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-5
        lg:gap-6
        items-stretch
      "
    >
      {/* =======================================================
          LEFT — SECTION INTRO
          ======================================================= */}
      <div
        className="
          lg:col-span-5
          lg:h-[610px]
          flex
          flex-col
          gap-4
        "
      >
        {/* HEADER */}
        <div className="shrink-0">
          <span
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-emerald-600
              uppercase
            "
          >
            Verified Standards
          </span>

          <h2
            className="
              mt-2
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-medium
              tracking-tight
              text-slate-900
              leading-[1.05]
            "
          >
            Standards that{" "}
            <span className="text-emerald-600">
              Strengthen
            </span>{" "}
            Our Commitment
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
              max-w-xl
            "
          >
            Independent certifications and assurance frameworks reinforce
            Sansera's commitment to environmental responsibility, workplace
            safety, energy efficiency and transparent ESG performance.
          </p>
        </div>

        {/* =====================================================
            ASSURANCE SUMMARY CARD
            ===================================================== */}
        <div
          className="
            flex-1
            min-h-0
            bg-slate-900
            rounded-[24px]
            p-5
            sm:p-6
            relative
            overflow-hidden
            flex
            flex-col
            justify-between
          "
        >
          {/* Decorative circles */}
          <div
            className="
              absolute
              -top-16
              -right-16
              w-40
              h-40
              rounded-full
              bg-emerald-500/10
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              w-48
              h-48
              rounded-full
              bg-emerald-500/5
            "
          />

          {/* TOP CONTENT */}
          <div className="relative z-10">
            <div
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                font-bold
                tracking-[0.18em]
                text-emerald-400
                uppercase
              "
            >
              Sustainability Framework
            </div>

            <h3
              className="
                mt-2
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-white
                leading-tight
                max-w-md
              "
            >
              Certified systems supporting continuous improvement.
            </h3>

            <p
              className="
                mt-3
                text-xs
                sm:text-sm
                text-slate-400
                leading-relaxed
                max-w-md
              "
            >
              Globally recognised management systems help strengthen
              environmental performance, energy efficiency, occupational
              safety and ESG transparency.
            </p>
          </div>

          {/* FRAMEWORK TAGS */}
          <div className="relative z-10 mt-6">
            <div
              className="
                text-[9px]
                font-mono
                font-bold
                tracking-[0.15em]
                text-slate-500
                uppercase
                mb-3
              "
            >
              Coverage
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Environment",
                "Energy",
                "Safety",
                "Green Buildings",
                "ESG Assurance",
              ].map((item, i) => (
                <span
                  key={i}
                  className="
                    px-2.5
                    py-1.5
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-[10px]
                    text-slate-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
          <div
            className="
              relative
              z-10
              mt-6
              pt-4
              border-t
              border-white/10
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div>
              <div
                className="
                  text-[9px]
                  font-mono
                  text-slate-500
                  uppercase
                  tracking-[0.12em]
                "
              >
                Verified Standards
              </div>

              <div className="mt-1 text-sm font-semibold text-white">
                Independent assurance & certification
              </div>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-emerald-500/10
                border
                border-emerald-400/20
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          RIGHT — CERTIFICATION CONTENT
          ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[610px]
          min-h-0
          flex
          flex-col
          gap-4
        "
      >
        {/* =====================================================
            CERTIFICATION HEADER
            ===================================================== */}
        <div className="shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.18em]
                  text-emerald-600
                  uppercase
                "
              >
                Verified Certifications
              </span>

              <p
                className="
                  mt-2
                  text-xs
                  sm:text-sm
                  text-slate-600
                  leading-relaxed
                "
              >
                Independent standards supporting ESG performance
              </p>
            </div>

            <div
              className="
                text-[9px]
                font-mono
                text-slate-400
                uppercase
                whitespace-nowrap
                shrink-0
              "
            >
              FY2024-25
            </div>
          </div>
        </div>

        {/* =====================================================
            CERTIFICATION CARD
            ===================================================== */}
        <div
          className="
            flex-1
            min-h-0
            bg-white
            rounded-[24px]
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            overflow-hidden
            flex
            flex-col
          "
        >
          {/* CARD HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
              mb-4
              shrink-0
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-600
                  uppercase
                "
              >
                Management Systems
              </span>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  text-slate-500
                  mt-1
                "
              >
                Certified frameworks across key sustainability areas
              </p>
            </div>

            <div
              className="
                hidden
                sm:flex
                w-9
                h-9
                rounded-xl
                bg-emerald-100
                items-center
                justify-center
                shrink-0
              "
            >
              <Award className="w-4 h-4 text-emerald-700" />
            </div>
          </div>

          {/* ===================================================
              CERTIFICATION GRID

              IMPORTANT:
              Compact card height keeps all 5 certifications
              inside the fixed PPT panel.
              =================================================== */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              flex-1
              min-h-0
              content-start
            "
          >
            {[
              {
                code: "ISO 14001",
                name: "Environmental Management",
                icon: Leaf,
                note: "All plants certified",
              },
              {
                code: "ISO 45001",
                name: "Occupational Health & Safety",
                icon: ShieldCheck,
                note: "14 plants certified · FY2024-25",
              },
              {
                code: "ISO 50001",
                name: "Energy Management System",
                icon: Zap,
                note: "All plants certified · FY2024-25",
              },
              {
                code: "IGBC Platinum",
                name: "Green Building Certification",
                icon: Award,
                note: "New & select existing facilities",
              },
              {
                code: "TÜV SÜD",
                name: "ESG Limited Assurance",
                icon: CheckCircle2,
                note: "Key ESG metrics verified",
              },
            ].map(({ code, name, icon: Icon, note }, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  bg-slate-50
                  rounded-[18px]
                  p-4
                  border
                  border-slate-100
                  hover:border-emerald-200
                  hover:shadow-md
                  transition-all
                  duration-300

                  /* FIXED COMPACT HEIGHT */
                  h-[125px]

                  flex
                  flex-col
                  justify-between
                "
              >
                {/* TOP ACCENT */}
                <div
                  className="
                    absolute
                    top-0
                    left-5
                    right-5
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-emerald-300
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* TOP ROW */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-9
                      h-9
                      rounded-xl
                      bg-emerald-100
                      text-emerald-700
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:bg-emerald-600
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* INDEX */}
                  <span
                    className="
                      text-[9px]
                      font-mono
                      text-slate-300
                    "
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="min-w-0">
                  <div
                    className="
                      text-base
                      sm:text-lg
                      font-bold
                      text-slate-900
                      tracking-tight
                      leading-tight
                    "
                  >
                    {code}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[11px]
                      sm:text-xs
                      text-slate-600
                      leading-snug
                      truncate
                    "
                  >
                    {name}
                  </div>
                </div>

                {/* NOTE */}
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    font-medium
                    text-emerald-600
                    whitespace-nowrap
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-emerald-500
                      shrink-0
                    "
                  />

                  <span>{note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ===================================================
              BOTTOM CARD FOOTER
              =================================================== */}
          <div
            className="
              mt-4
              pt-3
              border-t
              border-slate-100
              flex
              items-center
              justify-between
              gap-3
              shrink-0
            "
          >
            <span
              className="
                text-[9px]
                font-mono
                uppercase
                tracking-[0.15em]
                text-slate-400
              "
            >
              Verified Standard
            </span>

            <div className="flex items-center gap-1.5">
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-emerald-500
                "
              />

              <span
                className="
                  text-[9px]
                  font-mono
                  text-slate-400
                  uppercase
                  whitespace-nowrap
                "
              >
                Independent certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================
        BOTTOM CERTIFICATION STATEMENT
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        bg-emerald-50
        border
        border-emerald-100
        rounded-[20px]
        px-5
        py-4
        sm:px-6
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        "
      >
        {/* LEFT */}
        <div className="min-w-0">
          <div
            className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.16em]
              text-emerald-600
              uppercase
            "
          >
            Certified Commitment
          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-600
              mt-1
              leading-relaxed
            "
          >
            Certified management systems strengthen environmental,
            energy, safety and ESG performance across Sansera's operations.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            shrink-0
            sm:text-right
            border-l-0
            sm:border-l
            border-emerald-200
            sm:pl-5
          "
        >
          <div
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-emerald-600
            "
          >
            5
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
              whitespace-nowrap
            "
          >
            Verified standards
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          2030 ROADMAP — TIMELINE
          ══════════════════════════════════════════════════════ */}
      <section
  id="roadmap"
  className="py-16 lg:py-20 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* =========================================================
        HEADER — PPT STYLE
        ========================================================= */}
    <div className="mb-8 lg:mb-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

        {/* LEFT */}
        <div className="max-w-3xl">
          <span
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-emerald-600
              uppercase
            "
          >
            Looking Forward
          </span>

          <h2
            className="
              mt-2
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-medium
              tracking-tight
              text-slate-900
              leading-[1.05]
            "
          >
            Our{" "}
            <span className="text-emerald-600">2030</span>{" "}
            Sustainability Roadmap
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-slate-600
              leading-relaxed
              max-w-2xl
            "
          >
            A phased journey focused on cleaner energy, responsible
            operations, inclusive growth and stronger sustainability
            performance.
          </p>
        </div>

        {/* RIGHT — SMALL LABEL */}
        <div className="hidden lg:block text-right shrink-0">
          <div className="text-2xl font-bold text-emerald-600">
            2030
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
              tracking-[0.12em]
            "
          >
            Sustainability Vision
          </div>
        </div>
      </div>
    </div>


    {/* =========================================================
        ROADMAP WRAPPER
        ========================================================= */}
    <div className="relative">

      {/* =======================================================
          DESKTOP TIMELINE
          IMPORTANT:
          Line is positioned only around the nodes and NEVER
          overlaps the cards.
          ======================================================= */}
      <div
        className="
          hidden
          lg:block
          absolute
          top-[29px]
          left-[16.66%]
          right-[16.66%]
          h-px
          bg-slate-200
          z-0
        "
      />

      {/* ACTIVE TIMELINE */}
      <div
        className="
          hidden
          lg:block
          absolute
          top-[29px]
          left-[16.66%]
          h-[2px]
          bg-emerald-500
          z-[1]
          transition-all
          duration-700
        "
        style={{
          width:
            roadmapStep === 0
              ? "0%"
              : roadmapStep === 1
              ? "33.33%"
              : "66.66%",
        }}
      />

      {/* =======================================================
          ROADMAP GRID
          ======================================================= */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          lg:gap-6
          relative
          z-10
        "
      >

        {[
          {
            when: "FY2025-26",
            label: "Immediate Focus",
            short: "01",
            description:
              "Building the foundations for the next phase of Sansera's sustainability journey.",
            items: [
              "Expand renewable-energy capacity",
              "Enhance diversity and inclusion",
              "Deploy ESG data-management systems",
              "Develop Scope 3 emissions inventory",
              "Advance waste-reduction technologies",
            ],
          },
          {
            when: "2027",
            label: "Milestone Target",
            short: "02",
            description:
              "Scaling sustainability across the wider value chain and supplier ecosystem.",
            items: [
              "75% supplier sustainability assessment coverage",
              "Strengthen supply-chain sustainability assessments",
            ],
          },
          {
            when: "2030",
            label: "Vision Targets",
            short: "03",
            description:
              "Delivering measurable long-term sustainability outcomes across operations.",
            items: [
              "80% clean-energy consumption",
              "10% female workforce representation",
              "Zero waste to landfill across operations",
              "ISO 27001 certification at all plants",
              "Continued emissions reduction",
            ],
          },
        ].map((stage, i) => {
          const active = roadmapStep === i;

          return (
            <div
              key={i}
              onClick={() => setRoadmapStep(i)}
              className="
                relative
                cursor-pointer
                group
              "
            >

              {/* =================================================
                  TIMELINE NODE
                  ================================================= */}
              <div
                className="
                  relative
                  z-20
                  flex
                  justify-center
                  h-[58px]
                "
              >
                <div
                  className={`
                    w-[58px]
                    h-[58px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border-[3px]
                    transition-all
                    duration-500
                    ${
                      active
                        ? `
                          bg-emerald-600
                          border-emerald-100
                          shadow-lg
                          shadow-emerald-500/25
                          scale-105
                        `
                        : `
                          bg-white
                          border-emerald-200
                          group-hover:border-emerald-400
                          group-hover:scale-105
                        `
                    }
                  `}
                >
                  <span
                    className={`
                      text-xs
                      font-mono
                      font-bold
                      ${
                        active
                          ? "text-white"
                          : "text-emerald-600"
                      }
                    `}
                  >
                    {stage.short}
                  </span>
                </div>
              </div>


              {/* =================================================
                  ROADMAP CARD
                  ================================================= */}
              <div
                className={`
                  relative
                  mt-3
                  rounded-[22px]
                  border
                  p-5
                  sm:p-6
                  lg:h-[445px]
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    active
                      ? `
                        bg-emerald-600
                        border-emerald-600
                        text-white
                        shadow-xl
                        shadow-emerald-600/20
                        lg:-translate-y-1
                      `
                      : `
                        bg-slate-50
                        border-slate-100
                        text-slate-900
                        shadow-sm
                        hover:shadow-lg
                        hover:border-emerald-200
                        lg:hover:-translate-y-1
                      `
                  }
                `}
              >

                {/* ACTIVE DECORATIVE GLOW */}
                {active && (
                  <>
                    <div
                      className="
                        absolute
                        -top-20
                        -right-20
                        w-48
                        h-48
                        rounded-full
                        bg-white/10
                        blur-3xl
                        pointer-events-none
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-24
                        -left-16
                        w-44
                        h-44
                        rounded-full
                        bg-emerald-300/10
                        blur-3xl
                        pointer-events-none
                      "
                    />
                  </>
                )}

                <div className="relative h-full flex flex-col">

                  {/* =================================================
                      CARD TOP
                      ================================================= */}
                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <div
                        className={`
                          text-2xl
                          sm:text-3xl
                          font-bold
                          tracking-tight
                          leading-none
                          ${
                            active
                              ? "text-white"
                              : "text-emerald-700"
                          }
                        `}
                      >
                        {stage.when}
                      </div>

                      <div
                        className={`
                          text-xs
                          sm:text-sm
                          font-semibold
                          mt-2
                          ${
                            active
                              ? "text-emerald-100"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {stage.label}
                      </div>

                    </div>


                    {/* STATUS */}
                    <span
                      className={`
                        shrink-0
                        px-2.5
                        py-1
                        rounded-full
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        font-bold
                        uppercase
                        tracking-wider
                        ${
                          active
                            ? `
                              bg-white/10
                              text-emerald-100
                              border
                              border-white/10
                            `
                            : `
                              bg-emerald-50
                              text-emerald-600
                              border
                              border-emerald-100
                            `
                        }
                      `}
                    >
                      {active ? "Current" : "Target"}
                    </span>

                  </div>


                  {/* =================================================
                      DESCRIPTION
                      ================================================= */}
                  <p
                    className={`
                      mt-4
                      text-xs
                      sm:text-sm
                      leading-relaxed
                      ${
                        active
                          ? "text-emerald-100"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {stage.description}
                  </p>


                  {/* DIVIDER */}
                  <div
                    className={`
                      mt-5
                      border-t
                      ${
                        active
                          ? "border-white/15"
                          : "border-slate-200"
                      }
                    `}
                  />


                  {/* =================================================
                      GOALS
                      ================================================= */}
                  <div className="mt-5 space-y-3 flex-1">

                    {stage.items.map((item, j) => (
                      <div
                        key={j}
                        className={`
                          flex
                          items-start
                          gap-2.5
                          text-xs
                          sm:text-sm
                          ${
                            active
                              ? "text-emerald-50"
                              : "text-slate-700"
                          }
                        `}
                      >

                        {/* CHECK */}
                        <div
                          className={`
                            mt-0.5
                            w-[18px]
                            h-[18px]
                            rounded-full
                            flex
                            items-center
                            justify-center
                            shrink-0
                            ${
                              active
                                ? "bg-white/10"
                                : "bg-emerald-50"
                            }
                          `}
                        >
                          <CheckCircle2
                            className={`
                              w-3
                              h-3
                              ${
                                active
                                  ? "text-emerald-100"
                                  : "text-emerald-500"
                              }
                            `}
                          />
                        </div>

                        <span className="leading-relaxed">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>


                  {/* =================================================
                      BOTTOM INDICATOR
                      ================================================= */}
                  <div
                    className={`
                      mt-5
                      pt-4
                      border-t
                      ${
                        active
                          ? "border-white/15"
                          : "border-slate-200"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <span
                        className={`
                          text-[9px]
                          font-mono
                          uppercase
                          tracking-[0.15em]
                          ${
                            active
                              ? "text-emerald-200"
                              : "text-slate-400"
                          }
                        `}
                      >
                        Sustainability Journey
                      </span>

                      <span
                        className={`
                          text-sm
                          font-bold
                          transition-transform
                          duration-300
                          ${
                            active
                              ? "text-white"
                              : "text-emerald-600 group-hover:translate-x-1"
                          }
                        `}
                      >
                        →
                      </span>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>


    {/* =========================================================
        BOTTOM 2030 VISION STRIP
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        rounded-[22px]
        bg-slate-950
        overflow-hidden
        relative
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          -top-24
          -right-16
          w-64
          h-64
          rounded-full
          bg-emerald-500/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-28
          left-16
          w-64
          h-64
          rounded-full
          bg-emerald-400/10
          blur-3xl
          pointer-events-none
        "
      />


      <div
        className="
          relative
          px-5
          sm:px-6
          lg:px-8
          py-5
          lg:py-6
        "
      >

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          "
        >

          {/* =====================================================
              LEFT
              ===================================================== */}
          <div className="min-w-0">

            <div
              className="
                text-[9px]
                font-mono
                font-bold
                tracking-[0.18em]
                text-emerald-400
                uppercase
              "
            >
              2030 Vision
            </div>

            <h3
              className="
                mt-1.5
                text-lg
                sm:text-xl
                lg:text-2xl
                font-bold
                text-white
                tracking-tight
              "
            >
              Building a cleaner, safer and more inclusive future.
            </h3>

            <p
              className="
                mt-1.5
                text-xs
                text-slate-400
                max-w-3xl
                leading-relaxed
              "
            >
              From renewable energy and circular manufacturing to
              responsible sourcing and inclusive workplaces, each milestone
              moves Sansera closer to its long-term sustainability ambitions.
            </p>

          </div>


          {/* =====================================================
              RIGHT METRICS
              ===================================================== */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              shrink-0
            "
          >

            {/* 80% */}
            <div
              className="
                min-w-[100px]
                px-3.5
                py-2.5
                rounded-xl
                bg-white/5
                border
                border-white/10
              "
            >
              <div className="text-lg font-bold text-emerald-400">
                80%
              </div>

              <div className="text-[9px] text-slate-400 mt-0.5">
                Clean energy
              </div>
            </div>


            {/* 10% */}
            <div
              className="
                min-w-[100px]
                px-3.5
                py-2.5
                rounded-xl
                bg-white/5
                border
                border-white/10
              "
            >
              <div className="text-lg font-bold text-emerald-400">
                10%
              </div>

              <div className="text-[9px] text-slate-400 mt-0.5">
                Female workforce
              </div>
            </div>


            {/* ZERO */}
            <div
              className="
                min-w-[100px]
                px-3.5
                py-2.5
                rounded-xl
                bg-white/5
                border
                border-white/10
              "
            >
              <div className="text-lg font-bold text-emerald-400">
                ZERO
              </div>

              <div className="text-[9px] text-slate-400 mt-0.5">
                Waste to landfill
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


    {/* =========================================================
        SMALL FOOTER LABEL
        ========================================================= */}
    <div
      className="
        mt-4
        flex
        items-center
        justify-end
        gap-2
      "
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

      <span
        className="
          text-[9px]
          font-mono
          uppercase
          tracking-[0.15em]
          text-slate-400
        "
      >
        Long-term sustainability commitment
      </span>
    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          ESG RISKS & OPPORTUNITIES
          ══════════════════════════════════════════════════════ */}
     <section
  id="risks"
  className="py-16 lg:py-20 bg-[#f7faf8] overflow-hidden"
>
  <div
    className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
  >
    {/* =========================================================
        HEADER
        ========================================================= */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-10">

      {/* LEFT */}
      <div className="max-w-3xl">
        <span
          className="
            inline-flex
            items-center
            gap-2
            text-[9px]
            sm:text-[10px]
            font-mono
            font-bold
            tracking-[0.2em]
            text-emerald-600
            uppercase
          "
        >
          <span className="w-6 h-px bg-emerald-500" />
          Material Topics
        </span>

        <h2
          className="
            mt-2
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-medium
            tracking-tight
            text-slate-900
            leading-[1.05]
          "
        >
          ESG Risks &amp;{" "}
          <span className="text-emerald-600">
            Opportunities
          </span>
        </h2>

        <p
          className="
            mt-3
            text-sm
            sm:text-base
            text-slate-600
            leading-relaxed
            max-w-2xl
          "
        >
          Understanding the risks that shape our sustainability journey —
          and the opportunities that can create long-term value.
        </p>
      </div>

      {/* RIGHT META */}
      <div
        className="
          hidden
          lg:flex
          items-center
          gap-3
          text-[9px]
          font-mono
          text-slate-400
          uppercase
          tracking-[0.16em]
          shrink-0
        "
      >
        <span className="w-8 h-px bg-slate-300" />

        <span>
          {String(7).padStart(2, "0")} Material Topics
        </span>
      </div>
    </div>


    {/* =========================================================
        MATERIAL TOPICS
        ========================================================= */}
    <div className="space-y-2.5">

      {[
        {
          topic: "GHG Emissions & Climate",
          short: "01",
          risk:
            "Emissions-intensive manufacturing; increasing customer, investor and regulatory expectations",
          mitigation:
            "Renewable-energy sourcing, energy audits, energy efficiency and lower-footprint equipment",
          opportunity:
            "Lower costs, stronger ESG positioning and growing customer preference for low-carbon supply chains",
        },
        {
          topic: "Waste & Circular Economy",
          short: "02",
          risk:
            "Improper hazardous-waste handling and landfill dependency",
          mitigation:
            "Colour-coded segregation, chip compaction, battery buy-back, authorized recycling and waste-recycler audits",
          opportunity:
            "Circular economy value recovery, scrap recycling revenue and zero-landfill leadership",
        },
        {
          topic: "Energy Efficiency",
          short: "03",
          risk:
            "Rising energy costs and grid dependency affecting competitiveness",
          mitigation:
            "ISO 50001 EMS, IE3/IE4 motors, heat recovery, compressed-air optimization and photosensors",
          opportunity:
            "Lower operational costs, improved emissions profile and stronger ESG benchmarks",
        },
        {
          topic: "Product Responsibility / EV",
          short: "04",
          risk:
            "Slow EV transition readiness could limit future market access",
          mitigation:
            "Ongoing expansion of EV and hybrid component manufacturing capabilities",
          opportunity:
            "First-mover advantage in EV component supply; deepening customer relationships",
        },
        {
          topic: "Occupational Safety",
          short: "05",
          risk:
            "Physical hazards, chemical exposure, ergonomic strain, noise and fire risks",
          mitigation:
            "HIRA, ISO 45001, PPE, machine guards, monthly audits, Lockout-Tagout and medical surveillance",
          opportunity:
            "Healthier workforce, lower absenteeism, improved Great Place to Work positioning",
        },
        {
          topic: "Diversity, Equity & Inclusion",
          short: "06",
          risk:
            "Underrepresentation limiting talent pipeline and decision-making quality",
          mitigation:
            "Structured DEI programmes and a 10% female workforce target for 2030",
          opportunity:
            "Better innovation, creativity, engagement and employer reputation",
        },
        {
          topic: "Sustainable Supply Chain",
          short: "07",
          risk:
            "Irresponsible sourcing; labour/human-rights violations; environmental non-compliance in supply chain",
          mitigation:
            "Responsible sourcing policy, supplier assessments, conflict-mineral controls and ESG-aligned procurement",
          opportunity:
            "Resilient supply chain, stronger customer ESG compliance scores and reduced tail risk",
        },
      ].map((item, i) => {

        const isActive = activeRisk === i;

        return (
          <div
            key={i}
            onClick={() =>
              setActiveRisk(isActive ? null : i)
            }
            className={`
              group
              rounded-[18px]
              overflow-hidden
              cursor-pointer
              border
              transition-all
              duration-300
              ${
                isActive
                  ? "border-emerald-300 bg-white shadow-lg shadow-emerald-900/5"
                  : "border-slate-200 bg-white hover:border-emerald-200 hover:shadow-md"
              }
            `}
          >

            {/* =================================================
                TOP ROW
                ================================================= */}
            <div
              className={`
                relative
                flex
                items-center
                gap-4
                sm:gap-5
                px-4
                sm:px-5
                lg:px-6
                py-3.5
                sm:py-4
                transition-colors
                duration-300
                ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-900 group-hover:bg-slate-50"
                }
              `}
            >

              {/* NUMBER */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  sm:w-9
                  sm:h-9
                  rounded-full
                  shrink-0
                  text-[10px]
                  font-mono
                  font-bold
                  border
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-white/10 border-white/30 text-white"
                      : "bg-emerald-50 border-emerald-100 text-emerald-700 group-hover:bg-emerald-100"
                  }
                `}
              >
                {item.short}
              </div>


              {/* TOPIC */}
              <div className="flex-1 min-w-0">

                <div
                  className={`
                    text-xs
                    sm:text-sm
                    lg:text-[15px]
                    font-semibold
                    tracking-tight
                    transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >
                  {item.topic}
                </div>

                {!isActive && (
                  <div className="hidden sm:flex items-center gap-2 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />

                    <span
                      className="
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      View risk · response · opportunity
                    </span>
                  </div>
                )}

              </div>


              {/* RIGHT META */}
              <div
                className="
                  hidden
                  md:block
                  text-[9px]
                  font-mono
                  text-slate-400
                  uppercase
                  tracking-[0.12em]
                  shrink-0
                "
              >
                ESG
              </div>


              {/* ARROW */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-full
                  shrink-0
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-white/10 rotate-90"
                      : "bg-slate-100 group-hover:bg-emerald-50"
                  }
                `}
              >
                <ChevronRight
                  className={`
                    w-4
                    h-4
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 group-hover:text-emerald-600"
                    }
                  `}
                />
              </div>

            </div>


            {/* =================================================
                EXPANDED CONTENT
                ================================================= */}
            <div
              className={`
                grid
                transition-all
                duration-500
                ease-in-out
                ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >

              <div className="overflow-hidden">

                {/* THREE COLUMNS */}
                <div className="grid grid-cols-1 md:grid-cols-3">

                  {/* =================================================
                      RISK
                      ================================================= */}
                  <div
                    className="
                      relative
                      p-5
                      sm:p-6
                      bg-[#fff8f7]
                      border-t
                      border-red-100
                      md:border-r
                    "
                  >

                    <div className="flex items-center gap-3 mb-3">

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-8
                          h-8
                          rounded-xl
                          bg-red-100
                          text-red-600
                          shrink-0
                        "
                      >
                        <span className="text-sm font-bold">
                          !
                        </span>
                      </div>

                      <div>
                        <div
                          className="
                            text-[9px]
                            font-mono
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-red-500
                          "
                        >
                          Risk
                        </div>

                        <div className="text-[10px] text-slate-400 mt-0.5">
                          What could affect progress
                        </div>
                      </div>

                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-slate-700
                        leading-relaxed
                      "
                    >
                      {item.risk}
                    </p>

                  </div>


                  {/* =================================================
                      MITIGATION
                      ================================================= */}
                  <div
                    className="
                      relative
                      p-5
                      sm:p-6
                      bg-[#fffcf3]
                      border-t
                      border-yellow-100
                      md:border-r
                    "
                  >

                    <div className="flex items-center gap-3 mb-3">

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-8
                          h-8
                          rounded-xl
                          bg-yellow-100
                          text-yellow-700
                          shrink-0
                        "
                      >
                        <ShieldCheck className="w-4 h-4" />
                      </div>

                      <div>
                        <div
                          className="
                            text-[9px]
                            font-mono
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-yellow-700
                          "
                        >
                          Mitigation
                        </div>

                        <div className="text-[10px] text-slate-400 mt-0.5">
                          How we respond
                        </div>
                      </div>

                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-slate-700
                        leading-relaxed
                      "
                    >
                      {item.mitigation}
                    </p>

                  </div>


                  {/* =================================================
                      OPPORTUNITY
                      ================================================= */}
                  <div
                    className="
                      relative
                      p-5
                      sm:p-6
                      bg-[#f4fbf7]
                      border-t
                      border-emerald-100
                    "
                  >

                    <div className="flex items-center gap-3 mb-3">

                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          w-8
                          h-8
                          rounded-xl
                          bg-emerald-100
                          text-emerald-700
                          shrink-0
                        "
                      >
                        <Leaf className="w-4 h-4" />
                      </div>

                      <div>
                        <div
                          className="
                            text-[9px]
                            font-mono
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-emerald-600
                          "
                        >
                          Opportunity
                        </div>

                        <div className="text-[10px] text-slate-400 mt-0.5">
                          Where we can create value
                        </div>
                      </div>

                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-slate-700
                        leading-relaxed
                      "
                    >
                      {item.opportunity}
                    </p>

                  </div>

                </div>


                {/* =================================================
                    BOTTOM INDICATOR
                    ================================================= */}
                <div
                  className="
                    px-5
                    sm:px-6
                    py-2.5
                    bg-white
                    border-t
                    border-slate-100
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Material Topic {item.short}
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-[0.15em]
                      text-emerald-600
                    "
                  >
                    ESG Framework
                  </span>

                </div>

              </div>
            </div>

          </div>
        );
      })}

    </div>


    {/* =========================================================
        BOTTOM SUMMARY STRIP
        ========================================================= */}
    <div
      className="
        mt-5
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-2.5
      "
    >

      {/* RISK */}
      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-[16px]
          bg-white
          border
          border-slate-100
        "
      >

        <div
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-red-400
            shrink-0
          "
        />

        <div>
          <div className="text-xs font-semibold text-slate-800">
            Risk
          </div>

          <div className="text-[9px] text-slate-500 mt-0.5">
            Identify potential exposure
          </div>
        </div>

      </div>


      {/* MITIGATION */}
      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-[16px]
          bg-white
          border
          border-slate-100
        "
      >

        <div
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-yellow-400
            shrink-0
          "
        />

        <div>
          <div className="text-xs font-semibold text-slate-800">
            Mitigation
          </div>

          <div className="text-[9px] text-slate-500 mt-0.5">
            Actions already underway
          </div>
        </div>

      </div>


      {/* OPPORTUNITY */}
      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-[16px]
          bg-white
          border
          border-slate-100
        "
      >

        <div
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-emerald-500
            shrink-0
          "
        />

        <div>
          <div className="text-xs font-semibold text-slate-800">
            Opportunity
          </div>

          <div className="text-[9px] text-slate-500 mt-0.5">
            Long-term value creation
          </div>
        </div>

      </div>

    </div>


    {/* =========================================================
        BOTTOM ESG ALIGNMENT STRIP
        ========================================================= */}
    <div
      className="
        mt-5
        rounded-[18px]
        bg-emerald-50
        border
        border-emerald-100
        px-5
        py-4
        sm:px-6
      "
    >

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        "
      >

        {/* LEFT */}
        <div className="min-w-0">

          <div
            className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.16em]
              text-emerald-600
              uppercase
            "
          >
            Sustainability Materiality
          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-slate-600
              mt-1
              leading-relaxed
            "
          >
            Material topics guide risk management, mitigation actions
            and long-term ESG value creation across Sansera's operations
            and value chain.
          </p>

        </div>


        {/* RIGHT */}
        <div
          className="
            shrink-0
            sm:text-right
            border-l-0
            sm:border-l
            border-emerald-200
            sm:pl-5
          "
        >

          <div
            className="
              text-xl
              sm:text-2xl
              font-bold
              text-emerald-600
            "
          >
            07
          </div>

          <div
            className="
              text-[9px]
              font-mono
              text-slate-400
              uppercase
              whitespace-nowrap
            "
          >
            Material ESG topics
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          REPORTS & POLICIES
          ══════════════════════════════════════════════════════ */}
     <section
  id="reports"
  className="py-16 lg:py-20 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* =========================================================
        MAIN PPT-STYLE GRID
        ========================================================= */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

      {/* =======================================================
          LEFT — FEATURED REPORT PANEL
          ======================================================= */}
      <div className="lg:col-span-5 lg:h-[610px]">

        <div
          className="
            relative
            h-[430px]
            sm:h-[500px]
            lg:h-full
            rounded-[24px]
            overflow-hidden
            bg-slate-950
            border
            border-slate-100
            shadow-xl
            group
          "
        >

          {/* Decorative background circles */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-72
              h-72
              rounded-full
              border
              border-emerald-400/10
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              -right-10
              -top-10
              w-48
              h-48
              rounded-full
              border
              border-emerald-400/10
            "
          />

          <div
            className="
              absolute
              -bottom-28
              -left-20
              w-72
              h-72
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          {/* Large background number */}
          <div
            className="
              absolute
              right-[-10px]
              bottom-[-15px]
              text-[180px]
              sm:text-[210px]
              font-bold
              leading-none
              text-white/[0.035]
              select-none
            "
          >
            12
          </div>

          {/* Content */}
          <div
            className="
              relative
              z-10
              h-full
              p-6
              sm:p-8
              lg:p-9
              flex
              flex-col
              justify-between
            "
          >

            {/* TOP */}
            <div>

              <div
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.2em]
                  text-emerald-400
                  uppercase
                "
              >
                Transparency & Accountability
              </div>

              <div className="mt-5">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                  "
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />

                  <span
                    className="
                      text-[9px]
                      font-mono
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-300
                    "
                  >
                    ESG Documents
                  </span>
                </div>

              </div>

            </div>


            {/* MIDDLE */}
            <div>

              <div
                className="
                  text-[10px]
                  font-mono
                  uppercase
                  tracking-[0.18em]
                  text-emerald-300
                  mb-2
                "
              >
                Reporting Framework
              </div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[42px]
                  font-bold
                  text-white
                  leading-[1.08]
                  tracking-tight
                  max-w-md
                "
              >
                Transparency
                <br />
                through
                <span className="text-emerald-400">
                  {" "}reporting.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-slate-400
                  leading-relaxed
                  max-w-md
                "
              >
                Access sustainability reports, annual disclosures and ESG
                policies that provide visibility into Sansera's commitments,
                performance and progress.
              </p>

            </div>


            {/* BOTTOM */}
            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-5
                "
              >

                <div
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-[9px]
                    font-mono
                    uppercase
                    tracking-wider
                    text-slate-300
                  "
                >
                  12 Documents
                </div>

                <div
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-emerald-500/10
                    border
                    border-emerald-400/20
                    text-[9px]
                    font-mono
                    uppercase
                    tracking-wider
                    text-emerald-300
                  "
                >
                  ESG Framework
                </div>

              </div>

              <div
                className="
                  pt-4
                  border-t
                  border-white/10
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[9px]
                    font-mono
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                  "
                >
                  Public Disclosure
                </span>

                <span className="text-emerald-400 text-sm">
                  →
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =======================================================
          RIGHT — REPORTS + POLICY CONTENT
          ======================================================= */}
      <div
        className="
          lg:col-span-7
          lg:h-[610px]
          min-h-0
          flex
          flex-col
          gap-4
        "
      >

        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="shrink-0">

          <div className="flex items-center justify-between">

            <div>

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-[0.2em]
                  text-emerald-600
                  uppercase
                "
              >
                Transparency
              </span>

              <h3
                className="
                  mt-1.5
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  text-slate-900
                  tracking-tight
                "
              >
                Reports & Policies
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  sm:text-sm
                  text-slate-500
                  leading-relaxed
                "
              >
                Sustainability reporting and governance documents
              </p>

            </div>


            {/* YEAR */}
            <div
              className="
                hidden
                sm:block
                text-[9px]
                font-mono
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              FY2024-25
            </div>

          </div>

        </div>


        {/* =====================================================
            FEATURED REPORT CARDS
            ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            shrink-0
          "
        >

          {[
            {
              name: "Sustainability Report FY2023-24",
              type: "Sustainability Report",
              year: "FY2023-24",
              pdf: "/Documents/Sustainability-Report-FY24-2.pdf",
            },
            {
              name: "Annual Report 2024-25",
              type: "Annual Report",
              year: "FY2024-25",
              pdf: "/Documents/Annual-Report-2024-25.pdf",
            },
          ].map((doc, i) => (

            <button
              key={i}
              type="button"
              onClick={() => {
                window.open(
                  doc.pdf,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="
                group
                relative
                text-left
                bg-slate-50
                rounded-[20px]
                p-5
                sm:p-6
                border
                border-slate-100
                shadow-sm
                hover:border-emerald-200
                hover:shadow-lg
                transition-all
                duration-300
                overflow-hidden
              "
            >

              {/* Hover accent */}
              <div
                className="
                  absolute
                  top-0
                  left-6
                  right-6
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-400
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              {/* Top row */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                "
              >

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-emerald-100
                    text-emerald-700
                    flex
                    items-center
                    justify-center
                    shrink-0
                    group-hover:bg-emerald-600
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  <FileText className="w-4 h-4" />
                </div>

                <span
                  className="
                    text-[9px]
                    font-mono
                    text-slate-300
                  "
                >
                  0{i + 1}
                </span>

              </div>


              {/* Content */}
              <div className="mt-5">

                <div
                  className="
                    text-[9px]
                    font-mono
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-emerald-600
                  "
                >
                  {doc.year}
                </div>

                <h4
                  className="
                    mt-1.5
                    text-base
                    sm:text-lg
                    font-bold
                    text-slate-900
                    leading-tight
                    tracking-tight
                  "
                >
                  {doc.name}
                </h4>

                <div
                  className="
                    mt-2
                    text-[10px]
                    text-slate-500
                  "
                >
                  {doc.type}
                </div>

              </div>


              {/* Bottom */}
              <div
                className="
                  mt-5
                  pt-3
                  border-t
                  border-slate-200
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[9px]
                    font-mono
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  View Document
                </span>

                <div
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-white
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    group-hover:bg-emerald-600
                    group-hover:border-emerald-600
                    transition-all
                    duration-300
                  "
                >
                  <Download
                    className="
                      w-3
                      h-3
                      text-slate-400
                      group-hover:text-white
                    "
                  />
                </div>

              </div>

            </button>

          ))}

        </div>


        {/* =====================================================
            POLICY LIBRARY
            ===================================================== */}
        <div
          className="
            flex-1
            min-h-0
            bg-slate-50
            rounded-[22px]
            p-5
            sm:p-6
            border
            border-slate-100
            overflow-hidden
          "
        >

          {/* POLICY HEADER */}
          <div
            className="
              flex
              items-start
              justify-between
              mb-4
            "
          >

            <div>

              <span
                className="
                  text-[9px]
                  font-mono
                  font-bold
                  tracking-[0.16em]
                  text-emerald-600
                  uppercase
                "
              >
                Document Library
              </span>

              <h3
                className="
                  text-sm
                  sm:text-base
                  font-bold
                  text-slate-900
                  mt-1
                "
              >
                ESG Policies & Frameworks
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  text-slate-500
                  mt-1
                "
              >
                Policies supporting responsible and ethical business
              </p>

            </div>


            <div
              className="
                hidden
                sm:flex
                w-9
                h-9
                rounded-xl
                bg-emerald-100
                items-center
                justify-center
                shrink-0
              "
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
            </div>

          </div>


          {/* POLICY GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-x-8
              gap-y-2.5
            "
          >

            {[
              {
                name: "ESG Policy",
                type: "Policy",
              },
              {
                name: "Energy Policy (ISO 50001)",
                type: "Policy",
              },
              {
                name: "Environmental, Occupational Health & Safety Policy",
                type: "Policy",
              },
              {
                name: "Sustainable Procurement Policy",
                type: "Policy",
              },
              {
                name: "CSR Policy",
                type: "Policy",
              },
              {
                name: "Human Rights & Working Conditions Policy",
                type: "Policy",
              },
              {
                name: "Whistleblower Policy",
                type: "Policy",
              },
              {
                name: "Anti-Bribery Policy",
                type: "Policy",
              },
              {
                name: "Responsible Sourcing of Raw Material Policy",
                type: "Policy",
              },
              {
                name: "Conflict Mineral Policy",
                type: "Policy",
              },
            ].map((doc, i) => (

              <button
                key={i}
                type="button"
                onClick={onOpenEsgReport}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  min-w-0
                  text-left
                  py-2
                  border-b
                  border-slate-200/70
                  hover:border-emerald-200
                  transition-colors
                "
              >

                {/* Bullet */}
                <div
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-emerald-500
                    shrink-0
                    group-hover:scale-125
                    transition-transform
                  "
                />

                {/* Text */}
                <div className="flex-1 min-w-0">

                  <div
                    className="
                      text-[10px]
                      sm:text-xs
                      text-slate-700
                      leading-snug
                      group-hover:text-emerald-700
                      transition-colors
                    "
                  >
                    {doc.name}
                  </div>

                </div>

                {/* Arrow */}
                <span
                  className="
                    text-xs
                    text-slate-300
                    group-hover:text-emerald-500
                    group-hover:translate-x-0.5
                    transition-all
                  "
                >
                  →
                </span>

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>


    {/* =========================================================
        BOTTOM TRUST STRIP
        ========================================================= */}
    <div
      className="
        mt-5
        lg:mt-6
        bg-emerald-50
        border
        border-emerald-100
        rounded-[20px]
        px-5
        py-4
        sm:px-6
      "
    >

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-white
              border
              border-emerald-100
              text-emerald-700
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <div>

            <div
              className="
                text-xs
                font-semibold
                text-slate-800
              "
            >
              Transparency & Accountability
            </div>

            <div
              className="
                text-[10px]
                text-slate-500
                mt-0.5
              "
            >
              ESG information made accessible through our reporting framework
            </div>

          </div>

        </div>


        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            font-mono
            uppercase
            tracking-wider
            text-slate-400
            shrink-0
          "
        >

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-500
            "
          />

          ESG DOCUMENTS

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#f7faf8] py-28 sm:py-32 lg:py-40">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src={`${IMG}Screenshot 2026-08-11 at 12.51.40 PM.png`}
      alt="Green city in glass dome representing Sansera's sustainable future vision"
      className="h-full w-full object-cover object-center"
    />

    {/* Light image overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/35" />
    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20" />

    {/* Soft green tint */}
    <div className="absolute inset-0 bg-emerald-50/10" />
  </div>

  {/* Ambient green glow */}
  <div className="absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[120px]" />

  <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-emerald-200/25 blur-[110px]" />

  {/* Decorative grid */}
  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
    }}
  />

  {/* Content */}
  <div
    ref={cta.ref}
    className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
      cta.visible
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
    }`}
  >
    <div className="max-w-3xl">
      {/* Eyebrow */}
      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-700">
          High Precision for a Sustainable Future
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-7xl">
        Engineering a{" "}
        <span className="text-emerald-600">
          More Sustainable
        </span>{" "}
        Future.
      </h2>

      {/* Description */}
      <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        From renewable wind and solar energy to efficient manufacturing,
        circular resource use, responsible sourcing, safer workplaces and
        stronger communities, we are building a more resilient future
        through precision engineering.
      </p>

      {/* CTA buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        {/* Primary button */}
        <button
          onClick={onOpenEsgReport}
          className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25"
        >
          <span>Request Sustainability Report</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>

        {/* Secondary button */}
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-white hover:shadow-md"
        >
          <span>Back to Main Site</span>

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>

    {/* Bottom information strip */}
    <div className="mt-20 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        {
          value: "80%",
          label: "Clean Energy Target",
        },
        {
          value: "2030",
          label: "Vision Horizon",
        },
        {
          value: "ZERO",
          label: "Waste to Landfill",
        },
        {
          value: "ESG",
          label: "Driven Growth",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-md"
        >
          <div className="text-xl font-bold tracking-tight text-emerald-600 sm:text-2xl">
            {item.value}
          </div>

          <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.12em] text-slate-500">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom soft fade */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7faf8] to-transparent" />
</section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden border-t border-emerald-100 bg-white">
  {/* Subtle background accents */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
  <div className="pointer-events-none absolute -left-32 bottom-0 h-48 w-48 rounded-full bg-emerald-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">

    {/* Top row */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      {/* Brand / Logo / Copyright */}
      <div>
        <div className="flex flex-col gap-4">

          {/* Clickable Sansera Logo */}
          <a
            href="/"
            className="inline-flex w-fit transition-opacity duration-300 hover:opacity-80"
            aria-label="Go to Sansera Engineering homepage"
          >
            <SanseraLogo
              size="md"
              variant="light"
              showTagline={true}
            />
          </a>

          {/* Sustainability label */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40" />

            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-emerald-700">
              Sustainability &amp; Carbon Neutrality
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-5 text-xs leading-relaxed text-slate-500">
          © {new Date().getFullYear()} Sansera Engineering Limited.
          <span className="ml-1">All Rights Reserved.</span>
        </p>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          "ISO 14001",
          "ISO 45001",
          "ISO 50001",
        ].map((cert, i) => (
          <div
            key={i}
            className="
              group inline-flex items-center gap-2
              rounded-full
              border border-emerald-100
              bg-emerald-50/70
              px-3.5 py-2
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-emerald-200
              hover:bg-emerald-50
              hover:shadow-sm
            "
          >
            <span
              className="
                flex h-4 w-4 items-center justify-center
                rounded-full
                bg-emerald-600
                text-[8px] font-bold text-white
                shadow-sm shadow-emerald-600/20
              "
            >
              ✓
            </span>

            <span className="text-[10px] font-mono font-bold tracking-wide text-emerald-700">
              {cert}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="my-8 h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />

    {/* Bottom row */}
    <div className="flex flex-col gap-3 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">

      <div className="font-mono uppercase tracking-[0.12em]">
        Sustainability · Responsibility · Progress
      </div>

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40" />

        <span className="font-mono">
          Building a more sustainable future
        </span>
      </div>

    </div>
  </div>
</footer>
    </div>
  );
};
