import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Navigation, Copy, Check, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/sareeData';

export const ContactSection: React.FC = () => {
  const [copiedGstin, setCopiedGstin] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const copyGstin = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.gstin);
    setCopiedGstin(true);
    setTimeout(() => setCopiedGstin(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello RJ Fabrics, I have sent an enquiry from your website:
• Name: ${formName || 'Customer'}
• Phone: ${formPhone || 'Not provided'}
• Message: ${formMessage || 'Interested in handloom sarees'}`;

    window.open(getWhatsAppLink(msg), '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#721B29] font-bold">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-cinzel text-[#2D2424]">
            Contact RJ Fabrics
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#615251]">
            We are always happy to welcome customers, answer inquiries, and showcase our handloom weaves.
          </p>
        </div>

        {/* 2-Column Contact Info + Interactive Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Business Information Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD0] shadow-sm">
            
            <div className="flex items-center gap-3 pb-6 border-b border-[#EAE3D2]">
              <div className="w-12 h-12 rounded-xl bg-[#721B29] flex items-center justify-center text-[#F3E5AB] font-bold font-cinzel text-xl border border-[#D4AF37]/50 shadow-inner">
                RJ
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#2D2424]">
                  RJ FABRICS
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#721B29] font-semibold">
                  Handloom Sarees
                </p>
              </div>
            </div>

            {/* Address with Clickable Google Maps Action */}
            <div className="mt-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#721B29]/10 text-[#721B29] flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase font-bold text-[#8C7657] tracking-wider">
                  Location & Weaving Centre
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm sm:text-base text-[#2D2424] hover:text-[#721B29] font-medium leading-relaxed group transition-colors"
                  title="Click to open location in Google Maps"
                >
                  <span className="block font-semibold">No. 890, B, Sakthi Nagar,</span>
                  <span className="block">Narasingapuram Village,</span>
                  <span className="block">Krishnapuram Post, Madathukulam TK,</span>
                  <span className="block font-semibold text-[#721B29] group-hover:underline">
                    Tiruppur DT – 642111, Tamil Nadu, India.
                  </span>
                </a>
                <p className="text-xs text-[#8C7657] mt-1.5 flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#721B29]" />
                  <span>Tap address or Google Maps button below for directions</span>
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mt-6 pt-6 border-t border-[#F2ECE1] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#721B29]/10 text-[#721B29] flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase font-bold text-[#8C7657] tracking-wider">
                  Phone Numbers
                </p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
                    className="text-base font-bold text-[#2D2424] hover:text-[#721B29] underline decoration-[#D4AF37] decoration-2 transition-colors"
                  >
                    79043 96868
                  </a>
                  <span className="text-[#8C7657] font-medium">/</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw[1]}`}
                    className="text-base font-bold text-[#2D2424] hover:text-[#721B29] underline decoration-[#D4AF37] decoration-2 transition-colors"
                  >
                    98940 89557
                  </a>
                </div>
                <p className="text-xs text-[#786A69] mt-0.5">Direct weaver assistance in Tamil & English</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="mt-6 pt-6 border-t border-[#F2ECE1] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#721B29]/10 text-[#721B29] flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase font-bold text-[#8C7657] tracking-wider">
                  Email Enquiry
                </p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="mt-1 block text-sm sm:text-base font-semibold text-[#2D2424] hover:text-[#721B29] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* GSTIN Details with Copy Button */}
            <div className="mt-6 pt-6 border-t border-[#F2ECE1] bg-[#FAF8F3] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#721B29] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>GSTIN Registered Enterprise</span>
                </div>
                <p className="text-sm font-mono font-bold text-[#2D2424] mt-0.5 tracking-wider">
                  {BUSINESS_INFO.gstin}
                </p>
              </div>

              <button
                type="button"
                onClick={copyGstin}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCD3C3] bg-white text-xs font-semibold text-[#4A3E3D] hover:bg-[#F2EDE4] transition-colors"
              >
                {copiedGstin ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy GSTIN</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right: Quick Action Buttons & Contact Form */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* 4 Required Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink("Hello RJ Fabrics, I would like to make an enquiry regarding your handloom sarees.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw[0]}`}
                className="flex items-center justify-center gap-2 bg-[#721B29] hover:bg-[#5E1622] text-white p-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Us</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent("Enquiry - RJ Fabrics Handloom Sarees")}`}
                className="flex items-center justify-center gap-2 bg-[#4A154B] hover:bg-[#380e39] text-white p-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email Us</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#996e08] text-white p-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Google Maps</span>
              </a>
            </div>

            {/* Quick Enquiry Message Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD0] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-cinzel text-lg font-bold text-[#2D2424]">
                  Send a Quick Message
                </h4>
                <div className="flex items-center gap-1 text-xs text-[#786A69]">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>9:00 AM – 8:30 PM</span>
                </div>
              </div>

              {formSent && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your message has been initiated via WhatsApp! We will respond promptly.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A4D4C] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#DCD3C3] focus:border-[#721B29] focus:outline-none bg-[#FCFBF7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4D4C] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#DCD3C3] focus:border-[#721B29] focus:outline-none bg-[#FCFBF7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4D4C] mb-1">
                    Message / Saree Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Tell us what type of sarees or colors you need..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#DCD3C3] focus:border-[#721B29] focus:outline-none bg-[#FCFBF7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#721B29] hover:bg-[#5E1622] text-white py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
