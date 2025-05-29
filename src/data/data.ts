import { TestimonialType, StoreLocationType, FeatureType } from '../types';

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content: "TamrLatte has become my go-to post-workout drink. The natural sweetness from dates gives me energy without the crash of artificial sugars.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    content: "The rich, creamy texture combined with the caramel notes of dates creates a truly luxurious experience. It's like dessert in a bottle, but actually good for you!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Nutritionist",
    content: "I recommend TamrLatte to my clients as a nutritious alternative to sugary coffee drinks. The natural minerals and fiber from dates make it a smart choice.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const storeLocations: StoreLocationType[] = [
  {
    id: 1,
    name: "Whole Foods Market",
    address: "123 Natural Way",
    city: "San Francisco, CA",
    hours: "8am - 10pm Daily"
  },
  {
    id: 2,
    name: "Urban Pantry",
    address: "456 Main Street",
    city: "New York, NY",
    hours: "7am - 9pm Mon-Sat"
  },
  {
    id: 3,
    name: "Green Grocer",
    address: "789 Organic Blvd",
    city: "Austin, TX",
    hours: "8am - 8pm Daily"
  },
  {
    id: 4,
    name: "Health Haven",
    address: "321 Wellness Road",
    city: "Portland, OR",
    hours: "7am - 8pm Mon-Fri, 9am - 7pm Weekends"
  }
];

export const features: FeatureType[] = [
  {
    id: 1,
    title: "100% Natural",
    description: "Made with only premium Medjool dates and organic milk, no artificial ingredients.",
    icon: "Leaf"
  },
  {
    id: 2,
    title: "Rich in Nutrients",
    description: "Packed with potassium, magnesium, and natural fiber to fuel your day.",
    icon: "Apple"
  },
  {
    id: 3,
    title: "Sustainably Sourced",
    description: "Our dates are ethically harvested from family-owned farms.",
    icon: "Globe"
  },
  {
    id: 4,
    title: "Perfect Balance",
    description: "Carefully crafted ratio of dates to milk for the ideal sweetness and texture.",
    icon: "Scale"
  }
];