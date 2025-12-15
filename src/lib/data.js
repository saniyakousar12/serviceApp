export const serviceCategories = [
  { id: "plumbing", name: "Plumbing", icon: "Wrench" },
  { id: "electrical", name: "Electrical", icon: "Zap" },
  { id: "cleaning", name: "Cleaning", icon: "Sparkles" },
];

// ---- ADD THIS BELOW ----
export const providers = [
  {
    id: "1",
    name: "Rahul Plumbing Services",
    category: "plumbing",
    rating: 4.8,
    reviews: 120,
    price: "₹500/hr",
    distance: "2 km",
    bio: "Expert plumbing services with 10+ years experience",
    image: "/plumbing.jpg",
  },
  {
    id: "2",
    name: "Amit Electrician",
    category: "electrical",
    rating: 4.6,
    reviews: 98,
    price: "₹600/hr",
    distance: "3.5 km",
    bio: "Certified electrician for home & office",
    image: "/electrical.jpg",
  },
];

export const bookings = [
  {
    id: "b1",
    providerId: "1",
    providerName: "Rahul Plumbing Services",
    service: "Pipe Repair",
    date: "2025-01-20",
    time: "10:00 AM",
    price: "₹500",
    status: "upcoming",
    reviewed: false,
  },
  {
    id: "b2",
    providerId: "3",
    providerName: "CleanPro Services",
    service: "Home Cleaning",
    date: "2025-01-10",
    time: "2:00 PM",
    price: "₹400",
    status: "completed",
    reviewed: false,
  },
];

export const reviews = [
  {
    id: "r1",
    customerId: "3",
    providerId: "1",
    rating: 5,
    comment: "Excellent service!",
    date: "2025-01-11",
  },
];
