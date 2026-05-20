import { motion } from "motion/react";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          >
            Performance Marketing Excellence
          </motion.span>
          <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl mb-6">
            Performance Marketing That <br />
            <span className="text-brand-orange relative inline-block">
              Actually Scales.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            Data-driven Google Ads, Meta Ads, and SEO strategies built to generate real growth. We don't guess. We grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-brand-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-orange transition-colors shadow-lg shadow-black/10 w-full"
              >
                Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <a
                href="/#services"
                className="px-8 py-4 rounded-full font-bold border border-brand-black/10 flex items-center justify-center gap-2 hover:bg-white transition-colors w-full"
              >
                View Services <Play className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-8 glass rounded-[40px] shadow-2xl overflow-hidden translate-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-2xl rounded-full" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-white/50 rounded-3xl border border-white/20">
                    <div className="text-3xl font-serif font-bold text-brand-orange">
                      <AnimatedCounter value={4.2} decimals={1} suffix="x" />
                    </div>
                    <div className="text-xs uppercase tracking-tighter text-gray-500">Avg. ROAS</div>
                </div>
                <div className="p-6 bg-brand-black rounded-3xl text-white">
                    <div className="text-3xl font-serif font-bold">
                      <AnimatedCounter value={5} suffix="M+" />
                    </div>
                    <div className="text-xs uppercase tracking-tighter text-gray-400">Ad Spend Managed</div>
                </div>
              </div>
              <div className="space-y-4 translate-y-8">
                <div className="p-6 bg-brand-orange rounded-3xl text-white">
                    <div className="text-3xl font-serif font-bold">
                      <AnimatedCounter value={310} suffix="%" />
                    </div>
                    <div className="text-xs uppercase tracking-tighter text-orange-100">Leads Growth</div>
                </div>
                <div className="p-6 bg-white/50 rounded-3xl border border-white/20">
                    <div className="text-3xl font-serif font-bold text-brand-black">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-xs uppercase tracking-tighter text-gray-500">Brands Scaled</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Logo Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none animate-float">
             <div className="w-full h-full border-[60px] border-brand-orange rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/919880552901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </section>
  );
}
