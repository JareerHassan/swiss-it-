import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import axios from "axios";
import { resolveImageUrl } from "@/lib/blog-utils";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://backend.highlandgroup.ch/api";

async function getBlogs() {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs`);
    return res.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  // Featured = first blog
  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      {/* Breadcrumb */}
      <Breadcrumb
        items={breadcrumbItems}
        title="Insights & Ideas"
        subtitle="Thoughts on strategy, design, technology and building better digital products"
        description="Practical perspectives from the team at Highland Group."
      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16 lg:py-20 border-b border-border-light bg-bg-soft">
          <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] lg:aspect-auto order-1 lg:order-2 group">
                <img
                  src={resolveImageUrl(featuredPost.coverImage) || ""}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <Link
                  href={`/blog/${featuredPost.seo?.slug || featuredPost._id}`}
                  className="group/featured block space-y-4"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight group-hover:text-accent-red transition-colors">
                    {featuredPost.seo?.meta_title || featuredPost.title}
                  </h2>

                  <p className="text-lg md:text-xl text-muted leading-relaxed">
                    {featuredPost.seo?.meta_description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-accent-red font-medium group-hover/featured:text-accent-red/80 transition-colors">
                    Read full article
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal mb-12 md:mb-16 text-center md:text-left">
            All Articles
          </h2>

          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post: any) => (
              <article
                key={post._id}
                className="
                  group relative rounded-2xl border border-border-light/70 bg-bg-main
                  overflow-hidden shadow-sm transition-all duration-400
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-red/10
                  hover:border-accent-red/40
                "
              >
                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={resolveImageUrl(post.coverImage) || ""}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <Link
                    href={`/blog/${post.seo?.slug || post._id}`}
                    className="group/link block"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-accent-red transition-colors">
                      {post.seo?.meta_title || post.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-[15px] md:text-base line-clamp-3">
                      {post.seo?.meta_description}
                    </p>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 text-accent-red font-medium text-sm group-hover/link:text-accent-red/80">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}