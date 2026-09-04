import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ActionModal } from './components/ActionModal';
import { ModalType } from './types';

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section with Interactive Dashboard Mockup */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Trust Section with Fictional Logos */}
        <TrustSection />

        {/* 3. Problem / Value Proposition */}
        <ProblemSolution />

        {/* 4. Features Section (6 Core Features) */}
        <FeaturesSection />

        {/* 5. Product Showcase (Believable SaaS Interface) */}
        <ProductShowcase />

        {/* 6. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 7. Benefits Section (5 Key Benefits) */}
        <BenefitsSection />

        {/* 8. Testimonials Section (3 Realistic Customer Quotes) */}
        <TestimonialsSection />

        {/* 9. Pricing Section (Starter, Pro, Business + Illustrative Disclaimer) */}
        <PricingSection onOpenModal={handleOpenModal} />

        {/* 10. FAQ Section (8 Expandable Questions) */}
        <FaqSection onOpenModal={handleOpenModal} />

        {/* 11. Final Closing CTA */}
        <FinalCta onOpenModal={handleOpenModal} />
      </main>

      {/* 12. Full Multi-Column Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modal for Get Started / Book Demo / Login */}
      <ActionModal type={modalType} onClose={handleCloseModal} />
    </div>
  );
}
