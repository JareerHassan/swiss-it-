export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-digital-experiences-for-modern-travellers",
    title: "Designing digital experiences for modern travellers",
    date: "March 2026",
    readingTime: "6 min read",
    summary:
      "How we combine research, UX and engineering to create frictionless journeys across devices.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    featured: true,
    content: [
      "Modern travellers expect more than a beautiful landing page. They move between mobile, desktop and in-person touchpoints without thinking about channels. Your digital experience needs to feel coherent across all of them.",
      "At Highland Group, we start with journeys instead of screens. We map what travellers are trying to do – from inspiration to booking to post-trip support – and then design simple, focused flows that remove friction at each step.",
      "From there, we collaborate closely with engineering to ensure the visual design, performance and interactions work together. Small details like load states, error handling and localisation can make the difference between a drop-off and a booking.",
    ],
  },
  {
    slug: "structuring-a-product-discovery-sprint",
    title: "From idea to launch: structuring a product discovery sprint",
    date: "February 2026",
    readingTime: "5 min read",
    summary:
      "A simple framework we use with teams to move from assumptions to validated concepts.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    featured: false,
    content: [
      "Many teams jump straight from idea to backlog. A short, well-structured discovery sprint reduces risk by testing the riskiest assumptions before significant build work begins.",
      "We typically run 1–2 week discovery sprints that combine stakeholder interviews, lightweight research, prototype design and quick user validation. The goal is not to design the entire product, but to get enough signal to make confident decisions.",
      "The outcome is a clear problem statement, a small set of validated concepts, and a prioritised roadmap that engineering can execute against without endless rework.",
    ],
  },
  {
    slug: "when-to-modernise-your-platform",
    title: "When to modernise your platform (and when not to)",
    date: "January 2026",
    readingTime: "7 min read",
    summary:
      "Signals that it might be time to refactor, plus practical steps to reduce risk.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: [
      "Every team feels the pain of an ageing platform sooner or later – slow release cycles, brittle integrations, and difficulty hiring for legacy stacks.",
      "Full rewrites are rarely the answer. Instead, we look for clear signals: security or compliance risk, hard limits on scalability, or an inability to ship meaningful changes without weeks of effort.",
      "When those signals are present, we recommend a staged modernisation. That might mean carving out services, upgrading critical components first, or introducing a new frontend layer while keeping stable back-end systems in place.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

