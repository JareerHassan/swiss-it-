export type DetailType = 'core-service' | 'value-offering' | 'case-study';

export type DetailItem = {
  slug: string;
  basePath: 'services' | 'solutions';
  type: DetailType;
  title: string;
  subtitle?: string;
  summary: string;
  image: string;
  stats?: { label: string; value: string }[];
  content: string[];
};

export const detailItems: DetailItem[] = [
  // Core Services (homepage slider)
  {
    slug: 'website-development',
    basePath: 'services',
    type: 'core-service',
    title: 'Business Website Development',
    subtitle: 'Modern websites designed to convert',
    summary:
      'We build fast, professional, and conversion-focused websites that help businesses strengthen their online presence, generate more inquiries, and support long-term growth.',
    image: '/assets/img-13.png',
    stats: [
      { label: 'Typical timeline', value: '6–10 weeks' },
      { label: 'Focus', value: 'Performance, UX, conversions' },
    ],
    content: [
      'Your website should do more than look good — it should help your business grow. We create websites that are designed to build trust, communicate value clearly, and turn visitors into real customers.',
      'From structure and messaging to design and user experience, every part of the website is built with purpose. We focus on clarity, usability, and strong calls to action that guide users toward inquiries, bookings, or sales.',
      'All websites are fully responsive, SEO-ready, and optimized for speed and performance. You also get a scalable foundation that is easy to manage and ready to support your business as it grows.',
    ],
  },
  {
    slug: 'digital-marketing',
    basePath: 'services',
    type: 'core-service',
    title: 'Digital Marketing',
    subtitle: 'Reach the right audience and grow with confidence',
    summary:
      'We help businesses generate qualified traffic, stronger visibility, and better results through SEO, paid campaigns, and data-driven digital marketing strategies.',
    image: '/assets/img-16.png',
    stats: [
      { label: 'Typical engagement', value: '3–6 months' },
      { label: 'Channels', value: 'SEO, Google Ads, Social Media' },
    ],
    content: [
      'Digital marketing works best when it is aligned with real business goals. We build strategies focused on attracting the right audience, improving lead quality, and increasing measurable results.',
      'Our work can include SEO, Google Ads, paid social campaigns, landing page improvements, and content positioning. Every campaign is built around outcomes such as more leads, more bookings, or stronger brand visibility.',
      'We continuously review performance, optimize campaigns, and improve efficiency over time. The goal is not just more traffic, but better traffic that is more likely to convert.',
    ],
  },
  {
    slug: 'mobile-app-development',
    basePath: 'services',
    type: 'core-service',
    title: 'Mobile App Development',
    subtitle: 'Custom apps that support customer experience and operations',
    summary:
      'We develop practical mobile applications that help businesses improve service delivery, simplify processes, and stay connected with customers.',
    image: '/assets/img-15.png',
    stats: [
      { label: 'Platforms', value: 'iOS, Android' },
      { label: 'Use cases', value: 'Bookings, services, internal tools' },
    ],
    content: [
      'Mobile apps can create better customer experiences and make day-to-day operations more efficient. We design and develop apps that are intuitive, reliable, and aligned with your business goals.',
      'Whether you need a customer-facing booking app, a service platform, or an internal tool for your team, we focus on building solutions that are practical, easy to use, and ready for real-world usage.',
      'Our development approach prioritizes performance, scalability, and long-term maintainability, so your app continues to deliver value as your business evolves.',
    ],
  },
  {
    slug: 'hotel-booking-systems',
    basePath: 'services',
    type: 'core-service',
    title: 'Hotel Direct Booking Solutions',
    subtitle: 'Increase direct reservations and reduce commission pressure',
    summary:
      'We create booking-focused hotel websites and digital systems that help hospitality businesses drive more direct bookings and reduce dependence on OTAs.',
    image: '/assets/img-14.png',
    stats: [
      { label: 'Focus', value: 'Direct bookings' },
      { label: 'Typical result', value: '+25% more direct bookings' },
    ],
    content: [
      'Many hotels lose revenue through third-party commissions and limited control over the guest journey. We help you strengthen your direct booking channel with a website and booking experience built around conversions.',
      'From room presentation and offer visibility to mobile-friendly booking flows, every element is designed to make reservations easier and more appealing for guests booking directly.',
      'Our solutions can integrate with your existing systems and are built to improve margins, increase direct sales, and help you build stronger relationships with your guests.',
    ],
  },
  {
    slug: 'ai-automation',
    basePath: 'services',
    type: 'core-service',
    title: 'AI & Business Automation',
    subtitle: 'Automate repetitive work and improve operational efficiency',
    summary:
      'We implement practical AI and automation systems that help businesses save time, respond faster, and streamline customer and internal workflows.',
    image: '/assets/img-17.jpeg',
    stats: [
      { label: 'Impact areas', value: 'Support, sales, operations' },
      { label: 'Approach', value: 'Practical automation' },
    ],
    content: [
'Many businesses lose valuable time on repetitive tasks that can be automated. We help you leverage AI automation to streamline operations using chatbots, WhatsApp assistants, lead capture systems, and intelligent workflows.',
      'These solutions can handle common inquiries, qualify leads, reduce manual coordination, and improve consistency across customer interactions and internal processes.',
      'The result is a faster, more efficient operation that frees your team to focus on higher-value work like service quality, customer relationships, and growth.',
    ],
  },
  {
    slug: 'consulting-growth-support',
    basePath: 'services',
    type: 'core-service',
    title: 'Consulting & Growth Support',
    subtitle: 'Strategic guidance to improve systems, performance, and growth',
    summary:
      'We provide business and digital consulting to help companies make smarter decisions, improve execution, and build stronger foundations for sustainable growth.',
    image: '/assets/img-20.jpg',
    stats: [
      { label: 'Focus areas', value: 'Strategy, systems, growth' },
      { label: 'Approach', value: 'Hands-on and practical' },
    ],
    content: [
      'Growth requires more than good ideas — it needs the right systems, priorities, and execution. We work with businesses to identify bottlenecks, uncover opportunities, and build a clearer path forward.',
      'Our consulting support can include digital strategy, process improvement, customer journey optimization, offer positioning, and guidance on where technology can create the most value.',
      'We bring a practical, results-focused approach that helps you make confident decisions, improve performance, and build a stronger business over time.',
    ],
  },

  // Value Offerings (homepage "Value Offerings" section)
  {
    slug: 'increase-revenue',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Increase Revenue by Up to 25%',
    summary:
      'We help businesses unlock more revenue by improving conversions, increasing customer value, and optimizing the full digital customer journey.',
    image: '/assets/img-7.jpg',
    content: [
      'Many businesses already have enough traffic but are not converting enough of it into revenue. We focus on improving the parts of your digital journey that directly impact results.',
      'By refining your website structure, user experience, offers, and calls to action, we make it easier for visitors to become paying customers.',
      'We also look at upsells, repeat business opportunities, and value communication so your business can increase both conversion rate and average customer value.',
    ],
  },
  {
    slug: 'reduce-costs',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Reduce OTA and Third-Party Dependence',
    summary:
      'Build stronger direct channels and keep more of your revenue by reducing reliance on third-party platforms and commission-heavy intermediaries.',
    image: '/assets/img-8.jpg',
    content: [
      'Overdependence on third-party platforms can reduce profitability and limit control over your customer relationships. We help businesses strengthen their own digital channels so they can keep more of what they earn.',
      'This can include better websites, stronger direct booking flows, smarter marketing, and clearer communication that encourages customers to come to you first.',
      'The goal is not to eliminate external platforms entirely, but to create a healthier balance where your business has more control, better margins, and stronger long-term resilience.',
    ],
  },
  {
    slug: 'save-time',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Reduce Manual Work by Up to 40%',
    summary:
      'We help businesses save time and improve efficiency by automating repetitive tasks and simplifying everyday workflows.',
    image: '/assets/img-9.jpg',
    content: [
      'Manual processes often slow teams down and create unnecessary errors. We identify repetitive tasks that can be simplified or automated to improve day-to-day efficiency.',
      'From inquiry handling and booking coordination to internal workflows and data movement, we introduce systems that reduce friction and save valuable staff time.',
      'This allows your team to focus less on repetitive administration and more on customer service, growth, and high-impact work.',
    ],
  },
  {
    slug: 'more-leads',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Improve Customer Response Time by Up to 60%',
    summary:
      'Faster responses lead to better customer experiences and more conversions. We help businesses improve speed through smarter systems and automation.',
    image: '/assets/img-10.jpeg',
    content: [
      'Response time has a direct impact on conversions. When businesses respond too slowly, valuable opportunities are often lost to faster competitors.',
      'We implement communication systems and automated workflows that ensure inquiries are acknowledged and handled quickly, even outside normal working hours.',
      'The result is a more responsive business, better customer satisfaction, and a stronger chance of turning inquiries into confirmed customers.',
    ],
  },
  {
    slug: 'better-conversion',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Generate More Qualified Leads',
    summary:
      'Attract better-fit customers and improve lead quality through stronger positioning, clearer messaging, and smarter conversion paths.',
    image: '/assets/img-19.png',
    content: [
      'Not every inquiry is equally valuable. We help businesses attract people who are more aligned with their services, offers, and pricing.',
      'Through better messaging, targeting, landing page structure, and clearer value communication, we help filter out low-intent traffic and improve lead quality.',
      'This leads to stronger conversations, better conversion rates, and less time wasted on leads that are unlikely to become customers.',
    ],
  },

  // Case Studies (homepage "Case Studies" section)
  {
    slug: 'ai-automation-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Faster Responses Through AI Automation',
    summary:
      'How a hospitality business improved response speed and customer engagement by introducing AI-powered communication workflows.',
    image: '/assets/img-17.png',
    content: [
      'A hospitality business was managing inquiries across multiple channels and struggling to respond quickly during busy periods. This created delays, missed opportunities, and an inconsistent customer experience.',
      'We introduced an AI-powered assistant to handle common questions instantly, capture inquiry details, and direct more complex requests to the appropriate team members.',
      'With faster replies and better routing, the business improved response times, increased operational efficiency, and created more opportunities to convert inquiries into bookings.',
    ],
  },
  {
    slug: 'hotel-booking-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Boosting Direct Bookings and Hotel Profitability',
    summary:
      'A hospitality-focused website redesign that helped a hotel increase direct reservations and reduce third-party commission pressure.',
    image: '/assets/img-15.png',
    content: [
      'The hotel depended heavily on OTAs, which reduced profit margins and limited direct guest relationships. Their existing website was not doing enough to convert visitors into direct bookings.',
      'We redesigned the website around a clearer booking journey, stronger trust signals, improved room presentation, and a more seamless reservation experience across devices.',
      'The result was stronger direct booking performance, reduced commission dependence, and a healthier long-term revenue mix for the business.',
    ],
  },
  {
    slug: 'lead-engine-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Turning an Outdated Website into a Lead Engine',
    summary:
      'A strategic website transformation that helped a business generate more qualified inquiries and build a stronger digital presence.',
    image: '/assets/img-18.jpeg',
    content: [
      'The business had a solid reputation offline, but its outdated website did not reflect its value and was not effectively turning traffic into leads.',
      'We reworked the structure, messaging, design, and content strategy to create a more modern experience with a clear value proposition and stronger user journey.',
      'After the redesign, the business saw a consistent improvement in lead quality, more inquiry opportunities, and less reliance on referrals alone.',
    ],
  },
];

export function getDetailBySlug(basePath: 'services' | 'solutions', slug: string): DetailItem | undefined {
  return detailItems.find((item) => item.basePath === basePath && item.slug === slug);
}

