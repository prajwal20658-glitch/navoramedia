import { Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Logo className="w-8 h-8" />
              <span className="font-serif text-2xl font-bold">Navora<span className="text-brand-orange">Media</span></span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Performance marketing built for the modern era. We focus on ROI, transparency, and scalable systems.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/navora.media/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-orange">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="/#results" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">Our Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-orange">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>+91 9880552901</li>
              <li>owner@navoramedia.in</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2026 NavoraMedia. All Rights Reserved.
          </p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-orange transition-colors">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
