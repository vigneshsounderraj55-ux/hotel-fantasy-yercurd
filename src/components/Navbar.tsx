import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-forest-900/25 backdrop-blur-sm py-5'
        }`}
      >
        <nav className="section-padding flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="group flex items-center gap-3 md:gap-4"
          >
            <img
              src="/hotel-logo.png"
              alt=""
              className="h-10 w-10 shrink-0 object-contain md:h-14 md:w-14"
            />
            <span className="flex flex-col leading-none">
              <span
                className={`font-serif text-[1.75rem] md:text-[2rem] font-medium tracking-[-0.035em] transition-colors duration-500 ${
                  scrolled ? 'text-forest-700' : 'text-ivory'
                }`}
              >
                Hotel Fantasy
              </span>
              <span
                className={`mt-1 text-[0.68rem] uppercase tracking-[0.22em] font-sans transition-colors duration-500 ${
                  scrolled ? 'text-sage-500' : 'text-cream/90'
                }`}
              >
                Yercaud
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {hotelConfig.nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className={`relative font-sans text-sm tracking-wide transition-colors duration-300 group ${
                    scrolled ? 'text-ink hover:text-sage-500' : 'text-ivory/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-px bg-sage-400 w-0 group-hover:w-full transition-all duration-400 ease-smooth" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className={`border px-6 py-3 font-sans text-xs uppercase tracking-wide-lg transition-all duration-500 ease-smooth ${
                  scrolled
                    ? 'border-forest-700 bg-forest-700 text-ivory hover:border-forest-800 hover:bg-forest-800'
                    : 'border-ivory/45 bg-ivory/10 text-ivory backdrop-blur-sm hover:bg-ivory hover:text-forest-700'
                }`}
              >
                Enquire
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className={`xl:hidden transition-colors duration-500 ${scrolled ? 'text-forest-700' : 'text-ivory'}`}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest-800/95 backdrop-blur-lg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-3">
                <img
                  src="/hotel-logo.png"
                  alt=""
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <span className="flex flex-col font-serif text-[1.75rem] leading-none tracking-[-0.035em] text-ivory">
                  Hotel Fantasy
                  <span className="mt-1 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-cream/80">
                    Yercaud
                  </span>
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-ivory"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {hotelConfig.nav.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + hotelConfig.nav.indexOf(item) * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="font-serif text-3xl text-ivory hover:text-sage-200 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
