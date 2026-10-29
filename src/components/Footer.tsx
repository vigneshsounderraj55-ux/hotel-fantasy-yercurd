import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-forest-900 text-ivory overflow-hidden">
      <div className="section-padding pt-16 pb-28 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl font-light mb-2">Hotel Fantasy</h3>
            <p className="text-sage-200 text-sm uppercase tracking-wide-lg font-sans mb-5">Yercaud</p>
            <p className="text-cream/60 text-sm font-sans font-light leading-relaxed max-w-sm">
              {hotelConfig.tagline}. A warm, restful base for exploring the Shevaroy Hills.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-wide-lg text-cream/40 font-sans mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {hotelConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-wide-lg text-cream/40 font-sans mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a href={`tel:+${hotelConfig.contact.whatsapp}`} className="flex items-center gap-3 text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300">
                  <Phone size={15} className="text-sage-300" />
                  {hotelConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={hotelConfig.contact.emailHref} className="flex items-center gap-3 text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300">
                  <Mail size={15} className="text-sage-300" />
                  {hotelConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${hotelConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300"
                >
                  <MessageCircle size={15} className="text-sage-300" />
                  WhatsApp
                </a>
              </li>
              {hotelConfig.social.instagram && (
                <li>
                  <a
                    href={hotelConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center gap-3 text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300"
                  >
                    <Instagram size={15} className="text-sage-300" />
                    Instagram
                  </a>
                </li>
              )}
              <li>
                <a href={hotelConfig.contact.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-cream/70 hover:text-sage-200 text-sm font-sans font-light transition-colors duration-300">
                  <MapPin size={15} className="text-sage-300 mt-0.5 flex-shrink-0" />
                  {hotelConfig.contact.address}
                </a>
              </li>
            </ul>

            {/* Social (only show if configured) */}
            {hotelConfig.social.facebook && (
              <div className="flex gap-3 mt-5">
                <a href={hotelConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border border-sage-400/20 rounded-full text-sage-200 hover:border-sage-300 hover:text-sage-100 transition-all duration-500" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-forest-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs font-sans font-light text-center sm:text-left">
            © {new Date().getFullYear()} Hotel Fantasy, Yercaud. All rights reserved.
            <span className="block sm:inline sm:ml-2">Photography via Pexels. Replace with verified property images before launch.</span>
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-cream/60 hover:text-sage-200 text-xs uppercase tracking-wide-lg font-sans transition-colors duration-300"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
