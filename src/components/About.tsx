import { hotelConfig } from '@/data/hotelConfig';
import { Leaf } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image collage with parallax */}
          <div className="lg:col-span-5 relative" data-parallax-container>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                data-clip-reveal
                src="https://images.pexels.com/photos/17928233/pexels-photo-17928233.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Tea plantations and rolling hills in South India"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-12 -right-4 md:-right-12 w-2/3 aspect-[4/3] overflow-hidden shadow-2xl hidden sm:block">
              <img
                data-parallax="0.15"
                src="https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Bright green valley with misty hills in the countryside"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Editorial text */}
          <div className="lg:col-span-7 lg:pl-8">
            <p data-reveal className="eyebrow mb-6 flex items-center gap-3">
              <Leaf size={16} className="text-sage-500" />
              Welcome to the Hills
            </p>

            <h2 data-reveal className="font-serif font-light text-ink text-display mb-8 text-balance">
              A quiet retreat among the
              <span className="italic text-sage-600"> coffee estates </span>
              of the Shevaroy Hills
            </h2>

            <div data-reveal className="space-y-6 text-muted text-lg font-sans font-light leading-relaxed max-w-xl">
              <p>{hotelConfig.intro}</p>
              <p>{hotelConfig.description}</p>
            </div>

            <div data-reveal className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-sage-300" />
              <p className="font-serif text-lg italic text-sage-600">{hotelConfig.establishedNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
