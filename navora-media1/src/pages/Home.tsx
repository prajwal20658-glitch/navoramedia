import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Target, Sparkles, TrendingUp, Filter, Users, Star, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS, SERVICES } from "../data";

interface HomeProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Home({ onNavigate, openAuditModal }: HomeProps) {
  const processSteps = [
    {
      num: "01",
      title: "Technical Discovery & Code Audit",
      desc: "We perform a thorough analysis of your historical ad spend, Conversions API tracking setup, and search engine crawler schema files to uncover latent indexing and attribution leaks."
    },
    {
      num: "02",
      title: "The Creative Sandbox Buildout",
      desc: "Rather than risking budget on assumptions, we establish single-variable testing models to match the precise hooks and creative parameters that click with your target buyers."
    },
    {
      num: "03",
      title: "Consolidated Algorithmic Campaign Deploy",
      desc: "We clear redundant overlap and feed Meta & Google's machine learning architectures consolidated data streams, accelerating pixel training to achieve high consistency."
    },
    {
      num: "04",
      title: "CBO & Budget Scale Amplification",
      desc: "Once a creative-match is identified and account stability matches our strict target margins, we initiate Cost-Cap bidding rules to safely scale budget parameters."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Navora Media",
    "description": "Navora Media is Bangalore's leading performance marketing agency delivering high-ROAS Meta Ads, Google Ads optimization, organic SEO and dental patient acquisition programs.",
    "url": "https://navoramedia.in",
    "logo": "https://navoramedia.in/logo.png",
    "image": "https://navoramedia.in/og-image.jpg",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "areaServed": "Bangalore",
    "serviceType": [
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "SEO",
      "Dental Patient Acquisition",
      "Digital Marketing"
    ],
    "priceRange": "₹₹₹",
    "sameAs": [
      "https://www.linkedin.com/company/navoramedia",
      "https://www.instagram.com/navoramedia"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Navora Media do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Navora Media is a performance marketing agency in Bangalore specialising in Meta Ads, Google Ads, organic SEO, and dental patient acquisition programs."
        }
      },
      {
        "@type": "Question",
        "name": "Does Navora Media work with dental clinics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Navora Media has a dedicated dental patient acquisition program using geo-fenced Meta Ads and Google Ads to generate qualified bookings for dental clinics in Bangalore and across India."
        }
      },
      {
        "@type": "Question",
        "name": "What ROAS can I expect from Navora Media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Navora Media delivers an average account ROAS of 5.1x across Meta and Google Ads campaigns, with a 92% average ROAS improvement within the first 45 days."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Navora Media located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Navora Media is based in Bangalore, Karnataka, India and serves clients across Bangalore and nationally."
        }
      }
    ]
  };

  return (
    <div id="home-page-container" className="pt-24 space-y-24">
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Performance Marketing Agency Bangalore | Navora Media</title>
        <meta name="description" content="Navora Media is Bangalore's leading performance marketing agency delivering high-ROAS Meta Ads, Google Ads, organic SEO and dental patient acquisition programs. Get your free audit today." />
        <meta name="keywords" content="performance marketing agency Bangalore, Meta Ads agency Bangalore, Google Ads agency Bangalore, dental marketing agency Bangalore, SEO agency Bangalore, digital marketing agency Bangalore" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://navoramedia.in/" />

        {/* ── Open Graph (WhatsApp, LinkedIn, Facebook previews) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Navora Media" />
        <meta property="og:title" content="Performance Marketing Agency Bangalore | Navora Media" />
        <meta property="og:description" content="Navora Media is Bangalore's leading performance marketing agency delivering high-ROAS Meta Ads, Google Ads, organic SEO and dental patient acquisition programs." />
        <meta property="og:image" content="https://navoramedia.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Navora Media – Performance Marketing Agency Bangalore" />
        <meta property="og:url" content="https://navoramedia.in/" />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@navoramedia" />
        <meta name="twitter:title" content="Performance Marketing Agency Bangalore | Navora Media" />
        <meta name="twitter:description" content="High-ROAS Meta Ads, Google Ads & SEO for Bangalore businesses. Specialists in dental patient acquisition." />
        <meta name="twitter:image" content="https://navoramedia.in/og-image.jpg" />
        <meta name="twitter:image:alt" content="Navora Media – Performance Marketing Agency Bangalore" />

        {/* ── LocalBusiness Schema ── */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        {/* ── FAQ Schema ── */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      {/* SECTION 1: HERO CONTAINER */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden bg-[#F3EEE7]">
        {/* Glowing artistic accents in corner */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-burnt-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rich-orange/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-burnt-orange/10 border border-burnt-orange/20 rounded-full text-[#FF8C2A] text-xs font-semibold tracking-wider uppercase animate-fade-in font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bangalore's Elite Performance Marketing Agency</span>
          </div>

          {/* ── H1 with primary keyword ── */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-dark-brown tracking-tight leading-none">
            Bangalore's #1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-orange via-[#FF8C2A] to-[#FF8C2A]">Performance Marketing</span> Agency
          </h1>

          {/* ── Opening paragraph with keyword in first 100 words ── */}
          <p className="text-base sm:text-xl text-dark-brown/80 font-sans font-light max-w-3xl mx-auto leading-relaxed">
            Navora Media is Bangalore's leading performance marketing agency. We bypass empty vanity metrics and deploy rigorous algorithmic media buying, dental patient acquisition systems, and authoritative organic SEO that converts searchers into revenue — with a verified 5.1x average ROAS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={openAuditModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl orange-gradient text-white font-semibold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-xl hover:shadow-burnt-orange/25 hover:scale-105 cursor-pointer flex items-center justify-center space-x-2 font-sans"
            >
              <span>Secure Your Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("case-studies")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-brown/5 border border-dark-brown/20 text-dark-brown font-semibold uppercase tracking-wider text-xs hover:bg-dark-brown/10 transition-all cursor-pointer flex items-center justify-center space-x-1 font-sans"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Core Trust statistics panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-dark-brown/10">
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-burnt-orange">5.1x</p>
              <p className="text-[10px] sm:text-xs text-dark-brown/50 uppercase tracking-widest mt-1 font-sans">Average Account ROAS</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-dark-brown">400%</p>
              <p className="text-[10px] sm:text-xs text-dark-brown/50 uppercase tracking-widest mt-1 font-sans">YoY Compound Scaling</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-burnt-orange">DR 78</p>
              <p className="text-[10px] sm:text-xs text-dark-brown/50 uppercase tracking-widest mt-1 font-sans">SEO Target Authority</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-dark-brown">182+</p>
              <p className="text-[10px] sm:text-xs text-dark-brown/50 uppercase tracking-widest mt-1 font-sans">Dental Patient Bookings</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICES PREVIEW */}
      <section id="services-preview" className="bg-white py-20 border-y border-dark-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-widest font-bold text-[#FF8C2A] font-sans">Engineered Frameworks</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-dark-brown tracking-tight">
              Our Performance Marketing Services in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-dark-brown/60 max-w-xl mx-auto font-sans">
              Choose an elite pillar built upon real conversion math, programmatic structures, and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group relative bg-[#Fbf9f6] border border-dark-brown/10 rounded-xl p-6 transition-all duration-300 hover:border-burnt-orange/50 hover:shadow-md hover:shadow-dark-brown/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded bg-burnt-orange/15 border border-burnt-orange/30 flex items-center justify-center text-burnt-orange">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-dark-brown group-hover:text-burnt-orange transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-dark-brown/50 mt-1 line-clamp-1 italic font-sans animate-pulse">
                      {svc.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-dark-brown/70 leading-relaxed font-light line-clamp-3 font-sans">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-dark-brown/10 mt-6 flex justify-between items-center">
                  <button
                    onClick={() => onNavigate(`services/${svc.id}`)}
                    className="text-xs font-bold text-[#FF8C2A] group-hover:text-dark-brown uppercase tracking-wider flex items-center space-x-1 cursor-pointer font-sans"
                  >
                    <span>Analyze Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono tracking-widest text-warm-gray uppercase">
                    ACTIVE PILLAR
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3 rounded-lg bg-dark-brown/5 border border-dark-brown/15 text-dark-brown hover:bg-dark-brown/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center space-x-1.5 font-sans"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="differentiators-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-burnt-orange/15 text-burnt-orange text-[10px] uppercase font-bold tracking-widest font-sans">
              <span>Why Choose Navora Media Over Other Bangalore Agencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-dark-brown">
              Why Businesses in Bangalore Trust Navora Media for Performance Marketing
            </h2>
            <p className="text-sm font-light text-dark-brown/70 leading-relaxed font-sans">
              Unlike generic media buying operations that outsource work to uncertified interns, your campaigns at Navora are engineered by seasoned tracking analysts and CRO architects based in Bangalore.
            </p>

            <div className="space-y-4 pt-1">
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-burnt-orange/15 text-burnt-orange flex items-center justify-center font-bold text-xs mt-1 font-sans">✓</div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark-brown">Consolidated Machine Training Models</h4>
                  <p className="text-xs text-dark-brown/60 font-sans">We structure accounts to trigger immediate algorithmic optimization on Google & Meta ecosystems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-burnt-orange/15 text-[#FF8C2A] flex items-center justify-center font-bold text-xs mt-1 font-sans">✓</div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark-brown">Sovereign Attribution Setup</h4>
                  <p className="text-xs text-dark-brown/60 font-sans">We configure server-to-server CAPI and subdomain DNS setups to track true checkout origins.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-burnt-orange/15 text-burnt-orange flex items-center justify-center font-bold text-xs mt-1 font-sans">✓</div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark-brown">Dental Patient Acquisition Funnels — Bangalore</h4>
                  <p className="text-xs text-dark-brown/60 font-sans">Geo-fenced orthodontics captures generating qualified patient bookings for dental clinics in Bangalore.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics showcase */}
          <div className="p-8 rounded-2xl bg-[#Fbf9f6] border border-dark-brown/10 relative overflow-hidden space-y-6 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C2A]/5 rounded-full blur-2xl pointer-events-none" />
            
            <p className="text-xs uppercase tracking-widest text-warm-gray font-bold font-sans">AVERAGE CAMPAIGN LIFT METRICS</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-dark-brown font-serif">Meta ROAS Improvements (avg 45 days)</span>
                  <span className="text-burnt-orange font-bold font-mono">+92%</span>
                </div>
                <div className="w-full bg-dark-brown/5 h-2 rounded overflow-hidden">
                  <div className="bg-burnt-orange h-full rounded" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-dark-brown font-serif">Google Search CPA Reduction</span>
                  <span className="text-[#FF8C2A] font-bold font-mono">-38%</span>
                </div>
                <div className="w-full bg-dark-brown/5 h-2 rounded overflow-hidden">
                  <div className="bg-[#FF8C2A] h-full rounded" style={{ width: "74%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-dark-brown font-serif">Local Map Pack Organic Rank Elevation</span>
                  <span className="text-burnt-orange font-bold font-mono">10x Volume</span>
                </div>
                <div className="w-full bg-dark-brown/5 h-2 rounded overflow-hidden">
                  <div className="bg-burnt-orange h-full rounded" style={{ width: "85%" }} />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-dark-brown/10 text-center shadow-sm">
              <span className="text-[10px] text-dark-brown/50 uppercase tracking-wider block mb-1 font-sans">AUDITED FIRST PARTY PERFORMANCE INTEGRITY</span>
              <p className="text-xs text-burnt-orange font-bold font-sans">Authenticated with complete Triple Whale & Google Analytics matching</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CASE STUDY PREVIEW */}
      <section id="featured-case-study" className="bg-white py-20 border-y border-dark-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF8C2A] font-bold font-sans">PERFORMANCE PROOFS</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-dark-brown mt-2">
                Compound Scale in Action
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate("case-studies")}
                className="px-6 py-3 rounded-lg orange-gradient text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1 font-sans"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#Fbf9f6] border border-dark-brown/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-burnt-orange to-rich-orange h-full" />
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center space-x-1.5 text-xs text-[#FF8C2A] font-bold tracking-widest font-sans">
                <TrendingUp className="w-4 h-4 text-[#FF8C2A]" />
                <span>ROAS DOMINANCE ACCELERATOR</span>
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark-brown tracking-tight leading-tight">
                How We Scaled Aura Living beyond $4.8M in Annual Revenue and Achieved a 5.1x Sustainable ROAS
              </h3>

              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <div className="p-4 rounded-xl bg-white border border-dark-brown/5">
                  <p className="text-2xl font-serif font-bold text-burnt-orange">5.1x ROAS</p>
                  <p className="text-[10px] text-dark-brown/50 uppercase font-mono">Consolidated scale</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-dark-brown/5">
                  <p className="text-2xl font-serif font-bold text-dark-brown">-34% CAC</p>
                  <p className="text-[10px] text-dark-brown/50 uppercase font-mono">Reduced acquisition cost</p>
                </div>
              </div>

              <p className="text-xs text-dark-brown/70 line-clamp-2 font-sans font-light">
                Facing severe dynamic tracking limits and audience overlap prior, Aura Living consolidated its campaign sets and deployed our signature 'Creative Sandbox' hook iterations.
              </p>

              <button
                onClick={() => onNavigate("case-studies/meta-roas")}
                className="text-xs uppercase text-[#FF8C2A] font-bold tracking-widest hover:text-dark-brown transition-colors duration-200 flex items-center gap-1 cursor-pointer font-sans"
              >
                <span>Read Full Tactical Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-dark-brown/10 space-y-4 shadow-sm">
              <p className="text-xs text-[#FF8C2A] uppercase tracking-widest font-bold font-sans">CLIENT LOG DATA MATCH</p>
              <div className="space-y-2 font-mono text-[11px] text-dark-brown/80">
                <div className="flex justify-between border-b border-dark-brown/10 pb-1.5">
                  <span>Initial Spend:</span> <span className="text-dark-brown font-semibold">$15K/month</span>
                </div>
                <div className="flex justify-between border-b border-dark-brown/10 pb-1.5">
                  <span>Ad Spend Post Scale:</span> <span className="text-burnt-orange font-bold">$120K/month</span>
                </div>
                <div className="flex justify-between border-b border-dark-brown/10 pb-1.5">
                  <span>Documented Conversions:</span> <span className="text-dark-brown font-semibold">14,800 purchases</span>
                </div>
                <div className="flex justify-between">
                  <span>Validated Revenue:</span> <span className="text-emerald-600 font-bold">$612K/month top</span>
                </div>
              </div>
              <div className="bg-[#F3EEE7] p-3 rounded text-center">
                <span className="text-[9px] text-[#FF8C2A] font-bold block">AUDIT SECURITY VERIFIED</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: PROCESS STEPS */}
      <section id="process-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-widest font-bold text-burnt-orange font-sans">ENGINEERED DEPLOYMENT</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-dark-brown tracking-tight">
            How Navora Media Delivers Results for Bangalore Businesses
          </h2>
          <p className="text-xs sm:text-sm text-dark-brown/60 max-w-lg mx-auto font-sans">
            A methodical, milestone-driven framework engineered for optimal margin capture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-dark-brown/10 relative space-y-4 hover:border-burnt-orange/30 transition-colors shadow-sm"
            >
              <span className="font-serif text-4xl font-extrabold text-[#FF8C2A]/20 block">
                {step.num}
              </span>
              <h3 className="font-serif text-base font-bold text-dark-brown">
                {step.title}
              </h3>
              <p className="text-xs text-dark-brown/70 font-light leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section id="testimonials-panel" className="bg-white py-20 border-t border-dark-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-widest font-bold text-[#FF8C2A] font-sans">VERIFIED VOICE</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark-brown">
              What Our Bangalore Clients Say About Navora Media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[#Fbf9f6] border border-dark-brown/10 space-y-4 relative flex flex-col justify-between shadow-sm hover:border-burnt-orange/30 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-[#FF8C2A] fill-[#FF8C2A]" />
                    ))}
                  </div>
                  <p className="text-sm font-serif italic text-dark-brown/90 leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-dark-brown/10 mt-6 flex justify-between items-center">
                  <div>
                    <h5 className="font-serif font-bold text-sm text-dark-brown">{t.authorName}</h5>
                    <p className="text-[10px] text-dark-brown/50 uppercase tracking-widest font-sans">{t.authorTitle}</p>
                  </div>
                  <span className="text-[10px] text-burnt-orange font-bold font-mono">
                    {t.companyName}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: FAQ — visible on page + FAQPage schema above */}
      <section id="faq" className="max-w-3xl mx-auto px-4 pb-12 space-y-6">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest font-bold text-[#FF8C2A] font-sans">FAQ</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-brown">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What does Navora Media do?", a: "Navora Media is a performance marketing agency in Bangalore specialising in Meta Ads, Google Ads, organic SEO, and dental patient acquisition programs." },
            { q: "Does Navora Media work with dental clinics?", a: "Yes. We have a dedicated dental patient acquisition program using geo-fenced Meta Ads and Google Ads to generate qualified bookings for dental clinics in Bangalore and across India." },
            { q: "What ROAS can I expect?", a: "We deliver an average account ROAS of 5.1x across Meta and Google Ads campaigns, with a 92% average ROAS improvement within the first 45 days." },
            { q: "Where is Navora Media located?", a: "Navora Media is based in Bangalore, Karnataka, India and serves clients across Bangalore and nationally." },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-white border border-dark-brown/10 shadow-sm">
              <h3 className="font-serif font-bold text-sm text-dark-brown mb-2">{item.q}</h3>
              <p className="text-xs text-dark-brown/70 font-sans leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section id="audit-landing-cta" className="max-w-5xl mx-auto px-4 pb-20">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-burnt-orange/20 overflow-hidden text-center space-y-6 shadow-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burnt-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mx-auto w-12 h-12 rounded bg-burnt-orange/15 border border-burnt-orange/30 flex items-center justify-center text-[#FF8C2A] mb-2 animate-pulse">
            <ClipboardCheck className="w-6 h-6" />
          </div>

          <p className="text-xs uppercase tracking-widest font-bold text-[#FF8C2A] font-sans">FREE PERFORMANCE MARKETING AUDIT — BANGALORE</p>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-dark-brown tracking-tight leading-none max-w-2xl mx-auto">
            Ready to Discover Where Your Ad Spend is Leaking?
          </h2>

          <p className="text-sm text-dark-brown/75 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Our Bangalore performance marketing team reviews your campaign configurations and delivers a 12-page diagnostic report. Absolutely zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button
              onClick={openAuditModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl orange-gradient text-white font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 cursor-pointer flex items-center justify-center space-x-1.5 shadow-lg shadow-burnt-orange/25 font-sans"
            >
              <span>Get Free Custom Audit Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("audit")}
              className="text-xs font-bold text-dark-brown/70 hover:text-burnt-orange uppercase tracking-widest cursor-pointer hover:underline font-sans"
            >
              Learn More About the Audit
            </button>
          </div>

          <p className="text-[10px] text-dark-brown/40 font-sans">
            * We execute standard diagnostic checks safely under strict NDAs and privacy compliance metrics.
          </p>
        </div>
      </section>

    </div>
  );
}
