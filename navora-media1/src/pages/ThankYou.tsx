import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Calendar, Mail, Phone } from "lucide-react";

interface ThankYouProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function ThankYou({ onNavigate, openAuditModal }: ThankYouProps) {
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadWebsite, setLeadWebsite] = useState("");

  useEffect(() => {
    // Pull lead data written by FreeAudit.tsx before navigating here
    const name    = sessionStorage.getItem("navora_lead_name")    || "";
    const email   = sessionStorage.getItem("navora_lead_email")   || "";
    const website = sessionStorage.getItem("navora_lead_website") || "";
    setLeadName(name);
    setLeadEmail(email);
    setLeadWebsite(website);

    // Clear so a page refresh doesn't re-show stale data
    sessionStorage.removeItem("navora_lead_name");
    sessionStorage.removeItem("navora_lead_email");
    sessionStorage.removeItem("navora_lead_website");

    // ── GA4 Lead Conversion Event ─────────────────────────────
    // Fires on every visit to this page — use this in GA4 as your
    // "Lead" goal, or create a GTM trigger on page_path = /audit-thanks
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "generate_lead", {
        event_category: "audit_form",
        event_label: "free_audit_request",
      });
    }

    // ── Meta Pixel Lead Event ─────────────────────────────────
    // Uncomment once your Meta Pixel is installed site-wide
    // if (typeof (window as any).fbq === "function") {
    //   (window as any).fbq("track", "Lead");
    // }
  }, []);

  const firstName = leadName ? leadName.split(" ")[0] : "";

  const nextSteps = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "WhatsApp / Call Within 2 Hours",
      desc: "A senior strategist will reach out to confirm your audit scope. No spam, no sales scripts."
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "12-Page Blueprint to Your Inbox",
      desc: `Your full diagnostic PDF lands at ${leadEmail || "your inbox"} within 24 hours with annotated screenshots and a ranked fix list.`
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      title: "30-Minute Strategy Walkthrough",
      desc: "We book a call to walk through every finding — no pressure, no pitch deck."
    }
  ];

  const stats = [
    { num: "5.1×", label: "Average Account ROAS" },
    { num: "400%", label: "YoY Compound Scaling" },
    { num: "DR 78", label: "SEO Target Authority" },
    { num: "182+", label: "Dental Patient Bookings" },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Helmet>
        <title>Audit Requested — We're On It | Navora Media</title>
        <meta name="description" content="Your free performance audit request has been received. Navora Media's growth team will deliver your 12-page diagnostic blueprint within 24 hours." />
        {/* Tell crawlers not to index the thank-you page */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative max-w-3xl mx-auto px-4 text-center space-y-6 py-16">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-burnt-orange/5 rounded-full blur-3xl pointer-events-none" />

        {/* Animated check */}
        <div className="relative mx-auto w-20 h-20 rounded-full bg-burnt-orange/10 border border-burnt-orange/30 flex items-center justify-center animate-[popIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)_both]">
          <CheckCircle className="w-9 h-9 text-burnt-orange" strokeWidth={1.8} />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border border-burnt-orange/20 animate-ping" />
        </div>

        {/* Badge */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A] bg-burnt-orange/10 px-3 py-1 rounded inline-flex items-center gap-1 font-sans">
          ✦ Audit Request Confirmed
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-dark-brown leading-tight">
          {firstName ? (
            <>Your Blueprint Is Being Built,{" "}<span className="text-burnt-orange">{firstName}</span></>
          ) : (
            <>Your Blueprint Is{" "}<span className="text-burnt-orange">Being Built</span></>
          )}
        </h1>

        <p className="text-sm sm:text-base text-dark-brown/65 max-w-xl mx-auto leading-relaxed font-light font-sans">
          Our growth architects have received your request and are beginning a read-only crawl of{" "}
          {leadWebsite ? (
            <strong className="text-dark-brown/80 font-semibold">{leadWebsite}</strong>
          ) : (
            "your digital properties"
          )}
          . Expect your 12-page diagnostic within 24 hours.
        </p>
      </section>

      {/* ── TIMELINE ── */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Connecting line — visible on sm+ */}
          <div className="hidden sm:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-burnt-orange/30 to-transparent" />

          {[
            { emoji: "📥", label: "Request Received",   sub: "Details logged" },
            { emoji: "🔍", label: "Audit Underway",     sub: "Read-only crawl" },
            { emoji: "📊", label: "Blueprint Compiled", sub: "24-hour delivery" },
            { emoji: "🚀", label: "Strategy Call",      sub: "Walk through wins" },
          ].map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center gap-2 relative z-10">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl
                ${idx === 0
                  ? "bg-burnt-orange/15 border-2 border-burnt-orange"
                  : "bg-[#Fbf9f6] border border-dark-brown/10"
                }`}>
                {step.emoji}
              </div>
              <p className="text-xs font-bold text-dark-brown font-sans">{step.label}</p>
              <p className="text-[10px] text-dark-brown/50 font-sans">{step.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-[#Fbf9f6] border border-dark-brown/10 rounded-2xl p-8 shadow-sm space-y-6">
          <span className="text-[10px] uppercase font-bold text-[#FF8C2A] tracking-wider font-sans">
            What Happens Next
          </span>

          <div className="space-y-5">
            {nextSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-burnt-orange/10 border border-burnt-orange/20 flex items-center justify-center text-burnt-orange flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark-brown">{step.title}</h4>
                  <p className="text-xs text-dark-brown/60 mt-0.5 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-[#Fbf9f6] border border-dark-brown/10 rounded-xl p-4 text-center">
              <p className="font-serif text-2xl font-bold text-burnt-orange">{s.num}</p>
              <p className="text-[10px] text-dark-brown/55 uppercase tracking-wide font-sans mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ROW ── */}
      <section className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onNavigate("case-studies")}
          className="inline-flex items-center justify-center gap-2 orange-gradient text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded font-sans"
        >
          Explore Case Studies <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="inline-flex items-center justify-center gap-2 bg-transparent border border-dark-brown/20 text-dark-brown/70 hover:border-dark-brown/40 hover:text-dark-brown text-xs font-bold uppercase tracking-widest px-6 py-3 rounded transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </section>
    </div>
  );
}
