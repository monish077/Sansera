import React, { useState } from 'react';
import { X, Sun, ShieldCheck, Download, Send, CheckCircle2, TreePine, Leaf } from 'lucide-react';

interface EsgModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EsgModal: React.FC<EsgModalProps> = ({ isOpen, onClose }) => {
  const [reportType, setReportType] = useState('Full Annual ESG Audit FY24');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-emerald-500/30 p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 px-4 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                ESG Audit Package Dispatched
              </h3>
              <p className="text-sm text-slate-300">
                The requested <strong className="text-emerald-400">{reportType}</strong> and ISO 14001 certificates have been dispatched to <span className="text-white font-mono">{email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 space-y-1 text-left">
              <div>Verification Code: <strong className="text-emerald-300">ESG-SANSERA-{(Math.random() * 100000).toFixed(0)}</strong></div>
              <div>Net Zero Target: <strong className="text-emerald-400">Scope 1 & 2 by 2035</strong></div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                <Leaf className="w-4 h-4" />
                Decarbonization & Circularity Disclosures
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Request Comprehensive ESG Report
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Access audited metrics for Sansera's 14.5 MW solar generation, 100% Zero Liquid Discharge plants, and Scope 1/2/3 carbon footprint reporting.
              </p>
            </div>

            {/* Metrics Highlight Pill Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Solar Power</span>
                <span className="text-base font-bold text-emerald-400 font-display">14.5 MW Captive</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Water Recycling</span>
                <span className="text-base font-bold text-emerald-400 font-display">100% ZLD Audited</span>
              </div>
            </div>

            {/* Report Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                Select Disclosure Document
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-emerald-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="Full Annual ESG Audit FY24">Full Annual ESG & Decarbonization Audit FY24 (PDF)</option>
                <option value="ISO 14001:2015 & ISO 50001 Certificates">ISO 14001:2015 & ISO 50001 Energy Certifications</option>
                <option value="Scope 1 & 2 Carbon Footprint Certification">Scope 1 & 2 GHG Emission Audit Report</option>
                <option value="Steel Scrap Circularity & Material Recycling Audit">Steel Scrap Circularity & Recycling Statement</option>
              </select>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">Full Name *</label>
              </div>

              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="OEM / Organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">OEM / Company *</label>
              </div>
            </div>

            <div className="form-input-group">
              <input
                type="email"
                required
                placeholder="Corporate Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input-field"
              />
              <label className="form-input-label">Corporate Email *</label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Request ESG Disclosure Package</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
