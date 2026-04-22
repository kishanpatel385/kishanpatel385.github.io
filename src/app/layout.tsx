import type { Metadata } from "next";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

const SITE_URL = "https://kishanpatel385.github.io";
const SITE_TITLE = "Kishan Patel — Senior Full-Stack Developer & Team Lead";
const SITE_DESC =
  "Senior Full-Stack Developer & Team Lead with 11+ years shipping production SaaS, APIs, and AI products. Expert in Laravel, Node.js, React, Next.js, AWS, and Claude/MCP integrations. Available for contract, full-time, and consulting — remote worldwide from Ahmedabad, India.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kishan Patel",
  alternateName: "Kishan",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.png`,
  jobTitle: "Senior Full-Stack Developer & Team Lead",
  description: SITE_DESC,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "mailto:kishanpatel385@gmail.com",
  telephone: "+91-97146-56324",
  sameAs: [
    "https://github.com/kishanpatel385",
    "https://www.linkedin.com/in/kishanpatel385",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "SaaS Architecture",
    "Laravel",
    "Node.js",
    "Next.js",
    "React",
    "Angular",
    "TypeScript",
    "PHP",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Claude API",
    "MCP Servers",
    "AI Agents",
    "RAG Pipelines",
    "System Architecture",
    "Backend Development",
    "REST APIs",
    "GraphQL",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Full-Stack Developer",
    occupationLocation: { "@type": "Country", name: "India" },
    skills:
      "Laravel, Node.js, React, Next.js, TypeScript, AWS, PostgreSQL, MongoDB, Redis, Claude API, MCP, RAG",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Kishan Patel",
  },
  description: SITE_DESC,
  applicationName: "Kishan Patel",
  authors: [{ name: "Kishan Patel", url: SITE_URL }],
  creator: "Kishan Patel",
  publisher: "Kishan Patel",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Kishan Patel",
    "Senior Full-Stack Developer",
    "Team Lead",
    "Full Stack Engineer",
    "Laravel Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AWS Engineer",
    "Backend Architecture",
    "SaaS Developer",
    "AI Product Developer",
    "Claude API Developer",
    "MCP Server Developer",
    "RAG Pipeline Engineer",
    "REST API Developer",
    "GraphQL Developer",
    "Ahmedabad Developer",
    "India Full Stack Developer",
    "Remote Senior Developer",
    "Freelance Senior Developer",
    "Hire Full-Stack Developer",
    "Portfolio",
  ],
  category: "Technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Kishan Patel",
    title: SITE_TITLE,
    description: SITE_DESC,
    locale: "en_US",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Kishan Patel — Senior Full-Stack Developer & Team Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/images/hero.png"],
    creator: "@kishanpatel385",
    site: "@kishanpatel385",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg?v=3", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=3",
    apple: [{ url: "/favicon.svg?v=3", type: "image/svg+xml" }],
  },
  verification: {
    // Add real values if / when you set these up
    // google: "XXXXXXXXXXXX",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e2e6ac" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..700&family=Fraunces:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="cursor-dot" aria-hidden />
        <div className="cursor-outline" aria-hidden />
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
