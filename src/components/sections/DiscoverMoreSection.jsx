'use client';

import Image from 'next/image';

export default function DiscoverMoreSection() {
  return (
    <section className="relative z-10 w-full bg-[#221115] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Row 1 */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="relative flex justify-center">
            <div className="absolute left-4 right-10 top-10 h-64 rounded-[40px] bg-[#2563eb] md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:w-[280px]">
              <div className="relative h-[360px] w-full bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="Website development and digital business solutions"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-zinc-800 bg-zinc-900 px-5 py-4">
                <span className="rounded-full bg-[#2563eb] px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  Website Development
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Core Service</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[32px]">
              High-performing websites built for business growth
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              Highland Group creates modern websites that help businesses build trust, generate more leads,
              and turn visitors into customers across Europe.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-24 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] md:items-center">
          <div className="order-2 space-y-4 md:order-1 md:space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="h-4 w-4 rounded-full bg-emerald-500/20 text-center text-[10px] leading-4">↑</span>
              <span>Efficiency</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Save time with AI automation and smarter workflows
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              From AI chatbots to automated lead handling and CRM workflows, we help businesses reduce manual
              work, respond faster, and operate more efficiently.
            </p>
          </div>

          <div className="order-1 relative flex justify-center md:order-2">
            <div className="absolute left-10 right-4 top-10 h-64 rounded-[40px] bg-[#10b981] md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:w-[280px]">
              <div className="relative h-[360px] w-full bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                  alt="AI automation and smart workflow systems"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-zinc-800 bg-zinc-900 px-5 py-4">
                <span className="rounded-full bg-[#10b981] px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  AI Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-32 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Digital solutions <br />
              that increase revenue <br />
              and reduce manual work
            </h2>
            <p className="max-w-md text-zinc-400">
              Highland Group helps businesses across Europe grow with websites, mobile apps, digital
              marketing, AI automation, and business systems designed for measurable results.
            </p>
            <a href="/contact" className="inline-block font-medium text-blue-400 hover:underline">
              Book a free consultation
            </a>

            {/* Quote Block */}
            <div className="border-t border-zinc-800 pt-8">
              <span className="font-serif text-4xl text-blue-400">"</span>
              <p className="mt-[-10px] text-lg text-zinc-200">
                We build practical digital systems that help businesses attract more customers, improve
                efficiency, and grow with confidence.
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-500">Highland Group</p>
            </div>
          </div>

          <div className="relative">
            {/* Stats Badge */}
            <div className="absolute -left-6 bottom-12 z-20 min-w-[160px] rounded-2xl rounded-br-none bg-blue-600 p-6 shadow-xl">
              <div className="text-xl text-white">↑</div>
              <div className="text-3xl font-bold text-white">25%</div>
              <div className="text-xs text-blue-100">potential revenue growth with better digital systems</div>
            </div>

            {/* Main Image Container */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
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