import React from 'react';
import { Award, Feather, Sparkles, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sareeData';

export const About: React.FC = () => {
  const featureCards = [
    {
      title: "Traditional Handloom",
      subtitle: "Generational Loom Craft",
      desc: "Woven on wooden shuttle looms following authentic South Indian weaving traditions preserved across generations.",
      icon: Feather,
    },
    {
      title: "Quality Fabrics",
      subtitle: "Pure & Breathable Yarns",
      desc: "Carefully selected natural cotton yarns and gentle dyes that deliver soft drapes, skin friendliness, and lasting durability.",
      icon: Award,
    },
    {
      title: "Elegant Designs",
      subtitle: "Timeless Temple & Zari Motifs",
      desc: "A harmonious marriage of classical Tamil temple korvai borders, auspicious motifs, and graceful contemporary palettes.",
      icon: Sparkles,
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F7F4EC] border-y border-[#EAE2D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold">
            Heritage & Craftsmanship
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
            About RJ Fabrics
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative & Craft Image Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-5">
            <blockquote className="text-lg sm:text-xl font-cormorant italic text-[#4A3E3D] leading-relaxed border-l-4 border-[#721B29] pl-5 bg-[#FCFBF7] p-5 rounded-r-lg shadow-2xs">
              “RJ Fabrics is dedicated to bringing the beauty of traditional handloom sarees to customers through quality fabrics, timeless designs and skilled craftsmanship. Our collection reflects the rich textile heritage of Tamil Nadu while offering sarees suitable for everyday elegance, special occasions and celebrations.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#615251] leading-relaxed">
              Located in the historic textile hub of Tiruppur district in Tamil Nadu, RJ Fabrics operates with an unwavering respect for the artisan's touch. Unlike mass-produced synthetic weaves, each handloom saree carries the subtle rhythmic variations and breathable luxury that only true handlooms can offer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E3D]">
                <div className="w-5 h-5 rounded-full bg-[#721B29]/15 flex items-center justify-center text-[#721B29]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Direct artisan loom sourcing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E3D]">
                <div className="w-5 h-5 rounded-full bg-[#721B29]/15 flex items-center justify-center text-[#721B29]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Certified GST compliance ({BUSINESS_INFO.gstin})</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E3D]">
                <div className="w-5 h-5 rounded-full bg-[#721B29]/15 flex items-center justify-center text-[#721B29]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Fast & transparent WhatsApp support</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E3D]">
                <div className="w-5 h-5 rounded-full bg-[#721B29]/15 flex items-center justify-center text-[#721B29]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Tamil Nadu textile heritage</span>
              </div>
            </div>
          </div>

          {/* Artisan Loom Craft Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#E0D7C6] bg-white group">
              <img
                src="/src/assets/images/artisan_weaving_loom_1791210984610.jpg"
                alt="Traditional handloom weaving process at RJ Fabrics"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-xs uppercase tracking-wider text-[#F3E5AB] font-semibold">Artisan Handloom</span>
                <p className="font-cinzel text-base font-bold">Woven by Skilled Artisans</p>
                <p className="text-xs text-[#EAE4DC] mt-0.5 font-sans">Narasingapuram Village, Madathukulam TK, Tiruppur</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Small Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-[#FCFBF7] rounded-xl p-6 border border-[#E8DFD0] shadow-2xs hover:shadow-md hover:border-[#D4AF37]/60 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#721B29]/10 group-hover:bg-[#721B29] text-[#721B29] group-hover:text-[#F3E5AB] flex items-center justify-center transition-colors duration-200 mb-4">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-[#2D2424]">
                  {card.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#721B29] font-semibold mt-0.5">
                  {card.subtitle}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-[#615251] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
