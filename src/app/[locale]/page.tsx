// app/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  SectionSlider,
  SliderCard,
  RecommendationGrid,
  DiscoverMoreSection,
} from "@/components/sections";
import TopAttractionsSlider from "@/components/sections/TopAttractionsSlider";
import { topDestinations } from "@/data/slider-sections";
import {
  recommendationWinter,
  recommendationSummer,
} from "@/data/recommendation-sections";
import Link from "next/link";

interface HomePageProps {
  params: Promise<{ locale?: string | string[] }>;
}

const siteUrl = "http://highlandgroup.ch";
const logoUrl = "http://highlandgroup.ch/logo.png";
const heroImage =
  "https://images.pexels.com/photos/4600309/pexels-photo-4600309.jpeg";

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const localeParam = resolvedParams?.locale;
  const locale =
    typeof localeParam === "string"
      ? localeParam
      : Array.isArray(localeParam)
      ? localeParam[0]
      : "en";

  const currentUrl = `${siteUrl}/${locale}`;

  return {
    title:
      "Highland Group | Swiss IT Business, AI Automation & Web Development",
    description:
      "Highland Group delivers smart digital solutions for Swiss businesses including website development, hotel booking systems, digital marketing, mobile apps, and AI automation.",
    keywords: [
      "Swiss IT company",
      "IT services Switzerland",
      "web development Switzerland",
      "website development Switzerland",
      "digital marketing Switzerland",
      "AI automation Switzerland",
      "hotel booking system Switzerland",
      "mobile app development Switzerland",
      "Highland Group",
      "Swiss business digital solutions",
    ],
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: "Highland Group | Smart Digital Solutions for Swiss Businesses",
      description:
        "Website development, hotel booking systems, digital marketing, mobile apps, and AI automation for Swiss businesses.",
      url: currentUrl,
      siteName: "Highland Group",
      locale: locale === "de" ? "de_CH" : locale === "fr" ? "fr_CH" : "en_US",
      type: "website",
      images: [
        {
          url: heroImage,
          width: 1600,
          height: 900,
          alt: "Highland Group - Swiss IT Business Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Highland Group | Swiss IT Business",
      description:
        "Smart digital solutions for Swiss businesses: websites, booking systems, marketing, apps, and AI automation.",
      images: [heroImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({ params }: HomePageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams?.locale;
  const locale =
    typeof localeParam === "string"
      ? localeParam
      : Array.isArray(localeParam)
      ? localeParam[0]
      : "en";

  const currentUrl = `${siteUrl}/${locale}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Highland Group",
    url: siteUrl,
    logo: logoUrl,
    image: heroImage,
    description:
      "Highland Group delivers smart digital solutions for Swiss businesses including website development, hotel booking systems, digital marketing, mobile apps, and AI automation.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Highland Group",
    url: siteUrl,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Website Development",
        provider: {
          "@type": "Organization",
          name: "Highland Group",
        },
        areaServed: "Switzerland",
        description:
          "Custom website development for Swiss businesses to improve digital presence and conversions.",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Hotel Direct Booking Solutions",
        provider: {
          "@type": "Organization",
          name: "Highland Group",
        },
        areaServed: "Switzerland",
        description:
          "Booking-focused digital solutions helping hotels increase direct reservations and reduce OTA commissions.",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Mobile App Development",
        provider: {
          "@type": "Organization",
          name: "Highland Group",
        },
        areaServed: "Switzerland",
        description:
          "Custom mobile apps for customer engagement, bookings, and business operations.",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Digital Marketing",
        provider: {
          "@type": "Organization",
          name: "Highland Group",
        },
        areaServed: "Switzerland",
        description:
          "SEO, paid advertising, and digital growth strategies for Swiss businesses.",
      },
      {
        "@type": "Service",
        position: 5,
        name: "AI & Business Automation",
        provider: {
          "@type": "Organization",
          name: "Highland Group",
        },
        areaServed: "Switzerland",
        description:
          "AI chatbots, WhatsApp assistants, and workflow automation to save time and improve business efficiency.",
      },
    ],
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Hero Section with Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Switzerland Alps majestic landscape"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover brightness-[0.65] scale-105 transition-transform duration-[20s]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16">
          <p className="text-xl text-white/90 md:text-2xl lg:text-2xl mb-4 drop-shadow-md">
            Highland Group
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl mb-4 md:mb-6 drop-shadow-lg max-w-5xl">
            Smart Digital Solutions for Swiss Businesses
          </h1>
          <Link href={`/${locale}/services`}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Exploring
            </Button>
          </Link>
        </div>
      </div>

      <section className="relative z-10">
        <SectionSlider
          title="Core Services"
          learnMoreHref="/services"
          learnMoreLabel="Learn more"
        >
          {topDestinations.map((item) => (
            <SliderCard key={item.id} item={item} />
          ))}
        </SectionSlider>
      </section>

      <section className="relative z-10">
        <RecommendationGrid
          title="Value Offerings"
          items={recommendationWinter}
        />
      </section>

      <section className="relative z-10">
        <RecommendationGrid
          title="Case Studies"
          items={recommendationSummer}
        />
      </section>

      <section className="relative z-10">
        <TopAttractionsSlider />
      </section>

      <DiscoverMoreSection />
    </main>
  );
}