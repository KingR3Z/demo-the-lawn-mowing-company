export const client = {
  // Business Details
  name: "The Lawn Mowing Company",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Newbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07803 273073",
  email: "",
  website: "",

  // Location
  address: "Newbury",
  city: "Newbury",
  county: "",
  postcode: "",
  basedIn: "Newbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Richard Evens", rating: 5, text: "After several attempts with other garden/landscaping companies locally it was very pleasing to find someone that actually came round to quote, sent us a quote within days and then carried out the work within a few weeks.m! Not only was the …  ", date: "6 years ago" },
    { name: "Luke Barlow", rating: 5, text: "I am a pensioner with an acre of lawn that moles had decimated.  My garden is one of my greatest pleasures and to have Richard caring for my lawn this summer following a recommendation from a neighbour has been a huge relief.  Despite the …  ", date: "7 years ago" },
    { name: "Jeremy Kirk", rating: 5, text: "Richard at The Lawn Mowing Company offers a first class service and I would not hesitate to recommend him. He works to very high standards, takes real pride in his work and offers value for money ... your lawn really is in safe hands ! ", date: "7 years ago" },
    { name: "Steve Laura", rating: 5, text: "Richard and his team at The Lawn Mowing Company did a fantastic job of designing and landscaping my new garden in Newbury, everything from the sleeper retaining walls and planters through to Portugese Laurel hedge were top notch and now …  ", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Lawn Mowing Company | Landscaper in Newbury",
    description: "Professional landscaper in Newbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
