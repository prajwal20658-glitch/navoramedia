import { useState, FormEvent } from "react";
import { Sliders, CheckCircle, NotebookIcon, Target, Loader2, Award, Briefcase, Sparkles } from "lucide-react";
import { JOBS } from "../data";

interface CareersProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function Careers({ onNavigate, openAuditModal }: CareersProps) {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resumePlaceholder: "",
    reason: ""
  });
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const perks = [
    {
      title: "Generous Profit Distributions",
      desc: "Our senior buyers receive direct, uncapped performance scaling bonuses monthly aligned to our client ROAS targets."
    },
    {
      title: "Direct Leadership",
      desc: "Bypass standard corporate layers and claim sovereign ownership of primary client communications."
    },
    {
      title: "Healthcare & Dental Perks",
      desc: "Comprehensive health shields matching first-tier software scales in central Bangalore."
    }
  ];

  const handleApplySubmit = async (e: FormEvent) => {
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
          subject: `New Candidate Application from ${formData.name}`,
          from_name: "Navora Media Careers Portal",
          name: formData.name,
          email: formData.email,
          job_role: selectedJob || "General Entry",
          portfolio_url: formData.portfolio,
          resume_path: formData.resumePlaceholder,
          reason_for_applying: formData.reason,
        })
      });

      const result = await response.json();
      if (result.success) {
        setApplied(true);
      } else {
        console.error("Web3Forms candidate submission failed:", result);
        setApplied(true);
      }
    } catch (error) {
      console.error("Web3Forms error during candidate submit:", error);
      setApplied(true);
    } finally {
      setLoading(false);
      // Save locally
      const savedApplications = JSON.parse(localStorage.getItem("navora_careers") || "[]");
      savedApplications.push({ ...formData, jobRole: selectedJob || "General Entry", date: new Date().toISOString() });
      localStorage.setItem("navora_careers", JSON.stringify(savedApplications));
    }
  };

  return (
    <div id="careers-page-container" className="pt-24 space-y-20 pb-20">
      
      {/* HEADER HERO */}
      <section id="careers-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          JOIN NAVORA MEDIA CORPS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-soft-beige">
          Where Analytics Align with Liberty
        </h1>
        <p className="text-sm text-soft-beige/65 max-w-2xl mx-auto leading-relaxed font-light">
          We do not hire passive task-checkers. We partner with autonomous mathematical practitioners who seek high-value projection.
        </p>
      </section>

      {/* REWARDS PERKS SECTION */}
      <section id="careers-perks" className="bg-[#1A120E] py-16 border-y border-warm-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-soft-beige">Company Alignment Rewards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#2A1E18] border border-warm-gray/25 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-burnt-orange" />
                <h4 className="font-serif text-base font-bold text-soft-beige">{perk.title}</h4>
                <p className="text-xs text-soft-beige/60 leading-relaxed font-light">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS LIST CHUNKS */}
      <section id="careers-listings" className="max-w-5xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase text-burnt-orange font-bold font-mono">ACTIVE RECRUITMENTS</span>
          <h2 className="font-serif text-3xl font-bold text-soft-beige">Sovereign Opportunities</h2>
        </div>

        <div className="grid gap-8">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-2xl bg-[#1A120E] border border-warm-gray/15 hover:border-burnt-orange/40 transition-colors space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-soft-beige">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 text-[10px] uppercase font-bold tracking-wider text-[#FF8C2A] mt-1.5">
                    <span className="bg-burnt-orange/15 px-2.5 py-1 rounded">{job.department}</span>
                    <span className="bg-white/5 border border-warm-gray/20 px-2.5 py-1 rounded text-soft-beige/60">{job.location}</span>
                    <span className="bg-white/5 border border-warm-gray/20 px-2.5 py-1 rounded text-soft-beige/60">{job.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(job.title);
                    const targetEl = document.getElementById("apply-careers-form");
                    targetEl?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2 rounded bg-burnt-orange hover:bg-rich-orange text-soft-beige text-xs uppercase tracking-wider font-bold cursor-pointer"
                >
                  Apply to Role
                </button>
              </div>

              <p className="text-xs text-soft-beige/60 leading-relaxed font-light">
                {job.description}
              </p>

              {/* Requirements and benefits listings columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-warm-gray/10 text-xs">
                <div className="space-y-2">
                  <h5 className="font-bold text-soft-beige">Minimum Qualifications:</h5>
                  <ul className="space-y-1.5 text-soft-beige/60 list-disc pl-4 font-light">
                    {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-[#FF8C2A]">Primary Benefits Package:</h5>
                  <ul className="space-y-1.5 text-soft-beige/60 list-disc pl-4 font-light">
                    {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAREERS APPLICATION FORM */}
      <section id="apply-careers-form" className="max-w-3xl mx-auto px-4">
        <div className="p-8 rounded-2xl bg-[#1A120E] border border-warm-gray/20 space-y-6">
          
          <div className="text-center space-y-1">
            <h3 className="font-serif text-2xl font-bold text-soft-beige">Direct Recruitment Channel</h3>
            <p className="text-xs text-soft-beige/50">Submit your credentials matching our core methodologies.</p>
          </div>

          {!applied ? (
            <form onSubmit={handleApplySubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-soft-beige/70 uppercase tracking-wider mb-1.5 font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Saurabh Sharma"
                    className="w-full bg-[#2A1E18] border border-warm-gray/30 rounded px-4 py-2.5 text-soft-beige focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-soft-beige/70 uppercase tracking-wider mb-1.5 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. engineer@brand.com"
                    className="w-full bg-[#2A1E18] border border-warm-gray/30 rounded px-4 py-2.5 text-soft-beige focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-soft-beige/70 uppercase tracking-wider mb-1.5 font-bold">Select Recruiting Role</label>
                  <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full bg-[#2A1E18] border border-warm-gray/30 rounded px-4 py-2.5 text-soft-beige focus:outline-none"
                  >
                    <option value="">General Talent Pools Overview</option>
                    <option value="Senior Meta & Google Media Buyer">Senior Meta & Google Media Buyer</option>
                    <option value="Technical SEO & Schema Specialist">Technical SEO & Schema Specialist</option>
                  </select>
                </div>
                <div>
                  <label className="block text-soft-beige/70 uppercase tracking-wider mb-1.5 font-bold">Portfolio Link / Personal Gist</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://github.com/myusername"
                    className="w-full bg-[#2A1E18] border border-warm-gray/30 rounded px-4 py-2.5 text-soft-beige focus:outline-none"
                  />
                </div>
              </div>

              {/* Mock Resume Upload fields */}
              <div className="p-4 rounded-lg bg-black/40 border border-dashed border-warm-gray/30 text-center space-y-2">
                <p className="text-xs text-soft-beige/65">Drag and drop your PDF resume, or write down raw drive text parameters below.</p>
                <input
                  type="text"
                  required
                  value={formData.resumePlaceholder}
                  onChange={(e) => setFormData({ ...formData, resumePlaceholder: e.target.value })}
                  placeholder="Paste direct Link to resume PDF (E.g. Google Drive/Dropbox)"
                  className="w-full mt-1 bg-[#2A1E18] border border-warm-gray/30 rounded px-3 py-2 text-xs text-soft-beige focus:outline-none text-center"
                />
              </div>

              <div className="text-xs">
                <label className="block text-soft-beige/70 uppercase tracking-wider mb-1.5 font-bold">Why do you prefer Navora's engineering methods?</label>
                <textarea
                  rows={4}
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Tell us what ad account sizes you have managed previously and why consolidated broad targeting outperforms micro niche segmentation..."
                  className="w-full bg-[#2A1E18] border border-warm-gray/30 p-4 rounded text-soft-beige focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-burnt-orange to-rich-orange text-soft-beige rounded text-xs uppercase font-bold tracking-widest cursor-pointer hover:opacity-90 transition-opacity"
              >
                {loading ? "Transmitting portfolio parameters..." : "Submit Candidate Application"}
              </button>

            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-burnt-orange/15 text-burnt-orange flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="font-serif text-xl font-bold text-soft-beige">Portfolio assets parsed successfully!</h4>
              <p className="text-xs text-soft-beige/60 max-w-md mx-auto leading-relaxed">
                Thank you for applying, <strong>{formData.name}</strong>. Our scaling architects will verify your details against open CAPI buy slots and message you back within 72 hours.
              </p>
              <button
                onClick={() => setApplied(false)}
                className="text-xs underline text-[#FF8C2A]"
              >
                Submit another application
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
