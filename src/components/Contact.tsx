const paragraphStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "#6B5E55",
  margin: "0 auto",
  textAlign: "center",
} as React.CSSProperties;

export default function Contact() {
  return (
    <section id="contact" data-contact className="contact-section">
      <div className="container-main">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <span className="section-label">Contact</span>
          <h2 className="section-heading">
            Start a <span className="italic-accent">conversation</span>.
          </h2>
          <p style={paragraphStyle}>
            Senior engineering roles, architecture consults, or a build you need shipped — drop a message and I&apos;ll reply personally within a day.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:kishanpatel385@gmail.com"
            className="contact-card"
          >
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">kishanpatel385@gmail.com</span>
            <span className="contact-card-cta">
              Write to me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>

          <a href="tel:+919714656324" className="contact-card">
            <span className="contact-card-label">Phone</span>
            <span className="contact-card-value">+91 97146 56324</span>
            <span className="contact-card-cta">
              Give a call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>

          <div className="contact-card">
            <span className="contact-card-label">Availability</span>
            <div className="contact-status">
              <span className="contact-status-dot" />
              <span className="contact-card-value">Open for work</span>
            </div>
            <div className="contact-card-meta-stack">
              <span className="contact-card-meta">Full-time · Contract · Freelance</span>
              <span className="contact-card-meta">Mon–Fri · 10:00 AM – 7:00 PM IST</span>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-label">Location</span>
            <span className="contact-card-value">Ahmedabad, India</span>
            <span className="contact-card-meta">Remote worldwide</span>
          </div>

        </div>
      </div>
    </section>
  );
}
