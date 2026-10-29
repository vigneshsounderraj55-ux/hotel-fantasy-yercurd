import { hotelConfig } from '@/data/hotelConfig';

export function Experiences() {
  return (
    <section id="experiences" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <div className="max-w-3xl mb-16">
          <p data-reveal className="eyebrow mb-5">Experiences</p>
          <h2 data-reveal className="font-serif font-light text-ink text-display text-balance">
            Moments worth slowing down for
          </h2>
          <p data-reveal className="mt-6 text-muted text-lg font-sans font-light leading-relaxed max-w-xl">
            Simple, authentic experiences available on request — arranged to make the most of Yercaud&apos;s cool evenings and green surroundings.
          </p>
        </div>

        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {hotelConfig.experiences.map((exp) => (
            <article
              key={exp.title}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <span className="text-[0.65rem] uppercase tracking-wide-lg text-sage-200 font-sans mb-3">
                  {exp.tag}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory mb-3">
                  {exp.title}
                </h3>
                <p className="text-cream/80 text-sm font-sans font-light leading-relaxed max-w-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-smooth overflow-hidden">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
