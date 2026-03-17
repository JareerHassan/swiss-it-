'use client';

import Image from 'next/image';

export default function DiscoverMoreSection() {
  return (
    <section className="relative z-10 w-full bg-bg-soft py-20 text-charcoal md:py-28 border-t border-border-light">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Row 1 */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="relative flex justify-center">
            <div className="absolute left-4 right-10 top-10 h-64 rounded-[40px] bg-border-light md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] overflow-hidden rounded-[36px] border border-border-light bg-bg-main shadow-lg md:w-[280px]">
              <div className="relative h-[360px] w-full bg-border-light">
                <Image
                  src="/assets/img-13.png"
                  alt="Website development and digital business solutions"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-border-light bg-bg-main px-5 py-4">
                <span className="rounded-full bg-accent-red px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  Website Development
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-border-light px-3 py-1 text-xs font-medium text-charcoal">
              <span className="h-2 w-2 rounded-full bg-accent-red" />
              <span>Core Service</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl md:text-[32px]">
              High-performing websites built for business growth
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
              Highland Group creates modern websites that help businesses build trust, generate more leads,
              and turn visitors into customers across Europe.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-24 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] md:items-center">
          <div className="order-2 space-y-4 md:order-1 md:space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
              <span className="h-4 w-4 rounded-full bg-border-light text-charcoal text-center text-[10px] leading-4">↑</span>
              <span>Efficiency</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Save time with AI automation and smarter workflows
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
              From AI chatbots to automated lead handling and CRM workflows, we help businesses reduce manual
              work, respond faster, and operate more efficiently.
            </p>
          </div>

          <div className="order-1 relative flex justify-center md:order-2">
            <div className="absolute left-10 right-4 top-10 h-64 rounded-[40px] bg-border-light md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] overflow-hidden rounded-[36px] border border-border-light bg-bg-main shadow-lg md:w-[280px]">
              <div className="relative h-[360px] w-full bg-border-light">
                <Image
                  src="/assets/img-17.jpeg"
                  alt="AI automation and smart workflow systems"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-border-light bg-bg-main px-5 py-4">
                <span className="rounded-full bg-accent-red px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  AI Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-32 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Digital solutions <br />
              that increase revenue <br />
              and reduce manual work
            </h2>
            <p className="max-w-md text-muted">
              Highland Group helps businesses across Europe grow with websites, mobile apps, digital
              marketing, AI automation, and business systems designed for measurable results.
            </p>
            <a href="/contact" className="inline-block font-medium text-accent-red hover:underline">
              Book a free consultation
            </a>

            {/* Quote Block */}
            <div className="border-t border-border-light pt-8">
              <span className="font-serif text-4xl text-accent-red">"</span>
              <p className="mt-[-10px] text-lg text-charcoal">
                We build practical digital systems that help businesses attract more customers, improve
                efficiency, and grow with confidence.
              </p>
              <p className="mt-4 text-sm font-medium text-muted">Highland Group</p>
            </div>
          </div>

          <div className="relative">
            {/* Stats Badge */}
            <div className="absolute -left-6 bottom-12 z-20 min-w-[160px] rounded-2xl rounded-br-none bg-accent-red p-6 shadow-xl text-white">
              <div className="text-xl">↑</div>
              <div className="text-3xl font-bold">25%</div>
              <div className="text-xs text-white/90">potential revenue growth with better digital systems</div>
            </div>

            {/* Main Image Container */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
              <Image
                src="/assets/img-7.jpg"
                alt="Business growth dashboard and analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}