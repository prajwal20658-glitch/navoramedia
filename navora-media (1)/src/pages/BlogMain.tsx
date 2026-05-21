import { useState } from "react";
import { BookOpen, Calendar, ArrowRight, Star, Search, Sliders } from "lucide-react";
import { BLOGS } from "../data";

interface BlogMainProps {
  onNavigate: (path: string) => void;
  openAuditModal: () => void;
}

export default function BlogMain({ onNavigate, openAuditModal }: BlogMainProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Meta Ads", "Google Ads", "SEO", "Dental Marketing", "Lead Generation"];

  const filteredBlogs = activeCategory === "All"
    ? BLOGS
    : BLOGS.filter((b) => b.category === activeCategory);

  return (
    <div id="blog-main-container" className="pt-24 space-y-16 pb-20">
      
      {/* HEADER HERO */}
      <section id="blog-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C2A]">
          THE INBOUND JOURNAL
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-dark-brown">
          First-Party Strategic Insights
        </h1>
        <p className="text-sm text-warm-gray max-w-2xl mx-auto leading-relaxed">
          Read deep, uncensored tactical breakdowns regarding algorithm updates, Conversion API leaks, orthodontic map listings, and ad channel optimizations written by practicing media buyers.
        </p>
      </section>

      {/* FILTER BUTTONS BLOCK */}
      <section id="blog-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-2 border-b border-warm-gray/15 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-burnt-orange text-soft-beige"
                  : "bg-[#1A120E] border border-warm-gray/15 text-soft-beige/60 hover:text-soft-beige hover:border-warm-gray/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES LIST GRID */}
      <section id="blogs-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <p className="text-sm text-soft-beige/50">More detailed analytical essays coming soon for this segment.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-xs text-burnt-orange font-bold uppercase"
            >
              Show all articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <div
                key={post.id}
                className="bg-[#1A120E] border border-warm-gray/20 rounded-2xl p-6 hover:border-[#FF8C2A] transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Category and date line */}
                  <div className="flex justify-between items-center text-[10px] text-warm-gray font-bold font-mono uppercase">
                    <span className="text-[#FF8C2A]">{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-soft-beige group-hover:text-burnt-orange transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-soft-beige/60 leading-relaxed font-light line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Author footer link */}
                <div className="pt-6 border-t border-warm-gray/10 mt-6 flex justify-between items-center">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-black flex-shrink-0">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-soft-beige">{post.author.name}</h5>
                      <p className="text-[9px] text-soft-beige/40 uppercase font-mono">{post.readTime}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate(`blog/${post.id}`)}
                    className="p-1 px-3 text-[10px] uppercase font-bold text-[#FF8C2A] border border-[#FF8C2A]/20 hover:bg-[#FF8C2A]/10 rounded flex items-center gap-1 cursor-pointer transition-all duration-200"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER AUDIT CAPTURE */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 rounded-2xl bg-gradient-to-tr from-burnt-orange/10 to-[#FF8C2A]/5 border border-warm-gray/25 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#FF8C2A] font-bold">STAY STRATEGICALLY ADVANCED</p>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-soft-beige">Are Your Competitors Already Dominating Map Packs?</h3>
          <p className="text-xs text-soft-beige/55 max-w-lg mx-auto leading-relaxed">
            Register your domain parameters for an audit. We check core factors, negative lists, and local scheme maps.
          </p>
          <button
            onClick={openAuditModal}
            className="px-5 py-2.5 rounded bg-burnt-orange hover:bg-rich-orange text-soft-beige text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
          >
            Generate My Free Custom Audit
          </button>
        </div>
      </section>

    </div>
  );
}
