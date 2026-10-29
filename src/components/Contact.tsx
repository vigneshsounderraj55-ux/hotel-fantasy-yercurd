import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { hotelConfig } from '@/data/hotelConfig';

type FormState = {
  name: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  arrival: '',
  departure: '',
  guests: '2',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim() && !form.email.trim()) {
      e.phone = 'Please provide a phone number or email';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email';
    }
    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      e.phone = 'Enter exactly 10 digits after +91';
    }
    if (form.arrival && form.departure && form.departure < form.arrival) {
      e.departure = 'Departure must be after arrival';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    // Build a WhatsApp message — this is a demo; no backend submission.
    const msg = `Enquiry for Hotel Fantasy Yercaud%0A%0AName: ${form.name}%0APhone: ${form.phone ? `+91 ${form.phone}` : ''}%0AEmail: ${form.email}%0AArrival: ${form.arrival}%0ADeparture: ${form.departure}%0AGuests: ${form.guests}%0AMessage: ${form.message}`;
    const waUrl = `https://wa.me/${hotelConfig.contact.whatsapp}?text=${msg}`;

    // Open WhatsApp with the enquiry pre-filled
    window.open(waUrl, '_blank');
    setStatus('success');
    setForm(initial);
  };

  const waLink = `https://wa.me/${hotelConfig.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Hotel Fantasy Yercaud, I would like to know more about your rooms and availability.'
  )}`;

  return (
    <section id="contact" className="relative bg-forest-800 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-sage-900" />

      <div className="relative section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact info */}
          <div>
            <p data-reveal className="eyebrow text-sage-200 mb-5">Contact &amp; Booking</p>
            <h2 data-reveal className="font-serif font-light text-ivory text-display mb-8 text-balance">
              Plan your stay in the Shevaroy Hills
            </h2>
            <p data-reveal className="text-cream/70 text-lg font-sans font-light leading-relaxed mb-10 max-w-md">
              Send us an enquiry with your dates and we&apos;ll get back to you with availability and rates. Or reach us directly using the options below.
            </p>

            <div data-reveal-stagger className="space-y-5">
              <a
                href="tel:+919363727231"
                className="flex items-center gap-4 text-ivory hover:text-sage-200 transition-colors duration-300 group"
              >
                <span className="flex items-center justify-center w-12 h-12 border border-sage-400/30 rounded-full group-hover:border-sage-300 transition-colors duration-500">
                  <Phone size={18} className="text-sage-200" />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wide-lg text-cream/50 font-sans">Call</p>
                  <p className="font-sans text-lg font-normal tabular-nums tracking-wide">+91 93637 27231</p>
                </div>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-ivory hover:text-sage-200 transition-colors duration-300 group"
              >
                <span className="flex items-center justify-center w-12 h-12 border border-sage-400/30 rounded-full group-hover:border-sage-300 transition-colors duration-500">
                  <MessageCircle size={18} className="text-sage-200" />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wide-lg text-cream/50 font-sans">WhatsApp</p>
                  <p className="font-sans text-lg font-normal tabular-nums tracking-wide">{hotelConfig.contact.whatsappDisplay}</p>
                </div>
              </a>

              <a
                href={hotelConfig.contact.emailHref}
                className="flex items-center gap-4 text-ivory hover:text-sage-200 transition-colors duration-300 group"
              >
                <span className="flex items-center justify-center w-12 h-12 border border-sage-400/30 rounded-full group-hover:border-sage-300 transition-colors duration-500">
                  <Mail size={18} className="text-sage-200" />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wide-lg text-cream/50 font-sans">Email</p>
                  <p className="font-serif text-lg break-all">{hotelConfig.contact.email}</p>
                </div>
              </a>

              <div className="text-ivory">
                <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-wide-lg text-cream/50 font-sans">
                  <MapPin size={18} className="text-sage-200" />
                  Address
                </p>
                <iframe
                  src="https://maps.google.com/maps?q=HOTEL%20FANTASY%20YERCAUD%2C%20Hotel%20Fantasy%20Road%2C%20opposite%20to%20Forest%20Office%2C%20Mundagapadi%2C%20Yercaud%2C%20Tamil%20Nadu%20636602&output=embed"
                  title="Map to Hotel Fantasy Yercaud"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mt-3 h-[300px] w-full rounded-md border border-sage-400/30 md:h-[340px]"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=HOTEL%20FANTASY%20YERCAUD%2C%20Hotel%20Fantasy%20Road%2C%20opposite%20to%20Forest%20Office%2C%20Mundagapadi%2C%20Yercaud%2C%20Tamil%20Nadu%20636602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-xs uppercase tracking-wide-lg text-sage-200 transition-colors duration-300 hover:text-ivory"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: Enquiry form */}
          <div data-reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-ivory p-8 md:p-10 shadow-2xl"
            >
              <h3 className="font-serif text-2xl font-medium text-ink mb-6">Enquiry Form</h3>

              <div className="space-y-5">
                {/* Name */}
                <Field label="Full Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Your name"
                  />
                </Field>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone" error={errors.phone}>
                    <div className="phone-input-wrap">
                      <span aria-hidden="true">+91</span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        value={form.phone}
                        onChange={(e) => {
                          let digits = e.target.value.replace(/\D/g, '');
                          while (digits.length > 10 && digits.startsWith('91')) {
                            digits = digits.slice(2);
                          }
                          handleChange('phone', digits.slice(0, 10));
                        }}
                        className="phone-number-input"
                        placeholder="10-digit mobile number"
                        aria-label="10-digit mobile number"
                      />
                    </div>
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="form-input"
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Arrival" >
                    <input
                      type="date"
                      value={form.arrival}
                      onChange={(e) => handleChange('arrival', e.target.value)}
                      className="form-input"
                    />
                  </Field>
                  <Field label="Departure" error={errors.departure}>
                    <input
                      type="date"
                      value={form.departure}
                      onChange={(e) => handleChange('departure', e.target.value)}
                      className="form-input"
                    />
                  </Field>
                </div>

                {/* Guests */}
                <Field label="Guests">
                  <select
                    value={form.guests}
                    onChange={(e) => handleChange('guests', e.target.value)}
                    className="form-input"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </Field>
              </div>

              {/* Form notice */}
              <p className="mt-5 text-xs text-muted font-sans font-light italic leading-relaxed bg-sage-50 p-3 border-l-2 border-sage-300">
                {hotelConfig.formNotice}
              </p>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full mt-6">
                <Send size={16} />
                Send Enquiry
              </button>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-forest-600 text-sm font-sans"
                  >
                    <CheckCircle2 size={18} />
                    Your enquiry has been opened in WhatsApp. The hotel will respond directly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-terracotta text-sm font-sans"
                  >
                    <AlertCircle size={18} />
                    Please correct the highlighted fields and try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #DCE6D5;
          background: #FBF8F1;
          color: #2A2520;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #5E7A4D;
          box-shadow: 0 0 0 3px rgba(94, 122, 77, 0.1);
        }
        .form-input::placeholder {
          color: #B0A89E;
        }
        .phone-input-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0 1rem;
          border: 1px solid #DCE6D5;
          background: #FBF8F1;
          color: #2A2520;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .phone-input-wrap:focus-within {
          border-color: #5E7A4D;
          box-shadow: 0 0 0 3px rgba(94, 122, 77, 0.1);
        }
        .phone-number-input {
          flex: 1;
          min-width: 0;
          padding: 0.75rem 0;
          border: 0;
          outline: none;
          background: transparent;
          color: inherit;
          font: inherit;
        }
        .phone-number-input::placeholder {
          color: #B0A89E;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] uppercase tracking-wide-lg text-muted font-sans mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-terracotta font-sans">{error}</p>}
    </div>
  );
}
