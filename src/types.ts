export type ProductSegmentId = 'automotive' | 'non-automotive' | 'aerospace' | 'ev-mobility';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductSegmentId;
  categoryLabel: string;
  description: string;
  application: string;
  tolerances: string;
  material: string;
  weightRange: string;
  annualVolume: string;
  highlights: string[];
  imageUrl?: string;
  cadModelType: 'crankshaft' | 'connecting-rod' | 'rocker-arm' | 'steering-knuckle' | 'gear-fork' | 'actuator-housing';
  specs: {
    metallurgy: string;
    precisionGrade: string;
    surfaceRoughness: string;
    heatTreatment: string;
  };
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  equipment: string;
  outputMetric: string;
  badge: string;
  iconName: string;
  imageCaption: string;
}

export interface FacilityItem {
  id: string;
  plantNo: string;
  name: string;
  location: string;
  state: string;
  country: string;
  specialization: string[];
  areaSqMeters: string;
  workforceCount: number;
  certifications: string[];
  keyMachinery: string;
  lat: number;
  lng: number;
}

export interface OEMPartner {
  id: string;
  name: string;
  category: 'Two-Wheeler' | 'Passenger Vehicle' | 'Commercial & Industrial' | 'Aerospace' | 'Off-Highway';
  logoText: string;
  accentColor: string;
  suppliedComponents: string[];
  partnershipDuration: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  stats?: string;
}

export interface FinancialMetric {
  title: string;
  quarter: string;
  period: string;
  revenue: string;
  ebitda: string;
  pat: string;
  growthYoY: string;
  pdfUrl: string;
  date: string;
}

export interface ESGMetric {
  metric: string;
  value: string;
  unit: string;
  description: string;
  target: string;
  icon: string;
}
