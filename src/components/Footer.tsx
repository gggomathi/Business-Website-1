import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/sareeData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Collections', href: '#collections' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#261C1D] text-[#ECE4D8] border-t-2 border-[#D4AF37]/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D3132]">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#721B29] to-[#D4AF37] flex items-center justify-center text-white font-cinzel font-bold text-lg border border-[#D4AF37]/60">
                RJ
              </div>
              <div>
                <h3 className="font-cinzel text-2xl font-bold tracking-wider text-[#FBF8F2]">
                  RJ FABRICS
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-serif italic">
                  Handloom Sarees
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8AAA2] leading-relaxed max-w-sm">
              Bringing the timeless artistry and breathable luxury of traditional Tamil Nadu handloom sarees directly from the weaver to your wardrobe.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono tracking-wider px-2.5 py-1 rounded bg-[#352829] border border-[#503E40] text-[#D4AF37]">
                GSTIN: {BUSINESS_INFO.gstin}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F3E5AB] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#C5B8B1] hover:text-[#F3E5AB] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F3E5AB] uppercase tracking-wider mb-4">
              Contact RJ Fabrics
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C5B8B1]">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.addressShort}, Tamil Nadu</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C5B8B1]">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div className="flex gap-2">
                <a href={`tel:${BUSINESS_INFO.phoneRaw[0]}`} className="hover:text-white underline">
                  79043 96868
                </a>
                <span>|</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw[1]}`} className="hover:text-white underline">
                  98940 89557
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C5B8B1]">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white underline break-all">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F817B] gap-4">
          <p>© 2026 RJ Fabrics. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Handcrafted in Madathukulam, Tiruppur</span>
            <span>•</span>
            <span className="text-[#D4AF37]">Authentic Tamil Nadu Handloom</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
