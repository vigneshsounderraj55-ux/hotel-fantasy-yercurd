import { Wifi, Tv, Car, Coffee, BedDouble, Sparkles } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

const iconMap: Record<string, typeof Wifi> = {
  Wifi,
  Tv,
  Car,
  Coffee,
  BedDouble,
  Sparkles,
};

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-forest-800 py-24 md:py-32 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-sage-900 opacity-90" />

      <div className="relative section-padding">
        <div className="max-w-3xl mb-16">
          <p data-reveal className="eyebrow text-sage-200 mb-5">Amenities</p>
          <h2 data-reveal className="font-serif font-light text-ivory text-display text-balance">
            Everything you need, nothing you don&apos;t
          </h2>
          <p data-reveal className="mt-6 text-cream/70 text-lg font-sans font-light leading-relaxed max-w-xl">
            Verified facilities available to all guests. Additional arrangements can be discussed at the time of booking.
          </p>
        </div>

        <div data-reveal-stagger className="grid grid-cols-2 md:grid-cols-3 gap-px bg-forest-700/40">
          {hotelConfig.amenities.map((amenity) => {
            const Icon = iconMap[amenity.icon] || Sparkles;
            return (
              <div
                key={amenity.label}
                className="group bg-forest-800 p-8 md:p-10 flex flex-col items-start gap-4 transition-colors duration-500 hover:bg-forest-700"
              >
                <span className="flex items-center justify-center w-14 h-14 border border-sage-400/30 rounded-full text-sage-200 group-hover:border-sage-300 group-hover:text-sage-100 transition-all duration-500">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-1">{amenity.label}</h3>
                  <p className="text-cream/60 text-sm font-sans font-light">{amenity.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p data-reveal className="mt-10 text-sm text-cream/50 font-sans italic max-w-2xl">
          Listed amenities reflect publicly available information. Please confirm current availability of specific facilities with the hotel before your stay.
        </p>
      </div>
    </section>
  );
}
