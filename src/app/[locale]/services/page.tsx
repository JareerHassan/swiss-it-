import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowRight,
  Globe,
  Hotel,
  Smartphone,
  Megaphone,
  Bot,
  Lightbulb,
  ShieldCheck,
  Target,
  Cpu,
  Settings,
} from "lucide-react";
import Link from "next/link";
export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params?.locale || "en"; // ✅ now works
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  const services = [
        {
      slug: 'ai-automation',
      icon: Bot,
      title: "AI Automation",
      body: "Chatbots, WhatsApp assistants, AI booking tools, lead automation, and workflow systems that save time and improve service quality.",
      bgImage: "/assets/img-17.jpeg",      
    },
    {
      slug: 'website-development',
      icon: Globe,
      title: "Website Development",
      body: "Modern, responsive, and conversion-focused websites built to strengthen your digital presence and generate more inquiries, bookings, and sales.",
      bgImage: "/assets/img-13.png",
    },
    {
      slug: 'hotel-booking-systems',
      icon: Hotel,
      title: "Hotel Direct Booking Solutions",
      body: "Booking-focused hotel websites and direct reservation systems that help reduce OTA dependence and improve profitability.",
      bgImage: "/assets/img-14.png",
    },
    {
      slug: 'mobile-app-development',
      icon: Smartphone,
      title: "Mobile App Development",
      body: "Custom mobile apps for bookings, customer engagement, appointments, and business operations across iOS and Android.",
      bgImage: "/assets/img-15.png",
    },
    {
      slug: 'digital-marketing',
      icon: Megaphone,
      title: "Digital Marketing",
      body: "SEO, Google Ads, Google Business Profile optimisation, and targeted campaigns that help businesses attract more qualified customers online.",
      bgImage: "/assets/img-16.png",
    },

    {
      slug: 'consulting-growth-support',
      icon: Lightbulb,
      title: "Consulting & Growth Support",
      body: "Strategic advice, digital planning, and ongoing optimisation to help businesses build better systems and improve long-term results.",
      bgImage: "/assets/img-20.jpg",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Business-Focused Solutions",
      description:
        "Every service is designed to help businesses generate more leads, improve bookings, and operate more efficiently.",
    },
    {
      icon: Cpu,
      title: "Industry Understanding",
      description:
        "We work closely with hospitality, tourism, and service-based businesses, giving us practical insight into real operational challenges.",
    },
    {
      icon: Settings,
      title: "Modern Technology",
      description:
        "We use reliable, scalable, and up-to-date digital tools to build systems that perform well and support long-term growth.",
    },
    {
      icon: ShieldCheck,
      title: "Tailored Approach",
      description:
        "No generic templates. We build each solution around your goals, audience, and business model.",
    },
    {
      icon: ArrowRight,
      title: "Long-Term Support",
      description:
        "We continue supporting, improving, and optimising digital systems after launch so your business keeps moving forward.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/20 selection:text-charcoal">
      {/* Hero */}
      <Breadcrumb
        items={breadcrumbItems}
        title="Digital Solutions Built for Business Growth"
        subtitle="Highland Group provides practical digital services for businesses that want stronger visibility, better customer experience, and measurable growth."
        description="We help Swiss hotels, tourism companies, and local businesses improve performance through modern websites, mobile apps, digital marketing, and AI automation."
      />


      {/* Services Section */}
      <section className="py-16  border-b border-border-light bg-bg-soft">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              What We Do Best
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-muted">
              We combine business strategy, technology, and digital execution to create solutions that do more than look good — they are designed to perform.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/${locale}/services/${service.slug}`}
                  className="h-full"   // ✅ important
                >
                  <article
                    className="group relative h-full flex flex-col rounded-2xl border border-border-light overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />

                    <div className="relative p-6 flex flex-col flex-1">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-red/10 text-accent-red">
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-red">
                        {service.title}
                      </h3>

                      <p className="text-muted text-sm leading-relaxed flex-1">
                        {service.body}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 ">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl">
              Highland Group is not just a service provider — we are a digital growth partner focused on real business outcomes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-6 border rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="mb-4 text-accent-red">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}