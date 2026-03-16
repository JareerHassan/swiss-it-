
"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";


const faqs = [
  {
    question: "What does Highland Group do?",
    answer:
      "We are a digital consultancy and implementation partner. We help organisations clarify strategy, design digital experiences, and build scalable web and mobile products.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with B2B and B2C companies across travel, hospitality, SaaS, finance and other service-driven sectors. Our focus is on teams that value long-term product thinking.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Most engagements begin with a discovery phase where we review your goals, existing systems and constraints. From there we define a roadmap, team setup and ways of working together.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. We often embed alongside internal product, design and engineering teams, filling gaps in capacity or specialised skills while keeping knowledge inside your organisation.",
  },
  {
    question: "What is your typical project length?",
    answer:
      "Smaller initiatives can run from 6–12 weeks. Larger product engagements are usually structured as multi‑month collaborations with regular milestones and reviews.",
  },
  {
    question: "How can we get started?",
    answer:
      "Share a short brief via the contact page. We will follow up with a call to understand your objectives, timelines and success metrics, and then propose a tailored approach.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQs" }
  ];
  return (
    <main className="min-h-screen bg-bg-main text-charcoal selection:bg-accent-red/30">
      {/* Hero */}
<Breadcrumb
  items={breadcrumbItems}
  title="FAQs Highland Group"
  subtitle="Highland Group is a strategic technology partner for forward-thinking businesses."
  description="We merge high-level consulting with precision engineering."
/>
      {/* FAQ list */}
      <section className="py-24 bg-bg-main">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`group rounded-2xl border transition-all duration-500 ${openIndex === index
                    ? "border-accent-red/40 bg-bg-soft shadow-md"
                    : "border-border-light bg-bg-main hover:border-border-light hover:bg-bg-soft"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? "text-charcoal" : "text-muted group-hover:text-charcoal"
                    }`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-500 ease-out ${openIndex === index ? "rotate-180" : ""}`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-accent-red" : "text-muted"}`} />
                  </div>
                </button>

                {/* Tailwind Pure CSS Height Animation */}
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
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
      {/* Contact CTA */}
      <section className="pb-32 container mx-auto max-w-7xl px-6">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-border-light bg-bg-soft">
          <div className="relative rounded-[2.5rem] p-10 md:p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent-red/10 rounded-full text-accent-red">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-charcoal">Need a deeper dive?</h2>
            <p className="text-muted mb-10 max-w-md mx-auto leading-relaxed">
              If your question isn't listed, our team is ready to help you navigate your specific requirements.
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

