import { Breadcrumb } from "@/components/Breadcrumb";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0506] text-slate-50 selection:bg-red-500/30">
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),transparent_60%)]">
        <div className="container mx-auto max-w-6xl px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Services
              </h1>
              <p className="max-w-xl text-sm md:text-base text-slate-300">
                Highland Group offers end-to-end digital services — from strategy and UX to development and long-term product support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
              <p className="font-semibold mb-1">Looking for something specific?</p>
              <p className="text-xs text-slate-300">
                Tell us about your product, platform or idea and we will propose a tailored engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 md:py-20 border-b border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">What we do</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                We combine strategy, design and engineering in small, focused teams to deliver measurable outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              { title: "Digital Strategy", body: "Product vision, roadmapping, discovery workshops and prioritisation." },
              { title: "UX & UI Design", body: "Research, UX flows, interface design systems and design QA." },
              { title: "Web & App Development", body: "Modern, scalable web and mobile apps using proven technologies." },
              { title: "Platform Modernisation", body: "Refactors, migrations and performance improvements for existing systems." },
              { title: "Ongoing Product Support", body: "Roadmap support, experiments and iteration after launch." },
              { title: "Consulting & Audits", body: "Product, UX, and technical audits with clear, prioritised recommendations." },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#050305]/80 p-5 transition-all hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#070307]"
              >
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-red-900/60 bg-gradient-to-r from-red-800/90 via-red-700/90 to-red-600/90 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Not sure where to start?
              </h2>
              <p className="text-sm md:text-base text-red-100/90">
                Share your goals and we will help you decide which services are the right fit for your next project.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-800 shadow-lg shadow-red-900/40 transition-transform hover:-translate-y-0.5 hover:bg-red-50"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}