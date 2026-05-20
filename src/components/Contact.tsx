import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "84137ac1-49f5-483c-9bda-726678ff051b",
          subject: `New Strategy Call Request: ${formData.business || formData.name}`,
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Our growth specialist will contact you shortly.");
        setFormData({ name: "", business: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try emailing us directly.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="bg-white rounded-[50px] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-brand-orange/5 border border-gray-100">
        {/* Contact Info */}
        <div className="lg:w-2/5 bg-brand-black p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="heading-serif text-4xl mb-8">Ready to <span className="text-brand-orange">Scale?</span></h2>
            <p className="text-gray-400 mb-12">
              Fill out the form or use our direct channels. Let's discuss your growth roadmap.
            </p>

            <div className="space-y-8">
              <a href="tel:+919880552901" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-medium">+91 9880552901</p>
                </div>
              </a>
              <a href="mailto:owner@navoramedia.in" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-medium">owner@navoramedia.in</p>
                </div>
              </a>
              <a href="https://wa.me/919880552901" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                    <p className="text-lg font-medium">Chat Now</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5">
            <p className="text-sm italic text-gray-500">"We don't guess. We grow."</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-3/5 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Business Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium" 
                  placeholder="Company Inc."
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
              <input 
                type="tel" 
                required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium" 
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500">How can we help?</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium resize-none" 
                placeholder="Tell us about your goals..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
              className={`w-full text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-xl ${isSubmitting ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-brand-orange hover:bg-brand-black shadow-brand-orange/10'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Discovery Message'} {!isSubmitting && <Send size={20} />}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
