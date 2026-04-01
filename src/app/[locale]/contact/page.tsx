import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { Send, MapPin, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Highland Group | Swiss IT Company",
  description:
    "Contact Highland Group for website development, AI automation, mobile apps, hotel booking systems, and digital marketing services for Swiss businesses.",
  keywords: [
    "Contact Highland Group",
    "Swiss IT company contact",
    "website development Switzerland contact",
    "AI automation Switzerland contact",
    "digital marketing Switzerland contact",
    "hotel booking systems Switzerland",
    "mobile app development Switzerland contact",
    "Meiringen IT company",
  ],
  alternates: {
    canonical: "http://highlandgroup.ch/en/contact",
  },
  openGraph: {
    title: "Contact Highland Group | Swiss IT Company",
    description:
      "Reach out to Highland Group for websites, AI automation, digital marketing, mobile apps, and hotel booking solutions.",
    url: "http://highlandgroup.ch/en/contact",
    siteName: "Highland Group",
    type: "website",
    locale: "en_CH",
    images: [
      {
        url: "http://highlandgroup.ch/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Highland Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Highland Group | Swiss IT Company",
    description:
      "Reach out to Highland Group for websites, AI automation, digital marketing, mobile apps, and hotel booking solutions.",
    images: ["http://highlandgroup.ch/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ];

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Highland Group",
    url: "http://highlandgroup.ch/en/contact",
    description:
      "Contact Highland Group for website development, AI automation, mobile apps, hotel booking systems, and digital marketing services.",
    mainEntity: {
      "@type": "Organization",
      name: "Highland Group",
      url: "http://highlandgroup.ch",
      logo: "http://highlandgroup.ch/logo.png",
      email: "highlandgroupgmbh@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahnhofstrasse 21",
        postalCode: "3860",
        addressLocality: "Meiringen",
        addressCountry: "CH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "highlandgroupgmbh@gmail.com",
        areaServed: "CH",
        availableLanguage: ["English"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://highlandgroup.ch/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "http://highlandgroup.ch/en/contact",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Section */}
      <div className="bg-gradient-to-b from-bg-soft/50 to-transparent">
        <Breadcrumb
          items={breadcrumbItems}
          title="Let’s Build Smarter Digital Systems"
          subtitle="Have a project in mind, a business challenge to solve, or simply exploring new opportunities? Reach out to us."
          description="Highland Group helps businesses grow with websites, AI automation, mobile apps, and digital marketing—built for real business results."
        />
      </div>

      <section className="py-20 md:py-28 px-6" id="contact-form">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div className="relative z-10 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-main text-accent-red text-sm font-medium mb-2">
                <Sparkles className="w-4 h-4" /> Available for New Projects
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold text-charcoal">
                Let’s build <br />
                <span className="text-accent-red">your next digital solution.</span>
              </h2>

              <p className="text-md text-muted max-w-md leading-relaxed">
                Whether you need a high-performing website, a direct booking
                system, a mobile app, stronger online visibility, or smarter
                automation, Highland Group is ready to help.
              </p>
            </div>

            {/* Image */}
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              <div className="absolute inset-0 bg-red-200 rounded-[2rem] rotate-3 scale-105 opacity-30" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                  alt="Highland Group Workspace"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-bg-main p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,31,38,0.15)] border border-border-light relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bg-soft rounded-full -mr-16 -mt-16 blur-3xl" />

              <form className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-accent-red ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-bg-soft rounded-2xl focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-accent-red ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-bg-soft rounded-2xl focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-red ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-bg-soft rounded-2xl focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all"
                    placeholder="info@highlandgroup.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-red ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 bg-bg-soft rounded-2xl focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-accent-red hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-accent-red/30 transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {/* Location / Address */}
        <div className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light">
          <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 rounded-xl text-accent-red">
            <MapPin className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-charcoal font-bold uppercase">Location</p>
            <p className="text-sm font-medium text-muted">
              <a
                href="https://maps.app.goo.gl/wC5QgkJp5MQJ7e8M9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bahnhofstrasse 21, 3860 Meiringen, Switzerland
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light">
          <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 text-accent-red rounded-xl">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-accent-red font-bold uppercase">Email Us</p>
            <p className="text-sm font-medium">
              <a
                href="mailto:highlandgroupgmbh@gmail.com"
                className="hover:underline"
              >
                highlandgroupgmbh@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}