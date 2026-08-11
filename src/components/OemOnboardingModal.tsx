import React, { useState } from 'react';
import { X, Building2, ShieldCheck, CheckCircle2, Send, Award, Cpu, Layers } from 'lucide-react';

interface OemOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OemOnboardingModal: React.FC<OemOnboardingModalProps> = ({ isOpen, onClose }) => {
  const [oemSegment, setOemSegment] = useState('Passenger Vehicle OEM');
  const [targetVolume, setTargetVolume] = useState('250,000 to 1,000,000 units/year');
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
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-blue-500/30 p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 px-4 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                OEM Onboarding Initiated
              </h3>
              <p className="text-sm text-slate-300">
                Welcome <strong className="text-cyan-400">{company}</strong>. Your supplier qualification dossier has been assigned to our Vice President of Global Tier-1 Accounts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 space-y-1 text-left">
              <div>Account Protocol ID: <strong className="text-cyan-300">OEM-SANSERA-{(Math.random() * 100000).toFixed(0)}</strong></div>
              <div>Primary Standards: <strong className="text-white">IATF 16949 & AS9100D</strong></div>
              <div>Technical Assessment: <strong className="text-emerald-400 font-semibold">Scheduled in 24 Hours</strong></div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                <Building2 className="w-4 h-4" />
                Tier-1 Supplier Qualification & Onboarding
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Onboard as OEM Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Establish direct manufacturing programs for high-precision forged components, CNC machining cells, and sub-assemblies.
              </p>
            </div>

            {/* Certifications Badge */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Quality Certifications</span>
                <span className="text-xs sm:text-sm font-semibold text-white font-display">IATF 16949 • AS9100D Rev D • ISO 14001</span>
              </div>
              <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>

            {/* OEM Segment Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                OEM Sector & Vehicle Segment
              </label>
              <select
                value={oemSegment}
                onChange={(e) => setOemSegment(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-blue-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="Passenger Vehicle OEM">Passenger Vehicle (ICE / EV / Hybrid)</option>
                <option value="Two-Wheeler & Premium Motorcycle">Two-Wheeler & Premium Motorcycle OEM</option>
                <option value="Aerospace Flight Control & Structure">Aerospace Tier-1 (AS9100D Flight Critical)</option>
                <option value="Off-Highway & Heavy Commercial">Off-Highway, Agriculture & Commercial Fleet</option>
              </select>
            </div>

            {/* Projected Annual Volume */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                Projected Annual Volume Scale
              </label>
              <select
                value={targetVolume}
                onChange={(e) => setTargetVolume(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-blue-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="50,000 to 250,000 units/year">Medium Scale (50k – 250k units/yr)</option>
                <option value="250,000 to 1,000,000 units/year">High Volume (250k – 1M units/yr)</option>
                <option value="1,000,000+ units/year">Global Giga Scale (1M+ units/yr)</option>
              </select>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="Procurement / Lead Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">Lead Name *</label>
              </div>

              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="OEM Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">OEM Company *</label>
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
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit OEM Qualification Request</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
