import { Instagram } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

const whatsappMessage =
  'Hello Hotel Fantasy Yercaud, I would like to know more about your rooms and availability.';

export function FloatingSocialLinks() {
  const whatsappUrl = `https://wa.me/${hotelConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3 md:bottom-6 md:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-forest-900/20 transition-transform duration-300 hover:scale-105 md:h-14 md:w-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.04 2.67c-7.35 0-13.33 5.93-13.33 13.23 0 2.34.62 4.63 1.8 6.65L2.6 29.33l7-1.82c1.97 1.05 4.18 1.6 6.44 1.6 7.35 0 13.33-5.93 13.33-13.23S23.39 2.67 16.04 2.67Zm0 24.2c-2.02 0-4-.53-5.72-1.53l-.41-.24-4.15 1.08 1.11-4.01-.27-.42a10.7 10.7 0 0 1-1.67-5.75c0-5.99 4.98-10.87 11.11-10.87s11.11 4.88 11.11 10.87-4.98 10.87-11.11 10.87Zm6.1-8.14c-.33-.16-1.96-.95-2.26-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.5-2.65-1.6-.98-.85-1.64-1.91-1.83-2.24-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41s-1.14 1.11-1.14 2.71 1.17 3.14 1.33 3.36c.16.22 2.3 3.48 5.58 4.88.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.62-.09 1.96-.79 2.24-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38Z"
          />
        </svg>
        <span className="pointer-events-none absolute right-0 bottom-full mb-3 whitespace-nowrap rounded-sm bg-forest-900 px-3 py-2 text-xs text-ivory opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat with us on WhatsApp
        </span>
      </a>

      <a
        href={hotelConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        title="Follow us on Instagram"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-lg shadow-forest-900/20 transition-transform duration-300 hover:scale-105 md:h-14 md:w-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d62976]"
      >
        <Instagram size={23} strokeWidth={2} aria-hidden="true" />
        <span className="pointer-events-none absolute right-0 bottom-full mb-3 whitespace-nowrap rounded-sm bg-forest-900 px-3 py-2 text-xs text-ivory opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Follow us on Instagram
        </span>
      </a>
    </div>
  );
}
