import React, { useState } from 'react';
import { TrendingUp, FileText, Download, ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { SANSERA_FINANCIALS } from '../data/sanseraData';
import { FinancialMetric } from '../types';

interface InvestorPortalProps {
  onOpenRfq: () => void;
  onOpenInvestorDesk: () => void;
}

export const InvestorPortal: React.FC<InvestorPortalProps> = ({ onOpenRfq, onOpenInvestorDesk }) => {
  const [selectedReport, setSelectedReport] = useState<FinancialMetric>(SANSERA_FINANCIALS[0]);

  return (
    <section id="investors" className="bg-white py-32 overflow-hidden border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

        {/* ─── Editorial Header ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div className="space-y-4 max-w-2xl">
            <span className="spec-label-light block">Investor Relations & Financial Disclosures</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#1d1d1f] tracking-[-0.03em] leading-[1.08] font-display">
              Disciplined ROCE.<br />
              <span className="text-[#6e6e73]">Consistent engineering-led growth.</span>
            </h2>
            <p className="text-[16px] text-[#6e6e73] leading-[1.65] max-w-[480px]">
              Publicly traded on NSE & BSE under symbol SANSERA. Delivering sustainable margins through high value-add automotive and aerospace component manufacturing.
            </p>
          </div>

          {/* NSE / BSE Live Ticker Banner */}
          <div className="p-6 rounded-3xl bg-[#f5f5f7] border border-[#e5e5e5] flex items-center gap-6 shadow-sm shrink-0 hover-lift">
            <div className="p-3.5 rounded-2xl bg-[#1d1d1f] text-white">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-[11px] text-[#6e6e73] font-mono uppercase tracking-widest">National Stock Exchange</div>
              <div className="text-xl font-bold text-[#1d1d1f] font-display tracking-tight flex items-center gap-3 mt-0.5">
                <span>NSE: SANSERA</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  +18.4% YoY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Financial Performance Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-1">
          {SANSERA_FINANCIALS.map((item, idx) => {
            const isSelected = selectedReport.quarter === item.quarter;
            return (
              <div
                key={idx}
                onClick={() => setSelectedReport(item)}
                className={`p-8 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift ${
                  isSelected
                    ? 'bg-[#1d1d1f] border-[#1d1d1f] shadow-2xl text-white'
                    : 'bg-white border-[#e5e5e5] hover:border-[#1d1d1f]/40'
                }`}
                style={{ minHeight: '260px' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`spec-label-light ${isSelected ? 'text-white/60' : ''}`}>{item.quarter}</span>
                    <span className={`text-xs font-semibold font-mono ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {item.growthYoY}
                    </span>
                  </div>
                  <h3 className={`text-xl font-medium font-display tracking-tight ${isSelected ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {item.title}
                  </h3>
                  <div className="space-y-2 text-[13px] font-mono">
                    <div className="flex justify-between">
                      <span className={isSelected ? 'text-white/60' : 'text-[#86868b]'}>Revenue</span>
                      <span className={`font-bold ${isSelected ? 'text-white' : 'text-[#1d1d1f]'}`}>{item.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isSelected ? 'text-white/60' : 'text-[#86868b]'}>EBITDA</span>
                      <span className={`font-bold ${isSelected ? 'text-white' : 'text-[#1d1d1f]'}`}>{item.ebitda}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isSelected ? 'text-white/60' : 'text-[#86868b]'}>PAT</span>
                      <span className={`font-bold ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`}>{item.pat}</span>
                    </div>
                  </div>
                </div>

                <div className={`pt-5 border-t flex items-center justify-between text-[12px] font-mono ${
                  isSelected ? 'border-white/15 text-white/60' : 'border-[#e5e5e5] text-[#86868b]'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-cyan-500 font-semibold hover:underline">
                    <Download className="w-3.5 h-3.5" />
                    Audited PDF
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Corporate Governance Banner ─── */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#f5f5f7] border border-[#e5e5e5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 reveal reveal-delay-2 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <span className="spec-label-light block">Corporate Governance & Statutory Filings</span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f] font-display tracking-tight">
              Institutional Shareholding & Investor Desks
            </h3>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed">
              Access audited financial statements, credit rating reports (ICRA AA- / CRISIL AA), shareholder presentation decks, and direct analyst contact lines.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="#download-annual-report"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Sansera Engineering Audited Annual Financial Report FY24 (PDF)');
              }}
              className="btn-ghost-light flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Annual Report FY24</span>
            </a>

            <button
              onClick={onOpenInvestorDesk}
              className="btn-primary-light flex items-center gap-2 shadow-lg"
            >
              <span>Contact Investor Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
