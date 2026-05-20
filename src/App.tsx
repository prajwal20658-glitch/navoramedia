/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import DentalClinic from "./pages/CaseStudies/DentalClinic";
import SkincareBrand from "./pages/CaseStudies/SkincareBrand";
import RealEstateGroup from "./pages/CaseStudies/RealEstateGroup";
import ScrollToTop from "./components/ScrollToTop";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-[60]"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies/dental-clinic" element={<DentalClinic />} />
          <Route path="/case-studies/skincare-brand" element={<SkincareBrand />} />
          <Route path="/case-studies/real-estate-group" element={<RealEstateGroup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

