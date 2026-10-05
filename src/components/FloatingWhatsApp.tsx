import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { getWhatsAppLink } from '../data/sareeData';

export const FloatingWhatsApp: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top button (Bottom Left) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#721B29] text-white shadow-lg hover:bg-[#5E1622] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#721B29] border border-[#D4AF37]/40"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
        <span className="hidden sm:inline-block bg-[#FCFBF7] text-[#2D2424] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-[#E0D7C6] transition-opacity duration-200 opacity-90 group-hover:opacity-100">
          WhatsApp Enquiry
        </span>
        <a
          href={getWhatsAppLink("Hello RJ Fabrics, I am visiting your website and would like to see your latest handloom sarees.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366]"
          aria-label="Chat with RJ Fabrics on WhatsApp"
        >
          {/* Subtle pulse animation indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </>
  );
};
