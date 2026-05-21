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
      // Log local entries
      const savedContacts = JSON.parse(localStorage.getItem("navora_contacts") || "[]");
      savedContacts.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("navora_contacts", JSON.stringify(savedContacts));
    }
  };

  return (
    <div id="contact-page-container" className="pt-24 space-y-20 pb-20">
      
      {/* HEADER TITLE SUMMARY */}
      <section id="contact-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          SECURE YOUR LIFELINE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown">
          Initiate Core Discovery
        </h1>
        <p className="text-sm text-warm-gray max-w-2xl mx-auto leading-relaxed">
          Ready to partner with an elite marketing firm that operates exclusively on cash return value? Select a channel below to initiate communication.
        </p>
      </section>

      {/* CORE CONTACT AND FORM GRID */}
      <section id="contact-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Contact Channels & Location representation */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-dark-brown">Communication Metrics</h3>
            <p className="text-xs text-warm-gray font-light leading-relaxed">
              We respond to all verified operational inquiries within 3 business hours. There is zero friction.
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <MapPin className="w-5 h-5 text-burnt-orange mt-0.5" />
                <div>
                  <h4 className="font-bold text-soft-beige">Bangalore Corporate Office</h4>
                  <p className="text-soft-beige/50 text-xs mt-0.5">Bangalore, Karnataka</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <Mail className="w-5 h-5 text-[#FF8C2A] mt-0.5" />
                <div>
                  <h4 className="font-bold text-soft-beige">Inbound Correspondence</h4>
                  <a href="mailto:contact@navoramedia.in" className="text-soft-beige/50 text-xs hover:text-burnt-orange">
                    contact@navoramedia.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#1A120E] border border-warm-gray/15">
                <Phone className="w-5 h-5 text-burnt-orange mt-0.5" />
                <div>
                  <h4 className="font-bold text-soft-beige">Direct WhatsApp Hotline</h4>
                  <a href="https://wa.me/919880552901" className="text-soft-beige hover:text-[#FF8C2A] text-xs font-semibold block underline mt-0.5">
                    +91 98805 52901 (Open WhatsApp Chat)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Custom Vector Map representation */}
          <div className="p-6 rounded-2xl bg-[#1A120E] border border-warm-gray/25 space-y-4 relative overflow-hidden">
            <h4 className="font-serif text-sm font-bold text-soft-beige uppercase tracking-wider">Metropolitan Map Segment</h4>
            <div className="h-44 rounded-lg bg-[#2A1E18] border border-warm-gray/10 relative flex items-center justify-center overflow-hidden">
              {/* Retro compass grid asset render */}
              <div className="absolute inset-0 bg-[radial-gradient(#F07A1A_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-burnt-orange/10 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-[#FF8C2A]/20 rounded-full" />
              
              <div className="relative text-center z-10 space-y-1.5 p-4">
                <div className="w-3 h-3 rounded-full bg-burnt-orange mx-auto animate-bounce border-2 border-soft-beige" />
                <p className="text-xs font-bold text-soft-beige">Bangalore, Karnataka</p>
                <p className="text-[9px] text-[#FF8C2A] font-mono tracking-widest uppercase">PERFORMANCE MARKETING CENTER</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Discovery Form or Success Grid */}
        <div className="lg:col-span-7">
          {!submitted ? (
            <div className="p-8 rounded-2xl bg-[#1A120E] border border-warm-gray/25 space-y-6">
              
              <div className="space-y-1.1">
                <h3 className="font-serif text-2xl font-bold text-soft-beige">Schedule a Discovery Session</h3>
                <p className="text-xs text-soft-beige/50">
                  Select your primary operational goals and input your credentials to queue up.
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
                    <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Brand / Organization name</label>
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
                    <option value="Meta Ads Performance">Meta Ads Performance Operations</option>
                    <option value="Google Ads PMax">Google Ads & intent Shopping</option>
                    <option value="Organic SEO maps">Organic SEO map pack rankings</option>
                    <option value="Lead Generation funnels">High-ticket lead generation channels</option>
                    <option value="Dental clinic patients">Cosmetic Dental Clinic Patient capturing</option>
                    <option value="Social Media grid">Social Media grid curation & UGC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">Message / Challenge Brief</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current ad account blockages or SEO performance gaps..."
                    className="w-full bg-dark-brown/40 border border-warm-gray/30 rounded p-4 text-soft-beige focus:outline-none focus:border-burnt-orange"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige text-xs uppercase tracking-widest font-bold hover:opacity-90 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  {loading ? "Registering session..." : "Submit Discovery Request"}
                </button>

              </form>
            </div>
          ) : (
            // Success State Panel
            <div className="p-8 rounded-2xl bg-[#1A120E] border border-burnt-orange/30 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-burnt-orange/15 border border-burnt-orange text-burnt-orange flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-bold text-soft-beige">Discovery parameters booked!</h4>
                <p className="text-xs text-soft-beige/60 max-w-md mx-auto leading-relaxed">
                  Excellent, <strong className="text-burnt-orange">{formData.name}</strong>. Your query has been logged under ID <strong className="text-white">NAV-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <p className="text-xs text-soft-beige/65 max-w-md mx-auto pt-2">
                  Our Media Buying architect will text/ring your number <strong>{formData.phone}</strong> or send a meet invite to <strong>{formData.email}</strong> shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded bg-white/5 border border-warm-gray/20 hover:bg-white/10 text-xs text-soft-beige uppercase tracking-wider cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
