'use client';

import Image from 'next/image';
import { useRef, useCallback, useState, useEffect } from 'react';
import { CloudSun } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'things-to-do', label: 'Things to do' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'at-a-glance', label: 'At a glance' },
  { id: 'impressions', label: 'Impressions' },
  { id: 'events', label: 'Top Events' },
] as const;

const HIGHLIGHT_CARDS = [
  { title: 'Scenic viewpoints', subtitle: 'Landmark', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/teaser%20jet%20d%20eau/image%20winter/57158_20001500_1.jpeg' },
  { title: 'Old town & villages', subtitle: 'Attraction', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/gadmin/images/cities/summer/sightseeing/vieillevillegenevetourisme_oliviermiche-11_44422.jpg' },
  { title: 'Historic monuments', subtitle: 'Monument', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/05/28/10/00/22/geneva.jpg' },
  { title: 'Grand Tour route', subtitle: 'Landmark & Experience', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/gadmin/images/cities/summer/sightseeing/placedesnationsgenevetourisme_michelfrossard-1_38024.jpg' },
  { title: 'Local regions', subtitle: 'Area & Neighbourhood', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/08/19/15/16/49/carouge.jpg' },
  { title: 'Activities & tours', subtitle: 'Activity', image: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/resources/experience/e/i/einsteigerkurs-in-die-uhrmacherkunst/images%20all%20season/36764_32001800.jpeg' },
];

const AT_A_GLANCE_BLOCKS = [
  { heading: 'This is the region', body: 'A stage of the Grand Tour that brings together dramatic landscapes, historic routes and photo spots. From mountain passes to lakeside villages, you’ll discover what makes Switzerland unique.' },
  { heading: 'Discover more', body: 'The route is well signposted and can be explored by car, motorcycle or public transport. Seasonal openings apply to some high-altitude passes — check before you travel.' },
  { heading: 'Lakes and peaks', body: 'Alpine lakes and iconic peaks define this stretch. Plan stops at viewpoints and in small villages for the full experience.' },
  { heading: 'Experience for less', body: 'Look out for regional passes and combined tickets to make the most of your trip.' },
];

const IMPRESSION_IMAGES = [
  { src: 'https://media.myswitzerland.com/image/fetch/w_640,h_640,c_fill,g_auto,f_auto,q_auto,e_trim/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fcelum%20connect%2F2022%2F06%2F02%2F12%2F11%2F03%2Fgeneva-harbour-basin.jpg', alt: 'Lake and mountains' },
  { src: 'https://media.myswitzerland.com/image/fetch/w_320,h_320,c_fill,g_auto,f_auto,q_auto,e_trim/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fcelum%20connect%2F2024%2F04%2F03%2F16%2F04%2F04%2Fgeneva-christmas-market.jpg', alt: 'Old town' },
  { src: 'https://media.myswitzerland.com/image/fetch/w_320,h_320,c_fill,g_auto,f_auto,q_auto,e_trim/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fcelum%20connect%2F2022%2F04%2F26%2F09%2F17%2F06%2Fgeneva-aerial-panorama.jpg', alt: 'Mountain view' },
  { src: 'https://media.myswitzerland.com/image/fetch/w_320,h_320,c_fill,g_auto,f_auto,q_auto,e_trim/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fcelum%20connect%2F2022%2F08%2F19%2F15%2F16%2F49%2Fcarouge.jpg', alt: 'Local cuisine' },
  { src: 'https://media.myswitzerland.com/image/fetch/w_320,h_320,c_fill,g_auto,f_auto,q_auto,e_trim/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fcelum%20connect%2F2022%2F08%2F17%2F18%2F23%2F59%2Fgeneva.jpg', alt: 'Scenic road' },
];

const TOP_EVENTS = [
  { title: 'Alpine festivals', date: 'Seasonal', type: 'Culture' },
  { title: 'Local markets', date: 'Weekly', type: 'Markets' },
  { title: 'Outdoor events', date: 'Summer', type: 'Experiences' },
];

type AttractionDetailLayoutProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  category?: string;
};

const SCROLL_OFFSET = 100;

export default function AttractionDetailLayout({
  title,
  description,
  imageSrc,
  imageAlt,
  category = 'Experience',
}: AttractionDetailLayoutProps) {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<(typeof NAV_ITEMS)[number]['id']>(NAV_ITEMS[0].id);
  const [impressionsFilter, setImpressionsFilter] = useState<'image' | 'video'>('image');

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + SCROLL_OFFSET + 60;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].id;
        const el = sectionRefs.current[id];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-charcoal antialiased" style={{ scrollBehavior: 'smooth' }}>
      {/* 1. Hero: full-width image + centered heading only */}
      <header className="relative h-[70vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="relative z-10 text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
      </header>

      {/* 2. Nav bar below hero – accent underline for active */}
      <nav className="sticky top-0 z-40 border-b border-border-light bg-bg-main">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex min-w-max gap-6 py-4" role="navigation" aria-label="Page sections">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`relative whitespace-nowrap pb-1 text-sm font-medium transition-colors
                    ${activeSection === id ? 'text-charcoal' : 'text-muted hover:text-charcoal'}`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-red" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="bg-bg-main">
        {/* 3. Overview: two columns – intro text + widget card (e.g. Weather today) */}
        <section
          id="overview"
          ref={setRef('overview')}
          className="scroll-mt-28 border-b border-border-light bg-bg-soft py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[1fr,minmax(260px,320px)] md:items-start">
              <div>
                <p className="text-[15px] leading-[1.8] text-charcoal sm:text-base">
                  {description}
                </p>
              </div>
              <div className="rounded-2xl border border-border-light bg-bg-main p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Weather today</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-bg-soft">
                    <CloudSun className="h-8 w-8 text-accent-red/90" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-charcoal">14°</p>
                    <p className="text-sm text-muted">Mostly sunny</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Things to do – short teaser */}
        <section
          id="things-to-do"
          ref={setRef('things-to-do')}
          className="scroll-mt-28 border-b border-border-light py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-semibold text-charcoal sm:text-2xl">Things to do</h2>
            <p className="max-w-2xl text-[15px] leading-[1.8] text-muted sm:text-base">
              Explore scenic routes, photo spots, local culture and activities along this stage of the Grand Tour.
              From driving and hiking to village visits and regional cuisine, there’s something for every traveller.
            </p>
          </div>
        </section>

        {/* 5. Highlights – grid of image cards (image + title + subtitle) */}
        <section
          id="highlights"
          ref={setRef('highlights')}
          className="scroll-mt-28 border-b border-border-light bg-bg-soft py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-xl font-semibold text-charcoal sm:text-2xl">Highlights</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHLIGHT_CARDS.map((card) => (
                <article key={card.title} className="group overflow-hidden rounded-xl border border-border-light bg-bg-main transition-colors hover:border-border-light hover:shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-semibold text-white">{card.title}</h3>
                      <p className="text-xs text-white/90">{card.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. At a glance – text blocks (bold sub-headings) + right column (map/visual + logos) */}
        <section
          id="at-a-glance"
          ref={setRef('at-a-glance')}
          className="scroll-mt-28 border-b border-border-light py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-xl font-semibold text-charcoal sm:text-2xl">{title} at a glance</h2>
            <div className="grid gap-12 lg:grid-cols-[1fr,minmax(280px,360px)] lg:gap-16">
              <div className="space-y-8">
                {AT_A_GLANCE_BLOCKS.map((block) => (
                  <div key={block.heading}>
                    <h3 className="mb-2 text-base font-semibold text-charcoal">{block.heading}</h3>
                    <p className="text-[15px] leading-[1.8] text-muted">
                      {block.body}
                      {block.heading === 'Experience for less' && (
                        <>
                          {' '}
                          <a href="https://www.myswitzerland.com" target="_blank" rel="noreferrer noopener" className="text-accent-red hover:underline underline-offset-2">
                            MySwitzerland
                          </a>
                          {' '}
                          for offers.
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-light bg-bg-soft">
                  <Image
                    src={imageSrc}
                    alt={`${title} region`}
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl border border-border-light bg-bg-soft p-4 text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-charcoal">Grand Tour</p>
                  <p className="mt-1 text-xs text-muted">of Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Impressions – Image/Video toggle + gallery (large image + small grid) */}
        <section
          id="impressions"
          ref={setRef('impressions')}
          className="scroll-mt-28 border-b border-border-light bg-bg-soft py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-semibold text-charcoal sm:text-2xl">Impressions</h2>
            <div className="mb-6 flex gap-6 border-b border-border-light pb-2">
              <button
                type="button"
                onClick={() => setImpressionsFilter('image')}
                className={`text-sm font-medium transition-colors ${impressionsFilter === 'image' ? 'text-charcoal border-b-2 border-accent-red pb-0.5 -mb-0.5' : 'text-muted hover:text-charcoal'}`}
              >
                Image
              </button>
              <button
                type="button"
                onClick={() => setImpressionsFilter('video')}
                className={`text-sm font-medium transition-colors ${impressionsFilter === 'video' ? 'text-charcoal border-b-2 border-accent-red pb-0.5 -mb-0.5' : 'text-muted hover:text-charcoal'}`}
              >
                Video
              </button>
            </div>
            {impressionsFilter === 'image' ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:row-span-2 sm:aspect-auto sm:min-h-[320px]">
                  <Image
                    src={IMPRESSION_IMAGES[0].src}
                    alt={IMPRESSION_IMAGES[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                {IMPRESSION_IMAGES.slice(1, 5).map((img) => (
                  <div key={img.alt} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-border-light bg-bg-soft">
                <p className="text-muted">Video content coming soon</p>
              </div>
            )}
          </div>
        </section>

        {/* 8. Top Events */}
        <section
          id="events"
          ref={setRef('events')}
          className="scroll-mt-28 bg-bg-soft py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-xl font-semibold text-charcoal sm:text-2xl">Top Events</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {TOP_EVENTS.map((event) => (
                <article
                  key={event.title}
                  className="rounded-xl border border-border-light bg-bg-main p-5 transition-colors hover:border-border-light hover:shadow-md"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-accent-red">{event.type}</p>
                  <h3 className="mt-2 font-semibold text-charcoal">{event.title}</h3>
                  <p className="mt-1 text-sm text-muted">{event.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-light bg-bg-soft py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Grand Tour of Switzerland</p>
        </div>
      </footer>
    </div>
  );
}
