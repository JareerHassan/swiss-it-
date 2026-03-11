'use client';

import Image from 'next/image';

export default function DiscoverMoreSection() {
  return (
    <section className="relative z-10 w-full bg-[#221115] py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Row 1: Original Section 1 */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="relative flex justify-center">
            <div className="absolute left-4 right-10 top-10 h-64 rounded-[40px] bg-[#f9b321] md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] rounded-[36px] bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden md:w-[280px] border border-zinc-800">
              <div className="relative h-[360px] w-full bg-zinc-800">
                <Image
                  src="https://lh3.googleusercontent.com/8PzAsw0esLk9g2F11obQKgz2iEzFbhd1Od981PdsTlj86kjkohxNeikoq0Y7UgM4FMRKYJCkFN7sAe9OMrWb8B62O7n-p-TmWiMBkXkN3JaVI3_zfRdJ=w1920-rw"
                  alt="Booking interface example"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-zinc-800 bg-zinc-900 px-5 py-4">
                <button className="rounded-full bg-[#1a73e8] px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  Google Search
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span>Featured benefit</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[32px]">
              Use free booking links to get more direct bookings
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              With free booking links in your profile, you can show real-time rates and availability and send
              customers to your booking site. All at no cost from Google.
            </p>
          </div>
        </div>

        {/* Row 2: Original Section 2 */}
        <div className="mt-24 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] md:items-center">
          <div className="order-2 space-y-4 md:order-1 md:space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="h-4 w-4 rounded-full bg-emerald-500/20 text-[10px] leading-4 text-center">↑</span>
              <span>Performance</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Maximize direct bookings with Hotel Ads (paid)
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              Run Hotel Ads to promote your profile on Search and Maps. Reach travellers most likely to book and
              get additional reporting — while retaining control of your terms and conditions.
            </p>
          </div>

          <div className="order-1 relative flex justify-center md:order-2">
            <div className="absolute left-10 right-4 top-10 h-64 rounded-[40px] bg-[#0f9d58] md:h-72 lg:h-80" />
            <div className="relative z-10 w-[260px] rounded-[36px] bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden md:w-[280px] border border-zinc-800">
              <div className="relative h-[360px] w-full bg-zinc-800">
                <Image
                  src="https://lh3.googleusercontent.com/Xcg4mx-lcSrcvCX08biI45JDSY4yio-yK8lkKJtna3YKJ5128uJeLhvlOFPC-tcpkRyQeeNoaov7qfnLm4z5nd8Ld64CH9DQGkvrY4F2qfsZMG6akv0=w1920-rw"
                  alt="Hotel Ads example"
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-3 border-t border-zinc-800 bg-zinc-900 px-5 py-4">
                <button className="rounded-full bg-[#1a73e8] px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                  Google Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: New Case Study Section (From Image) */}
        <div className="mt-32 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              How WebHotelier <br />
              increased bookings<br />
              at no cost
            </h2>
            <p className="max-w-md text-zinc-400">
              In the midst of the pandemic, booking engine WebHotelier needed a cost-effective way to bring in more customers across their 6,000+ hotels. Discover how free booking links helped them accomplish their goal.
            </p>
            <a href="#" className="inline-block text-red-700 font-medium hover:underline">
              Read success story
            </a>
            
            {/* Quote Block */}
            <div className="pt-8 border-t border-zinc-800">
              <span className="text-4xl text-red-500 font-serif">"</span>
              <p className="text-lg text-zinc-200 mt-[-10px]">
                We're thrilled that hotels working with WebHotelier saw more than $4.7M in additional revenue from free booking links this summer.
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-500">
                Apostolos Tsakpinis, CTO and founder, WebHotelier
              </p>
            </div>
          </div>

          <div className="relative">
            {/* 25% Increase Badge */}
            <div className="absolute -left-6 bottom-12 z-20 bg-red-700 p-6 rounded-2xl rounded-br-none shadow-xl min-w-[140px]">
                <div className="text-white text-xl">↑</div>
                <div className="text-3xl font-bold text-white">25 %</div>
                <div className="text-xs text-blue-100">increase in bookings</div>
            </div>
            
            {/* Main Image Container */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
              <Image
                src="https://lh3.googleusercontent.com/Xq8vw7xP5ASh2Qg8QhMtzNEBQjhpqKPWyNurcLzeO0iVjOiPVoLnXKPSGY9P05eE4DhvWWLKdMhWeb-2U9YWZqbLsCqbU49IPJNsVAIYTeB8go1WMQ=w1920-rw"
                alt="WebHotelier Success Story"
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