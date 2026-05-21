import { useState } from "react";
import { Shield, FileText } from "lucide-react";

interface LegalProps {
  initialTab?: "privacy" | "terms";
  onNavigate: (path: string) => void;
}

export default function Legal({ initialTab = "privacy", onNavigate }: LegalProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  return (
    <div id="legal-page-container" className="pt-24 space-y-12 pb-20 max-w-4xl mx-auto px-4">
      
      {/* SELECTION TABS */}
      <section className="flex justify-center space-x-4 border-b border-dark-brown/10 pb-4 pt-10">
        <button
          onClick={() => setActiveTab("privacy")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer font-sans ${
            activeTab === "privacy"
              ? "orange-gradient text-white shadow-sm"
              : "bg-white border border-dark-brown/15 text-dark-brown/60 hover:text-dark-brown hover:bg-[#Fbf9f6]"
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>Privacy Policy</span>
        </button>

        <button
          onClick={() => setActiveTab("terms")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer font-sans ${
            activeTab === "terms"
              ? "orange-gradient text-white shadow-sm"
              : "bg-white border border-dark-brown/15 text-dark-brown/60 hover:text-dark-brown hover:bg-[#Fbf9f6]"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Terms & Conditions</span>
        </button>
      </section>

      {/* DETAILED CONTENT SECTION */}
      {activeTab === "privacy" ? (
        // PRIVACY CONTENT (EXACT CONTENT PROVIDED BY USER)
        <div id="privacy-section" className="space-y-6 text-sm text-dark-brown/80 font-sans font-light leading-relaxed">
          <h2 className="font-serif text-3xl font-bold text-dark-brown">Privacy Policy</h2>
          <p className="text-xs text-dark-brown/50">Last Updated: May 2026</p>

          <p>
            Welcome to Navora Media (“Company,” “we,” “our,” or “us”). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p>
            By accessing this website, you agree to the terms of this Privacy Policy.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Information We Collect
          </h3>
          <div className="space-y-3">
            <h4 className="font-bold text-dark-brown text-sm">Personal Information</h4>
            <p>When you fill out forms on our website, contact us, or request services, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Business Name</li>
              <li>Marketing Budget Information</li>
              <li>Any information you voluntarily provide</li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-dark-brown text-sm">Automatically Collected Information</h4>
            <p>We may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage data</li>
              <li>Pages visited</li>
              <li>Referral source</li>
              <li>Cookies and analytics data</li>
            </ul>
          </div>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            How We Use Your Information
          </h3>
          <p>We use the information collected to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
            <li>Provide marketing services</li>
            <li>Respond to inquiries</li>
            <li>Improve website performance</li>
            <li>Analyze website traffic</li>
            <li>Send updates or promotional communication</li>
            <li>Improve customer experience</li>
            <li>Run advertising and remarketing campaigns</li>
            <li>Deliver requested audits or consultations</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Cookies & Tracking Technologies
          </h3>
          <p>Our website may use:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
            <li>Cookies</li>
            <li>Google Analytics</li>
            <li>Meta Pixel</li>
            <li>Tracking technologies</li>
            <li>Conversion tracking tools</li>
          </ul>
          <p>These tools help us understand website performance and improve user experience.</p>
          <p>You may disable cookies through your browser settings.</p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Third-Party Services
          </h3>
          <p>We may use third-party services including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
            <li>Google Analytics</li>
            <li>Meta/Facebook Advertising</li>
            <li>Google Ads</li>
            <li>Calendly</li>
            <li>Email marketing platforms</li>
            <li>CRM systems</li>
          </ul>
          <p>These third parties may collect and process your information according to their own privacy policies.</p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Data Sharing
          </h3>
          <p>We do not sell, trade, or rent your personal information.</p>
          <p>We may share information with trusted service providers who assist in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
            <li>Website hosting</li>
            <li>Analytics</li>
            <li>Advertising</li>
            <li>CRM management</li>
            <li>Communication services</li>
          </ul>
          <p>Information may also be disclosed if required by law.</p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Data Security
          </h3>
          <p>
            We implement appropriate security measures to protect your information from unauthorized access, disclosure, or misuse.
          </p>
          <p>
            However, no online transmission or storage system is guaranteed to be 100% secure.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Your Rights
          </h3>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-dark-brown/70">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>To request any changes, contact us using the details below.</p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            External Links
          </h3>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Children’s Privacy
          </h3>
          <p>
            Our services are not directed toward individuals under the age of 13. We do not knowingly collect information from children.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Changes to This Privacy Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">
            Contact Information
          </h3>
          <div className="p-4 rounded-xl bg-[#Fbf9f6] border border-dark-brown/10 text-xs text-dark-brown/70 space-y-1">
            <p className="font-bold text-dark-brown text-sm">Navora Media</p>
            <p>Email: <a href="mailto:owner@navoramedia.in" className="text-burnt-orange hover:underline font-semibold">owner@navoramedia.in</a></p>
            <p>Website: <a href="https://navoramedia.in" target="_blank" rel="noreferrer" className="text-burnt-orange hover:underline font-semibold">https://navoramedia.in</a></p>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#121212] pt-4 border-b border-dark-brown/10 pb-1">
            Consent
          </h3>
          <p>
            By using this website, you consent to the terms outlined in this Privacy Policy.
          </p>
        </div>
      ) : (
        // TERMS & CONDITIONS (Updated with dark-brown/light-sand styling matching other pages)
        <div id="terms-section" className="space-y-6 text-sm text-dark-brown/80 font-sans font-light leading-relaxed">
          <h2 className="font-serif text-3xl font-bold text-dark-brown">Terms & Conditions of Service</h2>
          <p className="text-xs text-dark-brown/50">Last Updated: May 2026</p>

          <p>
            By accessing or reviewing the performance analytical resources published by Navora Media, you signify your absolute compliance with our terms of service guidelines.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">1. Complimentary Diagnostic Conditions</h3>
          <p>
            The custom 12-page ad spend and ranking audits provided are complimentary with zero transactional obligation. However, the audits serve exclusively as strategic approximations based on non-invasive public records. Navora Media makes no absolute warranty of direct ROI elevation without active contract initialization.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">2. Proprietary Methodology Controls</h3>
          <p>
            The exact structures of our "Creative Sandbox", "Consolidated broad targeting", and orthodontic dental patient acquisition frameworks are proprietary models developed by Navora Media Corp. You are granted private read rights for standard business diagnostic review only. Unauthorized distribution or copying of our visual templates is prohibited.
          </p>

          <h3 className="font-serif text-xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-1">3. Mutual NDAs & Safety Filters</h3>
          <p>
            We operate under strict ethical agency parameters. All brand website links, operational statistics, and phone parameters submitted through our conversion forms are handled with absolute confidentiality.
          </p>
        </div>
      )}

      {/* LEADER CALL */}
      <div className="pt-8 border-t border-dark-brown/10 text-center">
        <button
          onClick={() => onNavigate("contact")}
          className="text-xs text-burnt-orange hover:text-dark-brown transition-colors uppercase font-bold tracking-wider cursor-pointer font-sans"
        >
          Book Discovery Session • Return to Core Contact
        </button>
      </div>

    </div>
  );
}
