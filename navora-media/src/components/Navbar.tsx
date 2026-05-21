import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap, ArrowRight, BookOpen, Sparkles, Star, Home, Briefcase, TrendingUp } from "lucide-react";
import NavoraLogo from "./NavoraLogo";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Navbar({ currentPath, onNavigate, openAuditModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Meta Ads Performance", id: "meta-ads" },
    { name: "Google Ads (PMax & Search)", id: "google-ads" },
    { name: "Organic SEO (Map Pack)", id: "seo" },
    { name: "Lead Generation Funnels", id: "lead-generation" },
    { name: "Dental Clinic Marketing", id: "dental-marketing" },
    { name: "Social Media & UGC", id: "social-media" }
  ];

  const mainLinks = [
    { label: "Home", path: "home" },
    { label: "Services", path: "services" },
    { label: "Case Studies", path: "case-studies" },
    { label: "Blog", path: "blog" },
    { label: "Contact", path: "contact" }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  const navToService = (id: string) => {
    onNavigate(`services/${id}`);
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-soft-beige/95 backdrop-blur-md border-b border-dark-brown/10 py-3 shadow-sm shadow-dark-brown/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <NavoraLogo size={42} className="transition-all duration-300 group-hover:scale-105" />
            <div className="flex flex-col select-none">
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#121212] leading-none mb-0.5">
                <span>Navora</span>
                <span className="text-[#FF8021]">Media</span>
              </div>
              <span className="text-[9px] block tracking-normal text-[#121212]/60 font-sans font-medium">
                "We Don't Guess. We Grow."
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div id="desktop-nav" className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === "services" && currentPath.startsWith("services/"));
              
              if (link.path === "services") {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick("services")}
                      className={`flex items-center space-x-1 outline-none text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                        isActive ? "text-burnt-orange" : "text-dark-brown/80 hover:text-burnt-orange hover:underline hover:underline-offset-4"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl glass bg-white/95 border border-dark-brown/10 p-2 shadow-xl transition-all duration-300 origin-top transform ${
                        servicesDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 border-b border-dark-brown/10 mb-1">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-[#FF8C2A]">
                          Performance Pillars
                        </p>
                      </div>
                      <div className="grid gap-1">
                        {services.map((svc) => (
                          <button
                            key={svc.id}
                            onClick={() => navToService(svc.id)}
                            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-dark-brown/80 hover:text-burnt-orange hover:bg-burnt-orange/5 transition-all duration-200 cursor-pointer flex items-center justify-between group/item"
                          >
                            <span>{svc.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-burnt-orange opacity-0 transform -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-burnt-orange" : "text-dark-brown/80 hover:text-burnt-orange hover:underline hover:underline-offset-4"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Home Icon */}
            <button
              onClick={() => handleLinkClick("home")}
              className={`p-2 rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center ${
                currentPath === "home" ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown/80 hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Home"
            >
              <Home className="w-4 h-4" />
            </button>
            {/* Services Icon */}
            <button
              onClick={() => handleLinkClick("services")}
              className={`p-2 rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center ${
                currentPath === "services" || currentPath.startsWith("services/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown/80 hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Services"
            >
              <Briefcase className="w-4 h-4" />
            </button>
            {/* Case Studies Icon */}
            <button
              onClick={() => handleLinkClick("case-studies")}
              className={`p-2 rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center ${
                currentPath === "case-studies" || currentPath.startsWith("case-studies/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown/80 hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Case Studies"
            >
              <TrendingUp className="w-4 h-4" />
            </button>
            {/* Blog Icon */}
            <button
              onClick={() => handleLinkClick("blog")}
              className={`p-2 rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center ${
                currentPath === "blog" || currentPath.startsWith("blog/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown/80 hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Blog"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            <span className="h-5 w-[1px] bg-dark-brown/15 mx-1 block" />

            <button
              onClick={() => handleLinkClick("faq")}
              className="text-xs uppercase tracking-wider text-[#FF8C2A] font-semibold hover:text-[#FF8021] transition-colors duration-200 cursor-pointer mr-1 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF8C2A]" /> FAQ
            </button>
            <button
              onClick={openAuditModal}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige font-semibold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-burnt-orange/20 cursor-pointer flex items-center space-x-1.5"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center space-x-1.5">
            {/* Home Icon */}
            <button
              onClick={() => handleLinkClick("home")}
              className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                currentPath === "home" ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </button>
            {/* Services Icon */}
            <button
              onClick={() => handleLinkClick("services")}
              className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                currentPath === "services" || currentPath.startsWith("services/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Services"
            >
              <Briefcase className="w-3.5 h-3.5" />
            </button>
            {/* Case Studies Icon */}
            <button
              onClick={() => handleLinkClick("case-studies")}
              className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                currentPath === "case-studies" || currentPath.startsWith("case-studies/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Case Studies"
            >
              <TrendingUp className="w-3.5 h-3.5" />
            </button>
            {/* Blog Icon */}
            <button
              onClick={() => handleLinkClick("blog")}
              className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                currentPath === "blog" || currentPath.startsWith("blog/") ? "bg-[#FF8021]/10 text-[#FF8021]" : "text-dark-brown hover:text-[#FF8021] hover:bg-dark-brown/5"
              }`}
              title="Blog"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={openAuditModal}
              className="px-2.5 py-1.5 rounded orange-gradient text-white font-bold text-[10px] uppercase tracking-wider cursor-pointer font-sans"
            >
              Audit
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-80 bg-soft-beige border-l border-dark-brown/10 p-6 shadow-2xl transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-dark-brown/10">
          <div className="flex items-center space-x-2">
            <NavoraLogo size={32} />
            <span className="font-serif text-lg font-bold text-[#121212]">
              Navora<span className="text-[#FF8021]">Media</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-dark-brown hover:text-burnt-orange cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {mainLinks.map((link) => {
            if (link.path === "services") {
              return (
                <div key={link.label} className="space-y-1">
                  <span className="text-[10px] font-bold text-warm-gray uppercase tracking-widest block mb-2">
                    Our Services
                  </span>
                  <div className="grid gap-1 pl-2 mb-2">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => navToService(svc.id)}
                        className={`text-left block text-sm py-1.5 transition-colors cursor-pointer ${
                          currentPath === `services/${svc.id}`
                            ? "text-[#FF8C2A] font-medium"
                            : "text-dark-brown/70 hover:text-burnt-orange"
                        }`}
                      >
                        • {svc.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = currentPath === link.path;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className={`text-left text-base font-medium py-2 border-b border-dark-brown/10 transition-colors cursor-pointer ${
                  isActive ? "text-burnt-orange font-semibold" : "text-dark-brown/80 hover:text-burnt-orange"
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-6">
            <button
              onClick={() => handleLinkClick("careers")}
              className="w-full text-left text-sm text-dark-brown/60 hover:text-burnt-orange py-2 cursor-pointer"
            >
              Careers - Join Our Team
            </button>
            <button
              onClick={() => handleLinkClick("faq")}
              className="w-full text-left text-sm text-dark-brown/60 hover:text-burnt-orange py-2 cursor-pointer"
            >
              Frequently Asked Questions (FAQ)
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                openAuditModal();
              }}
              className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige font-semibold text-xs uppercase tracking-widest text-center shadow-lg cursor-pointer"
            >
              Get Free Marketing Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
