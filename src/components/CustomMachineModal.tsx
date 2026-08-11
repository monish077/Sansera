import React, { useState } from 'react';
import { X, Cpu, Cog, CheckCircle2, Send, Zap, Bot, ShieldCheck } from 'lucide-react';

interface CustomMachineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomMachineModal: React.FC<CustomMachineModalProps> = ({ isOpen, onClose }) => {
  const [machineCategory, setMachineCategory] = useState('Multi-Spindle CNC Machining Cell');
  const [automationScope, setAutomationScope] = useState('6-Axis Gantry & Vision Deburring');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
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
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-200">
        
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
                Automation Dossier Submitted
              </h3>
              <p className="text-sm text-slate-300">
                Your custom machine design spec for <strong className="text-cyan-400">{machineCategory}</strong> has been routed to Sansera Automation & SPM Tech Center.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 space-y-1 text-left">
              <div>Project Code: <strong className="text-cyan-300">SPM-SANSERA-{(Math.random() * 100000).toFixed(0)}</strong></div>
              <div>Benchmarked Savings: <strong className="text-emerald-400">Up to 40% CapEx Reduction</strong></div>
              <div>Feasibility Review: <strong className="text-cyan-300">Within 24 Hours</strong></div>
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
                <Cpu className="w-4 h-4" />
                Proprietary SPM & Robotic Automation Division
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Inquire About Custom Machine Building
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sansera designs, fabricates, and programs 400+ custom Special Purpose Machines and 6-axis robotic cells to cut line CapEx by up to 40%.
              </p>
            </div>

            {/* Key Stat Strip */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Robotics Deployed</span>
                <span className="text-base font-bold text-white font-display">400+ Robotic Cells</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">CapEx Advantage</span>
                <span className="text-base font-bold text-cyan-400 font-display">40% Cycle Savings</span>
              </div>
            </div>

            {/* Machine Category */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                Custom Machine / SPM Category
              </label>
              <select
                value={machineCategory}
                onChange={(e) => setMachineCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="Multi-Spindle CNC Machining Cell">Multi-Spindle Dedicated CNC Cell</option>
                <option value="High-Speed Gantry Loading System">High-Speed Overhead Gantry Loading System</option>
                <option value="Vision-Guided Automated Inspection (Sub-Pixel AOI)">Sub-Pixel AOI Camera Inspection System</option>
                <option value="Automated Deburring & Washing Line">Automated Ultrasonic Washing & Deburring Cell</option>
                <option value="Custom Assembly & Torque Press Rig">Turnkey Sub-Assembly & Press Fixture</option>
              </select>
            </div>

            {/* Automation Level */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                Robotic & Controller Specification
              </label>
              <select
                value={automationScope}
                onChange={(e) => setAutomationScope(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-cyan-400 text-white text-xs font-mono focus:outline-none"
              >
                <option value="6-Axis Gantry & Vision Deburring">6-Axis Articulated Robot + Vision</option>
                <option value="Linear Servo Transfer + Pneumatic Gripper">Linear High-Speed Servo Gantry</option>
                <option value="PLC Closed-Loop Control System">Siemens / Fanuc PLC Closed-Loop Controller</option>
              </select>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-input-group">
                <input
                  type="text"
                  required
                  placeholder="Engineer / Director Name"
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

            <div className="form-input-group">
              <textarea
                rows={3}
                placeholder="Machine Cycle Time, Part Geometry, or Process Specifications"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/12 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all focus:ring-4 focus:ring-cyan-500/15"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit SPM Machine Engineering Request</span>
              <Send className="w-4 h-4" />
            </button>

          </form>
        )}
      </div>
    </div>
  );
};
