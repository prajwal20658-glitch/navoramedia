import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, TrendingUp, CheckCircle, MessageSquare, Mail, Calendar } from "lucide-react";
import { CASE_STUDIES } from "../data";

interface CaseStudyDetailProps {
  caseStudyId: string;
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function CaseStudyDetail({ caseStudyId, onNavigate, openAuditModal }: CaseStudyDetailProps) {
  
  // Find target study
  const study = CASE_STUDIES.find((c) => c.id === caseStudyId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [caseStudyId]);

  if (!study) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4">
        <h2 className="font-serif text-2xl text-soft-beige">ROAS Report Not Found</h2>
        <button
          onClick={() => onNavigate("case-studies")}
          className="px-4 py-2 bg-burnt-orange text-soft-beige rounded text-xs uppercase"
        >
          Return to All Case Studies
        </button>
      </div>
    );
  }

  return (
    <div id={`case-study-${caseStudyId}`} className="pt-24 space-y-20 pb-20">
      
      {/* HEADER HERO BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-[#1A120E] to-dark-brown border-b border-warm-gray/10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-burnt-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate("case-studies")}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-soft-beige/50 hover:text-burnt-orange uppercase tracking-wider mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Case Studies List</span>
          </button>

          <div className="space-y-4 max-w-4xl">
            <span className="text-xs bg-[#FF8C2A]/10 text-[#FF8C2A] border border-[#FF8C2A]/20 px-3 py-1 rounded font-bold uppercase tracking-wider">
              {study.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-soft-beige leading-tight">
              {study.title}
            </h1>
            <p className="text-sm font-sans tracking-wide text-burnt-orange font-bold font-mono">
              VERIFIED RESULT MODEL • {study.scaleMetric} • {study.roas || "Compounding Value"}
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SUMMARY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left main content panels */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Challenge area */}
          <div className="space-y-3 bg-[#1A120E] p-6 rounded-xl border border-warm-gray/20">
            <h3 className="font-serif text-xl font-bold text-soft-beige flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-burnt-orange" />
              The Client's Business Challenge
            </h3>
            <p className="text-xs sm:text-sm text-soft-beige/70 leading-relaxed font-light">
              {study.challenge}
            </p>
          </div>

          {/* Strategy detailed */}
          <div className="space-y-3 bg-[#1A120E] p-6 rounded-xl border border-warm-gray/20">
            <h3 className="font-serif text-xl font-bold text-soft-beige flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8C2A]" />
              The Tailored Performance Strategy
            </h3>
            <p className="text-xs sm:text-sm text-soft-beige/70 leading-relaxed font-light">
              {study.strategy}
            </p>
          </div>

          {/* Table / Mock Analytics details showing metrics generated */}
          {study.mockAnalyticsData && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-dark-brown">
                Campaign Tracking Log & Scaling Milestones
              </h3>
              <div className="overflow-x-auto rounded-xl border border-warm-gray/20 bg-[#1A120E]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#2A1E18] text-soft-beige font-semibold uppercase tracking-wider border-b border-warm-gray/20">
                    <tr>
                      <th className="px-5 py-3">Timeframe Phase</th>
                      <th className="px-5 py-3">Spend Parameter</th>
                      <th className="px-5 py-3">Captured Conversions / Patient Leads</th>
                      <th className="px-5 py-3">Top-line Value / Estimated Return</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-gray/10 text-soft-beige/75 font-mono">
                    {study.mockAnalyticsData.map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-5 py-3.5 font-sans font-bold">{row.period}</td>
                        <td className="px-5 py-3.5">{row.spend}</td>
                        <td className="px-5 py-3.5">{row.leads}</td>
                        <td className="px-5 py-3.5 text-burnt-orange font-bold">{row.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Right side panels: metrics display, quotes */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Visual results blocks */}
          <div className="p-6 rounded-xl bg-white border border-dark-brown/10 shadow-sm space-y-4">
            <h4 className="font-serif text-base font-bold text-dark-brown uppercase tracking-wider">Acquisition Lift Markers</h4>
            
            <div className="space-y-4">
              {study.visualMetrics.map((met, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-warm-gray font-serif">{met.label}</span>
                    <span className="text-burnt-orange font-bold font-mono">+{met.percentage}%</span>
                  </div>
                  <div className="w-full bg-dark-brown/5 h-2 rounded overflow-hidden">
                    <div className="bg-burnt-orange h-full rounded" style={{ width: `${met.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Quote panel */}
          {study.quote && (
            <div className="p-6 rounded-xl bg-[#1A120E] border border-warm-gray/20 space-y-4 relative">
              <div className="font-serif text-5xl text-[#FF8C2A]/25 absolute top-2 left-2 pointer-events-none">"</div>
              <p className="text-xs sm:text-sm font-serif italic text-soft-beige/80 leading-relaxed pt-2">
                {study.quote.text}
              </p>
              <div className="border-t border-warm-gray/15 pt-3">
                <h6 className="font-serif font-bold text-xs text-soft-beige">{study.quote.author}</h6>
                <p className="text-[10px] text-warm-gray uppercase tracking-widest">{study.quote.role}</p>
              </div>
            </div>
          )}

          {/* Side conversion CTA block */}
          <div className="p-5 rounded-xl bg-[#2A1E18] border border-warm-gray/20 text-center space-y-3">
            <span className="text-[10px] text-warm-gray font-bold uppercase tracking-wider">DO NOT COMPROMISE ON STRATEGY</span>
            <p className="text-xs text-soft-beige/65 leading-relaxed">
              We apply these exact same analytical models safely under strict client guidelines.
            </p>
            <button
              onClick={openAuditModal}
              className="w-full text-center py-2.5 rounded bg-burnt-orange hover:bg-rich-orange text-white text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              Get My Custom Audit Report
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
