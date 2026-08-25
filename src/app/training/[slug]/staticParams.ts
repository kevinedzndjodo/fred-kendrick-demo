import { trainings } from "@/data/trainings";

export function generateStaticParams() {
  return trainings.map((training) => ({
    slug: training.slug,
  }));
}
