import { motion } from "motion/react";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedCounter from "../../components/AnimatedCounter";

const problems = [
  "Low lead quality from generic campaigns",
  "Expensive cost per lead (CPL)",
  "No conversion tracking implemented",
  "Poor local visibility"
];

const strategies = [
  "Google Search Ads targeting high-intent keywords",
  "Hyper-local radius targeting around the clinic",
  "Conversion-optimized landing pages",
  "End-to-end conversion tracking",
  "Retargeting campaigns for warm leads"
];

export default function DentalClinic() {
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
          <span className="text-brand-black">Dental Clinic</span>
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
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" 
              alt="Dental Clinic" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-brand-orange/20" />
          </div>
          
          <div className="relative z-10 max-w-3xl text-white">
            <span className="inline-block px-4 py-1.5 bg-brand-orange text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Google Ads Case Study
            </span>
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 leading-tight">
              Scaling a Dental Clinic with Google Ads
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl font-light">
              How NavoraMedia generated high-quality patient leads with a profitable Google Ads strategy.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Section 1: The Problem */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">The <span className="text-brand-orange">Problem</span></h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((problem, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold">0{i+1}</div>
                  <p className="text-gray-700 text-sm font-medium pt-2">{problem}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Our Strategy */}
          <section>
            <h2 className="heading-serif text-3xl md:text-4xl mb-8">Our <span className="text-brand-orange">Strategy</span></h2>
            <div className="space-y-4">
              {strategies.map((strategy, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all"
                >
                  <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                  <p className="text-gray-800 font-medium">{strategy}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="bg-brand-black text-white p-12 rounded-[40px] relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl" />
            <h2 className="heading-serif text-3xl md:text-4xl mb-12">The <span className="text-brand-orange">Results</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <div className="text-5xl font-serif text-brand-orange mb-2 font-bold"><AnimatedCounter value={4.2} decimals={1} suffix="x" /></div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">ROAS Achieved</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <div className="text-5xl font-serif text-white mb-2 font-bold"><AnimatedCounter value={62} suffix="%" prefix="-" /></div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Lower CPL</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <div className="text-5xl font-serif text-white mb-2 font-bold"><AnimatedCounter value={210} suffix="+" /></div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Qualified Leads</div>
              </div>
              <div className="p-6 bg-brand-orange text-white rounded-3xl">
                <div className="text-5xl font-serif mb-2 font-bold"><AnimatedCounter value={38} suffix="%" prefix="+" /></div>
                <div className="text-xs uppercase tracking-widest text-orange-100 font-bold">Increase in Bookings</div>
              </div>
            </div>
          </section>

          {/* Section 4: Testimonial */}
          <section className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-brand-orange/5">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" alt="Dr. Smith" className="w-32 h-32 rounded-full object-cover border-4 border-brand-cream block shrink-0" />
              <div>
                <p className="text-gray-600 text-lg italic mb-6">"Within two months of working with NavoraMedia, our chairs were fully booked. They entirely transformed how we acquire patients; the leap in lead quality was incredible."</p>
                <p className="font-bold text-brand-black">Dr. Sarah Jenkins</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Lead Dentist & Clinic Owner</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Sticky CTA */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 bg-white rounded-[32px] p-8 border border-gray-100 shadow-2xl shadow-brand-orange/5 text-center">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="heading-serif text-2xl mb-4">Want Similar Results For Your Clinic?</h3>
            <p className="text-gray-500 text-sm mb-8">Stop paying for low-quality leads. Let us build a scalable Google Ads system for you.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="block w-full bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand-orange transition-colors mb-4">
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
