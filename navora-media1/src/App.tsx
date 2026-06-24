import { useState, useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuditFormModal from "./components/AuditFormModal";

// Client Pages
import Home from "./pages/Home";
import ServicesMain from "./pages/ServicesMain";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudiesMain from "./pages/CaseStudiesMain";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogMain from "./pages/BlogMain";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import FreeAudit from "./pages/FreeAudit";
import ThankYou from "./pages/ThankYou"; // ← NEW
import FAQPage from "./pages/FAQPage";
import Careers from "./pages/Careers";
import Legal from "./pages/Legal";
import Sitemap from "./pages/Sitemap";

import { SERVICES, CASE_STUDIES, BLOGS } from "./data";

export default function App() {
  const [currentPath, setCurrentPath] = useState("home");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Sync state with location path & hash fallback
  useEffect(() => {
    const handleLocationChange = () => {
      // Direct migrate old hash urls if some user arrives from an old bookmark or external link
      if (window.location.hash) {
        const hashPath = window.location.hash.slice(1);
        if (hashPath) {
          const cleanPath = hashPath === "home" ? "/" : `/${hashPath}`;
          window.history.replaceState(null, "", cleanPath);
        }
      }

      // Track relative path from base URL
      const pathname = window.location.pathname;
      let pathNameKey = pathname === "/" ? "home" : pathname.slice(1);
      
      // Trim extraneous trailing slashes
      if (pathNameKey.endsWith("/") && pathNameKey.length > 1) {
        pathNameKey = pathNameKey.slice(0, -1);
      }

      setCurrentPath(pathNameKey || "home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Initial load sync
    handleLocationChange();

    // Support browser back/forward buttons (history popstate)
    window.addEventListener("popstate", handleLocationChange);
    
    // Listen for state changes from programmatic nav pushes
    window.addEventListener("navstatechange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("navstatechange", handleLocationChange);
    };
  }, []);

  // Dynamic SEO Title, Description, and Schema.org metadata injector
  useEffect(() => {
    let title = "Navora Media | Elite Performance Marketing Agency Bangalore";
    let description = "Navora Media is Bangalore's leading performance marketing agency, delivering high-ROAS Meta Ads, Google Ads optimization, organic SEO, and dental patient acquisition programs.";
    let schemaMarkup: any = null;

    // Standard business schema
    const baseOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Navora Media",
      "image": "https://navoramedia.in/sitemap-logo.png",
      "url": "https://navoramedia.in",
      "telephone": "+919880552901",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Navora Media Core Space",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/navoramedia.in/"
      ]
    };

    if (currentPath === "home") {
      title = "Navora Media | Elite Performance Marketing Agency Bangalore";
      description = "Navora Media is Bangalore's leading performance marketing agency, delivering high-ROAS Meta Ads, Google Ads optimization, organic SEO, and dental patient acquisition programs.";
      schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
          baseOrganizationSchema,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://navoramedia.in",
            "name": "Navora Media",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://navoramedia.in/#search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      };
    } else if (currentPath === "services") {
      title = "Active Growth Services | Navora Media";
      description = "Explore Navora Media's elite marketing channels: high-conversion Meta Ads, Google Ads & PMax pipelines, organic SEO engines, and patient funnels.";
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Performance Marketing Services",
        "provider": baseOrganizationSchema,
        "areaServed": "IN",
        "description": description
      };
    } else if (currentPath.startsWith("services/")) {
      const serviceId = currentPath.split("/")[1];
      const serviceSvc = SERVICES.find(s => s.id === serviceId);
      if (serviceSvc) {
        title = `${serviceSvc.title} | Navora Media`;
        description = serviceSvc.subtitle || serviceSvc.description;
        schemaMarkup = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceSvc.title,
          "serviceType": "Digital Ad Channel Management",
          "description": description,
          "provider": baseOrganizationSchema
        };
      }
    } else if (currentPath === "case-studies") {
      title = "Empirical Case Files & ROI Multipliers | Navora Media";
      description = "Real results, real attribution data. Read our comprehensive case studies mapping budget scaling, lead costs, and net-growth multipliers.";
    } else if (currentPath.startsWith("case-studies/")) {
      const studyId = currentPath.split("/")[1];
      const studyObj = CASE_STUDIES.find(c => c.id === studyId);
      if (studyObj) {
        title = `${studyObj.title} Case Study | Navora Media`;
        description = `Case study analysis on client success: ${studyObj.title}. Client Challenge: ${studyObj.challenge}. Strategy executed: ${studyObj.strategy.slice(0, 150)}...`;
      }
    } else if (currentPath === "blog") {
      title = "The Performance Briefings Blog | Navora Media";
      description = "Technical insights, digital marketing strategies, Meta optimization algorithms, and local SEO updates straight from our core media buyers.";
    } else if (currentPath.startsWith("blog/")) {
      const blogId = currentPath.split("/")[1];
      const blogPost = BLOGS.find(b => b.id === blogId);
      if (blogPost) {
        title = `${blogPost.title} | Navora Media`;
        description = blogPost.summary || blogPost.contentMarkdown.slice(0, 150);
        schemaMarkup = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogPost.title,
          "author": {
            "@type": "Person",
            "name": blogPost.author.name
          },
          "datePublished": blogPost.date,
          "description": description
        };
      }
    } else if (currentPath === "contact") {
      title = "Schedule an Elite Discovery Call | Navora Media";
      description = "Connect directly with our media-buying team. Secure campaign strategy intake, live diagnostic audits, and partnership boarding.";
    } else if (currentPath === "audit") {
      title = "Get a Complimentary Diagnostic Website Audit | Navora Media";
      description = "Free expert website performance audit. Comprehensive analysis of your load speeds, Meta pixel syntax, Google Tag matches, and conversion blocks.";
    } else if (currentPath === "audit-thanks") {
      // ── NEW: Thank You page — noindex set inside the component itself via Helmet ──
      title = "Audit Requested — We're On It | Navora Media";
      description = "Your free performance audit request has been received. Navora Media's growth team will deliver your 12-page diagnostic blueprint within 24 hours.";
    } else if (currentPath === "faq") {
      title = "Performance Marketing FAQ & Process Desk | Navora Media";
      description = "Clear answers regarding our attribution tools, campaign sandbox structures, minimum budgets, and patient-acquisition funnels.";
    } else if (currentPath === "careers") {
      title = "Media Buying & Engineering Careers | Navora Media";
      description = "Join our core team of media buyers, digital analysts, and high-performance engineers in Bangalore. View current job opportunities.";
    } else if (currentPath === "privacy") {
      title = "Navora Media | Privacy and Data Shield Agreement";
      description = "Our transparent policies governing user data security, cookies, Meta tracking pixels, and secure contact details.";
    } else if (currentPath === "terms") {
      title = "Terms and Consultation Conditions | Navora Media";
      description = "The legal framework, user terms, and delivery policies outlining our premium SEO consultations and media-buying agreements.";
    } else if (currentPath === "sitemap") {
      title = "Sitemap & Search Engine Index | Navora Media";
      description = "Complete crawl-ready directory mapping all digital marketing services, case files, and client-intake panels offered by Navora Media.";
    }

    // Apply document title
    document.title = title;

    // Apply meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    // Apply schema markup tag
    let schemaScript = document.getElementById("navora-jsonld-schema") as HTMLScriptElement;
    if (schemaScript) {
      if (schemaMarkup) {
        schemaScript.textContent = JSON.stringify(schemaMarkup);
      } else {
        schemaScript.textContent = JSON.stringify(baseOrganizationSchema);
      }
    } else {
      schemaScript = document.createElement("script");
      schemaScript.id = "navora-jsonld-schema";
      schemaScript.type = "application/ld+json";
      schemaScript.textContent = JSON.stringify(schemaMarkup || baseOrganizationSchema);
      document.head.appendChild(schemaScript);
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    const cleanPath = path === "home" ? "/" : `/${path}`;
    window.history.pushState(null, "", cleanPath);
    // Dispatch custom navigation event to let local popstate triggers fire
    window.dispatchEvent(new Event("navstatechange"));
  };

  // Helper template matcher for the requested 19 pages
  const renderActivePage = () => {
    // Dynamic Services matching
    if (currentPath.startsWith("services/")) {
      const serviceId = currentPath.split("/")[1];
      return (
        <ServiceDetail
          serviceId={serviceId}
          onNavigate={navigateTo}
          openAuditModal={() => setIsAuditModalOpen(true)}
        />
      );
    }

    // Dynamic Case Study details matching
    if (currentPath.startsWith("case-studies/")) {
      const studyId = currentPath.split("/")[1];
      return (
        <CaseStudyDetail
          caseStudyId={studyId}
          onNavigate={navigateTo}
          openAuditModal={() => setIsAuditModalOpen(true)}
        />
      );
    }

    // Dynamic Blog details matching
    if (currentPath.startsWith("blog/")) {
      const blogId = currentPath.split("/")[1];
      return (
        <BlogDetail
          blogPostId={blogId}
          onNavigate={navigateTo}
          openAuditModal={() => setIsAuditModalOpen(true)}
        />
      );
    }

    // Standard static matching switcher
    switch (currentPath) {
      case "home":
        return <Home onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "services":
        return <ServicesMain onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "case-studies":
        return <CaseStudiesMain onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "blog":
        return <BlogMain onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "contact":
        return <Contact onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "audit":
        return <FreeAudit onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "audit-thanks": // ← NEW
        return <ThankYou onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "faq":
        return <FAQPage onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "careers":
        return <Careers onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      case "privacy":
        return <Legal initialTab="privacy" onNavigate={navigateTo} />;
      case "terms":
        return <Legal initialTab="terms" onNavigate={navigateTo} />;
      case "sitemap":
        return <Sitemap onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
      default:
        return <Home onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen text-dark-brown flex flex-col justify-between selection:bg-burnt-orange selection:text-white">
      <ParticleBackground />
      
      {/* Dynamic Header Navbar banner */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        openAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Main active interactive content panel */}
      <main className="flex-grow transition-opacity duration-300">
        {renderActivePage()}
      </main>

      {/* Structured Footer components */}
      <Footer onNavigate={navigateTo} openAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Global lead capturing audit Modal */}
      <AuditFormModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
}
