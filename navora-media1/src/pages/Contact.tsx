import { Helmet } from 'react-helmet-async';
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle, Clock, Calendar, ArrowRight, Instagram } from "lucide-react";

interface ContactProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Contact({ onNavigate, openAuditModal }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    needs: "Meta Ads Performance",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
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
          subject: `New Discovery Session Request from ${formData.name}`,
          from_name: "Navora Media Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          needs: formData.needs,
          message: formData.message,
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
      const savedContacts = JSON.parse(localStorage.getItem("navora_contacts") || "[]");
      savedContacts.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("navora_contacts", JSON.stringify(savedContacts));
    }
  };

  // ── Contact Page Schema ──
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Navora Media — Performance Marketing Agency Bangalore",
    "description": "Contact Navora Media, Bangalore's leading performance marketing agency. Get a free audit for Meta Ads, Google Ads, SEO and dental patient acquisition.",
    "url": "https://navoramedia.in/contact"
  };

  // ── LocalBusiness Schema with full NAP (Name Address Phone) ──
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Navora Media",
    "description": "Performance marketing agency in Bangalore specialising in Meta Ads, Google Ads, SEO and dental patient acquisition.",
    "url": "https://navoramedia.in",
    "telephone": "+919880552901",
    "email": "contact@navoramedia.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": "Bangalore",
    "sameAs": [
      "https://www.linkedin.com/company/navoramedia",
      "https://www.instagram.com/navoramedia"
    ]
  };

  return (
    <div id="contact-page-container" className="pt-24 space-y-20 pb-20">
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>Contact Navora Media | Performance Marketing Agency Bangalore</title>
        <meta name="description" content="Contact Navora Media — Bangalore's leading performance marketing agency. Get a free audit for Meta Ads, Google Ads, SEO and dental patient acquisition. Call +91 98805 52901." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://navoramedia.in/contact" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Navora Media" />
        <meta property="og:title" content="Contact Navora Media | Performance Marketing Agency Bangalore" />
        <meta property="og:description" content="Get in touch with Navora Media — Bangalore's leading performance marketing agency. Free audit available for Meta Ads, Google Ads, SEO and dental patient acquisition." />
        <meta property="og:image" content="https://navoramedia.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Navora Media – Performance Marketing Agency Bangalore" />
        <meta property="og:url" content="https://navoramedia.in/contact" />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@navoramedia" />
        <meta name="twitter:title" content="Contact Navora Media | Performance Marketing Agency Bangalore" />
        <meta name="twitter:description" content="Get in touch with Navora Media — Bangalore's leading performance marketing agency. Free audit for Meta Ads, Google Ads & SEO." />
        <meta name="twitter:image" content="https://navoramedia.in/og-image.jpg" />

        {/* ── Schemas ── */}
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      
      {/* HEADER */}
      <section id="contact-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          GET IN TOUCH — BANGALORE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown">
          Contact Navora Media — Performance Marketing Agency Bangalore
        </h1>
        <p className="text-sm text-warm-gray max-w-2xl mx-auto leading-relaxed">
          Ready to partner with Bangalore's leading performance marketing agency? Contact us for a free audit covering Meta Ads, Google Ads, SEO, and dental patient acquisition.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section id="contact-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-dark-brown">Reach Navora Media</h2>
            <p className="text-xs text-warm-gray font-light leading-relaxed">
              We respond to all verified operational inquiries within 3 business hours. There is zero friction.
            </p>

            {/* NAP block — critical for local SEO */}
            <div className="space-y-4 text-xs sm:text-sm">

              {/* Address */}
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <MapPin className="w-5 h-5 text-burnt-orange mt-0.5" />
                <div>
                  <h3 className="font-bold text-soft-beige">Navora Media — Bangalore Office</h3>
                  <address className="text-soft-beige/50 text-xs mt-0.5 not-italic">
                    Bangalore, Karnataka, India — 560001
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <Mail className="w-5 h-5 text-[#FF8C2A] mt-0.5" />
                <div>
                  <h3 className="font-bold text-soft-beige">Email Navora Media</h3>
                  <a
                    href="mailto:contact@navoramedia.in"
                    className="text-soft-beige/50 text-xs hover:text-burnt-orange"
                    aria-label="Email Navora Media"
                  >
                    contact@navoramedia.in
                  </a>
                </div>
              </div>

              {/* Phone — critical for local SEO */}
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <Phone className="w-5 h-5 text-burnt-orange mt-0.5" />
                <div>
                  <h3 className="font-bold text-soft-beige">Call or WhatsApp Navora Media</h3>
                  <a
                    href="tel:+919880552901"
                    className="text-soft-beige text-xs font-semibold block mt-0.5 hover:text-[#FF8C2A]"
                    aria-label="Call Navora Media Bangalore"
                  >
                    +91 98805 52901
                  </a>
                  <a
                    href="https://wa.me/919880552901"
                    className="text-soft-beige/50 hover:text-[#FF8C2A] text-xs underline mt-0.5 block"
                    aria-label="WhatsApp Navora Media"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp Chat →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Map visual */}
          <div className="p-6 rounded-2xl bg-[#1A120E] border border-warm-gray/25 space-y-4 relative overflow-hidden">
            <h3 className="font-serif text-sm font-bold text-soft-beige uppercase tracking-wider">
              Navora Media — Bangalore, Karnataka
            </h3>
            <div className="h-44 rounded-lg bg-[#2A1E18] border border-warm-gray/10 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#F07A1A_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-burnt-orange/10 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-[#FF8C2A]/20 rounded-full" />
              <div className="relative text-center z-10 space-y-1.5 p-4">
                <div className="w-3 h-3 rounded-full bg-burnt-orange mx-auto animate-bounce border-2 border-soft-beige" />
                <p className="text-xs font-bold text-soft-beige">Bangalore, Karnataka — 560001</p>
                <p className="text-[9px] text-[#FF8C2A] font-mono tracking-widest uppercase">Performance Marketing Agency</p>
              </div>
            </div>
          </div>

          {/* Services listed for keyword coverage */}
          <div className="p-5 rounded-xl bg-[#1A120E] border border-warm-gray/15 space-y-3">
            <h3 className="font-serif text-sm font-bold text-soft-beige">Our Services in Bangalore</h3>
            <ul className="space-y-1.5">
              {[
                "Meta Ads Agency — Bangalore",
                "Google Ads Agency — Bangalore",
                "SEO Agency — Bangalore",
                "Dental Marketing Agency — Bangalore",
                "Performance Marketing — Bangalore",
                "Lead Generation Agency — Bangalore",
              ].map((s) => (
                <li key={s} className="text-xs text-soft-beige/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          {!submitted ? (
            <div className="p-8 rounded-2xl bg-[#1A120E] border border-warm-gray/25 space-y-6">
              
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-bold text-soft-beige">
                  Book a Free Performance Marketing Audit
                </h2>
                <p className="text-xs text-soft-beige/50">
                  Tell us about your business and a Navora Media strategist in Bangalore will get back to you within 3 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.g. Saurabh Sharma"
                      className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded px-4 py-2 text-soft-beige focus:outline-none focus:border-burnt-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.g. ceo@brand.com"
                      className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded px-4 py-2 text-soft-beige focus:outline-none focus:border-burnt-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98805 52901"
                      className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded px-4 py-2 text-soft-beige focus:outline-none focus:border-burnt-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Brand / Organisation Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="E.g. Aura Styles Corp"
                      className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded px-4 py-2 text-soft-beige focus:outline-none focus:border-burnt-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Primary Service Required</label>
                  <select
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded px-4 py-2 text-soft-beige focus:outline-none focus:border-burnt-orange text-xs"
                  >
                    <option value="Meta Ads Performance">Meta Ads Agency — Bangalore</option>
                    <option value="Google Ads PMax">Google Ads Agency — Bangalore</option>
                    <option value="Organic SEO maps">SEO Agency — Bangalore</option>
                    <option value="Lead Generation funnels">Lead Generation — Bangalore</option>
                    <option value="Dental clinic patients">Dental Marketing Agency — Bangalore</option>
                    <option value="Social Media grid">Social Media Management — Bangalore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Message / Challenge Brief</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current marketing challenges or what you're looking to achieve..."
                    className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded p-4 text-soft-beige focus:outline-none focus:border-burnt-orange"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige text-xs uppercase tracking-widest font-bold hover:opacity-90 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  {loading ? "Submitting..." : "Book Free Audit — Navora Media Bangalore"}
                </button>

              </form>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#1A120E] border border-burnt-orange/30 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-burnt-orange/15 border border-burnt-orange text-burnt-orange flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-soft-beige">Request Received!</h3>
                <p className="text-xs text-soft-beige/60 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-burnt-orange">{formData.name}</strong>. Your query has been logged under ID <strong className="text-white">NAV-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <p className="text-xs text-soft-beige/65 max-w-md mx-auto pt-2">
                  Our Navora Media team will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 3 business hours.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded bg-white/5 border border-warm-gray/20 hover:bg-white/10 text-xs text-soft-beige uppercase tracking-wider cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
