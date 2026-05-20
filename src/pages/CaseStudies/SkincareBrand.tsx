import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedCounter from "../../components/AnimatedCounter";

const challenges = [
  "Low conversion rate despite high traffic",
  "High ad fatigue causing rising CPA",
  "Poor audience targeting and overlapping",
  "Weak creative performance in a saturated market"
];

const strategies = [
  "Full-funnel Meta Ads strategy (Top, Middle, Bottom)",
  "Agile creative testing framework",
  "Integration of UGC (User Generated Content) ad creatives",
  "Aggressive retargeting based on cart-abandonment logic",
  "Strategic audience segmentation and lookalike scaling"
];

export default function SkincareBrand() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/#results" className="hover:text-brand-orange transition-colors">Case Studies</Link>
          <ChevronRight size={14} />
          <span className="text-brand-black">Skincare Brand</span>
        </div>
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[40px] overflow-hidden bg-brand-black min-h-[60vh] flex items-center p-12 lg:p-20 shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" 
              alt="Skincare Brand" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-brand-orange/30" />
          </div>
          
          <div className="relative z-10 max-w-3xl text-white">
            <span className="inline-block px-4 py-1.5 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Meta Ads Case Study
            </span>
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
              Scaling a Skincare Brand with Meta Ads
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl font-light">
              How strategic Facebook & Instagram campaigns transformed customer acquisition and ROAS.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Section 1: Challenges */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">The <span className="text-brand-orange">Challenges</span></h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {challenges.map((challenge, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
                >
                  <p className="text-gray-700 text-lg font-medium">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Strategy */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">Our <span className="text-brand-orange">Strategy</span></h2>
            <div className="grid lg:grid-cols-2 gap-4">
              {strategies.map((strategy, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-brand-black text-white p-6 rounded-2xl flex flex-col gap-4 border border-white/10 hover:border-brand-orange/50 transition-colors"
                >
                  <Zap className="text-brand-orange w-6 h-6" />
                  <p className="font-medium text-gray-200">{strategy}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="bg-brand-orange/10 p-12 rounded-[40px] relative overflow-hidden border border-brand-orange/20">
            <h2 className="heading-serif text-3xl md:text-4xl mb-12 text-brand-black">The <span className="text-brand-orange text-shadow-sm">Results</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-orange/5 border border-brand-orange/10">
                <div className="text-6xl font-serif text-brand-orange mb-2 font-bold"><AnimatedCounter value={310} suffix="%" /></div>
                <div className="text-xs uppercase tracking-widest text-brand-black font-bold">Increase in Leads</div>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-orange/5 border border-brand-orange/10">
                <div className="text-6xl font-serif text-brand-black mb-2 font-bold"><AnimatedCounter value={5.1} decimals={1} suffix="x" /></div>
                <div className="text-xs uppercase tracking-widest text-brand-black font-bold">Total ROAS</div>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-orange/5 border border-brand-orange/10">
                <div className="text-6xl font-serif text-brand-black mb-2 font-bold"><AnimatedCounter value={48} suffix="%" prefix="-" /></div>
                <div className="text-xs uppercase tracking-widest text-brand-black font-bold">Lower CAC</div>
              </div>
              <div className="p-8 bg-brand-orange text-white rounded-3xl shadow-xl">
                <div className="text-6xl font-serif mb-2 font-bold"><AnimatedCounter value={2.5} decimals={1} suffix="M+" /></div>
                <div className="text-xs uppercase tracking-widest text-orange-100 font-bold">Ad Impressions</div>
              </div>
            </div>
          </section>

          {/* Section 4: Gallery */}
          <section>
             <h2 className="heading-serif text-3xl md:text-4xl mb-8">Creative <span className="text-brand-orange">Direction</span></h2>
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="Skincare 1" className="rounded-3xl w-full h-48 md:h-64 object-cover" />
               <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800" alt="Skincare 2" className="rounded-3xl w-full h-48 md:h-64 object-cover" />
             </div>
          </section>

        </div>

        {/* Sidebar Sticky CTA */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-brand-black text-white rounded-[32px] p-8 border border-white/10 shadow-2xl text-center">
            <h3 className="heading-serif text-3xl mb-4">Ready To Scale Your Brand?</h3>
            <p className="text-gray-400 text-sm mb-8">Stop burning budget on tired ad creatives. Let NavoraMedia build a high-converting Meta Ads funnel.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="block w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-white hover:text-brand-black transition-colors mb-4">
                Book a Free Strategy Call
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Link to="/contact" className="block w-full border-2 border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
