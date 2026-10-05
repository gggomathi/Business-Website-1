import React, { useState } from 'react';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, SareeItem, getWhatsAppLink } from '../data/sareeData';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'All' | 'Cotton' | 'Traditional' | 'Wedding' | 'Festive' | 'New Arrivals';

interface ProductGalleryProps {
  activeCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  activeCategory = 'All',
  onCategoryChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    (activeCategory as CategoryFilter) || 'All'
  );
  const [activeItem, setActiveItem] = useState<SareeItem | null>(null);

  const categories: CategoryFilter[] = ['All', 'Cotton', 'Traditional', 'Wedding', 'Festive', 'New Arrivals'];

  const handleFilterClick = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FBF9F4] border-t border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
            Handloom Saree Gallery
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#615251]">
            Click any saree to preview details and zoom into weave textures. Tap “Enquire on WhatsApp” for real-time stock & color selections.
          </p>
        </div>

        {/* Category Filter Tabs - clean interactive segmented control */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#EFE8DC] rounded-xl border border-[#DFD6C7] max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleFilterClick(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#721B29] ${
                    isActive
                      ? 'bg-[#721B29] text-white shadow-xs'
                      : 'text-[#5C4E4D] hover:text-[#2D2424] hover:bg-[#E5DDCF]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const whatsappMsg = `Hello RJ Fabrics, I am interested in your "${item.title}" (${item.category} collection). Please share the available collections and details.`;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E8DFD0] shadow-xs hover:shadow-lg hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col group"
              >
                {/* Image card with hover actions */}
                <div
                  className="relative h-72 overflow-hidden bg-[#F4EFE6] cursor-pointer"
                  onClick={() => setActiveItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem(item);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/95 text-[#2D2424] hover:bg-white px-3.5 py-1.5 rounded-lg shadow-sm backdrop-blur-xs transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#721B29]" />
                      <span>Zoom & View Details</span>
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#FCFBF7]/95 text-[#721B29] text-[11px] font-semibold px-2.5 py-1 rounded shadow-2xs border border-[#E5DAC8]">
                    {item.highlight}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-[#FAF8F3]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7657]">
                      {item.category} Handloom
                    </span>
                    <h3
                      onClick={() => setActiveItem(item)}
                      className="font-cinzel text-lg font-bold text-[#2D2424] group-hover:text-[#721B29] transition-colors mt-1 cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#615251] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="mt-5 pt-4 border-t border-[#EFE8DD] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="text-xs font-semibold text-[#5C4D4C] hover:text-[#721B29] transition-colors"
                    >
                      Preview
                    </button>

                    <a
                      href={getWhatsAppLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all duration-200"
                      aria-label={`Enquire about ${item.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
};
