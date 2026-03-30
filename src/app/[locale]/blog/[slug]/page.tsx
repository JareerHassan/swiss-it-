import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import Image from "next/image";
import {
  resolveImageUrl,
  renderEditorJSBlocks,
  calculateReadingTime,
} from "@/lib/blog-utils";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend.highlandgroup.ch/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://highlandgroup.ch";

// ==============================
// FETCH BLOG
// ==============================
async function getBlog(slug: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs`, {
      headers: { "Cache-Control": "no-store" },
    });

    const blogs = Array.isArray(res.data) ? res.data : [];

    return blogs.find((b: any) => b.seo?.slug === slug || b._id === slug) || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// ==============================
// HELPERS
// ==============================
function getPostTitle(post: any) {
  return post?.seo?.meta_title || post?.title || "Blog";
}

function getPostDescription(post: any) {
  return (
    post?.seo?.meta_description ||
    post?.excerpt ||
    post?.description ||
    "Read the latest insights, ideas, and updates from Highland Group."
  );
}

function getCanonicalUrl(locale: string, slug: string) {
  return `${SITE_URL}/${locale}/blog/${slug}`;
}

// ==============================
// SEO METADATA
// ==============================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = getPostTitle(post);
  const description = getPostDescription(post);
  const canonical = getCanonicalUrl(locale, post?.seo?.slug || post?._id || slug);
  const image = resolveImageUrl(post?.coverImage) || `${SITE_URL}/fallback.jpg`;

  return {
    title,
    description,
    keywords: post?.seo?.keywords || [
      "Highland Group blog",
      "digital insights",
      "strategy",
      "design",
      "technology",
      "product development",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Highland Group",
      type: "article",
      locale: locale === "en" ? "en_US" : locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: post?.createdAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ==============================
// PAGE
// ==============================
export default async function BlogDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const post = await getBlog(slug);

  if (!post) {
    notFound();
  }

  const blocks = Array.isArray(post.content) ? post.content : [];
  const readingTime = calculateReadingTime(blocks);

  const title = getPostTitle(post);
  const description = getPostDescription(post);
  const coverImage = resolveImageUrl(post.coverImage) || "/fallback.jpg";
  const canonicalUrl = getCanonicalUrl(locale, post?.seo?.slug || post?._id || slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: title },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: coverImage.startsWith("http")
              ? coverImage
              : `${SITE_URL}${coverImage}`,
            datePublished: post?.createdAt || undefined,
            dateModified: post?.updatedAt || post?.createdAt || undefined,
            mainEntityOfPage: canonicalUrl,
            author: {
              "@type": "Organization",
              name: "Highland Group",
            },
            publisher: {
              "@type": "Organization",
              name: "Highland Group",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/assets/logo1.png`,
              },
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={breadcrumbItems}
        title=""
        subtitle=""
        description=""
      />

      <article className="py-8 md:py-12 lg:py-16 border-t border-border-light">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 max-w-5xl">
          {/* Header */}
          <header className="mb-10 md:mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
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
              {title}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
              {description}
            </p>
          </header>

          {/* Cover Image */}
          <div className="mb-10 md:mb-12 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <div className="relative w-full h-[260px] md:h-[380px] lg:h-[500px]">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Optional Blog Description Section */}
          {post?.description && post.description !== description && (
            <div className="mb-8 md:mb-10 rounded-2xl border border-border-light bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-3">
                Overview
              </h2>
              <p className="text-base md:text-lg leading-8 text-muted">
                {post.description}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-charcoal prose-p:text-muted prose-li:text-muted prose-strong:text-charcoal">
            {renderEditorJSBlocks(blocks)}
          </div>
        </div>
      </article>
    </main>
  );
}