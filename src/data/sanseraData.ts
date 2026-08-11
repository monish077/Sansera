import { ProductItem, CapabilityItem, FacilityItem, OEMPartner, MilestoneItem, FinancialMetric, ESGMetric } from '../types';

export const SANSERA_HERO_STATS = [
  { value: '40+', label: 'Years of Engineering Excellence', sub: 'Est. 1981, Bengaluru' },
  { value: '17+', label: 'Advanced Manufacturing Plants', sub: 'India, Europe & Global Supply' },
  { value: '10,000+', label: 'Skilled Global Workforce', sub: 'Engineers, Metrologists & Technicians' },
  { value: 'Top 10', label: 'Global Precision Component Maker', sub: 'Forged & Machined Solutions' },
];

export const SANSERA_PRODUCTS: ProductItem[] = [
  {
    id: 'crankshaft-single',
    name: 'Precision Monoblock Crankshaft Assembly',
    category: 'automotive',
    categoryLabel: 'Automotive Powertrain',
    description: 'Ultra-precision forged and CNC finish-ground crankshaft engineered for high-revving passenger vehicle and two-wheeler internal combustion and hybrid engines.',
    application: 'Automotive Powertrain, Two-Wheelers, Hybrid Engines',
    tolerances: '± 1.5 microns (Journal Cylindricity)',
    material: 'Micro-alloyed Forged Steel (38MnS6 / 42CrMo4)',
    weightRange: '1.2 kg – 18.5 kg',
    annualVolume: '14.2 Million Units/year',
    cadModelType: 'crankshaft',
    highlights: [
      'Induction hardened journal radii for 300% fatigue resistance',
      'Dynamic balance precision within 0.8 g·mm',
      'Super-finished pin journals (Ra < 0.08 μm)',
      'Integrated timing drive gear and oil-gallery gun drilling'
    ],
    specs: {
      metallurgy: 'Closed-die precision hot forged micro-alloy steel',
      precisionGrade: 'ISO DIN 6 Gear Quality Grade',
      surfaceRoughness: 'Ra 0.06 – 0.12 μm on critical bearings',
      heatTreatment: 'Continuous Controlled Atmosphere Induction Hardening'
    }
  },
  {
    id: 'connecting-rod-fracture',
    name: 'Fracture-Split Connecting Rod Assembly',
    category: 'automotive',
    categoryLabel: 'Automotive ICE & Hybrid',
    description: 'High-strength cracked-cap (fracture-split) connecting rod delivering seamless joint re-assembly, ultra-tight big-end roundness, and lightweight reciprocating mass.',
    application: 'Passenger Cars, Commercial Transmissions, Performance Superbikes',
    tolerances: '± 2.0 microns (Big-end and Small-end bore concentricity)',
    material: 'Forged Sintered / C70S6 High-Carbon Forged Steel',
    weightRange: '280 g – 1.45 kg',
    annualVolume: '28.5 Million Units/year',
    cadModelType: 'connecting-rod',
    highlights: [
      'Laser-notched hydraulic fracture splitting technology',
      'Zero-shift cap retention under 9,500 RPM tensile loads',
      'Weight matched sets within ± 1.5 grams per engine bank',
      'Lead-free bronze bushing with micro-groove lubrication'
    ],
    specs: {
      metallurgy: 'C70S6 Fracture-Splittable High-Tensile Steel',
      precisionGrade: 'IT3 Grade Bore Cylindricity',
      surfaceRoughness: 'Bore Ra < 0.15 μm',
      heatTreatment: 'Direct Quenched Forged Pearlite Matrix'
    }
  },
  {
    id: 'rocker-arm-valvetrain',
    name: 'Roller Rocker Arm & Valvetrain Components',
    category: 'automotive',
    categoryLabel: 'Valvetrain Precision Systems',
    description: 'Low-friction roller rocker arms and finger followers designed to reduce valvetrain friction by 24% while surviving extreme valvetrain acceleration.',
    application: 'Variable Valve Timing (VVT) Engines, Turbocharged GDI Engines',
    tolerances: '± 3.0 microns (Roller pivot center-to-center)',
    material: 'Case Hardened Alloy Steel (SCM420H / 16MnCr5)',
    weightRange: '65 g – 320 g',
    annualVolume: '42.0 Million Units/year',
    cadModelType: 'rocker-arm',
    highlights: [
      'Diamond-Like Carbon (DLC) coating compatibility',
      'Deep-case carburized pivot pockets for wear resistance',
      'High-speed needle bearing assembly with retaining pins',
      'Cold-forged hollow pocket design for inertia minimization'
    ],
    specs: {
      metallurgy: 'Precision Cold-forged & Finish-machined SCM420H',
      precisionGrade: 'Sub-micron Roller Runout',
      surfaceRoughness: 'Roller Track Ra 0.05 μm',
      heatTreatment: 'Carburized & Tempered (Surface 60-64 HRC, Core 34-40 HRC)'
    }
  },
  {
    id: 'steering-knuckle-chassis',
    name: 'Chassis Steering Knuckle & Suspension Forks',
    category: 'non-automotive',
    categoryLabel: 'Chassis & Off-Highway',
    description: 'Safety-critical structural steering knuckle forged from high-toughness steel, precision bored for wheel hub bearing units and caliper brackets.',
    application: 'Off-Highway Vehicles, Commercial Earthmovers, Heavy Agri-Tractors',
    tolerances: '± 5.0 microns (Bearing cartridge bore location)',
    material: 'Forged 40Cr4 / S45C Structural Steel',
    weightRange: '3.5 kg – 14.2 kg',
    annualVolume: '4.8 Million Units/year',
    cadModelType: 'steering-knuckle',
    highlights: [
      '100% Magnetic Particle Inspection (MPI) for zero defect assurance',
      'Optimized grain flow along high-stress strut mounting ears',
      'Multi-axis simultaneous CNC contour milling in single setup',
      'Electro-deposition (ED) cathode protective coating'
    ],
    specs: {
      metallurgy: 'Heavy Closed-die Hot Forged Structural Alloy',
      precisionGrade: 'Class A Critical Suspension Component',
      surfaceRoughness: 'Bearing Seat Ra 0.4 μm',
      heatTreatment: 'Quenched & Tempered for high impact Charpy toughness'
    }
  },
  {
    id: 'aerospace-actuator-housing',
    name: 'Flight Control Actuator & Pylon Fittings',
    category: 'aerospace',
    categoryLabel: 'Aerospace & Defense',
    description: 'AS9100D certified flight-critical actuator brackets and aero-engine structural mounts machined from aerospace-grade Titanium and Inconel alloys.',
    application: 'Commercial Jet Flight Controls, Aero-Engine Nacelles, Defense Actuation',
    tolerances: '± 2.5 microns (Pin bore centerline parallelism)',
    material: 'Titanium Ti-6Al-4V Grade 5 / Inconel 718',
    weightRange: '450 g – 6.2 kg',
    annualVolume: '180,000 Units/year',
    cadModelType: 'actuator-housing',
    highlights: [
      'Full 5-axis high-speed milling in temperature-controlled cells',
      'Traceable material mill test certificates from ingot to final flight',
      'Fluorescent Penetrant Inspection (FPI Level 4 sensitivity)',
      'Digital Twin metrology verification with Zeiss 3D CMM'
    ],
    specs: {
      metallurgy: 'Vacuum Induction Melted Aerospace Grade Ti-6Al-4V',
      precisionGrade: 'AS9100D Rev D Aero-Structure Spec',
      surfaceRoughness: 'Ra 0.2 μm with zero tool-mark stress raisers',
      heatTreatment: 'Solution Treated & Overaged (STA) in Vacuum Furnace'
    }
  },
  {
    id: 'ev-rotor-shaft',
    name: 'Precision Hollow EV Rotor Shaft',
    category: 'ev-mobility',
    categoryLabel: 'Electric & Clean Mobility',
    description: 'Lightweight hollow rotor shaft with internal cooling channels designed for next-gen 800V e-axle traction motors running up to 22,000 RPM.',
    application: 'Pure Electric Vehicles (BEV), E-Axles, High-RPM Traction Motors',
    tolerances: '± 1.0 micron (Bearing seat runout at 20,000 RPM rating)',
    material: 'Alloy Case-Hardening Steel 20MnCr5',
    weightRange: '2.1 kg – 7.8 kg',
    annualVolume: '2.2 Million Units/year',
    cadModelType: 'crankshaft',
    highlights: [
      'Internal hollow gun-drilled cooling channel for rotor thermal dissipation',
      'Spline hobbing & hard-skiving to DIN 5 accuracy',
      'Ultra-low residual unbalance < 0.3 g·mm',
      'Lightweighting topology optimization saves 28% mass vs solid shaft'
    ],
    specs: {
      metallurgy: 'Clean-melt Low-inclusion Forged 20MnCr5',
      precisionGrade: 'DIN Class 5 Gear / Spline Accuracy',
      surfaceRoughness: 'Shaft Seats Ra 0.08 μm',
      heatTreatment: 'Low-pressure Carburizing with High-pressure Gas Quenching'
    }
  }
];

