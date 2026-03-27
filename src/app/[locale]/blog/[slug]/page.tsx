import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import {
  resolveImageUrl,
  renderEditorJSBlocks,
  calculateReadingTime,
} from "@/lib/blog-utils";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://backend.highlandgroup.ch/api";

async function getBlog(slug: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs`);
    const blogs = res.data || [];

    // find by slug OR id
    return blogs.find(
      (b: any) => b.seo?.slug === slug || b._id === slug
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getBlog(slug);

  if (!post) {
    notFound();
  }

  const blocks = post.content || [];
  const readingTime = calculateReadingTime(blocks);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.seo?.meta_title || post.title },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={breadcrumbItems}
        title={post.seo?.meta_title || post.title}
        subtitle={post.seo?.meta_description}
      />

      <article className="py-8 md:py-12 lg:py-16 border-t border-border-light">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-6xl">
          
          {/* Header */}
          <header className="space-y-4 md:space-y-6 mb-10 md:mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "No date"}
              </span>
              <span>•</span>
              <span>{readingTime} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
              {post.seo?.meta_title || post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {post.seo?.meta_description}
            </p>
          </header>

          {/* Cover Image */}
          <div className="mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={resolveImageUrl(post.coverImage) || ""}
              alt={post.title}
              className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Content (EditorJS Render) */}
          <div className="space-y-6 md:space-y-7 text-base md:text-lg leading-relaxed text-muted">
            {renderEditorJSBlocks(blocks)}
          </div>
        </div>
      </article>
    </main>
  );
}