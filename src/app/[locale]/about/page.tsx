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
    body: "We use modern technology to solve business problems in smarter and more efficient ways."
  },
  {
    icon: <Star className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Excellence",
    body: "We build digital solutions with attention to quality, performance, and long-term reliability."
  },
  {
    icon: <Users className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Customer Focus",
    body: "Your business goals guide every solution we create, from websites to automation systems."
  },
  {
    icon: <Search className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Transparency",
    body: "We believe in clear communication, honest recommendations, and practical execution."
  },
  {
    icon: <BarChart2 className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Growth",
    body: "Our work is designed to help businesses increase revenue, improve visibility, and scale with confidence."
  },
  {
    icon: <Compass className="w-10 h-10 mb-6 text-accent-red" />,
    title: "Ownership",
    body: "We work as a committed digital partner, focused on delivering outcomes that matter."
  },
];

const processSteps = [
  {
    step: "01",
    title: "Strategy",
    body: "We understand your business goals, digital challenges, and growth opportunities."
  },
  {
    step: "02",
    title: "Design",
    body: "We create clear, modern, and user-focused digital experiences aligned with your brand."
  },
  {
    step: "03",
    title: "Development",
    body: "We build reliable websites, AI automation, and mobile apps with performance in mind."
  },
  {
    step: "04",
    title: "Growth",
    body: "We optimise, refine, and improve your digital systems to support long-term business growth."
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">

      {/* Hero Section */}
      <Breadcrumb
        items={breadcrumbItems}
        title="We Build Digital Growth Systems"
        subtitle="Highland Group helps Swiss businesses grow with websites, AI automation, mobile apps, and digital marketing."
        description="We create practical digital systems that increase direct bookings, generate more leads, and improve business efficiency."
      />



      {/* Who We Are */}
      <section className="py-16 bg-bg-soft border-y border-border-light">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-semibold text-charcoal">Who We Are</h2>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Highland Group is a modern digital solutions company working with both domestic and international clients from around the world.
              </p>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                We create digital growth systems designed to increase direct bookings, improve customer experience, automate repetitive work, and deliver measurable business results.
              </p>
              <p className="text-lg text-charcoal leading-relaxed max-w-2xl">
                Highland Group 
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

      {/* Values */}
      <section className="py-12 bg-bg-soft">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Our Core Values</h2>
            <div className="h-1 w-20 bg-accent-red" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-bg-soft border border-border-light hover:border-accent-red/30 transition-all group">
                <span className="text-4xl mb-6 block">{v.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-charcoal">{v.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-bg-soft border-t border-border-light">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-16 text-charcoal">How We Work</h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-light hidden md:block transform -translate-x-1/2" />

            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative mb-12 md:mb-16 last:mb-0 md:flex md:items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Circle */}
                  <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-accent-red/10 border-2 border-accent-red text-accent-red font-black text-2xl z-10 shrink-0 ${isEven ? 'md:mr-8' : 'md:ml-8 md:order-2'}`}>
                    {step.step}
                  </div>

                  {/* Card */}
                  <div className={`bg-bg-main border border-border-light rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-1 max-w-lg ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                    <h3 className="text-xl font-bold text-accent-red mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}