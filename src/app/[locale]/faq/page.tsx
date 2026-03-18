"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Highland Group offer?",
    answer:
      "Highland Group provides digital solutions including website development, hotel direct booking solutions, mobile app development, digital marketing, and AI automation.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We work with hotels, tourism businesses, restaurants, clinics, real estate companies, local service businesses, and growing SMEs across Switzerland and Europe.",
  },
  {
    question: "How does a typical project start?",
    answer:
      "Every project starts with a consultation where we understand your business goals, challenges, and the right digital solution for your needs.",
  },
  {
    question: "Can Highland Group work alongside our team?",
    answer:
      "Yes. We can work as an external digital partner or collaborate directly with your internal team.",
  },
  {
    question: "How long do projects usually take?",
    answer:
      "Timelines depend on the type and complexity of the project. Simpler websites take less time, while apps, booking systems, and automation projects may take longer.",
  },
  {
    question: "Do you only build new websites?",
    answer:
      "No. We can also redesign, improve, and optimise existing websites and digital systems.",
  },
  {
    question: "Can you help us get more direct bookings or leads?",
    answer:
      "Yes. We create systems designed to improve direct bookings, lead generation, and customer conversion.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer continued support, updates, optimisation, and long-term improvement.",
  },
  {
    question: "How do we get started with Highland Group?",
    answer:
      "Book a free consultation and we will discuss the right solution for your business.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQs" },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/30">
      {/* Hero */}
      <Breadcrumb
        items={breadcrumbItems}
        title="Frequently Asked Questions"
        subtitle="Highland Group helps businesses grow with websites, mobile apps, digital marketing, and AI automation."
        description="We work with hotels, tourism companies, and service-based businesses that want stronger digital presence, better customer experience, and smarter systems for growth."
      />


      {/* FAQ list */}
      <section className="py-16 bg-bg-main">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`group rounded-2xl border transition-all duration-500 ${
                  openIndex === index
                    ? "border-accent-red/40 bg-bg-soft shadow-md"
                    : "border-border-light bg-bg-main hover:border-border-light hover:bg-bg-soft"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index
                        ? "text-charcoal"
                        : "text-muted group-hover:text-charcoal"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`transition-transform duration-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index
                          ? "text-accent-red"
                          : "text-muted"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-muted leading-relaxed text-[0.95rem]">
                      <div className="pt-2 border-t border-border-light">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-32 container mx-auto max-w-7xl px-6">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-border-light bg-bg-soft">
          <div className="relative rounded-[2.5rem] p-10 md:p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent-red/10 rounded-full text-accent-red">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 tracking-tight text-charcoal">
              Need a deeper dive?
            </h2>

            <p className="text-muted mb-10 max-w-md mx-auto leading-relaxed">
              If your question is not listed, our team is ready to help you
              navigate your specific requirements.
            </p>

            <a
              href="/contact"
              className="group/btn inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 active:scale-95"
            >
              Contact Highland Group
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}