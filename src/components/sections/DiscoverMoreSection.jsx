'use client';

import Image from 'next/image';

export default function DiscoverMoreSection() {
  return (
    <section className="relative z-10 w-full bg-bg-soft py-16  text-charcoal border-t border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Row 1 */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute left-3 right-8 top-8 h-56 sm:h-64 md:h-72 lg:h-80 rounded-[40px] bg-border-light" />
            
            <div className="relative z-10 w-[220px] sm:w-[250px] md:w-[280px] overflow-hidden rounded-[36px] border border-border-light bg-bg-main shadow-lg">
              <div className="relative h-[300px] sm:h-[340px] md:h-[360px] w-full bg-border-light">
                <Image
                  src="/assets/img-13.png"
                  alt="Website development and digital business solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
                  priority
                />
              </div>

              <div className="flex items-center justify-center gap-3 border-t border-border-light bg-bg-main px-4 sm:px-5 py-3 sm:py-4">
                <span className="rounded-full bg-accent-red px-3 sm:px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  Website Development
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-border-light px-3 py-1 text-xs font-medium text-charcoal">
              <span className="h-2 w-2 rounded-full bg-accent-red" />
              <span>Core Service</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[32px] font-semibold tracking-tight">
              High-performing websites built for business growth
            </h2>

            <p className="max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed text-muted">
              Highland Group creates modern websites that help businesses build trust, generate more leads,
              and turn visitors into customers across Europe.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-16 sm:mt-20 md:mt-24 grid gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] md:items-center">

          {/* Content */}
          <div className="order-2 md:order-1 space-y-4 md:space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
              <span className="h-4 w-4 rounded-full bg-border-light text-charcoal text-center text-[10px] leading-4">↑</span>
              <span>Efficiency</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
              Save time with AI automation and smarter workflows
            </h3>

            <p className="max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed text-muted">
              From AI chatbots to automated lead handling and CRM workflows, we help businesses reduce manual
              work, respond faster, and operate more efficiently.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="absolute left-8 right-3 top-8 h-56 sm:h-64 md:h-72 lg:h-80 rounded-[40px] bg-border-light" />

            <div className="relative z-10 w-[220px] sm:w-[250px] md:w-[280px] overflow-hidden rounded-[36px] border border-border-light bg-bg-main shadow-lg">
              <div className="relative h-[300px] sm:h-[340px] md:h-[360px] w-full bg-border-light">
                <Image
                  src="/assets/img-17.jpeg"
                  alt="AI automation and smart workflow systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
                  priority
                />
              </div>

              <div className="flex items-center justify-center gap-3 border-t border-border-light bg-bg-main px-4 sm:px-5 py-3 sm:py-4">
                <span className="rounded-full bg-accent-red px-3 sm:px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  AI Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 grid gap-10 md:grid-cols-2 md:items-center">

          {/* Content */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Digital solutions <br />
              that increase revenue <br />
              and reduce manual work
            </h2>

            <p className="max-w-md mx-auto md:mx-0 text-sm md:text-base text-muted">
              Highland Group helps businesses across Europe grow with websites, mobile apps, digital
              marketing, AI automation, and business systems designed for measurable results.
            </p>

            <a href="/contact" className="inline-block font-medium text-accent-red hover:underline">
              Book a free consultation
            </a>

            <div className="border-t border-border-light pt-6 sm:pt-8">
              <span className="font-serif text-3xl sm:text-4xl text-accent-red">"</span>
              <p className="mt-[-6px] sm:mt-[-10px] text-base sm:text-lg text-charcoal">
                We build practical digital systems that help businesses attract more customers, improve
                efficiency, and grow with confidence.
              </p>
              <p className="mt-3 sm:mt-4 text-sm font-medium text-muted">Highland Group</p>
            </div>
          </div>

          {/* Image + Badge */}
          <div className="relative">

            {/* Badge */}
            <div className="absolute -left-3 sm:-left-6 bottom-6 sm:bottom-10 z-20 min-w-[140px] sm:min-w-[160px] rounded-2xl rounded-br-none bg-accent-red p-4 sm:p-6 shadow-xl text-white">
              <div className="text-lg sm:text-xl">↑</div>
              <div className="text-2xl sm:text-3xl font-bold">25%</div>
              <div className="text-[10px] sm:text-xs text-white/90">
                potential revenue growth with better digital systems
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px] w-full overflow-hidden rounded-tl-[60px] sm:rounded-tl-[80px] rounded-br-[60px] sm:rounded-br-[80px]">
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