import React, { useState } from 'react';
import { X, TrendingUp, Download, Send, CheckCircle2, ShieldAlert, FileText, Calendar } from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [inquiryType, setInquiryType] = useState('Analyst / Institutional Inquiry');
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-slate-200">
        
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
                Investor Desk Dispatched
              </h3>
              <p className="text-sm text-slate-300">
                Your request has been routed directly to Sansera's Head of Investor Relations & Company Secretary.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 space-y-1 text-left">
              <div>Ticker: <strong className="text-white font-semibold">NSE: SANSERA | BSE: 543358</strong></div>
              <div>Reference: <strong className="text-cyan-300">IR-SANSERA-{(Math.random() * 100000).toFixed(0)}</strong></div>
              <div>Response Time: <strong className="text-emerald-400">Within 24 Hours</strong></div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done & Return To Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                <TrendingUp className="w-4 h-4" />
                Sansera Corporate Governance & Disclosures
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Contact Investor Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct channel for equity research analysts, fund managers, institutional investors, and statutory filing inquiries.
              </p>
            </div>

            {/* Live Market Badge */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Listed Instrument</span>
                <span className="text-base font-semibold text-white font-display">NSE / BSE: SANSERA</span>
              </div>
              <div className="text-right font-mono">
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  ICRA AA- (Stable) Rated
                </span>
              </div>
            </div>

            {/* Inquiry Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                Inquiry Classification
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="Analyst / Institutional Inquiry">Analyst / Institutional Research Call</option>
                <option value="Audited Financial Results PDF Request">Audited Financial Results PDF Request</option>
                <option value="Share Registry & Transfer Agent">Share Registry & Transfer Agent (Link Intime)</option>
                <option value="ESG & Corporate Governance Disclosures">ESG & Governance Disclosures</option>
                <option value="Annual General Meeting Notice">AGM & Dividend Information</option>
              </select>
            </div>

            {/* Contact Inputs */}
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
                  placeholder="Institution / Fund / Brokerage"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="form-input-field"
                />
                <label className="form-input-label">Fund / Institution *</label>
              </div>
            </div>

            <div className="form-input-group">
              <input
                type="email"
                required
                placeholder="Institutional Corporate Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input-field"
              />
              <label className="form-input-label">Corporate Email *</label>
            </div>

            <div className="form-input-group">
              <textarea
                rows={3}
                placeholder="Specific Questions or Financial Report Requests"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/12 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all focus:ring-4 focus:ring-cyan-500/15"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit Investor Inquiry</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
