import Breadcrumb from "@/components/Breadcrumb";
import { 
  ArrowRight, 
  Lightbulb, 
  Layout, 
  Code2, 
  RefreshCw, 
  Headphones, 
  SearchCheck, 
  ShieldCheck, 
  Rocket, 
  Clock, 
  Target, 
  Users 
} from "lucide-react";

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services" }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Digital Strategy",
      body: "Product vision workshops, roadmapping, discovery sessions and ruthless prioritisation that drives real business results.",
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Layout,
      title: "UX & UI Design",
      body: "Deep user research, intuitive flows, scalable design systems, pixel-perfect interfaces and continuous design QA.",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Code2,
      title: "Web & App Development",
      body: "Modern, performant, scalable applications built with battle-tested stacks — web, mobile, hybrid, progressive.",
      bgImage: "https://images.unsplash.com/photo-1555066931-bf19c0fd1085?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: RefreshCw,
      title: "Platform Modernisation",
      body: "Technical debt reduction, legacy refactors, cloud migrations, performance tuning and future-proof architecture.",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Headphones,
      title: "Ongoing Product Support",
      body: "Post-launch iteration, experimentation, roadmap stewardship, bug fixes and continuous improvement cycles.",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: SearchCheck,
      title: "Consulting & Audits",
      body: "Product, UX, technical and growth audits delivered with clear, prioritised, actionable recommendations.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Senior-Led Delivery",
      description: "Every project is led by senior strategists and engineers with 10+ years of hands-on experience — no junior handoffs."
    },
    {
      icon: Rocket,
      title: "Results Over Hours",
      description: "We focus on measurable business outcomes (revenue, retention, efficiency) rather than time spent or lines of code written."
    },
    {
      icon: Clock,
      title: "Fast & Predictable",
      description: "Small, autonomous teams deliver most MVPs in 8–12 weeks — without layers of bureaucracy or endless meetings."
    },
    {
      icon: Target,
      title: "Honest & Selective",
      description: "We only accept work where we can create real value — and we’ll tell you clearly if we’re not the right partner."
    },
    {
      icon: Users,
      title: "Long-Term Partnership",
      description: "More than 80% of our clients continue working with us after launch for iteration, support and new initiatives."
    },
  ];

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      {/* Hero */}
      <Breadcrumb
        items={breadcrumbItems}
        title="We build digital futures"
        subtitle="Strategic technology partner for ambitious organisations"
        description="High-level consulting fused with precision engineering — delivered by small, focused teams."
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border-light bg-bg-soft">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-tight">
              What We Do Best
            </h2>
            <p className="mt-5 md:mt-6 max-w-3xl mx-auto md:mx-0 text-lg md:text-xl text-muted leading-relaxed">
              We combine strategy, design and engineering in tight, outcome-obsessed teams to deliver real business impact.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`
                    group relative rounded-2xl border border-border-light/60 overflow-hidden
                    transition-all duration-400 ease-out
                    hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent-red/20
                    hover:border-accent-red/50
                  `}
                >
                  <div
                    className={`
                      absolute inset-0 bg-cover bg-center transition-all duration-700
                      group-hover:scale-110 group-hover:opacity-20 opacity-10
                    `}
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/70 to-transparent z-0" />

                  <div className="relative z-10 p-7 md:p-9">
                    <div
                      className={`
                        mb-6 inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl
                        bg-accent-red/10 text-accent-red backdrop-blur-sm
                        transition-all duration-400
                        group-hover:bg-accent-red/30 group-hover:scale-110 group-hover:rotate-3
                      `}
                    >
                      <Icon className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4 transition-colors duration-300 group-hover:text-accent-red">
                      {service.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-[15px] md:text-base transition-all duration-400 group-hover:text-charcoal/95">
                      {service.body}
                    </p>

                    <div
                      className={`
                        absolute bottom-6 right-6 md:bottom-8 md:right-8
                        opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-300
                      `}
                    >
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-accent-red/80" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border-light bg-bg-soft">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 ">
          <div className=" mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
              Why Choose Us?
            </h2>
            <p className="mt-5 md:mt-6 max-w-3xl  text-lg md:text-xl text-muted leading-relaxed">
              We’re not just another vendor — we’re a selective, outcome-obsessed partner built for long-term success.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className={`
                    group relative rounded-2xl border border-border-light/70 bg-bg-soft p-7 md:p-9
                    transition-all duration-400
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-red/10
                    hover:border-accent-red/40
                  `}
                >
                  <div
                    className={`
                      mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl
                      bg-accent-red/10 text-accent-red
                      transition-all duration-300
                      group-hover:bg-accent-red/20 group-hover:scale-110
                    `}
                  >
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-accent-red transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
    </main>
  );
}