import { motion } from "motion/react";
import { Database, TrendingUp, ShieldCheck, Zap, MessageSquare, Maximize } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven Decisions",
    icon: <Database className="w-6 h-6" />,
    desc: "We rely on hard numbers, not intuition, to guide your growth."
  },
  {
    title: "Real ROI Focus",
    icon: <TrendingUp className="w-6 h-6" />,
    desc: "Every dollar spent is measured against the profit it generates."
  },
  {
    title: "Transparent Reporting",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Clean, honest dashboards showing exactly where your budget goes."
  },
  {
    title: "Creative + Analytical",
    icon: <Zap className="w-6 h-6" />,
    desc: "The perfect blend of high-end aesthetics and performance data."
  },
  {
    title: "Fast Communication",
    icon: <MessageSquare className="w-6 h-6" />,
    desc: "Direct access to our specialists when you need them most."
  },
  {
    title: "Scalable Systems",
    icon: <Maximize className="w-6 h-6" />,
    desc: "Architectures built to handle growth from 1x to 10x and beyond."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="heading-serif text-4xl md:text-6xl mb-8"
          >
            Why Brands Choose <br />
            <span className="text-brand-orange">NavoraMedia</span>
          </motion.h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            In a world of marketing "gurus" and empty promises, we stand apart by treating your capital as if it were our own. Our philosophy is simple: if you don't grow, we don't succeed.
          </p>
          <div className="flex items-center gap-4 p-6 bg-brand-orange/5 rounded-3xl border border-brand-orange/10">
            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shrink-0">
               <Zap />
            </div>
            <div>
                <p className="font-bold text-brand-black">Growth First Mentality</p>
                <p className="text-sm text-gray-500">Everything we do is optimized for your bottom line.</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white rounded-[24px] border border-gray-100 hover:border-brand-orange/20 transition-all shadow-sm"
            >
              <div className="text-brand-orange mb-4">{item.icon}</div>
              <h4 className="font-bold mb-2 text-brand-black">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
