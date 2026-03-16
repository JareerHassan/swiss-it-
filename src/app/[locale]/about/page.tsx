import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "@/i18n/routing";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About" }
];

const values = [
  { icon: "💡", title: "Innovation", body: "We test, learn and iterate quickly — always looking for smarter ways to solve problems." },
  { icon: "⭐", title: "Quality", body: "We care about details, maintainability and long-term reliability." },
  { icon: "🤝", title: "Customer focus", body: "We prioritise clarity, transparency and outcomes over deliverables." },
  { icon: "🔍", title: "Transparency", body: "Open communication, honest trade-offs and clear expectations at every stage." },
  { icon: "📈", title: "Growth", body: "We design systems that scale with your users, your team and your roadmap." },
  { icon: "🧭", title: "Ownership", body: "We behave like an extension of your team and take responsibility for results." },
];

const processSteps = [
  { step: "01", title: "Strategy", body: "We clarify goals, define success metrics and align stakeholders." },
  { step: "02", title: "Design", body: "We craft user journeys, interfaces and content that reflect your brand." },
  { step: "03", title: "Development", body: "We build, test and iterate using modern, scalable technologies." },
  { step: "04", title: "Growth", body: "We measure impact and refine the product based on real-world feedback." },
];

export default function About() {
  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">
      {/* Hero Section */}
      <Breadcrumb
        items={breadcrumbItems}
        title="We build digital futures."
        subtitle="Highland Group is a strategic technology partner for forward-thinking businesses."
        description="We merge high-level consulting with precision engineering."
      />

      {/* Intro Section */}
      <section className="py-24 bg-bg-soft border-y border-border-light">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-semibold text-charcoal">Who we are</h2>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                We help organisations clarify strategy, design frictionless customer journeys, and ship robust products across web and mobile.
              </p>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Our mission is simple: <strong className="text-charcoal">Simplify complexity.</strong> We move quickly, stay lean, and remain obsessively close to your business goals.
              </p>
            </div>
            <div className="md:col-span-5 h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
                alt="Office"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-bg-soft">
        <div className="container mx-auto  px-8">
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