import { Breadcrumb } from "@/components/Breadcrumb";

const posts = [
  {
    title: "Designing digital experiences for modern travellers",
    date: "March 2026",
    readingTime: "6 min read",
    summary:
      "How we combine research, UX and engineering to create frictionless journeys across devices.",
  },
  {
    title: "From idea to launch: structuring a product discovery sprint",
    date: "February 2026",
    readingTime: "5 min read",
    summary:
      "A simple framework we use with teams to move from assumptions to validated concepts.",
  },
  {
    title: "When to modernise your platform (and when not to)",
    date: "January 2026",
    readingTime: "7 min read",
    summary:
      "Signals that it might be time to refactor, plus practical steps to reduce risk.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0506] text-slate-50 selection:bg-red-500/30">
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),transparent_60%)]">
        <div className="container mx-auto max-w-6xl px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />

          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Insights & resources
          </h1>
          <p className="max-w-xl text-sm md:text-base text-slate-300">
            Thoughts from the Highland Group team on product strategy, design and engineering.
          </p>
        </div>
      </section>

      {/* Posts list */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-6 space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5 md:px-6 md:py-6 transition-colors hover:border-red-500/40 hover:bg-white/[0.05]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 mb-2">
                {post.date} • {post.readingTime}
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-red-300">
                {post.title}
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}