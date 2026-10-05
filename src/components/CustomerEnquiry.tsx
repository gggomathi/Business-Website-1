import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/sareeData';

export const CustomerEnquiry: React.FC = () => {
  const [occasion, setOccasion] = useState<string>('Wedding & Celebration');
  const [fabric, setFabric] = useState<string>('Pure Cotton Handloom');
  const [colorPref, setColorPref] = useState<string>('Maroon & Gold Zari');
  const [customNote, setCustomNote] = useState<string>('');

  const occasions = [
    'Wedding & Celebration',
    'Festive / Puja',
    'Daily & Office Wear',
    'Gifting for Loved Ones',
    'Traditional Ceremony'
  ];

  const fabrics = [
    'Pure Cotton Handloom',
    'Traditional Temple Border',
    'Rich Zari Bridal Weave',
    'Lightweight Soft Weave'
  ];

  const colors = [
    'Maroon & Gold Zari',
    'Royal Purple & Violet',
    'Turmeric Yellow & Mustard',
    'Peacock Blue & Green',
    'Pastel / Elegant Neutral'
  ];

  const handleCustomWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello RJ Fabrics, I am looking for a saree with the following preferences:
• Occasion: ${occasion}
• Preferred Fabric: ${fabric}
• Color Palette: ${colorPref}${customNote ? `\n• Notes: ${customNote}` : ''}

Please share matching sarees and photos from your collection.`;
    
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE6] border-t border-[#E8DFCE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#FCFBF7] rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl overflow-hidden p-6 sm:p-10 relative">
          
          {/* Subtle Top Gold Decorative Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#721B29] via-[#D4AF37] to-[#4A154B]" />

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Personalized Saree Assistance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
              Looking for a Saree?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#5A4B4A] font-cormorant italic">
              “Tell us what you are looking for and we will help you find the right collection.”
            </p>

            <p className="mt-2 text-xs sm:text-sm text-[#6E5E5D]">
              Whether it's an auspicious bridal drape, a breathable handloom cotton for summer, or a special gift, we are here to assist you directly on WhatsApp.
            </p>
          </div>

          {/* Interactive Requirement Helper */}
          <form onSubmit={handleCustomWhatsAppEnquiry} className="mt-8 bg-white rounded-xl p-5 sm:p-7 border border-[#E8DFD0] shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A3E3D] mb-4">
              Select Your Preferences (Optional Fast Finder)
            </h3>

            {/* Occasion Selection */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#665655] mb-2">
                1. Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors font-medium ${
                      occasion === occ
                        ? 'bg-[#721B29] text-white'
                        : 'bg-[#F4EFE6] text-[#4A3E3D] hover:bg-[#EAE3D4]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Preference */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#665655] mb-2">
                2. Preferred Fabric
              </label>
              <div className="flex flex-wrap gap-2">
                {fabrics.map((fab) => (
                  <button
                    key={fab}
                    type="button"
                    onClick={() => setFabric(fab)}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors font-medium ${
                      fabric === fab
                        ? 'bg-[#721B29] text-white'
                        : 'bg-[#F4EFE6] text-[#4A3E3D] hover:bg-[#EAE3D4]'
                    }`}
                  >
                    {fab}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Preference */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#665655] mb-2">
                3. Color Tone
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((col) => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setColorPref(col)}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors font-medium ${
                      colorPref === col
                        ? 'bg-[#721B29] text-white'
                        : 'bg-[#F4EFE6] text-[#4A3E3D] hover:bg-[#EAE3D4]'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#665655] mb-1.5">
                4. Any specific requirement or budget preference (optional):
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g. Need matching blouse piece, or specific temple border style..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-[#DCD3C3] focus:border-[#721B29] focus:outline-none bg-[#FCFBF7]"
              />
            </div>

            {/* WhatsApp Send Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Send My Saree Requirement to WhatsApp (+91 79043 96868)</span>
            </button>
          </form>

          {/* 3 Main Direct Contact Options as Required */}
          <div className="mt-8 pt-6 border-t border-[#EAE2D3] grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={getWhatsAppLink("Hello RJ Fabrics, I am looking for a saree. Please help me choose from your collection.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#721B29] hover:bg-[#5E1622] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us ({BUSINESS_INFO.phones[0]})</span>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent("Enquiry for Handloom Sarees - RJ Fabrics")}&body=${encodeURIComponent("Hello RJ Fabrics team,\n\nI am looking for handloom sarees. Please share available collections.\n\nThank you.")}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4A154B] hover:bg-[#380e39] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
