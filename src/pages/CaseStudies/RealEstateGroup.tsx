import { motion } from "motion/react";
import { ArrowRight, ChevronRight, BarChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedCounter from "../../components/AnimatedCounter";

const problems = [
  "Virtually invisible for 'homes for sale near me' searches",
  "Zero inbound leads from organic traffic",
  "Google Business Profile lacking reviews and updates",
  "Significant technical SEO errors preventing indexation"
];

const strategies = [
  "Comprehensive Local SEO & Map Pack optimization",
  "Technical SEO audit and architectural fixes",
  "Targeted Keyword Optimization for high-intent property seekers",
  "Pillar Content Strategy driving long-tail traffic",
  "Aggressive Google Business Profile enhancement"
];

export default function RealEstateGroup() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-brand-cream min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/#results" className="hover:text-brand-orange transition-colors">Case Studies</Link>
          <ChevronRight size={14} />
          <span className="text-brand-black">Real Estate Group</span>
        </div>
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[40px] overflow-hidden bg-brand-black min-h-[60vh] flex items-center p-12 lg:p-20"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
              alt="Real Estate" 
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-3xl text-white mt-auto">
            <span className="inline-block px-4 py-1.5 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              SEO Case Study
            </span>
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 leading-tight">
              Dominating Local Search with SEO
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl font-light drop-shadow-md">
              How NavoraMedia helped a real estate company rank on top of Google search results and capture local demand.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Section 1: Initial Issues */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">Initial <span className="text-brand-orange">Issues</span></h2>
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">
                <ul className="space-y-6">
                  {problems.map((problem, i) => (
                    <motion.li 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex gap-4 items-start border-b border-gray-50 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="text-brand-orange font-bold font-serif text-2xl leading-none pt-1">0{i+1}.</div>
                      <p className="text-gray-700 text-lg">{problem}</p>
                    </motion.li>
                  ))}
                </ul>
            </div>
          </section>

          {/* Section 2: SEO Strategy */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">SEO <span className="text-brand-orange">Strategy</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strategies.map((strategy, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-brand-orange/10 hover:shadow-xl hover:shadow-brand-orange/5 transition-all text-center flex flex-col items-center justify-center gap-4 h-full"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange">
                    <BarChart size={24} />
                  </div>
                  <p className="text-brand-black font-bold font-serif text-xl">{strategy.split(' ').slice(0,2).join(' ')}</p>
                  <p className="text-sm text-gray-500">{strategy}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="bg-brand-black text-white p-12 rounded-[40px] relative overflow-hidden">
            <h2 className="heading-serif text-3xl md:text-4xl mb-12">The <span className="text-brand-orange">Results</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent">
                <div className="text-5xl font-serif text-brand-orange mb-2 font-bold">#1</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Rank For Key Terms</div>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent">
                <div className="text-5xl font-serif text-white mb-2 font-bold"><AnimatedCounter value={420} suffix="%" /></div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Organic Traffic Growth</div>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent">
                <div className="text-5xl font-serif text-white mb-2 font-bold"><AnimatedCounter value={180} suffix="+" /></div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Monthly Inquiries</div>
              </div>
              <div className="p-8 bg-brand-orange text-white rounded-3xl">
                <div className="text-5xl font-serif mb-2 font-bold"><AnimatedCounter value={70} suffix="%" prefix="+" /></div>
                <div className="text-xs uppercase tracking-widest text-orange-100 font-bold">Increase in Calls</div>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Sticky CTA */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-white rounded-[32px] p-8 border border-gray-100 shadow-2xl shadow-brand-orange/5 text-center">
            <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="heading-serif text-2xl mb-4">Want Your Business To Rank #1?</h3>
            <p className="text-gray-500 text-sm mb-8">Dominate organic search and attract high-intent customers without paying per click.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="block w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-brand-black transition-colors mb-4">
                Book a Free Strategy Call
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Link to="/contact" className="block w-full border-2 border-gray-100 text-brand-black py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
