import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, ChevronDown, MessageSquare, ArrowRight, Zap, Target, Star } from "lucide-react";
import { SERVICES, CASE_STUDIES } from "../data";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

// Per-service SEO config — keyword-first titles + meta descriptions
const SERVICE_SEO: Record<string, { title: string; description: string; keyword: string }> = {
  "meta-ads": {
    title: "Meta Ads Agency Bangalore | Facebook & Instagram Ads – Navora Media",
    description:
      "Top Meta Ads agency in Bangalore. We run high-ROAS Facebook & Instagram ad campaigns for businesses. Get a free audit from Navora Media today.",
    keyword: "Meta Ads agency Bangalore",
  },
  "google-ads": {
    title: "Google Ads Agency Bangalore | PPC & Search Campaigns – Navora Media",
    description:
      "Expert Google Ads agency in Bangalore. We manage Search, Display & Performance Max campaigns that drive qualified leads. Free audit available.",
    keyword: "Google Ads agency Bangalore",
  },
  seo: {
    title: "SEO Agency Bangalore | Organic Growth & Rankings – Navora Media",
    description:
      "Results-driven SEO agency in Bangalore. We build organic rankings, technical SEO, and content strategies that grow your traffic. Free audit available.",
    keyword: "SEO agency Bangalore",
  },
  "lead-generation": {
    title: "Lead Generation Agency Bangalore | Qualified Leads – Navora Media",
    description:
      "Navora Media is a lead generation agency in Bangalore. We build full-funnel systems to generate high-quality leads for your business. Book a free audit.",
    keyword: "lead generation agency Bangalore",
  },
  "dental-marketing": {
    title: "Dental Marketing Agency Bangalore | Grow Your Clinic – Navora Media",
    description:
      "Navora Media is a specialist dental marketing agency in Bangalore. We fill appointment books with Google Ads, Meta Ads & SEO for dental clinics.",
    keyword: "dental marketing agency Bangalore",
  },
  "social-media": {
    title: "Social Media Marketing Agency Bangalore | Navora Media",
    description:
      "Strategic social media marketing agency in Bangalore. We manage content, ads & community growth on Instagram, Facebook & LinkedIn. Free audit.",
    keyword: "social media marketing agency Bangalore",
  },
};

export default function ServiceDetail({ serviceId, onNavigate, openAuditModal }: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const service = SERVICES.find((s) => s.id === serviceId);
  const seo = SERVICE_SEO[serviceId] ?? {
    title: `${serviceId} Services Bangalore | Navora Media`,
    description: `Expert ${serviceId} services in Bangalore by Navora Media — a performance marketing agency built for ROI.`,
    keyword: `${serviceId} Bangalore`,
  };

  const canonicalUrl = `https://navoramedia.in/services/${serviceId}`;
  const ogImage = "https://navoramedia.in/og-image.jpg";

  useEffect(() => {
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

  const assocCaseStudy = CASE_STUDIES.find((c) => c.id === service.caseStudyId);

  // Build FAQ schema from service.faqs
  const faqSchema = service.faqs && service.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      }
    : null;

  return (
    <div id={`detail-${serviceId}`} className="pt-24 space-y-20 pb-20">

      <Helmet>
        {/* ── Title & Meta ── */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Navora Media" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@navoramedia" />

        {/* ── JSON-LD: Service ── */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "${seo.keyword}",
            "name": "${seo.title.split("|")[0].trim()}",
            "description": "${seo.description}",
            "url": "${canonicalUrl}",
            "areaServed": "Bangalore",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Navora Media",
              "url": "https://navoramedia.in",
              "telephone": "+919880552901",
              "email": "contact@navoramedia.in",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "IN"
              }
            }
          }
        `}</script>

        {/* ── JSON-LD: FAQPage (dynamic from service data) ── */}
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

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
              {service.title} in Bangalore
            </h1>
            <p className="text-sm sm:text-lg text-soft-beige/70 font-light leading-relaxed">
              {service.subtitle} — delivered by Navora Media, a performance marketing agency in Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left deep content details */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-dark-brown">
              Our {seo.keyword} Approach
            </h2>
            <p className="text-sm text-warm-gray leading-relaxed font-light">
              {service.longDescription}
            </p>
          </div>

          {/* Key Strategic Pillars */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-dark-brown">Engineered Strategies</h3>
            <div className="grid gap-4">
              {service.strategies.map((strat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#1A120E] border border-warm-gray/20 space-y-1">
                  <h4 className="font-serif font-bold text-sm text-soft-beige">{strat.title}</h4>
                  <p className="text-xs text-soft-beige/60 font-light leading-relaxed">{strat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features checklist */}
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-dark-brown/10 shadow-sm">
            <h3 className="font-serif text-base font-bold text-dark-brown uppercase tracking-wider">
              Features & Asset Integration Included
            </h3>
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

        {/* Right sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-2xl bg-[#1E1410] border border-burnt-orange/20 relative space-y-6">
            <div className="absolute top-0 right-0 w-24 h-24 bg-burnt-orange/5 rounded-full blur-2xl" />

            <p className="text-[10px] uppercase font-bold tracking-widest text-[#FF8C2A]">
              IMMEDIATE BRIEF ENTRY
            </p>

            <h3 className="font-serif text-xl font-bold text-soft-beige">
              Request Your {seo.keyword} Audit
            </h3>

            <p className="text-xs text-soft-beige/60 leading-relaxed">
              Let our media buying and technical schema architects audit your modern assets. We will return 12 customized, actionable tips within 24 hours.
            </p>

            <button
              onClick={openAuditModal}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige font-semibold text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-burnt-orange/10 transform hover:scale-102 transition-transform duration-200"
            >
              Request Free Custom Audit (24h Delivery)
            </button>
          </div>

          {assocCaseStudy && (
            <div className="p-6 rounded-2xl bg-[#1A120E] border border-warm-gray/20 space-y-4">
              <span className="text-[10px] font-bold text-warm-gray uppercase tracking-widest">
                VERIFIED PERFORMANCE LIFT
              </span>
              <h4 className="font-serif text-base font-bold text-soft-beige line-clamp-2">
                {assocCaseStudy.title}
              </h4>
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
              KNOWLEDGE MATRIX
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-soft-beige">
              {seo.keyword} — Frequently Asked Questions
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