export const SANSERA_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'design-engineering',
    number: '01',
    title: 'Design & Engineering Simulation',
    subtitle: 'From Whiteboard Concept to Finite Element Mastery',
    description: 'Our 200+ design engineers transform complex client specifications into production-ready CAD/CAM geometries, utilizing non-linear FEA simulation, Forge® forging simulation, and MoldFlow analysis to optimize grain flow and eliminate stress risers prior to cutting steel.',
    keyFeatures: [
      'Forging simulation & flash minimization algorithms',
      'Non-linear dynamic stress and fatigue life modeling',
      'In-house rapid prototyping and 3D metal additive validation',
      'Co-engineering with global OEM R&D centers'
    ],
    equipment: 'Dassault CATIA V6, Siemens NX, QForm / Transvalor FORGE® 3D',
    outputMetric: '500+ New Product Developments (NPD) / year',
    badge: 'Virtual Validation',
    iconName: 'Compass',
    imageCaption: 'CAD/CAM finite element stress analysis simulating grain boundary orientation under cyclic load.'
  },
  {
    id: 'precision-forging',
    number: '02',
    title: 'Precision Closed-Die Forging',
    subtitle: 'Hot, Warm & Cold Near-Net-Shape Forging',
    description: 'Operating automated press lines ranging from 1,000T up to 4,000T with induction billet heating, robotic transfer, and controlled micro-alloy cooling. We achieve near-net shape contours that dramatically reduce subsequent machining stock while maximizing grain structure integrity.',
    keyFeatures: [
      '1,000T to 4,000T automated mechanical and screw press lines',
      'Continuous induction heating with optical pyrometer temp control',
      'Cold forging & warm precision flashless forging cells',
      'Micro-alloyed steel direct-cooling metallurgical control'
    ],
    equipment: '4,000T Press Lines, SMS Meer, Eumuco, Induction Heaters',
    outputMetric: '75,000 Metric Tonnes Forging Capacity / Year',
    badge: 'Structural Integrity',
    iconName: 'Flame',
    imageCaption: 'Automated 3000T closed-die forging cell with robotic arm billet transfer and temperature tracking.'
  },
  {
    id: 'precision-machining',
    number: '03',
    title: 'High-Precision CNC Machining',
    subtitle: 'Sub-Micron Multi-Axis Turning, Milling & Grinding',
    description: 'With over 2,500 state-of-the-art CNC machine tools across our plants, we execute high-speed 5-axis milling, hard turning, deep-hole gun drilling, and ultra-precision CBN grinding. We hold tolerances down to ±1.5 microns across millions of components annually.',
    keyFeatures: [
      '5-Axis simultaneous high-speed machining centers (Makino, Mori Seiki)',
      'High-speed twin-spindle CNC turning centers with live tooling',
      'CBN high-speed orbital pin grinders for crankshaft journals',
      'Robotic auto-loading gantry cells with automated gauge feedback'
    ],
    equipment: '2,500+ CNC Machines (Makino, DMG MORI, Brother, Studer)',
    outputMetric: '85 Million Precision Parts Machined / Year',
    badge: '± 1.5 μm Accuracy',
    iconName: 'Cog',
    imageCaption: 'Multi-axis CNC spindle performing high-speed finish grinding on hardened crankshaft journals.'
  },
  {
    id: 'automation-machine-building',
    number: '04',
    title: 'In-House Machine Building & Robotics',
    subtitle: 'Proprietary Automation Giving Unfair Cost & Agility Advantage',
    description: 'Sansera is one of the few global engineering giants that conceptualizes, designs, fabricates, and programs its own Special Purpose Machines (SPMs), automated transfer lines, and 6-axis robotic cells in-house. This gives us total control over cycle times, capital expenditure, and maintenance speed.',
    keyFeatures: [
      'Custom SPM design for dedicated high-volume components',
      'Integrated FANUC / KUKA 6-axis industrial robotic cells',
      'Automated vision inspection (AOI) with sub-pixel camera grading',
      'Complete in-house PLC, SCADA, and Industry 4.0 IoT telemetry'
    ],
    equipment: 'In-House SPM Division, 400+ Industrial Robots, Machine Vision Labs',
    outputMetric: '40% Cycle Time & CapEx Reduction vs External Sourcing',
    badge: 'Proprietary Tech',
    iconName: 'Cpu',
    imageCaption: 'Sansera-built high-speed rotary transfer machine with integrated robotic vision inspection.'
  },
  {
    id: 'heat-treatment-metallurgy',
    number: '05',
    title: 'Advanced Metallurgy & Heat Treatment',
    subtitle: 'Controlled Atmosphere Carburizing, Nitriding & Induction',
    description: 'Our in-house heat treatment infrastructure delivers precise metallurgical case depths, minimal thermal distortion, and optimized core toughness. Controlled atmosphere seal quench furnaces, continuous mesh belt furnaces, and high-frequency induction hardening lines run 24/7.',
    keyFeatures: [
      'Continuous sealed quench furnaces (SQF) with oxygen probe control',
      'CNC multi-frequency induction hardening for selective journal wear zones',
      'Plasma nitriding & sub-zero cryogenic treatment for aerospace parts',
      'In-house chemical, spectroscopic, and metallurgical failure analysis labs'
    ],
    equipment: 'Aichelin Sealed Quench Lines, Inductoheat CNC Induction Scanners',
    outputMetric: 'Zero Decarburization & 100% Case Depth Consistency',
    badge: 'Metallurgical Lab',
    iconName: 'Layers',
    imageCaption: 'Sealed quench atmosphere furnace with digital carbon-potential telemetry monitoring.'
  },
  {
    id: 'quality-metrology',
    number: '06',
    title: 'World-Class Metrology & Zero Defect QA',
    subtitle: 'Zeiss 3D CMMs, Formtesters & AS9100D Aero Standards',
    description: 'Quality is embedded into the process rather than inspected in. With climate-controlled metrology laboratories across every plant, we utilize Zeiss CNC Coordinate Measuring Machines, Taylor Hobson surface roughness profilometers, and non-destructive eddy current testers.',
    keyFeatures: [
      'Zeiss & Mitutoyo CNC 3D CMMs with sub-micron volumetric accuracy',
      'Taylor Hobson roundness and surface profilometry instruments',
      'Automated eddy-current testing for crack and flaw detection',
      'IATF 16949, AS 9100D, ISO 14001, ISO 45001 certified across plants'
    ],
    equipment: '45+ Zeiss CMMs, Taylor Hobson Form Talysurf, Spectrometers',
    outputMetric: '< 10 PPM Global Defect Rate',
    badge: 'Zero Defect',
    iconName: 'ShieldCheck',
    imageCaption: 'Climate-controlled metrology cleanroom with Zeiss CMM scanning aerospace actuator geometry.'
  }
];

