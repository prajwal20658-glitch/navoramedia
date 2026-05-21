import { useState, useEffect } from "react";
import { ChevronDown, Sliders, Sparkles, MessageCircleCode } from "lucide-react";
import { FAQS } from "../data";

interface FAQPageProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function FAQPage({ onNavigate, openAuditModal }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "About Our Services", "Our Process", "Ad Spend Tracking", "Dental Specialty"];

  const filteredFAQs = activeCategory === "All"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div id="faq-page-container" className="pt-24 space-y-16 pb-20 max-w-4xl mx-auto px-4">
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-burnt-orange font-sans">
          THE KNOWLEDGE INVENTORY
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-dark-brown">
          Frequently Answered Gaps
        </h1>
        <p className="text-sm text-dark-brown/70 max-w-xl mx-auto leading-relaxed font-sans font-light">
          Select a category to sort operational, media, and medical orthodontic dental marketing setup parameters immediately.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="flex flex-wrap gap-2 justify-center border-b border-dark-brown/15 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer font-sans ${
              activeCategory === cat
                ? "orange-gradient text-white shadow-sm"
                : "bg-white border border-dark-brown/15 text-dark-brown/60 hover:text-dark-brown hover:bg-[#Fbf9f6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* FAQS LIST */}
      <section className="space-y-4">
        {filteredFAQs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id}
              className="border border-dark-brown/10 rounded-xl bg-[#Fbf9f6] overflow-hidden hover:border-[#FF8C2A] transition-colors shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center text-dark-brown cursor-pointer"
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="w-2 h-2 rounded-full bg-burnt-orange flex-shrink-0 animate-pulse" />
                  <span className="font-serif text-sm sm:text-base font-bold leading-snug">{faq.question}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-warm-gray flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-burnt-orange" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-dark-brown/70 font-light leading-relaxed border-t border-dark-brown/10 font-sans">
                  <p className="mb-3">{faq.answer}</p>
                  <span className="text-[10px] text-burnt-orange font-bold uppercase tracking-wider inline-block">
                    CATEGORY PILLAR: {faq.category}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* FOOTER CALL TO ACTION INLINE */}
      <section className="p-8 rounded-2xl bg-white border border-dark-brown/10 text-center space-y-4 mt-12 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-dark-brown">Still Have Technical Attribution Questions?</h3>
        <p className="text-xs text-dark-brown/70 font-sans">
          Our cofounders jump on calls twice a week with pre-qualified Bangalore enterprises. Submit your business URL parameters today.
        </p>
        <button
          onClick={openAuditModal}
          className="px-5 py-2.5 rounded-lg orange-gradient text-white text-xs uppercase tracking-wider font-bold transition-all transform hover:scale-105 cursor-pointer font-sans"
        >
          Secure Your Free Consultation
        </button>
      </section>

    </div>
  );
}
