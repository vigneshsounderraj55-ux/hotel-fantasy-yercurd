/**
 * HOTEL FANTASY YERCAUD — EDITABLE CONFIGURATION
 * =============================================
 * Edit the values below to update the website's content.
 * Phone, WhatsApp, address, room info, and booking links all live here.
 *
 * IMPORTANT: These are placeholder contact details. Replace with verified
 * information from the property owner before going live.
 */

export const hotelConfig = {
  name: "Hotel Fantasy",
  location: "Yercaud",
  region: "Tamil Nadu, India",
  tagline: "A serene hill-station retreat in the Shevaroy Hills",
  intro:
    "Perched in the cool, mist-laden heights of Yercaud, Hotel Fantasy is a quiet escape among coffee plantations, silver oak trees, and the gentle roll of the Eastern Ghats.",
  description:
    "Yercaud sits at over 1,500 metres in the Shevaroy Hills — a hill station less trodden than its cousins, where mornings arrive wrapped in fog and evenings smell of eucalyptus and wood smoke. Hotel Fantasy offers comfortable, furnished accommodation with warm hospitality, a restful atmosphere, and easy access to the lake, viewpoints, and forest trails that make this corner of Tamil Nadu so memorable.",
  establishedNote: "Family-run hospitality in the heart of the Shevaroy Hills",

  // ─── CONTACT DETAILS (verify before publishing) ───────────────────────
  contact: {
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    whatsapp: "919363727231",
    whatsappDisplay: "+91 93637 27231",
    email: "hotelfantasyycd@gmail.com",
    emailHref: "mailto:hotelfantasyycd@gmail.com",
    address: "HOTEL FANTASY YERCAUD, Hotel Fantasy, Road, opposite to Forest Office, Mundagapadi, Yercaud, Tamil Nadu 636602.",
    mapEmbedQuery: "HOTEL FANTASY YERCAUD, Hotel Fantasy, Road, opposite to Forest Office, Mundagapadi, Yercaud, Tamil Nadu 636602",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=HOTEL%20FANTASY%20YERCAUD%2C%20Hotel%20Fantasy%2C%20Road%2C%20opposite%20to%20Forest%20Office%2C%20Mundagapadi%2C%20Yercaud%2C%20Tamil%20Nadu%20636602",
  },

  // ─── SOCIAL LINKS (verify before publishing) ─────────────────────────
  social: {
    instagram: "https://www.instagram.com/hotel_fantasy_yercaud?vrfl=amp5ZDJvN3loeGdl",
    facebook: "",
  },

  // ─── FORM DISCLOSURE ─────────────────────────────────────────────────
  formNotice:
    "This is an enquiry form, not a live reservation system. Submitting this form sends your details directly to the hotel for a manual response — no payment is processed and no booking is confirmed until the hotel confirms with you directly.",

  // ─── ROOM CATEGORIES (confirm details with the owner) ────────────────
  rooms: [
    {
      id: "friends-room",
      name: "Friends Room",
      description:
        "A comfortable and spacious room for friends traveling together, featuring cozy bedding and a relaxing atmosphere for a memorable stay.",
      occupancy: "4+ Guests",
      bedType: "Double Bed",
      size: "approx. 200 sq ft",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Spacious hotel bedroom with a double bed and a comfortable sitting area",
      amenities: ["Television", "Wi-Fi", "Furnished", "Daily Housekeeping"],
    },
    {
      id: "couples-room",
      name: "Couples Room",
      description:
        "A cozy and elegant room designed for couples, with a comfortable double bed, warm lighting, and a peaceful atmosphere for a relaxing getaway.",
      occupancy: "2 Guests",
      bedType: "One Double Bed",
      size: "approx. 260 sq ft",
      image:
        "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Warmly lit elegant hotel room with a comfortable double bed",
      amenities: ["Television", "Wi-Fi", "Sitting Area", "Furnished"],
    },
    {
      id: "family-room",
      name: "Family Room",
      description:
        "A spacious family-friendly room with a double bed and a single bed, offering comfortable accommodation for families enjoying a holiday in Yercaud.",
      occupancy: "5+ Guests",
      bedType: "Double Bed + Single Bed",
      size: "approx. 340 sq ft",
      image:
        "https://images.pexels.com/photos/29000006/pexels-photo-29000006.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Spacious family hotel bedroom showing a double bed and a separate single bed",
      amenities: ["Television", "Wi-Fi", "Living Area", "Furnished", "Parking"],
    },
  ],

  // ─── AMENITIES — only verified facilities ────────────────────────────
  amenities: [
    { icon: "Wifi", label: "Wi-Fi Access", note: "Available for all guests" },
    { icon: "Tv", label: "Television", note: "In every room" },
    { icon: "Car", label: "Parking", note: "On-site, complimentary" },
    { icon: "Coffee", label: "Tea & Snacks", note: "Tea & snacks information available on enquiry" },
    { icon: "BedDouble", label: "Furnished Rooms", note: "Comfortably appointed" },
    { icon: "Sparkles", label: "Daily Housekeeping", note: "Fresh linens & upkeep" },
  ],

  // ─── EXPERIENCES — only verified offerings ───────────────────────────
  experiences: [
    {
      title: "Bonfire Evenings",
      description:
        "On cool Yercaud nights, gather around a crackling bonfire under a starlit sky — a simple, memorable way to end the day.",
      image:
        "https://images.pexels.com/photos/7300764/pexels-photo-7300764.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "Seasonal · On request",
    },
    {
      title: "Outdoor BBQ",
      description:
        "An outdoor barbecue arrangement for groups and families — enjoy grilled favourites in the open air surrounded by the hills.",
      image:
        "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "On request · Group booking",
    },
    {
      title: "Plantation Walks",
      description:
        "Step out into the coffee estates and forest trails that surround Yercaud — guided or self-led walks through the cool, green hills.",
      image:
        "https://images.pexels.com/photos/4977223/pexels-photo-4977223.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "Self-guided · Nearby",
    },
  ],

  // ─── NEARBY ATTRACTIONS (do not invent exact distances) ──────────────
  explore: [
    {
      name: "Yercaud Lake",
      description:
        "A calm natural lake surrounded by trees, with boating and a pleasant walking path — the heart of Yercaud's town and an easy visit from the hotel.",
      image:
        "https://images.pexels.com/photos/3353245/pexels-photo-3353245.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "Nearby",
    },
    {
      name: "Pagoda Point",
      description:
        "A viewpoint on the eastern edge of the Shevaroy Hills offering wide valley views — especially striking at sunrise and sunset.",
      image:
        "https://images.pexels.com/photos/20780438/pexels-photo-20780438.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "Viewpoint",
    },
    {
      name: "Kiliyur Falls",
      description:
        "A scenic waterfall a short drive from town, best visited after the monsoon when the water is full and the surrounding forest is at its greenest.",
      image:
        "https://images.pexels.com/photos/35463580/pexels-photo-35463580.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tag: "Waterfall",
    },
  ],

  // ─── GALLERY ─────────────────────────────────────────────────────────
  // NOTE: Replace with actual property photographs from the owner.
  gallery: [
    {
      src: "https://images.pexels.com/photos/14844302/pexels-photo-14844302.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Misty green hills of a South Indian hill station at sunrise",
      category: "Scenery",
    },
    {
      src: "https://images.pexels.com/photos/34672503/pexels-photo-34672503.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Spacious hotel room with elegant decor and natural light",
      category: "Rooms",
    },
    {
      src: "https://images.pexels.com/photos/39836700/pexels-photo-39836700.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Boutique hotel bathroom with natural materials",
      category: "Bathrooms",
    },
    {
      src: "https://images.pexels.com/photos/10898969/pexels-photo-10898969.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Misty landscape of green rolling hills in South India",
      category: "Scenery",
    },
    {
      src: "https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Elegant hotel room with plush bedding and warm lighting",
      category: "Rooms",
    },
    {
      src: "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Elegant bathroom with marble tiles and modern fixtures",
      category: "Bathrooms",
    },
    {
      src: "https://images.pexels.com/photos/4977223/pexels-photo-4977223.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Verdant coffee plantation with neatly arranged rows on hills",
      category: "Scenery",
    },
    {
      src: "https://images.pexels.com/photos/11433090/pexels-photo-11433090.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Hotel room with classic furniture and warm ambiance",
      category: "Rooms",
    },
    {
      src: "https://images.pexels.com/photos/28999492/pexels-photo-28999492.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Hotel lobby with elegant decor and natural accents",
      category: "Interiors",
    },
    {
      src: "https://images.pexels.com/photos/35463580/pexels-photo-35463580.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Waterfall cascading through dense forest in the Western Ghats",
      category: "Scenery",
    },
    {
      src: "https://images.pexels.com/photos/40025189/pexels-photo-40025189.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Hotel exterior with bamboo and lush greenery",
      category: "Interiors",
    },
    {
      src: "https://images.pexels.com/photos/33803745/pexels-photo-33803745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Heritage hotel corridor with Indian architectural charm",
      category: "Interiors",
    },
  ],

  // ─── FAQ / GUEST INFORMATION ─────────────────────────────────────────
  faqs: [
    {
      q: "What are the check-in and check-out times?",
      a: "Standard check-in is from 12:00 PM and check-out is by 11:00 AM. Early arrival and late departure may be accommodated on request — please mention this in your enquiry.",
    },
    {
      q: "Is parking available at the property?",
      a: "Yes, complimentary on-site parking is available for guests.",
    },
    {
      q: "Is Wi-Fi available in the rooms?",
      a: "Yes, Wi-Fi is available for all guests throughout the property.",
    },
    {
      q: "Are meals available at the hotel?",
      a: "Kitchenette-related facilities are available on request. Please confirm meal arrangements at the time of booking, as options may vary.",
    },
    {
      q: "Can I arrange a bonfire or BBQ during my stay?",
      a: "Bonfire and outdoor BBQ arrangements can be made on request, subject to season and group size. Mention this in your enquiry and the hotel will confirm availability.",
    },
    {
      q: "What is the cancellation policy?",
      a: "Cancellation terms vary by season and booking type. Please confirm the policy with the hotel at the time of your enquiry.",
    },
  ],

  guestInfo: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    parking: "Complimentary on-site parking",
    wifi: "Available throughout the property",
    policy: "Valid ID required at check-in. Pets and smoking policies — please confirm with the hotel at the time of enquiry.",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
    { label: "Experiences", href: "#experiences" },
    { label: "Explore", href: "#explore" },
    { label: "Contact", href: "#contact" },
  ],
};

export type HotelConfig = typeof hotelConfig;
