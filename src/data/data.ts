import { FeatureType, StoreLocationType, TestimonialType } from "../types";

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "TamrLatte has become my go-to post-workout drink. The natural sweetness from dates gives me energy without the crash of artificial sugars.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    content:
      "The rich, creamy texture combined with the caramel notes of dates creates a truly luxurious experience. It's like dessert in a bottle, but actually good for you!",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Nutritionist",
    content:
      "I recommend TamrLatte to my clients as a nutritious alternative to sugary coffee drinks. The natural minerals and fiber from dates make it a smart choice.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export const storeLocations: StoreLocationType[] = [
  {
    id: 1,
    name: "Sentrakota Jatibening",
    address: "Jalan Sentrakota",
    city: "Bekasi",
    hours: "8am - 10pm Daily",
  },
  {
    id: 2,
    name: "Pulo Asem Velodrome",
    address: "Jalan Pulo Asem",
    city: "Jakarta",
    hours: "7am - 9pm Mon-Sat",
  },
  {
    id: 3,
    name: "Metland Cileungsi",
    address: "Jalan Metland",
    city: "Cileungsi",
    hours: "8am - 8pm Daily",
  },
  {
    id: 4,
    name: "Jakarta",
    address: "Jalan Jenderal Sudirman",
    city: "Jakarta",
    hours: "7am - 8pm Mon-Fri, 9am - 7pm Weekends",
  },
];

export const features: FeatureType[] = [
  {
    id: 1,
    title: "Naturally Sweet, No Added Sugar",
    description:
      "Sweetened only with Sukkari dates and palm sugar, TamrLatte delivers a rich, caramel-like flavor — no refined sugar needed.",
    icon: "Leaf",
  },
  {
    id: 2,
    title: "Made with Full Cream Milk",
    description:
      "We use full cream milk for its smooth texture and natural source of calcium, protein, and healthy fats — giving each sip a satisfying, creamy taste.",
    icon: "Milk",
  },
  {
    id: 3,
    title: "Wholesome Energy Boost",
    description:
      "Dates are rich in natural sugars like glucose and fructose, making TamrLatte a perfect pick-me-up to fuel your day without the crash.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Rich in Fiber & Antioxidants",
    description:
      "Our carefully selected Sukkari dates are high in fiber and antioxidants, which help support digestion and fight oxidative stress.",
    icon: "Sprout",
  },
];
