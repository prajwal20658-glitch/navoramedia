import React, { useEffect } from "react";
import { Link2, Globe, FileText, CheckCircle2, Server, HelpCircle, Mail, Briefcase } from "lucide-react";

interface SitemapProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Sitemap({ onNavigate, openAuditModal }: SitemapProps) {
  // Update document title and meta description tag dynamically for advanced client-side SPA SEO optimization
  useEffect(() => {
    document.title = "Sitemap & Search Engine Index | Navora Media";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Official index and sitemap directory of Navora Media Performance Agency. Discover Google, Meta, SEO, and orthodontic lead generation channels."
      );
    }
  }, []);

  const coreRoutes = [
    { label: "Home (Performance Board)", path: "home", desc: "Central workspace highlighting our performance stats, ROI math, and client success ratios." },
    { label: "Active Services Portal", path: "services", desc: "Primary overview representing our performance growth solutions and technical engines." },
    { label: "Success Case Studies", path: "case-studies", desc: "Verifiable empirical case files detailing our tracking methods and spend multiplier ratios." },
    { label: "Inbound Performance Blog", path: "blog", desc: "Technical publications, SEO algorithms documentation, and Meta Ads update briefs." },
    { label: "Get Free Diagnostic Audit", path: "audit", desc: "Complimentary manual SEO audit, Conversion API checks, and map positioning scorecards." },
    { label: "Consultation FAQ Desk", path: "faq", desc: "Answers regarding our attribution tools, campaign sandbox structures, and dental funnels." },
    { label: "Career Opportunities", path: "careers", desc: "Join our core media buying and web engineering operations in Bangalore, India." },
    { label: "Contact / Booking Hotline", path: "contact", desc: "Secure intake portal to schedule audits, launch campaigns, or coordinate discovery calls." },
  ];

  const serviceSubroutes = [
    { name: "Meta Ads Performance", id: "meta-ads", desc: "Predictive scaling through CBO consolidations and Creative Sandbox tests." },
    { name: "Google Ads & PMax", id: "google-ads", desc: "High-intent buyer capture across search keywords and YouTube vectors." },
    { name: "Organic SEO Engines", id: "seo", desc: "Structural domain authorization and programmatic cluster structures." },
    { name: "Lead Generation Funnels", id: "lead-generation", desc: "Qualifying interactive quiz assets synced directly to your CRM." },
    { name: "Dental Clinic Marketing", id: "dental-marketing", desc: "Patient acquisition channels for implants, aligners, and dental surgery centers." },
    { name: "Social Media & UGC", id: "social-media", desc: "Conversion-optimized creators assets to build native channel depth." },
  ];

  const legalRoutes = [
    { label: "Privacy Policy Document", path: "privacy", desc: "Secure criteria explaining how we collect, store, and shield visitor credentials." },
    { label: "Terms & Conditions Guidelines", path: "terms", desc: "Legal provisions governing complimentary audits and proprietary methodologies." },
  ];

  return (
    <div id="html-sitemap-page" className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto pt-8 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#FF8021]/10 text-[#FF8021] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full font-sans">
          <Globe className="w-3.5 h-3.5" />
          <span>SEO Crawl Optimization Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-dark-brown">
          Comprehensive Sitemap Index
        </h1>
        <p className="text-dark-brown/70 font-sans font-light text-sm sm:text-base leading-relaxed">
          This central index allows web crawlers and humans to navigate seamlessly to every key growth portal, dynamic ad campaign system, and compliance page operated by Navora Media.
        </p>
      </section>

      {/* SEO META CARD SUMMARY */}
      <section className="bg-white border border-dark-brown/10 rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[#FF8021] font-bold text-sm font-sans uppercase tracking-wider">
            <Server className="w-4 h-4" />
            <span>Target Host</span>
          </div>
          <p className="text-lg font-mono font-semibold text-dark-brown">https://navoramedia.in</p>
          <p className="text-xs text-dark-brown/50">Primary verified SSL domain mapping for all corporate, digital, and media operations.</p>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-x border-dark-brown/10 pt-4 md:pt-0 md:px-6">
          <div className="flex items-center space-x-2 text-[#FF8021] font-bold text-sm font-sans uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Indexing Health</span>
          </div>
          <p className="text-lg text-emerald-600 font-sans font-bold">100% Crawl-Ready</p>
          <p className="text-xs text-dark-brown/50">XML sitemap schema configured in strict compliance with Googlebot standards under Robots protocol.</p>
        </div>

        <div className="space-y-2 pt-4 md:pt-0">
          <div className="flex items-center space-x-2 text-[#FF8021] font-bold text-sm font-sans uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>XML Pointer</span>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            className="text-sm font-mono text-burnt-orange hover:underline block break-all font-semibold"
          >
            /sitemap.xml
          </a>
          <p className="text-xs text-dark-brown/50">Provides automated XML index arrays to instantly notify search engine spiders on update frequencies.</p>
        </div>
      </section>

      {/* DIRECTORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Core Pages Sitemap */}
        <div className="bg-white border border-dark-brown/10 rounded-2xl p-6 space-y-6">
          <div className="pb-3 border-b border-dark-brown/10 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-dark-brown">Core Portals</h2>
            <Link2 className="w-4 h-4 text-dark-brown/40" />
          </div>
          <ul className="space-y-4">
            {coreRoutes.map((route) => (
              <li key={route.path} className="group">
                <button
                  onClick={() => onNavigate(route.path)}
                  className="font-serif font-bold text-sm text-dark-brown hover:text-[#FF8021] text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8021] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{route.label}</span>
                </button>
                <p className="text-xs text-dark-brown/60 font-sans font-light mt-1 pl-4">
                  {route.desc}
                </p>
                <div className="text-[10px] text-burnt-orange/80 font-mono mt-1 pl-4 underline opacity-75">
                  /{route.path === "home" ? "" : route.path}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Growth Services Sitemap */}
        <div className="bg-white border border-dark-brown/10 rounded-2xl p-6 space-y-6">
          <div className="pb-3 border-b border-dark-brown/10 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-dark-brown">Growth Services</h2>
            <Briefcase className="w-4 h-4 text-dark-brown/40" />
          </div>
          <ul className="space-y-4">
            {serviceSubroutes.map((svc) => (
              <li key={svc.id} className="group">
                <button
                  onClick={() => onNavigate(`services/${svc.id}`)}
                  className="font-serif font-bold text-sm text-dark-brown hover:text-[#FF8021] text-left transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8021] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{svc.name}</span>
                </button>
                <p className="text-xs text-dark-brown/60 font-sans font-light mt-1 pl-4">
                  {svc.desc}
                </p>
                <div className="text-[10px] text-burnt-orange/80 font-mono mt-1 pl-4 underline opacity-75">
                  /services/{svc.id}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Help Desk Sitemap */}
        <div className="space-y-8">
          
          <div className="bg-white border border-dark-brown/10 rounded-2xl p-6 space-y-6">
            <div className="pb-3 border-b border-dark-brown/10 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-dark-brown">Legal & Compliance</h2>
              <FileText className="w-4 h-4 text-dark-brown/40" />
            </div>
            <ul className="space-y-4">
              {legalRoutes.map((route) => (
                <li key={route.path} className="group">
                  <button
                    onClick={() => onNavigate(route.path)}
                    className="font-serif font-bold text-sm text-dark-brown hover:text-[#FF8021] text-left transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8021] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{route.label}</span>
                  </button>
                  <p className="text-xs text-dark-brown/60 font-sans font-light mt-1 pl-4">
                    {route.desc}
                  </p>
                  <div className="text-[10px] text-burnt-orange/80 font-mono mt-1 pl-4 underline opacity-75">
                    /{route.path}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#Fbf9f6] border border-dark-brown/10 space-y-4">
            <div className="flex items-center space-x-2 text-dark-brown font-serif font-bold text-sm">
              <HelpCircle className="w-4 h-4 text-[#FF8C2A]" />
              <span>Need Quick Assistance?</span>
            </div>
            <p className="text-xs text-dark-brown/70 leading-relaxed font-sans">
              Can't locate a desired marketing workflow or dental audit parameter? Contact our performance engineering lead directly. We respond within 3 minutes on WhatsApp.
            </p>
            <div className="flex flex-col space-y-2 pt-1 font-sans text-xs">
              <button
                onClick={() => onNavigate("contact")}
                className="w-full text-center py-2 border border-dark-brown/15 rounded bg-white hover:bg-dark-brown/5 text-dark-brown hover:text-[#FF8021] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Intake Hotline
              </button>
              <button
                onClick={openAuditModal}
                className="w-full text-center py-2 rounded orange-gradient text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Get Custom Audit
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
