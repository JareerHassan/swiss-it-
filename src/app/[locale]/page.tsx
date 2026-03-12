// app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionSlider, SliderCard, RecommendationGrid, DiscoverMoreSection } from "@/components/sections";
import TopAttractionsSlider from "@/components/sections/TopAttractionsSlider";
import { topDestinations } from "@/data/slider-sections";
import { recommendationWinter, recommendationSummer } from "@/data/recommendation-sections";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.pexels.com/photos/4600309/pexels-photo-4600309.jpeg"
          alt="Switzerland Alps majestic landscape"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover brightness-[0.65] scale-105 transition-transform duration-&lsqb;20s&rsqb;"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 drop-shadow-lg">
            We need Switzerland.
          </h1>
          <p className="text-xl text-white/90 md:text-2xl lg:text-3xl mb-8 md:mb-10 drop-shadow-md">
            Get inspired now!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-7 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Exploring
          </Button>
        </div>
      </div>

      {/* Top Destinations Slider */}
      <section className="relative z-10">
        <SectionSlider
          title="Top Destinations"
          learnMoreHref="/destinations"
          learnMoreLabel="Learn more"
        >
          {topDestinations.map((item) => (
            <SliderCard key={item.id} item={item} />
          ))}
        </SectionSlider>
      </section>

      {/* Recommendation Winter */}
      <section className="relative z-10">
        <RecommendationGrid title="Recommendation Winter" items={recommendationWinter} />
      </section>

      {/* Recommendation Summer */}
      <section className="relative z-10">
        <RecommendationGrid title="Recommendation Summer" items={recommendationSummer} />
      </section>

      {/* Top Attractions */}
      <section className="relative z-10">
        <TopAttractionsSlider />
      </section>

      {/* Discover More (New Section) */}
      <DiscoverMoreSection />

      {/* Floating Assistant Button */}
      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
        <button className="group flex items-center gap-3 bg-[#e3000f] text-white px-4 py-5 rounded-l-xl shadow-2xl hover:bg-red-700 transition-all duration-300 hover:pr-8">
          <span
            className="text-lg font-medium [writing-mode:vertical-rl] rotate-180 tracking-wider"
            style={{ writingMode: "vertical-rl" }}
          >
            Assistant ✨
          </span>
        </button>
      </div>
    </main>
  );
}