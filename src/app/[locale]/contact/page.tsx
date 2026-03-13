"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Send, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0506] text-slate-50 selection:bg-red-500/30 selection:text-white">
      {/* Hero Section */}
   <section className="relative pt-32 pb-16  md:pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
  
          <div className="container mx-auto  px-8 relative z-10">
  
  
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                 Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Together</span>
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
Whether you have a fully-formed brief or just the spark of an idea, 
              reach out. We help brands navigate the digital landscape with precision.
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

      {/* Main Content Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto  px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Subtle outer glow on the whole form container */}
                <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] blur-xl opacity-50 transition duration-1000 group-hover:opacity-100" />
                
                <form className="relative space-y-8 rounded-[2rem] border border-white/10 bg-[#0d0708]/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="space-y-2 group/field">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/field:text-red-500 transition-colors">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-3 text-base text-white outline-none transition-all focus:border-red-600 placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 group/field">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/field:text-red-500 transition-colors">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-3 text-base text-white outline-none transition-all focus:border-red-600 placeholder:text-email@company.com"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Topic Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group/field">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/field:text-red-500 transition-colors">
                        Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-3 text-base text-white outline-none transition-all focus:border-red-600 placeholder:text-slate-600"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-2 group/field">
                      <label htmlFor="topic" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/field:text-red-500 transition-colors">
                        Project Type
                      </label>
                      <select
                        id="topic"
                        className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-base text-white outline-none transition-all focus:border-red-600 appearance-none cursor-pointer"
                      >
                        <option className="bg-[#0a0506]">Digital Strategy</option>
                        <option className="bg-[#0a0506]">Product Design</option>
                        <option className="bg-[#0a0506]">Development</option>
                        <option className="bg-[#0a0506]">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2 group/field">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-focus-within/field:text-red-500 transition-colors">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-3 text-base text-white outline-none transition-all focus:border-red-600 resize-none placeholder:text-slate-600"
                      placeholder="Tell us about your objectives and timelines..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-red-500 active:scale-95 shadow-lg shadow-red-900/20 overflow-hidden"
                  >
                    <span className="relative z-10">Send Proposal</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-5 space-y-8 lg:pl-12">
              {/* Trust Cards */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Quick Contact</h3>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-600/10 text-red-500 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Direct Email</p>
                      <a href="mailto:hello@highland-group.example" className="text-lg font-medium text-white flex items-center gap-1 hover:text-red-400 transition-colors">
                        hello@highland-group.com
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-600/10 text-red-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 mb-1">Response Time</p>
                      <p className="text-lg font-medium text-white">Within 24 hours</p>
                      <p className="text-sm text-slate-400 mt-1">Monday through Friday, 9am — 6pm.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategy Note */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#1a0b0e] to-transparent border border-white/5">
                <ShieldCheck className="w-8 h-8 text-red-500 mb-6" />
                <h4 className="text-xl font-bold mb-4">Our Partnership Model</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  We don't just "take orders." We act as your strategic implementation partner. 
                  Every inquiry is reviewed by our lead consultants to ensure we are the right fit for your business goals.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}