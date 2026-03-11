import { notFound } from "next/navigation";
import { topAttractionsSlides } from "@/data/top-attractions";
import { recommendationWinter, recommendationSummer } from "@/data/recommendation-sections";
import AttractionDetailLayout from "@/components/sections/AttractionDetailLayout";

type PageProps = {
  params: {
    locale: string;
    id: string;
  };
};

const DEFAULT_EXPERIENCE_DESCRIPTION =
  "Discover one of the highlights along the Grand Tour of Switzerland: a mix of scenic routes, authentic villages and unforgettable viewpoints – perfect for your next Swiss getaway.";

function getAllExperiences() {
  const recItems = [...recommendationWinter, ...recommendationSummer].map((item) => ({
    id: item.id,
    title: item.label,
    description: DEFAULT_EXPERIENCE_DESCRIPTION,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    category: "Experience",
  }));

  const attractionItems = topAttractionsSlides.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    category: item.category || "Top attraction",
  }));

  return [...recItems, ...attractionItems];
}

export default function AttractionDetailPage({ params }: PageProps) {
  const { id } = params;

  const allExperiences = getAllExperiences();
  const experience = allExperiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="bg-[#0b0507] text-white min-h-screen">
      <AttractionDetailLayout
        title={experience.title}
        description={experience.description}
        imageSrc={experience.imageSrc}
        imageAlt={experience.imageAlt}
        category={experience.category}
      />
    </main>
  );
}

export function generateStaticParams() {
  const allExperiences = getAllExperiences();
  return allExperiences.map((item) => ({
    id: item.id,
  }));
}


