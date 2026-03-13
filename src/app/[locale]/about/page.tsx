import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "@/i18n/routing";

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
    <main className="min-h-screen bg-[#0a0506] text-slate-50 selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16  md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto  px-8 relative z-10">


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">digital futures.</span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                Highland Group is a strategic technology partner for forward-thinking businesses. We merge high-level consulting with precision engineering.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="https://images.pexels.com/photos/1181567/pexels-photo-1181567.jpeg"
                  alt="Team collaboration"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0506] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-semibold  text-red-100/90">Who we are</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We help organisations clarify strategy, design frictionless customer journeys, and ship robust products across web and mobile.
              </p>
              <p className="text-lg text-slate-400 font-light">
                Our mission is simple: <strong>Simplify complexity.</strong> We move quickly, stay lean, and remain obsessively close to your business goals.
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
      <section className="py-24">
        <div className="container mx-auto  px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-red-600" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-red-500/30 transition-all group">
                <span className="text-4xl mb-6 block grayscale group-hover:grayscale-0 transition-all">{v.icon}</span>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process - Horizontal Steps */}
      <section className="py-24 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {processSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/[0.02] border-r border-white/10 last:border-r-0 hover:bg-white/[0.05] transition-colors min-h-[250px] flex flex-col"
              >
                <span className="text-5xl font-black text-white/20 mb-4 block">{s.step}</span>
                <h3 className="text-lg font-bold mb-2 text-red-400">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}