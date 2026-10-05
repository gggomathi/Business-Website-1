import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/sareeData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FCFBF7]">
      {/* Subtle traditional gold background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#721B29]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant craft badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#721B29]/10 border border-[#721B29]/20 text-[#721B29] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Authentic Tamil Nadu Handloom Weaves</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2424] leading-[1.15] tracking-tight font-cinzel text-balance">
              Timeless Tradition,{' '}
              <span className="text-[#721B29] italic font-cormorant font-normal block sm:inline">
                Woven with Elegance
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-[#5A4D4C] font-cormorant italic leading-relaxed max-w-2xl">
              “Discover beautiful handloom sarees crafted with traditional artistry and care.”
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#6E5E5D] leading-relaxed max-w-xl">
              Rooted in Tamil Nadu’s celebrated weaving heritage, RJ FABRICS brings you pure handloom cottons, heritage temple borders, and festive zari sarees directly from skilled artisans.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#721B29] hover:bg-[#5E1622] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#721B29]"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppLink("Hello RJ Fabrics, I am interested in your handloom sarees. Please share the available collections and details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="mt-10 pt-8 border-t border-[#EAE2D3] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-medium text-[#4A3E3D]">Pure Handloom Weave</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-medium text-[#4A3E3D]">GST Registered</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-medium text-[#4A3E3D]">Tiruppur, Tamil Nadu</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative traditional gold border frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-tr from-[#D4AF37]/15 to-transparent pointer-events-none transform rotate-1 hidden sm:block" />

              {/* Main Saree Showcase Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#E7DFD0] bg-white group">
                <img
                  src="/src/assets/images/hero_handloom_saree_1791210931846.jpg"
                  alt="Traditional Tamil Nadu Handloom Saree by RJ Fabrics"
                  className="w-full h-[430px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid caption card */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">RJ Fabrics Exclusive</p>
                      <h3 className="font-cinzel text-xl font-bold tracking-wide mt-0.5">Heritage Handloom Saree</h3>
                      <p className="text-xs text-[#EAE4DC] mt-1 font-sans">Crafted with fine cotton & authentic zari borders</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#721B29]/90 border border-[#D4AF37]/50 text-[#F3E5AB]">
                        In Loom
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quick Trust Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FCFBF7] border border-[#E0D7C6] rounded-xl p-3.5 shadow-lg flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-full bg-[#721B29] flex items-center justify-center text-[#F3E5AB] font-bold text-sm shrink-0 shadow-inner">
                  RJ
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D2424] leading-tight">Direct Weaver Craft</p>
                  <p className="text-[11px] text-[#786A69] leading-tight mt-0.5">Prompt WhatsApp service</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
