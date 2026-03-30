export const IMAGES = {
  hero_bg: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/hero-bg-337c1482-1774855760190.webp",
  team_1: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/team-1-1f1dc02b-1774855758754.webp",
  team_2: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/team-2-a198e4b7-1774855754147.webp",
  team_3: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/team-3-0f7dc2d3-1774855754038.webp",
  team_4: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/team-4-96727da6-1774855759992.webp",
  case_study_before: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/case-study-before-83f0a6ff-1774855753669.webp",
  case_study_after: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/case-study-after-1-af9e8ecb-1774855753921.webp",
  car_1: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/car-listing-1-8921309d-1774855754319.webp",
  car_2: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/car-listing-2-0b1b5da4-1774855761394.webp",
  car_3: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/car-listing-3-c5fbc7ea-1774855762651.webp",
  office: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e51a33e5-70d4-40ad-ac8b-9f38c62a4b3a/office-exterior-e339ec8a-1774855761994.webp",
};

export const TEAM = [
  { name: "John Sterling", role: "CEO & Founder", image: IMAGES.team_1 },
  { name: "Sarah Jenkins", role: "Sales Director", image: IMAGES.team_2 },
  { name: "Michael Chen", role: "Chief Technician", image: IMAGES.team_3 },
  { name: "Emma Rodriguez", role: "Financial Advisor", image: IMAGES.team_4 },
];

export const TIMELINE = [
  { year: "1998", event: "Foundation of Sterling Motors in a small garage." },
  { year: "2005", event: "Opened our first luxury showroom in the city center." },
  { year: "2012", event: "Expanded to nationwide delivery services." },
  { year: "2018", event: "Pioneered the online car buying experience." },
  { year: "2024", event: "Launching our fully electric and hybrid exclusive line." },
];

export const SERVICES = [
  {
    title: "Premium Sales",
    description: "Curated selection of world-class luxury and performance vehicles.",
    icon: "Car",
  },
  {
    title: "Expert Financing",
    description: "Tailored financial solutions with competitive rates and flexible terms.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Global Sourcing",
    description: "Looking for something specific? We source rare cars globally.",
    icon: "Globe",
  },
  {
    title: "Elite Detailing",
    description: "Preserving your investment with state-of-the-art detailing services.",
    icon: "Sparkles",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Electric Supercars",
    excerpt: "Exploring how luxury brands are redefining performance in the EV era.",
    category: "Trends",
    date: "March 15, 2024",
    image: IMAGES.car_2,
  },
  {
    id: 2,
    title: "Maintaining Your Vintage Classic",
    excerpt: "Pro tips from our chief technician on keeping your classic car pristine.",
    category: "Maintenance",
    date: "March 10, 2024",
    image: IMAGES.case_study_after,
  },
  {
    id: 3,
    title: "Buying Guide: 2024 Luxury SUVs",
    excerpt: "Comparing the top contenders in the premium SUV market this year.",
    category: "Guides",
    date: "March 5, 2024",
    image: IMAGES.car_1,
  },
];