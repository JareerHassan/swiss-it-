"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { Send, MapPin, Mail, Sparkles, Phone } from "lucide-react";

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact" }
  ];

  return (
    <main className="min-h-screen bg-bg-soft text-charcoal selection:bg-accent-red/30">
      {/* Breadcrumb Section with soft gradient */}
      <div className="bg-gradient-to-b from-bg-soft/50 to-transparent">
        <Breadcrumb
          items={breadcrumbItems}
          title="Let's Build Digital Futures"
          subtitle="Have an idea, a project brief, or just exploring possibilities? Reach out."
          description="Highland Group helps businesses navigate digital transformation with precision, strategy, and scalable solutions."
        />
      </div>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Visuals & Info */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div className="relative z-10 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-main text-accent-red text-sm font-medium mb-2">
                <Sparkles className="w-4 h-4" /> Available for new collaborations
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold text-charcoal">
                Let’s build <br />
                <span className="text-accent-red">your next project.</span>
              </h2>

              <p className="text-md text-muted max-w-md leading-relaxed">
                Have a concept, a fully-formed brief, or a challenge to solve? Contact Highland Group and we’ll help you strategize, design, and implement impactful digital solutions.
              </p>
            </div>

            {/* Main Image */}
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              <div className="absolute inset-0 bg-red-200 rounded-[2rem] rotate-3 scale-105 opacity-30" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-bg-main p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,31,38,0.15)] border border-border-light relative overflow-hidden">
              {/* Form Decorative Blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-bg-soft rounded-full -mr-16 -mt-16 blur-3xl" />

              <form className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-accent-red ml-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-bg-soft border border-transparent rounded-2xl focus:bg-bg-main focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all placeholder:text-muted"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-accent-red ml-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-bg-soft border border-transparent rounded-2xl focus:bg-bg-main focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all placeholder:text-muted"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-red ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-bg-soft border border-transparent rounded-2xl focus:bg-bg-main focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all placeholder:text-muted"
                    placeholder="hello@highlandgroup.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-accent-red ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 bg-bg-soft border border-transparent rounded-2xl focus:bg-bg-main focus:border-accent-red focus:ring-4 focus:ring-accent-red/20 outline-none transition-all placeholder:text-muted resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-accent-red hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-accent-red/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        <div className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light hover:shadow-xl transition-all">
          <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 rounded-xl text-accent-red">
            <MapPin className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-charcoal font-bold uppercase tracking-wider">Location</p>
            <p className="text-sm font-medium text-muted">Berlin, Germany</p>
          </div>
        </div>

        <a href="mailto:info@highlandgroup.com" className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light hover:border-accent-red hover:shadow-xl transition-all group/link">
          <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 text-accent-red rounded-xl group-hover/link:scale-110 transition-transform">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-accent-red font-bold uppercase tracking-wider">Email Us</p>
            <p className="text-sm font-medium group-hover/link:text-accent-red transition-colors">info@highlandgroup.com</p>
          </div>
        </a>

        <a href="tel:+491234567890" className="flex items-center gap-4 p-6 h-36 rounded-2xl bg-bg-main shadow-md border border-border-light hover:border-accent-red hover:shadow-xl transition-all group/link">
          <div className="w-14 h-14 flex items-center justify-center bg-accent-red/20 text-accent-red rounded-xl group-hover/link:scale-110 transition-transform">
            <Phone className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-accent-red font-bold uppercase tracking-wider">Call Us</p>
            <p className="text-sm font-medium group-hover/link:text-accent-red transition-colors">+49 123 456 7890</p>
          </div>
        </a>
      </section>
    </main>
  );
}