export const SANSERA_OEM_PARTNERS: OEMPartner[] = [
  {
    id: 'hero',
    name: 'Hero MotoCorp',
    category: 'Two-Wheeler',
    logoText: 'HERO',
    accentColor: '#E60000',
    suppliedComponents: ['Connecting Rods', 'Crankshafts', 'Rocker Arms', 'Gear Shifters'],
    partnershipDuration: '32+ Years Tier-1 Partnership'
  },
  {
    id: 'honda',
    name: 'Honda Motors',
    category: 'Two-Wheeler',
    logoText: 'HONDA',
    accentColor: '#CC0000',
    suppliedComponents: ['Crankshafts', 'Connecting Rods', 'Valvetrain Components'],
    partnershipDuration: '28+ Years Tier-1 Partnership'
  },
  {
    id: 'jcb',
    name: 'JCB Earthmovers',
    category: 'Commercial & Industrial',
    logoText: 'JCB',
    accentColor: '#FFB800',
    suppliedComponents: ['Heavy Duty Knuckles', 'Connecting Rods', 'Hydraulic Hubs'],
    partnershipDuration: '22+ Years Tier-1 Partnership'
  },
  {
    id: 'ktm',
    name: 'KTM Sportmotorcycle',
    category: 'Two-Wheeler',
    logoText: 'KTM',
    accentColor: '#FF6600',
    suppliedComponents: ['High-RPM Crankshafts', 'Split Connecting Rods', 'Rocker Arms'],
    partnershipDuration: '18+ Years Global Supplier'
  },
  {
    id: 'vw',
    name: 'Volkswagen Group',
    category: 'Passenger Vehicle',
    logoText: 'VOLKSWAGEN',
    accentColor: '#001E50',
    suppliedComponents: ['Fracture-Split Con-Rods', 'Camshaft Components', 'Chassis Parts'],
    partnershipDuration: '16+ Years Global Direct Supplier'
  },
  {
    id: 'yamaha',
    name: 'Yamaha Motor Corp',
    category: 'Two-Wheeler',
    logoText: 'YAMAHA',
    accentColor: '#D10000',
    suppliedComponents: ['Crankshaft Assemblies', 'Gear Forks', 'Engine Forgings'],
    partnershipDuration: '24+ Years Tier-1 Partnership'
  },
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki India',
    category: 'Passenger Vehicle',
    logoText: 'MARUTI SUZUKI',
    accentColor: '#0A3B8C',
    suppliedComponents: ['Connecting Rods', 'Steering Knuckles', 'Transmission Components'],
    partnershipDuration: '25+ Years Tier-1 Partnership'
  },
  {
    id: 'boeing-aero',
    name: 'Aerospace Tier-1 Giants',
    category: 'Aerospace',
    logoText: 'AERO TIER-1',
    accentColor: '#0088CC',
    suppliedComponents: ['Flight Control Actuators', 'Engine Pylon Brackets', 'Landing Gear Fittings'],
    partnershipDuration: '15+ Years AS9100D Certified'
  },
  {
    id: 'ducati',
    name: 'Ducati Motor Holding',
    category: 'Two-Wheeler',
    logoText: 'DUCATI',
    accentColor: '#CC0000',
    suppliedComponents: ['Racing Con-Rods', 'Lightweight Crankshafts'],
    partnershipDuration: '12+ Years Racing & Production'
  },
  {
    id: 'stellantis',
    name: 'Stellantis Group',
    category: 'Passenger Vehicle',
    logoText: 'STELLANTIS',
    accentColor: '#1A365D',
    suppliedComponents: ['Engine Crankshafts', 'Precision Forgings'],
    partnershipDuration: '14+ Years Tier-1 Global'
  }
];

