import { motion } from "motion/react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-brand-cream relative">
      {/* Background shape */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Let's Talk Growth
            </span>
            <h1 className="heading-serif text-5xl md:text-6xl mb-4">
              Book a <span className="text-brand-orange">Strategy Call</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Skip the guesswork. Let's build a deterministic growth model tailored specifically for your business.
            </p>
          </div>
          
          <div className="mt-8">
            <Contact />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
