import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

export function Gallery() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(hotelConfig.gallery.map((g) => g.category)));
    return ['All', ...unique];
  }, []);

  const [activeCat, setActiveCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCat === 'All') return hotelConfig.gallery;
    return hotelConfig.gallery.filter((g) => g.category === activeCat);
  }, [activeCat]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [closeLightbox, prev, next]
  );

  // Attach keyboard listener when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [lightboxIndex, handleKey]);

  return (
    <section id="gallery" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow mb-5">Gallery</p>
            <h2 data-reveal className="font-serif font-light text-ink text-display text-balance">
              A glimpse of the hills
            </h2>
          </div>

          {/* Filters */}
          <div data-reveal className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wide-lg font-sans transition-all duration-300 ${
                  activeCat === cat
                    ? 'bg-forest-700 text-ivory'
                    : 'border border-sage-300 text-forest-700 hover:bg-sage-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
          {filtered.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden break-inside-avoid"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/25 transition-colors duration-500 flex items-end p-4">
                <span className="text-ivory text-xs uppercase tracking-wide-lg font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-ivory/70 hover:text-ivory transition-colors z-10"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-ivory/70 hover:text-ivory transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.figure
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <figcaption className="text-center mt-4 text-cream/70 text-sm font-sans font-light">
                {filtered[lightboxIndex].alt}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-ivory/70 hover:text-ivory transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
