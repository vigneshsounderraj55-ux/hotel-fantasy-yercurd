import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Generic scroll-triggered reveal for any element with [data-reveal].
 * Supports staggered children via [data-reveal-stagger].
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set('[data-reveal]', { opacity: 1, y: 0 });
      gsap.set('[data-reveal-stagger] > *', { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Single element reveals
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Staggered children
      gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax images
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.3');
        gsap.fromTo(
          el,
          { yPercent: -speed * 100 },
          {
            yPercent: speed * 100,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('[data-parallax-container]') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });

      // Clip-path reveals for images
      gsap.utils.toArray<HTMLElement>('[data-clip-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}

/**
 * Hero text reveal — runs on mount, not scroll triggered.
 */
export function useHeroReveal() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('[data-hero-eyebrow]', { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })
        .from(
          '[data-hero-line]',
          { y: 24, duration: 1.2 },
          '-=0.3'
        )
        .from('[data-hero-sub]', { opacity: 0, y: 30, duration: 1 }, '-=0.6')
        .from('[data-hero-scroll]', { opacity: 0, duration: 1 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return heroRef;
}
