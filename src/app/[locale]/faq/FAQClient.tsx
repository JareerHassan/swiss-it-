"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import { Link as I18nLink } from "@/i18n/routing";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQClient({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQs" },
  ];

  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/30">
      <Breadcrumb
        items={breadcrumbItems}
        title="Frequently Asked Questions"
        subtitle="Highland Group helps businesses grow with websites, AI automation, mobile apps, and digital marketing."
        description="We work with hotels, tourism companies, and service-based businesses that want stronger digital presence, better customer experience, and smarter systems for growth."
      />

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
                        openIndex === index ? "text-accent-red" : "text-muted"
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

      <section className="pb-12 container mx-auto max-w-7xl px-6">
        <div className="group relative rounded-[1.5rem] overflow-hidden border border-border-light bg-bg-soft">
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

            <I18nLink
  href="/contact"
  className="group/btn inline-flex items-center gap-2 bg-accent-red text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 active:scale-95 whitespace-nowrap"
>
  Contact Highland Group
  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</I18nLink>
          </div>
        </div>
      </section>
    </main>
  );
}