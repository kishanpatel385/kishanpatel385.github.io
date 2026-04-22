import DraggableExperienceCard from "./DraggableExperienceCard";

const experiences = [
  {
    period: "2022 — 2025",
    role: "Team Lead & Senior Full-Stack Developer",
    company: "Pranshtech Solutions",
    points: [
      "Led a team of 5 — sprint planning, code reviews, architecture, delivery",
      "Sole backend engineer on Textdrip (high-volume SMS SaaS) — owned the full stack",
      "Designed REST APIs, queue systems & drip-campaign scheduling at scale",
      "Drove performance & reliability initiatives across the backend",
    ],
  },
  {
    period: "2018 — 2022",
    role: "Senior Full-Stack Developer",
    company: "Nyusoft Solutions",
    points: [
      "Shipped 7+ production web apps — sports, education, real estate, recruitment",
      "Integrated third-party APIs, payment gateways & real-time messaging",
      "Mentored junior developers and authored internal engineering standards",
      "Core stack: React.js, Node.js, Laravel, MySQL",
    ],
  },
  {
    period: "2014 — 2018",
    role: "Senior PHP / Laravel Developer",
    company: "iDevTechnolabs",
    points: [
      "Built and maintained client apps in PHP, Laravel & CodeIgniter (MVC)",
      "RESTful APIs and third-party integrations for varied client briefs",
      "Deep experience with relational databases and backend architecture",
    ],
  },
];

const scatter = [
  { x: 60, y: 30, rot: -4, z: 3 },
  { x: 420, y: 80, rot: 4, z: 2 },
  { x: 770, y: 40, rot: -3, z: 1 },
];

const paragraphStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#6B5E55",
  maxWidth: "640px",
  margin: "0 auto",
  textAlign: "center",
} as React.CSSProperties;

export default function Experience() {
  return (
    <section id="experience" data-experience className="section-spacing">
      <div className="container-main">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <span className="section-label">Experience</span>
          <h2 className="section-heading">
            Where I&apos;ve <span className="italic-accent">worked</span>.
          </h2>
          <p style={paragraphStyle}>
            Three companies, a decade of shipping — drag the cards around to explore.
          </p>
        </div>

        <div className="exp-scatter-board">
          {experiences.map((exp, i) => {
            const s = scatter[i] || scatter[0];
            return (
              <DraggableExperienceCard
                key={exp.period}
                experience={exp}
                initialX={s.x}
                initialY={s.y}
                initialRotation={s.rot}
                initialZ={s.z}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
