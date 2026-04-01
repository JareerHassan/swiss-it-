import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { routing } from "@/i18n/routing";
import { detailItems, getDetailBySlug } from "@/data/service-solution-details";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const item = getDetailBySlug("services", slug);

  if (!item) {
    return {
      title: "Service Not Found | Highland Group",
      description: "The requested service page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `http://highlandgroup.ch/${locale}/services/${item.slug}`;
  const imageUrl = item.image?.startsWith("http")
    ? item.image
    : `http://highlandgroup.ch${item.image}`;

  return {
    title: `${item.title} | Highland Group`,
    description: item.summary,
    keywords: [
      item.title,
      `${item.title} Switzerland`,
      `${item.title} Swiss business`,
      "Swiss IT services",
      "Highland Group",
      "digital solutions Switzerland",
      "website development Switzerland",
      "AI automation Switzerland",
      "hotel booking systems Switzerland",
      "mobile app development Switzerland",
      "digital marketing Switzerland",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${item.title} | Highland Group`,
      description: item.summary,
      url: pageUrl,
      siteName: "Highland Group",
      type: "article",
      locale: locale === "de" ? "de_CH" : locale === "fr" ? "fr_CH" : "en_CH",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | Highland Group`,
      description: item.summary,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  const item = getDetailBySlug("services", slug);

  if (!item) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: item.title },
  ];

  const pageUrl = `http://highlandgroup.ch/${locale}/services/${item.slug}`;
  const imageUrl = item.image?.startsWith("http")
    ? item.image
    : `http://highlandgroup.ch${item.image}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    url: pageUrl,
    image: imageUrl,
    description: item.summary,
    provider: {
      "@type": "Organization",
      name: "Highland Group",
      url: "http://highlandgroup.ch",
      logo: "http://highlandgroup.ch/logo.png",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    serviceType: item.title,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `http://highlandgroup.ch/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `http://highlandgroup.ch/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumb
        items={breadcrumbItems}
        title={item.title}
        subtitle={item.subtitle}
        description={item.summary}
      />

      <section className="py-10 md:py-14 lg:py-16 border-t border-border-light bg-bg-main">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-12">
          <div className="mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-lg bg-bg-soft">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full"
            />
          </div>

          {item.stats && item.stats.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-10">
              {item.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-light bg-bg-soft px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted mb-1">
                    {stat.label}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-charcoal">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed text-muted">
            {item.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  const slugs = detailItems
    .filter((item) => item.basePath === "services")
    .map((item) => item.slug);

  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}