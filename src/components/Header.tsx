import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/sareeData';

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Collections', href: '#collections' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#EAE3D2]'
            : 'bg-[#FCFBF7] border-b border-[#F0ECE1]'
        }`}
      >
        {/* Top subtle announcement / contact strip */}
        <div className="bg-[#721B29] text-[#F9F5EB] px-4 py-1.5 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-3">
          <span className="hidden sm:inline">Handloom Sarees • Madathukulam, Tiruppur, Tamil Nadu</span>
          <span className="hidden sm:inline text-amber-300">|</span>
          <span>Call or WhatsApp: <a href={`tel:${BUSINESS_INFO.phoneRaw[0]}`} className="underline hover:text-amber-200 transition-colors font-semibold">79043 96868</a></span>
          <span className="text-amber-300">|</span>
          <span className="hidden md:inline">GSTIN: {BUSINESS_INFO.gstin}</span>
        </div>

        {/* Main 3-zone Header Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#721B29]"
            aria-label="RJ Fabrics Home"
          >
            {/* Elegant Traditional Insignia / Monogram */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#721B29] to-[#4A154B] flex items-center justify-center text-[#F3E5AB] font-bold shadow-sm border border-[#D4AF37]/50 group-hover:scale-105 transition-transform duration-200">
              <span className="font-cinzel text-lg tracking-wider">RJ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-2xl font-bold tracking-wider text-[#721B29] group-hover:text-[#4A154B] transition-colors leading-tight">
                RJ FABRICS
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7657] font-medium font-sans">
                Handloom Sarees
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3E3D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#721B29] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#721B29] whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#721B29] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Actions */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink("Hello RJ Fabrics, I would like to enquire about your handloom saree collections.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366] whitespace-nowrap"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A3E3D] hover:text-[#721B29] rounded-lg hover:bg-[#F2ECE1] transition-colors focus-visible:outline-2 focus-visible:outline-[#721B29]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-xs transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-28 right-0 left-0 bg-[#FCFBF7] border-b border-[#E8DFD0] shadow-xl p-6 transition-all duration-200 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-3 pb-5 border-b border-[#E8DFD0]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#4A3E3D] hover:text-[#721B29] py-2 px-3 rounded-md hover:bg-[#F4EFE6] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppLink("Hello RJ Fabrics, I want to view your handloom saree collections.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (79043 96868)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
                className="w-full flex items-center justify-center gap-2 bg-[#721B29] text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-sm hover:bg-[#5E1622] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us ({BUSINESS_INFO.phones[0]})</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EAE3D2] text-xs text-[#7B6E6D] text-center">
              <p className="font-medium text-[#4A3E3D]">RJ FABRICS – Handloom Sarees</p>
              <p className="mt-0.5">{BUSINESS_INFO.addressShort}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
