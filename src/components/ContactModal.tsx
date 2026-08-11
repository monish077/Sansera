import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, Building, ShieldCheck, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [department, setDepartment] = useState<'sales' | 'engineering' | 'careers' | 'general'>('engineering');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-white/15 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-20 px-8 text-center space-y-6 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white font-display">
                Inquiry Dispatched
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Thank you, <strong className="text-cyan-400">{name || 'Partner'}</strong>. Your message has been assigned to Sansera's Global Desk for <span className="capitalize font-semibold text-white">{department}</span>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-400 space-y-2 text-left">
              <div className="flex justify-between">
                <span>Routing ID:</span>
                <strong className="text-cyan-300">CNT-SANSERA-{(Math.random() * 1000000).toFixed(0)}</strong>
              </div>
              <div className="flex justify-between">
                <span>Target Desk:</span>
                <span className="text-white font-semibold capitalize">{department} Department</span>
              </div>
              <div className="flex justify-between">
                <span>Expected Response:</span>
                <span className="text-emerald-400 font-semibold">Under 12 Hours</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct HQ Directory */}
            <div className="lg:col-span-5 p-8 lg:p-10 bg-gradient-to-b from-[#0f172a] to-[#090d16] border-b lg:border-b-0 lg:border-r border-white/10 space-y-8">
              <div className="space-y-3">
                <span className="spec-label text-cyan-400 block">Get in Touch</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                  Corporate & Engineering HQ
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Direct connection to Sansera's executive leadership, sales architects, and global manufacturing plants.
                </p>
              </div>

              <div className="space-y-6 text-xs text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-white font-display text-sm">Global Headquarters</div>
                    <div className="text-slate-400 leading-relaxed">
                      Plant 07, 143/A, Bommasandra Industrial Area, Anekal Taluk, Bengaluru – 560 099, India.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-white font-display text-sm">Direct Phone & Desk</div>
                    <div className="text-slate-400 font-mono">+91 (80) 6784-8100</div>
                    <div className="text-slate-400 font-mono">+91 (80) 2783-9081</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-white font-display text-sm">Corporate Desks</div>
                    <div className="text-slate-400 font-mono">info@sansera.in</div>
                    <div className="text-slate-400 font-mono">rfq@sansera.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-cyan-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-white font-display text-sm">European Subsidiary</div>
                    <div className="text-slate-400 leading-relaxed">
                      Sansera Sweden AB, Trollhättan, Sweden
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-400 font-mono">
                  ISO 27001 Data Encrypted Conduit
                </span>
              </div>
            </div>

            {/* Right Column: Modern Form */}
            <div className="lg:col-span-7 p-8 lg:p-10 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white font-display">
                  Send Direct Inquiry
                </h4>
                <p className="text-xs text-slate-400">
                  Select department routing to ensure rapid response from specialized lead engineers.
                </p>
              </div>

              {/* Department Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'engineering', label: 'Engineering' },
                  { id: 'sales', label: 'OEM Sales' },
                  { id: 'careers', label: 'Careers' },
                  { id: 'general', label: 'General' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDepartment(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center border transition-all ${
                      department === item.id
                        ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow-md'
                        : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Company / OEM Organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Organization *</label>
                  </div>

                  <div className="form-input-group">
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Phone Number</label>
                  </div>
                </div>

                <div className="form-input-group">
                  <textarea
                    required
                    rows={4}
                    placeholder="Inquiry Specifications or Notes"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/12 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all focus:ring-4 focus:ring-cyan-500/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
