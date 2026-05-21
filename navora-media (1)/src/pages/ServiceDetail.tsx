import { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle, ChevronDown, MessageSquare, ArrowRight, Zap, Target, Star } from "lucide-react";
import { SERVICES, CASE_STUDIES } from "../data";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function ServiceDetail({ serviceId, onNavigate, openAuditModal }: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Find matching service
  const service = SERVICES.find((s) => s.id === serviceId);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4">
        <h2 className="font-serif text-2xl text-soft-beige">Service Blueprint Not Found</h2>
        <button
          onClick={() => onNavigate("services")}
          className="px-4 py-2 bg-burnt-orange text-soft-beige rounded text-xs uppercase"
        >
          Return to Services Overview
        </button>
      </div>
    );
  }

  // Find associated case study
  const assocCaseStudy = CASE_STUDIES.find((c) => c.id === service.caseStudyId);

  return (
    <div id={`detail-${serviceId}`} className="pt-24 space-y-20 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#1A120E] to-dark-brown border-b border-warm-gray/10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onNavigate("services")}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-soft-beige/50 hover:text-burnt-orange uppercase tracking-wider mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Services Main</span>
          </button>

          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
              Specialized Execution Pillar
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-soft-beige leading-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-lg text-soft-beige/70 font-light leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left deep content details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-dark-brown">Our Tactical Approach</h3>
            <p className="text-sm text-warm-gray leading-relaxed font-light">
              {service.longDescription}
            </p>
          </div>

          {/* Key Strategic Pillars */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-dark-brown">Engineered Strategies</h4>
            <div className="grid gap-4">
              {service.strategies.map((strat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#1A120E] border border-warm-gray/20 space-y-1">
                  <h5 className="font-serif font-bold text-sm text-soft-beige">{strat.title}</h5>
                  <p className="text-xs text-soft-beige/60 font-light leading-relaxed">{strat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* High conversions bullet points */}
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-dark-brown/10 shadow-sm">
            <h4 className="font-serif text-base font-bold text-dark-brown uppercase tracking-wider">Features & Asset Integration Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs w-full">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange mt-1.5 flex-shrink-0" />
                  <span className="text-warm-gray font-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right promotional visual container & interactive booking triggers */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-2xl bg-[#1E1410] border border-burnt-orange/20 relative space-y-6">
            <div className="absolute top-0 right-0 w-24 h-24 bg-burnt-orange/5 rounded-full blur-2xl" />
            
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#FF8C2A]">
              IMMEDIATE BRIEF ENTRY
            </p>

            <h4 className="font-serif text-xl font-bold text-soft-beige">
              Request Your Audit of {service.id === "dental-marketing" ? "Dental Implants" : "Ad Setup"}
            </h4>

            <p className="text-xs text-soft-beige/60 leading-relaxed">
              Let our media buying and technical schema architects audit your modern assets. We will return 12 customized, actionable tips within 24 hours.
            </p>

            <button
              onClick={openAuditModal}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige font-semibold text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-burnt-orange/10 transform hover:scale-102 transition-transform duration-200"
            >
              Request Free custom Audit (24h Delivery)
            </button>
          </div>

          {/* Associated Case study link */}
          {assocCaseStudy && (
            <div className="p-6 rounded-2xl bg-[#1A120E] border border-warm-gray/20 space-y-4">
              <span className="text-[10px] font-bold text-warm-gray uppercase tracking-widest">
                VERIFIED PERFORMANCE LIFT
              </span>
              <h5 className="font-serif text-base font-bold text-soft-beige line-clamp-2">
                {assocCaseStudy.title}
              </h5>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#FF8C2A] font-bold font-mono">{assocCaseStudy.scaleMetric}</span>
                <button
                  onClick={() => onNavigate(`case-studies/${assocCaseStudy.id}`)}
                  className="text-burnt-orange hover:text-white transition-colors uppercase tracking-wider font-bold inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read ROAS breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. DYNAMIC FAQS ACCORDION */}
      <section className="bg-[#1A120E] py-16 border-y border-warm-gray/10">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-burnt-orange tracking-widest">
              藍KNOWLEDGE MATRIX
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-soft-beige">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-warm-gray/15 rounded-lg bg-[#2A1E18] overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 focus:outline-none flex justify-between items-center text-soft-beige hover:text-burnt-orange transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm font-bold">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-soft-beige/60 leading-relaxed font-light border-t border-warm-gray/15">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
