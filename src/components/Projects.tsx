const projects = [
  {
    tags: ["Security", "AI", "Next.js", "TypeScript", "New"],
    title: "Introspect",
    subtitle: "Code Scanner & Security Auditor",
    description:
      "Multi-language code scanner and live server security auditor. Analyzes source code across 13 languages with 432 detection rules — finding vulnerabilities, performance issues, dead code, and leaked secrets. Probes live URLs for HTTP security headers, SSL/TLS issues, exposed files, and open ports. Includes 12 AI-powered analysis modes (Shadow CTO, Senior Code Review, Migration Planner) with bring-your-own-key support for Groq, OpenAI, and Anthropic.",
    image: "/images/introspect.png",
    link: "https://github.com/kishanpatel385/introspect",
    caseStudy: null,
  },
  {
    tags: ["Chrome Extension", "Firefox", "JavaScript"],
    title: "Quantum Autofill",
    subtitle: "Browser Extension",
    description:
      "Browser extension for Chrome and Firefox that auto-fills web forms intelligently. Installable from both Chrome Web Store and Firefox Add-ons, with a companion landing page for docs, live demo, and download links — designed to eliminate repetitive data entry across every form you touch.",
    image: "/images/quantumautofill.png",
    link: "https://kishanpatel385.github.io/quantumautofill/",
    caseStudy: null,
  },
  {
    tags: ["SaaS", "Laravel", "Node.js", "AWS", "Redis"],
    title: "Textdrip",
    subtitle: "SMS Marketing SaaS",
    description:
      "Sole backend engineer on a high-volume SMS drip-campaign platform serving thousands of businesses. Designed and shipped the entire backend stack from day one — system architecture, REST APIs, campaign automation engine, queue management with Redis, scheduled message workflows, carrier-grade messaging pipelines, and multi-tenant billing. Drove performance optimization and reliability initiatives across the full backend.",
    image: "/images/textdrip.png",
    link: "https://textdrip.com",
    caseStudy: null,
  },
  {
    tags: ["B2B Marketplace", "React.js", "Real-time", "1.5 yrs"],
    title: "GMX",
    subtitle: "B2B E-Commerce",
    description:
      "B2B marketplace connecting retailers and sellers across the supply chain. Built a dual-sided order management system with real-time order status tracking for both buyers and sellers, integrated product catalog and inventory sync, and an in-app messaging module so vendors and retailers stay aligned on pricing, delivery, and returns without leaving the platform.",
    image: "/images/gmx.png",
    link: "https://gmx.io",
    caseStudy: null,
  },
  {
    tags: ["Booking", "React.js", "Payments", "Messaging"],
    title: "SoundBNB",
    subtitle: "Studio Booking Platform",
    description:
      "Airbnb-style booking marketplace for recording studios, event spaces, and photo/video shoot locations. Designed dynamic booking flows with configurable add-ons (engineers, equipment, durations), hourly/daily availability calendars, host and guest dashboards, payment capture with holds and refunds, plus an integrated messaging system between hosts and guests to coordinate bookings.",
    image: "/images/soundbnb.png",
    link: "https://soundbnb.com",
    caseStudy: null,
  },
  {
    tags: ["Sports", "React", "Node.js", "Data"],
    title: "Odds Beater",
    subtitle: "Bookmaker Comparison",
    description:
      "Dutch-market odds aggregation platform comparing live prices across every major bookmaker. Built the complete frontend with a responsive comparison table, filtering and alerts, plus backend integrations pulling real-time odds feeds for football, tennis, basketball, and more — helping bettors spot the best line across hundreds of markets in a single view.",
    image: "/images/oddsbeater.png",
    link: "https://oddsbeater.nl",
    caseStudy: null,
  },
  {
    tags: ["Recruitment", "React", "Laravel"],
    title: "Winkhire",
    subtitle: "Recruitment Platform",
    description:
      "Modern recruitment marketplace matching candidates with employers through smart role-based matching. Built candidate and employer dashboards, application tracking with pipeline stages, real-time candidate–recruiter chat, resume parsing, advanced search and filters, and interview scheduling — turning a fragmented hiring process into a single, guided workflow.",
    image: "/images/winkhire.png",
    link: "https://nyusoft.com/casestudy/winkhire/",
    caseStudy: null,
  },
  {
    tags: ["Marketplace", "React", "Bookings", "Payments"],
    title: "WorknStay",
    subtitle: "Short-Term Rental Marketplace",
    description:
      "Short-term rental platform built for flexible, remote-work-friendly stays. Shipped listing management with rich media, availability calendars with dynamic pricing, multi-step booking flows, host and guest dashboards, review & rating systems, and integrated payment processing with secure deposit holds — covering the full marketplace experience end-to-end.",
    image: "/images/worknstay.png",
    link: "https://nyusoft.com/casestudy/sort-term-rental-platform/",
    caseStudy: null,
  },
  {
    tags: ["AI", "Fintech", "React", "Node.js"],
    title: "SmartVerc",
    subtitle: "AI Portfolio Management",
    description:
      "AI-powered portfolio management platform for individual and institutional investors. Built intelligent analytics dashboards with live market data, AI-driven risk scoring, automated rebalancing suggestions, and personalized investment insights — surfacing smart recommendations at scale while keeping the UX approachable for non-technical users.",
    image: "/images/smartverc.png",
    link: "https://nyusoft.com/casestudy/ai-powered-portfolio-management-system/",
    caseStudy: null,
  },
  {
    tags: ["Marketplace", "React", "Booking", "Payments"],
    title: "Loncani",
    subtitle: "Salon Marketplace",
    description:
      "End-to-end salon marketplace connecting clients with local stylists and beauty professionals. Built rich stylist profiles with portfolios, services and pricing, appointment booking with time-slot management, real-time availability, secure payment processing, review & rating systems, and post-appointment follow-ups — a frictionless beauty-service booking experience from discovery to payout.",
    image: "/images/loncani.webp",
    link: "https://nyusoft.com/casestudy/salon-marketplace-solution/",
    caseStudy: null,
  },
  {
    tags: ["EdTech", "Laravel", "CodeIgniter", "Symfony"],
    title: "Teachers Australia",
    subtitle: "Tutoring Platform",
    description:
      "Platform connecting Australian students with qualified tutors for in-person and online sessions across primary, secondary, and tertiary education. Built advanced search and subject-based filtering, real-time tutor location tracking, session booking with calendar sync, lesson-pack purchasing, payment escrow, and a review system — serving students, parents, and tutors from a single codebase.",
    image: "/images/teacherautralia.jpg",
    link: "https://nyusoft.com/casestudy/teachers-australia/",
    caseStudy: null,
  },
  {
    tags: ["HealthTech", "React", "Secure Data"],
    title: "ProtechDNA",
    subtitle: "Genetic Testing Platform",
    description:
      "Genetic testing and DNA analytics platform serving both clinicians and consumers. Built test-kit ordering flows, lab-integration pipelines for sample intake, secure and HIPAA-conscious result dashboards with detailed trait & health reports, clinician portals for oversight, and patient-facing personalized insights — bringing lab-grade genetic data into an intuitive web experience.",
    image: "/images/protechdna.webp",
    link: "https://nyusoft.com/casestudy/protechdna/",
    caseStudy: null,
  },
];

const paragraphStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#6B5E55",
  maxWidth: "720px",
  margin: "0 auto",
  textAlign: "center",
} as React.CSSProperties;

export default function Projects() {
  return (
    <section id="work" className="relative" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div className="container-main">
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <span className="section-label">Selected Work</span>
          <h2 className="section-heading">
            Things I&apos;ve <span className="italic-accent">built</span>.
          </h2>
          <p style={paragraphStyle}>Real products. Real users. Real scale.</p>
        </div>
      </div>

      {(() => {
        const mid = Math.ceil(projects.length / 2);
        const rowOne = projects.slice(0, mid);
        const rowTwo = projects.slice(mid);
        const renderCard = (project: typeof projects[number], i: number) => (
          <div
            key={`${project.title}-${i}`}
            className="work-row"
          >
            <div className="work-row-media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="work-row-content">
              <div className="work-row-tags">
                {project.tags.map((t) => (
                  <span key={t} className="work-row-tag">{t}</span>
                ))}
              </div>
              <h3 className="work-row-title">
                {project.title}
                <span className="work-row-subtitle"> — {project.subtitle}</span>
              </h3>
              <p className="work-row-desc">{project.description}</p>
            </div>
          </div>
        );
        return (
          <>
            <div className="work-marquee">
              <div className="work-track">
                {[...rowOne, ...rowOne].map(renderCard)}
              </div>
            </div>
            <div className="work-marquee" style={{ marginTop: "1.5rem" }}>
              <div className="work-track work-track--reverse">
                {[...rowTwo, ...rowTwo].map(renderCard)}
              </div>
            </div>
          </>
        );
      })()}
    </section>
  );
}
