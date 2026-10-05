import React, { useEffect } from 'react';
import { X, MessageCircle, ZoomIn, Check, Phone } from 'lucide-react';
import { SareeItem, getWhatsAppLink, BUSINESS_INFO } from '../data/sareeData';

interface LightboxModalProps {
  item: SareeItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappMsg = `Hello RJ Fabrics, I am interested in "${item.title}" from your ${item.category} collection. Please share available colors, prices, and details.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-saree-title"
    >
      <div
        className="relative bg-[#FCFBF7] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E0D7C6] flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 md:bg-[#EFE8DD] text-white md:text-[#4A3E3D] hover:bg-black/60 md:hover:bg-[#E2D8C6] transition-colors focus-visible:outline-2 focus-visible:outline-[#721B29]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: High Resolution Image & Zoom hint */}
        <div className="md:w-1/2 relative bg-[#F4EFE6] flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[460px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[60vh] md:max-h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] px-2.5 py-1 rounded flex items-center gap-1.5 backdrop-blur-xs">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Handloom Texture Preview</span>
          </div>
        </div>

        {/* Right Side: Details & Direct WhatsApp / Phone CTAs */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#721B29] font-bold">
                {item.category} Handloom
              </span>
              <span className="text-[#8C7657]">·</span>
              <span className="text-xs text-[#8C7657] font-medium">Tamil Nadu</span>
            </div>

            <h3 id="modal-saree-title" className="font-cinzel text-2xl font-bold text-[#2D2424] mt-2">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-[#5C4D4C] leading-relaxed">
              {item.description}
            </p>

            {/* Authentic craft points */}
            <div className="mt-5 space-y-2.5 border-t border-[#EAE3D2] pt-4">
              <div className="flex items-center gap-2.5 text-xs text-[#4A3E3D]">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Feature: <strong>{item.highlight}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#4A3E3D]">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Woven on authentic shuttle handlooms in Tiruppur</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#4A3E3D]">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Custom color requests available on order</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#4A3E3D]">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Direct dispatch from Narasingapuram Village</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-5 border-t border-[#EAE3D2] flex flex-col gap-3">
            <a
              href={getWhatsAppLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
                className="flex-1 flex items-center justify-center gap-1.5 border border-[#721B29] text-[#721B29] hover:bg-[#721B29] hover:text-white py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call ({BUSINESS_INFO.phones[0]})</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(`Enquiry for ${item.title}`)}&body=${encodeURIComponent(whatsappMsg)}`}
                className="flex-1 flex items-center justify-center gap-1.5 border border-[#8C7657] text-[#5C4D4C] hover:bg-[#F2EDE4] py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
              >
                <span>Email Us</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-[#7B6E6D]">
              Fast response on WhatsApp • Direct weaver pricing & availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
