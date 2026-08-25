export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "[Client Name]",
    role: "Bride",
    text: "[Testimonial placeholder — Fred should provide real client testimonials. Example: 'Fred made me feel absolutely beautiful on my wedding day. His attention to detail and calm energy were exactly what I needed.']",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: "2",
    name: "[Client Name]",
    role: "Public Figure",
    text: "[Testimonial placeholder — Example: 'Professional, creative, and incredibly talented. Fred understands how to create looks that translate perfectly on camera.']",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: "3",
    name: "[Student Name]",
    role: "Academy Graduate",
    text: "[Testimonial placeholder — Example: 'The training program completely transformed my understanding of makeup artistry. Fred's teaching style is clear, inspiring, and practical.']",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
];
