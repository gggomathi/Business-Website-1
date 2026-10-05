import React from 'react';
import { Hammer, Sparkles, MessageSquareHeart, Landmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sareeData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Traditional Craftsmanship",
      desc: "Authentic handloom-inspired collections crafted with meticulous shuttle loom precision, preserving age-old warp and weft traditions.",
      icon: Hammer,
      highlight: "Artisan-Crafted"
    },
    {
      title: "Quality First",
      desc: "Uncompromising focus on fabric quality, pure combed cotton, high-grade zari threads, and durable border finishing that lasts.",
      icon: Sparkles,
      highlight: "Finest Materials"
    },
    {
      title: "Personal Service",
      desc: "Direct and personalized communication via WhatsApp and call. We gladly share real video clips and photo angles of actual sarees before purchase.",
      icon: MessageSquareHeart,
      highlight: "Direct Weaver Contact"
    },
    {
      title: "Tamil Nadu Heritage",
      desc: "Deeply inspired by the historic weaving legacy of Tiruppur, Coimbatore, and Madathukulam regions of Tamil Nadu.",
      icon: Landmark,
      highlight: "Authentic Roots"
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold">
            The Handloom Promise
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
            Why Choose RJ Fabrics?
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#615251]">
            We bridge the gap between traditional Tamil Nadu handloom weavers and connoisseurs of authentic Indian textiles.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E8DFD0] shadow-xs hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#721B29]/10 group-hover:bg-[#721B29] text-[#721B29] group-hover:text-[#F3E5AB] flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-mono text-[#A89886] tabular-nums font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C7657]">
                    {item.highlight}
                  </span>

                  <h3 className="font-cinzel text-lg font-bold text-[#2D2424] mt-1 group-hover:text-[#721B29] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#615251] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE1] text-[11px] text-[#8C7657] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>RJ Fabrics Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#721B29] via-[#5C1622] to-[#4A154B] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold">Registered Handloom Enterprise</span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1">
              Serving Saree Lovers Across Tamil Nadu & India
            </h3>
            <p className="text-xs sm:text-sm text-[#E7DDD5] mt-1.5 max-w-xl">
              Official GSTIN: <strong>{BUSINESS_INFO.gstin}</strong> • Direct customer support via WhatsApp and phone calls.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
              className="px-5 py-2.5 rounded-lg bg-white text-[#721B29] hover:bg-[#F9F6F0] font-semibold text-xs sm:text-sm transition-colors shadow-sm"
            >
              Call {BUSINESS_INFO.phones[0]}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
