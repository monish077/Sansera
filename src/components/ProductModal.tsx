import React from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Layers, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenRfq: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenRfq }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-200 space-y-6">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Segment Tag */}
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/40">
            {product.categoryLabel}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {product.name}
          </h3>
          <div className="text-xs font-mono text-slate-400">
            Annual Run: <strong className="text-cyan-400">{product.annualVolume}</strong>
          </div>
        </div>

        {/* Overview */}
        <p className="text-sm text-slate-300 leading-relaxed font-light">
          {product.description}
        </p>

        {/* Technical Specification Matrix */}
        <div className="rounded-2xl bg-slate-900 border border-white/10 p-5 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Engineering & Metallurgy Specification
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block text-[11px]">Metallurgical Grade</span>
              <span className="font-bold text-white">{product.specs.metallurgy}</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block text-[11px]">Precision Grade</span>
              <span className="font-bold text-cyan-300">{product.specs.precisionGrade}</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block text-[11px]">Critical Tolerances</span>
              <span className="font-bold text-emerald-400">{product.tolerances}</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block text-[11px]">Surface Roughness</span>
              <span className="font-bold text-amber-300">{product.specs.surfaceRoughness}</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 sm:col-span-2">
              <span className="text-slate-400 block text-[11px]">Heat Treatment & Case Depth</span>
              <span className="font-bold text-blue-300">{product.specs.heatTreatment}</span>
            </div>
          </div>
        </div>

        {/* Manufacturing Highlights */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Quality Assurance & Process Safeguards
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.highlights.map((hl, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              alert(`Downloading complete engineering datasheet for ${product.name} (PDF)...`);
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download 2D/3D Datasheet (PDF)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenRfq(product);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <span>Request Component RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
