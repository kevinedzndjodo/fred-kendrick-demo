export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  makeupType: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Bridal Glow",
    category: "Bridal",
    makeupType: "Natural Glam",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "2",
    title: "Editorial Vision",
    category: "Editorial",
    makeupType: "Bold Artistic",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    aspect: "landscape",
  },
  {
    id: "3",
    title: "Golden Hour",
    category: "Photoshoot",
    makeupType: "Sun-Kissed",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "4",
    title: "Red Carpet Ready",
    category: "Celebrity",
    makeupType: "Glam",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    aspect: "square",
  },
  {
    id: "5",
    title: "Soft Elegance",
    category: "Bridal",
    makeupType: "Classic",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "6",
    title: "Magazine Cover",
    category: "Editorial",
    makeupType: "High Fashion",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    aspect: "landscape",
  },
  {
    id: "7",
    title: "Natural Beauty",
    category: "Personal",
    makeupType: "No-Makeup Look",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "8",
    title: "Creative Concept",
    category: "Editorial",
    makeupType: "Avant-Garde",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=800&q=80",
    aspect: "square",
  },
  {
    id: "9",
    title: "Event Glamour",
    category: "Event",
    makeupType: "Full Glam",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    aspect: "landscape",
  },
];

export const celebrityProjects: PortfolioItem[] = [
  {
    id: "c1",
    title: "TV Host Look",
    category: "Television",
    makeupType: "On-Camera Glam",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "c2",
    title: "Music Video",
    category: "Music",
    makeupType: "Artistic Direction",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    aspect: "landscape",
  },
  {
    id: "c3",
    title: "Fashion Show",
    category: "Fashion",
    makeupType: "Runway",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    aspect: "portrait",
  },
  {
    id: "c4",
    title: "Brand Campaign",
    category: "Advertising",
    makeupType: "Commercial",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    aspect: "square",
  },
];
