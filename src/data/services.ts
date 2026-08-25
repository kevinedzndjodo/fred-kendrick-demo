export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description:
      "Your special day deserves a flawless look. From consultation to the final touch, I create a timeless bridal look that photographs beautifully and lasts all day.",
    icon: "heart",
  },
  {
    id: "events",
    title: "Makeup for Events",
    description:
      "Whether it's a gala, gala, red carpet, or intimate celebration — I craft looks that match the occasion and elevate your presence.",
    icon: "sparkles",
  },
  {
    id: "photoshoots",
    title: "Photoshoots",
    description:
      "Collaborating with photographers and creative teams to deliver camera-ready looks that translate perfectly on screen and in print.",
    icon: "camera",
  },
  {
    id: "editorial",
    title: "Editorial Makeup",
    description:
      "Pushing creative boundaries for magazine features, fashion editorials, and artistic projects that demand bold, innovative beauty.",
    icon: "palette",
  },
  {
    id: "celebrity",
    title: "Celebrity & Artist Makeup",
    description:
      "Discreet, professional makeup services for public figures, artists, and personalities who demand perfection for every appearance.",
    icon: "star",
  },
  {
    id: "personal",
    title: "Personal Makeup",
    description:
      "One-on-one sessions to help you discover your best look, learn techniques, and build a makeup routine that works for you.",
    icon: "user",
  },
];
