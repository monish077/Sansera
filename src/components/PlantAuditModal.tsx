import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ShieldCheck, Send, Users, Factory } from 'lucide-react';
import { SANSERA_FACILITIES } from '../data/sanseraData';

interface PlantAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlantAuditModal: React.FC<PlantAuditModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlant, setSelectedPlant] = useState(SANSERA_FACILITIES[0].name);
  const [auditScope, setAuditScope] = useState('VDA 6.3 Process Audit');
  const [auditType, setAuditType] = useState<'physical' | 'virtual'>('physical');
  const [auditDate, setAuditDate] = useState('');
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
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-200">
        
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
                Plant Audit Inspection Scheduled
              </h3>
              <p className="text-sm text-slate-300">
                Your <span className="capitalize text-cyan-400 font-semibold">{auditType} Audit</span> request for <strong className="text-white">{selectedPlant}</strong> has been received by Sansera's Plant Quality Manager.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 space-y-1 text-left">
              <div>Booking Code: <strong className="text-cyan-300">AUD-SANSERA-{(Math.random() * 100000).toFixed(0)}</strong></div>
              <div>Audit Framework: <strong className="text-white">{auditScope}</strong></div>
              <div>Security Protocol: <strong className="text-emerald-400">Visitor Clearance Dispatched</strong></div>
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
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                <Factory className="w-4 h-4" />
                Audit-Ready Manufacturing Facilities
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Schedule On-Site / Virtual Plant Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct facility access for Tier-1 auditor teams to inspect automated CNC machining cells, closed-die forging presses, and CMM metrology labs.
              </p>
            </div>

            {/* Audit Mode Toggle */}
            <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-slate-900 border border-white/10">
              <button
                type="button"
                onClick={() => setAuditType('physical')}
                className={`py-3 rounded-xl text-xs font-mono font-bold transition-all text-center flex items-center justify-center gap-2 ${
                  auditType === 'physical'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                On-Site Physical Audit
              </button>
              <button
                type="button"
                onClick={() => setAuditType('virtual')}
                className={`py-3 rounded-xl text-xs font-mono font-bold transition-all text-center flex items-center justify-center gap-2 ${
                  auditType === 'virtual'
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Live 4K Virtual Line Inspection
              </button>
            </div>

            {/* Select Manufacturing Campus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                  Select Facility Campus
                </label>
                <select
                  value={selectedPlant}
                  onChange={(e) => setSelectedPlant(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 text-white text-xs font-mono focus:outline-none"
                >
                  {SANSERA_FACILITIES.map((f) => (
                    <option key={f.id} value={f.name}>
                      {f.plantNo} — {f.name} ({f.location})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                  Audit Framework Standard
                </label>
                <select
                  value={auditScope}
                  onChange={(e) => setAuditScope(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 text-white text-xs font-mono focus:outline-none"
                >
                  <option value="VDA 6.3 Process Audit">VDA 6.3 German Process Audit</option>
                  <option value="IATF 16949 Automotive Certification">IATF 16949 Quality Management</option>
                  <option value="AS9100D Aerospace Critical Line Audit">AS9100D Aerospace Flight Critical Audit</option>
                  <option value="ISO 14001 / 50001 ESG & Energy Audit">ISO 14001 / 50001 Environmental Audit</option>
                  <option value="Custom OEM Qualification Assessment">Custom OEM Qualification Assessment</option>
                </select>
              </div>
            </div>

            {/* Date Picker & Delegate Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-input-group">
                <input
                  type="date"
                  required
                  value={auditDate}
                  onChange={(e) => setAuditDate(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">Preferred Date *</label>
              </div>

              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="Auditor Lead Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">Auditor Lead Name *</label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Confirm & Request Audit Permit</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
