import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useHeroReveal } from '@/hooks/useScrollReveal';
import { MistParticles } from '@/components/MistParticles';

export function Hero() {
  const heroRef = useHeroReveal();
  const prefersReducedMotion = useReducedMotion();

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[640px] md:min-h-[90svh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.pexels.com/photos/14844302/pexels-photo-14844302.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Misty green hills of a South Indian hill station at sunrise"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          transition={{ duration: 18, ease: 'linear' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/55 via-forest-900/30 to-forest-900/70" />
      </div>

      {/* Three.js mist particles */}
      <MistParticles className="absolute inset-0 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <p
          data-hero-eyebrow
          className="eyebrow mb-5 text-xs text-cream md:text-sm"
        >
          YERCAUD · TAMIL NADU, INDIA
        </p>

        <h1
          data-hero-line
          className="font-serif font-light leading-[0.98] tracking-[-0.025em] text-ivory text-balance drop-shadow-lg"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            textShadow: '0 3px 18px rgba(0, 0, 0, 0.45)',
          }}
        >
          Escape to the Hills
        </h1>

        <p
          data-hero-sub
          className="mx-auto mt-6 max-w-2xl text-base font-sans font-light leading-relaxed text-ivory/95 md:mt-7 md:text-lg"
        >
          Discover the tranquility of Hotel Fantasy, Yercaud.
        </p>

        <div data-hero-cta className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
          <button
            onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta-enter hero-cta-enter-first btn-primary min-w-48 border border-ivory bg-ivory text-forest-800 shadow-lg shadow-forest-900/15 transition-transform hover:scale-[1.02] hover:border-cream hover:bg-cream active:scale-[0.99]"
          >
            Explore Rooms
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta-enter hero-cta-enter-second btn-outline min-w-48 border-forest-700 bg-forest-700 text-ivory shadow-lg shadow-forest-900/15 transition-transform hover:scale-[1.02] hover:border-forest-800 hover:bg-forest-800 hover:text-ivory active:scale-[0.99]"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        data-hero-scroll
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-ivory/70 hover:text-ivory transition-colors duration-300"
        aria-label="Scroll to content"
      >
        <span className="text-[0.6rem] uppercase tracking-wide-lg font-sans">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
    </section>
  );
}
