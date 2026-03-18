import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      <Breadcrumb
        items={breadcrumbItems}
        title={post.title}
        subtitle={post.summary}
      />

      <article className="py-8 md:py-12 lg:py-16 border-t border-border-light">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-6xl">
          <header className="space-y-4 md:space-y-6 mb-10 md:mb-12">
            {/* <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {post.summary}
            </p>
          </header>

          <div className="mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

          <div className="space-y-6 md:space-y-7 text-base md:text-lg leading-relaxed text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  const slugs = blogPosts.map((post) => post.slug);
  const locales = ["en", "de", "fr"];

  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

