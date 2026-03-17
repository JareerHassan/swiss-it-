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
      'A structured approach to improving conversion rates, average order value and customer lifetime value.',
    image: '/assets/img-7.jpg',
    content: [
      'Revenue growth rarely comes from a single big change. We look at the entire journey – from first impression to repeat business – and identify small, compounding improvements.',
      'Typical levers include better landing pages, clearer offers, improved pricing presentation and smarter remarketing.',
      'We work with your team to prioritise experiments, measure impact and keep what works.',
    ],
  },
  {
    slug: 'reduce-costs',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Reduce OTA and Third-Party Dependence',
    summary:
      'Strengthen your direct channels so you rely less on intermediaries and keep more of each booking.',
    image: '/assets/img-8.jpg',
    content: [
      'Our goal is not to eliminate OTAs, but to rebalance your mix. We do this by improving direct discovery, simplifying booking flows and giving guests a clear reason to book direct.',
      'We also look at your internal processes to remove unnecessary manual steps that add hidden costs.',
    ],
  },
  {
    slug: 'save-time',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Reduce Manual Work by Up to 40%',
    summary:
      'Automation and system design that remove repetitive tasks from your team’s day-to-day workload.',
    image: '/assets/img-9.jpg',
    content: [
      'We start with a simple mapping of where your team spends time today. From there, we propose targeted automations that pay off quickly.',
      'Examples include automated responses, smarter routing of enquiries, and better integrations between tools you already use.',
    ],
  },
  {
    slug: 'more-leads',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Improve Customer Response Time by Up to 60%',
    summary:
      'Faster, more consistent responses that turn more enquiries into confirmed bookings or sales.',
    image: '/assets/img-10.jpeg',
    content: [
      'Slow or inconsistent responses cause high-intent leads to drop away. We help you design simple flows that ensure every enquiry is acknowledged and followed up quickly.',
      'Where appropriate, we introduce automation to handle common questions so your team can focus on the conversations that matter most.',
    ],
  },
  {
    slug: 'better-conversion',
    basePath: 'solutions',
    type: 'value-offering',
    title: 'Generate More Qualified Leads',
    summary:
      'Positioning, content and forms that attract the right people and filter out noise.',
    image: '/assets/img-11.jpg',
    content: [
      'We refine your messaging and on-site content so the people who arrive understand quickly whether you are a good fit.',
      'Through clear calls to action and well-designed enquiry flows, we help you collect the context you need to respond effectively.',
    ],
  },

  // Case Studies (homepage "Case Studies" section)
  {
    slug: 'ai-automation-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Faster Responses Through AI Automation',
    summary:
      'How a hospitality business reduced response times and increased booking enquiries with a practical AI assistant.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80',
    content: [
      'A mid-sized hospitality group was struggling to respond quickly to enquiries across email, chat and messaging apps.',
      'We implemented an AI assistant that could answer common questions, propose suitable offers and hand over to human staff when needed.',
      'Within weeks, response times improved significantly and the team had more time to focus on high-value guests.',
    ],
  },
  {
    slug: 'hotel-booking-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Boosting Direct Bookings and Hotel Profitability',
    summary:
      'A direct booking experience that helped a hotel shift more reservations away from OTAs.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1280&q=80',
    content: [
      'A hotel client wanted to depend less on online travel agencies and build stronger direct relationships with guests.',
      'We redesigned their website around clear offers, transparent pricing and a frictionless booking flow integrated with their existing systems.',
      'Over time, the share of direct bookings increased, improving margins without sacrificing occupancy.',
    ],
  },
  {
    slug: 'lead-engine-case',
    basePath: 'services',
    type: 'case-study',
    title: 'Turning an Outdated Website into a Lead Engine',
    summary:
      'A modernised site and SEO improvements that led to a significant increase in qualified enquiries.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1280&q=80',
    content: [
      'An established services business was relying on referrals and an outdated website that no longer reflected their capabilities.',
      'We worked with their team to refresh the brand, clarify positioning and rebuild the site around concrete outcomes.',
      'Combined with targeted SEO improvements, this led to a steady increase in high-quality inbound leads.',
    ],
  },
];

export function getDetailBySlug(basePath: 'services' | 'solutions', slug: string): DetailItem | undefined {
  return detailItems.find((item) => item.basePath === basePath && item.slug === slug);
}

