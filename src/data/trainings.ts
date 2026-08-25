export interface Training {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  nextSession: string;
  spots: number;
  price: string;
  location: string;
  image: string;
  highlights: string[];
  program: string[];
  requirements: string[];
}

export const trainings: Training[] = [
  {
    id: "t1",
    slug: "makeup-fundamentals",
    title: "Makeup Fundamentals",
    subtitle: "Master the Basics",
    description:
      "A comprehensive introduction to professional makeup artistry. Learn essential techniques, face analysis, color theory, and product knowledge to build a strong foundation.",
    level: "Beginner",
    duration: "2 Weeks",
    nextSession: "[Date TBD]",
    spots: 12,
    price: "[Price TBD]",
    location: "Yaoundé, Cameroon",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=800&q=80",
    highlights: [
      "Face shape analysis",
      "Skin preparation techniques",
      "Foundation matching & blending",
      "Eye makeup fundamentals",
      "Lip techniques",
      "Product knowledge & kit building",
    ],
    program: [
      "Day 1-2: Introduction to Makeup Artistry & Skin Analysis",
      "Day 3-4: Foundation, Concealer & Face Products",
      "Day 5-6: Eye Makeup — Shadows, Liner & Mascara",
      "Day 7-8: Brows, Lips & Finishing Touches",
      "Day 9-10: Complete Looks & Practice",
    ],
    requirements: [
      "No prior experience required",
      "Basic makeup kit (list provided upon enrollment)",
      "Notebook and willingness to learn",
    ],
  },
  {
    id: "t2",
    slug: "advanced-editorial",
    title: "Advanced Editorial",
    subtitle: "Push Creative Boundaries",
    description:
      "Take your skills to the next level with advanced editorial techniques. Learn to create magazine-worthy looks, work with photographers, and develop your artistic vision.",
    level: "Advanced",
    duration: "3 Weeks",
    nextSession: "[Date TBD]",
    spots: 8,
    price: "[Price TBD]",
    location: "Yaoundé, Cameroon",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    highlights: [
      "Editorial concept development",
      "Advanced color theory",
      "Avant-garde techniques",
      "Working with photographers",
      "Portfolio building",
      "Personal brand development",
    ],
    program: [
      "Week 1: Advanced Techniques & Color Mastery",
      "Week 2: Editorial Concepts & Creative Direction",
      "Week 3: Photoshoots, Portfolio & Brand Building",
    ],
    requirements: [
      "Prior makeup experience or completion of Fundamentals course",
      "Intermediate makeup kit",
      "Portfolio of previous work (if available)",
    ],
  },
  {
    id: "t3",
    slug: "bridal-mastery",
    title: "Bridal Mastery",
    subtitle: "The Art of Bridal Beauty",
    description:
      "Specialize in bridal makeup and learn to create stunning, long-lasting looks for one of the most important days in a client's life.",
    level: "Intermediate",
    duration: "1 Week",
    nextSession: "[Date TBD]",
    spots: 10,
    price: "[Price TBD]",
    location: "Yaoundé, Cameroon",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    highlights: [
      "Bridal consultation process",
      "Long-wear techniques",
      "Photography-ready makeup",
      "Cultural bridal traditions",
      "Trial run best practices",
      "Emergency kit preparation",
    ],
    program: [
      "Day 1-2: Bridal Consultation & Skin Prep",
      "Day 3-4: Classic & Modern Bridal Looks",
      "Day 5: Photography & Trial Techniques",
    ],
    requirements: [
      "Basic makeup proficiency",
      "Interest in bridal artistry",
      "Intermediate makeup kit",
    ],
  },
];
