import Image from "next/image";

type AttractionDetailLayoutProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  category?: string;
};

export default function AttractionDetailLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  category,
}: AttractionDetailLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0507] text-white">
      {/* Hero section – inspired by Grand Tour layout */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[60vh] min-h-[420px] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10 pt-24 sm:px-10 lg:px-12">
            {/* Breadcrumb-style label */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">
                {category || "Experience"}
              </span>
              <span className="text-white/50">•</span>
              <span className="uppercase tracking-[0.18em] text-[11px] text-white/60">
                Grand Tour of Switzerland
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.2rem]">
              {title}
            </h1>

            <p className="max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main content – two-column layout, similar rhythm to reference page */}
      <section className="border-t border-white/10 bg-[#12070b] py-12 sm:py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-12 md:flex-row">
          {/* Left column: overview / facts */}
          <div className="md:w-[40%] space-y-6">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              At a glance
            </h2>

            <div className="space-y-4 text-sm text-white/80">
              <div className="rounded-2xl bg-white/5 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Experience type
                </p>
                <p className="text-sm text-white">
                  Scenic route • Signature Swiss landscape • Grand Tour highlight
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Best time to visit
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Spring to autumn for road trips; winter for snowy panoramas.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Recommended duration
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Half to full day, depending on stops and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: narrative + sections */}
          <div className="md:w-[60%] space-y-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                What makes this stop special?
              </h2>
              <p className="text-sm leading-relaxed text-white/80 sm:text-[15px]">
                Inspired by the official{" "}
                <a
                  href="https://www.myswitzerland.com/en-ae/experiences/experience-tour/grand-tour-of-switzerland/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-red-500/70 underline-offset-4 hover:text-red-300"
                >
                  Grand Tour of Switzerland
                </a>
                , this experience brings together dramatic landscapes, historic
                routes and photo spots designed for unforgettable views. Each
                stop along the tour offers its own mix of mountain passes,
                lakes, villages and cultural highlights – and this detail page
                gives your visitors a clear, visual overview of what to expect.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Highlights along the route
              </h3>
              <ul className="grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                <li className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <p className="font-medium">Iconic viewpoints</p>
                  <p className="mt-1 text-xs text-white/70">
                    Curated photo spots where the Swiss landscape is at its best.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <p className="font-medium">Varied stages</p>
                  <p className="mt-1 text-xs text-white/70">
                    Combine lakes, passes, villages and cities on a single route.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <p className="font-medium">Flexible travel</p>
                  <p className="mt-1 text-xs text-white/70">
                    Enjoy the journey by car, motorcycle or public transport.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <p className="font-medium">Season‑independent</p>
                  <p className="mt-1 text-xs text-white/70">
                    Different stages shine in different seasons – from lakeside
                    summers to snowy winter landscapes.
                  </p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                How to plan your visit
              </h3>
              <ol className="space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-red-600 text-center text-xs font-semibold leading-5">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-white">
                      Choose your starting point
                    </p>
                    <p className="text-xs text-white/70">
                      Combine this stop with nearby lakes, towns or passes to
                      build your own mini‑stage of the Grand Tour.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-red-600 text-center text-xs font-semibold leading-5">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-white">Plan photo breaks</p>
                    <p className="text-xs text-white/70">
                      Allow extra time for viewpoints, short walks and village
                      stops – this route is made for slow travel.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-red-600 text-center text-xs font-semibold leading-5">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-white">Stay overnight</p>
                    <p className="text-xs text-white/70">
                      Turn a day trip into a road‑trip by combining this
                      attraction with neighbouring regions on the Grand Tour.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Additional content: sample day itinerary + practical info */}
      <section className="border-t border-white/5 bg-[#0b0507] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            {/* Itinerary / story */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                A perfect day on this stage
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/80">
                Start your journey in a lakeside town, follow winding roads past vineyards or deep forests,
                then climb towards panoramic passes where every curve reveals a new postcard view. Along the way,
                stop in small villages for coffee, walk to signed photo spots and let the Grand Tour road signs
                guide you effortlessly from highlight to highlight.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-xs sm:text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Morning
                  </p>
                  <p className="mt-1 font-medium text-white">
                    Scenic drive &amp; first viewpoints
                  </p>
                  <p className="mt-1 text-[11px] text-white/70">
                    Follow the Grand Tour route to your first lakeside or mountain lookout.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Afternoon
                  </p>
                  <p className="mt-1 font-medium text-white">
                    Short hike &amp; village stroll
                  </p>
                  <p className="mt-1 text-[11px] text-white/70">
                    Park the car, stretch your legs and explore a historic old town or easy trail.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Evening
                  </p>
                  <p className="mt-1 font-medium text-white">
                    Sunset &amp; local flavours
                  </p>
                  <p className="mt-1 text-[11px] text-white/70">
                    Watch the light change over the mountains before enjoying a relaxed Swiss dinner.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical boxes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight">
                Practical information (dummy)
              </h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Getting there
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/80">
                    Reach this region easily by car, public transport or as part of a longer Grand Tour stage.
                    Follow the brown Grand Tour signposts for the most scenic variant.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Difficulty &amp; roads
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/80">
                    Expect well-maintained roads with occasional hairpin bends and Alpine tunnels, depending on the
                    exact route. Always check seasonal closures for high passes.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Insider tip
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/80">
                    Plan extra time for spontaneous photo stops – many of the best views are just a few minutes off
                    the main road.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA stripe */}
          <div className="rounded-3xl border border-red-900/60 bg-gradient-to-r from-red-900/70 via-red-800/60 to-red-700/50 px-6 py-6 sm:px-10 sm:py-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-100/80">
                Plan your own Grand Tour
              </p>
              <p className="mt-1 text-sm sm:text-base text-red-50">
                Combine this stop with other stages, book accommodation along the route and create a custom Swiss road trip.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-red-900 shadow-lg hover:bg-red-50 transition-colors">
              Dummy button – plan later
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

