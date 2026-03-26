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
    { name: "Nick Jones", rating: 5, text: "Richard has been cutting our lawns regularly for years, he has also done a bit of soft landscaping which has turned out beautifully. Would recommend to anyone.", date: "a year ago", badge: "Local Guide" },
    { name: "Adam P", rating: 5, text: "Richard came to help us with our lawn maintenance at short notice some time ago . We have always found him & his team to be efficient, friendly and they do an excellent job. We would highly recommend his services as very satisfied customers.", date: "a year ago" },
    { name: "Sarah Bayliss", rating: 5, text: "Very professional and well priced. Richard is always reliable, he does a great job and is very knowledgeable.", date: "a year ago" },
    { name: "Gwen Breckenridge", rating: 5, text: "Very happy with the service from Richard and his team. I appreciate the care he takes and that he is reliable and a really nice person to do business with", date: "a year ago", badge: "Local Guide" },
    { name: "Michael J", rating: 2, text: "I have used this company in the past for one off cuts and it was generally okay. However, this time I asked for a cut and was told no because it had rained, yet the next day Richard was cutting his \"regulars\" after cancelling on me. I stressed it was urgent as grass had grown a lot due to being ill and I just needed it done.  I was then told he could come towards the end of the day with no specific time and asked for a price. Richard then obviously emailed quite late and was already at my door before I had read the email. To my complete shock, I was quoted £50 for a one off cut when the last time it was £30 with grass disposal. This price was made up with no foundation to it. Had I not questioned it, I would have been charged it.  We verbally agreed after looking at the lawn to do for £30 without grass collection, which is still quite expensive for less than 30 mins work. They were clearly in a rush and went through the lawn aggressively with a strimmer and cut some stems off one of my plants and also dumped soil for of ants on my patio, despite there being a pile of soil as the back it could have been shaken onto.  I didn't mention this, even though I thought the interaction was unfriendly and uncomfortable from the moment Richard came to the door. I wasn't planning to leave a review, but when the quote came in at £35 after we agreed £30, I replied mentioning this and the fact my plant was damaged. I received no reply back and just a new invoice.  It seems one off cuts are considered a waste of time, would rather be told no than to have a negative experience. I won't be using again.", date: "a year ago", badge: "Local Guide" },
    { name: "Rowan Dobson", rating: 5, text: "My lawn was well overgrown and soaking wet. My personal equipment was not up to the task. The Lawn Mowing Company replied to my email query promptly and my lawn was cut within the week. I am really happy with their services and pricing. Thanks again guys.", date: "a year ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Lawn Mowing Company | Landscaper in Newbury",
    description: "Professional landscaper in Newbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
