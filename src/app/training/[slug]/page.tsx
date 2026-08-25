import { generateStaticParams } from "./staticParams";
import TrainingPage from "./TrainingPage";

export { generateStaticParams };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TrainingPage slug={slug} />;
}
