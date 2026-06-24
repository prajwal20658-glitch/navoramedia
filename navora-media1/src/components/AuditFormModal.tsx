import { useState, FormEvent } from "react";
import { X, Target, ArrowRight, Loader } from "lucide-react";

interface AuditFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void; // ← NEW
}

export default function AuditFormModal({ isOpen, onClose, onNavigate }: AuditFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    spend: "$5,000 - $15,000",
    phone: "",
    challenges: [] as string[]
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const challengeOptions = [
    "Unsatisfactory Meta ROAS",
    "High Google Ads Cost-Per-Click",
    "Underperforming Search Engine Rankings",
    "Poor Patient Appointment Booking Ratios",
    "Creative Fatiguing & Lack of UGC Assets",
    "Inadequate CRM Pipeline automation"
  ];

  const handleChallengeToggle = (opt: string) => {
    if (formData.challenges.includes(opt)) {
      setFormData({ ...formData, challenges: formData.challenges.filter((c) => c !== opt) });
    } else {
      setFormData({ ...formData, challenges: [...formData.challenges, opt] });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "84137ac1-49f5-483c-9bda-726678ff051b",
          subject: `New Diagnostic Audit Request from ${formData.name}`,
          from_name: "Navora Media Diagnostics",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          spend: formData.spend,
          challenges: formData.challenges.join(", "),
        })
      });

      const result = await response.json();
      if (!result.success) {
        console.error("Web3Forms submission failed:", result);
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
    } finally {
      setLoading(false);

      // Persist locally
      const savedAudits = JSON.parse(localStorage.getItem("navora_audits") || "[]");
      savedAudits.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("navora_audits", JSON.stringify(savedAudits));

      // Pass lead data to ThankYou page
      sessionStorage.setItem("navora_lead_name", formData.name);
      sessionStorage.setItem("navora_lead_email", formData.email);
      sessionStorage.setItem("navora_lead_website", formData.company);

      // Close modal then navigate to dedicated thank-you page
      onClose();
      onNavigate("audit-thanks");
    }
  };

  return (
    <div
      id="audit-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-brown/80 backdrop-blur-md overflow-y-auto"
    >
      <div
        id="audit-modal-content"
        className="relative w-full max-w-2xl rounded-2xl bg-dark-brown border border-warm-gray/30 p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Soft background glow effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-burnt-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF8C2A]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header bar */}
        <div className="relative flex justify-between items-start mb-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#FF8C2A]/10 text-[#FFFFCA] border border-[#FF8C2A]/20 text-[10px] uppercase font-bold tracking-widest mb-3">
              <Target className="w-3 h-3 text-[#FF8C2A]" />
              <span>Complimentary Analysis Blueprint</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-soft-beige">
              Request Your Performance Audit
            </h3>
            <p className="text-xs text-soft-beige/50 mt-1">
              Our growth architects parse your assets, conversion leaks, and maps rankings.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-soft-beige hover:text-burnt-orange transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="E.g. Saurabh Sharma"
                  className="w-full bg-[#1A120E] border border-warm-gray/30 rounded-lg px-4 py-2.5 text-sm text-soft-beige focus:border-[#FF8C2A] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">
                  Work Email <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E.g. ceo@brand.com"
                  className="w-full bg-[#1A120E] border border-warm-gray/30 rounded-lg px-4 py-2.5 text-sm text-soft-beige focus:border-[#FF8C2A] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">
                  Brand Name / Clinic Name <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="E.g. Navora Dental Clinic"
                  className="w-full bg-[#1A120E] border border-warm-gray/30 rounded-lg px-4 py-2.5 text-sm text-soft-beige focus:border-[#FF8C2A] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98805 52901"
                  className="w-full bg-[#1A120E] border border-warm-gray/30 rounded-lg px-4 py-2.5 text-sm text-soft-beige focus:border-[#FF8C2A] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-1.5">
                Monthly Paid Traffic Spend
              </label>
              <select
                value={formData.spend}
                onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                className="w-full bg-[#1A120E] border border-warm-gray/30 rounded-lg px-4 py-2.5 text-sm text-soft-beige focus:border-[#FF8C2A] focus:outline-none transition-colors"
              >
                <option value="<$2,000">Less than $2,000 / month</option>
                <option value="$2,000 - $5,000">$2,000 - $5,000 / month</option>
                <option value="$5,000 - $15,000">$5,000 - $15,000 / month</option>
                <option value="$15,000 - $50,000">$15,000 - $50,000 / month</option>
                <option value="$50,000+">$50,000+ / month</option>
              </select>
            </div>

            {/* Challenges */}
            <div>
              <label className="block text-xs font-semibold text-soft-beige/70 uppercase tracking-wider mb-2">
                Select Primary Channel Challenges (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {challengeOptions.map((opt) => {
                  const isChecked = formData.challenges.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleChallengeToggle(opt)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors cursor-pointer flex items-center space-x-2 ${
                        isChecked
                          ? "border-[#FF8C2A] bg-burnt-orange/15 text-soft-beige font-semibold"
                          : "border-warm-gray/20 bg-white/5 text-soft-beige/60 hover:border-warm-gray/40 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] font-bold ${
                          isChecked
                            ? "border-[#FF8C2A] bg-burnt-orange text-soft-beige"
                            : "border-warm-gray/30"
                        }`}
                      >
                        {isChecked && "✓"}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-[10px] text-soft-beige/40">
              Safe Handling Guard: By submitting, you grant permission to Navora Media performance analysts to perform read-only SEO crawls on your business address. No settings are modified.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-burnt-orange/25 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin text-soft-beige" />
                  <span>Processing Analytics Assets...</span>
                </>
              ) : (
                <>
                  <span>Generate Free Custom Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

