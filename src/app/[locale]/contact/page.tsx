"use client";

import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import { Send, MapPin, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  first_name: string;
  last_name: string;
  user_email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ];

  const pageTitle = "Contact Highland Group | Swiss IT Company";
  const pageDescription =
    "Contact Highland Group for website development, AI automation, mobile apps, hotel booking systems, and digital marketing services for Swiss businesses.";
  const canonicalUrl = "https://highlandgroup.ch/en/contact";
  const ogImage = "https://highlandgroup.ch/logo.png";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Highland Group",
    url: canonicalUrl,
    description: pageDescription,
    mainEntity: {
      "@type": "Organization",
      name: "Highland Group",
      url: "https://highlandgroup.ch",
      logo: ogImage,
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
        item: "https://highlandgroup.ch/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: canonicalUrl,
      },
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          user_email: formData.user_email,
          message: formData.message,
          to_email: "highlandgroupgmbh@gmail.com",
        },
        {
          publicKey,
        }
      );

      setStatusMessage("Message sent successfully!");
      setStatusType("success");

      setFormData({
        first_name: "",
        last_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Contact Highland Group, Swiss IT company contact, website development Switzerland contact, AI automation Switzerland contact, digital marketing Switzerland contact, hotel booking systems Switzerland, mobile app development Switzerland contact, Meiringen IT company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Highland Group" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_CH" />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

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
      </Head>

      <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">
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
            <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
              <div className="relative z-10 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-main text-accent-red text-sm font-medium mb-2">
                  <Sparkles className="w-4 h-4" /> Available for New Projects
                </div>

                <h2 className="text-4xl md:text-6xl font-semibold text-charcoal">
                  Let’s build <br />
                  <span className="text-accent-red">
                    your next digital solution.
                  </span>
                </h2>

                <p className="text-md text-muted max-w-md leading-relaxed">
                  Whether you need a high-performing website, a direct booking
                  system, a mobile app, stronger online visibility, or smarter
                  automation, Highland Group is ready to help.
                </p>
              </div>

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

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-bg-main p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,31,38,0.15)] border border-border-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bg-soft rounded-full -mr-16 -mt-16 blur-3xl" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-accent-red ml-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
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
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
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
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-bg-soft rounded-2xl focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-accent-red hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-accent-red/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>

                  {statusMessage && (
                    <p
                      className={`text-sm text-center font-medium ${
                        statusType === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
          <div className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light">
            <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 rounded-xl text-accent-red">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs text-charcoal font-bold uppercase">
                Location
              </p>
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

          <div className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light">
            <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 text-accent-red rounded-xl">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs text-accent-red font-bold uppercase">
                Email Us
              </p>
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
    </>
  );
}