export const SANSERA_FACILITIES: FacilityItem[] = [
  {
    id: 'plant-7',
    plantNo: 'Plant 07 (HQ & Tech Centre)',
    name: 'Bommasandra Industrial Area',
    location: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    specialization: ['R&D Tech Center', 'Precision Machining', 'In-House SPM Building', 'Corporate Office'],
    areaSqMeters: '38,500 m²',
    workforceCount: 1850,
    certifications: ['IATF 16949', 'ISO 9001', 'ISO 14001', 'ISO 45001'],
    keyMachinery: '5-Axis Makino Centers, Zeiss CMMs, SPM Assembly Bay',
    lat: 12.8124,
    lng: 77.6842
  },
  {
    id: 'plant-2',
    plantNo: 'Plant 02 (Heavy Forging Hub)',
    name: 'Bommasandra Phase I',
    location: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    specialization: ['Heavy Closed-Die Forging', '4,000T Press Line', 'Induction Billet Heating'],
    areaSqMeters: '42,000 m²',
    workforceCount: 1420,
    certifications: ['IATF 16949', 'ISO 14001', 'ISO 50001 Energy Mgmt'],
    keyMachinery: '4,000T & 2,500T Screw & Mechanical Presses, Automated Robotic Loaders',
    lat: 12.8190,
    lng: 77.6890
  },
  {
    id: 'plant-11',
    plantNo: 'Plant 11 (Aerospace & Defense SEZ)',
    name: 'Harohalli Aerospace Park',
    location: 'Kanakapura, Bangalore',
    state: 'Karnataka',
    country: 'India',
    specialization: ['Aerospace Actuator Machining', 'Titanium 5-Axis Milling', 'Cleanroom Metrology'],
    areaSqMeters: '26,000 m²',
    workforceCount: 650,
    certifications: ['AS 9100D Rev D', 'Nadcap Heat Treat & NDT', 'ISO 14001'],
    keyMachinery: 'Hermle & DMG MORI 5-Axis Titanium Milling Cells, FPI Level 4 NDT Line',
    lat: 12.6840,
    lng: 77.4420
  },
  {
    id: 'plant-14',
    plantNo: 'Plant 14 (Automotive Con-Rod Gigafacility)',
    name: 'Bidadi Industrial Area',
    location: 'Bidadi, Ramanagara',
    state: 'Karnataka',
    country: 'India',
    specialization: ['Fracture-Split Con-Rod Mega-Line', 'High-Speed Brother Machining', 'Robotic Assembly'],
    areaSqMeters: '54,000 m²',
    workforceCount: 2100,
    certifications: ['IATF 16949', 'ISO 14001', 'Zero Liquid Discharge (ZLD)'],
    keyMachinery: 'Laser Notching & Fracture Splitting Cells, 320+ Brother High-Speed Tapping Centers',
    lat: 12.7950,
    lng: 77.3820
  },
  {
    id: 'plant-north',
    plantNo: 'Plant 09 (North India Automotive Center)',
    name: 'Pantnagar Industrial Estate',
    location: 'Pantnagar',
    state: 'Uttarakhand',
    country: 'India',
    specialization: ['Two-Wheeler Crankshafts', 'Connecting Rods', 'Just-In-Time OEM Supply'],
    areaSqMeters: '31,000 m²',
    workforceCount: 1150,
    certifications: ['IATF 16949', 'ISO 14001', 'Green Building Gold'],
    keyMachinery: 'Orbital CNC CBN Grinding Lines, Induction Hardening Lines',
    lat: 29.0220,
    lng: 79.4890
  },
  {
    id: 'plant-pune',
    plantNo: 'Plant 16 (Western India EV & Auto Hub)',
    name: 'Chakan Industrial Corridor',
    location: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    specialization: ['EV Rotor Shafts', 'Passenger Car Valvetrain', 'Export Machining'],
    areaSqMeters: '36,000 m²',
    workforceCount: 980,
    certifications: ['IATF 16949', 'ISO 14001', 'ISO 45001'],
    keyMachinery: 'High-RPM Dynamic Balancing Rigs, Precision Spline Skiving Centers',
    lat: 18.7520,
    lng: 73.8560
  },
  {
    id: 'plant-sweden',
    plantNo: 'Sansera International (Europe Technical Center)',
    name: 'Trollhättan Technical Office',
    location: 'Trollhättan',
    state: 'Västra Götaland',
    country: 'Sweden / Europe',
    specialization: ['European OEM Engineering Liaison', 'Rapid Prototype Logistics', 'EV Drivetrain Co-Design'],
    areaSqMeters: '4,500 m²',
    workforceCount: 85,
    certifications: ['ISO 9001', 'European Automotive OEM Compliance'],
    keyMachinery: 'Digital Twin Simulation Gateway, Co-ordinate Inspection Cells',
    lat: 58.2830,
    lng: 12.2880
  }
];

