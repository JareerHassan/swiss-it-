
"use client";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
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
  return (
    <main className="min-h-screen bg-[#0a0506] text-slate-50 selection:bg-red-500/30">
      {/* Hero */}
  <section className="relative pt-32 pb-16  md:pb-24 overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
         
         <div className="container mx-auto  px-8 relative z-10">
       
 
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                 FAQs  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">         Highland Group</span>
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

      {/* FAQ list */}
    <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <div 
                key={index}
                className={`group rounded-2xl border transition-all duration-500 ${
                  openIndex === index 
                    ? "border-red-500/40 bg-white/[0.03] shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]" 
                    : "border-white/10 bg-transparent hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-500 ease-out ${openIndex === index ? "rotate-180" : ""}`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-red-500" : "text-slate-600"}`} />
                  </div>
                </button>

                {/* Tailwind Pure CSS Height Animation */}
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed text-[0.95rem]">
                      <div className="pt-2 border-t border-white/5">
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
   <section className="pb-32 container mx-auto max-w-4xl px-6">
        <div className="group relative p-[1px] rounded-[2.5rem] overflow-hidden">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] transition-opacity duration-500" />
          
          <div className="relative bg-[#0e0708] rounded-[2.5rem] p-10 md:p-16 text-center border border-white/5">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-500/10 rounded-full text-red-500">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">Need a deeper dive?</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
              If your question isn't listed, our team is ready to help you navigate your specific requirements.
            </p>
            <a
              href="/contact"
              className="group/btn inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95"
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

