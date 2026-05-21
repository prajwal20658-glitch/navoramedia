import { TrendingUp, UserCheck, ArrowRight, ShieldAlert, HeartHandshake } from "lucide-react";
import { CASE_STUDIES } from "../data";

interface CaseStudiesMainProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function CaseStudiesMain({ onNavigate, openAuditModal }: CaseStudiesMainProps) {
  return (
    <div id="case-studies-main-container" className="pt-24 space-y-16 pb-20">
      
      {/* HEADER HERO */}
      <section id="case-studies-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          THE EVIDENCE REPORT
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown">
          Empirical Scale Architectures
        </h1>
        <p className="text-sm text-warm-gray max-w-2xl mx-auto leading-relaxed">
          We do not speak in promises. We communicate in direct return metrics. Explore how our sandbox methodologies scaled cold buyers across various niches.
        </p>
      </section>

      {/* CORE STUDIES LIST */}
      <section id="case-studies-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#1A120E] border border-warm-gray/20 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 hover:border-burnt-orange/50 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-warm-gray uppercase tracking-wider">
                ROAS RATED PILLAR
              </div>

              {/* Left stats column */}
              <div className="lg:col-span-5 space-y-6 bg-dark-brown/40 p-6 rounded-xl border border-warm-gray/10 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] bg-burnt-orange/10 border border-burnt-orange/20 text-[#FF8C2A] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    {study.category}
                  </span>
                  
                  <h3 className="font-serif text-3xl font-extrabold text-soft-beige mt-2 leading-tight">
                    {study.clientName}
                  </h3>
                </div>

                {/* Grid of accomplishments */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-3 bg-[#1A120E] border border-warm-gray/10 rounded-lg">
                      <p className="text-xl font-serif font-bold text-[#FF8C2A]">{res.value}</p>
                      <p className="text-[9px] text-soft-beige/50 uppercase tracking-wider">{res.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-warm-gray/15 flex justify-between items-center">
                  <span className="text-xs text-soft-beige/50 uppercase font-bold tracking-widest">{study.scaleMetric}</span>
                  <div className="text-[#FF8C2A] font-bold text-xs">{study.roas || "Compound Value"}</div>
                </div>
              </div>

              {/* Right text layout column */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-soft-beige">
                    {study.title}
                  </h4>
                  <p className="text-xs text-soft-beige/60 font-light leading-relaxed">
                    <strong className="text-burnt-orange font-bold uppercase text-[9px] block mb-1">THE CLIENT'S DIFFICULTY:</strong>
                    {study.challenge}
                  </p>
                  <p className="text-xs text-soft-beige/60 font-light leading-relaxed">
                    <strong className="text-burnt-orange font-bold uppercase text-[9px] block mb-1">THE STRATEGY EMPLOYED:</strong>
                    {study.strategy}
                  </p>
                </div>

                <div className="pt-6 border-t border-warm-gray/10 flex items-center">
                  <button
                    onClick={() => onNavigate(`case-studies/${study.id}`)}
                    className="px-5 py-2.5 rounded bg-burnt-orange hover:bg-rich-orange text-soft-beige text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer flex items-center space-x-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* QUICK AUDIT HIGHLIGHT */}
      <section className="bg-[#1A120E] py-16 border-y border-warm-gray/10 text-center space-y-6">
        <h4 className="font-serif text-2xl font-bold text-soft-beige">Want Your Store to Be the Next Success Story?</h4>
        <p className="text-xs text-soft-beige/55 max-w-lg mx-auto">
          We analyze. We design testing parameters. We feed platforms corrected conversion variables. Request your free preliminary diagnostic.
        </p>
        <button
          onClick={openAuditModal}
          className="px-6 py-3 rounded-lg bg-burnt-orange text-soft-beige text-xs font-bold uppercase tracking-wider hover:bg-[#FF8C2A] transition-colors cursor-pointer"
        >
          Diagnose My Campaigns Now
        </button>
      </section>

    </div>
  );
}