export const SANSERA_MILESTONES: MilestoneItem[] = [
  {
    year: '1981',
    title: 'Genesis in Bengaluru',
    description: 'Sansera was incorporated in Bengaluru by visionary technocrats with a single high-precision machining unit for two-wheeler components.',
    stats: '1 Plant • 25 Engineers'
  },
  {
    year: '1995',
    title: 'Tier-1 Supplier to Leading Two-Wheeler OEMs',
    description: 'Achieved preferred direct Tier-1 status with Hero, Honda, and Bajaj, introducing closed-die precision forging lines.',
    stats: '5 Million Units/yr'
  },
  {
    year: '2005',
    title: 'Aerospace & AS9100 Entry',
    description: 'Commissioned dedicated aerospace machining plant, obtaining AS9100 certification for flight-critical precision components.',
    stats: 'Global Defense Supply'
  },
  {
    year: '2015',
    title: 'In-House Machine Building & Automation Boom',
    description: 'Formed proprietary SPM machine building division, automating 100% of critical machining lines with in-house built CNCs and robotics.',
    stats: '40% CapEx Savings'
  },
  {
    year: '2021',
    title: 'Landmark NSE & BSE Initial Public Offering (IPO)',
    description: 'Successfully listed on the National Stock Exchange of India, receiving overwhelming institutional and retail subscription.',
    stats: 'Symbol: SANSERA (NSE/BSE)'
  },
  {
    year: '2024+',
    title: 'EV Traction, Aerospace Mega-Scale & Global Leadership',
    description: 'Expanded EV drivetrain rotor shaft production, lightweight aluminium forging, and next-generation aero-structures.',
    stats: '17+ Plants • 10K+ Team'
  }
];

