import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

const results = [
  {
    client: "Dental Clinic",
    outcome: "4.2x ROAS in 60 Days",
    tag: "Google Ads",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    link: "/case-studies/dental-clinic"
  },
  {
    client: "Skincare Brand",
    outcome: "310% Lead Growth",
    tag: "Meta Ads",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=2034&auto=format&fit=crop",
    link: "/case-studies/skincare-brand"
  },
  {
    client: "Real Estate Group",
    outcome: "Ranked #1 for Key Terms",
    tag: "SEO",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    link: "/case-studies/real-estate-group"
  }
];

export default function CaseStudies() {
  return (
    <section id="results" className="section-padding bg-brand-black text-white rounded-[60px] my-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-brand-orange uppercase tracking-widest text-xs font-bold mb-4 block">Proven Results</span>
          <h2 className="heading-serif text-4xl md:text-5xl">Our Recent Scalability <br />Success Stories</h2>
        </div>
        <p className="text-gray-400 max-w-sm text-sm mb-2">
            Real data from real clients. We don't hide behind vanity metrics; we focus on the numbers that move the needle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {results.map((res, idx) => (
          <motion.div
            key={res.client}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative rounded-[40px] overflow-hidden"
          >
            <Link to={res.link} className="block w-full h-full">
              <div className="aspect-[4/5] overflow-hidden">
                  <img 
                      src={res.image} 
                      alt={res.client} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white border border-white/10">
                          {res.tag}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>
                  <h3 className="heading-serif text-2xl mb-2">{res.client}</h3>
                  <p className="text-brand-orange font-bold text-lg">{res.outcome}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Trust Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-white mb-2">
              <AnimatedCounter value={5} suffix="M+" />
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Ad Spend Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-brand-orange mb-2">
              <AnimatedCounter value={300} suffix="%" />
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Avg. ROAS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-white mb-2">
              <AnimatedCounter value={50} suffix="+" />
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Scalable Brands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-white mb-2">
              <AnimatedCounter value={10} suffix="X" />
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Client Growth</div>
          </div>
      </div>
    </section>
  );
}
