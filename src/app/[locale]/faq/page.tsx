import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const faqs = [
  {
    question: "What services does Highland Group offer?",
    answer:
      "Highland Group provides end-to-end digital solutions including website development, hotel direct booking systems, AI automation, mobile app development, and digital marketing designed for business growth.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We work with hotels, tourism businesses, restaurants, clinics, real estate companies, local service businesses, and growing SMEs worldwide, serving both domestic and international clients.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Highland Group works with clients from all over the world, supporting both international and domestic businesses with scalable digital solutions.",
  },
  {
    question: "How does a typical project start?",
    answer:
      "Every project starts with a consultation where we understand your business goals, challenges, and recommend the most effective digital strategy.",
  },
  {
    question: "Can Highland Group work alongside our team?",
    answer:
      "Yes. We can act as your external digital partner or collaborate closely with your internal team to deliver results efficiently.",
  },
  {
    question: "How long do projects usually take?",
    answer:
      "Project timelines depend on scope and complexity. Websites are delivered faster, while mobile apps, booking systems, and automation solutions require more time.",
  },
  {
    question: "Do you only build new websites?",
    answer:
      "No. We also redesign, optimise, and upgrade existing websites and digital systems to improve performance and conversions.",
  },
  {
    question: "Can you help us get more direct bookings or leads?",
    answer:
      "Yes. Our systems are built to increase direct bookings, generate high-quality leads, and improve overall conversion rates.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide ongoing support, updates, optimisation, and long-term digital growth assistance.",
  },
  {
    question: "How do we get started with Highland Group?",
    answer:
      "Simply book a free consultation and our team will guide you with the best strategy for your business.",
  },
];

export const metadata: Metadata = {
  title: "FAQs | Highland Group Swiss IT Business",
  description:
    "Find answers about Highland Group services including website development, hotel booking systems, AI automation, mobile apps, digital marketing, project timelines, and support.",
  keywords: [
    "Highland Group FAQs",
    "Swiss IT company FAQ",
    "website development Switzerland FAQ",
    "hotel booking systems FAQ",
    "AI automation FAQ",
    "mobile app development FAQ",
    "digital marketing FAQ",
    "Highland Group services FAQ",
  ],
  alternates: {
    canonical: "http://highlandgroup.ch/en/faq",
  },
  openGraph: {
    title: "FAQs | Highland Group Swiss IT Business",
    description:
      "Find answers about website development, hotel booking systems, AI automation, mobile apps, digital marketing, and support.",
    url: "http://highlandgroup.ch/en/faq",
    siteName: "Highland Group",
    type: "website",
    locale: "en_CH",
    images: [
      {
        url: "http://highlandgroup.ch/logo.png",
        width: 1200,
        height: 630,
        alt: "Highland Group FAQ Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Highland Group Swiss IT Business",
    description:
      "Find answers about website development, hotel booking systems, AI automation, mobile apps, digital marketing, and support.",
    images: ["http://highlandgroup.ch/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://highlandgroup.ch/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQs",
        item: "http://highlandgroup.ch/en/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <FAQClient faqs={faqs} />
    </>
  );
}