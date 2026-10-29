import { useState } from 'react';
import { ArrowUpRight, Compass, Landmark, Leaf, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const itineraries = [
  {
    id: 'day-1',
    label: 'Day 1',
    title: 'The Highlights',
    subtitle: 'Discover the iconic sights and peaceful landscapes of Yercaud.',
    icon: Compass,
    stops: [
      'Pagoda Point',
      'Yercaud Lake',
      'Anna Park',
      'Boat House',
      'Lady’s Seat',
      'Gent’s Seat',
      'Rose Garden',
      'Botanical Garden',
      'Poppy Hills',
      'Peeku Park',
      'Sky Park',
      'Annamalaiyar Temple',
      'Aeropark',
      'Lake Park',
      'Paintball at Yercaud',
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    title: 'Nature & Scenic Drives',
    subtitle: 'Enjoy waterfalls, mist-covered hills, forest scenery, and beautiful mountain roads.',
    icon: Leaf,
    note: 'Waterfall and trail access can depend on weather and local conditions. Visit nearby nature trails only where public access is confirmed locally.',
    stops: [
      'Kiliyur Falls',
      'Karadiyur View Point',
      'Manjakuttai View Point',
      'Cauvery Peak',
      'Shevaroy Hills scenic drive',
      'Yercaud Lake — optional relaxing stop',
      'Additional nearby nature trails — only where publicly accessible and verified',
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    title: 'Culture & Heritage',
    subtitle: 'Explore Yercaud’s spiritual landmarks, heritage sites, and quieter attractions.',
    icon: Landmark,
    stops: [
      'Shevaroy Temple',
      'Raja Rajeswari Temple',
      'Sri Chakra Mahameru Temple',
      'Montfort School — view from permitted public areas',
      'Retreat Church & View Point',
      'Sacred Heart Church',
      'Yercaud Lake — optional final stop',
    ],
  },
];

const mapsSearchUrl = (place: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place}, Yercaud, Tamil Nadu`)}`;

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Hotel%20Fantasy%2C%20Road%2C%20opposite%20to%20Forest%20Office%2C%20Mundagapadi%2C%20Yercaud%2C%20Tamil%20Nadu%20636602';

export function Explore() {
  const [selectedDay, setSelectedDay] = useState(0);
  const itinerary = itineraries[selectedDay];
  const DayIcon = itinerary.icon;

  return (
    <section id="explore" className="relative overflow-hidden bg-sage-50 py-20 md:py-28">
      <div className="section-padding">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p data-reveal className="eyebrow mb-4">Explore Yercaud</p>
          <h2 data-reveal className="font-serif font-light text-ink text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08] text-balance">
            Discover Yercaud, One Day at a Time
          </h2>
          <p data-reveal className="mt-4 max-w-2xl text-base font-sans font-light leading-relaxed text-muted md:text-lg">
            From misty mountain viewpoints and peaceful lakes to waterfalls, gardens, and heritage temples, discover the best of Yercaud with our thoughtfully arranged travel guide.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Choose a Yercaud itinerary day"
          data-reveal-stagger
          className="mb-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4"
        >
          {itineraries.map((day, index) => {
            const Icon = day.icon;
            const isSelected = selectedDay === index;

            return (
              <button
                key={day.id}
                id={`explore-day-tab-${index + 1}`}
                type="button"
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                aria-controls="explore-itinerary-panel"
                onClick={() => setSelectedDay(index)}
                onKeyDown={(event) => {
                  const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
                  if (direction === 0) return;

                  event.preventDefault();
                  const nextDay = (index + direction + itineraries.length) % itineraries.length;
                  setSelectedDay(nextDay);
                  document.getElementById(`explore-day-tab-${nextDay + 1}`)?.focus();
                }}
                className={`group flex min-h-20 items-center gap-4 border px-5 py-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 md:min-h-24 md:px-6 ${
                  isSelected
                    ? 'border-forest-700 bg-forest-700 text-ivory shadow-sm'
                    : 'border-sage-200 bg-ivory/70 text-ink hover:border-forest-600 hover:bg-ivory'
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isSelected ? 'bg-ivory/10 text-sage-200' : 'bg-sage-100 text-forest-700 group-hover:bg-sage-200'
                }`}>
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-[0.65rem] font-sans font-medium uppercase tracking-[0.18em] ${
                    isSelected ? 'text-sage-200' : 'text-sage-600'
                  }`}>
                    {day.label}
                  </span>
                  <span className="mt-1 block font-serif text-xl leading-tight md:text-2xl">{day.title}</span>
                </span>
                <span className={`shrink-0 text-right font-sans text-xs ${
                  isSelected ? 'text-cream/75' : 'text-muted'
                }`}>
                  <span className="block font-medium">{day.stops.length}</span>
                  <span>stops</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={itinerary.id}
          id="explore-itinerary-panel"
          role="tabpanel"
          aria-labelledby={`explore-day-tab-${selectedDay + 1}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="border border-sage-200 bg-ivory/80 px-5 py-6 shadow-sm md:px-8 md:py-7"
        >
          <div className="mb-5 flex items-start gap-3 border-b border-sage-100 pb-5 md:mb-6">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-700">
              <DayIcon size={18} strokeWidth={1.6} />
            </span>
            <div>
              <p className="text-[0.65rem] font-sans font-medium uppercase tracking-[0.18em] text-sage-600">
                {itinerary.label} · {itinerary.stops.length} attractions
              </p>
              <h3 className="mt-1 font-serif text-2xl font-medium leading-tight text-ink md:text-3xl">
                {itinerary.title}
              </h3>
              <p className="mt-1 text-sm font-sans font-light leading-relaxed text-muted md:text-base">
                {itinerary.subtitle}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {itinerary.stops.map((stop, index) => (
              <li key={`${itinerary.id}-${stop}`} className="border-b border-sage-100 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                <a
                  href={mapsSearchUrl(stop.replace(/ — .*/, ''))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${stop} on Google Maps`}
                  className="group flex min-h-[3.55rem] items-center gap-3 py-3 transition-colors duration-200 hover:text-forest-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest-700"
                >
                  <span className="w-7 shrink-0 text-right font-sans text-xs tabular-nums text-sage-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <MapPin size={16} strokeWidth={1.7} className="shrink-0 text-sage-600 transition-colors group-hover:text-forest-700" />
                  <span className="min-w-0 flex-1 font-sans text-sm font-normal leading-snug text-ink md:text-[0.95rem]">
                    {stop}
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-sage-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ol>

          {itinerary.note && (
            <p className="mt-5 border-l-2 border-sage-400 pl-3 font-sans text-xs font-light leading-relaxed text-muted md:text-sm">
              {itinerary.note}
            </p>
          )}
        </motion.div>

        <div data-reveal className="mt-8 border border-sage-200 bg-forest-800 px-5 py-6 text-ivory md:mt-10 md:flex md:items-center md:justify-between md:gap-8 md:px-8 md:py-7">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-sans font-medium uppercase tracking-[0.18em] text-sage-200">
              A considered stay in the hills
            </p>
            <h3 className="mt-1 font-serif text-2xl font-light text-ivory md:text-3xl">
              Plan Your Yercaud Stay
            </h3>
            <p className="mt-2 text-sm font-sans font-light leading-relaxed text-cream/75">
              Make the most of your stay at Hotel Fantasy Yercaud. Choose an itinerary that suits your interests and enjoy the hills at your own pace.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
            <a href="#contact" className="btn-primary !px-5 !py-3 text-center !text-xs">
              Enquire About Your Stay
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cream/50 px-5 py-3 text-center font-sans text-xs font-medium uppercase tracking-wide text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              <MapPin size={15} />
              Get Directions
            </a>
          </div>
        </div>
        <p className="mt-4 text-center font-sans text-xs font-light leading-relaxed text-muted">
          Suggested itineraries are flexible. Travel times and access may vary depending on weather, traffic, and local conditions.
        </p>
      </div>
    </section>
  );
}
