import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { ClipboardCheck, Target, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface FreeAuditProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function FreeAudit({ onNavigate, openAuditModal }: FreeAuditProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    spend: "Within $2,000 - $5,000"
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "84137ac1-49f5-483c-9bda-726678ff051b",
          subject: `New Free Audit Request from ${formData.name}`,
          from_name: "Navora Media Website",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          spend: formData.spend,
          company: "Audit Landing Page",
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Web3Forms submission failed:", result);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
      // Save custom data
      const savedAudits = JSON.parse(localStorage.getItem("navora_audits") || "[]");
      savedAudits.push({ ...formData, company: "Audit Page", phone: "N/A", challenges: [], date: new Date().toISOString() });
      localStorage.setItem("navora_audits", JSON.stringify(savedAudits));
    }
  };

  const benefits = [
    {
      title: "CAPI Verification Audit",
      desc: "Our analytics scripts run safe cross-checks on your server parameters to trace browser leakage and pixel blocking ratios."
    },
    {
      title: "Negative Keyword Reconnaissance",
      desc: "Uncover which broad matches are wasting Google search budgets on irrelevant user queries."
    },
    {
      title: "Competitor Topic Cluster Crawls",
      desc: "We parse rival SaaS or local dental clinic indexes to locate exactly which orthodontic terms they are capturing free traffic on."
    }
  ];

  return (
    <div id="free-audit-landing-container" className="pt-24 space-y-20 pb-20">
      <Helmet>
  <title>Free Marketing Audit | Navora Media Bangalore</title>
  <meta name="description" content="Get a free 12-page marketing audit from Navora Media. We analyse your Meta Ads, Google Ads and SEO and deliver actionable insights. No obligation." />
</Helmet>
      
      {/* LANDING TITLE HERO */}
      <section className="relative py-12 max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-burnt-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A] bg-burnt-orange/10 px-3 py-1 rounded inline-flex items-center gap-1 font-sans">
          <Sparkles className="w-4.5 h-4.5" /> FREE AUDITING BLUEPRINT
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown leading-tight max-w-4xl mx-auto">
          We Review Your Meta, Google Ads & SEO—Totally Complimentary
        </h1>

        <p className="text-sm sm:text-base text-dark-brown/70 max-w-2xl mx-auto leading-relaxed font-light font-sans">
          Stop throwing budgets at unprimed pixels. Submit your business link. Our Bangalore growth teams analyze checkout paths and Maps Pack vectors, delivering a 12-page static diagnostic report.
        </p>
      </section>

      {/* CORE BENEFITS VS MINI CAPTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Detail list */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="font-serif text-3xl font-bold text-dark-brown">
            What Our 12-Page Analysis Reveals
          </h2>
          <p className="text-xs text-dark-brown/60 font-sans">
            We perform non-invasive read-only crawls. No access keys required. You receive actionable advice.
          </p>

          <div className="space-y-6">
            {benefits.map((ben, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <span className="w-8 h-8 rounded bg-burnt-orange/15 text-burnt-orange flex items-center justify-center font-serif font-extrabold flex-shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-serif text-base font-bold text-dark-brown">{ben.title}</h4>
                  <p className="text-xs text-dark-brown/60 mt-0.5 leading-relaxed font-light font-sans">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Inline Lead Form */}
        <div className="lg:col-span-12 xl:col-span-5 bg-[#Fbf9f6] p-8 rounded-2xl border border-dark-brown/10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF8C2A]/5 rounded-full blur-2xl pointer-events-none" />
          
          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#FF8C2A] tracking-wider font-sans">Fast-Track Entry</span>
                <h3 className="font-serif text-xl font-bold text-dark-brown">Unlock My Diagnostics</h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-xs font-sans"
              >
                <div>
                  <label className="block text-dark-brown/70 uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Saurabh Sharma"
                    className="w-full bg-white border border-dark-brown/15 rounded px-3 py-2 text-dark-brown focus:outline-none focus:border-burnt-orange"
                  />
                </div>

                <div>
                  <label className="block text-dark-brown/70 uppercase tracking-wider mb-1">Business Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ceo@brand.com"
                    className="w-full bg-white border border-dark-brown/15 rounded px-3 py-2 text-dark-brown focus:outline-none focus:border-burnt-orange"
                  />
                </div>

                <div>
                  <label className="block text-dark-brown/70 uppercase tracking-wider mb-1">Brand URL / Clinic website</label>
                  <input
                    type="url"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://brand.com"
                    className="w-full bg-white border border-dark-brown/15 rounded px-3 py-2 text-dark-brown focus:outline-none focus:border-burnt-orange"
                  />
                </div>

                <div>
                  <label className="block text-dark-brown/70 uppercase tracking-wider mb-1">Current Ad Spend Tier</label>
                  <select
                    value={formData.spend}
                    onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                    className="w-full bg-white border border-dark-brown/15 rounded px-3 py-2 text-dark-brown text-xs focus:outline-none focus:border-burnt-orange"
                  >
                    <option value="<$2,000">Less than $2,000 / month</option>
                    <option value="Within $2,000 - $5,000">$2,000 - $5,000 / month</option>
                    <option value="Within $5,000 - $15,000">$5,000 - $15,000 / month</option>
                    <option value="$15,000+">$15,000+ / month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-center orange-gradient py-3 rounded text-white uppercase tracking-widest font-bold cursor-pointer font-sans disabled:opacity-50"
                >
                  {loading ? "Analysing Assets..." : "Generate Free Custom Audit Report"}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4 font-sans">
              <div className="w-12 h-12 rounded-full bg-burnt-orange/15 text-burnt-orange flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-dark-brown">Audit Request Queued!</h3>
              <p className="text-xs text-dark-brown/70 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our diagnostic crawl on <strong>{formData.website}</strong> has been safely scheduled. Keep an eye on <strong>{formData.email}</strong> for our 12-page custom visual PDF.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs underline text-[#FF8C2A] cursor-pointer"
              >
                Request another report
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
