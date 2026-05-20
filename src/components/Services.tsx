import { motion } from "motion/react";
import { Search, Facebook, TrendingUp, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Google Ads",
    icon: <Search className="w-8 h-8" />,
    description: "Dominating search results and capturing high-intent traffic.",
    features: ["Search Ads", "Display Ads", "YouTube Ads", "Conversion Tracking", "ROAS Optimization"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Meta Ads",
    icon: <Facebook className="w-8 h-8" />,
    description: "Scalable growth through precision Facebook and Instagram campaigns.",
    features: ["Lead Generation", "E-commerce Scaling", "Retargeting Campaigns", "Creative Strategy", "Funnel Optimization"],
    color: "bg-black text-white",
  },
  {
    title: "SEO",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Long-term organic growth driven by technical and content strategy.",
    features: ["On-page SEO", "Technical SEO", "Local SEO", "Keyword Research", "Organic Traffic Growth"],
    color: "bg-brand-orange/10 text-brand-orange",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-serif text-4xl md:text-5xl mb-6"
        >
          Our <span className="text-brand-orange">Precision</span> Services
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We leverage the most powerful platforms to put your brand in front of the right audience at the right time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group p-10 rounded-[32px] border border-gray-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-brand-orange/5 transition-all bg-brand-cream/30"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color} group-hover:scale-110 transition-transform`}>
              {service.icon}
            </div>
            <h3 className="heading-serif text-2xl mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