export const SANSERA_FINANCIALS: FinancialMetric[] = [
  {
    title: 'Q4 FY2024 Financial Results',
    quarter: 'Q4 FY24',
    period: 'Quarter Ended March 31, 2024',
    revenue: '₹748.2 Cr',
    ebitda: '₹128.4 Cr (17.2% Margin)',
    pat: '₹54.6 Cr',
    growthYoY: '+18.4% YoY',
    pdfUrl: '#download-q4-fy24',
    date: 'May 2024'
  },
  {
    title: 'Q3 FY2024 Financial Results',
    quarter: 'Q3 FY24',
    period: 'Quarter Ended December 31, 2023',
    revenue: '₹712.5 Cr',
    ebitda: '₹121.8 Cr (17.1% Margin)',
    pat: '₹48.9 Cr',
    growthYoY: '+15.8% YoY',
    pdfUrl: '#download-q3-fy24',
    date: 'Feb 2024'
  },
  {
    title: 'Annual Audited Report FY2024',
    quarter: 'Full FY24',
    period: 'Fiscal Year 2023–2024',
    revenue: '₹2,814.0 Cr',
    ebitda: '₹478.2 Cr (17.0% Margin)',
    pat: '₹198.5 Cr',
    growthYoY: '+21.2% YoY',
    pdfUrl: '#download-annual-fy24',
    date: 'June 2024'
  }
];

