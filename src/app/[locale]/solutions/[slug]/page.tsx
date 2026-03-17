import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { routing } from "@/i18n/routing";
import { detailItems, getDetailBySlug } from "@/data/service-solution-details";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const item = getDetailBySlug("solutions", slug);

  if (!item) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Value Offerings", href: "/solutions" },
    { label: item.title },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      <Breadcrumb
        items={breadcrumbItems}
        title={item.title}
        description={item.summary}
      />

      <section className="py-10 md:py-14 lg:py-16 border-t border-border-light bg-bg-main">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-5xl">
          <div className="mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-lg bg-bg-soft">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] md:h-[340px] lg:h-[400px] object-cover"
            />
          </div>

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
    .filter((item) => item.basePath === "solutions")
    .map((item) => item.slug);

  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

