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
  subtitle: 'High-converting websites built for growth',
  summary:
    'We build modern, fast, and conversion-focused websites that help businesses attract customers, generate leads, and increase revenue.',
  image: '/assets/img-13.png',
  stats: [
    { label: 'Typical timeline', value: '6–10 weeks' },
    { label: 'Focus', value: 'Performance, UX, conversions' },
  ],
  content: [
    'Your website is more than just an online presence — it is your most important sales tool. We design and develop websites that are built to convert visitors into real customers.',
    'We focus on clear messaging, modern UI/UX design, and a smooth user experience that builds trust and encourages action. Every section is structured to guide users towards inquiries, bookings, or purchases.',
    'Our websites are fully responsive, SEO-ready, and optimized for speed and performance. You also get a system that is easy to manage, so your team can update content without technical complexity.',
  ],
},
 {
  slug: 'digital-marketing',
  basePath: 'services',
  type: 'core-service',
  title: 'Digital Marketing',
  subtitle: 'Drive traffic, leads, and real business growth',
  summary:
    'We help businesses attract the right audience through SEO, paid campaigns, and data-driven marketing strategies.',
  image: '/assets/img-16.png',
  stats: [
    { label: 'Typical engagement', value: '3–6 months' },
    { label: 'Channels', value: 'SEO, Google Ads, Social Media' },
  ],
  content: [
    'Digital marketing is not just about traffic — it is about attracting the right customers who are ready to take action.',
    'We combine SEO, Google Ads, and targeted campaigns to bring qualified visitors to your website. Every campaign is built around clear goals such as lead generation, bookings, or sales.',
    'We continuously track performance, optimize campaigns, and improve results over time. The focus is always on measurable growth, not vanity metrics.',
  ],
},
 {
  slug: 'mobile-app-development',
  basePath: 'services',
  type: 'core-service',
  title: 'Mobile App Development',
  subtitle: 'Smart mobile solutions for modern businesses',
  summary:
    'Custom mobile apps designed to improve customer experience, streamline operations, and support business growth.',
  image: '/assets/img-15.png',
  stats: [
    { label: 'Platforms', value: 'iOS, Android' },
    { label: 'Use cases', value: 'Bookings, services, internal tools' },
  ],
  content: [
    'Mobile apps help businesses stay connected with customers and provide services more efficiently. We build apps that are simple, fast, and user-friendly.',
    'Whether you need a booking app, customer engagement platform, or internal business tool, we design solutions based on real business needs.',
    'Our focus is on performance, scalability, and long-term usability, ensuring your app continues to support your business as it grows.',
  ],
},
{
  slug: 'hotel-booking-systems',
  basePath: 'services',
  type: 'core-service',
  title: 'Hotel Direct Booking Solutions',
  subtitle: 'Increase direct bookings and reduce commission costs',
  summary:
    'We build booking-focused hotel websites that help increase direct reservations and reduce dependency on OTAs.',
  image: '/assets/img-14.png',
  stats: [
    { label: 'Focus', value: 'Direct bookings' },
    { label: 'Typical result', value: '+25% more direct bookings' },
  ],
  content: [
    'Many hotels lose a significant portion of their revenue to OTA commissions. We help you take control by building a direct booking system on your own website.',
    'We create a smooth and user-friendly booking experience that makes it easy for guests to check availability and confirm reservations quickly.',
    'Our solutions integrate with your existing systems and are optimized for mobile users, helping you increase bookings, improve margins, and build direct relationships with your guests.',
  ],
},
 {
  slug: 'ai-automation',
  basePath: 'services',
  type: 'core-service',
  title: 'AI & Business Automation',
  subtitle: 'Automate tasks and improve efficiency',
  summary:
    'We implement AI-powered systems that reduce manual work, improve response times, and streamline business operations.',
  image: '/assets/img-17.jpeg',
  stats: [
    { label: 'Impact areas', value: 'Support, sales, operations' },
    { label: 'Approach', value: 'Practical automation' },
  ],
  content: [
    'Businesses spend too much time on repetitive tasks. We help you automate processes using AI-powered tools such as chatbots, WhatsApp assistants, and workflow automation.',
    'These systems handle customer inquiries, capture leads, and support your team by reducing manual workload.',
    'The goal is simple: save time, respond faster, and allow your team to focus on higher-value work that drives growth.',
  ],
},

  // Value Offerings (homepage "Value Offerings" section)
 {
  slug: 'increase-revenue',
  basePath: 'solutions',
  type: 'value-offering',
  title: 'Increase Revenue by Up to 25%',
  summary:
    'We help businesses grow revenue by improving conversions, increasing customer value, and optimizing the full customer journey.',
  image: '/assets/img-7.jpg',
  content: [
    'Most businesses do not have a traffic problem — they have a conversion problem. We focus on turning your existing visitors into paying customers.',
    'By improving your website structure, offers, and user experience, we make it easier for customers to take action. Small improvements in conversion rates can lead to significant revenue growth.',
    'We also optimize pricing presentation, upsells, and repeat customer strategies to increase average order value and long-term customer value.',
  ],
},
{
  slug: 'reduce-costs',
  basePath: 'solutions',
  type: 'value-offering',
  title: 'Reduce OTA and Third-Party Dependence',
  summary:
    'Take control of your bookings and reduce commission costs by strengthening your direct channels.',
  image: '/assets/img-8.jpg',
  content: [
    'Many businesses rely heavily on third-party platforms that take a significant percentage of every transaction. Over time, this reduces profitability.',
    'We help you build strong direct channels through your own website, marketing, and booking systems, so you keep more of your revenue.',
    'The goal is not to remove platforms completely, but to create a balanced strategy where your business is no longer dependent on them.',
  ],
},
{
  slug: 'save-time',
  basePath: 'solutions',
  type: 'value-offering',
  title: 'Reduce Manual Work by Up to 40%',
  summary:
    'Automate repetitive tasks and streamline operations so your team can focus on high-value work.',
  image: '/assets/img-9.jpg',
  content: [
    'Teams often spend hours on repetitive tasks like responding to inquiries, managing bookings, or updating systems manually.',
    'We introduce automation that handles these tasks efficiently — from instant replies to workflow automation and system integrations.',
    'This reduces workload, minimizes errors, and allows your team to focus on growth, customer experience, and higher-impact activities.',
  ],
},
 {
  slug: 'more-leads',
  basePath: 'solutions',
  type: 'value-offering',
  title: 'Improve Customer Response Time by Up to 60%',
  summary:
    'Respond faster to inquiries and convert more leads into customers with smart communication systems.',
  image: '/assets/img-10.jpeg',
  content: [
    'Speed is critical when it comes to converting leads. The faster you respond, the higher your chances of closing the customer.',
    'We implement systems that ensure every inquiry is handled instantly or within minutes, not hours.',
    'With automation and better workflows, you never miss opportunities, and customers experience faster, more reliable communication.',
  ],
},
  {
  slug: 'better-conversion',
  basePath: 'solutions',
  type: 'value-offering',
  title: 'Generate More Qualified Leads',
  summary:
    'Attract the right customers and filter out low-quality inquiries with better positioning and messaging.',
  image: '/assets/img-19.png',
  content: [
    'Not all leads are valuable. We help you attract the right audience — people who are more likely to convert into paying customers.',
    'Through clear messaging, better targeting, and optimized landing pages, we ensure your business speaks directly to the right customers.',
    'This results in higher-quality inquiries, better conversion rates, and less time wasted on unqualified leads.',
  ],
},

  // Case Studies (homepage "Case Studies" section)
 {
  slug: 'ai-automation-case',
  basePath: 'services',
  type: 'case-study',
  title: 'Faster Responses Through AI Automation',
  summary:
    'How automation reduced response times and increased customer engagement for a hospitality business.',
  image:
 '/assets/img-17.png',
   content: [
    'A hospitality business was struggling to manage customer inquiries across multiple channels, leading to slow responses and missed opportunities.',
    'We implemented an AI-powered assistant that handled common questions instantly and routed complex inquiries to the right team members.',
    'As a result, response times improved significantly, customer satisfaction increased, and the business captured more booking opportunities.',
  ],
},
 {
  slug: 'hotel-booking-case',
  basePath: 'services',
  type: 'case-study',
  title: 'Boosting Direct Bookings and Hotel Profitability',
  summary:
    'A redesigned booking experience that helped a hotel increase direct reservations and reduce commission costs.',
  image:
     '/assets/img-15.png',
  content: [
    'The client relied heavily on OTAs, losing a significant portion of revenue through commissions.',
    'We redesigned their website with a focus on direct bookings, improving user experience and simplifying the booking process.',
    'The result was a steady increase in direct reservations, allowing the hotel to retain more revenue and improve overall profitability.',
  ],
},
 {
  slug: 'lead-engine-case',
  basePath: 'services',
  type: 'case-study',
  title: 'Turning an Outdated Website into a Lead Engine',
  summary:
    'A complete website transformation that increased qualified inquiries and business growth.',
  image:
    '/assets/img-18.jpeg',
  content: [
    'The business had a strong reputation but an outdated website that failed to convert visitors into leads.',
    'We redesigned the website with a clear value proposition, improved structure, and optimized content for search engines.',
    'This resulted in a consistent increase in high-quality inquiries and reduced dependence on referrals.',
  ],
},
];

export function getDetailBySlug(basePath: 'services' | 'solutions', slug: string): DetailItem | undefined {
  return detailItems.find((item) => item.basePath === basePath && item.slug === slug);
}

