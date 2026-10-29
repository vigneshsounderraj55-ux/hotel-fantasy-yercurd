import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Clock, Car, Wifi, Info } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

export function GuestInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const infoItems = [
    { icon: Clock, label: 'Check-in', value: hotelConfig.guestInfo.checkIn },
    { icon: Clock, label: 'Check-out', value: hotelConfig.guestInfo.checkOut },
    { icon: Car, label: 'Parking', value: hotelConfig.guestInfo.parking },
    { icon: Wifi, label: 'Wi-Fi', value: hotelConfig.guestInfo.wifi },
  ];

  return (
    <section id="guest-info" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Quick info cards */}
          <div>
            <p data-reveal className="eyebrow mb-5">Guest Information</p>
            <h2 data-reveal className="font-serif font-light text-ink text-display mb-8 text-balance">
              Practical details for your stay
            </h2>

            <div data-reveal-stagger className="grid grid-cols-2 gap-px bg-sage-100">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-ivory p-6 flex flex-col gap-3">
                    <Icon size={22} className="text-sage-500" />
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-wide-lg text-muted font-sans mb-1">
                        {item.label}
                      </p>
                      <p className="font-serif text-lg text-ink">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div data-reveal className="mt-8 p-6 border-l-2 border-sage-300 bg-sage-50/50">
              <div className="flex gap-3">
                <Info size={20} className="text-sage-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted font-sans font-light leading-relaxed">
                  {hotelConfig.guestInfo.policy}
                </p>
              </div>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div>
            <h3 data-reveal className="font-serif text-2xl font-light text-ink mb-8">
              Frequently asked questions
            </h3>

            <div data-reveal className="space-y-2">
              {hotelConfig.faqs.map((faq, i) => (
                <div key={i} className="border-b border-sage-100">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-sans text-base text-ink pr-4 group-hover:text-sage-600 transition-colors duration-300">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-sage-500">
                      {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-muted text-sm font-sans font-light leading-relaxed pr-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
