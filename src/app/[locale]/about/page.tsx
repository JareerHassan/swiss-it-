import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "@/i18n/routing";
import { Lightbulb, Star, Users, Search, BarChart2, Compass } from 'lucide-react';


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About" }
];


const values = [
  {
    icon: <Lightbulb className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Innovation",
    body: "We explore smarter ways to solve problems by testing, iterating, and learning quickly."
  },
  {
    icon: <Star className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Excellence",
    body: "Attention to detail, maintainability, and long-term reliability drive everything we do."
  },
  {
    icon: <Users className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Customer Focus",
    body: "Your goals guide our work — we prioritise clarity, outcomes, and your success."
  },
  {
    icon: <Search className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Transparency",
    body: "Open communication, clear trade-offs, and honest expectations at every stage."
  },
  {
    icon: <BarChart2 className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Growth",
    body: "We design scalable systems that grow with your team, users, and roadmap."
  },
  {
    icon: <Compass className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Ownership",
    body: "We act as an extension of your team, taking responsibility for results and outcomes."
  },
];

const processSteps = [
  { step: "01", title: "Strategy", body: "We define your objectives, success metrics, and align stakeholders." },
  { step: "02", title: "Design", body: "We craft intuitive interfaces, user journeys, and content that reflect your brand." },
  { step: "03", title: "Development", body: "We build, test, and deploy modern, scalable solutions with precision." },
  { step: "04", title: "Growth", body: "We measure results, refine processes, and optimise products based on real-world data." },
];

export default function About() {
  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">
      {/* Hero Section */}
      <Breadcrumb
        items={breadcrumbItems}
        title="We Build Digital Futures"
        subtitle="Highland Group partners with forward-thinking businesses to create meaningful digital experiences."
        description="From strategy to execution, we combine deep expertise with precision engineering to deliver results."
      />

      {/* Intro Section */}
      <section className="py-24 bg-bg-soft border-y border-border-light">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-semibold text-charcoal">Who We Are</h2>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Highland Group helps organisations clarify strategy, design frictionless digital experiences, and deliver robust products for web and mobile.
              </p>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Our mission is simple: <strong className="text-charcoal">Simplify Complexity.</strong> We move fast, stay lean, and focus on outcomes that matter to your business.
              </p>
            </div>
            <div className="md:col-span-5 h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
                alt="Highland Group Office"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-bg-soft">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Our Core Values</h2>
            <div className="h-1 w-20 bg-accent-red" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-bg-soft border border-border-light hover:border-accent-red/30 transition-all group">
                <span className="text-4xl mb-6 block grayscale group-hover:grayscale-0 transition-all">{v.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-charcoal">{v.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Horizontal Steps */}
      <section className="py-20 md:py-28 bg-bg-soft border-t border-border-light">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-16 text-charcoal">How We Work</h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line (hidden on mobile) */}
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-light hidden md:block transform -translate-x-1/2" />

            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`
                    relative mb-12 md:mb-16 last:mb-0
                    md:flex md:items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}
                    md:pl-8 md:pr-8
                  `}
                >
                  {/* Circle + number */}
                  <div className={`
                    flex items-center justify-center w-14 h-14 rounded-full 
                    bg-accent-red/10 border-2 border-accent-red text-accent-red font-black text-2xl
                    z-10 shrink-0 mx-auto md:mx-0
                    ${isEven ? 'md:mr-8' : 'md:ml-8 md:order-2'}
                  `}>
                    {step.step}
                  </div>

                  {/* Card */}
                  <div className={`
                    relative bg-bg-main border border-border-light rounded-xl p-6 md:p-8 shadow-sm
                    hover:shadow-md hover:-translate-y-1 transition-all duration-300
                    ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}
                    flex-1 max-w-lg
                  `}>
                    <h3 className="text-xl font-bold text-accent-red mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Connecting line (mobile only – between circles) */}
                  {idx < processSteps.length - 1 && (
                    <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-border-light md:hidden -z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}