import { BedDouble, Users, Maximize, Tv, Wifi, Check } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

const iconMap: Record<string, typeof BedDouble> = {
  BedDouble,
  Users,
  Maximize,
  Tv,
  Wifi,
};

export function Rooms() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="relative bg-cream py-[86px] md:py-[115px] overflow-hidden">
      <div className="section-padding">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <p data-reveal className="eyebrow mb-4">Rooms &amp; Stays</p>
          <h2 data-reveal className="font-serif font-light text-ink text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.1] text-balance">
            Comfortable rooms, furnished for restful hill-station days
          </h2>
          <p data-reveal className="mt-5 text-muted text-base font-sans font-light leading-relaxed max-w-xl">
            Every room is furnished with the essentials for a relaxed stay. Categories and details below — confirm specific arrangements with the hotel at the time of your enquiry.
          </p>
        </div>

        {/* Room cards */}
        <div data-reveal-stagger className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
          {hotelConfig.rooms.map((room) => (
            <article
              key={room.id}
              className="group flex flex-col bg-ivory overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ease-smooth"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-serif text-xl font-medium text-ink mb-2">{room.name}</h3>
                <p className="text-muted text-sm font-sans font-light leading-relaxed mb-5 flex-1">
                  {room.description}
                </p>

                {/* Quick specs */}
                <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-sage-100">
                  <div className="flex flex-col items-center text-center gap-1.5">
                    <Users size={18} className="text-sage-500" />
                    <span className="text-[0.7rem] text-muted font-sans">{room.occupancy}</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5">
                    <BedDouble size={18} className="text-sage-500" />
                    <span className="text-[0.7rem] text-muted font-sans">{room.bedType}</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5">
                    <Maximize size={18} className="text-sage-500" />
                    <span className="text-[0.7rem] text-muted font-sans">{room.size}</span>
                  </div>
                </div>

                {/* Amenities list */}
                <ul className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
                  {room.amenities.map((a) => {
                    const Icon = iconMap[a] || Check;
                    return (
                      <li key={a} className="flex items-center gap-1.5 text-xs text-muted font-sans">
                        <Icon size={14} className="text-sage-400" />
                        {a}
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="btn-outline w-full border-sage-300 text-forest-700 hover:bg-forest-700 hover:text-ivory"
                >
                  Enquire
                </button>
              </div>
            </article>
          ))}
        </div>

        <p data-reveal className="mt-8 text-sm text-muted font-sans italic text-center max-w-2xl mx-auto">
          Room details are provided for guidance and may change. Please confirm current room configurations, rates, and availability with the hotel before booking.
        </p>
      </div>
    </section>
  );
}
