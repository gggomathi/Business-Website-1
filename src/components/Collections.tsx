import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COLLECTIONS_LIST, CollectionCategory, getWhatsAppLink } from '../data/sareeData';

interface CollectionsProps {
  onSelectCollection: (categoryKey: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold">
            Curated Categories
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
            Our Collections
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#615251]">
            Explore our thoughtfully curated saree collections, designed to celebrate both everyday simplicity and grand milestones.
          </p>
        </div>

        {/* 6 Collections Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS_LIST.map((col: CollectionCategory) => {
            return (
              <div
                key={col.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E8DFD0] shadow-xs hover:shadow-xl hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with subtle zoom on hover */}
                <div className="relative h-64 overflow-hidden bg-[#F2EDE4]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FCFBF7]/90 backdrop-blur-xs text-[#721B29] border border-[#721B29]/20 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                    {col.badge}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-[#FCFBF7]">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#2D2424] group-hover:text-[#721B29] transition-colors">
                      {col.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#615251] leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#EFE8DD] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectCollection(col.categoryKey)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#721B29] hover:text-[#52131D] transition-colors focus-visible:outline-2 focus-visible:outline-[#721B29] group/btn"
                    >
                      <span>View Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={getWhatsAppLink(`Hello RJ Fabrics, I would like to see available sarees from the ${col.title} collection.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:text-[#1da851] font-semibold bg-[#25D366]/10 px-3 py-1.5 rounded hover:bg-[#25D366]/20 transition-colors"
                      aria-label={`Enquire about ${col.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
