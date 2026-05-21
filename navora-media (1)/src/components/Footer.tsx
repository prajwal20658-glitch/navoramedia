import { Zap, Mail, Phone, MapPin, ArrowRight, Instagram, Shield, FileText, Globe } from "lucide-react";
import NavoraLogo from "./NavoraLogo";

interface FooterProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Footer({ onNavigate, openAuditModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Meta Ads Performance", id: "meta-ads" },
    { name: "Google Ads (PMax & Search)", id: "google-ads" },
    { name: "Organic SEO (Map Pack)", id: "seo" },
    { name: "Lead Generation Funnels", id: "lead-generation" },
    { name: "Dental Clinic Marketing", id: "dental-marketing" },
    { name: "Social Media & UGC", id: "social-media" }
  ];

  const quickLinks = [
    { label: "Home", path: "home" },
    { label: "Success Stories", path: "case-studies" },
    { label: "Inbound Blog", path: "blog" },
    { label: "Join Careers", path: "careers" },
    { label: "FAQ Guide", path: "faq" },
    { label: "Book Discovery", path: "contact" },
    { label: "SEO Sitemap Index", path: "sitemap" }
  ];

  return (
    <footer id="main-footer" className="bg-white border-t border-dark-brown/10 pt-16 pb-8 text-dark-brown/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => onNavigate("home")}>
              <NavoraLogo size={38} className="transition-all duration-300 group-hover:scale-105" />
              <div className="flex flex-col select-none">
                <div className="font-serif text-lg font-bold tracking-tight text-[#121212] leading-none mb-0.5">
                  <span>Navora</span>
                  <span className="text-[#FF8021]">Media</span>
                </div>
                <span className="text-[8px] block tracking-normal text-[#121212]/60 font-sans font-medium">
                  "We Don't Guess. We Grow."
                </span>
              </div>
            </div>
            
            <p className="text-sm line-clamp-4 text-dark-brown/70 leading-relaxed">
              We are a premium performance marketing firm designed to help upscale enterprises, cosmetic dental clinics, and high-growth brands scale direct acquisition through predictive media buying and optimized organic search engines.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.instagram.com/navoramedia.in/" target="_blank" rel="noreferrer" id="link-ig" className="p-2 px-3 rounded bg-dark-brown/5 hover:bg-burnt-orange/10 text-dark-brown hover:text-[#FF8C2A] transition-colors flex items-center gap-1.5" title="Follow Navora Media on Instagram">
                <Instagram className="w-4 h-4" />
                <span className="text-xs font-sans font-semibold">@navoramedia.in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Service list */}
          <div>
            <h3 className="font-serif text-lg font-medium text-dark-brown mb-6 pb-2 border-b border-dark-brown/10">
              Our Growth Engines
            </h3>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onNavigate(`services/${svc.id}`)}
                    className="text-sm text-dark-brown/70 hover:text-burnt-orange hover:underline text-left cursor-pointer transition-colors duration-200"
                  >
                    {svc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg font-medium text-dark-brown mb-6 pb-2 border-b border-dark-brown/10">
              Agency Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-sm text-dark-brown/70 hover:text-[#FF8C2A] hover:underline text-left cursor-pointer transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openAuditModal}
                  className="text-sm text-[#FF8C2A] font-bold hover:text-burnt-orange flex items-center space-x-1 hover:underline cursor-pointer"
                >
                  <span>Request Audit Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-dark-brown mb-6 pb-2 border-b border-dark-brown/10">
              Bangalore, Karnataka
            </h3>
            <div className="space-y-3 text-sm text-dark-brown/70">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-burnt-orange mt-0.5 flex-shrink-0" />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FF8C2A] flex-shrink-0" />
                <a href="mailto:contact@navoramedia.in" className="hover:text-burnt-orange hover:underline">
                  contact@navoramedia.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-burnt-orange flex-shrink-0" />
                <a href="tel:+919880552901" className="hover:text-[#FF8C2A] hover:underline">
                  +91-98805-52901 (Call)
                </a>
                <span className="text-dark-brown/30">|</span>
                <a href="https://wa.me/919880552901" target="_blank" rel="noreferrer" className="hover:text-[#FF8C2A] hover:underline font-semibold">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-burnt-orange/5 to-rich-orange/5 border border-burnt-orange/10">
              <p className="text-xs text-[#FF8C2A] font-bold uppercase tracking-widest mb-1">
                Immediate Brief Submission
              </p>
              <p className="text-xs text-dark-brown/70 mb-3">
                Need an audit? Our analysts generate visual diagnostics within 24 hours.
              </p>
              <button
                onClick={openAuditModal}
                className="w-full text-center py-2 px-3 rounded orange-gradient text-white text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer font-sans"
              >
                Fast Track Request
              </button>
            </div>
          </div>

        </div>

        {/* Bottom border block */}
        <div className="pt-8 border-t border-dark-brown/10 flex flex-col sm:flex-row justify-between items-center text-xs text-dark-brown/50">
          <p>© {currentYear} Navora Media Corp. All rights reserved. Performance Marketing representation.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0 justify-center">
            <button
              onClick={() => onNavigate("privacy")}
              className="hover:text-[#FF8C2A] flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" /> Privacy Policy
            </button>
            <button
              onClick={() => onNavigate("terms")}
              className="hover:text-[#FF8C2A] flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate("sitemap")}
              className="hover:text-[#FF8C2A] flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" /> HTML Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
