import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, Mail, ArrowRight, Share2, Clipboard } from "lucide-react";
import { BLOGS } from "../data";

interface BlogDetailProps {
  blogPostId: string;
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function BlogDetail({ blogPostId, onNavigate, openAuditModal }: BlogDetailProps) {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    setSubscribing(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "84137ac1-49f5-483c-9bda-726678ff051b",
          subject: "New Newsletter Subscription Request",
          from_name: "Navora Media Newsletter",
          email: email,
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubscribed(true);
        setEmail("");
      } else {
        setSubscribed(true);
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setSubscribed(true);
      setEmail("");
    } finally {
      setSubscribing(false);
    }
  };

  const post = BLOGS.find((b) => b.id === blogPostId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogPostId]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4">
        <h2 className="font-serif text-2xl text-soft-beige">Strategic Essay Not Found</h2>
        <button
          onClick={() => onNavigate("blog")}
          className="px-4 py-2 bg-burnt-orange text-soft-beige rounded text-xs uppercase"
        >
          Return to Blog Main
        </button>
      </div>
    );
  }

  const canonicalUrl = `https://navoramedia.in/blog/${post.id}`;
  const ogImage = "https://navoramedia.in/og-image.jpg";
  const seoTitle = (post as any).seoTitle || `${post.title} | Navora Media`;
  const seoDescription = (post as any).seoDescription || post.summary;

  // Render bold (**text**) inside paragraph text
  const renderInline = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1
        ? <strong key={i} className="font-bold text-dark-brown">{part}</strong>
        : part
    );
  };

  const formattedSections = post.contentMarkdown.split("\n\n");

  return (
    <div id={`blog-${blogPostId}`} className="pt-24 space-y-16 pb-20">

      <Helmet>
        {/* ── Title & Meta ── */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Navora Media" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@navoramedia" />

        {/* ── JSON-LD: Article ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": seoDescription,
          "image": ogImage,
          "url": canonicalUrl,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role
          },
          "publisher": {
            "@type": "Organization",
            "name": "Navora Media",
            "url": "https://navoramedia.in",
            "logo": {
              "@type": "ImageObject",
              "url": ogImage
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          "keywords": (post as any).tags?.join(", ") || post.category,
          "articleSection": post.category,
          "inLanguage": "en-IN"
        })}</script>

        {/* ── JSON-LD: BreadcrumbList ── */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://navoramedia.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://navoramedia.in/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": canonicalUrl
            }
          ]
        })}</script>
      </Helmet>

      {/* HEADER SECTION METADATA */}
      <section className="relative py-12 bg-gradient-to-b from-[#1A120E] to-dark-brown border-b border-warm-gray/10 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#FF8C2A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <button
            onClick={() => onNavigate("blog")}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-soft-beige/50 hover:text-burnt-orange uppercase tracking-wider mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Inbound Blog</span>
          </button>

          <div className="space-y-4">
            <span className="text-xs bg-burnt-orange/15 border border-burnt-orange/20 text-[#FF8C2A] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-soft-beige leading-tight">
              {post.title}
            </h1>

            {/* Author layout */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-soft-beige/50 pt-4">
              <div className="flex items-center space-x-2.5">
                <img
                  className="w-10 h-10 rounded-full object-cover grayscale border border-warm-gray/20"
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-soft-beige">{post.author.name}</p>
                  <p className="text-[10px] uppercase font-mono">{post.author.role}</p>
                </div>
              </div>
              <span className="hidden sm:inline text-warm-gray">•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <span className="hidden sm:inline text-warm-gray">•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE ESSAY CONTENTS */}
      <article className="max-w-3xl mx-auto px-4 grid grid-cols-1 gap-8">

        <div className="prose text-dark-brown text-sm sm:text-base leading-relaxed font-light space-y-6">
          {formattedSections.map((section, idx) => {
            // H3 must be checked before H2 (starts with ###)
            if (section.startsWith("###")) {
              return (
                <h3 key={idx} className="font-serif text-xl font-bold text-[#FF8C2A] pt-2">
                  {section.replace(/^###\s*/, "").trim()}
                </h3>
              );
            }
            if (section.startsWith("##")) {
              return (
                <h2 key={idx} className="font-serif text-2xl sm:text-3xl font-bold text-dark-brown pt-4 border-b border-dark-brown/10 pb-2">
                  {section.replace(/^##\s*/, "").trim()}
                </h2>
              );
            }
            if (section.startsWith("1.") || section.startsWith("- ")) {
              const lines = section.split("\n").filter((l) => l.trim());
              return (
                <ul key={idx} className="space-y-2.5 pl-5 list-disc text-xs sm:text-sm">
                  {lines.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {renderInline(line.replace(/^(\d+\.|-)\s*/, "").trim())}
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.trim() === "") return null;
            return (
              <p key={idx} className="leading-relaxed">
                {renderInline(section)}
              </p>
            );
          })}
        </div>

        {/* Newsletter Inline Subscription form */}
        <div className="p-8 rounded-2xl bg-white border border-dark-brown/10 shadow-sm space-y-4 my-10">
          <h2 className="font-serif text-lg font-bold text-dark-brown">
            Receive Raw Media Audits and Testing Strategies
          </h2>
          <p className="text-xs text-warm-gray">
            Join 4,200 growth managers who receive our double-blind conversion case findings directly in their inbox. Absolutely no spam or sales calls.
          </p>
          {subscribed ? (
            <p className="text-sm text-emerald-500 font-semibold font-sans">
              ✓ Strategic subscription activated successfully. Welcome to the analytical briefing list!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E.g. manager@growth.com"
                className="w-full bg-dark-brown/50 border border-warm-gray/30 rounded px-4 py-2 text-xs text-soft-beige focus:outline-none focus:border-burnt-orange"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-burnt-orange text-soft-beige font-semibold text-xs py-2 px-4 rounded hover:bg-rich-orange cursor-pointer transition-colors disabled:opacity-50"
              >
                {subscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>

        {/* Action Link Row */}
        <div className="pt-6 border-t border-warm-gray/15 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
          <button
            onClick={() => onNavigate("blog")}
            className="text-burnt-orange hover:text-dark-brown transition-colors uppercase tracking-widest font-bold inline-flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Essay Listings</span>
          </button>

          <button
            onClick={openAuditModal}
            className="px-5 py-2.5 bg-dark-brown hover:bg-dark-brown/90 border border-dark-brown text-soft-beige rounded uppercase tracking-wider font-bold transition-all"
          >
            Request Site Audit for Your Company
          </button>
        </div>

      </article>

    </div>
  );
}
