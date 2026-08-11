import React, { useState, useRef } from 'react';
import { 
  X, 
  UploadCloud, 
  Check, 
  Send, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Sliders, 
  Building2, 
  Mail, 
  Phone, 
  Lock,
  ArrowRight,
  Cpu,
  Layers,
  CheckCircle2,
  FileCheck,
  RotateCw
} from 'lucide-react';
import { ProductItem, ProductSegmentId } from '../types';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [segment, setSegment] = useState<ProductSegmentId>(initialProduct?.category || 'automotive');
  const [componentName, setComponentName] = useState(initialProduct?.name || '');
  const [toleranceGrade, setToleranceGrade] = useState('± 1.5 microns (Ultra-Precision Powertrain)');
  const [annualVolume, setAnnualVolume] = useState('500,000 to 2,000,000 units/year');
  const [material, setMaterial] = useState(initialProduct?.specs.metallurgy || 'Forged Micro-Alloy Steel (38MnS6 / 42CrMo4)');
  const [ndaRequired, setNdaRequired] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [notes, setNotes] = useState('');
  
  // File Upload Drag & Drop & Progress Simulation
  const [file, setFile] = useState<{ name: string; size: string; progress: number } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSimulatedUpload = (fileName: string, fileSize: string) => {
    setIsUploading(true);
    setFile({ name: fileName, size: fileSize, progress: 10 });
    
    let currentProgress = 10;
    const interval = setInterval(() => {
      currentProgress += 25;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setIsUploading(false);
      }
      setFile({ name: fileName, size: fileSize, progress: currentProgress });
    }, 200);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      const sizeMB = (uploadedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
      handleSimulatedUpload(uploadedFile.name, sizeMB);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      const sizeMB = (uploadedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
      handleSimulatedUpload(uploadedFile.name, sizeMB);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-[#070a11] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,180,216,0.25)] text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-all transform hover:rotate-90"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-20 px-6 text-center space-y-8 max-w-lg mx-auto">
            <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mx-auto shadow-2xl animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-3">
              <span className="spec-label text-cyan-400">Application Dispatch Complete</span>
              <h3 className="text-3xl font-extrabold text-white font-display">
                Engineering RFQ Received
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your technical component RFQ for <strong className="text-cyan-400">{componentName || 'Precision Assembly'}</strong> has been assigned to Chief Process Architects at Sansera Tech Center (Plant 07).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300 space-y-2.5 text-left shadow-inner">
              <div className="flex justify-between">
                <span className="text-slate-400">Tracking Code:</span>
                <strong className="text-cyan-300 font-semibold">RFQ-SANSERA-{(Math.random() * 1000000).toFixed(0)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tolerance Grade:</span>
                <span className="text-white">{toleranceGrade.split(' ')[0]} {toleranceGrade.split(' ')[1]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Feasibility Response:</span>
                <span className="text-emerald-400 font-semibold">24 to 48 Hours</span>
              </div>
              {file && (
                <div className="flex justify-between pt-1 border-t border-white/10">
                  <span className="text-slate-400">CAD Blueprint:</span>
                  <span className="text-cyan-300 truncate max-w-[180px]">{file.name}</span>
                </div>
              )}
              {ndaRequired && (
                <div className="flex items-center gap-1.5 pt-1 text-cyan-400 font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Bilateral NDA Automated Dispatch Active</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/20"
            >
              Done & Return To Platform
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* ─── RFQ HERO SECTION (Apple / Tesla Style Visual Header) ─── */}
            <div className="relative rounded-3xl bg-gradient-to-r from-[#0d1527] via-[#090d16] to-[#0d1829] border border-cyan-500/25 p-8 sm:p-10 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                    Engineering Feasibility & Quotation
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                    Request Technical Component RFQ
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    Direct conduit to Sansera tooling engineers, forging metallurgists, and CNC process architects. Receive micron-precision feasibility feedback within 48 hours.
                  </p>
                </div>

                {/* Engineering Card Visual */}
                <div className="lg:col-span-4 hidden lg:flex flex-col gap-3 p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="spec-label text-cyan-400">Engineering Lab</span>
                    <span className="text-[10px] font-mono text-emerald-400">Ready for CAD</span>
                  </div>
                  <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-950/60 to-slate-900 border border-cyan-500/20 flex items-center justify-center p-4 text-center">
                    <div className="space-y-1">
                      <Cpu className="w-8 h-8 text-cyan-400 mx-auto" />
                      <div className="text-[11px] font-mono text-slate-300">Sub-Micron CNC Blueprinting</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Tolerance Grade</span>
                    <span className="text-white font-semibold">±1.0 to ±1.5 µm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── FORM WORKFLOW ─── */}
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Industry Segment */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">1</span>
                  Industry & Application Segment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'automotive', label: 'Automotive ICE / Hybrid', icon: '🚗' },
                    { id: 'aerospace', label: 'Aerospace AS9100D', icon: '✈️' },
                    { id: 'ev-mobility', label: 'EV & E-Axle Rotor', icon: '⚡' },
                    { id: 'non-automotive', label: 'Off-Highway & Agri', icon: '🚜' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSegment(s.id as ProductSegmentId)}
                      className={`p-4 rounded-2xl text-xs font-mono border transition-all duration-200 text-left flex flex-col justify-between space-y-3 ${
                        segment === s.id
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg ring-2 ring-cyan-500/30'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="font-semibold tracking-tight">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Technical Specifications */}
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">2</span>
                  Component Parameters & Tolerances
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Part Name / Description"
                      value={componentName}
                      onChange={(e) => setComponentName(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Component Description *</label>
                  </div>

                  <div className="space-y-1">
                    <div className="form-input-group">
                      <select
                        value={toleranceGrade}
                        onChange={(e) => setToleranceGrade(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/12 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all"
                      >
                        <option value="± 1.0 micron (Sub-Micron Bearing Journal)">± 1.0 micron (Sub-Micron Bearing Journal)</option>
                        <option value="± 1.5 microns (Ultra-Precision Powertrain)">± 1.5 microns (Ultra-Precision Powertrain)</option>
                        <option value="± 2.5 microns (Aerospace Titanium)">± 2.5 microns (Aerospace Titanium Structural)</option>
                        <option value="± 5.0 microns (Heavy Chassis / Off-Highway)">± 5.0 microns (Heavy Chassis / Off-Highway)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Alloy / Metallurgy Grade"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Alloy Specification *</label>
                  </div>

                  <div className="form-input-group">
                    <select
                      value={annualVolume}
                      onChange={(e) => setAnnualVolume(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/12 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all"
                    >
                      <option value="Prototype / Low Volume (5,000 - 25,000 / yr)">Prototype Scale (5,000 – 25,000 / yr)</option>
                      <option value="Medium Scale (50,000 - 250,000 / yr)">Medium Scale (50,000 – 250,000 / yr)</option>
                      <option value="500,000 to 2,000,000 units/year">High Volume (500,000 – 2,000,000 / yr)</option>
                      <option value="Giga Scale (2,000,000+ units/year)">Giga Scale (2,000,000+ / yr)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Premium CAD Drag & Drop Upload Component */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">3</span>
                    CAD / 2D Blueprint Attachment
                  </span>
                  <span className="text-[10px] text-cyan-400">Supported: STEP, IGES, DXF, DWG, PDF</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleFileDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-8 rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer text-center relative overflow-hidden ${
                    isDragOver
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20'
                      : file
                      ? 'border-emerald-500/50 bg-slate-900/90'
                      : 'border-white/15 bg-slate-900/40 hover:border-cyan-400/60 hover:bg-slate-900/60'
                  }`}
                >
                  {isUploading ? (
                    <div className="space-y-4 py-3 max-w-md mx-auto">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span className="flex items-center gap-2">
                          <RotateCw className="w-4 h-4 text-cyan-400 animate-spin" />
                          Uploading Engineering File...
                        </span>
                        <span className="text-cyan-400 font-bold">{file?.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
                          style={{ width: `${file?.progress}%` }}
                        />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">{file?.name} ({file?.size})</div>
                    </div>
                  ) : file ? (
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">{file.name}</div>
                          <div className="text-[11px] text-emerald-400 font-mono">CAD File Validated ({file.size})</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
                      >
                        Replace
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg">
                        <UploadCloud className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-white">
                          Drag & Drop 3D CAD or 2D Drawing Here
                        </div>
                        <div className="text-xs text-slate-400">
                          or <span className="text-cyan-400 font-semibold underline">browse local directory</span> (Max 250MB)
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Engineer & OEM Contact Data */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">4</span>
                  Engineer & Organization Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="form-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Engineer / Lead Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Engineer Name *</label>
                  </div>

                  <div className="form-input-group">
                    <input
                      type="text"
                      required
                      placeholder="OEM Company"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">OEM Company *</label>
                  </div>

                  <div className="form-input-group">
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="form-input-field"
                    />
                    <label className="form-input-label">Corporate Email *</label>
                  </div>
                </div>
              </div>

              {/* NDA Checkbox & Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={ndaRequired}
                    onChange={(e) => setNdaRequired(e.target.checked)}
                    className="w-5 h-5 rounded-md text-cyan-500 bg-slate-900 border-white/20 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    Execute Bilateral Non-Disclosure Agreement (NDA)
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Submit Technical RFQ Package</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
