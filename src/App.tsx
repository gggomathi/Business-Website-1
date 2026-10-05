import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { ProductGallery } from './components/ProductGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerEnquiry } from './components/CustomerEnquiry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [galleryFilter, setGalleryFilter] = useState<string>('All');

  const handleSelectCollection = (categoryKey: string) => {
    setGalleryFilter(categoryKey);
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreHero = () => {
    const colElement = document.getElementById('collections');
    if (colElement) {
      colElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#2D2424] flex flex-col font-sans selection:bg-[#721B29]/15 selection:text-[#721B29]">
      {/* 1. Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onExploreClick={handleExploreHero} />

        {/* 3. About RJ Fabrics */}
        <About />

        {/* 4. Saree Collections */}
        <Collections onSelectCollection={handleSelectCollection} />

        {/* 5. Interactive Product Gallery */}
        <ProductGallery
          activeCategory={galleryFilter}
          onCategoryChange={setGalleryFilter}
        />

        {/* 6. Why Choose RJ Fabrics */}
        <WhyChooseUs />

        {/* 7. Simple Customer Enquiry ("Looking for a Saree?") */}
        <CustomerEnquiry />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating Sticky Actions (WhatsApp + Scroll to Top) */}
      <FloatingWhatsApp />
    </div>
  );
}
