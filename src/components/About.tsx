import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding py-32 bg-brand-cream relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-8 block"
        >
          Our Philosophy
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="heading-serif text-4xl md:text-6xl mb-12 leading-tight"
        >
          Building Instant Trust & Profitability through Precision Marketing.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed font-light italic"
        >
          "NavoraMedia combines creative strategy with performance analytics to help businesses grow profitably through Google Ads, Meta Ads, and SEO. We don't just run ads; we build systems that scale brands into industry leaders."
        </motion.p>
      </div>

      {/* Decorative Brand Element */}
      <div className="mt-20 flex justify-center opacity-10">
         <div className="w-32 h-32 border-4 border-brand-orange rounded-full flex items-center justify-center rotate-45 animate-pulse">
            <div className="w-16 h-16 border-2 border-brand-orange rounded-full" />
         </div>
      </div>
    </section>
  );
}