export const SANSERA_ESG_METRICS: ESGMetric[] = [
  {
    metric: 'Renewable Solar Power',
    value: '45.2',
    unit: 'MWp Installed',
    description: 'On-site rooftop and captive solar farms generating clean electricity across 14 manufacturing campuses.',
    target: '65% Energy from Renewables by 2026',
    icon: 'Sun'
  },
  {
    metric: 'Zero Liquid Discharge',
    value: '100',
    unit: '% Treated & Recycled',
    description: 'State-of-the-art effluent treatment and reverse osmosis plants ensuring zero untreated industrial wastewater escapes.',
    target: '100% Water Positive Facility Audits',
    icon: 'Droplets'
  },
  {
    metric: 'Circular Scrap Recycling',
    value: '99.4',
    unit: '% Steel & Alloy Circularity',
    description: '100% of forging flash, CNC chips, and turnings are segregated, briquetted, and returned to approved electric arc foundries.',
    target: 'Zero Waste to Landfill Certification',
    icon: 'Recycle'
  },
  {
    metric: 'Lightweighting Impact',
    value: '-28',
    unit: '% Mass Reduction',
    description: 'Co-engineering hollow shafts and high-strength micro-alloys reduces vehicle fuel consumption and EV battery pack drain.',
    target: '30,000 MT CO2 avoided per vehicle lifecycle',
    icon: 'Feather'
  }
];
