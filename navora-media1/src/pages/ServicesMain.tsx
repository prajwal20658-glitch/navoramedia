import { Facebook, Search, TrendingUp, Filter, ShieldCheck, Instagram, ArrowRight, CheckCircle, Smartphone, Sliders } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesMainProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function ServicesMain({ onNavigate, openAuditModal }: ServicesMainProps) {
  
  // Icon mapper helper
  const getSvcIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <Facebook className="w-6 h-6 text-burnt-orange" />;
      case "Search":
        return <Search className="w-6 h-6 text-burnt-orange" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-burnt-orange" />;
      case "Filter":
        return <Filter className="w-6 h-6 text-burnt-orange" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#FF8C2A]" />;
      default:
        return <Instagram className="w-6 h-6 text-[#FF8C2A]" />;
    }
  };

  return (
    <div id="services-main-container" className="pt-24 space-y-24 pb-20">
      
      {/* INTRO TITLE HERO */}
      <section id="services-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          OUR REVENUE ACQUISITION SUITE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown">
          Scientific Growth Modules Built for ROI
        </h1>
        <p className="text-sm sm:text-base text-dark-brown/70 max-w-2xl mx-auto leading-relaxed">
          Explore our fully articulated execution pillars. Every service is backed by rigorous target telemetry and zero guess-work architectures.
        </p>
      </section>

      {/* CORE CARDS GRID */}
      <section id="services-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-[#Fbf9f6] border border-dark-brown/10 rounded-2xl p-8 hover:border-burnt-orange/50 transition-all duration-300 relative group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded bg-burnt-orange/15 border border-burnt-orange/20 flex items-center justify-center">
                  {getSvcIcon(svc.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-dark-brown group-hover:text-[#FF8C2A] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#FF8C2A] font-medium tracking-wide">
                    {svc.subtitle}
                  </p>
                </div>

                <p className="text-xs text-dark-brown/70 leading-relaxed font-light">
                  {svc.description}
                </p>

                {/* Sub features preview checklist */}
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] text-warm-gray font-bold uppercase tracking-wider font-sans">Primary Components:</p>
                  <ul className="space-y-1.5 text-xs text-dark-brown/70">
                    {svc.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-burnt-orange font-bold font-mono">✓</span>
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-dark-brown/10 mt-8 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`services/${svc.id}`)}
                  className="px-4 py-2 text-xs font-bold text-dark-brown bg-white border border-dark-brown/10 rounded-lg group-hover:bg-burnt-orange group-hover:text-white group-hover:border-burnt-orange transition-all duration-200 cursor-pointer flex items-center space-x-1"
                >
                  <span>Verify Integration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[9px] font-mono tracking-widest text-[#6B5E57] uppercase">
                  READY
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALLOUT BANNER COMPREHENSIVE AUDITS */}
      <section id="services-audit-promo" className="max-w-5xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-dark-brown/10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div className="space-y-3 text-left max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-dark-brown">Unsure of Your Ideal Mix?</h3>
            <p className="text-xs text-dark-brown/70 leading-relaxed">
              We don't recommend products blind. Our analysts review your historical Meta spend patterns, search rankings, and click-conversion parameters to determine your high-yield marketing formula.
            </p>
          </div>
          <button
            onClick={openAuditModal}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl orange-gradient text-white text-xs uppercase tracking-widest font-bold transition-all transform hover:scale-105 duration-200 cursor-pointer"
          >
            Get Free Pipeline Diagnosis
          </button>
        </div>
      </section>

    </div>
  );
}
